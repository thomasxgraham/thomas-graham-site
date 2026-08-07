#!/usr/bin/env python3
"""Transparent directional roadmap scoring. Scores inform; owners decide."""

from __future__ import annotations

import argparse
import csv
import json
from pathlib import Path


VALUE_FIELDS = {
    "objective_value": 0.25,
    "customer_evidence": 0.20,
    "mission_alignment": 0.10,
    "viability": 0.15,
    "feasibility": 0.15,
    "time_criticality": 0.15,
}
BURDEN_FIELDS = ("engineering_effort", "financial_operating_cost")
CONFIDENCE = {"low": 0.75, "medium": 0.90, "high": 1.0}
REQUIRED = {"option", "roadmap_state", "confidence", "evidence_ids", *VALUE_FIELDS, *BURDEN_FIELDS}


def number(row: dict[str, str], field: str) -> float:
    try:
        value = float(row[field])
    except (KeyError, ValueError) as exc:
        raise ValueError(f"{row.get('option', '<unknown>')}: {field} must be numeric") from exc
    if not 0 <= value <= 5:
        raise ValueError(f"{row.get('option', '<unknown>')}: {field} must be 0..5")
    return value


def score(row: dict[str, str]) -> dict:
    state = row["roadmap_state"].strip().lower()
    if state not in {"option", "committed"}:
        raise ValueError(f"{row['option']}: roadmap_state must be option or committed")
    confidence = row["confidence"].strip().lower()
    if confidence not in CONFIDENCE:
        raise ValueError(f"{row['option']}: confidence must be low, medium, or high")
    if not row["evidence_ids"].strip():
        raise ValueError(f"{row['option']}: evidence_ids is required")
    weighted_value = sum(number(row, field) * weight for field, weight in VALUE_FIELDS.items())
    burden = sum(number(row, field) for field in BURDEN_FIELDS) / len(BURDEN_FIELDS)
    burden_divisor = 1 + 0.35 * max(0, burden - 1)
    priority_index = weighted_value / burden_divisor * CONFIDENCE[confidence]
    return {
        "option": row["option"],
        "roadmap_state": state,
        "weighted_value": round(weighted_value, 3),
        "burden": round(burden, 3),
        "confidence": confidence,
        "priority_index": round(priority_index, 3),
        "evidence_ids": row["evidence_ids"],
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("csv_file", type=Path)
    args = parser.parse_args()
    with args.csv_file.open(newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        missing = REQUIRED - set(reader.fieldnames or [])
        if missing:
            parser.error("missing columns: " + ", ".join(sorted(missing)))
        try:
            results = [score(row) for row in reader]
        except ValueError as exc:
            parser.error(str(exc))
    results.sort(key=lambda item: item["priority_index"], reverse=True)
    for rank, item in enumerate(results, start=1):
        item["directional_rank"] = rank
    close_pairs = []
    for left, right in zip(results, results[1:]):
        if abs(left["priority_index"] - right["priority_index"]) < 0.15:
            close_pairs.append([left["option"], right["option"]])
    print(json.dumps({
        "decision_aid_only": True,
        "formula": "weighted value / burden divisor * ordinal confidence factor",
        "results": results,
        "sensitivity_flags": {"close_pairs": close_pairs},
        "warning": "Do not treat directional rank as approval or implementation commitment.",
    }, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
