import React from 'react';

const ProjectNavbar = ({ setActiveType }) => {
  // Types de projets à afficher
  const projectTypes = ['applications', 'web', 'print'];

  return (
    <nav className="mb-5 flex justify-center">
      {projectTypes.map((type, index) => (
        <button
          key={index}
          onClick={() => setActiveType(type)} // Change le type actif lorsqu'on clique
          className="mx-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          {type.charAt(0).toUpperCase() + type.slice(1)} {/* Capitalise le premier caractère */}
        </button>
      ))}
    </nav>
  );
};

export default ProjectNavbar;
