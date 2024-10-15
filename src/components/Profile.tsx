import React from "react";
import { content } from "../Content";
import Card from "../Layouts/Card";
import Background from '../assets/images/Profile/background.png'; // Chemin vers l'image de fond

const Profile = () => {
  const { profile } = content;

  return (
    <section id="home" className="overflow-hidden relative">
      {/* Utilisation de l'image de fond */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover', // Ajustez pour couvrir toute la section
          backgroundPosition: 'center', // Centrez l'image
          height: '100%', // Hauteur de la div de fond
          width: '100%', // Largeur de la div de fond
        }}
      ></div>

      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center z-10">
        {/* Section avec un fond glassmorphisme */}
        <div className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 backdrop-blur-lg bg-white/30 border border-white/20 rounded-lg z-10"></div>

        {/* Première colonne avec marge gauche et contenu défilable */}
        <div className="pb-16 px-6 pt-5 md:ml-10 overflow-y-scroll max-h-screen z-20">
          {/* Nom et prénom au-dessus du titre */}
          <h1 className="text-[#EAF2FA] text-4xl md:text-6xl">
            {profile.firstName}{" "}
            <span className="text-white">{profile.lastName}</span>
          </h1>

          {/* Titre de la section */}
          <h2 className="text-2xl md:text-4xl font-semibold mt-2">{profile.title}</h2>
          <br />

          {/* Introduction Component (Card) */}
          <div className="flex justify-center mt-5">
            <Card
              image={profile.image} // Image pour la carte
              intro="Je suis une développeuse front-end passionnée, spécialisée dans la création d'interfaces utilisateurs intuitives et esthétiques."
              btnText="En savoir plus"
              title={undefined}
            />
          </div>

          <div className="flex justify-end mt-5"></div>

          <div className="flex flex-col gap-10 mt-10">
            {profile.profile.map((content, i) => (
              <div
                key={i}
                className={`flex items-center w-80 gap-5 ${i === 1 ? "flex-row-reverse text-right" : ""}`}
              >
                <h3 className="text-3xl font-bold">{content.count}</h3>
                <p className="text-lg">{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deuxième colonne avec l'image de profil à droite */}
        <div className="md:h-[37rem] h-80 relative overflow-hidden">
          <img
            src={profile.image}
            alt="Profile"
            className="h-full object-cover rounded-md animate-float z-30 relative"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
