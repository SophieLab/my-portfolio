"use client"; // Assurez-vous que c'est un composant côté client

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "./contactForm"; // Assurez-vous d'importer correctement votre composant

const Contact = () => {
  const handleFormSubmit = (formData) => {
    // Ici, vous pouvez gérer les données du formulaire ou effectuer d'autres actions sans API externe.
    console.log("Données du formulaire:", formData);
    alert("Message envoyé !"); // Message de confirmation simple
  };

  return (
    <div className="relative h-screen w-full">
      <Image
        src="/assets/background.webp"
        alt="Background for the contact page"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
        className="relative py-6 h-full flex items-center justify-center"
      >
          <ContactForm onSubmit={handleFormSubmit} />
      </motion.section>
    </div>
  );
};

export default Contact;
