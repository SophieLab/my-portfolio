"use client"; // Assurez-vous que c'est un composant côté client

import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "./ContactForm"; // Assurez-vous d'importer correctement votre composant

const Contact = () => {
  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "YOUR_SERVICE_ID",
          template_id: "YOUR_TEMPLATE_ID",
          user_id: "YOUR_USER_ID",
          template_params: {
            ...formData,
          },
        }),
      });

      if (response.ok) {
        alert("Message sent!");
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error("Sending error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="relative py-6"
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/background.webp"
          priority
          quality={100}
          fill
          alt="Background illustrating the contact section"
          className="object-cover"
        />
      </div>
      <div className="container mx-auto relative z-10 flex justify-between items-start">
        <div className="w-2/3">
          <ContactForm onSubmit={handleFormSubmit} />
        </div>
        
        {/* Informations de contact avec icônes à droite */}
        <div className="w-1/3 text-right text-white flex flex-col items-end space-y-4">
          <div className="flex items-center space-x-2">
            <Image src="/assets/phone-icon.svg" alt="Phone icon" width={24} height={24} />
            <span>06.70.39.89.36</span>
          </div>
          <div className="flex items-center space-x-2">
            <Image src="/assets/email-icon.svg" alt="Email icon" width={24} height={24} />
            <span>labytophie@gmail.com</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
