import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/background4.webp"
          priority
          quality={100}
          fill
          alt="Background illustrating the home section with abstract design"
          className="object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto h-full px-6 md:px-12 lg:px-16 relative z-10">
        
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-2">
            <span className="text-indigo-200 opacity-20 text-5xl">Bonjour, je suis</span> <br />
              <span className="text-white">Sophie Labyt</span>
            </h1>
            <span className="text-xl text-indigo-200">Développeuse Front-End spécialisée en UX/UI Design</span>

            <p className="max-w-[500px] mb-9 text-white/80 mt-4">
              Créatrice d’expériences numériques, je transforme vos projets en interfaces intuitives et attrayantes.
            </p>
            {/* Button and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a 
                href="/assets/resume/CV-SophieLabyt.pdf" 
                download
                className="uppercase flex items-center gap-2"
              >
                <Button variant="outline" size="lg">
                  <span>Mon CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-white rounded-full flex justify-center items-center text-white text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo Section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Home;
