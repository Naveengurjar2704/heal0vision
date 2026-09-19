import "./SectionHeading.css";

export default function SectionHeading({ eyebrow, title, description, align = "left", inverse = false }) {
  return (
    <div className={`section-heading section-heading--${align} ${inverse ? "section-heading--inverse" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p className="section-heading__desc">{description}</p>}
    </div>
  );
}
