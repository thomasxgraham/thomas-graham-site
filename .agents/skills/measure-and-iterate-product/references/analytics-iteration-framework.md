# Analytics and Iteration Framework

## Metric specification

For each metric define:

- stable ID, name, version, decision, and owner;
- plain-language definition;
- population, numerator, denominator, exclusions, and time window;
- event/query/model version and lineage;
- freshness, missingness, and data-quality threshold;
- baseline, target, guardrails, and segments;
- strengths, weaknesses, and ways the metric can mislead;
- change control and effective date.

Five to ten primary metrics usually provide a focused dashboard. Add diagnostic metrics only when they help explain decisions.

## Hypothesis integrity

Record context, hypothesis, intervention, eligible population, assignment/exposure, expected mechanism, primary and guardrail metrics, minimum detectable effect where relevant, stopping rule, observation window, exclusions, and causal-identification limits before analysis.

Check:

- simultaneous interventions and unobserved eligibility;
- randomization unit and sample-ratio mismatch;
- denominator or definition changes;
- missing or late events and instrumentation loss;
- repeated peeking and multiple testing;
- selection bias, novelty, seasonality, and regression to the mean;
- Simpson's paradox and segment heterogeneity;
- silent model, prompt, vendor, or policy changes.

## Lifecycle method

- **Early:** customer feedback, cohort behavior, retention/value signals, and vision-led learning usually dominate; statistical experiments may lack power or distract from fundamentals.
- **Scaling:** reliable A/B tests and optimization can compound at scale.
- **Mature:** combine optimization with exploratory bets that protect against technology and market shifts.

## Decision language

- Use causal language only when design and data support it.
- Use associative or directional language when confounding remains.
- Use `inconclusive` when evidence does not distinguish explanations.
- Separate statistical significance, practical significance, segment safety, and business impact.

## Cornell grounding

This framework synthesizes the CTECH105 course project, product-lifecycle tool, action plan, and completed grade record, with stronger causal and AI monitoring controls.
