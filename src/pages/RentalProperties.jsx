import { useState } from "react";

import projects from "../data/projects";
import ProjectAccessModal from "../components/ProjectAccessModal";

import "./RentalProperties.css";

function RentalProperties() {

  /* =================================
      RENTAL PROPERTIES
  ================================= */

  const rentalProperties = projects.filter(
    (project) => project.category === "rental"
  );


  /* =================================
      ACCESS MODAL STATE
  ================================= */

  const [selectedProject, setSelectedProject] =
    useState(null);


  /* =================================
      OPEN 360 ACCESS FORM
  ================================= */

  const handleViewProject = (project) => {

    if (!project?.tourUrl) {

      alert(
        "360° virtual tour is not available for this property."
      );

      return;
    }

    setSelectedProject(project);
  };


  /* =================================
      CLOSE ACCESS FORM
  ================================= */

  const handleCloseModal = () => {

    setSelectedProject(null);

  };


  /* =================================
      AFTER FORM SUBMIT
      OPEN 360 TOUR
  ================================= */

  const handleContinue = () => {

    if (!selectedProject?.tourUrl) {
      return;
    }

    window.location.href =
      selectedProject.tourUrl;

  };


  return (

    <main className="new-properties-page">


      {/* =================================
          HERO
      ================================= */}

      <section className="new-properties-hero">

        <div className="new-properties-hero-content">

          <p className="new-properties-label">
            RENTAL PROPERTY
          </p>

          <h1>
            Find Rental
            <span> Properties.</span>
          </h1>

          <p>
            Explore quality rental properties
            available across Pune.
          </p>

        </div>

      </section>


      {/* =================================
          PROPERTY LIST
      ================================= */}

      <section className="new-properties-list">

        <div className="new-properties-heading">

          <p className="new-properties-label">
            OUR RENTAL PROPERTIES
          </p>

          <h2>
            Find your
            <span> rental home.</span>
          </h2>

        </div>


        {/* =================================
            PROPERTY GRID
        ================================= */}

        <div className="new-properties-grid">

          {rentalProperties.map((project) => (

            <article
              className="new-property-card"
              key={project.id}
              onClick={() =>
                handleViewProject(project)
              }
              style={{ cursor: "pointer" }}
            >


              {/* =================================
                  IMAGE
              ================================= */}

              <div className="new-property-image">

                <img
                  src={project.image}
                  alt={project.name}
                />


                {/* =================================
                    RENTAL STATUS
                ================================= */}

                <div className="new-property-status">
                  {project.status}
                </div>

              </div>


              {/* =================================
                  CONTENT
              ================================= */}

              <div className="new-property-content">


                {/* =================================
                    PROPERTY INFORMATION
                ================================= */}

                <div className="new-property-info">

                  <p className="new-property-type">
                    {project.type}
                  </p>


                  <h3>
                    {project.name}
                  </h3>


                  <p className="new-property-location">
                    📍 {project.location}
                  </p>


                  <p className="new-property-description">
                    {project.shortDescription}
                  </p>


                  {/* =================================
                      RENT
                  ================================= */}

                  <p className="new-property-description">
                    <strong>
                      Rent:
                    </strong>{" "}
                    ₹26,000/month
                  </p>


                  {/* =================================
                      DEPOSIT
                  ================================= */}

                  <p className="new-property-description">
                    <strong>
                      Deposit:
                    </strong>{" "}
                    ₹60,000
                  </p>

                </div>


                {/* =================================
                    ROTATING GLOBE
                ================================= */}

                <div className="property-globe">

                  <div className="globe">

                    <div className="globe-line globe-line-horizontal"></div>

                    <div className="globe-line globe-line-vertical-one"></div>

                    <div className="globe-line globe-line-vertical-two"></div>

                  </div>


                  {/* ORBIT RINGS */}

                  <div className="globe-orbit globe-orbit-one"></div>

                  <div className="globe-orbit globe-orbit-two"></div>


                  {/* GLOW */}

                  <div className="globe-glow"></div>

                </div>

              </div>

            </article>

          ))}


          {/* =================================
              NO RENTAL PROPERTY
          ================================= */}

          {rentalProperties.length === 0 && (

            <div className="no-new-properties">

              <h3>
                Rental properties coming soon.
              </h3>

              <p>
                We are currently adding rental
                properties. Please check back soon.
              </p>

            </div>

          )}

        </div>

      </section>


      {/* =================================
          ACCESS FORM MODAL
      ================================= */}

      {selectedProject && (

        <ProjectAccessModal
          project={selectedProject}
          onClose={handleCloseModal}
          onContinue={handleContinue}
        />

      )}

    </main>

  );
}

export default RentalProperties;