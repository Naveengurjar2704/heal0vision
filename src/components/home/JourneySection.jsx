import { journeySteps } from "../../data/journey";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import "./JourneySection.css";

export default function JourneySection() {
  return (
    <section className="section section--tint" id="journey">
      <div className="container">
        <SectionHeading
          eyebrow="Your care journey"
          title="From insurance claim to surgery, we're with you at every step"
          description="From your first check-up to the day you put your glasses away for good, one team guides you through every step — including the paperwork."
        />

        <ol className="journey">
          {journeySteps.map((s, i) => (
            <Reveal as="li" key={s.step} delay={i * 100} className="journey__item">
              <div className="journey__marker">
                <span>{s.step}</span>
                {i < journeySteps.length - 1 && <div className="journey__line" aria-hidden="true" />}
              </div>
              <div className="journey__body">
                <h3>{s.title}</h3>
                <p>{s.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
