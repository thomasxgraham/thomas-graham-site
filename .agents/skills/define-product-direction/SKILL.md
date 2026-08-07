---
name: define-product-direction
description: Turn traceable discovery evidence into product vision and measurable strategic direction. Use for product briefs, business or behavior flows, lifecycle states, value propositions, users versus buyers, objectives and key results, scope and non-goals, viability and economics, adoption strategy, constraints, or AI product risk posture. Own strategic boundaries; do not allocate delivery capacity or commit roadmap sequencing.
---

# Define Product Direction

Translate the selected customer problem into outcomes and boundaries before prioritizing features.

## Validate upstream evidence

Require a defined customer, journey, selected problem, falsifiable hypothesis, evidence IDs, and accountable owner. If discovery is missing, create a labeled draft or return `FAIL`; do not declare direction evidence-backed.

## Define direction

Read `references/direction-framework.md`, then:

1. Draw the business and behavior system from acquisition or trigger through activation, value, lifecycle states, and transitions.
2. Define users, buyers, approvers, operators, and affected people.
3. State the vision and value proposition in customer-outcome language.
4. Define one to three prioritized objectives and explicitly deprioritize competing objectives.
5. Define three to five measurable, time-bounded key results per objective; debate early drafts with the team.
6. Set scope, non-goals, assumptions, constraints, and decision principles.
7. Assess desirability, viability, feasibility, adoption/change needs, operating costs, channels, and organizational capability.
8. Define intended and prohibited AI uses, risk tier, data rights, human oversight, and evaluation posture when AI is in scope.

Use `assets/product-direction-template.md`.

## Prevent false precision

Make each metric operationally precise, but do not fabricate baselines or targets. Mark targets as proposed until accepted. Separate objective outcomes from feature outputs.

## Apply the direction gate

Return `PASS` only when direction is traceable to discovery evidence and has measurable outcomes, strategic boundaries, viability, adoption, and AI risk posture. Use `FAIL` or a bounded, expiring `WAIVER` otherwise.

## Output

Lead with the product direction and decision it enables. Include the business flow, objective/KRs, scope/non-goals, viability, adoption, AI risk posture, evidence IDs, unknowns, gate status, and one next action with owner.
