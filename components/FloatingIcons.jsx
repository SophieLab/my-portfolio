"use client";

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center -z-10">
      {/* Icônes de compétences techniques */}
      
      {/* Icône CSS (Top-Left) */}
      <div className="floating-icon" style={{ top: "22%", right: "75%" }}>
        <img src="/assets/skills/js.svg" alt="JavaScript" className="w-8 h-8" />
      </div>
      
      {/* Icône JavaScript (Top-Right) */}
      <div className="floating-icon" style={{ top: "23%", left: "75%" }}>
        <img src="/assets/skills/css.svg" alt="CSS" className="w-8 h-8" />
      </div>
      
      {/* Icône HTML (Top-Center) */}
      <div className="floating-icon" style={{ top: "11%", left: "48%", transform: "translateX(-50%)" }}>
        <img src="/assets/skills/html.svg" alt="HTML" className="w-8 h-8" />
      </div>
      
      {/* Icône React (Bottom-Left) */}
      <div className="floating-icon" style={{ bottom: "50%", left: "8%" }}>
        <img src="/assets/skills/react.svg" alt="React" className="w-8 h-8" />
      </div>
      
      {/* Icône TypeScript (Center-Right) */}
      <div className="floating-icon" style={{ top: "44%", right: "8%", transform: "translateY(-50%)" }}>
        <img src="/assets/skills/ts.svg" alt="TypeScript" className="w-8 h-8" />
      </div>

      {/* Icône Next.js (Bottom-Right) */}
      <div className="floating-icon" style={{ bottom: "30%", right: "80%" }}>
        <img src="/assets/skills/nextjs.png" alt="Next.js" className="w-8 h-8" />
      </div>
      
      {/* Icône Tailwind (Center-Center) */}
      <div className="floating-icon" style={{ top: "63%", left: "80%", transform: "translate(-50%, -50%)" }}>
        <img src="/assets/skills/tailwind.svg" alt="Tailwind" className="w-8 h-8" />
      </div>
      
      {/* Icône Figma (Bottom-Center) */}
      <div className="floating-icon" style={{ bottom: "15%", left: "28%", transform: "translateX(-50%)" }}>
        <img src="/assets/skills/figma.svg" alt="Figma" className="w-8 h-8" />
      </div>
      
      {/* Icône Photoshop (Mid-Bottom-Right) */}
      <div className="floating-icon" style={{ bottom: "16%", right: "25%" }}>
        <img src="/assets/skills/ps.svg" alt="Photoshop" className="w-8 h-8" />
      </div>
      
      {/* Icône Adobe XD (Mid-Top-Right) */}
      <div className="floating-icon" style={{ top: "85%", right: "47%" }}>
        <img src="/assets/skills/XD.png" alt="Adobe XD" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default FloatingIcons;
