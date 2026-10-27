# Étape 2 : Le Solveur d'Unicité Ultra-Rapide (Dancing Links / DLX)

Ce document détaille la théorie et la mise en œuvre du solveur d'unicité fondé sur l'**Algorithme X de Donald Knuth** et la structure de données des **Dancing Links (DLX)**.

---

## 1. Formulation du Sudoku comme problème de Couverture Exacte

Un Sudoku $9 \times 9$ peut être modélisé comme un problème de **couverture exacte** (*Exact Cover Problem*). Le but est de sélectionner un sous-ensemble de lignes dans une matrice binaire de telle sorte que chaque colonne contienne exactement un `1`.

### 1.1. Les 324 Contraintes (Colonnes de la matrice)
Chaque grille de Sudoku comporte $324$ contraintes fondamentales :

1. **Contrainte de case** : Chaque case $(r, c)$ doit contenir exactement un chiffre ($81$ colonnes, indices $0$ à $80$).
2. **Contrainte de ligne** : Chaque ligne $r$ doit contenir chaque chiffre $d \in [1, 9]$ une fois ($81$ colonnes, indices $81$ à $161$).
3. **Contrainte de colonne** : Chaque colonne $c$ doit contenir chaque chiffre $d \in [1, 9]$ une fois ($81$ colonnes, indices $162$ à $242$).
4. **Contrainte de bloc** : Chaque bloc $3 \times 3$ $b$ doit contenir chaque chiffre $d \in [1, 9]$ une fois ($81$ colonnes, indices $243$ à $323$).

$$\text{Nombre total de colonnes} = 81 + 81 + 81 + 81 = 324$$

### 1.2. Les 729 Choix (Lignes de la matrice)
Chaque combinaison de placement d'un chiffre $d$ dans une case $(r, c)$ représente une possibilité de coup :

$$\text{Nombre total de choix} = 9 \text{ lignes} \times 9 \text{ colonnes} \times 9 \text{ chiffres} = 729 \text{ options}$$

Chaque ligne de la matrice binaire comporte exactement quatre `1`, correspondant aux quatre contraintes satisfaites par ce placement :

$$\text{Indices des contraintes pour } (r, c, d) : \begin{cases} 
C_1 = 9 \cdot r + c \\ 
C_2 = 81 + 9 \cdot r + (d - 1) \\ 
C_3 = 162 + 9 \cdot c + (d - 1) \\ 
C_4 = 243 + 9 \cdot \lfloor \frac{r}{3} \times 3 + \frac{c}{3} \rfloor + (d - 1) 
\end{cases}$$

---

## 2. La Structure de Données Dancing Links (DLX)

La matrice binaire $729 \times 324$ est extrêmement creuse ($98,77\,\%$ de zéros). Donald Knuth a introduit la structure **Dancing Links**, où chaque `1` de la matrice est représenté par un nœud dans un maillage de listes doublement chaînées toroïdales (circulaires).

### 2.1. Pointeurs d'un nœud DLX
Chaque nœud possède 4 pointeurs (`left`, `right`, `up`, `down`), un pointeur vers l'en-tête de sa colonne (`col`) et un identifiant de choix (`row_id`).

```
         ^
         |
    +----+----+
<---|  Node   |--->
    +----+----+
         |
         v
```

### 2.2. Opérations Fondamentales : Cover et Uncover

L'avantage majeur de DLX réside dans la vitesse des opérations de masquage (*Cover*) et démasquage (*Uncover*) sans destruction de mémoire :

#### Masquer une colonne $c$ (*Cover*) :
```c
c->right->left = c->left;
c->left->right = c->right;
for (Node *i = c->down; i != c; i = i->down) {
    for (Node *j = i->right; j != i; j = j->right) {
        j->down->up = j->up;
        j->up->down = j->down;
        j->col->size--;
    }
}
```

#### Démasquer une colonne $c$ (*Uncover*) :
Le démasquage réinsère les pointeurs exactement dans l'ordre inverse, restaurant l'état antérieur en complexité $\mathcal{O}(1)$ :
```c
for (Node *i = c->up; i != c; i = i->up) {
    for (Node *j = i->left; j != i; j = j->left) {
        j->col->size++;
        j->down->up = j;
        j->up->down = j;
    }
}
c->right->left = c;
c->left->right = c;
```

---

## 3. Utilisation pour le Moteur de Sudoku

Pour la génération de grilles par creusement symétrique, le moteur a besoin de vérifier si le retrait d'une paire de chiffres conserve l'**unicité de la solution**.

Grâce à DLX :
1. Si le solveur trouve **0 solution**, la grille est invalide.
2. Dès qu'il trouve **2 solutions**, la recherche s'arrête immédiatement (non-unicité).
3. La vérification prend en moyenne **moins de $0,1\text{ ms}$**, ce qui permet de tester des milliers de grilles par seconde.
