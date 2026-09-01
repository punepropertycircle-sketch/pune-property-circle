import { BrowserRouter, Routes, Route } from "react-router-dom";

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


import "./App.css";


function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
    </>
  );
}


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/projects/:projectId"
          element={<ProjectDetails />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/projects/new"
          element={<NewProperties />}
        />
        <Route
  path="/projects/resale"
  element={<ResellProperties />}
/>

      </Routes>

      <Footer />
      <FloatingWhatsApp />

    </BrowserRouter>
  );
}


export default App;