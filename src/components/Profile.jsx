import { useEffect, useState } from "react";
import { content } from "../Content";
import backgroundProfile from "../assets/images/Profile/background.png";

const Profile = () => {
  const { profile } = content;
  const [scrollY, setScrollY] = useState(0);

  // Écouteur d'événements pour le défilement
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* Section Background avec effet de parallaxe */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0"
          style={{
            backgroundImage: `url(${backgroundProfile})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.3}px)`,
            zIndex: -1,
          }}
        >
          <h1 className="rotate-90 absolute top-[20%] right-[-15%] text-[#EAF2FA]">
            {profile.firstName}{" "}
            <span className="text-dark_primary">{profile.LastName}</span>
          </h1>
        </div>

        {/* First Column */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{profile.title}</h2>
          <br />
          <div className="flex justify-end">
            <button className="btn">{profile.btnText}</button>
          </div>
          <div className="flex flex-col gap-10 mt-10">
            {profile.profile.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5 ${
                  i === 1 ? "flex-row-reverse text-right" : ""
                }`}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column with Floating Effect */}
        <div className="md:h-[37rem] h-80 relative overflow-hidden">
          <img
            src={profile.image}
            data-aos="slide-up"
            alt="Profile"
            className="h-full object-cover rounded-md animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
