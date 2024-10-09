import { content } from "../Content"; // Assurez-vous que le chemin est correct
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Importer les styles de Swiper

const Projects = () => {
  const { Projects: projects } = content; // Déstructuration des données des projets

  // Vérifiez si projects est défini et est un tableau
  if (!projects || !Array.isArray(projects) || projects.length === 0) {
    return <div>No projects available.</div>; // Interface de secours si aucun projet n'existe
  }

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            Mes Projets
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            Voici quelques projets sur lesquels j'ai travaillé.
          </h4>
          <br />
        </div>

        {projects.map((project, index) => (
          <div key={index} className="flex flex-col gap-5 items-center lg:flex-row">
            <img
              src={project.image}
              alt="Project Visual" // Fournir une description alternative
              data-aos="fade-right"
              className="max-w-[45vw] min-w-[22rem]"
            />

            <div className="flex flex-col gap-5">
              <h3 className="text-lg font-bold mt-5">{project.title}</h3>
              <Swiper spaceBetween={20} slidesPerView={1} className="w-full">
                {project.project_content.map((content, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
                      data-aos="fade-left"
                    >
                      <img src={content.image} alt={`${content.title} Visual`} />
                      <div className="flex flex-col gap-1 mt-2">
                        <h5 className="font-bold font-Poppins">{content.title}</h5>
                        <button className="font-bold text-dark_primary self-end">
                          READ MORE
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
