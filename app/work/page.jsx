"use client"; // Indique que ce composant utilise des fonctionnalités spécifiques à Next.js

import { motion } from "framer-motion";
import React, { useState } from "react"; // Importation des hooks React
import { Swiper, SwiperSlide } from "swiper/react"; // Importation de Swiper pour le carrousel
import "swiper/css"; // Importation des styles de Swiper
import Image from "next/image"; // Importation du composant Image de Next.js
import WorkSliderBtns from "@/components/WorkSliderBtns"; // Boutons du slider
import Sidebar from "@/components/Sidebar"; // Composant Sidebar

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "backend",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [{ name: "Node.js" }, { name: "Express" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "uiux",
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    stack: [{ name: "Figma" }, { name: "Adobe XD" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("frontend"); // État pour la catégorie sélectionnée

  const filteredProjects = projects.filter(
      (project) => project.category === selectedCategory // Filtrage des projets par catégorie
  );

  return (
      <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }} // Animation d'entrée
          className="min-h-[80vh] flex flex-col py-12 xl:px-0 overflow-hidden"
      >
        <div className="container mx-auto flex flex-col xl:flex-row xl:gap-[30px] relative z-0">
          {/* Section Projet */}
          <div className="w-full xl:w-[70%] flex flex-col xl:justify-between z-0">
            <h2 className="text-[42px] font-bold leading-none text-dark capitalize">
              {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Projects
            </h2>
            {/* Swiper pour les projets filtrés */}
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12">
              {filteredProjects.map((project, index) => (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt={project.title} />
                      </div>
                    </div>
                  </SwiperSlide>
              ))}
              <WorkSliderBtns
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent hover:bg-accent-hover text-dark text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>

          {/* Sidebar */}
          <div className="w-full xl:w-[30%] z-50">
            <Sidebar onSelectCategory={setSelectedCategory} /> {/* Passer la fonction de sélection de catégorie */}
          </div>
        </div>
      </motion.section>
  );
};

export default Work;
