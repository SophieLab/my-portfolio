import React, { useState } from 'react';

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Get the current project
  const currentProject = projects[currentIndex];

  if (projects.length === 0) {
    return <p className="text-center">No projects available in this category.</p>;
  }

  return (
    <div className="project-slider flex items-center">
      {/* Project text on the left */}
      <div className="flex flex-col items-start w-1/2 pr-4 pl-20"> {/* Added pl-4 for left padding */}
        <div className="project-text">
          <h2 className="text-xl font-bold">{currentProject.title}</h2>
          <p className="mt-2 text-gray-700">{currentProject.description}</p>
          
          {/* Displaying context and realization */}
          <p className="mt-2 text-gray-600 italic"><strong>Contexte:</strong> {currentProject.contexte}</p>
          <p className="mt-2 text-gray-600 italic"><strong>Réalisation:</strong> {currentProject.realisation}</p>

          {/* Displaying technology icons */}
          <div className="stack mt-2 flex">
            {currentProject.icons && currentProject.icons.length > 0 ? (
              currentProject.icons.map((IconComponent, index) => (
                <div key={index} className="h-8 w-8 mr-2">
                  {IconComponent} {/* Render the icon directly */}
                </div>
              ))
            ) : (
              <p>No icons available.</p>
            )}
          </div>

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
          {currentProject.github && (
            <a
              href={currentProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline mt-2 block"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Project Image and Navigation Buttons */}
      <div className="flex items-center justify-center w-1/2">
        {/* Previous button */}
        <button
          onClick={prevProject}
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition duration-200 mr-2"
        >
          ◀️
        </button>

        {/* Project image */}
        <div className="project-card border p-4 rounded-lg shadow-lg flex items-center justify-center">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="rounded-lg max-w-full h-auto"
          />
        </div>

        {/* Next button */}
        <button
          onClick={nextProject}
          className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition duration-200 ml-2"
        >
          ▶️
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
