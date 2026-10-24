
import { useEffect } from "react";
import {
  ArrowUpRight,
  Stethoscope,
  HeartPulse,
  UserRound,
} from "lucide-react";
import "./Doctors.css";

const doctors = [
  {
    number: "01",
    name: "Dr. Snigdha Samskruthi",
    role: "Fertility Specialist & Obstetrician",
    qualification: "MBBS, DGO (KMC)",
    additional:
      "FMAS, Advanced Diploma in ART & Reproductive Medicine (Germany)",
    image: "/images/dr-snigdha.jpg",
    icon: HeartPulse,
  },
  {
    number: "02",
    name: "Dr. A. Srikanth",
    role: "Anaesthesia",
    qualification: "MBBS, MD Anaesthesia",
    registration: "Reg. No. 63341",
    image: null,
    icon: Stethoscope,
  },
  {
    number: "03",
    name: "Dr. K. Pravalika",
    role: "Gynaecology & Infertility",
    qualification: "MBBS, DGO",
    additional: "IMA Fellowship in Infertility",
    registration: "Reg. No. 80643",
    image: null,
    icon: HeartPulse,
  },
];

export default function Doctors() {
  useEffect(() => {
    const section = document.querySelector(".sr-doctors");
    if (!section) return;

    const elements = section.querySelectorAll(".sr-doctor-reveal");

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
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sr-doctors" id="doctors">
      <div className="sr-doctors-container">
        <div className="sr-doctors-header sr-doctor-reveal">
          <div>
            <span className="sr-doctors-eyebrow">
              <span className="sr-doctors-eyebrow-line" />
              MEET OUR DOCTORS
            </span>

            <h2 className="sr-doctors-title">
              Care guided by
              <br />
              <em>medical expertise.</em>
            </h2>
          </div>

          <p className="sr-doctors-intro">
            Get to know the doctors associated with Sai Rathna
            Nursing Home.
          </p>
        </div>

        <div className="sr-doctors-grid">
          {doctors.map((doctor, index) => {
            const Icon = doctor.icon;

            return (
              <article
                className="sr-doctor-card sr-doctor-reveal"
                key={doctor.number}
                style={{ "--doctor-index": index }}
              >
                <div className="sr-doctor-card-top">
                  <span className="sr-doctor-number">
                    {doctor.number} / DOCTOR
                  </span>

                  <ArrowUpRight
                    className="sr-doctor-top-arrow"
                    size={20}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <div className="sr-doctor-portrait">
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="sr-doctor-photo"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.parentElement.classList.add(
                          "sr-doctor-image-error"
                        );
                      }}
                    />
                  ) : (
                    <div className="sr-doctor-portrait-circle">
                      <UserRound
                        size={58}
                        strokeWidth={1}
                        aria-hidden="true"
                      />
                    </div>
                  )}

                  <span className="sr-doctor-portrait-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>
                </div>

                <div className="sr-doctor-info">
                  <p className="sr-doctor-label">
                    MEDICAL PROFESSIONAL
                  </p>

                  <h3>{doctor.name}</h3>
                  <p className="sr-doctor-role">{doctor.role}</p>

                  {doctor.qualification && (
                    <p className="sr-doctor-qualification">
                      {doctor.qualification}
                    </p>
                  )}

                  {doctor.additional && (
                    <p className="sr-doctor-additional">
                      {doctor.additional}
                    </p>
                  )}

                  {doctor.registration && (
                    <p className="sr-doctor-registration">
                      {doctor.registration}
                    </p>
                  )}
                </div>

                <div className="sr-doctor-card-footer">
                  <span>SAI RATHNA NURSING HOME</span>
                  <span className="sr-doctor-footer-line" />
                </div>
              </article>
            );
          })}
        </div>

        <div className="sr-doctors-note sr-doctor-reveal">
          <span className="sr-doctors-note-icon">
            <Stethoscope size={20} strokeWidth={1.5} />
          </span>

          <p>
            For consultations and appointment information,
            please contact the hospital.
          </p>

          <a href="#contact" className="sr-doctors-contact-link">
            Contact us
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
