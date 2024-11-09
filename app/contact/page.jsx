"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "./contactForm";

const Contact = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Indique que le composant est monté côté client
  }, []);

  const handleFormSubmit = (formData) => {
    console.log("Données du formulaire:", formData);
    alert("Message envoyé !");
  };

  if (!isClient) return null; // Évite le rendu côté serveur

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
