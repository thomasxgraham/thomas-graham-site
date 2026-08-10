import { siteMeta } from "@/lib/site-data";

export default function ContactPage() {
  return (
    <div className="section">
      <div className="container">
        <div className="contact-sheet">
          <div>
            <p className="eyebrow">Contact</p>
            <h1>Open a conversation.</h1>
            <p className="contact-sheet__lede">
              I am most helpful when a team needs sharper framing around complex
              customer, service, or operational decisions.
            </p>
          </div>
          <div className="contact-sheet__cards">
            <article className="contact-card">
              <p className="eyebrow">Email</p>
              <a href={`mailto:${siteMeta.contactEmail}`}>{siteMeta.contactEmail}</a>
              <p>Best for hiring conversations, consulting inquiries, or portfolio follow-up.</p>
            </article>
            <article className="contact-card">
              <p className="eyebrow">LinkedIn</p>
              <a href={siteMeta.linkedIn} target="_blank" rel="noreferrer">
                Connect on LinkedIn
              </a>
              <p>{siteMeta.location}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
