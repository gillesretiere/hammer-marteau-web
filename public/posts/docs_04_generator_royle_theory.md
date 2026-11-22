# Étape 4 : Le Générateur Symétrique Irréductible (Norme Royle)

Ce document détaille la théorie et la mise en œuvre du module de génération de grilles de Sudoku par **creusement symétrique à $180^\circ$ ($\mathcal{S}_{180}$)** et **contrôle d'irréductibilité formelle**.

---

## 1. Principes Théoriques et Esthétiques

Selon les travaux de **Gordon Royle** (Université de Western Australia), l'esthétique et la structure d'une grille de qualité commerciale reposent sur deux principes fondamentaux :

### 1.1. Symétrie Rotationnelle ($\mathcal{S}_{180}$)
Chaque case retirée à la position $(r, c)$ impose le retrait simultané de sa case miroir par rotation de $180^\circ$ autour du centre du plateau $(4, 4)$ :

$$(r', c') = (8 - r, 8 - c)$$

- **Case centrale** : La case $(4, 4)$ est son propre miroir.
- **Paires de cases** : Les 80 autres cases forment $40$ paires symétriques distinctes.
- **Total de paires à tester** : $41$ entités de creusement.

### 1.2. Irréductibilité et Unicité Stricte
Une grille est dite **irréductible pour un niveau donné** si le retrait de n'importe quelle paire de cases supplémentaire :
1. Soit rend la grille invalide (plus d'unicité de solution, détecté via DLX en $<0,1\text{ ms}$).
2. Soit fait chuter le score de difficulté $SE$ en dessous de la plage visée.

---

## 2. Algorithme de Génération par Creusement

```
[ Matrice Complète 9x9 Révolue ]
               |
               v
     [ Mélange des 41 Paires ]
               |
               v
   +---> [ Effacer Paire (r, c) et (8-r, 8-c) ]
   |           |
   |           v
   |     { Solution Unique ? (DLX) }
   |      /                     \
   |    Non                     Oui
   |    /                         \
   | [Restaurer Paire]      [Garder Effacé]
   |    \                         /
   +----<------+-----------------+
               |
               v
  [ Évaluation SE (Berthier) & Nb Indices ]
               |
               v
   { Conforme au Niveau Cible ? } ---> Oui ---> [ Grille Validée ]
```

---

## 3. Paramètres par Niveau de Jeu

| Niveau | Difficulté | Score SE Vise | Nb Max Indices |
| :--- | :--- | :--- | :--- |
| **Niveau 1** | Débutant | $1.0 \le SE \le 1.5$ | $36 - 40$ |
| **Niveau 2** | Intermédiaire | $2.0 \le SE \le 3.2$ | $32 - 35$ |
| **Niveau 3** | Avancé | $3.3 \le SE \le 4.5$ | $28 - 31$ |
| **Niveau 4** | Expert | $4.6 \le SE \le 5.5$ | $24 - 27$ |
| **Niveau 5** | Maître | $SE \ge 5.6$ | $\le 24$ |
