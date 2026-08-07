#!/usr/bin/env python3
"""Validate decision-ready product metric specifications."""

from __future__ import annotations

import argparse
import json
from pathlib import Path


REQUIRED = {
    "id", "name", "version", "decision", "owner", "definition", "population",
    "numerator", "denominator", "exclusions", "window", "lineage", "freshness_sla",
    "missingness_threshold", "baseline", "target", "guardrails", "segments",
    "strengths", "weaknesses", "effective_date",
}
PLACEHOLDERS = {"", "tbd", "todo", "example", "unknown owner"}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("metric_json", type=Path)
    args = parser.parse_args()
    data = json.loads(args.metric_json.read_text(encoding="utf-8"))
    metrics = data.get("metrics")
    errors: list[str] = []
    if not isinstance(metrics, list) or not metrics:
        errors.append("metrics must be a non-empty list")
        metrics = []
    ids: list[str] = []
    for index, metric in enumerate(metrics, start=1):
        label = metric.get("id") or f"metric {index}"
        ids.append(str(metric.get("id", "")))
        for field in REQUIRED:
            value = metric.get(field)
            if value is None or (isinstance(value, str) and value.strip().lower() in PLACEHOLDERS):
                errors.append(f"{label}: {field} is required")
        if not isinstance(metric.get("guardrails"), list) or not metric.get("guardrails"):
            errors.append(f"{label}: guardrails must be a non-empty list")
        if not isinstance(metric.get("segments"), list) or not metric.get("segments"):
            errors.append(f"{label}: segments must be a non-empty list")
        if metric.get("numerator") == metric.get("denominator"):
            errors.append(f"{label}: numerator and denominator cannot be identical")
    if len(ids) != len(set(ids)):
        errors.append("metric IDs must be unique")
    result = {"valid": not errors, "metrics": len(metrics), "errors": errors}
    print(json.dumps(result, indent=2))
    return 0 if not errors else 1


if __name__ == "__main__":
    raise SystemExit(main())
