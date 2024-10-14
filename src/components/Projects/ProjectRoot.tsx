// import React from 'react';
// // import { content } from "../../Content";
// import ProjectCard from './ProjetCard';
// const ProjectRoot = () => {
//   const { Projects: projects } = content;

//   // Vérifiez si projects est défini et est un tableau
//   if (!projects || !Array.isArray(projects) || projects.length === 0) {
//     return <div>No projects available.</div>;
//   }

//   return (
//     <section className="relative min-h-screen" id="projects">
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       ></div>

//       <div className="md:container relative z-10 px-5 pt-14 flex flex-col justify-between">
//         <div>
//           <h2 className="title" data-aos="fade-down">
//             Mes Projets
//           </h2>
//           <h4 className="subtitle" data-aos="fade-down">
//             Voici quelques projets sur lesquels j'ai travaillé.
//           </h4>
//           <br />
//         </div>

//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ProjectRoot;
