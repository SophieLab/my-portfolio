"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar'; // Corrected Sidebar import
import ProjectSlider from '@/components/ProjectsSlider';
import projects from './projects';

const WorkPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    setProjectsList(projects[selectedCategory] || []);
  }, [selectedCategory]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="work-page flex flex-col md:flex-row">
      <Sidebar
        categories={['frontend', 'backend', 'uiux']}
        onSelectCategory={handleSelectCategory}
        className="w-full md:w-1/4 mb-4 md:mb-0"
      />
      <div className="projects-container flex-grow flex flex-col items-center md:justify-center">
        {projectsList.length > 0 ? (
          <ProjectSlider projects={projectsList} />
        ) : (
          <p className="text-center">Aucun projet disponible pour cette catégorie.</p>
        )}
      </div>
    </div>
  );
};

// Change export statement to match the component name
export default WorkPage;
