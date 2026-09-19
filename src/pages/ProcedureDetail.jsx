import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle2, Phone } from "lucide-react";
import { getProcedureBySlug, procedures } from "../data/procedures";
import { clinicInfo } from "../data/clinicInfo";
import ComparisonTable from "../components/shared/ComparisonTable";
import SectionHeading from "../components/shared/SectionHeading";
import "./ProcedureDetail.css";

export default function ProcedureDetail() {
  const { slug } = useParams();
  const procedure = getProcedureBySlug(slug);

  if (!procedure) {
    return <Navigate to="/" replace />;
  }

  const others = procedures.filter((p) => p.group === procedure.group && p.slug !== slug);
  const groupLabel = procedure.group === "laser-vision" ? "Laser vision correction" : "Eye care";

  return (
    <>
      <section className="procedure-hero">
        <div className="container procedure-hero__inner">
          <span className="eyebrow">{groupLabel}</span>
          <h1>{procedure.fullName}</h1>
          <p>{procedure.summary}</p>
          <div className="procedure-hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Check My Eligibility
            </Link>
            <a href={clinicInfo.phoneHref} className="btn btn-outline">
              <Phone size={16} /> {clinicInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container procedure-detail__grid">
          <div>
            <SectionHeading eyebrow="How it works" title={`The ${procedure.name} procedure, step by step`} />
            <ol className="procedure-steps">
              {procedure.steps.map((step, i) => (
                <li key={i}>
                  <span>{i + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="procedure-aside">
            <h3>Is {procedure.name} right for you?</h3>
            <ul>
              {procedure.idealFor.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="procedure-aside__recovery">
              <strong>Recovery</strong>
              <p>{procedure.recovery}</p>
            </div>
          </aside>
        </div>
      </section>

      {procedure.group === "laser-vision" && (
        <section className="section section--tint">
          <div className="container">
            <SectionHeading eyebrow="Compare" title="How it stacks up against the alternatives" />
            <ComparisonTable />
          </div>
        </section>
      )}

      {others.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Also consider" title="Related procedures we offer" />
            <div className="procedure-other-grid">
              {others.slice(0, 4).map((p) => (
                <Link key={p.slug} to={`/procedures/${p.slug}`} className="procedure-other-card">
                  <strong>{p.name}</strong>
                  <span>{p.tagline}</span>
                </Link>
              ))}
            </div>
            {others.length > 4 && (
              <Link to="/#procedures" className="procedure-detail__view-all">
                View all eye care services →
              </Link>
            )}
          </div>
        </section>
      )}
    </>
  );
}
