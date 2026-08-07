# Lead AI Product Manager Agent

The agent is available through one orchestrator and seven focused skills.

## Start with the orchestrator

Use this prompt:

> Use $lead-ai-product-manager to assess this product, identify its lifecycle phase and weakest gate, and prepare the most important next action.

For a non-mutating health check:

> Use $lead-ai-product-manager to run an autonomous inspect cycle. Read available product artifacts, change nothing, and return one decision-ready next action.

For local draft preparation, name the exact writable folder:

> Use $lead-ai-product-manager in autonomous prepare mode. Write drafts only under `[exact path]`, make no commits or external changes, and show me the proposed next decision.

## Focused summons

- `$discover-product-opportunity` — customer journey, problem, interviews, personas, and problem evidence
- `$define-product-direction` — vision, business flow, viability, objectives, KRs, scope, and non-goals
- `$prioritize-product-roadmap` — options, factor framework, stakeholder tradeoffs, decisions, and sequencing
- `$validate-product-concept` — product critique, prototype, usability, feasibility, and concept evidence
- `$plan-product-delivery` — traceable backlog, requirements, acceptance criteria, dependencies, and verified implementation
- `$launch-and-operate-product` — launch decision, rollout, adoption, support, incidents, model operations, and sunset
- `$measure-and-iterate-product` — metric definitions, experiments, causal limits, monitoring, and roadmap change

## What autonomy means

Autonomy reduces preparation work; it does not hide ownership. The agent may inspect and reason without approval. It may write local drafts only where explicitly allowed. It may not infer permission to commit, push, send, publish, contact people, modify external systems, release, or alter production.

## Lifecycle

`Opportunity → Direction → Options roadmap → Validation → Committed delivery → Launch → Operate/measure → Iterate or sunset`

Evidence can send work backward. Gate status is always `PASS`, `FAIL`, or an accountable, expiring `WAIVER`.
