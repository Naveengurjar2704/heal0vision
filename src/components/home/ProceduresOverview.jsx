import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { laserProcedures, moreEyeCareProcedures } from "../../data/procedures";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import "./ProceduresOverview.css";

export default function ProceduresOverview() {
  return (
    <section className="section" id="procedures">
      <div className="container">
        <SectionHeading
          eyebrow="Laser vision correction"
          title="Three ways to see the world clearly"
          description="We focus first on laser vision correction — so our advice is about which technique suits your eyes, not what's easiest for us to sell."
        />

        <div className="procedure-grid">
          {laserProcedures.map((p, i) => (
            <Reveal key={p.slug} as="article" className="procedure-card" delay={i * 80}>
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

        <div className="more-care">
          <Reveal className="more-care__intro">
            <span className="eyebrow">Beyond laser vision correction</span>
            <h3>We care for more of your eye health, too</h3>
            <p>From cataracts to the retina — our surgeons treat a wide range of eye conditions, not just refractive error.</p>
          </Reveal>

          <div className="more-care__grid">
            {moreEyeCareProcedures.map((p, i) => (
              <Reveal key={p.slug} as="div" delay={i * 60} className="more-care__item-wrap">
                <Link to={`/procedures/${p.slug}`} className="more-care__item">
                  <span>{p.name}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
