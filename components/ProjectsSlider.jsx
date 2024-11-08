import React, { useState, useEffect } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset currentIndex to 0 whenever the projects array changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [projects]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  if (!projects || projects.length === 0) {
    return <p className="text-center text-white">Aucun projet disponible dans cette catégorie.</p>;
  }

  const currentProject = projects[currentIndex];

  // Fallback for missing currentProject values
  const imageUrl = currentProject?.image || 'fallback-image-url.jpg'; // Add a default image if none is provided
  const projectTitle = currentProject?.title || 'Titre du projet';
  const projectContext = currentProject?.contexte || 'Contexte non spécifié';
  const projectRealisation = currentProject?.realisation || 'Réalisation non spécifiée';

  return (
    <div className="flex flex-col md:flex-row items-start">
      {/* Project details */}
      <div className="project-text w-full md:w-6/6 mr-40  mb-4 max-h-96 overflow-auto">
        <h2 className="text-2xl text-white font-bold">{projectTitle}</h2>
        <p className="mt-2 text-white">
          <strong>Contexte:</strong> {projectContext}
        </p>
        <p className="mt-2 text-white">
          <strong>Réalisation:</strong> {projectRealisation}
        </p>

        <div className="stack flex flex-wrap mt-8">
          {currentProject?.icons && currentProject.icons.map((IconComponent, index) => (
            <div key={index} className="h-10 w-10 mr-4">
              {IconComponent}
            </div>
          ))}
        </div>

        {currentProject?.github && (
          <a
            href={String(currentProject.github)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white underline"
          >
            <AiFillGithub className="mr-2" /> Voir sur GitHub
          </a>
        )}

        {currentProject?.live && (
          <a
            href={currentProject.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-700 underline mt-2 block"
          >
            Projet en direct
          </a>
        )}
      </div>

      {/* Add some space between the text and the slider */}
      <div className="my-4"></div>

      {/* Project image with navigation */}
      <div className="relative w-full md:w-3/6 flex flex-col items-center mt-8">
        <button
          onClick={prevProject}
          className="group absolute left-2 top-0 bottom-0 bg-transparent text-black p-2 z-10 opacity-60 hover:opacity-100 flex items-center justify-center"
          aria-label="Projet précédent"
        >
          <IoIosArrowBack size={24} />
          <span className="absolute inset-0 bg-black bg-opacity-30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </button>

        <div className="project-card flex items-center justify-center w-full h-full">
          <img
            src={imageUrl}
            alt={projectTitle}
            className="rounded-lg w-full h-full object-contain"
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
          className="group absolute right-2 top-0 bottom-0 bg-transparent text-black p-2 z-10 opacity-60 hover:opacity-100 flex items-center justify-center"
          aria-label="Projet suivant"
        >
          <IoIosArrowForward size={24} />
          <span className="absolute inset-0 bg-black bg-opacity-30 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
