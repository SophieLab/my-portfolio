"use client"; // Assurez-vous que c'est un composant côté client

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Mobile",
    description: "0670398936",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "labytsophie@gmail.com",
  },
];

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      service: event.target.service.value,
      message: event.target.message.value,
    };
    onSubmit(formData); // Passer les données au parent
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
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
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulaire */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c]/80 rounded-xl">
              <h3 className="text-4xl text-accent">Travaillons ensemble</h3>
              <p className="text-white/60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum nihil sapiente pariatur id totam.
              </p>
              {/* Champs de saisie */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="firstname" className="text-white mb-1">Prénom</label>
                  <Input id="firstname" type="text" required className="w-full" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastname" className="text-white mb-1">Nom</label>
                  <Input id="lastname" type="text" required className="w-full" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-white mb-1">Adresse email</label>
                  <Input id="email" type="email" required className="w-full" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-white mb-1">Numéro de téléphone</label>
                  <Input id="phone" type="tel" className="w-full" />
                </div>
              </div>

              {/* Sélecteur de service */}
              <div className="flex flex-col">
                <label htmlFor="service" className="text-white mb-1">Sélectionnez un service</label>
                <Select id="service">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="web-dev">Développement Web</SelectItem>
                      <SelectItem value="ui-ux">Design UI/UX</SelectItem>
                      <SelectItem value="logo-design">Design de Logo</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/* Zone de texte */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-white mb-1">Message</label>
                <Textarea id="message" className="h-[200px] w-full" required placeholder="Tapez votre message ici." />
              </div>

              {/* Bouton d'envoi */}
              <div className="flex justify-center">
                <Button type="submit" className="w-auto px-6">
                  Envoyer le message
                </Button>
              </div>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-white rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
