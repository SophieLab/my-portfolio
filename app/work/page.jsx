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
    <div
      className="work-page flex min-h-screen bg-cover bg-center px-6 md:px-12 lg:px-16"
      style={{ backgroundImage: "url('/assets/background2.webp')" }}
    >
      <Sidebar
        config={[
          { label: 'Frontend', value: 'frontend' },
          { label: 'Backend', value: 'backend' },
          { label: 'UI/UX', value: 'uiux' }
        ]}
        onSelectCategory={handleSelectCategory}
      />

      <div className="flex-grow flex flex-col items-start p-6">
        <h2 className="text-5xl font-bold text-white opacity-40 mt-5 mb-12">
          Mes projets
        </h2>

        {projectsList.length > 0 ? (
          <div className="w-full max-w-full">
            <ProjectSlider projects={projectsList} />
          </div>
        ) : (
          <p className="text-center text-white">
            Aucun projet disponible pour cette catégorie.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
