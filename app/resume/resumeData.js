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
      items: [
        {
          company: "CHU de Toulouse",
          position: "Développeuse Front-end et Designer UI/UX",
          duration: "2023 - Aujourd'hui | Alternance, Toulouse",
        },
        {
          company: "Kallisto",
          position: "Chargée de WebDesign et Marketing Digital",
          duration: "2020 - 2022 | Alternance, Toulouse",
        },
        {
          company: "Académie de Toulouse",
          position: "Chargée des archives Electroniques",
          duration: "Avril 2019 - Juin 2019 | Stage, Toulouse"
        },
        {
          company: "LMC",
          position: "Assistante en communication digitale et SEO",
          duration: "Juin 2018 | Stage, Bondues"
        },
        {
          company: "Maison Des Services à la Personne",
          position: "Webmaster",
          duration: "Juin 2018 | Angres"
        },
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
      skillCategories: [
        {
          category: "Développement web",
          items: [
            {  icon: <img src="/assets/skills/html.svg" alt="HTML" /> },
            {  icon: <img src="/assets/skills/css.svg" alt="CSS" /> },
            {  icon: <img src="/assets/skills/js.svg" alt="JavaScript" /> },
            {  icon: <img src="/assets/skills/react.svg" alt="React" /> },
            { icon: <img src="/assets/skills/nextjs.svg" alt="nextjs" /> },
            { icon: <img src="/assets/skills/ts.svg" alt="Typescript" /> },
            { icon: <img src="/assets/skills/tailwind.svg" alt="Tailwind" /> },
            {  icon: <img src="/assets/skills/storybook.svg" alt="Storybook" /> }
          ]
        },
        {
          category: "Base de données",
          items: [
            { icon: <img src="/assets/skills/sql.svg" alt="SQL" /> },
            { icon: <img src="/assets/skills/mongodb.svg" alt="mongodb" /> },
          ]
        },
        {
          category: "Versionning",
          items: [
            { icon: <img src="/assets/skills/git.svg" alt="GIT" /> },
            { icon: <img src="/assets/skills/github.svg" alt="Github" /> }
            
          ]
        },
        {
          category: "Micro services",
          items: [
            { icon: <img src="/assets/skills/docker.svg" alt="Docker" className="w-8 h-8" /> },
            { icon: <img src="/assets/skills/axios.svg" alt="Docker" className="w-8 h-8" /> },

          ]
        },
        {
          category: "Conception",
          items: [
            { icon: <img src="/assets/skills/figma.svg" alt="Figma" /> },
            { icon: <img src="/assets/skills/ps.svg" alt="photoshop" /> },

          ]
        },

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
