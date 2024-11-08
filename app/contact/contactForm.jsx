"use client";

import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Image d'arrière-plan couvrant toute la page */}
      <Image
        src="/assets/background.webp"
        alt="Background for the contact page"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 -z-10"
        priority
      />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
        className="relative py-6 h-full flex items-center justify-center text-white"
      >
        {/* Titre, texte d'introduction et boutons de contact */}
        <div className="flex flex-col items-center gap-6 p-10 bg-[#27272c]/80 rounded-xl text-center">
          <h3 className="text-5xl text-white mb-4">Travaillons ensemble</h3>
          <p className="text-white max-w-lg">
          Si vous avez des questions ou souhaitez échanger davantage, je serai ravie de vous répondre. N'hésitez pas à me contacter</p>
          
          {/* Boutons de contact sans carrés supplémentaires */}
          <div className="flex gap-6 mt-6">
            <a
              href="tel:+33670398936"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-primary hover:bg-accent-hover transition"
            >
              <FaPhoneAlt className="text-xl" />
              <span className="text-lg">Par téléphone</span>
            </a>
            <a
              href="mailto:labytophie@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-primary hover:bg-accent-hover"
            >
              <FaEnvelope className="text-xl" />
              <span className="text-lg">Par mail</span>
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactForm;