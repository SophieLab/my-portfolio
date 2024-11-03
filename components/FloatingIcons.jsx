"use client";

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center -z-10">
      {/* Icônes de compétences techniques */}
      {/* Icône HTML */}
      <div className="floating-icon" style={{ top: "20%", left: "15%" }}>
        <img src="/assets/skills/html.svg" alt="HTML" className="w-10 h-10" />
      </div>
      {/* Icône CSS */}
      <div className="floating-icon" style={{ top: "10%", left: "40%" }}>
        <img src="/assets/skills/css.svg" alt="CSS" className="w-10 h-10" />
      </div>
      {/* Icône JavaScript */}
      <div className="floating-icon" style={{ top: "15%", left: "70%" }}>
        <img src="/assets/skills/js.svg" alt="JavaScript" className="w-10 h-10" />
      </div>
      {/* Icône React */}
      <div className="floating-icon" style={{ bottom: "10%", left: "20%" }}>
        <img src="/assets/skills/react.svg" alt="React" className="w-10 h-10" />
      </div>
      {/* Icône Next.js */}
      <div className="floating-icon" style={{ bottom: "20%", right: "20%" }}>
        <img src="/assets/skills/nextjs.svg" alt="Next.js" className="w-10 h-10" />
      </div>
      {/* Icône TypeScript */}
      <div className="floating-icon" style={{ top: "50%", left: "80%" }}>
        <img src="/assets/skills/ts.svg" alt="TypeScript" className="w-10 h-10" />
      </div>
      {/* Icône Tailwind */}
      <div className="floating-icon" style={{ top: "40%", left: "50%" }}>
        <img src="/assets/skills/tailwind.svg" alt="Tailwind" className="w-10 h-10" />
      </div>
      {/* Icône Storybook */}
      <div className="floating-icon" style={{ top: "10%", right: "30%" }}>
        <img src="/assets/skills/storybook.svg" alt="Storybook" className="w-10 h-10" />
      </div>
      {/* Icône SQL */}
      <div className="floating-icon" style={{ bottom: "15%", left: "40%" }}>
        <img src="/assets/skills/sql.svg" alt="SQL" className="w-10 h-10" />
      </div>
      {/* Icône MongoDB */}
      <div className="floating-icon" style={{ bottom: "25%", right: "40%" }}>
        <img src="/assets/skills/mongodb.svg" alt="MongoDB" className="w-10 h-10" />
      </div>
      {/* Icône Axios */}
      <div className="floating-icon" style={{ top: "30%", right: "15%" }}>
        <img src="/assets/skills/axios.svg" alt="Axios" className="w-10 h-10" />
      </div>
      {/* Icône Docker */}
      <div className="floating-icon" style={{ bottom: "10%", right: "30%" }}>
        <img src="/assets/skills/docker.svg" alt="Docker" className="w-10 h-10" />
      </div>
      {/* Icône Git */}
      <div className="floating-icon" style={{ top: "40%", left: "10%" }}>
        <img src="/assets/skills/git.svg" alt="Git" className="w-10 h-10" />
      </div>
      {/* Icône GitHub */}
      <div className="floating-icon" style={{ top: "70%", left: "20%" }}>
        <img src="/assets/skills/github.svg" alt="GitHub" className="w-10 h-10" />
      </div>
      {/* Icône Figma */}
      <div className="floating-icon" style={{ top: "40%", right: "20%" }}>
        <img src="/assets/skills/figma.svg" alt="Figma" className="w-10 h-10" />
      </div>
      {/* Icône Photoshop */}
      <div className="floating-icon" style={{ top: "50%", right: "30%" }}>
        <img src="/assets/skills/ps.svg" alt="Photoshop" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default FloatingIcons;
