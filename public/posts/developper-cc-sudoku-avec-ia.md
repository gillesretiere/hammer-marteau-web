---
title: "Développer CC Sudoku avec l'IA"
date: '2026-11-23'
tags: ['IA', 'Sudoku', 'Développement']
excerpt: Trois semaines pour passer d'un prototype à une app iPhone et iPad, avec une IA qui écrit le code et un humain qui décide. Ce qui a marché, et ce qui a demandé de reprendre la main.
---

<!-- PREMIER JET rédigé par Claude le 23 novembre, à partir du dépôt de l'app. À relire et à réécrire par Gilles avant toute mise en ligne. Les passages entre crochets sont à compléter. -->

CC Sudoku est un sudoku pour iPhone et iPad qui explique chaque coup au lieu de donner la réponse. Il est aujourd'hui en test, avant sa sortie sur l'App Store. Je l'ai développé avec Claude, l'IA d'Anthropic, qui a écrit l'essentiel du code. Voici comment nous nous sommes partagé le travail, et ce que j'en retiens.

## Le point de départ

L'idée vient d'un constat simple : les applications de sudoku donnent la solution quand on bloque, ou un indice si vague qu'il ne sert à rien. Je voulais l'inverse : une app qui, au moment du blocage, nomme la technique qui permet d'avancer, montre où regarder, et laisse le joueur trouver.

Un premier prototype existait depuis le printemps : un moteur de résolution écrit en C, essayé avec plusieurs interfaces. La version actuelle a été construite en trois semaines, du 2 au 22 novembre 2026 : 53 étapes enregistrées, un moteur en C d'environ 4 000 lignes (sans compter la banque de grilles, produite automatiquement) et une interface Flutter d'environ 6 000 lignes.

## Le partage des rôles

La règle a été la même du premier au dernier jour : l'IA propose et écrit, je décide et j'essaie.

- **Claude** écrit le code, le moteur comme l'interface, rédige les documents de travail (échelle des niveaux, fiche App Store, dossiers de revue) et vérifie lui-même ce qu'il peut vérifier : tests du moteur, compilation, captures d'écran.
- **Moi**, je fixe le cap, je tranche entre les propositions et je joue. Chaque version passe sur mon iPhone et mon iPad. Mes remarques deviennent la liste de corrections du lendemain.
- **La musique** est restée de mon côté : les sons et les timbres du final ont été composés dans GarageBand.

[Une phrase sur ce que ce partage a changé pour toi : rythme, fatigue, plaisir.]

## Ce qui a bien marché

**Mesurer la difficulté par le raisonnement.** Beaucoup de jeux classent une grille au nombre de cases vides. CC Sudoku la classe d'après la technique la plus difficile qu'elle exige vraiment : des singles au niveau Débutant, puis les paires, les X-Wing et Y-Wing, jusqu'aux longues chaînes du niveau Diabolique. Six niveaux en tout. L'IA a été précieuse pour implémenter une quarantaine de techniques et pour vérifier, grille par grille, que le classement tenait.

**Produire les grilles à l'avance.** Générer une grille difficile et de bonne qualité prend du temps. Plutôt que de faire chauffer le téléphone, les grilles sont produites sur ordinateur, triées par niveau et embarquées dans l'app. Chaque partie déguise ensuite la grille (chiffres, lignes, colonnes) sans changer sa difficulté.

**Un indice en trois temps.** Expliquer (le nom de la technique et la zone où regarder), Voir (les cases du motif, en couleur), Appliquer (le coup est joué). Le moteur en C fournit le raisonnement, l'interface le met en scène. C'est le cœur de l'app, et c'est là que l'aller-retour entre l'IA et le jeu réel a le plus servi.

**Écrire avant de coder.** Pour chaque chantier (les niveaux, le son, l'écran de l'iPad), un court document d'intention est venu d'abord. Il m'a permis de valider la direction avant que la moindre ligne soit écrite, et de revenir dessus quand le résultat ne me plaisait pas.

## Ce qui a demandé de reprendre la main

**L'IA ne joue pas.** Elle peut prouver qu'une grille est « de niveau 4 », pas qu'elle est agréable à jouer. Certaines grilles techniquement difficiles se résolvaient en fait d'un seul coup heureux. Il a fallu ajouter des seuils de qualité (assez d'étapes avancées, peu de raccourcis), et c'est en jouant que je les ai repérées.

**L'écran réel.** Une interface correcte sur le simulateur peut être pénible sur un iPhone 13 mini ou un iPad en paysage : cases trop petites, pavé mal placé, texte trop serré. Les revues sur appareil ont produit une bonne partie des corrections.

**Savoir s'arrêter.** L'IA propose volontiers une option de plus, un réglage de plus. Le travail consiste aussi à dire non, et à garder l'app calme et lisible.

[Un exemple concret où tu as dû contredire ou recadrer l'IA.]

## Ce que j'en retiens

L'IA ne remplace ni l'idée ni le jugement. Elle fait disparaître une grande partie du temps entre une décision et son résultat à l'écran. Cela change la façon de travailler : on essaie davantage, on jette plus facilement, et on passe plus de temps à juger qu'à fabriquer.

[Ta conclusion personnelle, en une ou deux phrases.]

CC Sudoku sera bientôt sur l'App Store. En attendant, la présentation de l'app est sur [la page CC Sudoku](/cc-sudoku/).
