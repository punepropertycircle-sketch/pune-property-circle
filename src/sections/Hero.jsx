import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.jpg";
import "./Hero.css";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      {/* Background Overlay */}
      <div className="hero-overlay"></div>


      {/* Main Content */}
      <div className="hero-container">

        <div className="hero-content">

          <p className="hero-label">
            PUNE PROPERTY CIRCLE
          </p>

          <h1>
            Find a Property
            <br />
            <span>You Can Trust.</span>
          </h1>

          <p className="hero-description">
            Explore carefully selected properties across Pune with
            detailed information, locations and immersive virtual
            experiences.
          </p>


          {/* Buttons */}

          <div className="hero-buttons">

            <Link
              to="/projects"
              className="hero-btn hero-btn-primary"
            >
              Explore Projects

              <span className="hero-arrow">
                →
              </span>
            </Link>


            <Link
              to="/contact#enquire"
              className="hero-btn hero-btn-secondary"
            >
              Enquire Now
            </Link>

          </div>

        </div>

      </div>


      {/* Bottom Information Bar */}

      <div className="hero-bottom">

        <div className="hero-info">

          <span className="hero-info-number">
            01
          </span>

          <div>
            <strong>
              Explore
            </strong>

            <p>
              Properties across Pune
            </p>
          </div>

        </div>


        <div className="hero-info">

          <span className="hero-info-number">
            02
          </span>

          <div>
            <strong>
              Discover
            </strong>

            <p>
              Detailed project information
            </p>
          </div>

        </div>


        <div className="hero-info">

          <span className="hero-info-number">
            03
          </span>

          <div>
            <strong>
              Experience
            </strong>

            <p>
              Immersive 360° virtual tours
            </p>
          </div>

        </div>

      </div>


      {/* Scroll Indicator */}

      <Link
        to="/projects"
        className="hero-scroll"
      >
        <span>
          Explore Projects
        </span>

        <span className="scroll-line"></span>
      </Link>

    </section>
  );
}

export default Hero;