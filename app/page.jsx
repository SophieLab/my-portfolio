import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from '@/components/Stats';
import FloatingIcons from '@/components/FloatingIcons';

const Home = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-16">
      
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
      <div className="container relative z-10 flex flex-col items-center h-full">
        
        <div className="flex flex-col xl:flex-row justify-between items-stretch w-full mb-4">
          
          {/* Left Section: Text and Introduction */}
          <div className="xl:w-1/2 flex flex-col justify-center mb-4 xl:mb-0">
            <span className="text-xl">Développeuse Front-end et UI/UX Designer</span>
            <h1 className="h1 mb-2"> 
              <span className="text-white">Sophie Labyt</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80">
              Créatrice d’expériences numériques, je transforme vos projets en interfaces intuitives et attrayantes.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-2">
              <a href="/assets/Sophie_Labyt_CV.pdf" download className="no-underline">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Mon CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div>
                <Social
                  containerStyles="flex gap-2"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-colors duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right Section: Photo with Floating Icons */}
          <div className="xl:w-1/2 flex justify-center mb-4 xl:mb-0 relative">
            <Photo />
            <FloatingIcons />
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex w-full">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;
