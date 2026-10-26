# Intégration des mises à jour

Copier chaque fichier de ce dossier vers le même chemin dans le repo `hammer-marteau-web`.

## Commande depuis la racine du repo :

```bash
cp -r /chemin/vers/web-updates/* .
```

## Fichiers à supprimer du repo (nettoyage) :

```bash
rm src/pages/HomePage.jsx
rm src/pages/HomePage2.jsx
rm src/pages/Hero.jsx        # doublon
rm src/sections/Hero.jsx     # doublon
```

## Vérifier que ces fichiers du repo ne bougent pas :

- `src/sections/DownloadSection.jsx`  → déjà bon, conservé
- `src/pages/Blog.jsx`               → déjà bon, conservé
- `src/pages/Portfolio.jsx`          → conservé
- `src/hooks/useTheme.jsx`           → conservé
- `src/i18n/config.js`              → conservé
- `public/thumbnails/`              → conservé
- `public/posts/Atelier ecriture-cccp_01.md` → conservé

## Démarrer en local :

```bash
npm install
npm run dev
```

## Build + déploiement VPS :

```bash
npm run build
# Copier dist/ vers le VPS
rsync -avz dist/ user@votre-vps:/var/www/hammer-marteau/
```

## Config NginX minimale :

```nginx
server {
    listen 80;
    server_name hammer-marteau.com www.hammer-marteau.com;
    root /var/www/hammer-marteau;
    index index.html;

    # SPA : toutes les routes → index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache assets Vite (hashed)
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Ajouter un article blog :

1. Créer `public/posts/mon-article.md` avec front-matter :
```markdown
---
title: "Titre de l'article"
date: '2026-11-01'
tags: ['IA', 'Écriture']
excerpt: Résumé en une phrase.
---
Contenu en Markdown...
```

2. Ajouter l'entrée dans `public/posts/index.json` :
```json
{
  "id": "mon-article",
  "title": "Titre de l'article",
  "date": "2026-11-01",
  "excerpt": "Résumé en une phrase.",
  "fileName": "mon-article.md",
  "tags": ["IA", "Écriture"],
  "readingTime": "5 min"
}
```

3. `npm run build` et redéployer.
