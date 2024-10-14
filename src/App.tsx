// import components
import React from "react";
import Profile from "./components/Profile";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
// import ProjectRoot from "./components/Projects/ProjectRoot";
import Testimonials from "./components/Testimonials";
import Contactme from "./components/Contactme";
import Contact from "./components/Contact";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
<Profile />     
 <Skills />
      <Service />
      {/* <ProjectRoot /> */}
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
