import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";
import { caseStudies } from "@/lib/site-data";

export default function WorkPage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="A research ledger rebuilt for the public."
          description="Each study has been reframed around stakes, role, methods, what changed, and why it matters. The matrix below keeps the portfolio honest about proof strength, outcome strength, and sensitivity."
        />

        <div className="work-grid">
          {caseStudies.map((study) => (
            <WorkCard key={study.slug} study={study} />
          ))}
        </div>

        <div className="matrix-shell">
          <div className="matrix-shell__header">
            <p className="eyebrow">Extraction matrix</p>
            <h2>How the case studies were normalized.</h2>
          </div>
          <div className="matrix-table">
            <div className="matrix-table__head">
              <span>Study</span>
              <span>Problem type</span>
              <span>Methods</span>
              <span>Proof</span>
              <span>Outcome</span>
              <span>Recommendation</span>
            </div>
            {caseStudies.map((study) => (
              <div key={study.slug} className="matrix-table__row">
                <span>{study.matrix.studyName}</span>
                <span>{study.matrix.problemType}</span>
                <span>{study.matrix.methods.join(", ")}</span>
                <span>{study.matrix.proofStrength}</span>
                <span>{study.matrix.outcomeStrength}</span>
                <span>{study.matrix.recommendation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
