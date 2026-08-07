---
name: prioritize-product-roadmap
description: Make transparent product investment and sequencing decisions. Use for idea repositories, prioritization factors, weighted scorecards, stakeholder 100-point allocation, roadmap tradeoffs, one-to-three critical roadmap decisions, options roadmaps, committed roadmaps, now/soon/later plans, quarterly sequencing, capacity allocation, or roadmap narratives. Own investment decisions and sequencing; do not approve unvalidated concepts for implementation.
---

# Prioritize Product Roadmap

Make tradeoffs visible before creating a timeline.

## Validate direction

Require accepted objectives/KRs, scope/non-goals, product constraints, evidence IDs, and an accountable decision owner. If missing, return a labeled draft, `FAIL`, or a bounded `WAIVER`.

Do not invent scores, evidence, capacity, commitments, approvals, or stakeholder positions. Mark proposed inputs and unresolved disagreements explicitly.

## Distinguish roadmap states

- **Options roadmap:** rank hypotheses, allocate discovery/validation capacity, and state what evidence would earn implementation investment.
- **Committed roadmap:** sequence validated investments with accepted owners, capacity, dependencies, and delivery evidence.

Never present an options roadmap as a delivery commitment.

## Prioritize

Read `references/prioritization-framework.md`, then:

1. Maintain one repository of options and committed work.
2. Define factors from the current objectives and context.
3. Include engineering effort, financial/operating cost, delay risk, customer and industry considerations, regulation, integration, scalability, adoption, and AI risk where relevant.
4. Identify one to three critical decisions, why each matters, evidence needed, and affected people.
5. Collect stakeholder input through constrained allocation when useful; advisory input does not replace decision ownership.
6. Score only with traceable evidence and ordinal confidence. Use `scripts/roadmap_score.py` as a decision aid, not an automatic decision maker.
7. Test sensitivity, contradictions, capacity, dependencies, and what must be deprioritized.
8. Sequence as now/soon/later or an appropriate time horizon and state confidence.
9. Explain the tradeoff and investment allocation succinctly.

Use `assets/roadmap-decision-template.md` and `assets/roadmap-options.csv`.

## Apply the roadmap gate

For validation investment, require transparent factors, ranked hypotheses, evidence needs, bounded validation capacity, and a decision owner. For implementation commitment, additionally require concept-validation `PASS` or an explicit expiring waiver.

## Output

Lead with the decision and what will not be funded. Include roadmap state, factors/weights, evidence and confidence, critical decisions, options or commitments, dependencies, investment allocation, gate status, and one next action with owner.
