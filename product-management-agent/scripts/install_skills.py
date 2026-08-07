#!/usr/bin/env python3
"""Install the repository's product skills without overwriting existing skills."""

from __future__ import annotations

import argparse
import shutil
from pathlib import Path


SKILLS = (
    "lead-ai-product-manager",
    "discover-product-opportunity",
    "define-product-direction",
    "prioritize-product-roadmap",
    "validate-product-concept",
    "plan-product-delivery",
    "launch-and-operate-product",
    "measure-and-iterate-product",
)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, type=Path, help="Directory containing canonical skill folders")
    parser.add_argument("--destination", required=True, type=Path, help="Exact Codex skills directory")
    args = parser.parse_args()

    missing = [name for name in SKILLS if not (args.source / name / "SKILL.md").is_file()]
    if missing:
        parser.error("missing canonical skills: " + ", ".join(missing))

    conflicts = [name for name in SKILLS if (args.destination / name).exists()]
    if conflicts:
        parser.error(
            "refusing to overwrite existing skills: " + ", ".join(conflicts)
            + ". Move or review them explicitly before reinstalling."
        )

    args.destination.mkdir(parents=True, exist_ok=True)
    installed: list[str] = []
    try:
        for name in SKILLS:
            shutil.copytree(args.source / name, args.destination / name)
            installed.append(name)
    except Exception:
        for name in reversed(installed):
            shutil.rmtree(args.destination / name)
        raise

    for name in installed:
        print(args.destination / name)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
