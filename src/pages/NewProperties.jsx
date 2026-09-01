import { useState } from "react";

import projects from "../data/projects";
import ProjectAccessModal from "../components/ProjectAccessModal";

import "./NewProperties.css";


function NewProperties() {

  /* =================================
      ACCESS MODAL STATE
  ================================= */

  const [selectedProject, setSelectedProject] =
    useState(null);


  /* =================================
      NEW PROPERTIES
  ================================= */

  const newProperties = projects.filter(
    (project) => project.category === "new"
  );


  /* =================================
      VIEW PROJECT
  ================================= */

  const handleViewProject = (project) => {

    /* Check CloudPano link */

    if (!project?.tourUrl) {

      alert(
        "360° virtual tour is not available for this project."
      );

      return;
    }


    /* Open Access Form */

    setSelectedProject(project);

  };


  /* =================================
      CLOSE ACCESS FORM
  ================================= */

  const handleCloseModal = () => {

    setSelectedProject(null);

  };


  /* =================================
      AFTER OTP / FORM SUBMIT
      OPEN CLOUDPANO
  ================================= */

  const handleContinue = () => {

    if (!selectedProject?.tourUrl) {
      return;
    }


    /*
      Directly open CloudPano.
      Project Details page will NOT open.
    */

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
            NEW PROPERTY
          </p>


          <h1>
            Discover New
            <span> Properties.</span>
          </h1>


          <p>
            Explore newly launched and upcoming
            properties across Pune.
          </p>

        </div>

      </section>



      {/* =================================
          PROPERTY LIST
      ================================= */}

      <section className="new-properties-list">

        <div className="new-properties-heading">

          <p className="new-properties-label">
            OUR NEW PROPERTIES
          </p>


          <h2>
            Find your
            <span> new home.</span>
          </h2>

        </div>



        {/* =================================
            PROJECT GRID
        ================================= */}

        <div className="new-properties-grid">

          {newProperties.map((project) => (

            <article
              className="new-property-card"
              key={project.id}
            >


              {/* =================================
                  IMAGE
              ================================= */}

              <div className="new-property-image">

                <img
                  src={project.image}
                  alt={project.name}
                />


                <span className="new-property-status">
                  {project.status}
                </span>

              </div>



              {/* =================================
                  CONTENT
              ================================= */}

              <div className="new-property-content">

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
                    VIEW PROJECT
                ================================= */}

                <button
                  type="button"
                  onClick={() =>
                    handleViewProject(project)
                  }
                >

                  View Project

                  <span>
                    →
                  </span>

                </button>

              </div>

            </article>

          ))}



          {/* =================================
              NO PROJECT
          ================================= */}

          {newProperties.length === 0 && (

            <div className="no-new-properties">

              <h3>
                New properties coming soon.
              </h3>


              <p>
                We are currently adding new
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


export default NewProperties;