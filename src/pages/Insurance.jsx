import { Link } from "react-router-dom";
import { Phone, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import Reveal from "../components/shared/Reveal";
import { clinicInfo, insurancePartners, trustHighlights } from "../data/clinicInfo";
import "./Insurance.css";

export default function Insurance() {
  return (
    <>
      <section className="insurance-hero">
        <div className="container insurance-hero__inner">
          <span className="eyebrow">Insurance &amp; TPA partners</span>
          <h1>All insurance accepted</h1>
          <p>
            We bill directly with {insurancePartners.length} insurance companies and TPAs, so your
            treatment is covered without you paying out of pocket at the time of surgery — and our
            team handles the paperwork with your insurer for you.
          </p>
          <p className="insurance-hero__terms">
            *T&amp;C apply. Cover depends on your policy terms, waiting periods and approval from
            your insurer — we'll confirm exactly what's covered before your procedure.
          </p>
          <div className="insurance-hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Check My Coverage
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
            eyebrow="The full list"
            title={`${insurancePartners.length} insurance & TPA partners`}
            description="If your insurer or TPA is on this list, your procedure can be billed directly, subject to your policy terms (T&C apply). Don't see yours? Call us — we'll check it for you."
          />

          <ol className="insurance-list">
            {insurancePartners.map((name, i) => (
              <Reveal as="li" key={name} className="insurance-list__item" delay={Math.min(i, 12) * 30}>
                <span className="insurance-list__no">{String(i + 1).padStart(2, "0")}</span>
                <span className="insurance-list__name">{name}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading eyebrow="What this means for you" title="Covered, with the paperwork handled" align="center" />
          <div className="insurance-benefits">
            {trustHighlights.map((item, i) => (
              <Reveal key={item.title} className="insurance-benefit" delay={i * 70}>
                <CheckCircle2 size={18} />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.detail}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section insurance-cta">
        <div className="container insurance-cta__inner">
          <h2>Not sure what your policy covers?</h2>
          <p>Send us your insurer's name and we'll confirm your coverage before you commit to anything.</p>
          <Link to="/contact" className="btn btn-primary">
            Talk to Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
