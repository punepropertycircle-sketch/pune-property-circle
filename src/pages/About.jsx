import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* =================================
          HERO
      ================================= */}

      <section className="about-page-hero">

        <div className="about-page-hero-content">

          <p className="about-page-label">
            ABOUT PUNE PROPERTY CIRCLE
          </p>

          <h1>
            Making Property
            <span> Discovery Simple.</span>
          </h1>

          <p className="about-page-subtitle">
            A simple and convenient way to discover and explore
            properties across Pune.
          </p>

        </div>

      </section>


      {/* =================================
          WHO WE ARE
      ================================= */}

      <section className="about-story">

        <div className="about-story-container">

          {/* LEFT */}

          <div className="about-story-side">

            <p className="about-page-label">
              WHO WE ARE
            </p>

            <div className="about-story-line"></div>

            <span>
              PUNE
            </span>

            <span>
              PROPERTY CIRCLE
            </span>

          </div>


          {/* RIGHT */}

          <div className="about-story-content">

            <h2>
              A simpler way to
              <span> explore property.</span>
            </h2>

            <p className="about-story-main-text">
              Pune Property Circle brings property information
              together in one convenient platform, helping people
              discover properties and understand them more easily.
            </p>

            <p>
              Our focus is to make the property discovery journey
              clear, accessible and user-friendly.
            </p>


            {/* INFO ROW */}

            <div className="about-story-highlights">

              <div className="about-highlight">

                <span className="about-highlight-number">
                  01
                </span>

                <div>
                  <h3>
                    Discover
                  </h3>

                  <p>
                    Explore properties in one place.
                  </p>
                </div>

              </div>


              <div className="about-highlight">

                <span className="about-highlight-number">
                  02
                </span>

                <div>
                  <h3>
                    Understand
                  </h3>

                  <p>
                    Get clear and useful information.
                  </p>
                </div>

              </div>


              <div className="about-highlight">

                <span className="about-highlight-number">
                  03
                </span>

                <div>
                  <h3>
                    Experience
                  </h3>

                  <p>
                    Explore properties with ease.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          OUR APPROACH
      ================================= */}

      <section className="about-values">

        <div className="about-values-container">

          <div className="about-values-heading">

            <p className="about-page-label">
              OUR APPROACH
            </p>

            <h2>
              Built around
              <span> your experience.</span>
            </h2>

          </div>


          <div className="about-values-grid">

            <article className="about-value-card">

              <div className="about-value-number">
                01
              </div>

              <div className="about-value-line"></div>

              <h3>
                Simple Discovery
              </h3>

              <p>
                Find relevant property information through
                a straightforward experience.
              </p>

            </article>


            <article className="about-value-card">

              <div className="about-value-number">
                02
              </div>

              <div className="about-value-line"></div>

              <h3>
                Clear Information
              </h3>

              <p>
                Important property details are presented clearly
                so visitors can understand their options.
              </p>

            </article>


            <article className="about-value-card">

              <div className="about-value-number">
                03
              </div>

              <div className="about-value-line"></div>

              <h3>
                Better Experience
              </h3>

              <p>
                Explore properties through a simple and convenient
                digital experience.
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =================================
          CTA
      ================================= */}

      <section className="about-cta">

        <div className="about-cta-content">

          <p className="about-cta-label">
            READY TO EXPLORE?
          </p>

          <h2>
            Discover your
            <span> next property.</span>
          </h2>

          <p className="about-cta-description">
            Explore carefully selected properties across Pune
            and find the one that feels right for you.
          </p>

          <Link
            to="/projects"
            className="about-cta-button"
          >
            Explore Projects
            <span>→</span>
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;