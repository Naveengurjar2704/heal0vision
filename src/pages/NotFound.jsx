import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="eyebrow">404</span>
        <h1>We couldn't find that page</h1>
        <p>Let's get you back to clear vision.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
