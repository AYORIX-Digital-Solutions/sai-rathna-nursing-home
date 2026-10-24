
import { useEffect } from "react";
import {
  ArrowUpRight,
  Clock3,
  FlaskConical,
  Pill,
  Activity,
  ScanLine,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import "./Facilities.css";

const facilities = [
  {
    number: "01",
    title: "Emergency Care",
    description:
      "Emergency care support for patients who need prompt medical attention.",
    icon: HeartPulse,
    tag: "EMERGENCY",
  },
  {
    number: "02",
    title: "Diagnostic Services",
    description:
      "Diagnostic support including ECG and ultrasonography, subject to availability.",
    icon: ScanLine,
    tag: "DIAGNOSTICS",
  },
  {
    number: "03",
    title: "Laboratory Services",
    description:
      "Laboratory testing support to help doctors assess patients' healthcare needs.",
    icon: FlaskConical,
    tag: "LABORATORY",
  },
  {
    number: "04",
    title: "Pharmacy",
    description:
      "Convenient access to pharmacy services at the hospital.",
    icon: Pill,
    tag: "PHARMACY",
  },
  {
    number: "05",
    title: "Patient Monitoring",
    description:
      "Monitoring support during maternity care and other indicated clinical procedures.",
    icon: Activity,
    tag: "PATIENT CARE",
  },
  {
    number: "06",
    title: "Medical Consultation",
    description:
      "Connect with the hospital to enquire about consultations and available medical services.",
    icon: Stethoscope,
    tag: "CONSULTATION",
  },
];

export default function Facilities() {
  useEffect(() => {
    const section = document.querySelector(".sr-facilities");
    if (!section) return;

    const elements = section.querySelectorAll(".sr-facility-reveal");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
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
    <section className="sr-facilities" id="facilities">
      <div className="sr-facilities-container">
        <div className="sr-facilities-header sr-facility-reveal">
          <div className="sr-facilities-heading-block">
            <span className="sr-facilities-eyebrow">
              <span className="sr-facilities-eyebrow-line" />
              OUR FACILITIES
            </span>

            <h2 className="sr-facilities-title">
              Thoughtful care.
              <br />
              <em>Essential services.</em>
            </h2>
          </div>

          <p className="sr-facilities-intro">
            Explore the healthcare services and facilities
            associated with Sai Rathna Nursing Home, Bhupalpally.
           
          </p>
        </div>

        <div className="sr-facilities-grid">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;

            return (
              <article
                className="sr-facility-card sr-facility-reveal"
                key={facility.number}
                style={{ "--facility-index": index }}
              >
                <div className="sr-facility-card-top">
                  <span className="sr-facility-number">
                    {facility.number}
                  </span>

                  <span className="sr-facility-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </span>
                </div>

                <div className="sr-facility-card-content">
                  <span className="sr-facility-tag">
                    {facility.tag}
                  </span>

                  <h3>{facility.title}</h3>

                  <p>{facility.description}</p>
                </div>

                <div className="sr-facility-card-bottom">
                  <span className="sr-facility-bottom-line" />
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="sr-facilities-footnote sr-facility-reveal">
          <Clock3 size={17} strokeWidth={1.5} />
          <p>
            Please contact the hospital to confirm service
            availability and timings.
          </p>
          <a href="#contact">
            Get in touch
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
