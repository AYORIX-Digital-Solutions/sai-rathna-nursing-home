
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Plus } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Specialities", href: "#specialities" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Contact", href: "#appointment" },
];

const SECTION_IDS = [
  "home",
  "about",
  "specialities",
  "doctors",
  "facilities",
  "why-choose-us",
  "reviews",
  "appointment",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoAvailable, setLogoAvailable] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      setScrolled(window.scrollY > 10);

      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Page bottom daggara Appointment section ni active ga pettali.
      if (scrollPosition + viewportHeight >= documentHeight - 8) {
        const lastExistingSection = [...SECTION_IDS]
          .reverse()
          .find((id) => document.getElementById(id));

        if (lastExistingSection) {
          const lastSection = document.getElementById(lastExistingSection);
          const lastLink = navLinks.find(
            (link) => link.href.slice(1) === lastExistingSection
          );

          setActiveSection(lastLink ? lastExistingSection : activeSection);
          if (!lastLink && lastSection) {
            setActiveSection(lastExistingSection);
          }
        }

        ticking = false;
        return;
      }

      // Sticky navbar height + small visual gap.
      const activationLine = 110;
      let currentSection = "home";

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= activationLine) {
          currentSection = id;
        } else {
          break;
        }
      }

      // Navbar lo links unna sections maatrame highlight cheyyali.
      const activeNavLink = navLinks.find(
        (link) => link.href.slice(1) === currentSection
      );

      if (activeNavLink) {
        setActiveSection(currentSection);
      } else {
        // Facilities / Why Choose Us lo unte nearest previous nav link.
        const currentIndex = SECTION_IDS.indexOf(currentSection);
        const previousNavLink = [...SECTION_IDS]
          .slice(0, currentIndex + 1)
          .reverse()
          .find((id) =>
            navLinks.some((link) => link.href.slice(1) === id)
          );

        if (previousNavLink) setActiveSection(previousNavLink);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      if (navLinks.some((link) => link.href.slice(1) === id)) {
        setActiveSection(id);
      }
    };

    updateNavbar();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  return (
    <header
      className={`sr-navbar ${
        scrolled ? "sr-navbar-scrolled" : ""
      }`}
    >
      <div className="sr-navbar-inner">
        <a
          href="#home"
          className="sr-brand"
          aria-label="Sai Rathna Hospital home"
          onClick={() => handleNavClick("home")}
        >
          {logoAvailable ? (
            <img
              src="/images/hospital-logo.png"
              alt=""
              className="sr-brand-logo"
              onError={() => setLogoAvailable(false)}
            />
          ) : (
            <span className="sr-brand-emblem" aria-hidden="true">
              <Plus size={27} strokeWidth={1.4} />
            </span>
          )}

          <span className="sr-brand-copy">
            <span className="sr-brand-name">Sai Rathna</span>
            <span className="sr-brand-subtitle">NURSING HOME</span>
          </span>
        </a>

        <nav
          id="sr-navigation"
          className={`sr-nav-links ${
            menuOpen ? "sr-nav-open" : ""
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.slice(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                href={link.href}
                className={`sr-nav-link ${
                  isActive ? "sr-nav-link-active" : ""
                }`}
                key={link.label}
                aria-current={isActive ? "location" : undefined}
                onClick={() => handleNavClick(sectionId)}
              >
                {link.label}
              </a>
            );
          })}

          <a
            href="#appointment"
            className="sr-navbar-cta sr-mobile-appointment"
            onClick={() => handleNavClick("appointment")}
          >
            <span>Book an Appointment</span>
            <ArrowUpRight size={17} strokeWidth={1.7} />
          </a>
        </nav>

        <a
          href="#appointment"
          className="sr-navbar-cta sr-desktop-appointment"
          onClick={() => handleNavClick("appointment")}
        >
          <span>Book an Appointment</span>
          <ArrowUpRight size={17} strokeWidth={1.7} />
        </a>

        <button
          type="button"
          className="sr-menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="sr-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={23} strokeWidth={1.5} />
          ) : (
            <Menu size={23} strokeWidth={1.5} />
          )}
        </button>
      </div>
    </header>
  );
}
