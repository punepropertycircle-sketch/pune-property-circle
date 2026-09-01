import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-wrapper">

      <nav className="navbar">

        {/* ================================
            LOGO
        ================================= */}

        {/* Logo + Brand Name */}
        <Link to="/" className="navbar-brand">

          <img
            src={logo}
            alt="Pune Property Circle"
          />

          <div className="navbar-brand-text">
            <strong>PUNE PROPERTY</strong>
            <span>CIRCLE</span>
          </div>

        </Link>


        {/* ================================
            DESKTOP NAVIGATION
        ================================= */}

        <div className="navbar-links">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
            <span className="nav-underline"></span>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Projects
            <span className="nav-underline"></span>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            About
            <span className="nav-underline"></span>
          </NavLink>





          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact
            <span className="nav-underline"></span>
          </NavLink>

        </div>


        {/* ================================
            ENQUIRE BUTTON
        ================================= */}

        <Link
          to="/contact#enquire"
          className="navbar-cta"
          onClick={closeMenu}
        >
          <span>Enquire Now</span>

          <span className="cta-arrow">
            ↗
          </span>
        </Link>


        {/* ================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          className={`menu-button ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>


      {/* ================================
          MOBILE NAVIGATION
      ================================= */}

      <div
        className={`mobile-menu ${isOpen ? "show" : ""}`}
      >

        <NavLink
          to="/"
          end
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          onClick={closeMenu}
        >
          Projects
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
        >
          About
        </NavLink>





        <NavLink
          to="/contact"
          onClick={closeMenu}
        >
          Contact
        </NavLink>


        <Link
          to="/contact#enquire"
          className="mobile-cta"
          onClick={closeMenu}
        >
          Enquire Now
        </Link>

      </div>

    </header>
  );
}

export default Navbar;