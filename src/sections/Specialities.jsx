
import { useEffect } from "react";
import {
  Baby,
  HeartPulse,
  Microscope,
  ScanLine,
  Stethoscope,
  Activity,
  ArrowUpRight,
  ClipboardPlus,
} from "lucide-react";
import "./Specialities.css";

const specialities = [
  {
    number: "01",
    title: "Women's Healthcare",
    description:
      "Gynaecology consultations, pregnancy care and support for women's health needs.",
    icon: HeartPulse,
  },
  {
    number: "02",
    title: "Fertility Care",
    description:
      "Infertility consultations and available fertility services, including IUI.",
    icon: Baby,
  },
  {
    number: "03",
    title: "Maternity & Delivery",
    description:
      "Antenatal care, fetal monitoring and delivery-related services.",
    icon: Stethoscope,
  },
  {
    number: "04",
    title: "Diagnostic Services",
    description:
      "Ultrasonography, colour Doppler and ECG services.",
    icon: ScanLine,
  },
  {
    number: "05",
    title: "Laboratory Services",
    description:
      "Laboratory investigations to support medical assessment and care.",
    icon: Microscope,
  },
  {
    number: "06",
    title: "General & Emergency Care",
    description:
      "General surgical services and emergency care as available at the hospital.",
    icon: Activity,
  },
];

export default function Specialities() {
  useEffect(() => {
    const elements = document.querySelectorAll(".sr-speciality-reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
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
        rootMargin: "0px 0px -35px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sr-specialities" id="specialities">
      <div className="sr-specialities-container">
        <div className="sr-specialities-top sr-speciality-reveal">
          <div>
            <span className="sr-specialities-eyebrow">
              <span />
              OUR MEDICAL SERVICES
            </span>

            <h2 className="sr-specialities-title">
              Care for your
              <br />
              <em>health needs.</em>
            </h2>
          </div>

          <p className="sr-specialities-intro">
            Explore the medical services available at Sai Rathna
        Nursing Home, Bhupalpally.
          </p>
        </div>

        <div className="sr-specialities-grid">
          {specialities.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                className="sr-speciality-card sr-speciality-reveal"
                key={item.number}
                style={{ "--card-index": index }}
              >
                <div className="sr-speciality-card-top">
                  <span className="sr-speciality-number">
                    {item.number}
                  </span>

                  <span className="sr-speciality-icon">
                    <Icon size={23} strokeWidth={1.5} />
                  </span>
                </div>

                <div className="sr-speciality-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="sr-speciality-card-bottom">
                  <span className="sr-speciality-card-line" />
                  <ArrowUpRight
                    className="sr-speciality-arrow"
                    size={19}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>
              </article>
            );
          })}
        </div>

        <div className="sr-specialities-note sr-speciality-reveal">
          <span className="sr-specialities-note-icon">
            <ClipboardPlus size={19} strokeWidth={1.5} />
          </span>
          <p>
            For information about a specific service, please
            contact the hospital.
          </p>
          <a href="#contact">
            Contact us
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
