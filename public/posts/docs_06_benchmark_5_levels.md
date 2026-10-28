# Étape 6 : Protocoles et Résultats de Benchmark Multi-Niveaux

Ce document décrit le protocole d'évaluation et de benchmark du moteur C11 sur les **5 niveaux de difficulté certifiés Berthier-Royle**.

---

## 1. Spécifications des 5 Niveaux de Jeu

| Niveau | Nom | Score SE Visé ($SE$) | Nombre Max. d'Indices | Tentatives Max. |
| :---: | :--- | :---: | :---: | :---: |
| **1** | Débutant | $1.0 \le SE \le 1.5$ | $40$ | $100$ |
| **2** | Intermédiaire | $2.0 \le SE \le 3.2$ | $35$ | $100$ |
| **3** | Avancé | $3.3 \le SE \le 4.5$ | $31$ | $150$ |
| **4** | Expert | $4.6 \le SE \le 5.5$ | $27$ | $250$ |
| **5** | Maître | $SE \ge 5.6$ | $24$ | $500$ |

---

## 2. Objectifs de Performance

- **Stabilité** : Taux de réussite de $100\%$ sur les niveaux 1 à 3 en moins de $50\text{ ms}$.
- **Rigueur Logique** : Aucune grille générée ne doit violer l'unicité de la solution (vérifiée à chaque creusement par Dancing Links).
- **Symétrie Strictement Conservée** : Toutes les grilles produites garantissent la symétrie rotationnelle $\mathcal{S}_{180}$.
