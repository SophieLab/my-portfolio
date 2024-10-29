import { TbSeo } from "react-icons/tb"; 
import { AiFillGithub } from "react-icons/ai"; 
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaVuejs, FaBootstrap, FaAngular, FaSass, FaJquery, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNestjs, SiTypescript, SiDocker } from 'react-icons/si'; // Importing additional icons

const projects = {
  frontend: [
    {
      num: "01",
      title: "Nina Carducci",
      contexte: "Optimisation SEO pour le site de la photograhe Nina Carducci",
      realisation: "Dans ce projet, j'ai mené un audit complet pour optimiser les performances du site de la photographe Nina Carducci. En utilisant des outils web tels que WAVE, Lighthouse et headingsMap, j'ai amélioré la structure et optimisé le chargement pour une meilleure vitesse d'affichage des images. En réponse aux besoins du client, j'ai également résolu deux problèmes techniques qui affectaient le bon fonctionnement du site. Enfin, dans une démarche d'optimisation continue, j'ai travaillé sur les balises meta pour renforcer le référencement et accroître la visibilité de la photographe en ligne.",
      icons: [<FaHtml5 />, <FaCss3Alt />, <FaJsSquare />,<AiFillGithub />, <TbSeo /> ],
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
