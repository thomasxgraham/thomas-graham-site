import Link from "next/link";

import type { CaseStudy } from "@/lib/site-data";

type WorkCardProps = {
  study: CaseStudy;
};

export function WorkCard({ study }: WorkCardProps) {
  return (
    <article className="work-card">
      <div className="work-card__top">
        <span className="pill">{study.matrix.recommendation}</span>
        <span className="work-card__domain">{study.orgOrDomain}</span>
      </div>
      <h3>{study.title}</h3>
      <p>{study.problem[0]}</p>
      <div className="work-card__facts">
        <span>Proof: {study.matrix.proofStrength}</span>
        <span>Outcome: {study.matrix.outcomeStrength}</span>
      </div>
      <Link href={`/work/${study.slug}`} className="text-link">
        Open case study
      </Link>
    </article>
  );
}
