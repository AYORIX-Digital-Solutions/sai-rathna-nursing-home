
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Specialities", href: "#specialities" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Facilities", href: "#facilities" },
  { label: "Patient Reviews", href: "#reviews" },
];

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Sai+Rathna+Multi+Speciality+Hospital+Bhupalpally+Telangana";

export default function Footer() {
  return (
    <footer className="sr-footer" id="footer">
      <div className="sr-footer-main">
        <div className="sr-footer-topline">
          <span className="sr-footer-eyebrow">
            <span className="sr-footer-eyebrow-line" />
            YOUR HEALTH, OUR PRIORITY
          </span>
          <span className="sr-footer-edition">SAI RATHNA / CARE</span>
        </div>

        <div className="sr-footer-grid">
          <div className="sr-footer-brand">
            <a
              href="#home"
              className="sr-footer-brand-lockup"
              aria-label="Sai Rathna Hospital home"
            >
              <span className="sr-footer-logo-wrap">
                <img
                  src="/images/hospital-logo.png"
                  alt="Sai Rathna Hospital logo"
                  className="sr-footer-logo"
                  loading="lazy"
                />
              </span>

              <span className="sr-footer-brand-name">
                <span className="sr-footer-brand-title">SAI RATHNA</span>
                <span className="sr-footer-brand-subtitle">
                  NURSING HOME
                </span>
              </span>
            </a>

            <p className="sr-footer-description">
              Care that listens. Support that matters. Every patient deserves
              to feel heard, respected, and cared for.
            </p>

            <a href="#appointment" className="sr-footer-appointment-link">
              Book an appointment
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <nav
            className="sr-footer-navigation"
            aria-label="Footer navigation"
          >
            <h2 className="sr-footer-heading">Explore</h2>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className="sr-footer-nav-icon"
                      size={14}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="sr-footer-contact">
            <h2 className="sr-footer-heading">Get in touch</h2>

            <a className="sr-footer-contact-item" href="tel:9700120921">
              <span className="sr-footer-contact-icon">
                <Phone size={17} aria-hidden="true" />
              </span>
              <span className="sr-footer-contact-copy">
                <span className="sr-footer-contact-label">
                  CALL THE HOSPITAL
                </span>
                <span className="sr-footer-contact-value">97001 20921</span>
              </span>
              <ArrowUpRight
                className="sr-footer-contact-arrow"
                size={15}
                aria-hidden="true"
              />
            </a>

            <a
              className="sr-footer-contact-item"
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-footer-contact-icon">
                <MapPin size={18} aria-hidden="true" />
              </span>
              <span className="sr-footer-contact-copy">
                <span className="sr-footer-contact-label">
                  FIND OUR LOCATION
                </span>
                <span className="sr-footer-contact-value">
                  Ganesh Chowk Main Road,
                  <br />
                  Bhupalpally, Telangana
                </span>
              </span>
              <ArrowUpRight
                className="sr-footer-contact-arrow"
                size={15}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="sr-footer-message">
          <span className="sr-footer-message-symbol" aria-hidden="true">
            “
          </span>
          <p>
            Every patient deserves care with{" "}
            <em>dignity and compassion.</em>
          </p>
        </div>
      </div>

      
<div className="sr-footer-bottom">
  <div className="sr-footer-bottom-row">
    <p>
      © {new Date().getFullYear()} Sai Rathna Nursing Home.
      <span> All rights reserved.</span>
    </p>

    <a href="#home" className="sr-footer-back-top">
      <span>BACK TO TOP</span>
      <span className="sr-footer-back-top-icon">
        <ArrowUpRight size={15} aria-hidden="true" />
      </span>
    </a>
  </div>

  <div className="sr-footer-credit">
    <span>DESIGNED &amp; DEVELOPED BY</span>
    <a
      href="https://www.ayorix.in"
      target="_blank"
      rel="noopener noreferrer"
    >
      AYORIX Digital Solutions
      <ArrowUpRight size={13} aria-hidden="true" />
    </a>
  </div>
</div>

    </footer>
  );
}
