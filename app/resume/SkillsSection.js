import React from "react";
import Card from "@/components/card";
import resumeData from "./resumeData";

const SkillsSection = () => (
  <div className="mb-8">
    <h2 className="text-5xl font-bold text-white opacity-40 mt-5 mb-12">{resumeData.cv.skills.title}</h2>
    <p className="mb-4 text-gray-600">{resumeData.cv.skills.description}</p>
    <div className="grid grid-cols-1 gap-6">
      {/* Carte de développement web prenant toute la largeur */}
      <Card className="w-full group hover:bg-white transition duration-300 p-6 rounded-lg shadow-lg">
        <h4 className="text-2xl font-semibold mb-4 text-black group-hover:text-indigo-600 text-center">
          Développement Web
        </h4>
        <div className="flex items-center justify-center gap-6 text-lg">
          {resumeData.cv.skills.skillCategories[0].items.map((skill, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-indigo-900">
                <img
                  src={skill.icon.props.src}
                  alt={skill.icon.props.alt}
                  className="w-14 h-14 object-contain" // Increased size here
                />
              </span>
              <span className="text-lg">{skill.name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Cartes pour les autres compétences */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {resumeData.cv.skills.skillCategories.slice(1).map((category, categoryIndex) => (
          <Card key={categoryIndex} className="group hover:bg-white transition duration-300 p-6 rounded-lg shadow-lg">
            <h4 className="text-2xl font-semibold mb-4 text-black group-hover:text-indigo-600 text-center">
              {category.category}
            </h4>
            <div className="flex items-center justify-center gap-6 text-lg">
              {category.items.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-indigo-900">
                    <img
                      src={skill.icon.props.src}
                      alt={skill.icon.props.alt}
                      className="w-14 h-14 object-contain" // Increased size here
                    />
                  </span>
                  <span className="text-lg">{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default SkillsSection;
