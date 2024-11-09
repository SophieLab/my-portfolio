import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/SophieLab", label: "GitHub" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/sophielabyt/", label: "LinkedIn" },
  { icon: <FaYoutube />, path: "https://www.youtube.com", label: "YouTube" },
  { icon: <FaTwitter />, path: "https://twitter.com", label: "Twitter" },
];

const Social = ({ containerStyles = "flex space-x-4", iconStyles = "text-2xl text-gray-500 hover:text-gray-700" }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item) => (
        <Link
          key={item.label} // Utilisation de la propriété `label` comme clé unique
          href={item.path}
          target="_blank"
          rel="noopener noreferrer"
          className={iconStyles}
          aria-label={item.label} // Ajout d'un attribut aria-label pour l'accessibilité
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
