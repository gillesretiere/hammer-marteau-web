# Étape 3 : L'Évaluateur Logique Formel (SE Rating - Norme Berthier)

Ce document détaille la théorie et l'implémentation du module d'évaluation de la difficulté des grilles de Sudoku selon les travaux de **Denis Berthier** et l'échelle **SE Rating** (*Sudoku Explainer Rating*).

---

## 1. Principes Théoriques

Contrairement aux approches heuristiques basées sur le nombre de cases vides, la méthode de Berthier évalue la difficulté par la **stratégie la plus complexe strictement nécessaire** pour résoudre la grille.

### 1.1. L'Échelle SE (Sudoku Explainer Rating)

Le score de difficulté est attribué selon la hiérarchie suivante :

| Stratégie Logique | Score SE Base | Niveau App |
| :--- | :--- | :--- |
| **Naked Single / Hidden Single** | $1.0 - 1.5$ | Niveau 1 (Débutant) |
| **Naked Pair / Hidden Pair** | $2.0 - 2.8$ | Niveau 2 (Intermédiaire) |
| **Pointing Pairs / Box-Line Reduction** | $2.8 - 3.2$ | Niveau 2 (Intermédiaire) |
| **Naked Triple / Hidden Triple** | $3.3 - 3.8$ | Niveau 3 (Avancé) |
| **X-Wing** | $3.8 - 4.2$ | Niveau 3 (Avancé) |
| **Y-Wing (XY-Wing)** | $4.2 - 4.6$ | Niveau 3 (Avancé) |
| **Unique Rectangle (Types 1-6)** | $4.5 - 5.0$ | Niveau 4 (Expert) |
| **Swordfish** | $5.2 - 5.6$ | Niveau 4 (Expert) |
| **Chains / AIC / Forcing Chains** | $6.0 - 8.0+$ | Niveau 5 (Maître) |

---

## 2. Algorithme de Simulation Pas à Pas

Le module `solver_eval` simule la résolution complète d'un joueur humain :

1. À chaque étape, l'évaluateur recherche la règle la plus simple disponible ($SE$ croissant).
2. Dès qu'une règle élimine des candidats ou pose un chiffre, la modification est appliquée sur une copie de la grille.
3. Le score maximal de la règle utilisée durant toute la partie détermine la **difficulté globale (SE Max)** de la grille.
4. Le nombre de coups complexes successifs définit la **densité de réflexion**.

---

## 3. Utilisation pour le Générateur Symétrique

Une grille de Niveau 5 professionnelle ne doit pas seulement contenir un *Swordfish* isolé, mais une succession de déductions exigeantes sans déblocage immédiat par des règles simples.
