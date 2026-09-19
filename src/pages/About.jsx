import { Link } from "react-router-dom";
import SectionHeading from "../components/shared/SectionHeading";
import { team } from "../data/doctors";
import { trustHighlights } from "../data/clinicInfo";
import "./About.css";

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="container about-hero__inner">
          <span className="eyebrow">About Heal O Vision</span>
          <h1>A clinic focused on one thing: your vision</h1>
          <p>
            We don't offer every eye procedure under the sun — we specialise in laser vision
            correction, so every recommendation, from Custom LASIK to Femto LASIK, SMILE to
            Touchless, comes from genuine expertise rather than a broad menu of services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-mission">
          <div>
            <SectionHeading eyebrow="Our approach" title="Suitability first, procedure second" />
            <p className="about-mission__text">
              Every patient starts with a free, comprehensive eye check-up — corneal mapping,
              prescription and eye-health screening — before any procedure is discussed. We'd
              rather tell you which of Custom LASIK, Femto LASIK, SMILE or Touchless genuinely
              fits your eyes than push whichever is most convenient for us.
            </p>
            <p className="about-mission__text">
              We also handle the parts patients dread most: insurance paperwork — all insurance
              accepted — and no-cost EMI setup, so the financial side never gets in the way of a
              clear decision.
            </p>
          </div>
          <ul className="about-values">
            {trustHighlights.map((item) => (
              <li key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHeading
            eyebrow="Our team"
            title="The team behind your procedure"
            description="We haven't published individual surgeon bios yet, so here's who's actually involved — real photos from our own clinic, not stock avatars."
          />
          <div className="doctor-grid">
            {team.map((member) => (
              <div key={member.id} className="doctor-card">
                <img src={member.image} alt={member.imageAlt} className="doctor-card__photo" />
                <h3>{member.title}</h3>
                <p className="doctor-card__role">{member.role}</p>
                <p className="doctor-card__credentials">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-cta">
        <div className="container about-cta__inner">
          <h2>Have questions before you commit?</h2>
          <p>Talk to our team or start with a free eye check-up — no pressure, just clarity.</p>
          <Link to="/contact" className="btn btn-primary">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
