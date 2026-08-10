import Image from "next/image";

import portrait from "../../img/self.png";

import { SectionHeading } from "@/components/section-heading";
import { careerHighlights, siteMeta } from "@/lib/site-data";

const methods = [
  "Continuous discovery",
  "Interviews",
  "Moderated and unmoderated usability testing",
  "Concept evaluation",
  "Journey mapping",
  "Workshop facilitation",
  "Survey and feedback signal analysis",
  "A/B testing",
  "ResearchOps and synthesis systems",
];

const tools = [
  "Figma",
  "Jira",
  "Axure",
  "Optimizely",
  "Amplitude",
  "Medallia",
  "Maze",
  "dscout",
  "Git",
  "HTML and CSS",
  "ChatGPT and Claude",
];

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          eyebrow="About"
          title="Research leadership with a product, service, and operations lens."
          description={siteMeta.shortBio}
        />

        <div className="about-grid">
          <div className="portrait-panel">
            <Image
              src={portrait}
              alt="Thomas Graham portrait illustration"
              sizes="(max-width: 900px) 100vw, 320px"
            />
          </div>
          <div className="about-copy">
            <p>
              I work best where the product story is entangled with service
              operations, internal assumptions, or stakeholder ambiguity. That is
              where research can do more than validate a screen. It can help a team
              see the system they are actually building.
            </p>
            <p>
              My background moves from media and visual storytelling into product
              design, enterprise software, healthcare service experiences, and
              research operations. That mix gives me a strong read on both the
              narrative surface and the structural mechanics underneath it.
            </p>
            <p>{siteMeta.resumeLabel}</p>
          </div>
        </div>

        <div className="timeline">
          {careerHighlights.map((item) => (
            <article key={`${item.period}-${item.org}`} className="timeline__item">
              <p className="eyebrow">{item.period}</p>
              <h3>
                {item.title} <span>{item.org}</span>
              </h3>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>

        <div className="dual-panel">
          <section className="list-panel">
            <p className="eyebrow">Methods</p>
            <h2>How I work</h2>
            <ul>
              {methods.map((method) => (
                <li key={method}>{method}</li>
              ))}
            </ul>
          </section>
          <section className="list-panel">
            <p className="eyebrow">Tools and certifications</p>
            <h2>What I use</h2>
            <ul>
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
              <li>Cornell Product Manager Certification (2025)</li>
              <li>BCS User Experience Certification (2021)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
