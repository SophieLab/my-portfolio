/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"], // Active le mode sombre basé sur la classe
  content: [
    "./pages/**/*.{js,jsx}", // Scanne tous les fichiers dans le dossier pages
    "./components/**/*.{js,jsx}", // Scanne les composants
    "./app/**/*.{js,jsx}", // Scanne les fichiers dans le dossier app
    "./src/**/*.{js,jsx}", // Scanne le dossier src
    "./styles/**/*.{css}" // Scanne aussi les fichiers CSS pour appliquer les classes Tailwind
  ],
  prefix: "", // Pas de préfixe personnalisé
  theme: {
    container: {
      center: true, // Centre les containers
      padding: "15px", // Ajoute du padding dans les containers
    },
    screens: {
      sm: "640px", // Breakpoint pour petit écran
      md: "768px", // Breakpoint pour écran moyen
      lg: "960px", // Breakpoint pour grand écran
      xl: "1200px", // Breakpoint pour très grand écran
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)", // Utilise la police définie dans ta variable CSS
    },
    extend: {
      colors: {
        primary: '#fff', // Couleur principale blanche
        accent: {
          DEFAULT: "#2c2cf7", // Couleur d'accent par défaut
          hover: "#1a1aad",   // Couleur d'accent au survol
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" }, // Commence à 0px de hauteur
          to: { height: "var(--radix-accordion-content-height)" }, // Se déploie à la hauteur de contenu
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" }, // Part de la hauteur de contenu
          to: { height: "0" }, // Se referme à 0px
        },
        typing: {
          '0%': { width: '0%' }, // Commence avec une largeur de 0%
          '100%': { width: '100%' }, // Se termine avec une largeur de 100%
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' }, // Border transparente au début et à la fin
          '50%': { borderColor: 'black' }, // Border visible au milieu
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out", // Animation pour ouvrir l'accordéon
        "accordion-up": "accordion-up 0.2s ease-out", // Animation pour fermer l'accordéon
        typing: "typing 3.5s steps(40, end), blink 0.75s step-end infinite", // Animation pour effet de texte tapé
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // Plugin pour utiliser les animations Tailwind
  ],
};
