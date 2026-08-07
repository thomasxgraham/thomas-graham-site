---
name: launch-and-operate-product
description: Govern product launch, rollout, adoption, service operations, incidents, AI model operations, and sunset. Use for launch readiness, go/no-go decisions, staged rollout, release authority, communications or training plans, support readiness, observability, service levels, rollback, kill switches, incident response, vendor/model change, drift response, human escalation, business continuity, post-launch handoff, retirement, migration, or shutdown. Own release and production controls; do not infer causal product outcomes.
---

# Launch and Operate Product

Require independent evidence before exposing customers or production systems.

## Validate delivery evidence

Require traceable implementation and instrumentation, environment/version/time, independent verifier, accepted owners, tested rollback, and unresolved-risk thresholds. A completed backlog is not launch proof.

Do not invent evidence, approvals, authorization, test results, operational ownership, or successful persistence. If required records are unavailable, hold the release.

## Prepare launch and operation

Read `references/launch-operations-framework.md`, then:

1. Define release scope, target population, staged exposure, adoption/change needs, and stop conditions.
2. Verify functional, safety, security, privacy, accessibility, performance, AI evaluation, observability, support, and rollback evidence.
3. Confirm decision authority and bounded release authorization.
4. Assign service, model, data, support, incident, communication, and business owners.
5. Test rollback, kill switch, degradation/fallback, human escalation, vendor outage, and continuity behavior.
6. Version the model/provider/configuration and preserve regression evidence.
7. Define the observation window and handoff to measurement without making premature outcome claims.
8. Maintain incident and change controls during operation.
9. Plan sunset with customer migration, data/legal obligations, support, communications, shutdown validation, and approval.

Use `assets/launch-readiness.json` and `assets/incident-sunset-template.md`. Run `scripts/check_launch_readiness.py` before recommending go.

## Apply the launch gate

Return `PASS`, `FAIL`, or `WAIVER`. A waiver must be explicit, bounded, compensating, owned, and unexpired. Block launch for unresolved critical/high risk, missing authorization, self-approval, untested rollback, missing stop behavior, or failed required threshold.

## Output

Lead with go, no-go, hold, rollback, or sunset recommendation. Include exact scope, evidence, failed thresholds, unresolved risks, authorization, rollout/stop plan, owners, operation handoff, gate status, and one next action.
