// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Ou './' si vous déployez dans un sous-dossier
  plugins: [react()],
  server: {
    host: true, // Nécessaire pour exposer le serveur sur le réseau du VPS
    port: 5173,
    allowedHosts: [
      'hammer-marteau.com',
      '.hammer-marteau.com' // Le point permet d'autoriser aussi les sous-domaines
    ]
  },
  build: {
    outDir: 'build', // Force la sortie dans /build au lieu de /dist
    assetsDir: 'static', // Range les JS/CSS dans /static au lieu de /assets
  }
})