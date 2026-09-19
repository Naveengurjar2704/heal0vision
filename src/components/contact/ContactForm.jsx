import { useState } from "react";
import { procedures } from "../../data/procedures";
import { clinicInfo } from "../../data/clinicInfo";
import "./ContactForm.css";

const initialState = { name: "", phone: "", email: "", procedure: "", message: "" };

function buildWhatsAppUrl(values) {
  const lines = [
    "Hi Heal O Vision, I'd like to book a free eye check-up.",
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    values.email && `Email: ${values.email}`,
    `Procedure interested in: ${values.procedure || "Not sure yet — please advise"}`,
    values.message && `Message: ${values.message}`,
  ].filter(Boolean);

  return `${clinicInfo.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`;
}

// `compact` drops the optional message box so the form fits inside the
// welcome popup without the user having to scroll.
export default function ContactForm({ compact = false }) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitted

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^[0-9+\s-]{7,15}$/.test(values.phone.trim())) next.phone = "Please enter a valid phone number.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Please enter a valid email.";
    return next;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // No backend is wired up — the enquiry is handed off to WhatsApp so a
      // real person on the clinic's team receives and can reply to it.
      window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
      setStatus("submitted");
      setValues(initialState);
    }
  }

  if (status === "submitted") {
    return (
      <div className="contact-form contact-form--success">
        <h3>Thank you — we've opened WhatsApp for you.</h3>
        <p>Send the pre-filled message and our team will reply to confirm your free eye check-up.</p>
        <a href={clinicInfo.whatsappHref} target="_blank" rel="noreferrer" className="btn btn-primary">
          Open WhatsApp again
        </a>
        <button type="button" className="btn btn-outline" onClick={() => setStatus("idle")}>
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__row">
        <label htmlFor="name">Full name *</label>
        <input id="name" name="name" value={values.name} onChange={handleChange} autoComplete="name" />
        {errors.name && <span className="contact-form__error">{errors.name}</span>}
      </div>

      <div className="contact-form__grid">
        <div className="contact-form__row">
          <label htmlFor="phone">Phone number *</label>
          <input id="phone" name="phone" value={values.phone} onChange={handleChange} autoComplete="tel" />
          {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
        </div>
        <div className="contact-form__row">
          <label htmlFor="email">Email (optional)</label>
          <input id="email" name="email" type="email" value={values.email} onChange={handleChange} autoComplete="email" />
          {errors.email && <span className="contact-form__error">{errors.email}</span>}
        </div>
      </div>

      <div className="contact-form__row">
        <label htmlFor="procedure">Procedure you're interested in</label>
        <select id="procedure" name="procedure" value={values.procedure} onChange={handleChange}>
          <option value="">Not sure yet — help me decide</option>
          {procedures.map((p) => (
            <option key={p.slug} value={p.name}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      {!compact && (
        <div className="contact-form__row">
          <label htmlFor="message">Message (optional)</label>
          <textarea id="message" name="message" rows={4} value={values.message} onChange={handleChange} />
        </div>
      )}

      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
  );
}
