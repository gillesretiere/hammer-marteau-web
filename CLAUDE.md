# Site hammer-marteau.com : consignes pour Claude

Ce fichier passe le relais entre sessions. Il résume comment Gilles travaille, ce qui est décidé et ce qui reste. Le README décrit le site lui-même (contenus, pages statiques, nginx).

## Avec Gilles

- On travaille en français, en le tutoyant. Le site lui-même emploie un ton neutre, sans « je » ni « tu ».
- **Gilles décide tout ce qui est publié.** Les textes du site sont les siens : on propose, il choisit et réécrit.
- **Pas de commit, de push ni d'envoi sur le serveur sans son accord explicite**, à chaque fois. Un accord donné une fois ne vaut pas pour la suite.
- **Ne pas modifier le serveur** (paquets, droits, configuration) : on lui donne la commande et il la lance lui-même. Lire le serveur reste permis.
- Il aime être contredit sur les choix risqués : dis ton désaccord, avec la raison, puis applique sa décision.
- Positionnement : « Micro-agence ». Pas « agence IA », pas centré sur la santé. « Expression numérique » est le slogan.

## Suivi : Notion

- Base « Cartes du site » : `collection://420d4626-40b6-8138-90aa-000b1855298b`, sous la page « Site Hammer & Marteau — Refonte ».
- On avance carte par carte (HM-n). À la fin d'une carte, ajouter un bilan sur la carte et régler son Statut et sa Prochaine action.

## Le dépôt

- Vite + React 19 + react-router 7 + Tailwind 3. Branche de travail : `refonte/lot-b` (rien n'est encore fusionné dans `main`).
- `npm run dev` lance le site sur le port 5173. Un proxy y fait venir les livrets et les vidéos depuis le site en ligne.
- Contenu de l'accueil : `src/contenus/accueil.js`. Réglages du portfolio et du blog : `src/contenus/portfolio.js` et `blog.js`. Réseaux sociaux : `reseaux.js`.
- Fiche projet avec livrets et vidéos : `public/portfolio-data/posts/<slug>.json`, affiché par `src/site/Ressources.jsx`.
- Le panneau « Hero » en bas à droite n'est qu'une maquette (`AccentSwitcher.jsx`) : il ne s'affiche qu'avec `npm run dev`.
- Dossiers ignorés par Git, qui gardent les originaux en pleine qualité : `videos-source/`, `livrets-source/` et `hero-source/` (essais d'image du hero). Les versions allégées vont dans `videos-out/` et `livrets-out/`, ou dans `public/`. `scripts/alleger-livrets.py` allège les PDF.

## Brouillons (HM-28)

- Dans `public/posts/index.json`, l'entrée `"statut": "brouillon"` montre l'article avec `npm run dev`, avec une étiquette, et le retire du build : de la liste comme du fichier. Sans ce champ, l'article est publié.
- « Développer CC Sudoku avec l'IA » est un brouillon : un premier jet écrit par Claude, que Gilles réécrit. Le commentaire « PREMIER JET » sera retiré quand il aura fini.

## Envoi sur le serveur

- `npm run deploy:test` fait une simulation, `npm run deploy` envoie (`scripts/envoyer.sh`). Les deux reconstruisent le site, puis copient `build/` dans `/var/www/html` par SFTP avec lftp.
- **Jamais d'effacement automatique** (pas de `--delete`) : le serveur garde des fichiers qui ne sont pas dans le dépôt, les livrets dans `/assets/livrets/` et les vidéos dans `/assets/video/` (au singulier). Le ménage se fait à la main, fichier par fichier, avec l'accord de Gilles.
- Connexion : `gre@vps-993f2b9f.vps.ovh.net` avec la clé `~/.ssh/id_ed25519_hammer`, déclarée dans `~/.ssh/config`. Le dossier `/var/www/html` appartient à `gre:www-data`.
- rsync est introuvable sur le serveur (apt cassé, Debian 11 sans support) : c'est pour ça qu'on passe par lftp. Le message « post-quantum » au moment de la connexion est sans effet.
- nginx renvoie `index.html` avec un code 200 pour tout fichier absent. Pour vérifier qu'un fichier existe en ligne, regarder son `content-type`, pas le code de réponse.
- Restes de l'ancien site encore sur le serveur, à effacer un jour avec Gilles : `docs/`, `thumbnails/`, `videos/`, `icons.svg`, `logo192.png`, `logo512.png`, `manifest.json`, `asset-manifest.json`, `posts/posts.js`.

## Décisions prises

- Accent orange : `#D9480F` en thème clair, le même orange que l'app CC Sudoku ; `#FF7A45` en thème sombre (HM-4). Contraste de 4,1:1 : à revoir si du texte courant passe en orange.
- Polices : Articulat CF et Artifex CF, servies par Adobe Fonts. La licence interdit de les héberger soi-même, sauf achat chez Connary Fagen (HM-15). Le site n'appelle aucun autre service.
- Image du hero : image Magnific (gratuite), créditée « Image : Magnific. » dans les mentions légales. À remplacer le jour où une image propre à Hammer & Marteau existe.
- Mentions légales : journaux nginx gardés 15 jours au plus (rotation quotidienne, 14 archives, HM-18). À garder vrai sur le futur VPS.
- Réseaux : X (@hammeretmarteau) et GitHub. LinkedIn, Facebook, Instagram et YouTube s'ajouteront quand les comptes existeront.

## Reste à faire (28 novembre)

- **Changer de VPS** (Debian 11 n'a plus de support) : la carte la plus lourde, à cadrer ensemble.
- HM-17 : pré-rendu des pages React, pour le référencement et les aperçus de lien. À cadrer.
- HM-30 : version anglaise. À cadrer.
- HM-26 : recherche dans le blog, plus tard.
- En attente de Gilles : validations (HM-2, HM-11, HM-18, HM-20, HM-28), réécriture de l'article, suppression de la branche `refactoring-claude` (HM-16).
- La présentation de la page Blog parle encore d'« inclusion en santé numérique » : à revoir avec Gilles.
