import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="relative h-screen flex items-center"> {/* Flex to center content vertically */}
      <div className="absolute inset-0">
        <Image
          src="/assets/background.png" // Path to your background image
          priority
          quality={100}
          fill
          alt="Background illustrating the home section" // Descriptive alt text
          className="object-cover" // Ensures the image covers the section
        />
      </div>
      <div className="container h-full relative z-10 flex flex-col justify-between"> {/* Flex container */}
        <div className="flex flex-col xl:flex-row items-center justify-between h-full px-4"> {/* Adjust padding */}
          {/* text */}
          <div className="text-center xl:text-left xl:w-1/2"> {/* Set width for responsive design */}
            <span className="text-xl">Développeuse Front-end et UI/UX Designer</span>
            <h1 className="h1 mb-4"> {/* Adjusted margin */}
              <span className="text-white">Sophie Labyt</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80"> {/* Adjusted margin */}
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-4"> {/* Adjusted gap */}
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
          <div className="xl:w-1/2 flex justify-center mb-4 xl:mb-0"> {/* Set width for responsive design */}
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
