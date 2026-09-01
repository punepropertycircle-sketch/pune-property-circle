import { useState } from "react";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "360° Experience", href: "#tour" },
    { name: "Plotting", href: "#plotting" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <img
            src={logo}
            alt="Pune Property Circle"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className={index === 0 ? "active" : ""}
            >
              {item.name}
              <span />
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href="#enquire" className="navbar-cta">
          <span>Enquire Now</span>
          <span className="cta-arrow">↗</span>
        </a>

        {/* Mobile Button */}
        <button
          className={`menu-button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        ))}

        <a
          href="#enquire"
          className="mobile-cta"
          onClick={() => setIsOpen(false)}
        >
          Enquire Now ↗
        </a>
      </div>
    </header>
  );
}

export default Navbar;