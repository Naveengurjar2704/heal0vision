import { Phone } from "lucide-react";
import { clinicInfo } from "../../data/clinicInfo";
import InstagramIcon from "../shared/InstagramIcon";
import "./AnnouncementBar.css";

export default function AnnouncementBar() {
  return (
    <div className="announcement">
      <div className="container announcement__inner">
        <p className="announcement__msg">
          Free eye check-up · No-cost EMI · Cashless insurance accepted
        </p>
        <div className="announcement__links">
          <a href={clinicInfo.instagram} target="_blank" rel="noreferrer" aria-label="Heal O Vision on Instagram">
            <InstagramIcon size={15} />
          </a>
          <a href={clinicInfo.phoneHref} className="announcement__phone">
            <Phone size={15} />
            {clinicInfo.phone}
          </a>
        </div>
      </div>
    </div>
  );
}
