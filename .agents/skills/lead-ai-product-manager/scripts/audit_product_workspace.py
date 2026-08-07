#!/usr/bin/env python3
"""Read-only product-artifact inventory and advisory lifecycle audit."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


PHASES = [
    ("opportunity", ("journey", "problem", "interview", "persona", "research")),
    ("direction", ("vision", "objective", "okr", "key-result", "product-brief", "business-flow")),
    ("options-roadmap", ("option", "roadmap", "priorit", "decision", "factor", "scorecard")),
    ("validation", ("prototype", "usability", "concept-test", "validation", "feasibility")),
    ("delivery", ("backlog", "story", "requirement", "acceptance", "delivery", "traceability")),
    ("launch-operate", ("launch", "release", "rollout", "rollback", "incident", "runbook", "sunset")),
    ("measure-iterate", ("metric", "analytics", "experiment", "readout", "retrospective", "iteration")),
]

REQUIRED = {
    "opportunity": ("journey", "problem", "evidence"),
    "direction": ("vision", "objective", "non-goal"),
    "options-roadmap": ("factor", "decision", "option"),
    "validation": ("prototype", "success", "finding"),
    "delivery": ("backlog", "acceptance", "owner", "dependency"),
    "launch-operate": ("rollout", "rollback", "monitor", "support"),
    "measure-iterate": ("definition", "baseline", "result", "recommendation"),
}

IGNORED = {".git", "node_modules", ".next", "dist", "build", "vendor"}


def inventory(root: Path) -> list[str]:
    files: list[str] = []
    for path in root.rglob("*"):
        if not path.is_file() or any(part in IGNORED for part in path.parts):
            continue
        files.append(path.relative_to(root).as_posix())
    return sorted(files)


def audit(root: Path) -> dict:
    files = inventory(root)
    searchable = "\n".join(files).lower().replace("_", "-")
    phase_hits = {
        phase: sorted({term for term in terms if term in searchable})
        for phase, terms in PHASES
    }
    inferred = "opportunity"
    for phase, _ in PHASES:
        if phase_hits[phase]:
            inferred = phase
    missing = [term for term in REQUIRED[inferred] if term not in searchable]
    return {
        "root": str(root.resolve()),
        "mode": "read-only",
        "advisory_phase": inferred,
        "phase_hits": phase_hits,
        "missing_filename_signals_for_advisory_phase": missing,
        "file_count": len(files),
        "files": files,
        "limitations": [
            "Filename signals do not prove artifact quality or gate readiness.",
            "Only an accountable human changes official lifecycle state.",
        ],
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("root", type=Path)
    parser.add_argument("--output", type=Path, help="Optional explicit JSON output path")
    args = parser.parse_args()
    if not args.root.is_dir():
        parser.error(f"not a directory: {args.root}")
    result = audit(args.root)
    payload = json.dumps(result, indent=2) + "\n"
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(payload, encoding="utf-8")
    print(payload, end="")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
