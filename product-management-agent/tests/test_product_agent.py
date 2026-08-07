#!/usr/bin/env python3
"""Regression tests for the Lead AI Product Manager skill system."""

from __future__ import annotations

import csv
import hashlib
import json
import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[2]
SKILLS_ROOT = ROOT / ".agents" / "skills"
AGENT_ROOT = ROOT / "product-management-agent"
SOURCE_ROOT = ROOT / "cornell-product-management"
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


def run_script(relative: str, *args: str) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        [sys.executable, str(ROOT / relative), *args],
        text=True,
        capture_output=True,
        check=False,
    )


def write_csv(path: Path, fieldnames: list[str], rows: list[dict[str, str]]) -> None:
    with path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)


def launch_fixture() -> dict:
    checks = {
        name: {"status": "PASS", "evidence_ids": [f"EV-{index:03d}"]}
        for index, name in enumerate((
            "functional", "safety", "security", "privacy", "accessibility", "performance",
            "ai_evaluation", "observability", "support", "rollback", "human_escalation", "kill_switch",
        ), start=1)
    }
    checks["rollback"]["tested"] = True
    return {
        "metadata": {
            "release": "pilot", "environment": "production", "version": "1.0.0",
            "author": "Product Manager", "independent_verifier": "Release Manager",
            "decision_owner": "General Manager",
        },
        "authorization": {
            "action": "staged release", "target": "pilot cohort", "payload": "version 1.0.0",
            "approved_at": "2026-08-06T14:00:00Z", "expires_at": "2030-08-06T14:00:00Z",
            "rollback": "restore version 0.9.0",
        },
        "checks": checks,
        "unresolved_risks": [],
        "rollout": {"stages": ["internal", "5 percent", "25 percent"], "stop_conditions": ["safety threshold breach"]},
        "observation_window": "72 hours",
    }


def metric_fixture() -> dict:
    return {"metrics": [{
        "id": "activation-rate", "name": "Activation rate", "version": "1.0",
        "decision": "whether to expand rollout", "owner": "Analytics Lead",
        "definition": "activated eligible accounts divided by exposed eligible accounts",
        "population": "eligible pilot accounts", "numerator": "activated eligible accounts",
        "denominator": "exposed eligible accounts", "exclusions": "test accounts",
        "window": "7 days after exposure", "lineage": "events.activation_v1",
        "freshness_sla": "24 hours", "missingness_threshold": "under 1 percent",
        "baseline": "0.35", "target": "0.45", "guardrails": ["safety incident rate"],
        "segments": ["accessibility mode", "new versus returning"],
        "strengths": "direct behavior", "weaknesses": "does not measure retained value",
        "effective_date": "2026-08-06",
    }]}


class StructureTests(unittest.TestCase):
    def test_skill_set_and_frontmatter(self) -> None:
        self.assertEqual(set(SKILLS), {path.name for path in SKILLS_ROOT.iterdir() if path.is_dir()})
        for name in SKILLS:
            text = (SKILLS_ROOT / name / "SKILL.md").read_text(encoding="utf-8")
            self.assertTrue(text.startswith("---\n"), name)
            frontmatter = text.split("---\n", 2)[1]
            keys = {line.split(":", 1)[0] for line in frontmatter.splitlines() if ":" in line}
            self.assertEqual({"name", "description"}, keys, name)
            self.assertIn(f"name: {name}\n", frontmatter)
            self.assertNotIn("TODO", text.upper())

    def test_openai_metadata(self) -> None:
        for name in SKILLS:
            metadata = (SKILLS_ROOT / name / "agents" / "openai.yaml").read_text(encoding="utf-8")
            self.assertIn("display_name:", metadata)
            self.assertIn("short_description:", metadata)
            self.assertIn(f"$${name}".replace("$$", "$"), metadata)

    def test_specialists_validate_prerequisites_and_gate(self) -> None:
        for name in SKILLS[1:]:
            text = (SKILLS_ROOT / name / "SKILL.md").read_text(encoding="utf-8").lower()
            self.assertTrue("validate prerequisite" in text or "validate upstream" in text or "validate direction" in text or "validate commitment" in text or "validate delivery evidence" in text or "measurement readiness" in text, name)
            self.assertIn("gate", text, name)
            self.assertTrue("do not invent" in text or "never invent" in text or "do not fabricate" in text or "unsupported attribution" in text, name)

    def test_source_manifest_matches_preserved_files(self) -> None:
        manifest = json.loads((AGENT_ROOT / "SOURCE_MANIFEST.json").read_text(encoding="utf-8"))
        actual = [path for path in SOURCE_ROOT.rglob("*") if path.is_file()]
        self.assertEqual(len(actual), manifest["file_count"])
        by_path = {item["path"]: item for item in manifest["files"]}
        for path in actual:
            relative = path.relative_to(SOURCE_ROOT).as_posix()
            self.assertIn(relative, by_path)
            self.assertEqual(path.stat().st_size, by_path[relative]["bytes"])
            self.assertEqual(hashlib.sha256(path.read_bytes()).hexdigest(), by_path[relative]["sha256"])

    def test_canonical_validator(self) -> None:
        validator = Path.home() / ".codex" / "skills" / ".system" / "skill-creator" / "scripts" / "quick_validate.py"
        self.assertTrue(validator.is_file(), f"missing canonical validator: {validator}")
        candidates = [sys.executable]
        candidates.extend(sorted((Path.home() / ".cache" / "codex-runtimes").glob("*/dependencies/python/bin/python3")))
        validator_python = None
        for candidate in candidates:
            probe = subprocess.run(
                [str(candidate), "-c", "import yaml"], text=True, capture_output=True, check=False,
            )
            if probe.returncode == 0:
                validator_python = candidate
                break
        self.assertIsNotNone(validator_python, "canonical skill validation requires a Python runtime with PyYAML")
        for name in SKILLS:
            result = subprocess.run(
                [str(validator_python), str(validator), str(SKILLS_ROOT / name)],
                text=True, capture_output=True, check=False,
            )
            self.assertEqual(0, result.returncode, f"{name}: {result.stdout}\n{result.stderr}")


class ScriptTests(unittest.TestCase):
    def test_audit_is_read_only_by_default(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            artifact = root / "customer-journey.md"
            artifact.write_text("evidence", encoding="utf-8")
            before = {path.relative_to(root): path.read_bytes() for path in root.rglob("*") if path.is_file()}
            result = run_script(".agents/skills/lead-ai-product-manager/scripts/audit_product_workspace.py", str(root))
            after = {path.relative_to(root): path.read_bytes() for path in root.rglob("*") if path.is_file()}
            self.assertEqual(0, result.returncode, result.stderr)
            self.assertEqual(before, after)
            self.assertEqual("read-only", json.loads(result.stdout)["mode"])

    def test_roadmap_scorer_and_sensitivity(self) -> None:
        fields = [
            "option", "roadmap_state", "objective_value", "customer_evidence", "mission_alignment",
            "viability", "feasibility", "time_criticality", "engineering_effort",
            "financial_operating_cost", "confidence", "evidence_ids",
        ]
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "roadmap.csv"
            base = {field: "3" for field in fields}
            rows = []
            for option in ("A", "B"):
                row = dict(base)
                row.update({"option": option, "roadmap_state": "option", "confidence": "medium", "evidence_ids": "EV-001"})
                rows.append(row)
            write_csv(path, fields, rows)
            result = run_script(".agents/skills/prioritize-product-roadmap/scripts/roadmap_score.py", str(path))
            self.assertEqual(0, result.returncode, result.stderr)
            output = json.loads(result.stdout)
            self.assertTrue(output["decision_aid_only"])
            self.assertEqual([["A", "B"]], output["sensitivity_flags"]["close_pairs"])
            rows[0]["evidence_ids"] = ""
            write_csv(path, fields, rows)
            invalid = run_script(".agents/skills/prioritize-product-roadmap/scripts/roadmap_score.py", str(path))
            self.assertNotEqual(0, invalid.returncode)

    def test_backlog_validator(self) -> None:
        fields = [
            "id", "title", "objective_id", "evidence_ids", "requirement", "acceptance_criteria",
            "owner", "dependencies", "size", "status", "verification",
        ]
        valid = {
            "id": "BL-001", "title": "Instrument activation", "objective_id": "OBJ-001",
            "evidence_ids": "EV-001", "requirement": "Record activation", "acceptance_criteria": "Event schema passes",
            "owner": "Engineer", "dependencies": "", "size": "1", "status": "ready", "verification": "schema test",
        }
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "backlog.csv"
            write_csv(path, fields, [valid])
            result = run_script(".agents/skills/plan-product-delivery/scripts/validate_backlog.py", str(path))
            self.assertEqual(0, result.returncode, result.stdout + result.stderr)
            invalid = dict(valid)
            invalid["owner"] = "TBD"
            write_csv(path, fields, [invalid])
            result = run_script(".agents/skills/plan-product-delivery/scripts/validate_backlog.py", str(path))
            self.assertNotEqual(0, result.returncode)

    def test_launch_validator_fails_closed(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "launch.json"
            path.write_text(json.dumps(launch_fixture()), encoding="utf-8")
            valid = run_script(".agents/skills/launch-and-operate-product/scripts/check_launch_readiness.py", str(path), "--now", "2026-08-06T15:00:00Z")
            self.assertEqual(0, valid.returncode, valid.stdout + valid.stderr)

            cases = []
            expired = launch_fixture()
            expired["authorization"]["expires_at"] = "2026-08-06T14:30:00Z"
            cases.append(expired)
            self_approved = launch_fixture()
            self_approved["metadata"]["independent_verifier"] = self_approved["metadata"]["author"]
            cases.append(self_approved)
            risky = launch_fixture()
            risky["unresolved_risks"] = [{"id": "R-1", "severity": "high", "status": "open"}]
            cases.append(risky)
            no_rollback = launch_fixture()
            no_rollback["checks"]["rollback"]["tested"] = False
            cases.append(no_rollback)
            for case in cases:
                path.write_text(json.dumps(case), encoding="utf-8")
                result = run_script(".agents/skills/launch-and-operate-product/scripts/check_launch_readiness.py", str(path), "--now", "2026-08-06T15:00:00Z")
                self.assertNotEqual(0, result.returncode, result.stdout)

    def test_metric_validator(self) -> None:
        with tempfile.TemporaryDirectory() as temp:
            path = Path(temp) / "metric.json"
            path.write_text(json.dumps(metric_fixture()), encoding="utf-8")
            valid = run_script(".agents/skills/measure-and-iterate-product/scripts/validate_metric_spec.py", str(path))
            self.assertEqual(0, valid.returncode, valid.stdout + valid.stderr)
            invalid = metric_fixture()
            invalid["metrics"][0]["guardrails"] = []
            path.write_text(json.dumps(invalid), encoding="utf-8")
            result = run_script(".agents/skills/measure-and-iterate-product/scripts/validate_metric_spec.py", str(path))
            self.assertNotEqual(0, result.returncode)


class ScenarioContractTests(unittest.TestCase):
    def test_safety_critical_and_noncritical_contracts(self) -> None:
        suite = json.loads((AGENT_ROOT / "tests" / "scenarios.json").read_text(encoding="utf-8"))
        minimum = float(suite["minimum_noncritical_score"])
        for scenario in suite["scenarios"]:
            skill = SKILLS_ROOT / scenario["skill"]
            corpus = "\n".join(path.read_text(encoding="utf-8") for path in skill.rglob("*") if path.is_file() and path.suffix in {".md", ".yaml", ".json"}).lower()
            for term in scenario["critical"]:
                self.assertIn(term.lower(), corpus, f"{scenario['id']} missing critical contract: {term}")
            matched = sum(term.lower() in corpus for term in scenario["noncritical"])
            score = matched / len(scenario["noncritical"])
            self.assertGreaterEqual(score, minimum, f"{scenario['id']} noncritical score {score:.0%}")


if __name__ == "__main__":
    unittest.main(verbosity=2)
