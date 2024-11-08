"use client";

import React, { useState, Suspense } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Sidebar from "@/components/SideBar";
import resumeData from "./resumeData";

// Importation dynamique des sections
const ExperiencesSection = dynamic(() => import("./ExperiencesSection"), { suspense: true });
const FormationsSection = dynamic(() => import("./FormationsSection"), { suspense: true });
const SkillsSection = dynamic(() => import("./SkillsSection"), { suspense: true });
const CertificationsSection = dynamic(() => import("./CertificationsSection"), { suspense: true });

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState("skills");

  const handleCategoryChange = (category) => {
    setSelectedSection(category);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background3.webp')" }}
      aria-labelledby="resume-title"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex items-center justify-center"
      >
        <div className="container mx-auto flex">
          <Sidebar 
            config={resumeData.sidebar} 
            onSelectCategory={handleCategoryChange} 
            aria-label="Sections du CV"
          />
          <div className="min-h-[70vh] w-full sm:px-8 lg:px-16">
            <div className="min-h-[70vh] w-full">
              <Suspense fallback={<div className="text-center">Chargement des sections...</div>}>
                {selectedSection === "experiences" && <ExperiencesSection />}
                {selectedSection === "formations" && <FormationsSection />}
                {selectedSection === "skills" && <SkillsSection />}
                {selectedSection === "certifications" && <CertificationsSection />}
              </Suspense>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
