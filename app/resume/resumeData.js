import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaGit,
    FaGithub,
    FaRocket,
    FaDocker,
    FaFigma,
    FaBook
  } from 'react-icons/fa';
  
  const resumeData = {
    sidebar: [
      { label: "Skills", value: "skills" },
      { label: "Expériences", value: "experiences" },
      { label: "Formations", value: "formations" },
      { label: "Certifications", value: "certifications" }
    ],
    cv: {
      about: {
        title: "À propos",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        info: [
          { fieldName: "Nom", fieldValue: "Sophie Labyt" },
          { fieldName: "Téléphone", fieldValue: "0670398936" },
          { fieldName: "Email", fieldValue: "labytsophie@gmail.com" },
          { fieldName: "Langues", fieldValue: "Anglais, Espagnol" }
        ]
      },
      experiences: {
        title: "Mes expériences",
        description: "Voici un aperçu de mes expériences professionnelles.",
        items: [
          {
            company: "CHU de Toulouse",
            position: "Développeuse Front-end et Designer UI/UX",
            duration: "2023 - Présent | Alternance",
          },
          {
            company: "Kallisto",
            position: "Chargée de WebDesign et Marketing Digital",
            duration: "2020 - 2022 | Alternance, Toulouse",
          },
          {
            company: "Académie de Toulouse",
            position: "Chargée des archives électroniques",
            duration: "2019 April - 2019 June | Stage"
          }
        ]
      },
      formations: {
        title: "Mes formations",
        description: "Voici mon parcours éducatif.",
        items: [
          { institution: "OpenClassrooms", degree: "Formation Développeur Web ", duration: "2023 - 2024" },
          { institution: "Digital Campus", degree: "Master, Expert en Stratégie Digitale Option User Expérience", duration: "2020 - 2022" },
          { institution: "Université Jean-Jaurès de Toulouse", degree: "Licence 3 Information-Communication", duration: "2019 - 2020" },
          { institution: "IUT Paul Sabatier de Toulouse", degree: "DUT Information-Communication", duration: "2017 - 2019" }
        ]
      },
      skills: {
        title: "Mes compétences techniques",
        description: "Compétences techniques et outils que j'utilise.",
        skillCategories: [
          {
            category: "Développement web",
            items: [
              { name: "HTML", icon: <FaHtml5 /> },
              { name: "CSS", icon: <FaCss3Alt /> },
              { name: "JavaScript", icon: <FaJs /> },
              { name: "React", icon: <FaReact /> },
              { name: "NodeJs", icon: <FaNodeJs /> },
              { name: "Express", icon: <FaNodeJs /> },
              { name: "Typescript", icon: <FaJs /> },
              { name: "Tailwind", icon: <FaRocket /> },
              { name: "Storybook", icon: <FaBook /> }
            ]
          },
          {
            category: "Base de données",
            items: [
              { name: "SQL", icon: <FaDatabase /> },
              { name: "NoSQL (MongoDB)", icon: <FaDatabase /> }
            ]
          },
          {
            category: "Versionning",
            items: [
              { name: "GIT", icon: <FaGit /> },
              { name: "Github", icon: <FaGithub /> }
            ]
          },
          {
            category: "Micro services",
            items: [
              { name: "API REST", icon: <FaRocket /> },
              { name: "Axios", icon: <FaRocket /> },
              { name: "Docker", icon: <FaDocker /> }
            ]
          },
          {
            category: "Conception",
            items: [
              { name: "Figma", icon: <FaFigma /> }
            ]
          }
        ]
      },
      certifications: {
        title: "Certifications",
        description: "Certifications obtenues dans différents domaines.",
        items: [
          { name: "Maîtrise de la qualité en projet web", institution: "Opquast", year: "2021" },
          { name: "Attestation de suivi MOOC de l'Atelier RGPD", institution: "CNIL", year: "2020" }
        ]
      }
    }
  };
  
  export default resumeData;
  