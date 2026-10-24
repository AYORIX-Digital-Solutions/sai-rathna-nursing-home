
import { ArrowUpRight, MapPin } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="sr-hero" id="home">
      <div className="sr-hero-container">
        {/* Left content */}
        <div className="sr-hero-content">
          <div className="sr-hero-eyebrow">
            <span className="sr-hero-eyebrow-line" />
            SAI RATHNA NURSING HOME
          </div>

          <h1 className="sr-hero-title">
            Expert Medical Care
            <br />
            <span>for You & Your Family</span>
          </h1>

          <p className="sr-hero-description">
            Your health matters to us. We are here to support you
            and your family with personalised attention and
            medical care in Bhupalpally.
          </p>

          <div className="sr-hero-actions">
            <a href="#appointment" className="sr-hero-primary">
              Contact the Hospital
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </a>

            <a href="#specialities" className="sr-hero-secondary">
              Explore Specialities
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="sr-hero-divider" />

          <div className="sr-hero-location">
            <span className="sr-hero-location-icon">
              <MapPin size={19} strokeWidth={1.5} />
            </span>

            <div>
              <span className="sr-hero-location-label">
                VISIT OUR HOSPITAL
              </span>
              <p>Bhupalpally, Telangana</p>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="sr-hero-visual">
          <div className="sr-hero-image-frame">
            <img
              src="/images/ratna-1.jpeg"
              alt="Sai Rathna Hospital exterior in Bhupalpally"
              className="sr-hero-image"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.parentElement.classList.add(
                  "sr-hero-image-missing"
                );
              }}
            />

            <div className="sr-hero-image-placeholder">
              <span>Sai Rathna</span>
              <small>Multi Speciality Hospital</small>
              <p>Add the hospital exterior photo in public/images/ratna-1.jpeg</p>
            </div>
          </div>

          <div className="sr-hero-image-caption">
            <span className="sr-hero-caption-line" />

            <div>
              <span className="sr-hero-caption-title">
                Your Health. Our Priority.
              </span>
              <span className="sr-hero-caption-subtitle">
                Care for you and your family
              </span>
            </div>
          </div>

          <span className="sr-hero-visual-index">01 / SAI RATHNA</span>
        </div>
      </div>

      <div className="sr-hero-bottom-line" />
    </section>
  );
}
