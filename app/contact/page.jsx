"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/SideBar';
import ProjectSlider from '@/components/ProjectsSlider';
import projects from './projects';

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    setProjectsList(projects[selectedCategory] || []);
  }, [selectedCategory]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="work-page flex">
      {/* Barre latérale pour la sélection de catégorie */}
      <Sidebar
        categories={['frontend', 'backend', 'uiux']}
        onSelectCategory={handleSelectCategory}
        className="w-1/4"
      />

      {/* Conteneur des projets */}
      <div className="projects-container flex-grow flex items-center justify-center">
        {projectsList.length > 0 ? (
          <ProjectSlider projects={projectsList} />
        ) : (
          <p>Aucun projet disponible pour cette catégorie.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
