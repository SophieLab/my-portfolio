import React, { useState, useEffect } from 'react';
import { AiFillGithub } from "react-icons/ai";

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextProject, 5000);
    return () => clearInterval(interval);
  }, [projects.length]);

  // Check if there are projects and set current project accordingly
  const currentProject = projects.length > 0 ? projects[currentIndex] : null;

  if (!currentProject) {
    return <p className="text-center">No projects available in this category.</p>;
  }

  return (
    <div className="project-slider flex items-center">
      <div className="flex flex-col items-start w-1/2 pr-4 pl-20">
        <div className="project-text">
          <h2 className="text-xl font-bold">{currentProject.title}</h2>
          <p className="mt-2 text-gray-700">{currentProject.description}</p>
          <p className="mt-2 text-gray-600 italic"><strong>Contexte:</strong> {currentProject.contexte}</p>
          <p className="mt-2 text-gray-600 italic"><strong>Réalisation:</strong> {currentProject.realisation}</p>

          <div className="stack mt-2 flex">
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
              className="flex items-center text-blue-500 underline mt-4"
            >
              <AiFillGithub className="mr-2" /> Voir sur GitHub
            </a>
          )}

          {currentProject.live && (
            <a
              href={currentProject.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 block"
            >
              Live Project
            </a>
          )}
        </div>
      </div>

      <div className="flex items-center justify-center w-1/2">
        <button
          onClick={prevProject}
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition duration-200 mr-2"
          aria-label="Previous project"
        >
          ◀️
        </button>

        <div className="project-card w-96 h-96 flex items-center justify-center overflow-hidden">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
        </div>

        <button
          onClick={nextProject}
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition duration-200 ml-2"
          aria-label="Next project"
        >
          ▶️
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
