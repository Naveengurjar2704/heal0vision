import { useEffect, useState } from "react";
import { X, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import ContactForm from "../contact/ContactForm";
import "./WelcomePopup.css";

const SHOW_DELAY_MS = 900;

// Shows on every fresh page load (first visit and after a refresh). It is
// deliberately not remembered — dismissing it only hides it until the next
// full page load, since client-side navigation doesn't remount Layout.
export default function WelcomePopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return undefined;

    document.body.style.overflow = "hidden";

    function onKeyDown(e) {
      if (e.key === "Escape") setVisible(false);
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [visible]);

  if (!visible) return null;

  const close = () => setVisible(false);

  return (
    <div className="welcome-popup" role="dialog" aria-modal="true" aria-labelledby="welcome-popup-title">
      <button type="button" className="welcome-popup__backdrop" aria-label="Close" onClick={close} />

      <div className="welcome-popup__card">
        <button type="button" className="welcome-popup__close" aria-label="Close" onClick={close}>
          <X size={18} />
        </button>

        <div className="welcome-popup__visual">
          <img src="/images/hero-eyedrops.jpg" alt="A Heal O Vision nurse caring for a patient before their procedure" />
          <div className="welcome-popup__visual-scrim" aria-hidden="true" />
          <div className="welcome-popup__ribbon">100% FREE Consultation</div>
        </div>

        <div className="welcome-popup__content">
          <span className="eyebrow">New here?</span>
          <h3 id="welcome-popup-title">Don't wait to see clearly.</h3>
          <p className="welcome-popup__lede">
            Book your <strong>FREE eye check-up</strong> — no cost, no obligation.
          </p>

          <ul className="welcome-popup__trust">
            <li>
              <ShieldCheck size={13} /> FDA-approved
            </li>
            <li>
              <HeartHandshake size={13} /> All insurance
            </li>
            <li>
              <Sparkles size={13} /> 0% EMI
            </li>
          </ul>

          <div className="welcome-popup__form-wrap">
            <ContactForm compact />
          </div>

          <button type="button" className="welcome-popup__later" onClick={close}>
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
