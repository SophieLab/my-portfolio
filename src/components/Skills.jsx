import { useState } from "react";
import { content } from "../Content";

// Define styles for the large and small spheres
const largeSphereStyle = "w-40 h-40 bg-white rounded-full flex items-center justify-center shadow-inner transform transition-transform duration-300 relative overflow-visible";
const smallSphereStyle = "w-12 h-12 0 rounded-full shadow-lg absolute transition-all duration-300";

const Skills = () => {
  const { skills } = content;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="min-h-fit bg-gray-300" id="skills">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">{skills.title}</h2>
        <h4 className="subtitle" data-aos="fade-down">{skills.subtitle}</h4>
        <br />

        <div className="flex flex-wrap justify-center gap-8">
          {skills.skills_content.map((skillSet, index) => (
            <div key={index} className="flex flex-col items-center">
              <h5 className="font-bold text-dark_primary">{skillSet.name}</h5>
              <div
                className={largeSphereStyle}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  {skillSet.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className={smallSphereStyle}
                      style={{
                        transitionDelay: `${toolIndex * 100}ms`,
                        transform: hoveredIndex === index 
                          ? `translate(${(Math.cos((toolIndex / skillSet.tools.length) * Math.PI * 2) * 90)}px, ${(Math.sin((toolIndex / skillSet.tools.length) * Math.PI * 2) * 90 - 20)}px)`
                          : "translate(0, 0)",
                      }}
                    >
                      {/* Check if the tool is an object */}
                      {typeof tool === "object" ? (
                        <img src={tool.image} alt={tool.name} className="w-full h-full object-cover rounded-full" />
                      ) : (
                        <span className="text-dark_primary text-center">{tool}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
