#!/usr/bin/env python3
"""Validate a traceable CSV product backlog."""

from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path


REQUIRED = {
    "id", "title", "objective_id", "evidence_ids", "requirement",
    "acceptance_criteria", "owner", "dependencies", "size", "status", "verification",
}
PLACEHOLDERS = {"", "tbd", "todo", "unknown", "unassigned", "answer", "example"}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("csv_file", type=Path)
    args = parser.parse_args()
    with args.csv_file.open(newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        missing = REQUIRED - set(reader.fieldnames or [])
        if missing:
            parser.error("missing columns: " + ", ".join(sorted(missing)))
        rows = list(reader)

    errors: list[str] = []
    ids = [row["id"].strip() for row in rows]
    if len(ids) != len(set(ids)):
        errors.append("backlog IDs must be unique")
    known = set(ids)
    for index, row in enumerate(rows, start=2):
        label = row["id"].strip() or f"row {index}"
        for field in REQUIRED - {"dependencies"}:
            if row[field].strip().lower() in PLACEHOLDERS:
                errors.append(f"{label}: {field} is missing or placeholder")
        if row["size"].strip() not in {"1", "2", "3"}:
            errors.append(f"{label}: size must be 1, 2, or 3")
        dependencies = {item.strip() for item in row["dependencies"].split(";") if item.strip()}
        unknown = dependencies - known
        if unknown:
            errors.append(f"{label}: unknown dependencies {sorted(unknown)}")
        if label in dependencies:
            errors.append(f"{label}: cannot depend on itself")

    result = {"valid": not errors, "items": len(rows), "errors": errors}
    print(json.dumps(result, indent=2))
    return 0 if not errors else 1


if __name__ == "__main__":
    raise SystemExit(main())
