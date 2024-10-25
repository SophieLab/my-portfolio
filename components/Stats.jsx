const stats = [
  { text: "Développement Front-End" },
  { text: "UI/UX Design" },
  { text: "SEO" },
  { text: "Communications" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-nowrap gap-6 justify-center items-center max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="relative w-1/4 bg-transparent border-2 border-white text-white py-2 px-4 rounded-full shadow-lg
                         transform transition-transform duration-300 hover:scale-105 overflow-hidden flex justify-center"
              key={index}
            >
              <p className="text-lg xl:text-xl font-bold whitespace-nowrap shadow-md">
                {item.text}
              </p>
          
              <div className="absolute inset-0 rounded-full border-2 border-transparent animate-sparkle"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
