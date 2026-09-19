import { procedures } from "../../data/procedures";
import { insurancePartners } from "../../data/clinicInfo";
import "./ServiceMarquee.css";

const items = [...procedures.map((p) => p.name), ...insurancePartners.map((n) => `${n} · cashless`)];
const track = [...items, ...items];

export default function ServiceMarquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {track.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
            <span className="marquee__sep">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
