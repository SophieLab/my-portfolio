"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/SideBar';
import ProjectSlider from '@/components/ProjectsSlider';
import projects from './projects';

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    // Met à jour la liste des projets en fonction de la catégorie sélectionnée
    setProjectsList(projects[selectedCategory] || []);
  }, [selectedCategory]);4

  const handleSelectCategory = (category) => {
    // Change la catégorie sélectionnée
    setSelectedCategory(category);
  };

  return (
    <div className="work-page flex min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/background2.webp')" }}>
      {/* Sidebar avec position fixe */}
      <div className="fixed top-0 left-0 w-1/4 h-full z-10 p-4">
        <Sidebar
          config={[
            { label: 'Frontend', value: 'frontend' },
            { label: 'Backend', value: 'backend' },
            { label: 'UI/UX', value: 'uiux' }
          ]}
          onSelectCategory={handleSelectCategory}
        />
      </div>

      {/* Conteneur des projets, avec un léger espacement */}
      <div className="flex-grow flex items-center justify-center p-12"> {/* Ajout de p-4 pour l'espacement */}
        {projectsList.length > 0 ? (
          <div className="w-full max-w-full"> {/* Utilise toute la largeur sans padding supplémentaire */}
            <ProjectSlider projects={projectsList} />
          </div>
        ) : (
          <p className="text-center text-white">Aucun projet disponible pour cette catégorie.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
