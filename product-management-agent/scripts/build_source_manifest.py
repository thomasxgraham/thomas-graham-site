#!/usr/bin/env python3
"""Build a deterministic SHA-256 manifest for preserved source artifacts."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path


def hash_file(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("source_dir", type=Path)
    parser.add_argument("output", type=Path)
    args = parser.parse_args()
    if not args.source_dir.is_dir():
        parser.error(f"not a directory: {args.source_dir}")

    files = []
    for path in sorted(args.source_dir.rglob("*")):
        if not path.is_file():
            continue
        files.append({
            "path": path.relative_to(args.source_dir).as_posix(),
            "bytes": path.stat().st_size,
            "sha256": hash_file(path),
            "suffix": path.suffix.lower(),
        })

    payload = {
        "format": "product-source-manifest-v1",
        "source_root": args.source_dir.name,
        "file_count": len(files),
        "total_bytes": sum(item["bytes"] for item in files),
        "files": files,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {len(files)} source records to {args.output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
