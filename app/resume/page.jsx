"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// About data
const about = {
  title: "À propos",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  info: [
    { fieldName: "Name", fieldValue: "Sophie Labyt" },
    { fieldName: "Phone", fieldValue: "0670398936" },
    { fieldName: "Email", fieldValue: "labytsophie@gmail.com" },
    { fieldName: "Languages", fieldValue: "English, Spanish" },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Mes expériences",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    { company: "CHU de Toulouse.", position: "Développeuse Front-End & UI/UX Designer", duration: "2023 - Present" },
    { company: "Kallisto", position: "Chargée de webdesign et marketing digital", duration: "2020 - 2022" },
    { company: "Rectorat de Toulouse", position: "Chargée des archives electroniques", duration: " Avr 2019 - Ju 2019 " },
    { company: "LMC", position: "Assistante en communication digitale et SEO", duration: "Juin 2018" },
    { company: "M.D.S.P", position: "Webmaster", duration: "Oct 2017" },
  ],
};

// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  items: [
    { institution: "OpenClassrooms", degree: "Formation Développeur Web", duration: "202-2024" },
    { institution: "Digital Campus", degree: "Master 2 Expert en Stratégie Digitale, Spécialité UX Design", duration: "2020-2022" },
    { institution: "Université Toulouse Jean-Jaurès", degree: "Licence 3 Information-Communciation", duration: "2019-2020" },
    { institution: "IUT Toulouse Paul Sabatier", degree: "Dut Information-Communication", duration: "2017-2019" },
  ],
};

// Skills data
const skills = {
  title: "My skills",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam, sunt explicabo inventore.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaFigma />, name: "Figma" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="Certifications">Certifications</TabsTrigger>
          
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <ContentSection title={experience.title} description={experience.description}>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <ExperienceItem key={index} item={item} />
                    ))}
                  </ul>
                </ScrollArea>
              </ContentSection>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <ContentSection title={education.title} description={education.description}>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <EducationItem key={index} item={item} />
                    ))}
                  </ul>
                </ScrollArea>
              </ContentSection>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <AboutSection />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

// Content Section Component
const ContentSection = ({ title, description, children }) => (
  <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
    {children}
  </div>
);

// Experience Item Component
const ExperienceItem = ({ item }) => (
  <li className="bg-gray-400 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
    <span className="text-accent">{item.duration}</span>
    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
    <div className="flex items-center gap-3">
      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
      <p className="text-white">{item.company}</p>
    </div>
  </li>
);

// Education Item Component
const EducationItem = ({ item }) => (
  <li className="bg-gray-400 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
    <span className="text-accent">{item.duration}</span>
    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
    <div className="flex items-center gap-3">
      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
      <p className="text-white/60">{item.institution}</p>
    </div>
  </li>
);

// Skill Item Component
const SkillItem = ({ skill }) => (
  <li className="flex items-center justify-center flex-col gap-2 text-center">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="text-accent text-5xl">{skill.icon}</div>
        </TooltipTrigger>
        <TooltipContent>{skill.name}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </li>
);

// About Section Component
const AboutSection = () => (
  <div className="flex flex-col gap-[30px]">
    <h3 className="text-4xl font-bold">{about.title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {about.info.map((item, index) => (
        <li key={index} className="flex items-center justify-between">
          <span className="text-white/60">{item.fieldName}</span>
          <span className="text-accent">{item.fieldValue}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Resume;
