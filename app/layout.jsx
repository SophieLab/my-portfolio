import { Poppins } from "next/font/google";
import "./globals.css"; // Assurez-vous que le fichier globals.css existe pour les styles globaux

import Header from "@/components/Header"; // Importation de l'en-tête
import PageTransition from "@/components/PageTransition"; // Importation de la transition de page
import StairTransition from "@/components/StairTransition"; // Importation de la transition en escalier

// Configuration de la police Poppins via Next.js font optimization
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // La variable CSS permettant d'appliquer la police
});

export const metadata = {
  title: "Mon Application Next.js", // Change le titre en fonction de ton projet
  description: "Description de mon projet Next.js", // Description de ton projet
};

export default function Layout({ children }) {
  return (
    <html lang="fr">
      <body className={poppins.variable}> {/* Appliquer la police Poppins */}
        <Header /> {/* Composant d'en-tête global */}
        <StairTransition /> {/* Transition animée pour la page */}
        <PageTransition>{children}</PageTransition> {/* Transition des pages */}
      </body>
    </html>
  );
}
