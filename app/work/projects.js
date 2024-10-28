import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaVuejs, FaBootstrap, FaAngular, FaSass, FaJquery, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNestjs, SiTypescript, SiDocker } from 'react-icons/si'; // Importing additional icons

const projects = {
  frontend: [
    {
      num: "01",
      title: "Booki",
      description: "Créez la page d'accueil d'une agence de voyage",
      stack: ["HTML 5", "CSS 3", "JavaScript"],
      icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />],
      image: "/assets/work/projet1.png",
      live: "",
      github: ""  
    },
    {
      num: "02",
      title: "Gaelo Flow",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stack: ["React", "Tailwind CSS", "Nest.js", "TypeScript", "Docker"],
      icons: [
        <FaReact />, 
        <SiTailwindcss />, 
        <SiNestjs />, 
        <SiTypescript />, 
        <SiDocker />
      ],
      image: "/assets/work/projet2.png",
      live: "",
      github: ""
    },
    {
      num: "03",
      title: "Project 3",
      description: "Création de la page d'accueil d'une agence de voyage",
      stack: ["Vue.js", "Bootstrap"],
      icons: [<FaVuejs />, <FaBootstrap />],
      image: "/assets/work/thumb3.png",
      live: "",
      github: ""
    },
    {
      num: "04",
      title: "Project 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stack: ["Angular", "Sass"],
      icons: [<FaAngular />, <FaSass />],
      image: "/assets/work/thumb4.png",
      live: "",
      github: ""
    },
    {
      num: "05",
      title: "Project 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stack: ["jQuery", "CSS Grid"],
      icons: [<FaJquery />],
      image: "/assets/work/thumb5.png",
      live: "",
      github: ""
    },
    {
      num: "06",
      title: "Project 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stack: ["Next.js", "Tailwind CSS"],
      icons: [<FaNodeJs />],
      image: "/assets/work/thumb6.png",
      live: "",
      github: ""
    }
  ],
  backend: [
    // Backend projects...
  ],
  uiux: [
    // UI/UX projects...
  ]
};

export default projects;
