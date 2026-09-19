import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { clinicInfo } from "../../data/clinicInfo";
import Reveal from "../shared/Reveal";
import "./CtaBanner.css";

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <Reveal as="div" className="container cta-banner__inner">
        <div>
          <h2>Ready to put your glasses away for good?</h2>
          <p>Start with a free eye check-up — no obligation, just clarity on your options.</p>
        </div>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn-inverse">
            Book Free Consultation
          </Link>
          <a href={clinicInfo.phoneHref} className="btn btn-outline btn-outline--inverse">
            <Phone size={16} /> {clinicInfo.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
