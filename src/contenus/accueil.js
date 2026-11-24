// Contenu du hero de l'accueil (HM-20). Textes validés par Gilles le 24 nov. (HM-9).
// Deux formes possibles, sans toucher à la mise en page :
//   - titre, sousTitre et texte (chacun facultatif) ;
//   - phrase : une seule phrase, en taille de sous-titre, qui remplace les trois autres.
// image : chemin dans public/ ; vide, une case grise tient la place.
const accueil = {
  lieu: 'Micro-agence',
  titre: 'Expression numérique',
  sousTitre: 'Design et fonctionnalité.',
  texte: "Hammer & Marteau conçoit et développe des applications de bout en bout. Nous transformons une idée en un produit stylé et fonctionnel. Notre approche se veut originale et consiste à concilier la logique numérique et une part d'illogisme romantique.",
  phrase: '',
  image: '/images/accueil-hero.jpg',
  imageAlt: '',
  imagePosition: '50% 90%',

  // Section portfolio (HM-21).
  // composition : 'cases' (cases espacées) ou 'index' (une ligne par projet).
  // nombre : combien de projets « featured » l'accueil montre au plus.
  portfolio: { composition: 'cases', nombre: 3 },

  // Section blog (HM-22).
  // composition : 'cases' (articles côte à côte) ou 'liste' (une ligne par article).
  // nombre : combien d'articles récents l'accueil montre au plus.
  blog: { composition: 'cases', nombre: 3 },

  // Section contact (HM-23). Phrase provisoire ; vide, seule l'adresse s'affiche.
  contact: {
    phrase: 'Un projet, une question, une idée à discuter : un message suffit.',
    email: 'contact@hammer-marteau.com',
  },
};

export default accueil;
