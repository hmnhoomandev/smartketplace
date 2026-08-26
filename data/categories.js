// Taxonomie des catégories, alignée sur la structure réelle de keepinuse.ch
// (catégories principales + sous-catégories). Utilisée par le mega-menu de
// navigation et le filtre de recherche.
export const categoryTree = [
  {
    name: "Aménagement intérieur",
    subs: ["Décoration & accessoires", "Luminaires & lampes"],
  },
  { name: "Animaux (accessoires uniquement)", subs: [] },
  { name: "Art – Antiquités", subs: [] },
  { name: "Audio – TV – Vidéo", subs: [] },
  { name: "Bijouterie", subs: [] },
  { name: "Bricolage", subs: [] },
  { name: "Divers Inclassables", subs: [] },
  { name: "Enfants-Bébés", subs: [] },
  { name: "Fournitures de bureau", subs: [] },
  { name: "Horlogerie", subs: [] },
  { name: "Informatique", subs: [] },
  { name: "Jardin-Jardinage", subs: [] },
  { name: "Jeux-Jouets", subs: ["Jeux vidéo"] },
  { name: "Livres-BDs-Revues", subs: ["Enfants"] },
  { name: "Ménage-Maison", subs: ["Electroménager", "Vaisselle & ustensiles"] },
  { name: "Mobilier", subs: ["Literie (sommier-matelas-textiles)", "Meubles"] },
  { name: "Musique", subs: ["Vinyles"] },
  { name: "Photographie", subs: [] },
  { name: "Santé-Beauté", subs: [] },
  { name: "Sports - Loisirs", subs: [] },
  { name: "Véhicules", subs: ["Accessoires", "Vélos-Vélomoteurs"] },
  {
    name: "Vêtements & accessoires",
    subs: ["Chaussures", "Enfants", "Femmes", "Hommes"],
  },
];

export const categories = categoryTree.map((category) => category.name);
