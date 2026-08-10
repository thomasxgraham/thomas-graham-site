const palettes = [
  {
    title: "Paper and ink",
    values: [
      ["Paper", "#f3ebdc"],
      ["Paper strong", "#eadbc4"],
      ["Ink", "#201812"],
      ["Ink soft", "#4e4239"],
    ],
  },
  {
    title: "Editorial accents",
    values: [
      ["Aviation orange", "#b45f2f"],
      ["Muted teal", "#4c6b6d"],
      ["Accent wash", "rgba(180, 95, 47, 0.12)"],
      ["Teal wash", "rgba(76, 107, 109, 0.12)"],
    ],
  },
];

const typeScale = [
  {
    label: "Display",
    className: "system-type system-type--display",
    text: "Research strategy for complex digital services.",
  },
  {
    label: "Section heading",
    className: "system-type system-type--section",
    text: "A modern research portfolio built like a publication.",
  },
  {
    label: "Body",
    className: "system-type system-type--body",
    text: "The site should feel editorial, directional, and credible first. The supporting typography carries dense information without collapsing into a generic app interface.",
  },
];

const surfaceStudies = [
  {
    eyebrow: "Paper field",
    title: "Default reading surface",
    body: "The primary canvas stays warm and open so the site reads like a contemporary publication, not a dashboard.",
    className: "system-surface system-surface--paper",
  },
  {
    eyebrow: "Ink band",
    title: "High-contrast editorial break",
    body: "Use the dark band sparingly for moments that need authority: call to action, pull-quote moments, or section resets.",
    className: "system-surface system-surface--ink",
  },
  {
    eyebrow: "Teal counterweight",
    title: "Cool note for wayfinding and systems content",
    body: "The teal family adds contrast without breaking the mid-century publication mood or overwhelming the paper-and-ink base.",
    className: "system-surface system-surface--teal",
  },
];

export default function SystemPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="system-hero">
          <p className="eyebrow">System</p>
          <h1>Working library for the editorial portfolio.</h1>
          <p>
            This route is the tuning surface for the visual language before it gets
            applied everywhere else. It holds the palette, typography, publication
            patterns, and longform article treatments.
          </p>
        </div>

        <section className="system-section">
          <div className="system-section__intro">
            <p className="eyebrow">Palette</p>
            <h2>Warm paper, stronger contrast, and one cool counterweight.</h2>
          </div>
          <div className="system-palette-grid">
            {palettes.map((palette) => (
              <article key={palette.title} className="system-panel">
                <h3>{palette.title}</h3>
                <div className="swatch-grid">
                  {palette.values.map(([label, value]) => (
                    <div key={label} className="swatch">
                      <div className="swatch__color" style={{ background: value }} />
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="system-section">
          <div className="system-section__intro">
            <p className="eyebrow">Type</p>
            <h2>Publication hierarchy before components.</h2>
          </div>
          <div className="system-stack">
            {typeScale.map((sample) => (
              <article key={sample.label} className="system-panel">
                <p className="eyebrow">{sample.label}</p>
                <div className={sample.className}>{sample.text}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="system-section">
          <div className="system-section__intro">
            <p className="eyebrow">Article rhythm</p>
            <h2>The longform pattern we should carry into the case studies.</h2>
          </div>
          <div className="publication-sample">
            <aside className="sample-sidebar">
              <p className="eyebrow">Contents</p>
              <ul>
                <li>Abstract</li>
                <li>Context</li>
                <li>Approach</li>
                <li>Findings</li>
                <li>Implications</li>
                <li>Source report</li>
              </ul>
            </aside>
            <div className="sample-body">
              <header className="sample-masthead">
                <p className="eyebrow">Volume 01 / Healthcare systems and trust</p>
                <h3>How support behavior exposed an access-system problem, not a login defect.</h3>
                <p>
                  The case-study pattern now separates the editorial story arc from the
                  source material. That lets the page read like a publication first,
                  while still preserving the full report for close reading.
                </p>
              </header>

              <div className="sample-abstract">
                <div>
                  <span className="eyebrow">What changed</span>
                  <p>Shifted the framing from isolated defects to one access readiness lifecycle.</p>
                </div>
                <div>
                  <span className="eyebrow">Methods</span>
                  <p>Operational analysis, transcript spot checks, and systems synthesis.</p>
                </div>
                <div>
                  <span className="eyebrow">Outcome</span>
                  <p>Clearer intervention points for communication, recovery, and proportional security.</p>
                </div>
              </div>

              <section className="sample-section">
                <p className="eyebrow">Chapter 01</p>
                <h3>Context</h3>
                <p>
                  Longform sections should flow as chapters, with dividers and
                  contrasting editorial moments instead of being isolated inside cards.
                </p>
              </section>

              <blockquote className="pull-quote pull-quote--system">
                These were not separate failures. They were different symptoms of the same system.
              </blockquote>

              <section className="sample-section sample-section--tint">
                <p className="eyebrow">Source report</p>
                <p>
                  The full extracted report text should live lower on the page in a
                  calmer treatment so it is accessible without overwhelming the story arc.
                </p>
              </section>
            </div>
          </div>
        </section>

        <section className="system-section">
          <div className="system-section__intro">
            <p className="eyebrow">Contrast</p>
            <h2>Three surfaces to keep the site from feeling visually flat.</h2>
          </div>
          <div className="system-surface-grid">
            {surfaceStudies.map((surface) => (
              <article key={surface.title} className={surface.className}>
                <p className="eyebrow">{surface.eyebrow}</p>
                <h3>{surface.title}</h3>
                <p>{surface.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="system-section">
          <div className="system-section__intro">
            <p className="eyebrow">Appendix style</p>
            <h2>The full report should read like an appendix, not a pile of index cards.</h2>
          </div>
          <div className="system-report">
            <h3>Executive Summary</h3>
            <p>
              The appendix keeps the entire source report on the page, but it shifts
              into a quieter rhythm. Section labels stay visible, bullets remain
              intact, and the measure opens up enough to support long reading.
            </p>
            <p className="system-report__bullet">
              Participants were willing to use the service when it reduced confusion,
              clarified next steps, and felt proportionate to the effort required.
            </p>
            <h3>Recommendations</h3>
            <p>
              This treatment should feel archival and readable, with enough contrast to
              separate it from the editorial summary above without turning into a boxed
              component library aesthetic.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
