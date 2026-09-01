import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

function FeaturedProjects() {
  return (
    <section className="property-categories" id="projects">

      <div className="property-categories-container">

        {/* =================================
            SECTION HEADER
        ================================= */}

        <div className="property-categories-header">

          <div>

            <p className="property-categories-label">
              EXPLORE PROPERTIES
            </p>

            <h2>
              Find the right
              <span> property for you.</span>
            </h2>

            <p className="property-categories-intro">
              Explore new properties, resale homes and rental
              opportunities across Pune.
            </p>

          </div>


          <Link
            to="/projects"
            className="property-view-all"
          >
            View All Properties
            <span>→</span>
          </Link>

        </div>


        {/* =================================
            THREE PROPERTY CATEGORIES
        ================================= */}

        <div className="property-category-grid">


          {/* =================================
              NEW PROPERTY
          ================================= */}

          <Link
            to="/projects/new"
            className="property-category-card new-property"
          >

            <div className="property-category-overlay"></div>

            <div className="property-category-content">

              <p className="property-category-number">
                01
              </p>

              <p className="property-category-label">
                NEW PROPERTY
              </p>

              <h3>
                New
                <span> Properties.</span>
              </h3>

              <p className="property-category-description">
                Explore newly launched and upcoming
                properties across Pune.
              </p>

              <div className="property-category-button">
                Explore New Properties
                <span>→</span>
              </div>

            </div>

          </Link>


          {/* =================================
              RESALE PROPERTY
          ================================= */}

          <Link
            to="/projects/resale"
            className="property-category-card resale-property"
          >

            <div className="property-category-overlay"></div>

            <div className="property-category-content">

              <p className="property-category-number">
                02
              </p>

              <p className="property-category-label">
                RESALE PROPERTY
              </p>

              <h3>
                Resale
                <span> Properties.</span>
              </h3>

              <p className="property-category-description">
                Discover carefully selected resale
                properties available across Pune.
              </p>

              <div className="property-category-button">
                Explore Resale Properties
                <span>→</span>
              </div>

            </div>

          </Link>


          {/* =================================
              RENTAL PROPERTY
          ================================= */}

          <Link
            to="/projects/rental"
            className="property-category-card rental-property"
          >

            <div className="property-category-overlay"></div>

            <div className="property-category-content">

              <p className="property-category-number">
                03
              </p>

              <p className="property-category-label">
                RENTAL PROPERTY
              </p>

              <h3>
                Rental
                <span> Properties.</span>
              </h3>

              <p className="property-category-description">
                Find comfortable rental properties
                in convenient locations across Pune.
              </p>

              <div className="property-category-button">
                Explore Rental Properties
                <span>→</span>
              </div>

            </div>

          </Link>

        </div>


        {/* =================================
            BOTTOM CTA
        ================================= */}

        <div className="property-category-bottom">

          <p>
            Looking for a specific property?
          </p>

          <Link to="/contact#enquire">
            Talk to us
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;