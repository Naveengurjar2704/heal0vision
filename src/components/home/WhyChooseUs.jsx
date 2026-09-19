import { ShieldCheck, CreditCard, Sparkles, Stethoscope } from "lucide-react";
import { trustHighlights } from "../../data/clinicInfo";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import "./WhyChooseUs.css";

const icons = [ShieldCheck, CreditCard, Sparkles, Stethoscope];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Why Heal O Vision"
          title="Care built around your eyes, not a sales target"
          align="center"
        />
        <div className="why-grid">
          {trustHighlights.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={item.title} className="why-card" delay={i * 80}>
                <div className="why-card__icon">
                  <Icon size={22} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
