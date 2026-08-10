import { SectionHeading } from "@/components/section-heading";
import { archiveProjects } from "@/lib/site-data";

export default function ArchivePage() {
  return (
    <div className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Archive"
          title="Earlier work that still informs the point of view."
          description="This archive stays accessible, but it is intentionally secondary to the current research and strategy narrative. It shows the longer arc: product design, simulation, media, brand systems, and visual storytelling."
        />

        <div className="archive-grid">
          {archiveProjects.map((project) => (
            <article key={project.title} className="archive-card">
              <p className="eyebrow">
                {project.era} / {project.category}
              </p>
              <h2>{project.title}</h2>
              <h3>{project.role}</h3>
              <p>{project.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
