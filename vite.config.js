import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Empêche l'affichage de l'IP réseau
    port: 3000, // Le port que vous souhaitez utiliser
    strictPort: true, // Assure que le port soit utilisé, pas d'autres ports
  }
});
