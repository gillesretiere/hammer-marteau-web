#!/bin/sh
# Envoi du site sur le serveur (npm run deploy:test, npm run deploy).
# - Construit le site, puis copie build/ dans /var/www/html par SFTP avec lftp.
# - N'efface jamais rien sur le serveur (pas de --delete) : livrets, vidéos et fichiers
#   déposés à la main restent en place. Le ménage se fait à part, fichier par fichier.
# - Les brouillons sont déjà retirés par le build (HM-28).
# - L'avertissement « post-quantum » vient du vieil OpenSSH du serveur : sans effet.
# - Connexion : l'hôte et la clé viennent de ~/.ssh/config (id_ed25519_hammer).
# Usage : scripts/envoyer.sh --test   (simulation, rien n'est envoyé)
#         scripts/envoyer.sh           (envoi pour de bon)
set -e
cd "$(dirname "$0")/.."

HOTE="vps-993f2b9f.vps.ovh.net"
DESTINATION="/var/www/html/"
SIMULATION=""
[ "$1" = "--test" ] && SIMULATION="--dry-run"

npm run build
find build -name .DS_Store -delete
chmod -R u=rwX,go=rX build

[ -n "$SIMULATION" ] && echo "Simulation : rien n'est envoyé." || echo "Envoi vers $HOTE:$DESTINATION"
lftp -c "set sftp:connect-program 'ssh -a -x -o BatchMode=yes'; set net:max-retries 2; set net:timeout 30; \
open -u gre, sftp://$HOTE; mirror -R $SIMULATION --exclude-glob .DS_Store --verbose=1 build/ $DESTINATION"
