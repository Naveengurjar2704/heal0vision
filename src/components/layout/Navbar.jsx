import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import AnnouncementBar from "./AnnouncementBar";
import { laserProcedures, moreEyeCareProcedures } from "../../data/procedures";
import { clinicInfo } from "../../data/clinicInfo";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setProceduresOpen(false);
  }, [location]);

  return (
    <header className="site-header">
      <AnnouncementBar />
      <div className="navbar">
        <div className="container navbar__inner">
          <Logo />

          <nav className={`navbar__nav ${open ? "navbar__nav--open" : ""}`} aria-label="Primary">
            <NavLink to="/" end className="navbar__link">
              Home
            </NavLink>

            <div
              className="navbar__dropdown"
              onMouseEnter={() => setProceduresOpen(true)}
              onMouseLeave={() => setProceduresOpen(false)}
            >
              <NavLink to="/procedures" end className="navbar__link">
                All Eye Surgery <ChevronDown size={15} aria-hidden="true" />
              </NavLink>
              {/* Always rendered — CSS hides it on desktop until hovered, and
                  keeps it expanded inline inside the mobile drawer. */}
              <div className={`navbar__dropdown-menu ${proceduresOpen ? "navbar__dropdown-menu--open" : ""}`}>
                <span className="navbar__dropdown-heading">Laser vision correction</span>
                {laserProcedures.map((p) => (
                  <Link key={p.slug} to={`/procedures/${p.slug}`} className="navbar__dropdown-item">
                    <strong>{p.name}</strong>
                    <span>{p.fullName}</span>
                  </Link>
                ))}
                <span className="navbar__dropdown-heading">More eye care</span>
                {moreEyeCareProcedures.map((p) => (
                  <Link key={p.slug} to={`/procedures/${p.slug}`} className="navbar__dropdown-item">
                    <strong>{p.name}</strong>
                    <span>{p.fullName}</span>
                  </Link>
                ))}
              </div>
            </div>

            <NavLink to="/insurance" className="navbar__link">
              Insurance
            </NavLink>
            <NavLink to="/about" className="navbar__link">
              About
            </NavLink>
            <NavLink to="/contact" className="navbar__link">
              Contact
            </NavLink>

            <div className="navbar__mobile-only">
              <Link to="/contact" className="btn btn-primary btn-block">
                Book Free Consultation
              </Link>
              <a href={clinicInfo.phoneHref} className="btn btn-outline btn-block">
                <Phone size={16} /> {clinicInfo.phone}
              </a>
            </div>
          </nav>

          <div className="navbar__actions">
            <a href={clinicInfo.phoneHref} className="navbar__phone">
              <Phone size={16} />
              {clinicInfo.phone}
            </a>
            <Link to="/contact" className="btn btn-primary">
              Book Free Consultation
            </Link>
            <button
              type="button"
              className="navbar__toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
