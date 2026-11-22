# Refonte d'un moteur de Sudoku déterministe et pédagogique: de la théorie de Berthier-Royle à l'implémentation logicielle

**Auteur:** Équipe de Développement Sudoku Engine  
**Statut:** Document Spécificatif et Méthodologique — Phase 2  

---

## Résumé (*Abstract*)
Ce document établit la méthodologie de refonte intégrale d'un moteur de jeu de Sudoku en langage C, destiné à une exploitation commerciale et pédagogique multi-plateforme. Après la validation d'un prototype multi-interface (CLI, Raylib, Flutter), nous formalisons un générateur déterministe basé sur les travaux de Denis Berthier (classification formelle des règles logiques et *SE Rating*) et de Gordon Royle (symétrie rotationnelle à 180° et ensembles d'indices irréductibles). L'architecture proposée garantit l'unicité de la solution, l'élégance visuelle des grilles et une progression pédagogique rigoureuse adaptée à l'apprentissage des stratégies avancées.

**Mots-clés:** Sudoku Engine, Denis Berthier, Gordon Royle, SE Rating, Symétrie Rotationnelle, Exact Cover, Langage C, FFI.

---

## 1. Introduction

La première phase du projet a démontré la faisabilité technique d'une architecture hybride: un backend haute performance écrit en C, interfacé via FFI (*Foreign Function Interface*) avec des frontends modernes (Flutter, Raylib, CLI). Cependant, les tests utilisateurs révèlent une limite majeure des générateurs heuristiques classiques: l'inconstance de la qualité et de la difficulté des grilles générées.

Pour créer une expérience commerciale de niveau professionnel, la difficulté ne doit plus être mesurée empiriquement par le nombre d'indices restants, mais par la **complexité théorique maximale des stratégies logiques indispensables à la résolution**.

---

## 2. Cadre Théorique (*Theoretical Framework*)

### 2.1. Les travaux de Denis Berthier et le *Sudoku Explainer Rating* (SE)
Denis Berthier, chercheur au CNRS et auteur de *The Hidden Logic of Sudoku*, a formalisé l'analyse du Sudoku par la théorie des ensembles et la logique de premier ordre. Ses travaux introduisent une hiérarchie stricte des motifs (*patterns*):

1. **Règles de niveau Single ($SE \in [1.0, 1.5]$):** *Naked Single*, *Hidden Single*.
2. **Règles de sous-ensembles ($SE \in [2.0, 3.5]$):** *Naked/Hidden Pairs*, *Triples*, *Quads*, *Pointing Pairs*, *Box-Line Reduction*.
3. **Règles de réseaux et chaînes simples ($SE \in [4.0, 5.5]$):** *X-Wing*, *Y-Wing* (*XY-Wing*), *Colors*, *Singles Chains*.
4. **Règles avancées de degré supérieur ($SE \in [6.0, 7.5]$):** *Swordfish*, *Unique Rectangle* (Types 1 à 6), *Jellyfish*, *XY-Chains*.
5. **Règles diaboliques ($SE \ge 8.0$):** *Alternating Inference Chains* (AIC), *Forcing Chains*, *Trial & Error*.

> **Règle fondamentale de Berthier:** La difficulté d'une grille est égale au score $SE$ de la règle la plus complexe **strictement nécessaire** pour la résoudre.

### 2.2. Les travaux de Gordon Royle et l'esthétique des structures
Gordon Royle (Université de Western Australia) a démontré l'existence de grilles minimales à 17 indices et a caractérisé les propriétés d'invariance des grilles de Sudoku. Pour notre application, nous retenons deux principes majeurs:

1. **Invariance par Symétrie Rotationnelle ($\mathcal{S}_{180}$):** Tout retrait d'une case $(r, c)$ doit s'accompagner du retrait simultané de sa case miroir $(8-r, 8-c)$.
2. **Irréductibilité Logique:** Une grille est irréductible au niveau $L$ si le retrait d'une seule paire de cases supplémentaires détruit l'unicité de la solution ou fait grimper le niveau de difficulté requis au-delà du niveau ciblé.

---

## 3. Spécifications & Architecture de la Refonte

```
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
```

### 3.1. Structure du Moteur C Refondu
Le nouveau moteur se compose de quatre modules indépendants:
* **`core_board`**: Gestion de la grille, des masques de candidats (champs de bits `uint16_t`) et des opérations fondamentales.
* **`solver_dlx`**: Solveur d'unicité ultra-rapide basé sur l'algorithme des liens dansants (*Dancing Links* / DLX de Donald Knuth) pour garantir l'unicité lors du creusement.
* **`solver_eval`**: Évaluateur logique pas à pas implémentant la hiérarchie de Berthier. Il certifie la grille et mesure la profondeur des coups.
* **`generator_royle`**: Algorithme de génération par creusement symétrique $\mathcal{S}_{180}$ avec test d'irréductibilité.

### 3.2. Critères Qualité pour chaque Niveau de Jeu

| Niveau App | Appellation | Score $SE$ Cible | Stratégies Requises | Nombre Max d'Indices |
|:--- |:--- |:--- |:--- |:--- |
| **Niveau 1** | Débutant | $1.0 - 1.5$ | *Singles* exclusifs | $36 - 40$ |
| **Niveau 2** | Intermédiaire | $2.0 - 3.2$ | *Paires*, *Pointing Pairs*, *Box-Line* | $32 - 35$ |
| **Niveau 3** | Avancé | $3.3 - 4.5$ | *Triplets*, *X-Wing*, *Y-Wing* | $28 - 31$ |
| **Niveau 4** | Expert | $4.6 - 5.5$ | *Swordfish*, *Rectangle Unique* | $24 - 27$ |
| **Niveau 5** | Maître | $5.6 - 7.0$ | Multiple coups N3/N4 en chaîne | $\le 24$ |

---

## 4. Plan de Développement Étape par Étape

Nous procéderons de manière incrémentale. Chaque étape donnera lieu à du code C documenté et explicité.

1. **Étape 1: Nettoyage et socle `core_board`**  
   Définition de la structure `SudokuBoard` avec manipulation par masques binaires pour maximiser les performances.
2. **Étape 2: Implémentation du solveur d'unicité `solver_dlx`**  
   Vérification instantanée qu'une grille possède une solution unique (nécessaire pour le creusement).
3. **Étape 3: Module d'évaluation logique `solver_eval` (Norme Berthier)**  
   Réécriture propre des 11 algorithmes de détection sans aucune dépendance circulaire ni problème de type `const`.
4. **Étape 4: Générateur symétrique `generator_royle`**  
   Mise en place de la boucle de creusement symétrique par paires de cases avec contrôle d'unicité et de score $SE$.
5. **Étape 5: Intégration FFI et mise à jour des interfaces (Flutter / Raylib / CLI)**  
   Mise à jour de la bibliothèque partagée `.so` / `.dylib` et exposition des nouvelles API C vers Dart et Raylib.
6. **Étape 6: Journal de bord & Documentation technique (Blog)**  
   Rédaction d'articles vulgarisés accompagnant chaque avancée technique pour le journal de projet.

---

## 5. Perspectives Commerciales et Pédagogiques

L'atout majeur de cette refonte réside dans l'**explicabilité**. Contrairement aux applications qui se contentent de donner une réponse, notre moteur sera capable de:
* Expliquer **pourquoi** une stratégie s'applique à un instant $T$.
* Montrer visuellement les cases pivots et les candidats à éliminer.
* Proposer un parcours d'apprentissage guidé, transformant un joueur débutant en expert grâce à des explications pas à pas fondées sur la rigueur de Berthier.

# Étape 1 — Module `core_board` : Théorie et Masques Binaires (*Bitmasks*)

## 1. Présentation du Module

Le module `core_board` constitue la brique de base fondamentale du nouveau moteur de Sudoku en langage C. Sur ce socle reposeront la totalité des solveurs de la Phase 2 (solveur d'unicité DLX, évaluateur logique SE de Berthier) ainsi que le générateur symétrique à 180° (Royle).

Son rôle principal est de fournir :
1. Une représentation compacte et performante du plateau de jeu 9x9 en mémoire.
2. Une gestion ultra-rapide des candidats d'une case grâce aux **opérations bit à bit** (*bitmasks*).

---

## 2. Pourquoi abandonner les tableaux classiques au profit des masques binaires ?

Dans une approche naïve, les candidats possibles d'une case de Sudoku sont souvent stockés dans un tableau de 9 booléens (`bool candidates[9]`) ou un tableau d'entiers. Cette méthode présente deux inconvénients majeurs :
* **Empreinte mémoire excessive** : 9 octets par case, soit $9 \times 81 = 729$ octets pour un plateau entier.
* **Lenteur des itérations** : Pour ajouter, supprimer ou tester un candidat, le processeur doit exécuter une boucle `for` de 1 à 9.

En utilisant un **entier non signé de 16 bits** (`uint16_t`), l'empreinte mémoire d'une case tombe à 2 octets (soit 162 octets pour la grille complète), et **toutes les opérations logiques s'exécutent en un seul cycle d'horloge processeur**.

---

## 3. Représentation Binaire des Chiffres

Dans un entier de 16 bits, chaque bit à partir du bit 1 représente la présence ou l'absence d'un chiffre candidat dans la case :
* Bit $1 = 1 \implies$ Le chiffre **1** est candidat.
* Bit $2 = 1 \implies$ Le chiffre **2** est candidat.
* ...
* Bit $9 = 1 \implies$ Le chiffre **9** est candidat.
* Bit $0$ et Bits $10 \dots 15$ restent inutilisés.

### Schéma de la structure binaire d'une case (`uint16_t candidates`)

```text
  Bits inutilisés       Chiffres candidats (9 à 1)     Inutilisé
+-----------------+-----------------------------------+---+
| 15 14 13 12 11 10 | 9   8   7   6   5   4   3   2   1 | 0 |  <- Position des bits
+-----------------+-----------------------------------+---+
|  0  0  0  0  0  0 | 0   0   1   0   0   0   1   0   1 | 0 |  <- Exemple de masque
+-----------------+-----------------------------------+---+
                          ^           ^       ^
                          |           |       |
                      Candidat 7  Candidat 3  Candidat 1
```

### Formule Mathématique de Décalage

Pour positionner un candidat $v \in [1, 9]$ à sa place binaire, on utilise l'opérateur de décalage à gauche (`<<`) :
$$\text{Masque}(v) = 1U \ll v$$

#### Exemple concret :
Si une case peut contenir les chiffres $1$, $3$ et $7$ :
$$\text{Masque Total} = (1U \ll 1) \mid (1U \ll 3) \mid (1U \ll 7)$$
$$\text{Masque Total} = 0000\,0000\,0000\,0010_2 \mid 0000\,0000\,0000\,1000_2 \mid 0000\,0000\,1000\,0000_2$$
$$\text{Masque Total} = 0000\,0000\,1000\,1010_2 = 138_{10}$$

---

## 4. Masque Intégral (*FULL_CANDIDATES_MASK*)

Au démarrage d'une grille ou pour une case vide non contrainte, tous les chiffres de 1 à 9 sont candidats. Le masque correspondant possède les bits 1 à 9 positionnés à $1$ :

$$\text{FULL\_CANDIDATES\_MASK} = \sum_{v=1}^{9} (1U \ll v) = 0000\,0011\,1111\,1110_2 = 0x03FE_{16} = 1022_{10}$$

---

## 5. Synthèse des Opérations Bitwise (*Bitwise Operations*)

Le tableau suivant récapitule la correspondance entre la logique Sudoku et les instructions assembleur/C générées :

| Opération Sudoku | Expression Bitwise C | Décomposition Logique | Explication |
| :--- | :--- | :--- | :--- |
| **Ajouter un candidat $v$** | `mask \|= (1U << v)` | $A \lor B$ (OU bit à bit) | Active le bit $v$ sans modifier les autres bits. |
| **Retirer un candidat $v$** | `mask &= ~(1U << v)` | $A \land \neg B$ (ET avec masque inversé) | Force le bit $v$ à $0$ tout en conservant les autres bits. |
| **Tester la présence de $v$** | `(mask & (1U << v)) != 0` | $A \land B \neq 0$ | Retourne `true` si le bit $v$ est positionné à $1$. |
| **Compter les candidats** | `__builtin_popcount(mask)` | Instruction CPU *POPCNT* | Compte instantanément le nombre total de bits à $1$. |
| **Extraire l'unique candidat** | `__builtin_ctz(mask)` | Instruction CPU *CTZ* (*Count Trailing Zeros*) | Compte le nombre de zéros avant le premier bit à 1 pour obtenir directement la valeur du chiffre. |

---

## 6. Fonctions Intrinsèques du Processeur (*Built-ins*)

Pour garantir des performances maximales lors du creusement et du solving, nous tirons parti des instructions matérielles du processeur via les fonctions intrinsèques du compilateur (`gcc` / `clang`) :

1. **`__builtin_popcount(unsigned int x)`** :
   Exécute directement l'instruction assembleur `POPCNT` sur l'architecture x86/ARM. Elle permet de savoir en un cycle si une case est un *Naked Single* (`popcount == 1`).

2. **`__builtin_ctz(unsigned int x)`** :
   Exécute l'instruction `CTZ` (*Count Trailing Zeros* / `TZCNT`). Pour un masque ayant un seul candidat comme $0000\,0000\,0000\,1000_2$ (chiffre 3), `__builtin_ctz` retourne directement `3`, éliminant le besoin de faire une boucle de recherche.

