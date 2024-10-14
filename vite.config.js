import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for a React application
export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Use localhost to avoid exposing the network IP
    port: 3000,        // Specify the port to run the development server
    strictPort: true,  // Ensure that Vite uses the specified port, failing if it's unavailable
    open: true,        // Optional: Automatically open the browser when the server starts
  }
});
