import React, { useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  if (projects.length === 0) {
    return <p className="text-center text-white">No projects available in this category.</p>;
  }

  const currentProject = projects[currentIndex];

  return (
    <div className="flex items-start">
      <div className="project-text w-4/5 pr-2 mb-4"> {/* Ajout d'une margin-bottom ici */}
        <h2 className="text-3xl text-white font-bold">{currentProject.title || 'Titre du projet'}</h2>

        <p className="mt-2 text-white">
          <strong>Contexte:</strong> {currentProject.contexte || 'Contexte non spécifié'}
        </p>
        <p className="mt-2 text-white">
          <strong>Réalisation:</strong> {currentProject.realisation || 'Réalisation non spécifiée'}
        </p>

        <div className="stack flex">
          {currentProject.icons.map((IconComponent, index) => (
            <div key={index} className="h-8 w-8 mr-2">
              {IconComponent}
            </div>
          ))}
        </div>

        {currentProject.github && (
          <a
            href={currentProject.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 underline mt-4"
          >
            <AiFillGithub className="mr-2" /> Voir sur GitHub
          </a>
        )}

        {currentProject.live && (
          <a
            href={currentProject.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline mt-2 block"
          >
            Live Project
          </a>
        )}
      </div>

      <div className="relative w-3/5 flex flex-col items-center justify-center bg-black p-2 rounded-lg h-[400px]"> 
        <button
          onClick={prevProject}
          className="absolute left-2 bg-transparent text-white p-1 hover:text-blue-400 transition duration-200 z-10 opacity-60 hover:opacity-100"
          aria-label="Previous Project"
        >
          <FaArrowLeft size={20} />
        </button>

        <div className="project-card flex items-center justify-center w-full h-full">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="rounded-lg w-full h-full object-cover"
          />

          <div className="absolute bottom-2 flex justify-center w-full">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-400' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={nextProject}
          className="absolute right-2 bg-transparent text-white p-1 hover:text-blue-400 transition duration-200 z-10 opacity-60 hover:opacity-100"
          aria-label="Next Project"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
