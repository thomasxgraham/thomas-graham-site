# Delivery Framework

## Backlog construction

Each item must be an independently understandable and verifiable unit of work. Capture:

- stable ID and outcome-oriented title;
- objective/KR and evidence IDs;
- requirement and user/operational value;
- acceptance criteria and definition of done;
- non-functional and AI evaluation thresholds;
- owner, dependencies, size, status, and target;
- implementation artifact and independent verification.

Use coarse sizing early. Split oversized work. The Cornell exercise asks for at least ten candidate tickets to force broad product-surface thinking; real backlogs should contain the work needed, not a quota.

## Product-surface checklist

Consider access and account setup, preferences, data and integrations, algorithms/models, permissions, platform differences, notifications, input/output, error and recovery, accessibility, privacy, security, analytics, support, migration, rollback, and operations.

## User story and acceptance

Use a user story only when it clarifies value:

> As a [persona], I want [capability], so that [outcome].

Write acceptance criteria as observable outcomes. Include negative, edge, recovery, accessibility, data, and AI safety cases where relevant. Do not hide implementation tasks inside vague stories.

## Verification

Record environment, commit/build/model version, test/evaluation version, timestamp, result, evidence locator, and independent verifier. Do not accept self-reported completion as release evidence.

## Instrumentation

Before launch, implement versioned metric definitions, event/data lineage, assignment/exposure, exclusions, data-quality checks, baseline, guardrails, and observation window. Measurement owns interpretation after launch.

## Cornell grounding

This framework extends the CTECH106 backlog method with release-grade traceability and AI evaluation controls.
