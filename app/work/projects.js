import { TbSeo } from "react-icons/tb"; 
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaVuejs, FaBootstrap, FaAngular, FaSass, FaJquery, FaNodeJs } from 'react-icons/fa';

// Ajoutez une classe CSS pour les icônes
const iconStyle = { color: 'white', fontSize: '1.5em', margin: '0 0.5em' };

const projects = {
  frontend: [
    {
      num: "01",
      title: "Nina Carducci",
      contexte: "Optimisation SEO",
      realisation: "Audit complet du site de la photographe Nina Carducci pour optimiser ses performances. En utilisant WAVE, Lighthouse et headingsMap, j’ai amélioré la structure et accéléré le chargement des images. J’ai également résolu des problèmes techniques affectant la navigation et optimisé les balises meta pour renforcer le référencement et accroître la visibilité en ligne.",
      icons: [<FaHtml5 style={iconStyle} key="html" />, <FaCss3Alt style={iconStyle} key="css" />, <FaJsSquare style={iconStyle} key="js" />, <TbSeo style={iconStyle} key="seo" />],
      image: "/assets/work/projet1.png",
      live: "",
      github: "https://github.com/SophieLab/Nina-Carducci-Dev"
    },
    {
      num: "02",
      title: "Sophie Bluel - Portfolio d'architecte",
      contexte: "Créez une page web dynamique avec JavaScript",
      realisation: "Dans ce projet chez ArchiWebos, j'ai contribué au développement du portfolio d'une architecte d'intérieur en renforçant l'équipe front-end. Mes missions principales consistaient à intégrer la page de présentation des travaux à partir d'un design Figma, à créer une page de connexion sécurisée pour l’administrateur, et à développer une modale permettant l'upload de nouveaux médias pour une gestion simplifiée du contenu.",
      icons: [<FaHtml5 style={iconStyle} key="html" />, <FaCss3Alt style={iconStyle} key="css" />],
      image: "/assets/work/projet2.png",
      live: "",
      github: "https://github.com/SophieLab/Portfolio-architecte-sophie-bluel"
    },
    {
      num: "03",
      title: "Booki",
      contexte: "Création de la page d'accueil d'une agence de voyage",
      realisation: "Projet réalisé dans le cadre de mon alternance chez Booki. En tant que développeur web, j'ai intégré l'interface du site de réservation en HTML et CSS en suivant les maquettes desktop, tablette, et mobile créées sur Figma. En étroite coordination avec la CTO et l'UI designer, j'ai complété le code HTML et CSS fourni en respectant les spécifications techniques et les contraintes d'ergonomie.",
      stack: ["Vue.js", "Bootstrap"],
      icons: [<FaVuejs style={iconStyle} key="vue" />, <FaBootstrap style={iconStyle} key="bootstrap" />],
      image: "/assets/work/projet3.png",
      live: "",
      github: "https://github.com/SophieLab/booki-starter-code"
    },
    {
      num: "04",
      title: "Kasa",
      contexte: "Création d'une application web de location immobilière",
      realisation: "Projet réalisé en freelance pour Kasa, entreprise de location d'appartements entre particuliers. Dans le cadre d'une refonte complète du site, j'ai développé l'interface utilisateur en React, en suivant les maquettes Figma pour une expérience responsive et intuitive. Le projet a impliqué la création de composants React, l'intégration de routes avec React Router, et la mise en place de galeries dynamiques et de menus déroulants (Collapse). Sans back-end disponible, j'ai utilisé un fichier JSON pour les données et respecté les guidelines de Kasa pour un code maintenable et optimisé.",
      icons: [<FaAngular style={iconStyle} key="angular" />, <FaSass style={iconStyle} key="sass" />],
      image: "/assets/work/projet4.png",
      live: "",
      github: "https://github.com/SophieLab/kasa"
    },
    {
      num: "05",
      title: "Gaelo Flow",
      contexte: "Développement d'une application de gestion d'imageries médicales",
      realisation: "Description à compléter.", // Ajoutez une description si disponible
      icons: [<FaAngular style={iconStyle} key="angular" />, <FaSass style={iconStyle} key="sass" />],
      image: "/assets/work/thumb6.png",
      live: "",
      github: "" // Ajoutez un lien GitHub si disponible
    },
    {
      num: "06",
      title: "Project 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      stack: ["Next.js", "Tailwind CSS"],
      icons: [<FaNodeJs style={iconStyle} key="node" />],
      image: "/assets/work/thumb6.png",
      live: "",
      github: ""
    }
  ],
  backend: [
    {
      num: "01",
      title: "Mon vieux Grimoire",
      contexte: "Développez le back-end d'un site de notation de livres",
      realisation: "Projet réalisé en freelance pour le site de notation de livres Mon Vieux Grimoire, développé en collaboration avec Kévin, un développeur front-end. Ma mission consistait à créer l'API pour gérer l'ajout de nouveaux livres et leur notation, tout en intégrant des fonctionnalités d'optimisation des images pour respecter les bonnes pratiques du Green Code. J'ai suivi les spécifications techniques fournies par Kévin, et après avoir terminé le back-end, nous avons vérifié l'intégration avec le front-end avant de le présenter au client. Ce projet a renforcé mes compétences en développement back-end et en optimisation des ressources.",
      icons: [<FaNodeJs style={iconStyle} key="node" />],
      image: "/assets/work/thumb6.png",
      live: "",
      github: "https://github.com/SophieLab/mon-vieux-grimoire"
    }
  ],
  uiux: [
    {
      num: "01",
      title: "Gaelo Flow",
      contexte: "Développez le back-end d'un site de notation de livres",
      realisation: "Projet réalisé en freelance pour le site de notation de livres Mon Vieux Grimoire, développé en collaboration avec Kévin, un développeur front-end. Ma mission consistait à créer l'API pour gérer l'ajout de nouveaux livres et leur notation, tout en intégrant des fonctionnalités d'optimisation des images pour respecter les bonnes pratiques du Green Code. J'ai suivi les spécifications techniques fournies par Kévin, et après avoir terminé le back-end, nous avons vérifié l'intégration avec le front-end avant de le présenter au client. Ce projet a renforcé mes compétences en développement back-end et en optimisation des ressources.",
      icons: [<FaNodeJs style={iconStyle} key="node" />],
      live: "",
      github: "https://github.com/SophieLab/mon-vieux-grimoire"
    },
    {
      num: "02",
      title: "La maison des bibie's",
      contexte: "Création des maquettes",
      realisation: "Durant six mois, dans le cadre d'un projet d'étude en collaboration avec les porteurs de projet, j’ai pu intégrer le pôle ui/ux design où j'ai notamment participé à l'identité visuelle, travailler sur le design du site et à la réalisation des prototypages du site internet.",
      icons: [<FaNodeJs style={iconStyle} key="node" />],
      live: "",
      github: "" // Ajoutez un lien GitHub si disponible
    },
    {
      num: "03",
      title: "MADI",
      contexte: "Créer un prototype de l'application et rendre cet assistant domestique rassurant pour l'utilisateur.",
      realisation: "Création d'un prototypage dans le cadre d'un projet d'étude. J'ai effectué un prototypage adapté à un scénario utilisateur et à une charte graphique donnée pour une application nommée MADI, une intelligence artificielle couplée à l'implant Neuralink.",
      icons: [<FaNodeJs style={iconStyle} key="node" />],
      live: "",
      github: "" // Ajoutez un lien GitHub si disponible
    },
    {
      num: "04",
      title: "DCO2",
      contexte: "Créer un prototype de l'application et rendre cet assistant domestique rassurant pour l'utilisateur.",
      realisation: "Création d'un prototypage dans le cadre d'un projet d'étude. J'ai effectué un prototypage adapté à un scénario utilisateur et à une charte graphique donnée pour une application nommée MADI, une intelligence artificielle couplée à l'implant Neuralink.",
      icons: [<FaNodeJs style={iconStyle} key="node" />],
      live: "",
      github: "" // Ajoutez un lien GitHub si disponible
    }
  ]
};

export default projects;
