// Données fictives/de démonstration pour la Phase 1. À remplacer par de vraies données
// (API/base de données) dans une phase ultérieure.
export const products = [
  {
    id: "1",
    title: "VTT reconditionné",
    price: 450,
    currency: "CHF",
    category: "Vélos-Vélomoteurs",
    location: "Zurich",
    type: "physical",
    image: "https://picsum.photos/seed/product1/600/400",
    description:
      "Un VTT bien entretenu, entièrement révisé et prêt à rouler. Idéal pour les trajets quotidiens ou les sorties du week-end.",
  },
  {
    id: "2",
    title: "Table basse en chêne massif",
    price: 220,
    currency: "CHF",
    category: "Meubles",
    location: "Berne",
    type: "physical",
    image: "https://picsum.photos/seed/product2/600/400",
    description:
      "Table basse en chêne massif, fabriquée à la main par un menuisier local. Légères traces d'usure liées à un usage soigné.",
  },
  {
    id: "3",
    title: "Manteau d'hiver en laine vintage",
    price: 85,
    currency: "CHF",
    category: "Vêtements & accessoires",
    location: "Lausanne",
    type: "physical",
    image: "https://picsum.photos/seed/product3/600/400",
    description:
      "Manteau en laine chaud en excellent état, taille M. Parfait pour les hivers suisses.",
  },
  {
    id: "4",
    title: "Création de logo",
    price: 150,
    currency: "CHF",
    category: "Divers Inclassables",
    location: "Genève",
    type: "service",
    image: "https://picsum.photos/seed/product4/600/400",
    description:
      "Prestation de création de logo : 3 propositions, 2 séries de révisions, fichiers finaux dans tous les formats standards.",
  },
  {
    id: "5",
    title: "Pack de e-books pour apprendre le français",
    price: 19,
    currency: "CHF",
    category: "Livres-BDs-Revues",
    location: "En ligne",
    type: "digital",
    image: "https://picsum.photos/seed/product5/600/400",
    description:
      "Un pack de 3 e-books pour apprendre le français, du niveau débutant au niveau intermédiaire.",
  },
  {
    id: "6",
    title: "Ordinateur portable reconditionné (14 pouces)",
    price: 380,
    currency: "CHF",
    category: "Informatique",
    location: "Bâle",
    type: "physical",
    image: "https://picsum.photos/seed/product6/600/400",
    description:
      "Ordinateur portable reconditionné de 14 pouces, 8 Go de RAM, SSD de 256 Go. Batterie testée et remplacée si nécessaire.",
  },
  {
    id: "7",
    title: "Lot de 3 pots en céramique",
    price: 35,
    currency: "CHF",
    category: "Décoration & accessoires",
    location: "Zurich",
    type: "physical",
    image: "https://picsum.photos/seed/product7/600/400",
    description:
      "Lot de 3 pots en céramique faits main, de tailles différentes, avec trous de drainage et soucoupes inclus.",
  },
  {
    id: "8",
    title: "Comptabilité pour petites associations (cours en ligne)",
    price: 60,
    currency: "CHF",
    category: "Divers Inclassables",
    location: "En ligne",
    type: "digital",
    image: "https://picsum.photos/seed/product8/600/400",
    description:
      "Un cours en ligne à suivre à son rythme, couvrant les bases de la comptabilité pour les petites associations.",
  },
  {
    id: "9",
    title: "Vélo enfant (roues 16 pouces)",
    price: 90,
    currency: "CHF",
    category: "Enfants-Bébés",
    location: "Lucerne",
    type: "physical",
    image: "https://picsum.photos/seed/product9/600/400",
    description:
      "Vélo enfant peu utilisé, roulettes stabilisatrices incluses, convient pour les enfants de 4 à 6 ans.",
  },
  {
    id: "10",
    title: "Bibliothèque d'occasion (5 étagères)",
    price: 60,
    currency: "CHF",
    category: "Meubles",
    location: "Berne",
    type: "physical",
    image: "https://picsum.photos/seed/product10/600/400",
    description:
      "Bibliothèque en bois robuste à 5 étagères, démontée pour un transport facile, notice de montage incluse.",
  },
  {
    id: "11",
    title: "Écharpe en laine tricotée main",
    price: 28,
    currency: "CHF",
    category: "Vêtements & accessoires",
    location: "Saint-Gall",
    type: "physical",
    image: "https://picsum.photos/seed/product11/600/400",
    description:
      "Écharpe en laine tricotée à la main par une coopérative d'artisans locale. Taille unique.",
  },
  {
    id: "12",
    title: "Consultation site web (1 heure)",
    price: 75,
    currency: "CHF",
    category: "Informatique",
    location: "En ligne",
    type: "service",
    image: "https://picsum.photos/seed/product12/600/400",
    description:
      "Une consultation vidéo d'une heure pour vous aider à planifier ou améliorer le site web d'une petite entreprise ou association.",
  },
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
