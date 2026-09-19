import { Phone, Mail, MapPin, Clock } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import ContactForm from "../components/contact/ContactForm";
import InstagramIcon from "../components/shared/InstagramIcon";
import { clinicInfo } from "../data/clinicInfo";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact-page">
      <div className="container contact-grid">
        <div>
          <SectionHeading
            eyebrow="Book a consultation"
            title="Start with a free eye check-up"
            description="Tell us a little about you and we'll call to confirm a time that works — no obligation."
          />
          <ContactForm />
        </div>

        <aside className="contact-info">
          <h3>Reach us directly</h3>
          <ul>
            <li>
              <Phone size={18} />
              <div>
                <strong>Call or WhatsApp</strong>
                <a href={clinicInfo.phoneHref}>{clinicInfo.phone}</a>
              </div>
            </li>
            <li>
              <Mail size={18} />
              <div>
                <strong>Email</strong>
                <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
              </div>
            </li>
            <li>
              <MapPin size={18} />
              <div>
                <strong>Clinic</strong>
                <span>{clinicInfo.address}</span>
              </div>
            </li>
            <li>
              <Clock size={18} />
              <div>
                <strong>Hours</strong>
                <span>{clinicInfo.hours}</span>
              </div>
            </li>
            <li>
              <InstagramIcon size={18} />
              <div>
                <strong>Instagram</strong>
                <a href={clinicInfo.instagram} target="_blank" rel="noreferrer">
                  @healovision
                </a>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
