import { content } from "../Content";

const Profile = () => {
  const { profile } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        {/* Section Background */}
        <div
          data-aos="slide-left"
          data-aos-delay="1200"
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]">
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
                className={`flex items-center w-80 gap-5
                ${i === 1 && " flex-row-reverse text-right"}  `}
              >
                <h3>{content.count}</h3>
                <p>{content.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column */}
        <div className="md:h-[37rem] h-96">
          <img
            src={profile.image}
            data-aos="slide-up"
            alt="Profile"
            className="h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
