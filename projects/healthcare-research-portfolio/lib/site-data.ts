export type CaseStudyVisibility = "featured" | "supporting" | "archive";
export type Recommendation =
  | "flagship"
  | "supporting"
  | "archive candidate"
  | "needs deeper extraction";
export type Strength = "High" | "Medium" | "Emerging";

export type CaseStudyMatrix = {
  studyName: string;
  domain: string;
  problemType: string;
  methods: string[];
  proofStrength: Strength;
  outcomeStrength: Strength;
  publicSensitivity: string;
  recommendation: Recommendation;
};

export type CaseStudy = {
  title: string;
  slug: string;
  orgOrDomain: string;
  timeframe: string;
  role: string;
  visibility: CaseStudyVisibility;
  matrix: CaseStudyMatrix;
  context: string[];
  problem: string[];
  methods: string[];
  whatIDid: string[];
  whatILearned: string[];
  decisionOrChange: string[];
  outcomeOrEvidence: string[];
  brandSignal: string;
  pullQuote: string;
  sensitivityNotes: string;
};

export type ArchiveProject = {
  title: string;
  role: string;
  era: string;
  summary: string;
  category: string;
};

export const siteMeta = {
  title: "Thomas Graham",
  role: "Director-level User Research | Continuous Discovery | ResearchOps | Executive Storytelling",
  heroTitle: "Research strategy for complex digital services.",
  heroSummary:
    "I help teams turn ambiguity into sharper product, service, and operational decisions through continuous discovery, systems thinking, and executive-ready storytelling.",
  shortBio:
    "Thomas Graham is a director-level research leader with 20+ years across user research, product design, and delivery. His work spans healthcare, enterprise platforms, government programs, and experience design systems where trust, clarity, and operating friction matter.",
  contactEmail: "thomas_graham@me.com",
  linkedIn: "https://www.linkedin.com/in/thomasagraham/",
  location: "Orlando, Florida",
  resumeLabel: "Resume and selected highlights available on request.",
};

export const proofPoints = [
  "20+ years across research, product design, and delivery",
  "Continuous discovery and ResearchOps leadership",
  "Executive storytelling for complex service and platform decisions",
  "Cross-industry work spanning healthcare, enterprise, government, and media",
];

export const practicePillars = [
  {
    title: "Discovery With Teeth",
    description:
      "I build programs that keep teams close to customers while staying anchored in real product, service, and business decisions.",
  },
  {
    title: "Systems, Not Symptoms",
    description:
      "I look for the operational and structural causes behind friction, whether the signal starts in interviews, usability sessions, support data, or workflow analysis.",
  },
  {
    title: "Decision Narratives",
    description:
      "The job is not to make research louder. It is to make the next decision clearer, safer, and easier to act on.",
  },
];

export const fieldNotes = [
  {
    title: "Trust fails before task completion fails",
    body: "When systems speak in internal language, hide their state, or hand people off without context, support demand rises even when the path technically exists.",
  },
  {
    title: "Operational data is research data",
    body: "Call summaries, escalation patterns, and service logs often reveal the same story as interviews: where the product stops feeling understandable.",
  },
  {
    title: "Good reporting changes the room",
    body: "The most useful artifacts do not just summarize findings. They help leaders see the system differently and choose what to do next.",
  },
];

export const careerHighlights = [
  {
    period: "2020 - Present",
    title: "User Experience Researcher",
    org: "AdventHealth",
    summary:
      "Embedded research partner across web and mobile experiences, leading mixed-methods research, continuous discovery, and research workflow improvements that reduced time-to-insight and helped teams stay grounded in patient needs.",
  },
  {
    period: "2018 - 2020",
    title: "Product Designer (Discovery and Research)",
    org: "Hitachi Vantara",
    summary:
      "Facilitated discovery, problem framing, workshop synthesis, and experience definition for a complex data platform while partnering closely with product and engineering.",
  },
  {
    period: "2016 - 2017",
    title: "Director, UX Design",
    org: "Ascentus",
    summary:
      "Led qualitative and quantitative research, experimentation, and design operations across web and mobile products, contributing to measurable growth in call volume and ad revenue.",
  },
  {
    period: "2004 - 2016",
    title: "Product Design, Program Delivery, and Creative Leadership",
    org: "Team Cymru and Carley Corporation",
    summary:
      "Moved between product design, user research, brand systems, simulation programs, and cross-functional team leadership in high-stakes and highly structured environments.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Telephony Data Analysis",
    slug: "telephony-data-analysis",
    orgOrDomain: "Healthcare access and support systems",
    timeframe: "Recent healthcare research program",
    role: "Director-level user research partner",
    visibility: "featured",
    matrix: {
      studyName: "Telephony Data Analysis",
      domain: "Healthcare",
      problemType: "Support demand and access friction",
      methods: [
        "Operational analysis",
        "AI-generated call summary review",
        "Transcript spot checks",
        "System synthesis",
      ],
      proofStrength: "High",
      outcomeStrength: "High",
      publicSensitivity: "Case-by-case",
      recommendation: "flagship",
    },
    context: [
      "I analyzed AI-generated call summaries from the Five9 CDS dashboard to understand why patients were contacting support while trying to use digital tools.",
      "The calls looked different on the surface - login failures, missing verification codes, password resets, and generic account trouble - but they clustered around the same readiness problem.",
    ],
    problem: [
      "Support demand was being interpreted as isolated defects instead of one compounding access journey.",
      "Without a clearer frame, teams risked optimizing symptoms rather than the relationship between identity, recovery, trust, and patient intent.",
    ],
    methods: [
      "Operational review of AI-generated call summaries",
      "Transcript spot checks to validate ambiguous categories",
      "Theme clustering across login, MFA, verification, and password recovery issues",
      "System-level synthesis focused on decision framing",
    ],
    whatIDid: [
      "Reframed scattered support topics as one access-and-identity lifecycle instead of separate bugs.",
      "Distinguished symptom language from likely root causes so product and service partners could reason about the journey coherently.",
      "Outlined design and policy implications, including system-state visibility, aligned recovery actions, and proportional security requirements.",
    ],
    whatILearned: [
      "Patients were not failing because they lacked motivation; they were being blocked by security steps they could not interpret or recover from.",
      "Different call categories often represented the same experience unfolding at different points in the access flow.",
    ],
    decisionOrChange: [
      "Shift the team conversation away from isolated login defects and toward access readiness as a service problem.",
      "Evaluate whether recovery actions match actual system conditions and whether strict requirements align with the sensitivity of the data being accessed.",
      "Use the analysis to reduce unnecessary support demand without weakening protection for sensitive records.",
    ],
    outcomeOrEvidence: [
      "Roughly a third of calls explicitly referenced verification or message delivery, with an even larger share tied to login and password recovery failures.",
      "The study created a clearer strategic frame for where to intervene: communication, recovery design, security proportionality, and support escalation logic.",
    ],
    brandSignal:
      "Shows how I connect operational data, product friction, and service behavior into a strategy leaders can act on.",
    pullQuote:
      "These were not separate failures. They were different symptoms of the same access system failing patients in different ways.",
    sensitivityNotes:
      "Public summary keeps operational language broad while preserving the core systems insight.",
  },
  {
    title: "Wayfinding Report Out",
    slug: "wayfinding-report-out",
    orgOrDomain: "Healthcare navigation and service experience",
    timeframe: "Recent healthcare research program",
    role: "Research strategy lead",
    visibility: "featured",
    matrix: {
      studyName: "Wayfinding - Report Out",
      domain: "Healthcare",
      problemType: "Navigation stress and vendor evaluation",
      methods: [
        "Comparative evaluation",
        "Survey research",
        "Vendor assessment",
        "Synthesis",
      ],
      proofStrength: "High",
      outcomeStrength: "High",
      publicSensitivity: "Case-by-case",
      recommendation: "flagship",
    },
    context: [
      "This report compared indoor navigation vendors and examined how hospital wayfinding affects confidence, stress, and on-time arrival.",
      "The work had to balance participant expectations, environmental constraints, and vendor reality rather than judging the tools in a vacuum.",
    ],
    problem: [
      "Patients were already navigating stressful, disjointed physical environments where poor signage, similar-looking buildings, and long walking distances compounded anxiety.",
      "The team needed evidence strong enough to guide vendor selection and implementation strategy, not just a feature checklist.",
    ],
    methods: [
      "Survey analysis across 120 respondents",
      "Cross-vendor comparison of Pointr, Situm, and MappedIn",
      "Pattern synthesis on orientation, live-location trust, POI completeness, and rerouting clarity",
      "Decision-focused recommendations for adoption",
    ],
    whatIDid: [
      "Connected participant needs to a broader implementation strategy instead of treating the work as a simple interface comparison.",
      "Separated what people wanted from digital navigation from what would actually make them trust it in a healthcare setting.",
      "Summarized vendor strengths, weak points, and operational caveats in language leaders could act on.",
    ],
    whatILearned: [
      "People want indoor navigation because current navigation creates stress, confusion, and delays - but trust collapses quickly when orientation or live location drift.",
      "The strongest solution was not the most visually polished one; it was the one that felt most reliable under real-world conditions.",
    ],
    decisionOrChange: [
      "Use wayfinding as a system-level experience problem, not just a mapping feature.",
      "Prioritize orientation, live-location reliability, and content accuracy in any rollout.",
      "Use the findings to guide vendor selection and implementation priorities rather than defaulting to novelty or visual appeal.",
    ],
    outcomeOrEvidence: [
      "Across 120 respondents, participants consistently linked navigation quality to reduced stress, increased confidence, and a better chance of arriving on time.",
      "The report identified one vendor as the most reliable participant experience and clarified the real adoption risks of the others.",
    ],
    brandSignal:
      "Demonstrates strategy work that connects user research, service design, implementation constraints, and executive recommendation-making.",
    pullQuote:
      "People liked the idea of indoor navigation. What they questioned was whether the system would stay trustworthy once they were under stress.",
    sensitivityNotes:
      "Vendor names are retained because they strengthen the public narrative and do not expose internal implementation detail.",
  },
  {
    title: "Discovery Study on the Zocdoc Experience",
    slug: "zocdoc-discovery-study",
    orgOrDomain: "Healthcare provider search and scheduling",
    timeframe: "Recent healthcare research program",
    role: "Discovery research lead",
    visibility: "featured",
    matrix: {
      studyName: "Findings - Discovery Study on ZocDoc Experience",
      domain: "Healthcare",
      problemType: "Scheduling adoption and search trust",
      methods: [
        "Discovery interviews",
        "Observation",
        "Behavior analysis",
        "Synthesis",
      ],
      proofStrength: "High",
      outcomeStrength: "Medium",
      publicSensitivity: "Case-by-case",
      recommendation: "flagship",
    },
    context: [
      "This discovery study examined why patients were or were not scheduling appointments through digital services by observing them use Zocdoc as a third-party comparison point.",
      "The goal was not to copy another product. It was to use real behavior to understand what built confidence, what created doubt, and what caused search abandonment.",
    ],
    problem: [
      "Digital scheduling adoption depends on trust in the search experience long before someone books a visit.",
      "Participants needed to feel confident that results matched their insurance, specialty needs, and location expectations.",
    ],
    methods: [
      "Discovery interviews",
      "Observed task walkthroughs",
      "Thematic synthesis around first impressions, sorting behavior, map usage, ratings, and provider fit",
      "Behavior-led interpretation of trust signals",
    ],
    whatIDid: [
      "Used a live market benchmark to uncover what patients expected from provider search and scheduling.",
      "Identified which parts of the search experience increased confidence, and which mismatches quickly eroded trust.",
      "Translated observed friction into product implications around specialty clarity, insurance fit, sorting, and location handling.",
    ],
    whatILearned: [
      "Insurance information and clear search inputs create early confidence, but irrelevant providers and confusing sort logic can undo that trust immediately.",
      "Patients want search to feel precise and honest; when the interface looks organized but behaves inconsistently, confidence drops fast.",
    ],
    decisionOrChange: [
      "Design provider search around clarity of fit, not just breadth of options.",
      "Make insurance compatibility, specialty labeling, and location sorting easier to understand at a glance.",
      "Use third-party comparison behavior as a way to sharpen expectations for internal scheduling experiences.",
    ],
    outcomeOrEvidence: [
      "Participants specifically valued insurance visibility, specialist variety, and focused search-page structure.",
      "The study surfaced repeat confusion around sorting, specialty mismatch, and the relationship between maps, filtering, and trust.",
    ],
    brandSignal:
      "Shows my ability to use discovery research to reveal the trust mechanics behind adoption, not just the surface usability issues.",
    pullQuote:
      "The interface did not fail because it lacked options. It failed when the results made people question whether the system really understood their need.",
    sensitivityNotes:
      "Public summary preserves the behavioral insights while keeping any internal downstream decisions generalized.",
  },
  {
    title: "Onboarding Experience Evaluation",
    slug: "onboarding-experience-evaluation",
    orgOrDomain: "Healthcare onboarding and record connection",
    timeframe: "Recent healthcare research program",
    role: "Research lead and study architect",
    visibility: "featured",
    matrix: {
      studyName: "Onboarding Experience Evaluation",
      domain: "Healthcare",
      problemType: "Onboarding friction and benchmark usability",
      methods: [
        "Moderated usability testing",
        "Unmoderated usability testing",
        "Benchmark comparison",
        "Quantitative and qualitative analysis",
      ],
      proofStrength: "High",
      outcomeStrength: "Medium",
      publicSensitivity: "Case-by-case",
      recommendation: "flagship",
    },
    context: [
      "This study compared three onboarding approaches: the current process, a streamlined iteration, and the native MyChart benchmark experience.",
      "The work was designed to establish baseline usability, satisfaction, and trust metrics before further design investment.",
    ],
    problem: [
      "The onboarding flow required multiple steps to register, verify identity, and connect records, creating friction before patients had received value.",
      "The team needed a fair benchmark across variants rather than relying on intuition about what felt simpler.",
    ],
    methods: [
      "Moderated and unmoderated usability testing",
      "Within-subject comparison across three onboarding experiences",
      "Quantitative measures including SEQ, SUS, CSAT, time to completion, error rate, and task completion",
      "Qualitative debriefs, observed behaviors, and follow-up prompts",
    ],
    whatIDid: [
      "Built the study design so each participant could move through all three flows in a counterbalanced order.",
      "Defined a measurement strategy that treated onboarding as both a usability and trust experience.",
      "Structured tasks and metrics to surface not just where people struggled, but when their confidence rose or dropped.",
    ],
    whatILearned: [
      "The right benchmark is not just speed. It is the combination of completion, confidence, perceived ease, and trust.",
      "Streamlining matters, but only when the experience still feels safe, understandable, and appropriately guided.",
    ],
    decisionOrChange: [
      "Use the benchmark to decide which onboarding patterns deserve refinement, simplification, or replacement.",
      "Treat onboarding as the first trust interaction, not just a registration hurdle.",
      "Anchor future decisions in measurable ease, confidence, and satisfaction instead of preference alone.",
    ],
    outcomeOrEvidence: [
      "The study established a reusable baseline across three onboarding models and created a decision framework for future iterations.",
      "It gave the team a direct way to compare patient expectations, friction points, and success signals across variants.",
    ],
    brandSignal:
      "Captures how I turn an abstract design debate into a benchmarked research program with both qualitative depth and quantitative discipline.",
    pullQuote:
      "The job was not simply to shorten the flow. It was to understand which version made people feel most capable, informed, and willing to continue.",
    sensitivityNotes:
      "Public summary keeps version names broad and focuses on the research structure and decision value.",
  },
  {
    title: "Connect Records Prototype Findings",
    slug: "connect-records-findings",
    orgOrDomain: "Healthcare account activation and support avoidance",
    timeframe: "Recent healthcare research program",
    role: "Research lead and synthesis partner",
    visibility: "supporting",
    matrix: {
      studyName: "Findings",
      domain: "Healthcare",
      problemType: "Prototype comparison and support deflection",
      methods: [
        "Multivariate prototype testing",
        "Open-text analysis",
        "Confidence measures",
        "Recommendation framing",
      ],
      proofStrength: "High",
      outcomeStrength: "Medium",
      publicSensitivity: "Case-by-case",
      recommendation: "supporting",
    },
    context: [
      "This prototype study compared three variations of a connect-records flow for net-new patients who did not have an after-visit summary code.",
      "The work focused on what actually drove support-seeking behavior rather than assuming the issue was button visibility alone.",
    ],
    problem: [
      "The product team needed to know whether patients were calling support because they missed an option or because the experience left them uncertain about what a code was and what to do next.",
      "Without that distinction, interface tweaks could easily miss the bigger explanation gap.",
    ],
    methods: [
      "Multivariate prototype study with 45 total participants",
      "Confidence and expectation-alignment measures on 1-7 scales",
      "Likelihood-to-call assessment",
      "Open-text analysis of where participants wanted additional support",
    ],
    whatIDid: [
      "Interpreted performance differences across three concepts instead of treating any single metric as decisive.",
      "Connected the quantitative pattern to a broader hypothesis about uncertainty, code meaning, and support demand.",
      "Outlined next steps, including a rerun, deeper Five9 analysis, and instrumentation with Amplitude tags.",
    ],
    whatILearned: [
      "Support demand was less likely to come from not noticing the option and more likely to come from not understanding the system around it.",
      "Even straightforward flows can create support demand when the model behind them is unclear.",
    ],
    decisionOrChange: [
      "Align the team on the real pattern before over-optimizing the visible control.",
      "Investigate call drivers and behavioral analytics in parallel with interface refinement.",
    ],
    outcomeOrEvidence: [
      "Across 45 participants, the overall pattern suggested low need for added support but meaningful uncertainty about code logic and next steps.",
      "The study prevented the team from over-focusing on a visibility problem that was likely part of a larger comprehension issue.",
    ],
    brandSignal:
      "Shows how I protect teams from shallow conclusions by interpreting the pattern behind the metric.",
    pullQuote:
      "The question was not just whether people saw the option. It was whether the system gave them enough context to trust what it meant.",
    sensitivityNotes:
      "Kept internal variant labels and product details generalized for public use.",
  },
  {
    title: "Hope 3.0 Findings",
    slug: "hope-3-findings",
    orgOrDomain: "Healthcare chat assistance and billing support",
    timeframe: "Recent healthcare research program",
    role: "Research lead and service design partner",
    visibility: "supporting",
    matrix: {
      studyName: "Hope 3.0 Findings copy",
      domain: "Healthcare",
      problemType: "Chat effectiveness, billing guidance, and escalation design",
      methods: [
        "Moderated and unmoderated research",
        "Task-based evaluation",
        "CSAT and CES analysis",
        "Qualitative synthesis",
      ],
      proofStrength: "High",
      outcomeStrength: "High",
      publicSensitivity: "Case-by-case",
      recommendation: "supporting",
    },
    context: [
      "This study evaluated a chat experience designed to help patients with billing, price estimation, and support routing.",
      "The work focused on how people move through uncertainty when a conversational interface is expected to explain, guide, or escalate.",
    ],
    problem: [
      "People wanted outcomes, not detours. Generic link-outs, estimator friction, and billing jargon made the assistant feel less useful than it sounded.",
      "Trust was vulnerable to reliability issues, hidden chat entry points, and weak escalation moments.",
    ],
    methods: [
      "Task-based moderated and unmoderated evaluation",
      "CSAT, CES, task completion, helpfulness, confidence, and containment measures",
      "Open-text synthesis of friction and guidance sentiment",
      "Behavior analysis around escalation and trust",
    ],
    whatIDid: [
      "Reframed the assistant from a content-delivery tool into a service-guidance experience with clear trust thresholds.",
      "Identified where people needed plain-language explanation, stronger narrowing, and a more obvious path to a human.",
      "Used both quantitative metrics and qualitative behavior to separate high-value capabilities from fragile execution.",
    ],
    whatILearned: [
      "Participants liked the promise of billing and price-estimate help, but they quickly lost confidence when the assistant pointed outward instead of resolving inward.",
      "Escalation design is part of the product, not a fallback after the product fails.",
    ],
    decisionOrChange: [
      "Clarify estimator prerequisites and billing language in plain terms.",
      "Make escalation moments easier to see after repeated low-confidence exchanges.",
      "Strengthen reliability and discoverability, especially on mobile.",
    ],
    outcomeOrEvidence: [
      "Overall metrics showed mixed-to-negative performance: 45% CSAT, 57.6% task completion, 63% containment, and 34.3% helpfulness.",
      "The analysis highlighted where the assistant already delivered value and where the interaction model broke trust.",
    ],
    brandSignal:
      "Demonstrates how I evaluate AI- and chat-adjacent experiences as service systems with real trust and escalation consequences.",
    pullQuote:
      "Participants did not want more options. They wanted one clear next step that made the problem feel smaller.",
    sensitivityNotes:
      "Public framing keeps internal environment issues broad while preserving the strategic lessons.",
  },
  {
    title: "Initial Wholeness Findings",
    slug: "initial-wholeness-findings",
    orgOrDomain: "Healthcare emotional support and spiritual care",
    timeframe: "Recent healthcare research program",
    role: "Field research lead",
    visibility: "supporting",
    matrix: {
      studyName: "Initial Wholeness - Findings",
      domain: "Healthcare",
      problemType: "Emotional support feature validation",
      methods: [
        "Site visits",
        "Observation",
        "Participant interviews",
        "Experience synthesis",
      ],
      proofStrength: "Medium",
      outcomeStrength: "Medium",
      publicSensitivity: "Case-by-case",
      recommendation: "supporting",
    },
    context: [
      "I conducted site visits in a hospital lobby to evaluate a prayer-request feature and understand how patients perceived its authenticity, usefulness, and emotional tone.",
      "This was a good example of research where emotional resonance mattered as much as task clarity.",
    ],
    problem: [
      "The feature needed to feel supportive and credible, not performative or confusing.",
      "The team also needed to understand how form structure, option labels, and channel preferences shaped the experience.",
    ],
    methods: [
      "In-person site visits",
      "Feature interaction observation",
      "Expectation and preference interviews",
      "Synthesis across emotional response, form usability, and communication preferences",
    ],
    whatIDid: [
      "Assessed both the emotional tone and the interaction model instead of treating the feature as a simple form.",
      "Surfaced confusion between types of prayer actions and how the sequence of prompts shaped understanding.",
      "Highlighted the difference between what helped internally and what created immediate value for the patient.",
    ],
    whatILearned: [
      "The feature had strong emotional resonance, even when some interface details were confusing.",
      "Patients wanted clarity on what would happen next and showed a strong preference for text as a communication channel.",
    ],
    decisionOrChange: [
      "Revisit the order and wording of prayer options so intent is easier to understand at first glance.",
      "Clarify what happens after submission and prioritize text-based follow-up where appropriate.",
    ],
    outcomeOrEvidence: [
      "Nearly all participants described the feature positively and felt uplifted by it, which signaled strong emotional value despite local friction.",
      "The study gave the team specific guidance on authenticity, sequencing, and communication channels.",
    ],
    brandSignal:
      "Shows that I can research emotionally sensitive experiences without flattening them into generic usability language.",
    pullQuote:
      "Even when people hesitated over the wording, the feature still carried emotional weight. That difference mattered.",
    sensitivityNotes:
      "Public summary keeps the feature framing broad while preserving its emotional and service-design relevance.",
  },
  {
    title: "Wholeness Moderated and Unmoderated Findings",
    slug: "wholeness-mixed-method-findings",
    orgOrDomain: "Healthcare wellness feature concept validation",
    timeframe: "Recent healthcare research program",
    role: "Mixed-method research lead",
    visibility: "supporting",
    matrix: {
      studyName: "Findings from Moderated_Unmoderated Interviews",
      domain: "Healthcare",
      problemType: "Concept clarity and trust",
      methods: [
        "Moderated interviews",
        "Unmoderated testing",
        "Concept evaluation",
        "Theme synthesis",
      ],
      proofStrength: "Medium",
      outcomeStrength: "Medium",
      publicSensitivity: "Case-by-case",
      recommendation: "supporting",
    },
    context: [
      "This mixed-method study examined how people interpreted the purpose and value of a feature called Wholeness.",
      "The work looked beyond surface appeal to understand whether the concept felt meaningful, clear, and trustworthy enough to sustain use.",
    ],
    problem: [
      "Participants liked the idea of reflective and whole-person care, but many were unclear about what the feature actually did and how their data would be used.",
      "Without clarity and transparency, emotional resonance alone would not create durable trust.",
    ],
    methods: [
      "Moderated interviews",
      "Unmoderated sessions",
      "TL;DR synthesis across resonance, confusion, technical issues, and privacy concerns",
      "Decision-focused framing around purpose and repeated use",
    ],
    whatIDid: [
      "Separated what resonated emotionally from what blocked credibility.",
      "Synthesized concept appeal, technical friction, and privacy concerns into one narrative about trust and repeat engagement.",
      "Translated the findings into a clearer agenda: explain purpose, show value, and reveal how results are used.",
    ],
    whatILearned: [
      "People often project their own meaning onto vague wellness language; if the product never resolves that ambiguity, trust erodes.",
      "A concept can feel aligned with a mission and still fail if the purpose remains too abstract.",
    ],
    decisionOrChange: [
      "Clarify why the feature matters and how results are used.",
      "Strengthen transparency so the feature feels credible, meaningful, and safe to return to.",
    ],
    outcomeOrEvidence: [
      "Participants consistently liked the easy UI and whole-person-care framing, but unclear purpose and privacy concerns weakened confidence.",
      "The research gave the team a sharper story for how the concept needed to be explained before it could grow.",
    ],
    brandSignal:
      "Reinforces my focus on meaning-making, trust, and the language systems around digital products.",
    pullQuote:
      "People were open to the idea. They just needed the product to explain what it was doing with equal care.",
    sensitivityNotes:
      "Public framing keeps the product name but generalizes internal technical detail.",
  },
  {
    title: "MyChart Bedside ED Onboarding",
    slug: "mychart-bedside-ed-onboarding",
    orgOrDomain: "Healthcare onboarding operations and measurement",
    timeframe: "Recent healthcare research program",
    role: "Research operations and study design lead",
    visibility: "supporting",
    matrix: {
      studyName: "MyChart Bedside ED Onboarding",
      domain: "Healthcare",
      problemType: "Journey timing and operational study design",
      methods: [
        "Operational planning",
        "Flow mapping",
        "Pilot design",
        "Run-kit creation",
      ],
      proofStrength: "Medium",
      outcomeStrength: "Emerging",
      publicSensitivity: "Case-by-case",
      recommendation: "supporting",
    },
    context: [
      "This artifact documented a tightly scoped research plan for understanding how long it takes a new patient to move from invitation text to a working Bedside ED account.",
      "It combined journey mapping, operational ownership, and measurement design into one executable research system.",
    ],
    problem: [
      "The team needed a trustworthy time-to-value baseline across invite handling, app install, login, and access to bedside features.",
      "Without a precise run plan, the study would likely drift, backtrack, or miss the moments creating the biggest delays.",
    ],
    methods: [
      "Flow mapping with subject-matter experts",
      "Run-kit and timing-form design",
      "Pilot planning",
      "Step-level timing and friction capture",
    ],
    whatIDid: [
      "Turned a messy end-to-end question into a sequenced research plan with owners, artifacts, success criteria, and timing measures.",
      "Defined the bookends, operational logistics, pilot steps, and analysis structure before fielding began.",
      "Made the research executable by others instead of leaving the method trapped in my head.",
    ],
    whatILearned: [
      "Research quality often depends on operational clarity before the first participant ever starts.",
      "When onboarding spans messaging, app install, authentication, and product entry, timing has to be captured at the step level to stay meaningful.",
    ],
    decisionOrChange: [
      "Use a run kit, flow map, and storage conventions to make the study repeatable and analyzable.",
      "Measure the journey as a chain of handoffs rather than one monolithic onboarding number.",
    ],
    outcomeOrEvidence: [
      "The artifact defined the path to a report with timing tables, top friction themes, and highlight clips.",
      "It shows how I build the operational backbone that makes later findings credible.",
    ],
    brandSignal:
      "Highlights the ResearchOps side of my work: the systems and scaffolding that make discovery repeatable.",
    pullQuote:
      "Sometimes the most strategic research move is designing the system that lets the study happen cleanly in the first place.",
    sensitivityNotes:
      "Public summary focuses on operational rigor rather than internal program specifics.",
  },
  {
    title: "App Features and Icons",
    slug: "app-features-and-icons",
    orgOrDomain: "Mobile product experience",
    timeframe: "2020",
    role: "Product and UX design partner",
    visibility: "supporting",
    matrix: {
      studyName: "App_Features_and_Icons_2020-05-11",
      domain: "Digital product",
      problemType: "Feature discoverability and interface language",
      methods: ["Artifact review", "Interface inventory"],
      proofStrength: "Emerging",
      outcomeStrength: "Emerging",
      publicSensitivity: "Needs source review",
      recommendation: "needs deeper extraction",
    },
    context: [
      "This export appears to be image-based, so I treated it as a directional artifact rather than a fully extractable report.",
      "Based on the title and surrounding program context, the work appears to focus on feature discoverability and icon-language alignment inside the product experience.",
    ],
    problem: [
      "Feature naming and icon systems can create silent friction when people cannot quickly interpret what actions are available to them.",
      "Because the export is image-based, a deeper public retelling should come from the source deck rather than speculation.",
    ],
    methods: [
      "Artifact review",
      "Interface inventory",
      "Conservative public reframing based on available evidence",
    ],
    whatIDid: [
      "Preserved the study inside the new research ledger so it remains part of the portfolio system instead of disappearing.",
      "Documented it honestly as an artifact that needs a deeper source pass before it should become a flagship story.",
    ],
    whatILearned: [
      "Strong portfolio curation includes knowing when not to over-claim from a thin export.",
    ],
    decisionOrChange: [
      "Keep the artifact visible as supporting evidence and return to the original source when we want a fuller public case study.",
    ],
    outcomeOrEvidence: [
      "Image-based export; deeper extract pending from the original presentation file.",
    ],
    brandSignal:
      "Signals rigor in public storytelling and a high bar for what counts as proof.",
    pullQuote:
      "Not every artifact needs to become a headline case study. Some deserve a cleaner source pass first.",
    sensitivityNotes:
      "Public summary is intentionally conservative because the PDF export is image-based.",
  },
  {
    title: "Chat Assistant Study",
    slug: "chat-assistant-study",
    orgOrDomain: "Conversational experience research",
    timeframe: "2020",
    role: "Research and product strategy partner",
    visibility: "supporting",
    matrix: {
      studyName: "Chat_Assistant_Study_2020-04-07",
      domain: "Digital product",
      problemType: "Chat assistance and expectation setting",
      methods: ["Artifact review", "Directional synthesis"],
      proofStrength: "Emerging",
      outcomeStrength: "Emerging",
      publicSensitivity: "Needs source review",
      recommendation: "needs deeper extraction",
    },
    context: [
      "This export is also image-based, which limits how specifically it can be reframed without the original source presentation.",
      "The title suggests an early study around assistant expectations, conversational support, and where chat could or could not reduce friction.",
    ],
    problem: [
      "Chat experiences often fail when people expect guided help and receive generic routing instead.",
      "A public version of this story should be grounded in the original deck rather than unsupported detail from the export alone.",
    ],
    methods: [
      "Artifact review",
      "Conservative directional synthesis",
      "Portfolio preservation for later source-based rewrite",
    ],
    whatIDid: [
      "Included the study in the portfolio ledger while clearly separating it from the stronger, text-extractable research artifacts.",
      "Used restraint in the public retelling so the evidence stays credible.",
    ],
    whatILearned: [
      "Some studies belong in the brand system now, even if the public narrative needs a better source artifact later.",
    ],
    decisionOrChange: [
      "Treat this as a supporting artifact until the original presentation can be mined more deeply.",
    ],
    outcomeOrEvidence: [
      "Image-based export; deeper extract pending from the original presentation file.",
    ],
    brandSignal:
      "Maintains a strong threshold for public evidence while keeping the research record intact.",
    pullQuote:
      "Good curation is not just what you show. It is how honestly you show it.",
    sensitivityNotes:
      "Public summary is intentionally conservative because the PDF export is image-based.",
  },
];

export const archiveProjects: ArchiveProject[] = [
  {
    title: "Addiction Center",
    role: "Director, UX Design",
    era: "2016 - 2017",
    category: "Research, experimentation, and product design",
    summary:
      "Led research, testing, and product improvements across a healthcare content and lead-generation experience, contributing to measurable call-volume and revenue gains.",
  },
  {
    title: "Rehab Spot",
    role: "UX and product design",
    era: "2016 - 2017",
    category: "Brand, content, and experience design",
    summary:
      "Designed a treatment-search property with strong content, structure, and interaction framing for users navigating emotionally charged decisions.",
  },
  {
    title: "Team Cymru",
    role: "Product Designer",
    era: "2014 - 2016",
    category: "Enterprise UX, brand systems, and information design",
    summary:
      "Drove UX and research methods across software programs while also leading brand and communication design across U.S. and U.K. teams.",
  },
  {
    title: "Northrop Grumman and Boeing Training Systems",
    role: "Project lead and experience designer",
    era: "2004 - 2014",
    category: "Simulation, workflow, and interface design",
    summary:
      "Led teams delivering high-stakes training and simulation experiences where clarity, sequencing, and operational precision were essential.",
  },
  {
    title: "Pulse Nightclub Fundraiser",
    role: "Brand and campaign design",
    era: "2016",
    category: "Community-centered design",
    summary:
      "Created a rapid-response identity and fundraising campaign around a highly sensitive civic moment, balancing symbolism, urgency, and community meaning.",
  },
  {
    title: "Century III, Universal, Disney, and media work",
    role: "Junior Art Director and media designer",
    era: "1999 - 2004",
    category: "Creative direction, motion, and visual storytelling",
    summary:
      "Earlier work in media production and environmental storytelling that still informs my eye for pacing, composition, and audience attention.",
  },
];

export const organizations = [
  "AdventHealth",
  "Hitachi Vantara",
  "Ascentus",
  "Team Cymru",
  "Carley Corporation",
  "Disney",
  "Universal",
  "Boeing",
  "Northrop Grumman",
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export const featuredCaseStudies = caseStudies.filter(
  (study) => study.visibility === "featured",
);
