---
title: "Les Saynètes — Expression numérique et médiation en santé"
slug: "les-saynetes"
date: "2026-05-31"
client: "ASAMLA (Association Santé Migrants Loire-Atlantique)"
partenaire: "ARS (Agence Régionale de Santé), Association Montjoie"
role: "Conception UX / Architecture Web / Développement React"
tags: ["React", "Multilinguisme", "Médiation", "Inclusion"]
url: "https://saynetes.fr"
---

# Les Saynètes — Plateforme multimédia interactive pour l'allophonie

## Le Contexte et L'Alliance
Dans le champ médico-social, la barrière de la langue constitue un obstacle majeur à l'accès aux soins et aux droits fondamentaux. Face à ce constat, l'**ASAMLA** mène des actions de médiation auprès des populations allophones. 

En alliance avec l'association et avec le soutien financier de l'**ARS**, **Hammer & Marteau** a proposé une solution numérique capable de prolonger l'action des médiateurs sur le terrain à travers un outil d'apprentissage et d'expression autonome.

## Le Problème
Les outils d'information institutionnels classiques (brochures papier, sites web textuels denses) échouent souvent auprès des publics migrants pour plusieurs raisons :
- Illettrisme ou analphabétisme dans la langue d'origine.
- Fracture numérique (interfaces non adaptées aux smartphones d'anciennes générations).
- Manque d'ancrage culturel dans les situations représentées.

## La Réponse : Une UX Inclusive et Scénarisée
Le projet **"Les Saynètes"** se matérialise sous la forme d'une application web mobile-first ultra-épurée, articulée autour de scénarios du quotidien (visite chez le médecin, guichet de la sécurité sociale, pharmacie).

### 1. Architecture Multilingue Avancée
- Intégration d'un système audio natif permettant d'écouter les dialogues en 7 langues (dont l'Arabe littéraire, le Russe, le Roumain et le Turc).
- Changement de langue à la volée sans rechargement de page pour permettre une utilisation conjointe par le médiateur et l'usager.
- Prise en charge native des typographies non-latines et des sens de lecture alternés (RTL - Right to Left) pour les langues concernées.

### 2. Design Visuel Épuré
Inspiré par nos lignes directrices géométriques et minimalistes, l'interface élimine le superflu :
- **Navigation par l'image :** Utilisation d'illustrations contrastées et de pictogrammes universels pour guider l'utilisateur sans barrière textuelle.
- **Performance éco-conçue :** Code React optimisé pour un chargement instantané, même sur les réseaux mobiles à faible bande passante (3G / zones blanches).

## Spécifications Techniques

```json
{
  "stack": ["React.js", "Tailwind CSS", "Framer Motion", "i18next"],
  "audio_engine": "Web Audio API (compression Opus pour faible bande passante)",
  "accessibility": "Objectif WCAG 2.1 niveau AA complété"
}
```

## Impact et Perspectives
Déployée auprès des équipes terrain de l'ASAMLA, la plateforme "Les Saynètes" vise à devenir un outil de référence pour amorcer le dialogue lors des ateliers collectifs de santé. Ce projet démontre qu'en liant technique rigoureuse et humanité, le numérique peut devenir un vecteur puissant d'inclusion sociale.