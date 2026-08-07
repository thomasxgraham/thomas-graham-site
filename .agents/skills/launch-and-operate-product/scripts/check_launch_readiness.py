#!/usr/bin/env python3
"""Fail-closed structural launch-readiness validation."""

from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path


CHECKS = {
    "functional", "safety", "security", "privacy", "accessibility", "performance",
    "ai_evaluation", "observability", "support", "rollback", "human_escalation", "kill_switch",
}


def parse_time(value: str) -> datetime:
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("readiness_json", type=Path)
    parser.add_argument("--now", help="ISO time for deterministic validation")
    args = parser.parse_args()
    data = json.loads(args.readiness_json.read_text(encoding="utf-8"))
    errors: list[str] = []
    metadata = data.get("metadata", {})
    if not all(metadata.get(field) for field in ("release", "environment", "version", "author", "independent_verifier", "decision_owner")):
        errors.append("complete metadata is required")
    if metadata.get("author") == metadata.get("independent_verifier"):
        errors.append("artifact author cannot be the independent verifier")

    authorization = data.get("authorization", {})
    for field in ("action", "target", "payload", "approved_at", "expires_at", "rollback"):
        if not authorization.get(field):
            errors.append(f"authorization.{field} is required")
    if authorization.get("expires_at"):
        try:
            now = parse_time(args.now) if args.now else datetime.now(timezone.utc)
            if parse_time(authorization["expires_at"]) <= now:
                errors.append("authorization is expired")
        except ValueError:
            errors.append("authorization time must be ISO-8601")

    checks = data.get("checks", {})
    for name in sorted(CHECKS):
        check = checks.get(name)
        if not check:
            errors.append(f"missing check: {name}")
            continue
        if check.get("status") != "PASS":
            errors.append(f"{name} must PASS")
        if not check.get("evidence_ids"):
            errors.append(f"{name} requires evidence_ids")
    if not checks.get("rollback", {}).get("tested"):
        errors.append("rollback must be tested")

    for risk in data.get("unresolved_risks", []):
        if risk.get("status", "open").lower() == "open" and risk.get("severity", "").lower() in {"critical", "high"}:
            errors.append(f"unresolved {risk.get('severity')} risk: {risk.get('id', '<unknown>')}")
    rollout = data.get("rollout", {})
    if not rollout.get("stages") or not rollout.get("stop_conditions"):
        errors.append("rollout stages and stop conditions are required")
    if not data.get("observation_window"):
        errors.append("observation_window is required")

    result = {"ready": not errors, "errors": errors}
    print(json.dumps(result, indent=2))
    return 0 if not errors else 1


if __name__ == "__main__":
    raise SystemExit(main())
