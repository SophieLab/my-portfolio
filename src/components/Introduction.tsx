import React from "react";
import { content } from "../Content";

const Introduction = () => {
  const { profile } = content;

  return (
    <section
      id="introduction"
      className="flex flex-col items-center justify-center bg-gradient-to-r from-bg_light_primary to-bg_light_secondary p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-4xl font-bold text-dark_primary mb-4">
        {profile.introduction.greeting} {/* Removed name and surname */}
      </h2>
      <h3 className="text-2xl text-dark_secondary mb-4">{profile.title}</h3>
      <p className="text-gray-700 text-center leading-relaxed max-w-2xl">
        {profile.introduction.description}
      </p>
      <button className="mt-6 px-6 py-2 bg-dark_primary text-white rounded-full shadow-md hover:bg-dark_secondary transition-colors duration-300">
        {profile.btnText}
      </button>
    </section>
  );
};

export default Introduction;
