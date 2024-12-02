import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Cambia el puerto si es necesario
    open: true, // Abre automáticamente el navegador
  },
  build: {
    outDir: 'dist', // Directorio de salida para la compilación
  },
  resolve: {
    alias: {
      '@': '/src', // Alias para acceder fácilmente a tus directorios
    },
  },
});