"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/SideBar';
import ProjectSlider from '@/components/ProjectsSlider';
import projects from './projects'; // Assurez-vous que le chemin est correct

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    // Chargement des projets de la catégorie sélectionnée
    setProjectsList(projects[selectedCategory] || []);
  }, [selectedCategory]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="work-page">
      <Sidebar 
        categories={['frontend', 'backend', 'uiux']} 
        onSelectCategory={handleSelectCategory} 
      />
      <div className="projects-container">
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
