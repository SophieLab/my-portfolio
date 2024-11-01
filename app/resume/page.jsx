"use client"; // Ajoutez cette ligne pour marquer le fichier comme un composant client

import React, { useState } from "react"; // Importer useState pour la gestion d'état
import contentResume from "./contentResume.json"; // Importer les données JSON
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Sidebar from "@/components/SideBar";

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState("experiences"); // État pour suivre la section sélectionnée

  // Définir la fonction pour gérer le changement de catégorie
  const handleCategoryChange = (category) => {
    setSelectedSection(category);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto flex">
        <Sidebar config={contentResume.sidebar} onSelectCategory={handleCategoryChange} />

        <div className="min-h-[70vh] w-full ml-4"> {/* Ajout d'une marge pour l'espacement */}
          {/* Contenu principal */}
          <div className="min-h-[70vh] w-full">
            {/* Afficher la section sélectionnée */}
            {selectedSection === "experiences" && (
              <ContentSection title={contentResume.cv.experiences.title} description={contentResume.cv.experiences.description}>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {contentResume.cv.experiences.items.map((item, index) => (
                      <ExperienceItem key={index} item={item} />
                    ))}
                  </ul>
                </ScrollArea>
              </ContentSection>
            )}

            {selectedSection === "formations" && (
              <ContentSection title={contentResume.cv.formations.title} description={contentResume.cv.formations.description}>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {contentResume.cv.formations.items.map((item, index) => (
                      <EducationItem key={index} item={item} />
                    ))}
                  </ul>
                </ScrollArea>
              </ContentSection>
            )}

            {selectedSection === "skills" && (
              <ContentSection title={contentResume.cv.skills.title} description={contentResume.cv.skills.description}>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {contentResume.cv.skills.skillList.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                  ))}
                </ul>
              </ContentSection>
            )}

            {selectedSection === "about" && (
              <ContentSection title={contentResume.cv.about.title} description={contentResume.cv.about.description}>
                <ul className="mt-4 space-y-2">
                  {contentResume.cv.about.info.map((info, index) => (
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
  );
};

// Composant de section de contenu
const ContentSection = ({ title, description, children }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    {children}
  </div>
);

// Composant d'élément d'expérience
const ExperienceItem = ({ item }) => (
  <li>
    <h4 className="text-lg font-semibold">{item.position} - {item.company}</h4>
    <p className="text-sm text-white/60">{item.duration}</p>
    <p>{item.details}</p>
  </li>
);

// Composant d'élément de formation
const EducationItem = ({ item }) => (
  <li>
    <h4 className="text-lg font-semibold">{item.degree} - {item.institution}</h4>
    <p className="text-sm text-white/60">{item.duration}</p>
  </li>
);

// Composant d'élément de compétence
const SkillItem = ({ skill }) => {
  const IconComponent = skill.icon ? require("react-icons/fa")[skill.icon] : null; // Importer l'icône correspondante si elle existe
  return (
    <li className="flex items-center justify-center gap-2">
      {IconComponent && <IconComponent className="text-xl" />}
      <span>{skill.name}</span>
    </li>
  );
};

export default Resume;
