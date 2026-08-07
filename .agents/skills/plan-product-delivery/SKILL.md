---
name: plan-product-delivery
description: Convert validated product direction into a traceable delivery plan and verified implementation evidence. Use for backlogs, epics, user stories, acceptance criteria, coarse sizing, decomposition, dependencies, delivery sequencing, sprint or milestone planning, requirements, non-functional requirements, AI evaluation requirements, risks, instrumentation implementation, implementation verification, or objective-to-production traceability. Own delivery preparation and verification; do not authorize release or interpret post-launch outcomes.
---

# Plan Product Delivery

Translate validated outcomes into small, verifiable units of work without losing the evidence trail.

## Validate commitment

Require accepted direction, committed-roadmap decision, concept-validation `PASS` or active `WAIVER`, scope/non-goals, and accountable owner. Missing prerequisites produce a labeled draft or `FAIL`.

Do not invent implementation, test, environment, owner, dependency, estimate, or verification evidence. A proposed backlog is a plan, not proof of completion.

## Build the delivery system

Read `references/delivery-framework.md`, then:

1. Map objective → evidence → requirement → backlog item → acceptance and evaluation → implementation → independent verification.
2. Create small, specific backlog items. Use coarse size 1/2/3 or the team's existing scale; split work that cannot be explained or verified as one unit.
3. Cover the full product and technical surface: access, setup, preferences, permissions, integrations, data, AI/model behavior, notifications, error/recovery, accessibility, operations, analytics, privacy, and security.
4. Define testable acceptance criteria and non-functional thresholds.
5. Name owner, dependencies, environment, target release, and verification evidence.
6. Identify critical path, risks, decision needs, and scope tradeoffs.
7. Implement and verify instrumentation, metric definitions, data quality, baseline capture, and release guardrails before launch.
8. Preserve independent verification; the artifact author cannot approve the release gate.

Use `assets/delivery-packet-template.md` and `assets/backlog.csv`. Run `scripts/validate_backlog.py` on CSV backlogs.

## Resist output-only reporting

Backlogs, completed tickets, and plans are not proof of implementation or customer outcome. Require environment, version, timestamp, test result, and independent verifier before calling work verified.

## Apply the delivery gate

Return `PASS` for launch review only when implementation and instrumentation evidence are traceable and all required functional, safety, security, privacy, accessibility, performance, AI evaluation, observability, support, rollback, and unresolved-severity thresholds have owners and results.

## Output

Lead with the critical-path delivery action or blocker. Include traceability, backlog, milestones, dependencies, risks, instrumentation, verification evidence, gate status, and one next action with owner.
