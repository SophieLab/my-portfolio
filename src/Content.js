// Import images
import Profile from "./assets/images/Profile/person.png";


import reactjs from "./assets/images/Skills/react.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";




// Import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

// Export content object
export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  profile: {
    title: "Développeuse Front-End",
    firstName: "",
    lastName: "",
    btnText: "Contactez Moi",
    image: Profile,
    profile: [
      {
        count: "?",
        text: "Lorem ipsum",
      },
      {
        count: "?",
        text: "Lorem ipsum",
      },
    ],
  },
  skills: {
    title: "Mes Compétences",
    subtitle: "Explorez mes compétences à travers différents domaines",
    skills_content: [
      {
        name: "Développement Web",
        tools: [
          "HTML",
          "CSS",
          {
            name: "React",
            image: reactjs,
          },
          "JavaScript",
          "NodeJs",
          "Express",
          "Typescript",
          "Tailwind",
          "Storybook",
        ],
      },
      {
        name: "Base de Données",
        tools: ["SQL", "NoSQL", "MongoDB"],
      },
      {
        name: "Versionning",
        tools: ["GIT", "GitHub"],
      },
      {
        name: "Micro Services",
        tools: ["API REST", "Axios", "Docker"],
      },
      {
        name: "Conception",
        tools: ["Figma", "Adobe XD", "Adobe Photoshop"],
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    service_content: [
      {
        title: "Applications",
        para: "Développement de sites web, applications mobiles et desktop, ainsi que de solutions e-commerce sur mesure.",
        logo: services_logo1,
      },
      {
        title: "Expérience utilisateur & Design",
        para: "Conception d'interfaces intuitives et esthétiques, centrées sur l'utilisateur.",
        logo: services_logo2,
      },
      {
        title: "Stratégie SEO",
        para: "En publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document relying on meaning.", // Correction de la phrase
        logo: services_logo3,
      },
    ],
  },
  Projects: [
    {
      title: "Applications",
      project_content: [
        {
          title: "Gaelo Flow",
          image: project1,
          type: "application",
        },

      ],
    },
    {
      title: "Ecommerce and sites vitrines",
      project_content: [
        {
          title: "Creative Website",
          image: project3,
          type: "ecommerce",
        },
      
      ],
    },
    {
      title: "Design web et print",
      project_content: [
        {
          title: "Creative Website",
          image: project3,
          type: "ecommerce",
        },
      
      ],
    },
  ],
  Testimonials: { 
    title: "Témoignages",
    subtitle: "MES AVIS CLIENTS",
    testimonials_content: [
      {
        review: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.”", // Correction de la phrase
        name: "JOHN DOE",
      },
      {
        review: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.”",
        name: "Tom Alex",
      },
      {
        review: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.”",
        name: "Johnny",
      },
      {
        review: "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.”",
        name: "ROBBIN",
      },
    ],
  },
  Contactme: {
    title: "Contactez moi",
    para: "lorem ipsum.", 
    btnText: "Contactez moi",
  },
  Contact: {
    title: "Contactez Moi", 
    subtitle: "ENTRER EN CONTACT",
    social_media: [
      {
        text: "labytsophie@gmail.com",
        icon: GrMail,
        link: "mailto:labytsophie@gmail.com",
      },
      {
        text: "0670398936",
        icon: MdCall,
        link: "/",
      },
      
    ],
  },
  Footer: {
    text: "Tous droits réservés © 2024",
  },
};
