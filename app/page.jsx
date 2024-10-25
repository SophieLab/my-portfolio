import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="relative h-screen flex items-center"> 
      <div className="absolute inset-0">
        <Image
          src="/assets/background4.png"
          priority
          quality={100}
          fill
          alt="Background illustrating the home section"
          className="object-cover"
        />
      </div>
      <div className="container h-full relative z-10 flex flex-col justify-between">
        <div className="flex flex-col xl:flex-row items-center justify-between h-full px-4">
          <div className="text-center xl:text-left xl:w-1/2">
            <span className="text-xl">Développeuse Front-end et UI/UX Designer</span>
            <h1 className="h1 mb-4"> 
              <span className="text-white">Sophie Labyt</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80"> 
            Créatrice d’expériences numériques uniques, j’allie technique et design pour transformer des idées en interfaces élégantes et intuitives.            </p>
            <div className="flex flex-col xl:flex-row items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div>
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="xl:w-1/2 flex justify-center mb-4 xl:mb-0"> 
            <Photo />
          </div>
        </div>

        <div className="mb-4"> {/* Ensure Stats is positioned correctly */}
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Home;
