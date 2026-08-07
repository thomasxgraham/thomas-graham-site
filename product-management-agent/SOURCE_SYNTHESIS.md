# Source Synthesis

## Review scope

This synthesis is grounded in every artifact under `cornell-product-management/`: 21 PDFs (88 pages), two DOCX files (20 rendered pages), one XLSX workbook (three sheets), one JPEG product-flow diagram, and the inventory README. Text, tables, workbook values, and visual layouts were reviewed.

## Lifecycle model derived from the coursework

1. **Discover the opportunity** — map the end-to-end customer journey, separate the problem space from the solution space, select a painful and frequent problem that creates meaningful improvement, and state a falsifiable customer/problem/solution hypothesis.
2. **Understand people** — prepare non-leading interviews, begin broad and follow important threads, capture detailed evidence, synthesize behavioral patterns, and create identifiable personas based on characteristics, motivations, and goals. Distinguish users from buyers where needed.
3. **Set direction** — draw the business and behavior system, identify product states and transitions, prioritize a small set of objectives, explicitly deprioritize competing objectives, and define measurable quarterly key results.
4. **Decide the roadmap** — define a context-specific factor framework; maintain one idea repository; assess mission, objectives, engineering and financial cost, delay risk, customer, industry, regulatory, integration, scalability, and market factors; identify critical roadmap decisions; gather constrained stakeholder input; sequence investments; and communicate tradeoffs succinctly.
5. **Validate the experience** — critique related and unrelated products, build only enough interactive fidelity to simulate the intended experience, give every screen one clear user goal, and collect evidence before committing to full implementation.
6. **Plan and deliver** — turn objectives into small, specific backlog items; use coarse sizing early; split oversized work; cover the complete experience and technical surface; and connect delivery work to outcomes.
7. **Launch and operate** — extend the coursework with accountable go/no-go evidence, staged rollout, adoption, service ownership, rollback, incident response, AI/model operations, and sunset controls.
8. **Measure and improve** — define a focused metric set precisely, including calculation rules, strengths, and failure modes; assess hypotheses with intellectual honesty; avoid attribution claims when changes or populations are confounded; recommend roadmap changes from evidence; and match experimentation methods to lifecycle maturity.

The lifecycle is iterative rather than a one-way stage gate. New evidence can return work to an earlier stage, but every transition must record what was learned, what remains uncertain, and who owns the decision.

## Artifact-by-artifact source map

| Artifact | Contribution to the operating model |
|---|---|
| `README.md` | Inventory and grouping of the source package. |
| `ctech101_course-transcript.pdf` | Full discovery method: customer journeys, problem selection, interviews, empathy, personas, and customer-first thinking. |
| `ctech101_glossary.pdf` | Working definitions for journey, empathy, hypothesis, product manager, problem/solution space, interview, and persona. |
| `ctech101_steps-for-choosing-the-right-problem.pdf` | Problem-selection questions covering pain, impact, frequency, alternatives, capabilities, competitors, and risks. |
| `ctech101_interview-template.pdf` | Reusable interview structure with introduction, themes, questions, notes, and closing. |
| `ctech101_watch-or-listen-to-good-interviewers.pdf` | Interviewer self-improvement through observation and critique. |
| `ctech101_guide-for-defining-user-personas.pdf` | Persona dimensions for enterprise, small-business, and consumer products; user/buyer distinction. |
| `ctech101_action-plan.pdf` | Objective-to-strategy-to-steps-to-timeline-to-measurement action structure. |
| `ctech102_activity-prioritize-objectives.pdf` | Explicit ranking and deprioritization under limited capacity. |
| `ctech102_activity-identify-key-results.pdf` | Three to five measurable quarterly key results per prioritized objective and team debate before finalization. |
| `ctech102_action-plan.pdf` | Vision and goals translated into strategies, steps, time horizons, and results. |
| `eCornell - Page 1 Product Vision and Goals - Drawing the Business.jpeg` | Acquisition, registration/download, onboarding, lifecycle states, behavioral definitions, and transitions as one business system. |
| `ctech103_draft-a-factor-list.pdf` | Start prioritization with an explicit, contextual factor set rather than a generic score. |
| `ctech103_factors-to-factor-in.pdf` | Baseline factor categories: objectives, engineering/financial cost, delay risk, industry, customer, regulatory, country/language. |
| `ctech103_find-key-roadmap-decisions.pdf` | Surface one to three critical decisions, evidence needs, and affected parties before drafting the roadmap. |
| `ctech103_collect-feedback-template.pdf` | Constrained stakeholder allocation to force tradeoffs and reveal differences between advocacy and actual priority. |
| `CTECH103_course_project - Thomas Graham.docx` | End-to-end roadmap process: factors, single project repository, rankings, sequencing, investment allocation, and concise rationale. |
| `Project Repository - Thomas Graham.xlsx` | Applied factor framework and roadmap for healthcare product ideas, including mission, compliance, integration, scalability, time, effort, ranking, and quarterly sequencing. |
| `ctech104_activity-critiquing-a-related-product.pdf` | Analyze analogous products by target user, problem, design strengths, and improvements. |
| `ctech104_activity-critiquing-an-unrelated-product.pdf` | Transfer design principles from products outside the immediate category. |
| `ctech104_tool_best-practices-for-prototypes.pdf` | Low-fidelity, goal-focused, interactive prototype design: content, inputs, actions, navigation, flexibility, and simplicity. |
| `ctech105_course_project.docx` | Metric definitions, dashboard design, hypothesis validation, confounding and segmentation, and evidence-based roadmap changes. |
| `ctech105_tool_product-lifecycle.pdf` | Lifecycle-specific balance of vision, customer feedback, A/B testing, optimization, and exploratory investment. |
| `ctech105_action-plan.pdf` | Analytics and iteration translated into action, ownership, time horizons, and measurement. |
| `Grades for Thomas Graham_ Product Analytics and Iteration.pdf` | Confirms completion and full credit for the analytics and iteration assignments; it is not a process framework. |
| `ctech106_activity-create-a-backlog.pdf` | Small, specific, outcome-linked backlog items; coarse sizing; decomposition; and coverage of product and integration surfaces. |

## Applied example retained from Thomas's work

The workbook and roadmapping project demonstrate a healthcare-aware prioritization model. The reusable lesson is not the ranking itself; it is the requirement to make context-specific tradeoffs visible. In that example, mission alignment, regulation and privacy, competitive advantage, system integration, scalability, time to market, and engineering complexity all influence sequencing.

The product-flow diagram adds an important behavioral layer. It connects acquisition channels to registration or download, onboarding, and observable customer states. Each state is defined by behavior, while transitions such as disengagement and re-engagement become product opportunities and measurement points.

## Gaps the agent must deliberately close

The coursework is strong on product discovery, prioritization, prototyping, backlog formation, and analytics. A production-grade Lead AI Product Manager also needs explicit controls for:

- decision, risk, dependency, and assumption logs;
- ownership, RACI, release readiness, rollback, and post-release monitoring;
- evidence provenance and separation of fact, inference, assumption, recommendation, and decision;
- AI model quality, data rights, safety, bias, privacy, security, human oversight, cost, latency, and failure recovery;
- autonomous preparation that preserves human approval for consequential or external actions;
- phase gates that prevent invented research, false precision, unsupported attribution, and output-only delivery reporting.

These controls extend the coursework without replacing it.
