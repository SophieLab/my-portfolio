"use client"; // Mark this file as a client component

import React, { useState } from "react";
import resumeData from "./resumeData";
import { ScrollArea } from "@radix-ui/react-scroll-area"; // ScrollArea component
import { motion } from "framer-motion"; // Animations
import Sidebar from "@/components/SideBar";
import Card from "@/components/card";

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState("experiences");

  const handleCategoryChange = (category) => setSelectedSection(category);

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/background3.webp')" }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 px-4 sm:px-8 lg:px-16"
      >
        <div className="container mx-auto flex px-4 sm:px-8 lg:px-16">
          <Sidebar config={resumeData.sidebar} onSelectCategory={handleCategoryChange} />
          <div className="min-h-[70vh] w-full ml-4 px-4 sm:px-8 lg:px-16">
            <div className="min-h-[70vh] w-full">
              {selectedSection === "experiences" && (
                <ContentSection
                  title={resumeData.cv.experiences.title}
                  description={resumeData.cv.experiences.description}
                >
                  <ScrollArea className="h-[400px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] timeline">
                      {resumeData.cv.experiences.items.map((item, index) => (
                        <Card key={index} title={item.position} subtitle={item.company}>
                          <p className="text-sm text-gray-600">{item.duration}</p>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </ContentSection>
              )}

              {selectedSection === "formations" && (
                <ContentSection
                  title={resumeData.cv.formations.title}
                  description={resumeData.cv.formations.description}
                >
                  <ScrollArea className="h-[400px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {resumeData.cv.formations.items.map((item, index) => (
                        <Card key={index} title={item.degree} subtitle={item.institution}>
                          <p className="text-sm text-gray-600">{item.duration}</p>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </ContentSection>
              )}

              {selectedSection === "skills" && (
                <ContentSection
                  title={resumeData.cv.skills.title} // Assurez-vous que ce champ existe
                  description={resumeData.cv.skills.description} // Assurez-vous que ce champ existe
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resumeData.cv.skills.skillCategories.map((category, categoryIndex) => (
                      <Card key={categoryIndex}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {category.items.map((skill, index) => (
                            <SkillItem key={index} skill={skill} />
                          ))}
                        </div>
                      </Card>
                    ))}
                  </div>
                </ContentSection>
              )}

              {selectedSection === "certifications" && (
                <ContentSection
                  title={resumeData.cv.certifications.title}
                  description={resumeData.cv.certifications.description}
                >
                  <ScrollArea className="h-[400px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                      {resumeData.cv.certifications.items.map((certification, index) => (
                        <Card key={index} title={certification.name} subtitle={certification.institution}>
                          <p className="text-sm text-gray-600">{certification.year}</p>
                        </Card>
                      ))}
                    </div>
                  </ScrollArea>
                </ContentSection>
              )}

              {selectedSection === "about" && (
                <ContentSection
                  title={resumeData.cv.about.title}
                  description={resumeData.cv.about.description}
                >
                  <ul className="mt-4 space-y-2">
                    {resumeData.cv.about.info.map((info, index) => (
                      <li key={index} className="text-white/60">
                        <strong>{info.fieldName}:</strong> {info.fieldValue}
                      </li>
                    ))}
                  </ul>
                </ContentSection>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Content section component with white title
const ContentSection = ({ title, description, children }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold text-white">{title}</h3> {/* Title in white */}
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    {children}
  </div>
);

// Skill item component
const SkillItem = ({ skill }) => (
  <div className="flex items-center justify-center gap-2 text-lg">
    <span className="text-2xl text-indigo-900">{skill.icon}</span> {/* Dark indigo color */}
    <span className="text-xl">{skill.name}</span> {/* Increased text size */}
  </div>
);

export default Resume;
