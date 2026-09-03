import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =================================
            BRAND
        ================================= */}

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            <img
              src={logo}
              alt="Pune Property Circle"
            />
          </Link>

          <h2>
            Pune Property Circle
          </h2>

          <p>
            Discover and explore properties across Pune
            through a simple, clear and convenient experience.
          </p>

          <Link
            to="/contact#enquire"
            className="footer-enquire"
          >
            Enquire Now
          </Link>

        </div>


        {/* =================================
            QUICK LINKS
        ================================= */}

        <div className="footer-column">

          <h3>
            Quick Links
          </h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/projects">
            Projects
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* =================================
            EXPLORE
        ================================= */}

        <div className="footer-column">

          <h3>
            Explore
          </h3>

          <Link to="/projects">
            Our Projects
          </Link>

          <Link to="/contact#enquire">
            Book a Site Visit
          </Link>

          <Link to="/contact">
            Send Enquiry
          </Link>

        </div>


        {/* =================================
            CONTACT
        ================================= */}

        <div className="footer-column footer-contact">

          <h3>
            Get In Touch
          </h3>

          <span>
            Pune, Maharashtra
          </span>

          <span>
            8380800500
          </span>

          <span>
            punepropertycircle@gmail.com
          </span>

        </div>


        {/* =================================
            SOCIAL MEDIA
        ================================= */}

        <div className="footer-column footer-social">

          <h3>
            Follow Us
          </h3>

          <div className="social-links">

            {/* Instagram */}

            <a
              href="https://www.instagram.com/punepropertycircle?igsh=MWZyN3Zyb2Zld3h6eA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >

              <span className="social-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />

                </svg>

              </span>

              <span className="social-name">
                Instagram
              </span>

            </a>


            {/* Facebook */}

            <a
              href="https://www.facebook.com/profile.php?id=61592482444057"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >

              <span className="social-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.66.34-1 1-1Z" />

                </svg>

              </span>

              <span className="social-name">
                Facebook
              </span>

            </a>


            {/* YouTube */}

            <a
              href="https://www.youtube.com/@PunePropertyCircle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >

              <span className="social-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <path d="M23 12s0-4.1-.5-6c-.3-1.1-1.2-2-2.3-2.3C18.3 3.2 12 3.2 12 3.2s-6.3 0-8.2.5C2.7 4 1.8 4.9 1.5 6 .9 7.9.9 12 .9 12s0 4.1.5 6c.3 1.1 1.2 2 2.3 2.3 1.9.5 8.2.5 8.2.5s6.3 0 8.2-.5c1.1-.3 2-1.2 2.3-2.3.6-1.9.6-6 .6-6ZM9.5 15.5v-7l6 3.5-6 3.5Z" />

                </svg>

              </span>

              <span className="social-name">
                YouTube
              </span>

            </a>


            {/* WhatsApp */}

            <a
              href="https://wa.me/8380800500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >

              <span className="social-icon">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                  <path
                    d="M20 4.9A9.9 9.9 0 0 0 12.1 2C6.6 2 2.1 6.5 2.1 12c0 1.8.5 3.5 1.4 5L2 22l5.2-1.4c1.5.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10 0-2.6-1-5.1-2.9-6.9Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />

                  <path
                    d="M8.5 7.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.2.1.4 0 .6l-.5.7c-.1.2-.1.4 0 .6.4.8 1.1 1.5 1.8 1.9.2.1.4.1.6 0l.8-.5c.2-.1.4-.1.6 0l1.8.8c.3.1.4.3.4.5v.5c0 .3-.1.5-.4.7-.4.3-1 .5-1.5.4-1.1-.2-2.6-1-3.8-2.1-1.2-1.1-2.1-2.5-2.4-3.7-.1-.6 0-1.1.4-1.7Z"
                    fill="currentColor"
                  />

                </svg>

              </span>

              <span className="social-name">
                WhatsApp
              </span>

            </a>

          </div>

        </div>

      </div>


      {/* =================================
          BOTTOM
      ================================= */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Pune Property Circle.
          All rights reserved.
        </p>

        <p>
          Property Discovery Made Simple.
        </p>

      </div>

    </footer>
  );
}

export default Footer;