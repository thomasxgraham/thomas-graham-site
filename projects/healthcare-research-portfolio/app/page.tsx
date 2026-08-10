import Image from "next/image";
import Link from "next/link";

import portrait from "../img/me.jpg";
import kc46Visual from "../img/portfolio/projects/CC/CC-KC46-full.png";
import addictionCenterVisual from "../img/portfolio/projects/AC/after/AC-home-page-final.png";
import onboardingScreensVisual from "../img/portfolio/projects/AH/AH onboarding screens.png";
import onboardingTimeVisual from "../img/portfolio/projects/AH/mobile-onboarding-time.png";

import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";
import {
  featuredCaseStudies,
  fieldNotes,
  organizations,
  practicePillars,
  proofPoints,
  siteMeta,
} from "@/lib/site-data";

const visualPlates = [
  {
    title: "Patient onboarding screens",
    note: "Mobile onboarding study artifacts treated as editorial plates.",
    image: onboardingScreensVisual,
    className: "editorial-plate editorial-plate--paper",
    alt: "AdventHealth onboarding screen sequence",
  },
  {
    title: "Addiction Center redesign",
    note: "A warmer consumer-health surface with stronger emotional context.",
    image: addictionCenterVisual,
    className: "editorial-plate editorial-plate--warm",
    alt: "Addiction Center redesign screens",
  },
  {
    title: "KC-46A training interface",
    note: "Structured, high-stakes interface work from the archive.",
    image: kc46Visual,
    className: "editorial-plate editorial-plate--ink",
    alt: "KC-46A hazardous cargo training interface",
  },
  {
    title: "Onboarding time comparison",
    note: "Research evidence can live in the same editorial system as the product work.",
    image: onboardingTimeVisual,
    className: "editorial-plate editorial-plate--data",
    alt: "Chart comparing onboarding times across apps",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow">Volume 01 / Director-level research and strategy</p>
            <h1>{siteMeta.heroTitle}</h1>
            <p className="hero__summary">{siteMeta.heroSummary}</p>
            <div className="hero__cta">
              <Link href="/work" className="button button--primary">
                Read selected work
              </Link>
              <Link href="/contact" className="button button--ghost">
                Start a conversation
              </Link>
            </div>
            <ul className="proof-list">
              {proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="hero__figure">
            <div className="portrait-frame">
              <Image
                src={portrait}
                alt="Portrait of Thomas Graham"
                priority
                sizes="(max-width: 900px) 100vw, 420px"
              />
              <div className="portrait-frame__caption">
                <span>Editorial note</span>
                <p>
                  Balanced cross-industry work spanning healthcare, enterprise,
                  service design, and operational research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            number="01"
            eyebrow="Practice"
            title="Research built for decisions, not just documentation."
            description="The work blends continuous discovery, systems analysis, and executive storytelling so teams can move from ambiguity to action with more confidence."
          />
          <div className="pillar-grid">
            {practicePillars.map((pillar) => (
              <article key={pillar.title} className="pillar-card">
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container">
          <SectionHeading
            number="02"
            eyebrow="Selected work"
            title="Four studies that show how the thinking scales."
            description="The strongest stories here are not just about running research. They show how evidence changed the frame, the question, or the next move."
          />
          <div className="work-grid">
            {featuredCaseStudies.map((study) => (
              <WorkCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--inverse">
        <div className="container">
          <SectionHeading
            number="03"
            eyebrow="Visual plates"
            title="Original work, re-toned to test the editorial system."
            description="These are archival project assets, interface explorations, and research visuals brought into the current visual language so we can judge the brand with real material."
            className="section-heading--inverse"
          />
          <div className="editorial-gallery">
            {visualPlates.map((plate) => (
              <figure key={plate.title} className={plate.className}>
                <div className="editorial-plate__image">
                  <Image src={plate.image} alt={plate.alt} sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
                <figcaption className="editorial-plate__caption">
                  <span>{plate.title}</span>
                  <p>{plate.note}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            number="04"
            eyebrow="Ledger"
            title="Organizations and systems I have worked inside."
          />
          <div className="organization-strip">
            {organizations.map((org) => (
              <span key={org}>{org}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            number="05"
            eyebrow="Field notes"
            title="A few beliefs that shape the work."
          />
          <div className="notes-grid">
            {fieldNotes.map((note) => (
              <article key={note.title} className="note-card">
                <h3>{note.title}</h3>
                <p>{note.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta section--inverse">
        <div className="container split-callout">
          <div>
            <p className="eyebrow">For hiring teams</p>
            <h2>See how I frame high-friction product and service decisions.</h2>
            <p>
              The site is designed for quick scanning first and deep reading second.
              Hiring managers should be able to reach the strongest proof points in
              a few minutes.
            </p>
          </div>
          <div>
            <p className="eyebrow">For consulting conversations</p>
            <h2>Bring me the messy edge between product, service, and operations.</h2>
            <p>
              I am most useful when the issue looks like a feature problem on the
              surface but behaves like a systems problem underneath.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
