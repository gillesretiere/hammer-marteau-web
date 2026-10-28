# Étape 5 : Bilan de Validation et Performance du Moteur Phase 2

Ce document résume les résultats de validation du moteur C11 réarchitecturé, combinant la représentation par masques binaires (`core_board`), le résolveur DLX (`solver_dlx`), l'évaluateur logique SE (`solver_eval`) et le générateur symétrique (`generator_royle`).

---

## 1. Résultats de l'Exécution du Test

- **Temps de génération** : $0,002\text{ s}$ ($2\text{ ms}$)
- **Symétrie appliquée** : Rotationnelle à $180^\circ$ ($\mathcal{S}_{180}$)
- **Nombre d'indices** : $30$ (Cible $\le 32$)
- **Score SE Max** : $2,8$ (Cible $[2.8, 4.5]$)
- **Étapes logiques** : $14$
- **Résolubilité formelle** : Confirmée par déduction logique

---

## 2. Analyse Théorique de la Grille Générée

```text
+-------+-------+-------+
| 9 . 4 | 8 . 6 | . . 3 |
| . . . | . . . | . 1 . |
| 1 7 2 | . . . | . . . |
+-------+-------+-------+
| . . . | 7 . 5 | . 9 . |
| . 2 7 | 1 . 4 | 5 3 . |
| . 9 . | 6 . 2 | . . . |
+-------+-------+-------+
| . . . | . . . | 1 5 9 |
| . 1 . | . . . | . . . |
| 7 . . | 2 . 1 | 6 . 4 |
+-------+-------+-------+
```

### Vérification de la Symétrie Rotationnelle ($\mathcal{S}_{180}$)
Chaque case $(r, c)$ contenant un indice possède son pendant exact en $(8-r, 8-c)$ :
- Exemples : $(0,0)=9 \leftrightarrow (8,8)=4$, $(0,2)=4 \leftrightarrow (8,6)=6$, $(0,8)=3 \leftrightarrow (8,0)=7$, $(1,7)=1 \leftrightarrow (7,1)=1$.
- La case centrale $(4,4)$ est vide (symétrique par rapport à elle-même).

---

## 3. Conformité aux Exigences Commerciales

1. **Vitesse d'exécution** : Le couplage Dancing Links + Bitmasks permet de tester des dizaines de grilles par milliseconde.
2. **Irréductibilité** : Le creusement s'arrête exactement lorsque le retrait d'une paire supplémentaire détruirait l'unicité ou ferait chuter le score sous le seuil minimal.
3. **Explicabilité** : Le score $SE = 2.8$ garantit que la résolution nécessite la technique des *Pointing Pairs* (Paires orientées) sans recourir au devinage.
