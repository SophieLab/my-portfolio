// Importation des composants
import React, { useEffect } from "react";
import Profile from "./components/Profile";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
// import ProjectRoot from "./components/Projects/ProjectRoot"; // Décommenter si nécessaire
import Testimonials from "./components/Testimonials";
import Contactme from "./components/Contactme";
import Contact from "./components/Contact";
// Importation du package d'animation AOS
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  // Initialisation d'AOS lors du premier rendu
  useEffect(() => {
    Aos.init({
      duration: 1800, // Durée de l'animation
      offset: 100,    // Décalage avant le début de l'animation
      disable: "mobile", // Désactiver sur mobile si nécessaire
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Profile />     
      <Skills />
      <Service />
      {/* <ProjectRoot /> Décommenter si nécessaire */}
      <Testimonials />
      <Contactme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Sophie Labyt</h6>
        <p>SophieLab © All CopyRights Reserved 2024</p>
      </footer>
    </div>
  );
};

export default App;
