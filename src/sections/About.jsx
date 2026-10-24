
import { useEffect } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import "./About.css";

export default function About() {
  useEffect(() => {
    const section = document.querySelector(".sr-about");
    if (!section) return;

    const elements = section.querySelectorAll(".sr-about-reveal");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -25px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sr-about" id="about">
      <div className="sr-about-container">
        <div className="sr-about-topline sr-about-reveal">
          <span className="sr-about-kicker">
            <span className="sr-about-kicker-line" />
            GET TO KNOW US
          </span>

          <span className="sr-about-index">01 — ABOUT</span>
        </div>

        <div className="sr-about-layout sr-about-reveal">
          <div className="sr-about-heading">
            <h2>
              Your health.
              <br />
              <span>Our priority.</span>
            </h2>

            <div className="sr-about-heading-note">
              <span className="sr-about-note-line" />
              <p>
                Healthcare with a personal touch,
                close to home.
              </p>
            </div>
          </div>

          <div className="sr-about-copy">
            <p className="sr-about-intro">
              Welcome to Sai Rathna Nursing Home.
            </p>

            <p className="sr-about-description">
              Located in Bhupalpally, Telangana, our hospital
              aims to make healthcare more accessible for
              individuals and families.
            </p>

            <p className="sr-about-description">
              We believe every patient deserves to be heard,
              understood and guided towards the care they need.
              Our team is here to help you learn about the
              available medical services and next steps.
            </p>

            <a href="#specialities" className="sr-about-link">
              Explore Our Specialities
              <span className="sr-about-link-icon">
                <ArrowUpRight size={17} strokeWidth={1.7} />
              </span>
            </a>
          </div>
        </div>

        <div className="sr-about-bottom">
          <div className="sr-about-location sr-about-reveal">
            <span className="sr-about-location-icon">
              <MapPin size={20} strokeWidth={1.5} />
            </span>

            <div className="sr-about-location-copy">
              <span className="sr-about-bottom-label">
                FIND US
              </span>
              <h3>Bhupalpally, Telangana</h3>
              <p>Ganesh Chowk Main Road</p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sai+Rathna+Multi+Speciality+Hospital+Bhupalpally"
              target="_blank"
              rel="noreferrer"
              className="sr-about-map-link"
              aria-label="Search for Sai Rathna Hospital on Google Maps"
            >
              <ArrowUpRight size={19} />
            </a>
          </div>

          <div className="sr-about-message sr-about-reveal">
            <span className="sr-about-message-mark">“</span>
            <p>
              Better healthcare starts with listening,
              understanding and caring for every patient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
