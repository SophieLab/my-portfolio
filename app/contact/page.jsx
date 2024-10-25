"use client";

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

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Ajoutez ici votre logique de soumission
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="relative py-6" 
    >
      <div className="absolute inset-0">
        <Image
          src="/assets/background.png"
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                nihil sapiente pariatur id totam.
              </p>
              {/* Champs de saisie */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label htmlFor="firstname" className="sr-only">Firstname</label>
                <Input id="firstname" type="text" placeholder="Firstname" required />

                <label htmlFor="lastname" className="sr-only">Lastname</label>
                <Input id="lastname" type="text" placeholder="Lastname" required />

                <label htmlFor="email" className="sr-only">Email address</label>
                <Input id="email" type="email" placeholder="Email address" required />

                <label htmlFor="phone" className="sr-only">Phone number</label>
                <Input id="phone" type="tel" placeholder="Phone number" />
              </div>

              {/* Sélecteur de service */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="logo-design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Zone de texte */}
              <Textarea className="h-[200px]" placeholder="Type your message here." required />

              {/* Bouton d'envoi */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
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

export default Contact;
