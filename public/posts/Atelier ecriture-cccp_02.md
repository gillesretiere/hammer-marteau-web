---

## title: Atelier d'écriture 2/5 Démarrer un projet date: '2025-09-01' tags: \[ 'ecriture' \] draft: false summary: Un article où je décris mon expérience d'écriture en utilisant des techniques de structure narrative.

## Résumé

Dans le premier article sur l'écriture, j’ai montré l’importance de la structuration du récit, qui n’est pas une simple succession de chapitres, mais une suite d’étapes plus ou moins longues et qui correspondent à des jalons incontournables tout au long du récit. Ces étapes, entre 7 et 22, doivent être bien pensées et mises par écrit car c’est en fonction d’elles que se feront les chapitres. Il faut préciser qu’une étape ne vaut pas un chapitre, qu’il peut y avoir besoin de plusieurs chapitres pour structurer une même étape.   
J’ai également parlé du dynamisme des scènes ainsi que des arcs narratifs et des interactions portés par les personnages. C’est à ce niveau que se fait l’écriture, portée autant par la narration que par les dialogues entre personnages. On peut dire que l’intrigue est portée par les chapitres et que l’action est portée par les arcs narratifs dans chaque scène.  
Dans ce deuxième article, je vais montrer comment mettre en œuvre ces techniques. Pour cela, je présenterai les outils que j'ai choisi et comment les utiliser pour se lancer dans un projet d'écriture.

writing-process *Image by rawpixel.com on Freepik*

## Un mot sur les outils

Maintenant que nous avons défini une structure narrative qui peut s'adapter à une vingtaine de chapitres, et que nous avons compris l'importance du dynamisme des personnages pour chaque scène, il est temps de démarrer un projet qui servira d'exemple. Nous avons donc besoin de choisir des outils qui nous permettront de :

1. Décrire une structure narrative par chapitre  
2. Décrire un dynamisme des personnages par scène  
3. Visualiser le statut de chaque scène/chapitre sous forme de cartes (Kanban)  
4. Rédiger le contenu de chaque scène  
5. Assembler les scènes dans les chapitres

Il existe pléthore d'outils sur le marché, et il n'est pas dans mon intention ici de les passer en revue ni même de les noter. Disons que, pour faire simple, c'est à chacun de voir ce qui lui convient le mieux en fonction de ses besoins, de ses préférences et de son budget. Le kit que j'utilise et que je vais présenter est constitué de trois outils :

- \[Airtable\](https://airtable.com)  
- \[Notion\](https://notion.com)  
- \[Google Docs\](https://docs.google.com)

Je précise que les deux premiers sont assez proches et qu'il serait tout-à-fait possible d'en utiliser qu'un seul. Toutefois, il y a des différences qui me forcent à les utiliser tous les deux en parallèle, même si cela entraîne parfois un peu de redondance... En ce qui concerne le traitement de texte, j'ai choisi Google Docs mais évidemment c'est un choix qui n'engage que moi. Tout autre outil similaire ferait l'affaire.

---

## Création d'un projet

Nous utiliserons **Airtable** pour modéliser les scènes et les chapitres. L'intérêt de cet outil, outre le fait qu'il est disponible dans une version gratuite, est qu'il propose une visualisation sous forme de cartes et de tableaux, ainsi qu'un Kanban pour suivre le changement de statut et l'avancement.

Ceci va nous permettre de visualiser et organiser les scènes et les chapitres comme des cartes déplaçables, ce qui est parfait pour un thriller où il faut jongler avec l’ordre, les rebondissements et le dynamisme des personnages.

*Je tiens à préciser que je n’aborderai pas Notion et Google Docs ici, mais dans le prochain volet.*  
---

### Étape 1 : Créer les tables "Scènes" et “Chapitres” dans Airtable

Avant de configurer la vue Kanban, nous allons créer une table "Scènes" et une table “Chapitre” contenant les champs essentiels dans le cadre d’un roman. Il faut voir ça comme une feuille de tableur. 

##### Table Scène

| Nom du champ | Type de champ | Description/Exemple |
| :---- | :---- | :---- |
| Nom de la scène | Texte court | "Poursuite ruelle sombre" |
| Chapitre | Sélection unique | "Chapitre 1", "Chapitre 2", etc. (liste de 1 à 20\) |
| Statut | Sélection unique | "À écrire", "En cours", "Terminée", "À réviser" |
| Résumé | Texte long | "Alex fuit Léo dans une ruelle, trouve une arme." |
| Personnages | Texte court (multiple) | "Alex, Léo, Sara" |
| Lien Google Docs | URL | Lien vers le doc de la scène |
| Objectif narratif | Texte court | "Montrer la peur d’Alex, introduire un indice" |
| Mots (optionnel) | Nombre | "800" (pour suivre la progression vers 300 pages) |

- **Astuce :** Ajouter ces champs via le bouton "+" dans Airtable et remplir quelques scènes pour tester.

airtable-scene-table *Exemple de table Scènes dans Airtable*

***Note**: dans l'exemple, j'ai ajouté des champs supplémentaires, mais ils ne sont pas obligatoires.*

##### Table Chapitres

Pour la table “Chapitre”, nous procéderons de la même manière, le principe étant le même.

| Nom du champ | Type de champ | Description/Exemple |
| :---- | :---- | :---- |
| Nom du chapitre  | Texte court | Chapitre 1 |
| Etape | Sélection unique | Faiblesse/besoin |
| Objectif narratif | Texte long | Le chat a envie de squatter le tapis du chien, mais le chien n’est pas décidé à partir (obstacle). |
| Statut | Sélection unique | "À écrire", "En cours", "Terminée", "À réviser" |

Maintenant, voyons comment configurer une vue Kanban dans la table "Scènes" étape par étape, en optimisant pour le projet de 20 chapitres et 300 pages.  
---

### Étape 2 : Créer la vue Kanban

1. Ouvrir la table **"Scènes"** dans Airtable.  
2. Cliquer sur **"Vues"** (à gauche ou en haut selon l'interface).  
3. Sélectionner **"Ajouter une vue"** \> **"Kanban"**.  
4. La nommer (ex. : "Kanban Scènes").

---

### Étape 3 : Configurer les colonnes du Kanban

Le Kanban organise les cartes (scènes) en colonnes. Il faut choisir un champ pour définir ces colonnes. Voici les meilleures options :

#### Option 1 : Colonnes par "Statut" (recommandé)

- **Champ à sélectionner:** "Statut".  
- **Résultat:** Les scènes seront triées en colonnes comme "À écrire", "En cours", "Terminée", "À réviser".  
- **Pourquoi ?** Ça permet de suivre l’avancement de l’écriture et de déplacer facilement une scène d’une étape à l’autre (ex. : glisser "Poursuite ruelle sombre" de "En cours" à "Terminée" une fois finie dans Google Docs).  
- **Configuration:**  
  1. Dans la vue Kanban, cliquer sur **"Empiler par"** (ou "Stack by") et choisir "Statut".  
  2. Les colonnes apparaîtront automatiquement selon les options du champ "Statut".

airtable-scene-kanban *Exemple de Kanban Scènes dans Airtable, organisé par statut*

#### Option 2 : Colonnes par "Chapitre"

- **Champ à sélectionner:** "Chapitre".  
- **Résultat:** Une colonne par chapitre (Chapitre 1, Chapitre 2, etc.), avec les scènes correspondantes empilées dedans.  
- **Pourquoi?** Utile pour voir la répartition des scènes par chapitre et réorganiser leur ordre au sein d’un chapitre.  
- **Configuration:**  
  1. Choisir "Chapitre" dans "Empiler par".  
  2. La vue affiche 20 colonnes (une par chapitre), et on pourra déplacer une scène d’un chapitre à un autre si besoin.

#### Quelle option choisir ?

- **"Statut"** est idéal pour gérer le processus d’écriture au quotidien.  
- **"Chapitre"** est parfait pour planifier la structure globale du roman.  
- **Solution hybride:** Configure deux vues Kanban (une pour "Statut", une pour "Chapitre") pour jongler entre les deux perspectives.

*Note : c'est cette solution (hybride) que j'utilise.*

---

### Étape 4 : Personnaliser les cartes Kanban

Chaque carte représente une scène. Conseil pour les rendre visuelles et pratiques :

1. Cliquer sur **"Personnaliser les cartes"** (icône en haut à droite de la vue Kanban).  
2. Ajouter les champs à afficher sur chaque carte :  
   - **Nom de la scène** (titre principal).  
   - **Résumé** (pour un aperçu rapide).  
   - **Personnages** (pour voir qui est impliqué).  
   - **Lien Google Docs** (cliquable pour ouvrir directement le doc).  
   - **Mots** (pour suivre la progression).  
3. Activer **"Afficher les champs vides"** si on veut repérer les scènes incomplètes.

### Astuces

- **Filtrer les vues:** Ajouter un filtre dans le Kanban (ex. : "Chapitre \= Chapitre 5") pour se concentrer sur un chapitre spécifique.  
- **Couleurs:** Si besoin, utiliser un champ "Priorité" (ex. : "Haute", "Basse") avec des conditions de couleur pour repérer les scènes clés.  
- **Dynamisme des personnages:** Ajouter un champ "Dynamisme" (texte long) pour noter les objectifs et changements de chaque personnage par scène.

---

## Conclusion

Voici notre projet articulé \! Cette façon de structurer les liens entre le **schéma narratif**, les **chapitres**, les **scènes**, et le **dynamisme des personnages** est cohérente et parfaitement adaptée à un thriller ou un roman. Voici quelques propositions acceptables et qu'il faut retenir :

1. **Un chapitre s’inscrit dans le schéma narratif**  
     
   - En effet, le chapitre est une unité plus large qui fait avancer le schéma narratif global (comme les 7 ou 22 étapes de Truby qu’on a évoquées). Par exemple, un chapitre peut couvrir une étape comme "Bataille" ou "Révélation", avec plusieurs scènes pour y parvenir.  
   - Exemple : Chapitre 10 \= "Confrontation avec l’adversaire" dans les 7 étapes.

   

2. **Une scène développe un dynamisme de scène au sein d’un chapitre**  
     
   - La scène est le terrain où le dynamisme des personnages (objectifs, actions, conflits, changements) prend vie. Elle est plus focalisée et donne du relief au chapitre en montrant comment chaque personnage réagit ou évolue.  
   - Exemple : Dans ce Chapitre 10, une scène \= "Alex découvre un piège tendu par Léo", avec un dynamisme spécifique pour Alex (peur → détermination) et Léo (contrôle → frustration).

   

3. **Une scène est l’équivalent d’une péripétie, d’une confrontation où les personnages sont confrontés au schéma narratif**  
     
   - C’est une définition puissante \! Une scène agit comme une péripétie (un événement qui change la donne) ou une confrontation (entre personnages, ou entre un personnage et une situation). Elle reflète le schéma narratif à une échelle réduite, en le rendant tangible à travers les actions et réactions des personnages.  
   - Exemple : Cette même scène du piège peut être une "Fausse victoire" (22 étapes de Truby), où Alex pense s’en sortir, mais Léo le rattrape.

Cette approche crée une hiérarchie claire et dynamique :

- **Schéma narratif** \= la structure globale du projet (les 300 pages).  
- **Chapitre** \= un bloc narratif qui progresse dans cette structure (20 chapitres).  
- **Scène** \= une unité d’action où les personnages vivent une étape du schéma à travers leur dynamisme (plusieurs scènes par chapitre).

Pour un thriller, c’est idéal, car :

- Les **péripéties** maintiennent le suspense (chaque scène doit surprendre ou faire monter la tension).  
- Les **confrontations** révèlent les personnages (leurs forces, faiblesses, ou secrets).  
- Le **schéma narratif** donne une cohérence à l’ensemble (les twists s’alignent sur une logique interne).

---

### Exemple appliqué

- **Schéma narratif global** : Les 7 étapes de Truby.  
- **Chapitre 5** : "Plan" (le héros met en place une stratégie pour déjouer l’adversaire).  
- **Scène dans ce chapitre** : "Alex infiltre un entrepôt pour voler des preuves."  
  - **Dynamisme d’Alex** : Objectif \= obtenir les preuves ; Action \= crocheter une serrure ; Conflit \= risque d’être vu ; Changement \= gagne en confiance ; Interaction \= laisse un indice par erreur.  
  - **Dynamisme de Léo (antagoniste)** : Objectif \= surveiller son territoire ; Action \= patrouille ; Conflit \= doute sur un bruit ; Changement \= devient méfiant ; Interaction \= resserre la sécurité.  
  - **Péripétie/Confrontation** : Alex réussit mais déclenche une alarme, confrontant son plan au schéma narratif (le "Plan" échoue partiellement, menant à la "Bataille" plus tard).

Cette scène est une péripétie (un succès temporaire avec un revers) qui fait avancer le chapitre et le schéma global.

### Pour résumer

Cette logique est non seulement correcte, mais elle donne une structure organique au projet d'écriture. Chaque scène devient un moteur narratif, chaque chapitre un jalon, et le schéma une toile de fond qui lie le tout. C’est une bonne recette pour un roman captivant \! Maintenant que nous avons vu comment modéliser cette structure en scènes et chapitres avec Airtable, passons à la suite, c’est-à-dire à l’utilisation de ce modèle de façon concrète. Ce sera dans le prochain volet.  
