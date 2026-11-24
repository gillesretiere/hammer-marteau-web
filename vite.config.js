// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

// Brouillons (HM-28) : après le build, retire de build/posts/index.json les articles marqués
// « "statut": "brouillon" » et efface leur fichier .md de build/. Ils ne peuvent donc pas
// partir en ligne, ni dans la liste ni par leur adresse directe. Rien ne change dans public/.
const retirerBrouillons = () => {
  let sortie
  return {
    name: 'retirer-brouillons',
    apply: 'build',
    configResolved(c) { sortie = resolve(c.root, c.build.outDir) },
    closeBundle() {
      const index = join(sortie, 'posts', 'index.json')
      if (!existsSync(index)) return
      const posts = JSON.parse(readFileSync(index, 'utf8'))
      const brouillons = posts.filter((p) => p.statut === 'brouillon')
      if (!brouillons.length) return
      writeFileSync(index, JSON.stringify(posts.filter((p) => p.statut !== 'brouillon'), null, 2) + '\n')
      for (const p of brouillons) if (p.fileName) rmSync(join(sortie, 'posts', p.fileName), { force: true })
      console.log(`Brouillons retirés du build : ${brouillons.map((p) => p.id).join(', ')}`)
    },
  }
}

export default defineConfig({
  plugins: [react(), retirerBrouillons()],
  server: {
    host: true, // Nécessaire pour exposer le serveur sur le réseau du VPS
    port: 5173,
    allowedHosts: [
      'hammer-marteau.com',
      '.hammer-marteau.com' // Le point permet d'autoriser aussi les sous-domaines
    ],
    // En local seulement : les vidéos et les livrets ne vivent que sur le serveur (HM-10),
    // `npm run dev` va les y chercher. Sans effet sur le build.
    proxy: {
      '/assets/video': { target: 'https://hammer-marteau.com', changeOrigin: true },
      '/assets/livrets': { target: 'https://hammer-marteau.com', changeOrigin: true },
    },
  },
  build: {
    outDir: 'build', // Force la sortie dans /build au lieu de /dist
    assetsDir: 'static', // Range les JS/CSS dans /static au lieu de /assets
  },
  // Chemins absolus : le site est servi à la racine du domaine
  base: '/',
})