"use client";

import { FaReact, FaDocker } from "react-icons/fa"; // Icônes de React et Docker
import { SiNextdotjs, SiFigma, SiTailwindcss } from "react-icons/si"; // Icônes de Next.js, Figma et Tailwind CSS

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center -z-10">
      {/* Icône de React */}
      <div className="floating-icon top-[20%] left-[15%]">
        <FaReact className="text-blue-500 text-3xl" />
      </div>
      {/* Icône de Next.js */}
      <div className="floating-icon top-[20%] right-[15%]">
        <SiNextdotjs className="text-white text-3xl" /> {/* Couleur pour Next.js */}
      </div>
      {/* Icône de Figma */}
      <div className="floating-icon bottom-[20%] left-[20%]">
        <SiFigma className="text-pink-500 text-3xl" /> {/* Couleur pour Figma */}
      </div>
      {/* Icône de Docker */}
      <div className="floating-icon bottom-[20%] right-[20%]">
        <FaDocker className="text-blue-400 text-3xl" /> {/* Couleur pour Docker */}
      </div>
      {/* Icône de Tailwind CSS */}
      <div className="floating-icon top-[50%] left-[80%] transform -translate-x-1/2 -translate-y-1/2">
        <SiTailwindcss className="text-sky-500 text-3xl" /> {/* Couleur pour Tailwind */}
      </div>
    </div>
  );
};

export default FloatingIcons;