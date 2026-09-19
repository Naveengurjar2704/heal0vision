import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Logo from "./Logo";
import InstagramIcon from "../shared/InstagramIcon";
import { laserProcedures } from "../../data/procedures";
import { clinicInfo, insurancePartners, featuredInsurancePartners } from "../../data/clinicInfo";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo inverse />
          <p className="footer__tagline">{clinicInfo.tagline}</p>
          <a href={clinicInfo.instagram} target="_blank" rel="noreferrer" className="footer__social">
            <InstagramIcon size={18} />
            @healovision
          </a>
        </div>

        <div className="footer__col">
          <h4>Procedures</h4>
          <ul>
            {laserProcedures.map((p) => (
              <li key={p.slug}>
                <Link to={`/procedures/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
            <li>
              <Link to="/procedures">All eye surgery →</Link>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/insurance">Insurance Partners</Link></li>
            <li><Link to="/contact">Book a Consultation</Link></li>
            <li><Link to="/#journey">Your Care Journey</Link></li>
            <li><Link to="/#faq">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <ul className="footer__contact">
            <li>
              <Phone size={16} />
              <a href={clinicInfo.phoneHref}>{clinicInfo.phone}</a>
            </li>
            <li>
              <Mail size={16} />
              <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
            </li>
            <li>
              <MapPin size={16} />
              <span>{clinicInfo.address}</span>
            </li>
            <li>
              <Clock size={16} />
              <span>{clinicInfo.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__partners container">
        <span>All insurance accepted*:</span>
        <div className="footer__partner-list">
          {featuredInsurancePartners.map((name) => (
            <span key={name} className="footer__partner">{name}</span>
          ))}
          <Link to="/insurance" className="footer__partner footer__partner--more">
            + {insurancePartners.length - featuredInsurancePartners.length} more
          </Link>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© {new Date().getFullYear()} Heal O Vision. All rights reserved.</p>
        <p className="footer__disclaimer">
          *T&amp;C apply on insurance cover. Information on this site is for general awareness and does not replace an in-person consultation.
        </p>
      </div>
    </footer>
  );
}
