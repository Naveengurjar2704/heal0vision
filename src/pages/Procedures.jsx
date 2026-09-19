import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import Reveal from "../components/shared/Reveal";
import { laserProcedures, moreEyeCareProcedures } from "../data/procedures";
import { clinicInfo } from "../data/clinicInfo";
import "../components/home/ProceduresOverview.css";
import "./Procedures.css";

function ProcedureCards({ items }) {
  return (
    <div className="procedure-grid">
      {items.map((p, i) => (
        <Reveal key={p.slug} as="article" className="procedure-card" delay={Math.min(i, 8) * 70}>
          <span className="procedure-card__index">{p.name}</span>
          <h3>{p.fullName}</h3>
          <p>{p.tagline}</p>
          <ul>
            {p.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <Link to={`/procedures/${p.slug}`} className="procedure-card__link">
            Learn about {p.name} <ArrowRight size={16} />
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

export default function Procedures() {
  return (
    <>
      <section className="procedures-hero">
        <div className="container procedures-hero__inner">
          <span className="eyebrow">All eye surgery</span>
          <h1>Every eye procedure we offer</h1>
          <p>
            From laser vision correction to cataract, retina and oculoplasty — {laserProcedures.length + moreEyeCareProcedures.length}{" "}
            procedures under one roof. Your free eye check-up confirms which one genuinely fits your
            eyes.
          </p>
          <div className="procedures-hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Book Free Eye Check-up
            </Link>
            <a href={clinicInfo.phoneHref} className="btn btn-outline">
              <Phone size={16} /> {clinicInfo.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Laser vision correction"
            title="Four ways to see the world clearly"
            description="We focus first on laser vision correction — so our advice is about which technique suits your eyes, not what's easiest for us to sell."
          />
          <ProcedureCards items={laserProcedures} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="More eye care"
            title="Beyond laser vision correction"
            description="Our surgeons treat a wide range of eye conditions, not just refractive error."
          />
          <ProcedureCards items={moreEyeCareProcedures} />
        </div>
      </section>

      <section className="section procedures-cta">
        <div className="container procedures-cta__inner">
          <h2>Not sure which one you need?</h2>
          <p>That's exactly what the free check-up is for — we'll tell you what your eyes actually need.</p>
          <Link to="/contact" className="btn btn-primary">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
