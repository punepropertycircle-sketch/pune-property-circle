import { useNavigate } from "react-router-dom";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/projects/${category}`);
  };

  return (
    <main className="projects-page">

      


      {/* PROPERTY CATEGORIES */}
      <section className="property-categories">

        <div className="property-categories-heading">

          <p className="projects-page-label">
            EXPLORE PROPERTIES
          </p>

          <h2>
            Find the right
            <span> property for you.</span>
          </h2>

        </div>


        <div className="property-categories-grid">

          {/* NEW PROPERTY */}
          <article
            className="property-category-card"
            onClick={() => handleCategoryClick("new")}
          >
            <div className="property-category-top">

              <span className="property-category-360">
                360° EXPERIENCE
              </span>

              <div className="property-category-number">
                01
              </div>

            </div>

            <div className="property-category-content">

              <h3>
                New
                <span> Properties.</span>
              </h3>

              <p>
                Explore newly launched and upcoming
                residential properties across Pune.
              </p>



            </div>
          </article>


          {/* RESELL PROPERTY */}
          <article
            className="property-category-card"
            onClick={() => handleCategoryClick("resale")}
          >
            <div className="property-category-top">

              <span className="property-category-360">
                360° EXPERIENCE
              </span>

              <div className="property-category-number">
                02
              </div>

            </div>

            <div className="property-category-content">

              <h3>
                Resell
                <span> Properties.</span>
              </h3>

              <p>
                Discover verified resale properties
                available across Pune.
              </p>



            </div>
          </article>


          {/* RENTAL PROPERTY */}
          <article
            className="property-category-card"
            onClick={() => handleCategoryClick("rental")}
          >
            <div className="property-category-top">

              <span className="property-category-360">
                360° EXPERIENCE
              </span>

              <div className="property-category-number">
                03
              </div>

            </div>

            <div className="property-category-content">

              <h3>
                Rental
                <span> Properties.</span>
              </h3>

              <p>
                Find comfortable rental properties
                available across Pune.
              </p>



            </div>
          </article>


          {/* PLOTS PROPERTY */}
          <article
            className="property-category-card"
            onClick={() => handleCategoryClick("plots")}
          >
            <div className="property-category-top">

              <span className="property-category-360">
                360° EXPERIENCE
              </span>

              <div className="property-category-number">
                04
              </div>

            </div>

            <div className="property-category-content">

              <h3>
                Plots
                <span> Properties.</span>
              </h3>

              <p>
                Explore residential plots and land
                opportunities available across Pune.
              </p>



            </div>
          </article>

        </div>

      </section>

    </main>
  );
}

export default Projects;