import SectionHeading from "../shared/SectionHeading";
import FaqAccordion from "../shared/FaqAccordion";
import { faqs } from "../../data/faq";

export default function FaqSection() {
  return (
    <section className="section section--tint" id="faq">
      <div className="container">
        <SectionHeading eyebrow="Common questions" title="Frequently asked questions" />
        <FaqAccordion items={faqs} />
      </div>
    </section>
  );
}
