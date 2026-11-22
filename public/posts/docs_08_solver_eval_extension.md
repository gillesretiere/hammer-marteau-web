# Étape 8 : Extension des Règles Logiques Avancées (Y-Wing et Swordfish)

Ce document détaille l'implémentation des techniques de résolution avancées dans `solver_eval.c` permettant de valider les grilles de **Niveau 4 (Expert)** et **Niveau 5 (Maître)**.

---

## 1. Principes des Nouvelles Techniques

### 1.1. Y-Wing (XY-Wing) — $SE = 4.2$
Le **Y-Wing** repose sur un pivot et deux "pinces" (pincers) contenant toutes exactement 2 candidats (bivaluées) :
- **Pivot** : Case $P$ avec les candidats $\{A, B\}$.
- **Pince 1** : Case $P_1$ voyant $P$ avec les candidats $\{A, C\}$.
- **Pince 2** : Case $P_2$ voyant $P$ avec les candidats $\{B, C\}$.
- **Conséquence** : Quelle que soit la valeur finale du Pivot ($A$ ou $B$), l'une des deux pinces contiendra nécessairement le chiffre $C$. Toute case voyant simultanément $P_1$ et $P_2$ ne peut plus contenir le candidat $C$.

---

### 1.2. Swordfish — $SE = 5.2$
Le **Swordfish** est la généralisation du X-Wing sur 3 lignes et 3 colonnes :
- On identifie 3 lignes où un chiffre candidat $d$ n'apparaît que 2 ou 3 fois par ligne.
- Si l'ensemble des positions de ces candidats s'aligne sur exactement 3 colonnes distinctes, alors le candidat $d$ ne peut se trouver nulle part ailleurs dans ces 3 colonnes.
- **Conséquence** : Le candidat $d$ est supprimé de toutes les autres cases des 3 colonnes ciblées.

---

## 2. Impact sur l'Évaluateur SE

En ajoutant ces deux patterns :
1. L'évaluateur `solver_eval` débloque les grilles nécessitant des déductions de niveau $SE \ge 4.2$ et $SE \ge 5.2$.
2. La condition `eval.is_solvable` passe à `true` sur des grilles plus complexes sans faire échouer la génération par faux négatif.
