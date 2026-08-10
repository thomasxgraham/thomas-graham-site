import Link from "next/link";

import { siteMeta } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <p className="eyebrow">Edition</p>
          <h2 className="site-footer__title">A research portfolio built like a publication.</h2>
        </div>
        <div className="site-footer__contact">
          <p className="eyebrow">Reach out</p>
          <a href={`mailto:${siteMeta.contactEmail}`}>{siteMeta.contactEmail}</a>
          <a href={siteMeta.linkedIn} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <Link href="/work">Selected work</Link>
        </div>
      </div>
    </footer>
  );
}
