import React, { useState } from 'react';
import { AiFillGithub } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ProjectSlider = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer au projet suivant
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Fonction pour revenir au projet précédent
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // Vérifie si des projets sont disponibles
  if (!projects || projects.length === 0) {
    return <p className="text-center text-white">Aucun projet disponible dans cette catégorie.</p>;
  }

  const currentProject = projects[currentIndex];

  // Vérifie si le projet actuel est défini
  if (!currentProject) {
    return <p className="text-center text-white">Projet introuvable.</p>;
  }

  return (
    <div className="flex items-start">
      {/* Détails du projet */}
      <div className="project-text w-4/5 pr-2 mb-4">
        <h2 className="text-3xl text-white font-bold">{currentProject.title || 'Titre du projet'}</h2>
        <p className="mt-2 text-white">
          <strong>Contexte:</strong> {currentProject.contexte || 'Contexte non spécifié'}
        </p>
        <p className="mt-2 text-white">
          <strong>Réalisation:</strong> {currentProject.realisation || 'Réalisation non spécifiée'}
        </p>
        
        {/* Affichage des icônes */}
        <div className="stack flex">
          {currentProject.icons && currentProject.icons.map((IconComponent, index) => (
            <div key={index} className="h-8 w-8 mr-2">
              {IconComponent}
            </div>
          ))}
        </div>

        {/* Lien GitHub si disponible */}
        {currentProject.github && (
          <a
            href={String(currentProject.github)} // Conversion en chaîne de caractères pour s'assurer que c'est un lien valide
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white underline mt-4"
          >
            <AiFillGithub className="mr-2" /> Voir sur GitHub
          </a>
        )}

        {/* Lien vers le projet en direct si disponible */}
        {currentProject.live && (
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

      {/* Image du projet avec navigation */}
      <div className="relative w-3/5 flex flex-col items-center justify-center bg-white p-2 rounded-lg h-[400px]">
        {/* Bouton pour le projet précédent */}
        <button
          onClick={prevProject}
          className="absolute left-2 top-0 bottom-0 bg-transparent text-black p-2 hover:bg-white hover:bg-opacity-50 transition duration-200 z-10 opacity-60 hover:opacity-100 flex items-center justify-center"
          aria-label="Projet précédent"
        >
          <IoIosArrowBack size={24} />
        </button>

        {/* Image du projet */}
        <div className="project-card flex items-center justify-center w-full h-full">
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="rounded-lg w-full h-full object-cover"
          />
          
          {/* Indicateurs de navigation entre les projets */}
          <div className="absolute bottom-2 flex justify-center w-full">
            {projects.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full mx-1 ${index === currentIndex ? 'bg-blue-400' : 'bg-gray-500'}`}
              />
            ))}
          </div>
        </div>

        {/* Bouton pour le projet suivant */}
        <button
          onClick={nextProject}
          className="absolute right-2 top-0 bottom-0 bg-transparent text-black p-2 hover:bg-white hover:bg-opacity-50 transition duration-200 z-10 opacity-60 hover:opacity-100 flex items-center justify-center"
          aria-label="Projet suivant"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
