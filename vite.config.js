// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Nécessaire pour exposer le serveur sur le réseau du VPS
    port: 5173,
    allowedHosts: [
      'hammer-marteau.com',
      '.hammer-marteau.com' // Le point permet d'autoriser aussi les sous-domaines
    ]
  }
})