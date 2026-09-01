import { useNavigate } from "react-router-dom";

import "./Projects.css";


function Projects() {

  const navigate = useNavigate();


  /* =================================
      CATEGORY NAVIGATION
  ================================= */

  const handleCategoryClick = (category) => {

    navigate(`/projects/${category}`);

  };


  return (

    <main className="projects-page">


      {/* =================================
          HERO
      ================================= */}

      <section className="projects-page-hero">

        <div className="projects-page-hero-content">

          <p className="projects-page-label">
            PUNE PROPERTY CIRCLE
          </p>

          <h1>
            Explore Our
            <span> Properties.</span>
          </h1>

          <p>
            Discover properties across Pune
            for every requirement.
          </p>

        </div>

      </section>



      {/* =================================
          PROPERTY CATEGORIES
      ================================= */}

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


          {/* =================================
              NEW PROPERTY
          ================================= */}

          <article
            className="property-category-card"
            onClick={() => handleCategoryClick("new")}
          >

            <div className="property-category-number">
              01
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


              <button
                type="button"
                onClick={(e) => {

                  e.stopPropagation();

                  handleCategoryClick("new");

                }}
              >

                Explore Properties

                <span>
                  →
                </span>

              </button>

            </div>

          </article>



          {/* =================================
              RESELL PROPERTY
          ================================= */}

          <article
            className="property-category-card"
            onClick={() => handleCategoryClick("resale")}
          >

            <div className="property-category-number">
              02
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


              <button
                type="button"
                onClick={(e) => {

                  e.stopPropagation();

                  handleCategoryClick("resale");

                }}
              >

                Explore Properties

                <span>
                  →
                </span>

              </button>

            </div>

          </article>



          {/* =================================
              RENTAL PROPERTY
          ================================= */}

          <article
            className="property-category-card"
            onClick={() => handleCategoryClick("rental")}
          >

            <div className="property-category-number">
              03
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


              <button
                type="button"
                onClick={(e) => {

                  e.stopPropagation();

                  handleCategoryClick("rental");

                }}
              >

                Explore Properties

                <span>
                  →
                </span>

              </button>

            </div>

          </article>


        </div>

      </section>


    </main>

  );

}


export default Projects;