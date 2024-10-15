import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white">
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-700">{project.description}</p>
      {/* Ajouter d'autres détails comme une image ou des liens */}
      <a href={project.link} className="text-blue-500 underline mt-2 block">
        Voir le projet
      </a>
    </div>
  );
};

export default ProjectCard;
