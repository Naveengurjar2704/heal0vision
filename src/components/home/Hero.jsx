import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Glasses } from "lucide-react";
import { stats } from "../../data/clinicInfo";
import RotatingWords from "../shared/RotatingWords";
import RotatingImage from "../shared/RotatingImage";
import "./Hero.css";

// Word + photo shown together, in sync, from one shared timer — each pair is
// matched to what the photo actually depicts (e.g. the Centurion system
// photo is paired with "Cataract", not "LASIK", since that's a cataract
// platform, not a refractive laser). Words are kept short and similar in
// length on purpose: a long line wraps to a 3rd line and shoves the rest of
// the hero down as it rotates.
const heroFrames = [
  { word: "Better life.", src: "/images/hero-checkup.jpg", alt: "A patient having a routine eye check-up" },
  {
    word: "with LASIK.",
    src: "/images/hero-laser-machine.jpg",
    alt: "Surgeons operating a laser vision correction machine",
  },
  {
    word: "with gentle care.",
    src: "/images/hero-eyedrops.jpg",
    alt: "A nurse administering eye drops to a patient before their procedure",
  },
  {
    word: "with Cataract.",
    src: "/images/hero-lasik.jpg",
    alt: "A surgeon performing eye surgery using an operating microscope",
  },
  { word: "with precision.", src: "/images/hero-machine.jpg", alt: "Close-up of a phoropter used to test a patient's vision" },
];

const rotatingLines = heroFrames.map((f) => f.word);
const heroImages = heroFrames.map((f) => ({ src: f.src, alt: f.alt }));

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActiveIndex((i) => (i + 1) % heroFrames.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>
            Clear vision. <RotatingWords words={rotatingLines} className="hero__accent" activeIndex={activeIndex} />
          </h1>
          <p className="hero__lede">
            Heal O Vision specialises in laser vision correction and broader eye care — helping you
            live glasses-free with the procedure that's genuinely right for your eyes, not
            just the one that's easiest to sell.
          </p>

          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Book Free Eye Check-up
            </Link>
            <a href="#procedures" className="btn btn-outline">
              Explore Procedures
            </a>
          </div>

          <ul className="hero__points">
            <li>
              <ShieldCheck size={18} /> FDA-approved technology
            </li>
            <li>
              <Zap size={18} /> Painless, walk-in walk-out surgery
            </li>
            <li>
              <Glasses size={18} /> Freedom from glasses &amp; contacts
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            <RotatingImage images={heroImages} activeIndex={activeIndex} />
          </div>
          <div className="hero__card hero__card--top">
            <strong>20/20</strong>
            <span>Target vision outcome</span>
          </div>
          <div className="hero__card hero__card--bottom">
            <strong>0%</strong>
            <span>Cost EMI available</span>
          </div>
        </div>
      </div>

      <div className="hero__stats container">
        {stats.map((s) => (
          <div key={s.label} className="hero__stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
