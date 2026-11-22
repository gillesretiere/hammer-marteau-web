# Étape 7 : Analyse de la Symétrie Rotationnelle et des Limites de l'Évaluateur

Ce document explique l'exigence de la **symétrie rotationnelle ($\mathcal{S}_{180}$)** et diagnostique les échecs de génération sur les niveaux avancés (3, 4 et 5).

---

## 1. Pourquoi la Symétrie Rotationnelle est-elle Obligatoire ?

Dans un moteur de Sudoku de qualité commerciale (norme Gordon Royle) :

1. **Esthétique et Équilibre** : Chaque indice en position $(r, c)$ possède son symétrique exact en $(8-r, 8-c)$.
2. **Standard de l'Industrie** : Les grilles non symétriques sont considérées comme "brutes" ou non finies dans les publications académiques et les applications de référence.
3. **Contrainte de Génération** : Les 81 cases sont réduites à **41 entités de creusement** (la case centrale et 40 paires symétriques).

---

## 2. Diagnostic des Échecs sur les Niveaux 3, 4 et 5

La tentative de génération sur les niveaux 3, 4 et 5 a échoué pour deux raisons majeures :

### Raison 1 : Limite des Techniques Implémentées dans `solver_eval.c`
Actuellement, `solver_eval.c` n'implémente que 3 règles de résolution :
- **Naked Single** ($SE = 1.0$)
- **Hidden Single** ($SE = 1.5$)
- **Pointing Pairs** ($SE = 2.8$)

Lorsqu'une grille nécessite une règle d'un niveau supérieur (ex: *Naked Pair* $SE = 2.4$, *Naked Triple* $SE = 3.6$, *X-Wing* $SE = 3.8$), l'évaluateur s'arrête sans pouvoir finir la grille. 

Par conséquent, `eval.is_solvable` vaut `false`, et le générateur rejette la grille même si elle est parfaitement valide et intéressante !

### Raison 2 : Creusement Aveugle vs Creusement Dirigé
Plus le niveau $SE$ recherché est élevé, plus la probabilité de tomber sur la structure logique exacte par creusement aléatoire diminue.

---

## 3. Plan d'Action pour Débloquer les Niveaux 3, 4 et 5

1. **Enrichir `solver_eval.c`** : Ajouter les algorithmes de résolution pour :
   - *Naked Pairs / Hidden Pairs* ($SE = 2.0 - 2.4$)
   - *Box-Line Reduction* ($SE = 3.0$)
   - *Naked Triples* ($SE = 3.6$)
   - *X-Wing* ($SE = 3.8$)
2. **Ajuster le Générateur (`generator_royle.c`)** : Permettre au générateur d'accepter les grilles dont la résolution logique nécessite ces nouvelles techniques.
