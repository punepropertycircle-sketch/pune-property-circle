import { useState } from "react";
import { useParams } from "react-router-dom";

import projects from "../data/projects";
import ProjectAccessModal from "../components/ProjectAccessModal";

import "./ProjectDetails.css";

function ProjectDetails() {
  const { projectId } = useParams();

  const [showAccessModal, setShowAccessModal] =
    useState(false);

  const project = projects.find(
    (item) => item.id === projectId
  );

  /* ================================
      PROJECT NOT FOUND
  ================================= */

  if (!project) {
    return (
      <main className="project-details-page">
        <section className="project-not-found">
          <div>
            <p className="project-details-label">
              PUNE PROPERTY CIRCLE
            </p>

            <h1>Project Not Found</h1>

            <p>
              The property you are looking for
              is not available.
            </p>
          </div>
        </section>
      </main>
    );
  }

  /* ================================
      OPEN 360 TOUR
  ================================= */

  const handleViewProject = () => {
    if (!project.tourUrl) {
      alert(
        "360° virtual tour is not available for this project."
      );

      return;
    }

    setShowAccessModal(true);
  };

  /* ================================
      AFTER ACCESS FORM
  ================================= */

  const handleContinue = () => {
    setShowAccessModal(false);

    if (project.tourUrl) {
      window.location.href =
        project.tourUrl;
    }
  };

  return (
    <main className="project-details-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="project-details-hero">

        {/* IMAGE */}

        <div className="project-details-image">

          <img
            src={project.image}
            alt={project.name}
          />

          <span className="project-details-status">
            {project.status}
          </span>

        </div>


        {/* DETAILS */}

        <div className="project-details-info">

          <p className="project-details-label">
            {project.status}
          </p>

          <h1>
            {project.name}
          </h1>

          <p className="project-details-location">
            📍 {project.location}
          </p>

          <p className="project-details-type">
            {project.type}
          </p>

          <p className="project-details-description">
            {project.description}
          </p>


          {/* 360 BUTTON */}

          {project.has360 &&
            project.tourUrl && (
              <button
                type="button"
                className="project-view-button"
                onClick={handleViewProject}
              >
                <span>
                  View 360° Project
                </span>

                <strong>
                  →
                </strong>
              </button>
            )}

        </div>

      </section>


      {/* =====================================
          PRICE DETAILS
      ===================================== */}

      {project.pricing &&
        project.pricing.length > 0 && (

          <section className="project-pricing-section">

            <div className="project-section-heading">

              <p className="project-details-label">
                PRICE DETAILS
              </p>

              <h2>
                Choose your
                <span> home.</span>
              </h2>

            </div>


            <div className="project-pricing-table-wrapper">

              <table className="project-pricing-table">

                <thead>

                  <tr>

                    <th>
                      Type
                    </th>

                    <th>
                      Carpet Size
                    </th>

                    <th>
                      All-Inclusive Price
                      <br />
                      On Launch
                    </th>

                    <th>
                      EOI – Gold
                      <br />
                      (1L)
                    </th>

                    <th>
                      EOI – Platinum
                      <br />
                      (2L)
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {project.pricing.map(
                    (item, index) => (

                      <tr key={index}>

                        <td>
                          {item.type}
                        </td>

                        <td>
                          {item.carpetSize}
                        </td>

                        <td>
                          {item.launchPrice}
                        </td>

                        <td>
                          {item.goldPrice}
                        </td>

                        <td>
                          {item.platinumPrice}
                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>


            <p className="project-pricing-note">
              {project.pricingNote}
            </p>

          </section>

        )}


      {/* =====================================
          PROJECT HIGHLIGHTS
      ===================================== */}

      {project.features &&
        project.features.length > 0 && (

          <section className="project-features-section">

            <div className="project-section-heading">

              <p className="project-details-label">
                PROJECT HIGHLIGHTS
              </p>

              <h2>
                Everything you need to
                <span> know.</span>
              </h2>

            </div>


            <div className="project-features-grid">

              {project.features.map(
                (feature, index) => (

                  <div
                    className="project-feature-card"
                    key={index}
                  >

                    <span className="project-feature-number">

                      {String(index + 1).padStart(
                        2,
                        "0"
                      )}

                    </span>


                    <p>
                      {feature}
                    </p>

                  </div>

                )
              )}

            </div>

          </section>

        )}


      {/* =====================================
          ACCESS MODAL
      ===================================== */}

      {showAccessModal && (

        <ProjectAccessModal

          project={project}

          onClose={() =>
            setShowAccessModal(false)
          }

          onContinue={
            handleContinue
          }

        />

      )}

    </main>
  );
}

export default ProjectDetails;