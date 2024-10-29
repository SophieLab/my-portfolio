/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"], // Assurez-vous que le nom de la police est correct
      },
      colors: {
        primary: '#fff',
        accent: {
          DEFAULT: "#2c2cf7",
          hover: "#1a1aad",
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-delay': 'float 3s ease-in-out infinite 1.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
