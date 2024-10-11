import React from "react";

const Introduction = () => {
  return (
    <div className="bg-bg_light_primary p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-Poppins font-bold text-dark_primary mb-2">
        Bonjour, je suis [Votre Nom]
      </h2>
      <h3 className="text-xl font-Inria text-dark_secodnary mb-4">
        Développeur Front-End et Designer UI/UX
      </h3>
      <p className="text-gray-700 mb-4">
        Passionnée par la création d'expériences digitales enrichissantes, je
        combine mes compétences en développement front-end avec un sens
        aigu de l'esthétique. Mon objectif est de rendre chaque interaction
        utilisateur unique et mémorable.
      </p>
      <h4 className="font-bold text-lg mb-2">Compétences :</h4>
      <ul className="list-disc list-inside text-gray-700">
        <li>React</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
        <li>Figma, Adobe XD</li>
      </ul>
    </div>
  );
};

export default Introduction;
