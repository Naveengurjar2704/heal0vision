import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Zap, Glasses } from "lucide-react";
import { stats } from "../../data/clinicInfo";
import RotatingWords from "../shared/RotatingWords";
import RotatingImage from "../shared/RotatingImage";
import "./Hero.css";

// Word + photo shown together, in sync, from one shared timer. Words are
// kept short and similar in length on purpose: a long line wraps to a 3rd
// line and shoves the rest of the hero down as it rotates. Alt text stays
// generic where we don't have a photo of the exact matching equipment, so
// nothing here overclaims what a photo actually shows.
const heroFrames = [
  {
    word: "with Custom LASIK.",
    src: "/images/hero-laser-machine.jpg",
    alt: "Surgeons operating a laser vision correction machine",
  },
  {
    word: "with Femto LASIK.",
    src: "/images/hero-lasik.jpg",
    alt: "A surgeon performing precision eye surgery using an operating microscope",
  },
  {
    word: "with SMILE.",
    src: "/images/hero-eyedrops.jpg",
    alt: "Our care team looking after a patient before their procedure",
  },
  {
    word: "with Touchless.",
    src: "/images/hero-machine.jpg",
    alt: "Close-up of precision diagnostic equipment used before your procedure",
  },
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
