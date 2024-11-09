import { TbSeo } from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaSass, FaNodeJs, FaWordpress } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

// CSS styles for icons
const iconStyle = { color: 'white', fontSize: '1.5em', margin: '0 0.5em' };

// Array of frontend, backend, and UI/UX projects
const projects = {
  frontend: [
    {
      num: "01",
      title: "Nina Carducci",
      contexte: "Optimisation SEO",
      realisation: "Audit complet du site de la photographe Nina Carducci pour optimiser ses performances...",
      icons: [<FaHtml5 style={iconStyle} />, <FaCss3Alt style={iconStyle} />, <FaJsSquare style={iconStyle} />, <TbSeo style={iconStyle} />],
      image: "/assets/work/projet1.png",
      github: "https://github.com/SophieLab/Nina-Carducci-Dev"
    },
    {
      num: "02",
      title: "Sophie Bluel - Portfolio d'architecte",
      contexte: "Créez une page web dynamique avec JavaScript",
      realisation: "Dans ce projet chez ArchiWebos, j'ai contribué au développement du portfolio...",
      icons: [<FaHtml5 style={iconStyle} />, <FaCss3Alt style={iconStyle} />, <FaJsSquare style={iconStyle} />],
      image: "/assets/work/projet2.png",
      github: "https://github.com/SophieLab/Portfolio-architecte-sophie-bluel"
    },
    {
      num: "03",
      title: "Booki",
      contexte: "Création de la page d'accueil d'une agence de voyage",
      realisation: "Projet réalisé dans le cadre de mon alternance chez Booki...",
      icons: [<FaHtml5 style={iconStyle} />, <FaCss3Alt style={iconStyle} />],
      image: "/assets/work/projet3.png",
      github: "https://github.com/SophieLab/booki-starter-code"
    },
    {
      num: "04",
      title: "Kasa",
      contexte: "Création d'une application web de location immobilière",
      realisation: "Projet réalisé en freelance pour Kasa, entreprise de location d'appartements...",
      icons: [<FaHtml5 style={iconStyle} />, <FaReact style={iconStyle} />, <FaSass style={iconStyle} />],
      image: "/assets/work/projet4.png",
      github: "https://github.com/SophieLab/kasa"
    },
    {
      num: "05",
      title: "Gaelo Flow",
      contexte: "Création d'une application web de location immobilière",
      realisation: "Projet réalisé en freelance pour Kasa, entreprise de location d'appartements...",
      icons: [<FaHtml5 style={iconStyle} />, <FaReact style={iconStyle} />, <FaSass style={iconStyle} />],
      image: "/assets/work/projet4.png",
      github: "https://github.com/SophieLab/kasa"
    }
  ],
  
  backend: [
    {
      num: "01",
      title: "Mon vieux Grimoire",
      contexte: "Développez le back-end d'un site de notation de livres",
      realisation: "Projet réalisé en freelance pour le site Mon Vieux Grimoire...",
      icons: [<FaNodeJs style={iconStyle} />],
      image: "/assets/work/projet5.png",
      github: "https://github.com/SophieLab/mon-vieux-grimoire"
    }
  ],
  
  uiux: [
    {
      num: "01",
      title: "La maison des bibie's",
      contexte: "Création des maquettes",
      realisation: "Durant six mois, dans le cadre d'un projet d'étude...",
      icons: [<FaHtml5 style={iconStyle} />, <FaCss3Alt style={iconStyle} />, <SiFigma style={iconStyle} />, <FaWordpress style={iconStyle} />],
      image: "/assets/work/projet6.png"
    },
    {
      num: "02",
      title: "MADI",
      contexte: "Créer un prototype de l'application et rendre cet assistant domestique rassurant...",
      realisation: "Création d'un prototypage dans le cadre d'un projet d'étude...",
      icons: [<SiFigma style={iconStyle} />],
      image: "/assets/work/projet7.png"
    }
  ]
};

export default projects;
