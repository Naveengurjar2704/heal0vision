import { Quote, Users, HeartHandshake, CalendarCheck2, Sparkles } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { clinicInfo, stats } from "../../data/clinicInfo";
import InstagramIcon from "../shared/InstagramIcon";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import "./Testimonials.css";

const igFollowers = stats.find((s) => s.label.toLowerCase().includes("instagram"));

const igTiles = [
  { icon: HeartHandshake, label: "Patient journeys" },
  { icon: CalendarCheck2, label: "Day-of-surgery moments" },
  { icon: Sparkles, label: "Recovery milestones" },
  { icon: Users, label: "Meet the team" },
];

export default function Testimonials() {
  const hasReviews = testimonials.length > 0;

  return (
    <section className="section" id="reviews">
      <div className="container">
        <SectionHeading
          eyebrow="Patient stories"
          title="What it feels like to see clearly again"
          description={
            hasReviews
              ? undefined
              : "We're collecting real, consented patient reviews for this space. In the meantime, follow along with real patient journeys on Instagram."
          }
        />

        {hasReviews ? (
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <Reveal key={t.name + t.procedure} as="figure" className="testimonial-card">
                <Quote size={26} className="testimonial-card__quote" />
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.procedure} patient</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="ig-trust">
            <div className="ig-trust__main">
              <div className="ig-trust__badge">
                <InstagramIcon size={22} />
              </div>
              <div>
                <strong>@healovision</strong>
                {igFollowers && <span>{igFollowers.value} following our patients' journeys</span>}
              </div>
              <a href={clinicInfo.instagram} target="_blank" rel="noreferrer" className="btn btn-outline">
                Follow along
              </a>
            </div>
            <div className="ig-trust__tiles">
              {igTiles.map(({ icon: Icon, label }) => (
                <div key={label} className="ig-trust__tile">
                  <Icon size={20} />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
