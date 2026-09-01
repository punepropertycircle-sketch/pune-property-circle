import { useState } from "react";

import projects from "../data/projects";
import ProjectAccessModal from "../components/ProjectAccessModal";

import "./ResellProperties.css";


function ResellProperties() {

  const [selectedProject, setSelectedProject] =
    useState(null);


  /* =================================
      RESALE PROPERTIES
  ================================= */

  const resaleProperties = projects.filter(
    (project) => project.category === "resale"
  );


  /* =================================
      VIEW PROJECT
  ================================= */

  const handleViewProject = (project) => {

    if (!project.tourUrl) {

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
      CONTINUE TO CLOUDPANO
  ================================= */

  const handleContinue = () => {

    if (!selectedProject?.tourUrl) {
      return;
    }

    /*
      Directly open CloudPano
      in the complete browser page.
    */

    window.location.href =
      selectedProject.tourUrl;

  };


  return (

    <main className="resell-properties-page">


      {/* =================================
          HERO
      ================================= */}

      <section className="resell-properties-hero">

        <div className="resell-properties-hero-content">

          <p className="resell-properties-label">
            RESALE PROPERTY
          </p>


          <h1>
            Discover Resale
            <span> Properties.</span>
          </h1>


          <p>
            Explore verified resale properties
            available across Pune.
          </p>

        </div>

      </section>



      {/* =================================
          PROPERTY LIST
      ================================= */}

      <section className="resell-properties-list">

        <div className="resell-properties-heading">

          <p className="resell-properties-label">
            OUR RESALE PROPERTIES
          </p>


          <h2>
            Find your
            <span> next property.</span>
          </h2>

        </div>



        {/* =================================
            PROPERTY GRID
        ================================= */}

        <div className="resell-properties-grid">

          {resaleProperties.map((project) => (

            <article
              className="resell-property-card"
              key={project.id}
            >


              {/* =================================
                  IMAGE
              ================================= */}

              <div className="resell-property-image">

                <img
                  src={project.image}
                  alt={project.name}
                />


                <span className="resell-property-status">
                  {project.status}
                </span>

              </div>



              {/* =================================
                  CONTENT
              ================================= */}

              <div className="resell-property-content">

                <p className="resell-property-type">
                  {project.type}
                </p>


                <h3>
                  {project.name}
                </h3>


                <p className="resell-property-location">
                  📍 {project.location}
                </p>


                <p className="resell-property-description">
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
              NO PROPERTY
          ================================= */}

          {resaleProperties.length === 0 && (

            <div className="no-resell-properties">

              <h3>
                Resale properties coming soon.
              </h3>


              <p>
                We are currently adding verified
                resale properties. Please check
                back soon.
              </p>

            </div>

          )}

        </div>

      </section>



      {/* =================================
          ACCESS FORM
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


export default ResellProperties;