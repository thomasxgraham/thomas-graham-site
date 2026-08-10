import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getCaseStudy, caseStudies } from "@/lib/site-data";
import { getReportBlocks, getReportText } from "@/lib/report-text";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

function NarrativeSection({
  id,
  chapter,
  title,
  items,
  className,
}: {
  id?: string;
  chapter: string;
  title: string;
  items: string[];
  className?: string;
}) {
  return (
    <section id={id} className={["article-section", className].filter(Boolean).join(" ")}>
      <p className="eyebrow">Chapter {chapter}</p>
      <h2>{title}</h2>
      <div className="article-section__stack">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} | Thomas Graham`,
    description: study.brandSignal,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const reportText = getReportText(slug);
  const reportBlocks = reportText ? getReportBlocks(reportText) : [];
  const chapters = [
    { id: "abstract", label: "Abstract" },
    { id: "context", label: "Context" },
    { id: "problem", label: "Problem / stakes" },
    { id: "methods", label: "Approach" },
    { id: "role", label: "Role" },
    { id: "learnings", label: "Key learnings" },
    { id: "change", label: "What changed" },
    { id: "evidence", label: "Outcome / evidence" },
    { id: "source", label: "Source report" },
  ];

  return (
    <article className="case-study publication-article">
      <div className="container">
        <header className="publication-article__hero">
          <p className="eyebrow">
            <Link href="/work">Work</Link> / {study.orgOrDomain}
          </p>
          <div className="publication-article__hero-grid">
            <div>
              <h1>{study.title}</h1>
              <p className="case-study__summary">{study.brandSignal}</p>
            </div>
            <div className="publication-article__deck">
              <p className="publication-article__lede">
                {study.context[0]} {study.problem[0]}
              </p>
              <p className="publication-article__sensitivity">
                <strong>Public note:</strong> {study.sensitivityNotes}
              </p>
            </div>
          </div>
        </header>

        <section id="abstract" className="abstract-band">
          <div className="abstract-band__item">
            <span className="eyebrow">Role</span>
            <p>{study.role}</p>
          </div>
          <div className="abstract-band__item">
            <span className="eyebrow">What changed</span>
            <p>{study.decisionOrChange[0]}</p>
          </div>
          <div className="abstract-band__item abstract-band__item--accent">
            <span className="eyebrow">Outcome</span>
            <p>{study.outcomeOrEvidence[0]}</p>
          </div>
          <div className="abstract-band__item abstract-band__item--cool">
            <span className="eyebrow">Proof strength</span>
            <p>
              {study.matrix.proofStrength} proof / {study.matrix.outcomeStrength} outcome
            </p>
          </div>
        </section>

        <div className="publication-article__layout">
          <aside className="article-rail">
            <div className="article-rail__sticky">
              <p className="eyebrow">Contents</p>
              <ol className="article-rail__toc">
                {chapters.map((chapter, index) => (
                  <li key={chapter.id}>
                    <a href={`#${chapter.id}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span>{chapter.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="article-rail__meta">
                <p className="eyebrow">Edition data</p>
                <dl>
                  <div>
                    <dt>Timeframe</dt>
                    <dd>{study.timeframe}</dd>
                  </div>
                  <div>
                    <dt>Recommendation</dt>
                    <dd>{study.matrix.recommendation}</dd>
                  </div>
                  <div>
                    <dt>Methods</dt>
                    <dd>{study.matrix.methods.join(", ")}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </aside>

          <div className="article-body">
            <NarrativeSection id="context" chapter="01" title="Context" items={study.context} />

            <blockquote className="pull-quote article-pull-quote">{study.pullQuote}</blockquote>

            <NarrativeSection
              id="problem"
              chapter="02"
              title="Problem / stakes"
              items={study.problem}
            />

            <NarrativeSection
              id="methods"
              chapter="03"
              title="Approach"
              items={study.methods}
              className="article-section--tint"
            />

            <NarrativeSection id="role" chapter="04" title="My role" items={study.whatIDid} />

            <NarrativeSection
              id="learnings"
              chapter="05"
              title="What I learned"
              items={study.whatILearned}
            />

            <section id="change" className="article-section article-section--split">
              <div>
                <p className="eyebrow">Chapter 06</p>
                <h2>What changed</h2>
              </div>
              <div className="article-section__stack">
                {study.decisionOrChange.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </section>

            <NarrativeSection
              id="evidence"
              chapter="07"
              title="Outcome / evidence"
              items={study.outcomeOrEvidence}
              className="article-section--cool"
            />

            <NarrativeSection
              chapter="08"
              title="Why this matters to my brand"
              items={[study.brandSignal]}
            />

            <section id="source" className="article-section article-section--source">
              <p className="eyebrow">Chapter 09</p>
              <h2>Source report text</h2>
              <p className="article-section__intro">
                The full text below is the extracted report transcript from the PDF
                source. It is lightly normalized for readability, but it remains much
                closer to the original document than the editorial summary above.
              </p>
              {reportBlocks.length > 0 ? (
                <div className="report-transcript">
                  {reportBlocks.map((block, index) => {
                    if (block.type === "heading") {
                      return (
                        <h3
                          key={`${study.slug}-report-heading-${index}`}
                          className="report-transcript__heading"
                        >
                          {block.text}
                        </h3>
                      );
                    }

                    return (
                      <p
                        key={`${study.slug}-report-line-${index}`}
                        className={
                          block.type === "bullet" ? "report-transcript__bullet" : undefined
                        }
                      >
                        {block.text}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <div className="report-transcript report-transcript--empty">
                  <p>
                    This source PDF appears to be image-based, so I could not extract a
                    clean text transcript automatically. The public-facing summary above
                    is preserved, and we can promote this study later once we have the
                    original presentation source.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
