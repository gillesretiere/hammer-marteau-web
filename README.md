# hammer-marteau.com

Site de Hammer & Marteau : application Vite + React (react-router, Tailwind), plus quelques pages HTML statiques posées à côté.

## Travailler en local

```bash
npm install
npm run dev
```

## Où sont les contenus

| Contenu | Fichiers |
|---|---|
| Projets du portfolio | un `.md` par projet dans `public/portfolio-data/posts/`, listé dans `public/portfolio-data/index.json` |
| Articles du blog | un `.md` par article dans `public/posts/`, listé dans `public/posts/index.json` |
| Pages statiques | `public/cc-sudoku/` (page de l'app, Assistance, Confidentialité, version anglaise dans `en/`), `public/mentions-legales/` |

Un fichier `.md` absent de son `index.json` n'apparaît pas sur le site.

Les pages statiques n'appellent rien d'extérieur (polices du système, pas de script) et ne dépendent pas de l'application React. Les adresses `/cc-sudoku/assistance/` et `/cc-sudoku/confidentialite/` sont déclarées chez Apple : **elles ne doivent jamais changer**.

## Déployer

Depuis le Mac, dans ce dossier :

```bash
npm run deploy:test   # simulation : montre ce qui partirait, n'envoie rien
npm run deploy        # construit le site et l'envoie dans /var/www/html
```

`scripts/envoyer.sh` construit le site dans **`build/`**, puis le copie par SFTP avec lftp, en ajoutant et en remplaçant, **sans jamais supprimer**. Le serveur garde en effet des fichiers qui ne sont pas dans le dépôt : les livrets Saynètes dans `/assets/livrets/` et les vidéos dans `/assets/video/`. Les articles marqués `"statut": "brouillon"` dans `public/posts/index.json` sont retirés du build.

Après l'envoi, vérifier dans un navigateur : `/`, `/blog`, `/cc-sudoku/`, `/cc-sudoku/assistance/`, `/cc-sudoku/confidentialite/`, `/mentions-legales/`.

nginx sert d'abord un fichier ou un dossier existant (`index.html`), sinon l'application React (`try_files $uri $uri/ /index.html`). C'est ce qui permet aux pages statiques de vivre à côté de l'application.

`build/` n'est pas suivi par git.
