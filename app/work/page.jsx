"use client";

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/SideBar';
import ProjectSlider from '@/components/ProjectsSlider';
import projects from './projects';

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');
  const [projectsList, setProjectsList] = useState([]);

  useEffect(() => {
    // Load projects from the selected category
    setProjectsList(projects[selectedCategory] || []);
  }, [selectedCategory]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="work-page flex">
      {/* Sidebar for category selection */}
      <Sidebar 
        categories={['frontend', 'backend', 'uiux']} 
        onSelectCategory={handleSelectCategory} 
        className="w-1/4" // Adjust width as needed
      />

      {/* Projects container */}
      <div className="projects-container flex-grow flex items-center justify-center">
        {projectsList.length > 0 ? (
          <ProjectSlider projects={projectsList} />
        ) : (
          <p>No projects available for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Page;
