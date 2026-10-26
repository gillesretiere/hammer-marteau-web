# Refonte d'un moteur de Sudoku déterministe et pédagogique : de la théorie de Berthier-Royle à l'implémentation logicielle
Auteur : Équipe de Développement Sudoku Engine
Statut : Document Spécificatif et Méthodologique — Phase 2
## Résumé (Abstract)
Ce document établit la méthodologie de refonte intégrale d'un moteur de jeu de Sudoku en langage C, destiné à une exploitation commerciale et pédagogique multi-plateforme. Après la validation d'un prototype multi-interface (CLI, Raylib, Flutter), nous formalisons un générateur déterministe basé sur les travaux de Denis Berthier (classification formelle des règles logiques et SE Rating) et de Gordon Royle (symétrie rotationnelle à 180° et ensembles d'indices irréductibles). L'architecture proposée garantit l'unicité de la solution, l'élégance visuelle des grilles et une progression pédagogique rigoureuse adaptée à l'apprentissage des stratégies avancées.
Mots-clés : Sudoku Engine, Denis Berthier, Gordon Royle, SE Rating, Symétrie Rotationnelle, Exact Cover, Langage C, FFI.
1. Introduction
La première phase du projet a démontré la faisabilité technique d'une architecture hybride : un backend haute performance écrit en C, interfacé via FFI (Foreign Function Interface) avec des frontends modernes (Flutter, Raylib, CLI). Cependant, les tests utilisateurs révèlent une limite majeure des générateurs heuristiques classiques : l'inconstance de la qualité et de la difficulté des grilles générées.
Pour créer une expérience commerciale de niveau professionnel, la difficulté ne doit plus être mesurée empiriquement par le nombre d'indices restants, mais par la complexité théorique maximale des stratégies logiques indispensables à la résolution.
2. Cadre Théorique (Theoretical Framework)
2.1. Les travaux de Denis Berthier et le Sudoku Explainer Rating (SE)
Denis Berthier, chercheur au CNRS et auteur de The Hidden Logic of Sudoku, a formalisé l'analyse du Sudoku par la théorie des ensembles et la logique de premier ordre. Ses travaux introduisent une hiérarchie stricte des motifs (patterns) :
Règles de niveau Single (SE∈[1.0,1.5]) : Naked Single, Hidden Single.
Règles de sous-ensembles (SE∈[2.0,3.5]) : Naked/Hidden Pairs, Triples, Quads, Pointing Pairs, Box-Line Reduction.
Règles de réseaux et chaînes simples (SE∈[4.0,5.5]) : X-Wing, Y-Wing (XY-Wing), Colors, Singles Chains.
Règles avancées de degré supérieur (SE∈[6.0,7.5]) : Swordfish, Unique Rectangle (Types 1 à 6), Jellyfish, XY-Chains.
Règles diaboliques (SE≥8.0) : Alternating Inference Chains (AIC), Forcing Chains, Trial & Error.
Règle fondamentale de Berthier : La difficulté d'une grille est égale au score SE de la règle la plus complexe strictement nécessaire pour la résoudre.

2.2. Les travaux de Gordon Royle et l'esthétique des structures
Gordon Royle (Université de Western Australia) a démontré l'existence de grilles minimales à 17 indices et a caractérisé les propriétés d'invariance des grilles de Sudoku. Pour notre application, nous retenons deux principes majeurs :
Invariance par Symétrie Rotationnelle (S 
180
​	
 ) : Tout retrait d'une case (r,c) doit s'accompagner du retrait simultané de sa case miroir (8−r,8−c).
Irréductibilité Logique : Une grille est irréductible au niveau L si le retrait d'une seule paire de cases supplémentaires détruit l'unicité de la solution ou fait grimper le niveau de difficulté requis au-delà du niveau ciblé.
3. Spécifications & Architecture de la Refonte
+-----------------------------------------------------------------+
|                         Nouveau Moteur C                        |
|                                                                 |
|  +--------------------+    +---------------------------------+  |
|  | Matrice Complète   | -> | Générateur Symétrique (Royle)  |  |
|  +--------------------+    +---------------------------------+  |
|                                            |                    |
|                                            v                    |
|  +--------------------+    +---------------------------------+  |
|  | Banque Validée     | <- | Évaluateur de Niveau (Berthier) |  |
|  +--------------------+    +---------------------------------+  |
+-----------------------------------------------------------------+
3.1. Structure du Moteur C Refondu
Le nouveau moteur se compose de quatre modules indépendants :
core_board : Gestion de la grille, des masques de candidats (champs de bits uint16_t) et des opérations fondamentales.
solver_dlx : Solveur d'unicité ultra-rapide basé sur l'algorithme des liens dansants (Dancing Links / DLX de Donald Knuth) pour garantir l'unicité lors du creusement.
solver_eval : Évaluateur logique pas à pas implémentant la hiérarchie de Berthier. Il certifie la grille et mesure la profondeur des coups.
generator_royle : Algorithme de génération par creusement symétrique S 
180
​	
  avec test d'irréductibilité.
3.2. Critères Qualité pour chaque Niveau de Jeu
Niveau App	Appellation	Score SE Cible	Stratégies Requises	Nombre Max d'Indices
Niveau 1	Débutant	1.0−1.5	Singles exclusifs	36−40
Niveau 2	Intermédiaire	2.0−3.2	Paires, Pointing Pairs, Box-Line	32−35
Niveau 3	Avancé	3.3−4.5	Triplets, X-Wing, Y-Wing	28−31
Niveau 4	Expert	4.6−5.5	Swordfish, Rectangle Unique	24−27
Niveau 5	Maître	5.6−7.0	Multiple coups N3/N4 en chaîne	≤24
4. Plan de Développement Étape par Étape
Nous procéderons de manière incrémentale. Chaque étape donnera lieu à du code C documenté et explicité.
Étape 1 : Nettoyage et socle core_board
Définition de la structure SudokuBoard avec manipulation par masques binaires pour maximiser les performances.
Étape 2 : Implémentation du solveur d'unicité solver_dlx
Vérification instantanée qu'une grille possède une solution unique (nécessaire pour le creusement).
Étape 3 : Module d'évaluation logique solver_eval (Norme Berthier)
Réécriture propre des 11 algorithmes de détection sans aucune dépendance circulaire ni problème de type const.
Étape 4 : Générateur symétrique generator_royle
Mise en place de la boucle de creusement symétrique par paires de cases avec contrôle d'unicité et de score SE.
Étape 5 : Intégration FFI et mise à jour des interfaces (Flutter / Raylib / CLI)
Mise à jour de la bibliothèque partagée .so / .dylib et exposition des nouvelles API C vers Dart et Raylib.
Étape 6 : Journal de bord & Documentation technique (Blog)
Rédaction d'articles vulgarisés accompagnant chaque avancée technique pour le journal de projet.
5. Perspectives Commerciales et Pédagogiques
L'atout majeur de cette refonte réside dans l'explicabilité. Contrairement aux applications qui se contentent de donner une réponse, notre moteur sera capable de :
Expliquer pourquoi une stratégie s'applique à un instant T.
Montrer visuellement les cases pivots et les candidats à éliminer.
Proposer un parcours d'apprentissage guidé, transformant un joueur débutant en expert grâce à des explications pas à pas fondées sur la rigueur de Berthier.