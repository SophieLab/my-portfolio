"use client";

import React from "react";

const stats = [
  { text: "Développement Front-End" },
  { text: "UI Design" },
  { text: "User Experience" },
  { text: "SEO" },
  { text: "Développement Front-End" },
  { text: "UI Design" },
  { text: "User Experience" },
  { text: "SEO" },
  

];

const Stats = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="container mx-auto">
        <div className="w-full inline-flex flex-nowrap overflow-hidden">
          <ul className="flex items-center animate-infinite-scroll whitespace-nowrap">
            {stats.concat(stats).map((item, index) => ( // Duplique la liste pour un défilement infini
              <li
                key={index}
                className={`flex-none bg-transparent border border-white border-opacity-40 text-white opacity-40 py-2 px-4 rounded-full shadow-lg mx-2`}
              >
                <p className="text-lg xl:text-xl font-medium opacity-40"> {/* Opacité de 40 ici aussi */}
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{`
        .animate-infinite-scroll {
          display: flex;
          animation: scroll 20s linear infinite; /* Durée de l'animation */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* Défilement sur 50% de la largeur */
          }
        }
      `}</style>
    </section>
  );
};

export default Stats;
