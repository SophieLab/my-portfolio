const stats = [
  {
    text: "12 Years of experience",
  },
  {
    text: "26 Projects completed",
  },
  {
    text: "8 Technologies mastered",
  },
  {
    text: "500 Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              key={index}
            >
              <p className="text-4xl xl:text-6xl font-extrabold whitespace-nowrap overflow-hidden border-r-4 border-black animate-typing">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
