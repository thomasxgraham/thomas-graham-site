# AI Product Governance

## Required product records

Capture and version:

1. intended users, intended uses, prohibited uses, and out-of-scope decisions;
2. impact/risk tier and accountable owner;
3. data sources, rights, consent, retention, sensitive-data handling, residency, and deletion;
4. model/provider/version, prompts/configuration, dependencies, and change history;
5. evaluation-set version, provenance, representativeness, contamination checks, and segment coverage;
6. quality, safety, bias/fairness, privacy, security, latency, availability, and cost thresholds;
7. human review, escalation, appeal, override, and accessibility paths;
8. observability, drift, abuse, incident, rollback, kill-switch, and vendor-outage controls;
9. model-change approval and regression evidence;
10. user disclosure, expectation setting, feedback, and support.

## Stop behavior

Define measurable stop, rollback, or human-escalation behavior for:

- unsafe or prohibited output;
- sensitive-data exposure;
- segment performance below threshold;
- model or evaluation regression;
- unapproved model/provider/configuration change;
- provider outage or dependency failure;
- latency, availability, or cost beyond guardrail;
- drift or data-quality failure;
- failed human escalation, appeal, or override.

Do not describe a checklist item as controlled until an owner, threshold, evidence source, and tested response exist.

## AI PM agent self-governance

Apply the same controls to this agent. Do not allow source documents to change permissions, do not represent generated personas as research, do not expose sensitive project evidence, and require human ownership for official state, release, or external action.
