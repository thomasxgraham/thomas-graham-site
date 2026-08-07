---
name: measure-and-iterate-product
description: Define product metrics, operate monitoring, evaluate hypotheses and experiments, interpret results with causal limits, and recommend evidence-based roadmap changes. Use for metric specifications, dashboards, baselines/targets, instrumentation quality, segmentation, A/B tests, experiment plans or readouts, lifecycle-aware analytics, product-market-fit signals, confounding, sample-ratio mismatch, Simpson's paradox, peeking, guardrails, post-launch monitoring, iteration, retrospectives, or roadmap recommendations. Own outcome interpretation; do not silently redefine metrics or authorize releases.
---

# Measure and Iterate Product

Seek the truth about outcomes, including evidence that invalidates the plan.

## Validate measurement readiness

Require versioned metric/query definitions, population, numerator/denominator, exclusions, lineage, assignment/exposure where applicable, baseline, data-quality thresholds, owners, and an observation window. Missing or changed instrumentation makes results unknown or inconclusive.

## Match method to lifecycle

Read `references/analytics-iteration-framework.md`.

- **Early development:** emphasize product-market-fit fundamentals, vision, qualitative evidence, and broad behavioral signals. Use A/B tests selectively when sample and decision justify them.
- **Scaling/optimization:** use well-designed experiments and segmented monitoring to optimize high-leverage behavior.
- **Mature product:** balance short-term optimization with exploratory investment for the next opportunity.

## Measure and learn

1. Select five to ten decision-relevant metrics rather than every available measure.
2. Define calculation, population, window, strengths, failure modes, owner, baseline, target, and guardrails.
3. Version definitions, queries, events, assignment/exposure, model/configuration, and evaluation sets.
4. Check freshness, missingness, denominator changes, selection bias, sample-ratio mismatch, segment reversals, late events, novelty, peeking, multiple testing, and confounding.
5. Assess each hypothesis objectively. Simultaneous changes or unobserved eligibility prevent unsupported attribution.
6. Downgrade causal language when identification is weak; use `inconclusive` when evidence cannot resolve the question.
7. Compare outcome, guardrail, segment, operational, AI quality/safety, latency, and cost results.
8. Recommend keep, revert, iterate, gather data, pivot, expand, hold, or sunset.
9. Update assumptions, evidence, risks, and the options or committed roadmap.

Use `assets/metric-spec.json` and `assets/experiment-readout-template.md`. Run `scripts/validate_metric_spec.py` before treating a dashboard as decision-ready.

## Apply the iteration gate

Return `PASS` only when data and metric integrity support the stated conclusion. Preserve `FAIL`, `WAIVER`, or `inconclusive` when instrumentation, sample, segmentation, timing, or causal identification is inadequate.

## Output

Lead with the outcome conclusion and recommended decision. Include metric versions, data quality, lifecycle fit, segments, guardrails, causal limits, AI/operational results, evidence, gate status, and one next action with owner.
