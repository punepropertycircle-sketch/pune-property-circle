import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
  useParams,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import FeaturedProjects from "./sections/FeaturedProjects";

import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import NewProperties from "./pages/NewProperties";
import ResellProperties from "./pages/ResellProperties";

import ProjectAccessModal from "./components/ProjectAccessModal";
import projects from "./data/projects";

import "./App.css";


/* =================================
   HOME
================================= */

function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
}


/* =================================
   SCROLL TO TOP
   Every new page starts from top
================================= */

function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

  }, [pathname]);

  return null;
}


/* =================================
   QR 360 PROJECT ACCESS
   Works for all projects
================================= */

function QRProjectAccess() {

  const navigate = useNavigate();
  const { projectId } = useParams();

  const [selectedProject, setSelectedProject] =
    useState(null);


  useEffect(() => {

    const project =
      projects.find(
        (item) => item.id === projectId
      );

    if (project) {
      setSelectedProject(project);
    }

  }, [projectId]);


  /* =================================
     CLOSE FORM
  ================================= */

  const handleCloseModal = () => {

    navigate("/");

  };


  /* =================================
     AFTER FORM SUBMIT
  ================================= */

  const handleContinue = () => {

    if (!selectedProject?.tourUrl) {
      return;
    }

    window.location.href =
      selectedProject.tourUrl;

  };


  if (!selectedProject) {
    return null;
  }


  return (

    <ProjectAccessModal
      project={selectedProject}
      onClose={handleCloseModal}
      onContinue={handleContinue}
    />

  );
}


/* =================================
   APP
================================= */

function App() {

  return (

    <BrowserRouter>

      {/* =================================
          RESET SCROLL ON PAGE CHANGE
      ================================= */}

      <ScrollToTop />


      {/* =================================
          NAVBAR
      ================================= */}

      <Navbar />


      {/* =================================
          ROUTES
      ================================= */}

      <Routes>


        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />


        {/* ALL PROJECTS */}

        <Route
          path="/projects"
          element={<Projects />}
        />


        {/* PROJECT DETAILS */}

        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />


        {/* CONTACT */}

        <Route
          path="/contact"
          element={<Contact />}
        />


        {/* NEW PROPERTIES */}

        <Route
          path="/projects/new"
          element={<NewProperties />}
        />


        {/* RESALE PROPERTIES */}

        <Route
          path="/projects/resale"
          element={<ResellProperties />}
        />


        {/* =================================
            360 PROJECT ACCESS
            PROJECT 1 + PROJECT 2 + FUTURE
            PROJECTS
        ================================= */}

        <Route
          path="/360/:projectId"
          element={<QRProjectAccess />}
        />


      </Routes>


      {/* =================================
          FOOTER
      ================================= */}

      <Footer />


      {/* =================================
          FLOATING WHATSAPP
      ================================= */}

      <FloatingWhatsApp />

    </BrowserRouter>
  );
}


export default App;