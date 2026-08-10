type SectionHeadingProps = {
  number?: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={["section-heading", className].filter(Boolean).join(" ")}>
      <div className="section-heading__meta">
        <span className="eyebrow">{eyebrow}</span>
        {number ? <span className="section-heading__number">{number}</span> : null}
      </div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
