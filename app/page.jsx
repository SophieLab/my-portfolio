import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from '@/components/Stats';

const Home = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
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
      <div className="container relative z-10 flex flex-col items-center h-full px-4">
        <div className="flex flex-col xl:flex-row justify-between items-stretch w-full mb-4">
          {/* Left section: Text */}
          <div className="xl:w-1/2 flex flex-col justify-center mb-4 xl:mb-0">
            <span className="text-xl">Développeuse Front-end et UI/UX Designer</span>
            <h1 className="h1 mb-2"> 
              <span className="text-white">Sophie Labyt</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80">
              Créatrice d’expériences numériques, je transforme vos projets en interfaces intuitives et attrayantes.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-2">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Mon CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>
                <Social
                  containerStyles="flex gap-2"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-colors duration-300" // Effet de remplissage au survol
                />
              </div>
            </div>
          </div>

          {/* Right section: Photo */}
          <div className="xl:w-1/2 flex justify-center mb-4 xl:mb-0">
            <Photo />
          </div>
        </div>

        {/* Stats - directly below the text and photo section */}
        <div className="flex w-full">
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;
