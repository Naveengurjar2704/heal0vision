import { useState } from "react";
import { Link } from "react-router-dom";
import "./Logo.css";

// Drop a real logo file into public/brand/ and it's picked up automatically:
//   public/brand/logo.png       — used on light backgrounds (navbar, footer top)
//   public/brand/logo-white.png — used on dark backgrounds (footer, announcement bar)
// Until those files exist, the image 404s and this falls back to the icon + wordmark below.
export default function Logo({ inverse = false }) {
  const [imageFailed, setImageFailed] = useState(false);
  const src = inverse ? "/brand/logo-white.png" : "/brand/logo.png";

  return (
    <Link to="/" className={`logo ${inverse ? "logo--inverse" : ""}`} aria-label="Heal O Vision home">
      {!imageFailed ? (
        <img
          src={src}
          alt="Heal O Vision"
          className="logo__image"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <>
          <span className="logo__mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="34" height="34">
              <path
                d="M4 20C9 11 15 6 20 6C25 6 31 11 36 20C31 29 25 34 20 34C15 34 9 29 4 20Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
              />
              <circle cx="20" cy="20" r="6" fill="currentColor" />
            </svg>
          </span>
          <span className="logo__text">
            Heal <span className="logo__o">O</span> Vision
          </span>
        </>
      )}
    </Link>
  );
}
