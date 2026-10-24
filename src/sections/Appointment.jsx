
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Clock,
  Plus,
} from "lucide-react";
import "./Appointment.css";

const HOSPITAL_PHONE = "9700120921";

const details = [
  {
    number: "01",
    icon: Phone,
    label: "OP BOOKING NUMBER",
    title: "+91 97001 20921",
    description: "Call directly for appointment enquiries.",
    href: `tel:${HOSPITAL_PHONE}`,
    action: "Call hospital",
  },
  {
    number: "02",
    icon: MapPin,
    label: "HOSPITAL LOCATION",
    title: "Ganesh Chowk Main Road",
    description: "Bhupalpally, Telangana",
    href: "https://www.google.com/maps/search/?api=1&query=Sai+Rathna+Multi+Speciality+Hospital+Bhupalpally+Telangana",
    action: "Get directions",
  },
  {
    number: "03",
    icon: Clock,
    label: "BEFORE YOUR VISIT",
    title: "Confirm availability",
    description: "Call to check OP timings and doctor availability.",
    href: `tel:${HOSPITAL_PHONE}`,
    action: "Check timings",
  },
];

export default function Appointment() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`sr-op-section ${isVisible ? "sr-op-visible" : ""}`}
      id="appointment"
      aria-labelledby="sr-op-title"
    >
      <div className="sr-op-container">
        <div className="sr-op-topline">
          <span className="sr-op-kicker">
            <span className="sr-op-kicker-line" />
            YOUR HEALTH, OUR PRIORITY
          </span>
          <span className="sr-op-index">SAI RATHNA / 01</span>
        </div>

        <div className="sr-op-layout">
          <div className="sr-op-intro">
            <p className="sr-op-overline">WE ARE HERE FOR YOU</p>

            <h2 className="sr-op-heading" id="sr-op-title">
              The next step
              <br />
              towards better
              <br />
              health starts
              <br />
              <em>with a call.</em>
            </h2>

            <p className="sr-op-description">
              Planning a visit to Sai Rathna Nursing Home?
              Connect with the hospital directly for OP booking and
              consultation-related enquiries.
            </p>

            <div className="sr-op-actions">
              <a
                href={`tel:${HOSPITAL_PHONE}`}
                className="sr-op-primary"
                aria-label="Call Sai Rathna Nursing Home for OP booking"
              >
                <Phone size={17} strokeWidth={1.7} />
                <span>Call for OP Booking</span>
                <ArrowUpRight size={17} />
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Sai+Rathna+Multi+Speciality+Hospital+Bhupalpally+Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="sr-op-text-link"
              >
                Find the hospital
                <ArrowDownRight size={17} />
              </a>
            </div>

            <div className="sr-op-call-note">
              <span className="sr-op-note-mark">
                <Plus size={15} />
              </span>
              <p>
                Please confirm OP timings and doctor availability
                before visiting.
              </p>
            </div>
          </div>

          <div className="sr-op-details">
            <div className="sr-op-details-heading">
              <span>PLAN YOUR VISIT</span>
              <span className="sr-op-heading-line" />
            </div>

            {details.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  className="sr-op-detail"
                  href={item.href}
                  key={item.number}
                  target={item.number === "02" ? "_blank" : undefined}
                  rel={
                    item.number === "02"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={item.action}
                  style={{ "--sr-op-delay": `${index * 130}ms` }}
                >
                  <span className="sr-op-detail-number">
                    {item.number}
                  </span>

                  <span className="sr-op-detail-icon">
                    <Icon size={20} strokeWidth={1.5} />
                  </span>

                  <span className="sr-op-detail-copy">
                    <span className="sr-op-detail-label">
                      {item.label}
                    </span>
                    <span className="sr-op-detail-title">
                      {item.title}
                    </span>
                    <span className="sr-op-detail-description">
                      {item.description}
                    </span>
                  </span>

                  <span className="sr-op-detail-arrow">
                    <ArrowUpRight size={18} strokeWidth={1.5} />
                  </span>
                </a>
              );
            })}

            <div className="sr-op-bottom-note">
              <span className="sr-op-bottom-dot" />
              <span>Direct hospital contact</span>
              <span className="sr-op-bottom-separator">/</span>
              <span>Bhupalpally, Telangana</span>
            </div>
          </div>
        </div>

        <div className="sr-op-footerline">
          <span>CARE THAT BEGINS WITH A CONVERSATION.</span>
         
        </div>
      </div>
    </section>
  );
}
