
import { useEffect } from "react";
import {
  ArrowUpRight,
  HeartHandshake,
  MapPin,
  UsersRound,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import "./WhyChooseUs.css";

const reasons = [
  {
    number: "01",
    title: "Patient-Focused Care",
    description:
      "We believe in listening to patients, understanding their concerns and helping them explore suitable care options.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Multiple Healthcare Services",
    description:
      "Explore information about the hospital's listed specialities and medical services in one convenient place.",
    icon: Stethoscope,
  },
  {
    number: "03",
    title: "Care Close to Home",
    description:
      "Located in Bhupalpally, making it easier for local individuals and families to find hospital information.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Personal Guidance",
    description:
      "Contact the hospital team to enquire about consultations, available services and appointment arrangements.",
    icon: UsersRound,
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    const section = document.querySelector(".sr-why");
    if (!section) return;

    const elements = section.querySelectorAll(".sr-why-reveal");

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
    <section className="sr-why" id="why-us">
      <div className="sr-why-container">
        <div className="sr-why-layout">
          <div className="sr-why-intro sr-why-reveal">
            <span className="sr-why-eyebrow">
              <span className="sr-why-eyebrow-line" />
              THE SAI RATHNA APPROACH
            </span>

            <h2 className="sr-why-title">
              Care that begins
              <br />
              with <em>understanding.</em>
            </h2>

            <p className="sr-why-description">
              Every healthcare journey is personal. We aim to
              make it easier for patients and families to learn
              about available services and take their next step
              with greater clarity.
            </p>

            <a href="#contact" className="sr-why-link">
              Connect with us
              <span className="sr-why-link-icon">
                <ArrowUpRight size={17} strokeWidth={1.7} />
              </span>
            </a>

            <div className="sr-why-location">
              <MapPin size={17} strokeWidth={1.5} />
              <span>Ganesh Chowk Main Road, Bhupalpally</span>
            </div>
          </div>

          <div className="sr-why-grid">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  className="sr-why-card sr-why-reveal"
                  key={reason.number}
                  style={{ "--why-index": index }}
                >
                  <div className="sr-why-card-top">
                    <span className="sr-why-number">
                      {reason.number}
                    </span>

                    <span className="sr-why-icon">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h3>{reason.title}</h3>

                  <p>{reason.description}</p>

                  <span className="sr-why-card-line" />
                </article>
              );
            })}
          </div>
        </div>

        <div className="sr-why-bottom sr-why-reveal">
          <span className="sr-why-bottom-icon">
            <ShieldCheck size={22} strokeWidth={1.4} />
          </span>

          <p>
            Your healthcare decisions deserve clear information
            and a conversation with a qualified medical professional.
          </p>

          <a href="#specialities">
            Explore services
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
