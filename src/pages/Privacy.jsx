import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { clinicInfo } from "../data/clinicInfo";
import "./Privacy.css";

const LAST_UPDATED = "September 2026";

export default function Privacy() {
  return (
    <>
      <section className="privacy-hero">
        <div className="container privacy-hero__inner">
          <span className="eyebrow">Privacy &amp; scope of service</span>
          <h1>Privacy Policy</h1>
          <p>
            How Heal O Vision handles the details you share with us, and what we are — and aren't —
            responsible for.
          </p>
          <span className="privacy-hero__updated">Last updated: {LAST_UPDATED}</span>
        </div>
      </section>

      <section className="section">
        <div className="container privacy-body">
          <div className="privacy-callout">
            <h2>What we do, and what the hospital does</h2>
            <p>
              Heal O Vision assists you with the <strong>insurance side</strong> of your eye
              treatment — checking your cover, coordinating with your insurer or TPA, and handling
              the claim paperwork so you aren't left doing it yourself.
            </p>
            <p>
              <strong>
                All medical care is provided by the treating hospital and its qualified doctors.
              </strong>{" "}
              Consultation, diagnosis, surgery, anaesthesia, medication and post-operative care are
              carried out by the hospital, under its own protocols and its own registered medical
              practitioners. Medical decisions, treatment outcomes and clinical responsibility rest
              with the treating hospital and surgeon — not with Heal O Vision.
            </p>
            <p>
              The <strong>hospital's own terms and conditions apply</strong> to your treatment,
              alongside the terms of your insurance policy. We'll tell you what these are before
              anything is scheduled.
            </p>
          </div>

          <h2>Information we collect</h2>
          <p>
            We only collect what you choose to type into an enquiry form on this site — your name,
            phone number, and optionally your email, the procedure you're interested in, and a
            message. We don't ask for medical records, ID documents or payment details through this
            website.
          </p>

          <h2>How your enquiry reaches us</h2>
          <p>
            This website does not store your enquiry. When you submit a form, it opens WhatsApp with
            a pre-filled message addressed to our team — the details reach us only once you choose to
            send that message, and that transfer is handled by WhatsApp under its own privacy policy.
          </p>

          <h2>How we use your information</h2>
          <ul className="privacy-list">
            <li>To contact you and arrange your free eye check-up.</li>
            <li>To share your appointment details with the treating hospital so your visit can be scheduled.</li>
            <li>
              To check and process your cover with your insurance company or TPA, where you've asked
              us to.
            </li>
            <li>To answer questions you've asked us.</li>
          </ul>
          <p>
            We do not sell, rent or trade your details, and we don't use them for advertising. We
            share them only with the treating hospital and, with your consent, your insurer or TPA —
            because that's what's needed to arrange your treatment and claim.
          </p>

          <h2>The assistant on this site</h2>
          <p>
            The Vision Assistant chat runs entirely inside your own browser and answers from a fixed
            list of eye-care answers. It doesn't call any external or AI service, and your messages
            to it are never recorded, transmitted or seen by us.
          </p>

          <h2>Cookies and tracking</h2>
          <p>
            We don't use advertising or analytics cookies, and we don't track you across other
            websites. Fonts on this site are served by Google Fonts, which means your browser
            requests them from Google and Google may receive your IP address as part of that request.
          </p>

          <h2>Your choices</h2>
          <p>
            You can ask us at any time to tell you what details we hold, correct them, or delete
            them — just call or email us using the details below. If you'd rather not share anything
            through this website, you're welcome to simply call us instead.
          </p>

          <h2>Medical information on this site</h2>
          <p>
            The procedure descriptions and answers on this website are general patient education.
            They are not a diagnosis, not a treatment plan, and not a substitute for an in-person
            consultation with a qualified eye doctor. Insurance cover is subject to your policy terms
            and your insurer's approval (T&amp;C apply).
          </p>

          <h2>Contact us</h2>
          <ul className="privacy-contact">
            <li>
              <Phone size={17} />
              <a href={clinicInfo.phoneHref}>{clinicInfo.phone}</a>
            </li>
            <li>
              <Mail size={17} />
              <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
            </li>
            <li>
              <MapPin size={17} />
              <span>{clinicInfo.address}</span>
            </li>
          </ul>

          <p className="privacy-back">
            <Link to="/contact">Book a free eye check-up →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
