"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import SideBar from "@/components/SideBar";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "project 2",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate magnam modi.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
      <motion.section
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="min-h-[80vh] flex flex-col py-12 xl:px-0 overflow-hidden"
      >
        <div className="container mx-auto flex flex-col xl:flex-row xl:gap-[30px] relative z-0">
          {/* Section Projet */}
          <div className="w-full xl:w-[70%] flex flex-col xl:justify-between z-0">
            <div className="flex flex-col xl:flex-row gap-[30px]"> {/* Changed to flex-row for xl size */}
              <div className="flex flex-col gap-[30px] w-full xl:w-[50%]"> {/* Added width for title and description */}
                <div className="text-8xl leading-none font-extrabold text-dark text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-dark group-hover:text-accent transition-all duration-500 capitalize">
                  {project.category} project
                </h2>
                <p className="text-dark">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-dark flex justify-center items-center group">
                          <BsArrowUpRight className="text-dark text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-dark flex justify-center items-center group">
                          <BsGithub className="text-dark text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>

              <div className="w-full xl:w-[50%]"> {/* Added width for slider */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}
                >
                  {projects.map((project, index) => (
                      <SwiperSlide key={index} className="w-full">
                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                          <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                          <div className="relative w-full h-full">
                            <Image
                                src={project.image}
                                fill
                                className="object-cover"
                                alt=""
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                  ))}
                  <WorkSliderBtns
                      containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between xl:w-max xl:justify-none"
                      btnStyles="bg-accent hover:bg-accent-hover text-dark text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                  />
                </Swiper>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full xl:w-[30%] z-50">
            <SideBar />
          </div>
        </div>
      </motion.section>
  );
};

export default Work;
