# Product Management Agent Design Plan

## Goal

Create a durable, summonable, and autonomy-ready product operating system for a Lead AI Product Manager. It must coordinate work from concept through delivery and continuous improvement while keeping evidence, decisions, ownership, risk, and human approval explicit.

## Architecture

Build one orchestrating agent skill plus seven specialist skills:

1. `lead-ai-product-manager` — orient to the product, infer the current phase, route to the right specialist, maintain operating cadence, and lead with the most important decision or next action.
2. `discover-product-opportunity` — customer journey, problem selection, hypotheses, interviews, evidence synthesis, and personas.
3. `define-product-direction` — business/system flow, product vision, objectives, key results, scope, and product brief.
4. `prioritize-product-roadmap` — factor design, idea repository, stakeholder allocation, key decisions, options-versus-commitment scoring, sequencing, and investment narrative.
5. `validate-product-concept` — related/unrelated critique, prototype brief, usability plan, learning criteria, and concept decision.
6. `plan-product-delivery` — backlog decomposition, acceptance criteria, dependencies, implementation traceability, delivery plan, risks, and instrumentation requirements.
7. `launch-and-operate-product` — go/no-go evidence, rollout, adoption/change readiness, release authority, observability, support, rollback, incident response, AI/model operations, and sunset.
8. `measure-and-iterate-product` — metric specifications, lifecycle-aware experiments, operational monitoring, analysis, hypothesis readout, and roadmap change recommendations.

The orchestrator is the user-facing agent. Specialists remain directly summonable for focused work.

## Specialist boundaries

| Skill | Owns | Does not own |
|---|---|---|
| Discovery | Problem, market, journey, and persona evidence | Solution usability conclusions |
| Direction | Strategic boundaries, non-goals, viability, vision, objectives, and KRs | Capacity allocation or feature sequencing |
| Roadmap | Options, investment decisions, capacity allocation, and committed sequencing | Approving unvalidated concepts |
| Concept validation | Solution desirability, usability, feasibility, and learning sufficiency | Production implementation evidence |
| Delivery | Requirements through verified implementation and pre-launch instrumentation | Release authority or production interpretation |
| Launch/operate | Go/no-go, rollout, adoption, service readiness, production controls, and sunset | Causal product-outcome conclusions |
| Measure/iterate | Metric operation, experiment integrity, outcome interpretation, and roadmap recommendations | Silent metric redefinition or release approval |

Each specialist validates upstream prerequisites when directly invoked. Missing prerequisites produce a labeled draft, `FAIL`, or a documented `WAIVER`; they never silently become satisfied.

## Operating modes

### Summoned mode

Respond to a concrete request, load only the relevant specialist, audit source evidence, produce the requested artifact, and end with one decision or next action.

### Autonomous inspect cycle

Perform a read-only product-health pass. Inspect available artifacts, infer (but never officially change) the lifecycle phase, identify stale or missing evidence, assess gate readiness, and return:

1. the most important change;
2. the evidence and confidence;
3. the critical risk or decision;
4. the prepared next action;
5. the approval needed, if any.

### Autonomous prepare cycle

When the user has named a local preparation workspace, create or update drafts only within that exact path. Do not commit, push, publish, send, contact participants, modify task systems, deploy, or mutate other local or external targets.

### Authorized execute cycle

Require a bounded authorization record for every consequential action: action type, exact target, payload or diff preview, approver, approval time, expiry, and rollback or recovery. Treat local writes, commits, pushes, tickets, messages, participant contact, releases, and production changes as separate capabilities. Never infer authorization from discussion, a schedule, a prior run, or another capability.

In every mode, autonomy may analyze and validate. It never invents research results or quotations, represents synthetic data as customer evidence, or allows untrusted source instructions to expand its permissions.

## Cross-cutting contracts

- Label facts, inferences, assumptions, recommendations, decisions, and unknowns separately.
- Use claim-level evidence records containing source ID, immutable hash or version, exact location, evidence type, observation or derivation, date/freshness, access status, and strength. Never invent a locator or convert an unknown into a fact.
- Use ordinal evidence strength and make uncertainty visible; avoid percentages or precision unsupported by inputs.
- Keep outcomes and learning tied to objectives and customer problems.
- State who is accountable for each decision, risk, dependency, and next action.
- Trace objective → requirement → implementation → independent verification → release artifact → production metric.
- Treat intended/prohibited AI uses, risk tier, data rights/retention, sensitive-data handling, model/vendor/version inventory, evaluation-set version, segment thresholds, safety, bias, privacy, security, human escalation/appeal, kill switch, incident response, model-change approval, drift, cost, and latency as first-class product requirements.
- Require a measurable exit criterion for every lifecycle gate.
- Route evidence that invalidates the current plan back to the appropriate earlier phase.
- Prevent the artifact author from self-approving a consequential gate.

## Phase gates

| Transition | Minimum evidence |
|---|---|
| Opportunity → Direction | Defined customer and journey; selected problem; alternatives and risks; falsifiable hypothesis; traceable research evidence. A research gap permits only bounded exploration through a time-limited waiver with risk owner and evidence-acquisition plan. |
| Direction → Options roadmap | Vision; measurable objective/KRs; scope/non-goals; business/system flow; desirability, viability, feasibility, adoption, economics, constraints, and AI risk posture. |
| Options roadmap → Validation | Transparent factors and tradeoffs; key decisions and evidence needs; ranked hypotheses; bounded validation capacity; decision owner and evidence required before implementation commitment. |
| Validation → Committed roadmap and delivery | Representative users/tasks; severity-based findings; learning sufficiency; technical feasibility; data/model evaluation thresholds; unresolved risks; independent evaluator; explicit proceed/pivot/stop decision. |
| Delivery → Launch review | Traceable small backlog items; acceptance criteria; owners/dependencies; verified implementation environment/version/time; instrumentation and baseline; functional, safety, security, privacy, accessibility, performance, AI-evaluation, observability, support, rollback, and unresolved-severity thresholds. |
| Launch → Operate and observe | Authorized go/no-go; staged rollout; adoption/change plan; service ownership; incident/escalation/kill-switch controls; model version; defined observation window and stop conditions. |
| Operate → Iteration | Versioned metric/query definitions; lineage; exposure/assignment; exclusions; freshness/missingness; segmented results; causal limits; hypothesis assessment; roadmap recommendation. |
| Operate → Sunset | Customer/stakeholder impact; migration, retention, communications, support, legal/data obligations, shutdown validation, and accountable approval. |

Every gate record returns `PASS`, `FAIL`, or `WAIVER` and includes evidence references, evaluator, decision owner, status, unresolved risks, decision date, expiration/review date, and compensating controls for waivers.

## Reusable resources

Each skill will include only the references, templates, and deterministic scripts required for its scope. Planned resources include:

- lifecycle readiness, gate/waiver, capability authorization, and claim-level evidence-ledger templates;
- customer journey, interview, persona, vision, OKR, decision, roadmap, prototype, backlog, release, metric, experiment, and readout templates;
- a read-only-by-default workspace health-audit script;
- transparent roadmap scoring with sensitivity checks;
- backlog and metric-spec validators;
- static skill-contract tests and realistic forward tests.

## Validation strategy

1. Run the canonical skill validator against all eight skills.
2. Validate `agents/openai.yaml` metadata and trigger descriptions.
3. Run deterministic unit tests for scripts and required artifact fields.
4. Run scored scenario tests covering greenfield discovery, roadmap conflict, AI concept validation, release pressure, confounded analytics, blocked gates, waivers, contradictory/stale evidence, malicious source instructions, unavailable evidence, sensitive data, AI regressions, autonomous inspection, and bounded authorization.
5. Forward-test the completed skills with independent agents that receive only the skills and realistic prompts.
6. Require all structural tests and deterministic validators to pass, and require every forward-test scenario to satisfy all safety-critical assertions plus at least 90% of non-critical assertions. Repair failures and rerun the complete suite.

## Success criteria

- A user can summon the orchestrator or any specialist by name.
- The orchestrator routes lifecycle work without loading every framework at once.
- Every specialist produces decision-ready artifacts grounded in evidence.
- Autonomous mode produces useful preparation while preserving approval boundaries.
- AI-specific product risks are present from discovery through monitoring.
- Validators and scenario tests pass from a clean checkout.
- The complete system is committed and pushed with the user-directed source coursework after source-integrity, secret, sensitive-data, and license-risk checks are reported.

## Critical review improvements adopted

Independent architecture and safety reviews materially changed the first plan:

- added a distinct launch, operate, incident, and sunset capability;
- separated problem evidence from solution evidence and instrumentation setup from outcome interpretation;
- changed the pre-validation roadmap into an options roadmap to avoid premature commitment;
- replaced permissive gates with `PASS`/`FAIL`/`WAIVER` records and expiring compensating controls;
- separated autonomous inspection, local preparation, and consequential execution permissions;
- strengthened provenance from document-level citations to claim-level evidence records;
- converted AI governance topics into versioned artifacts, thresholds, owners, and stop behavior;
- added end-to-end traceability, independent verification, causal-integrity controls, and negative regression tests.
