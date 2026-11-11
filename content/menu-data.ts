import type { Dish, LocalizedText } from "@/types/menu";

/**
 * Real dish data transcribed from the restaurant's own menu (not invented).
 * Scoped to what the homepage needs today — the full 58-item catalogue is
 * deferred to the Menu page build itself.
 */

export const signatureDishes: Dish[] = [
  {
    id: 48,
    slug: "entrecote-grillee-maitre-dhotel",
    name: {
      en: "Grilled Ribeye, Maître d'Hôtel",
      fr: "Entrecôte Grillée Maître d'Hôtel",
    },
    description: {
      en: "A generous cut, refined by charcoal fire and a delicately scented butter.",
      fr: "Une pièce généreuse sublimée par le feu de charbon et un beurre délicatement parfumé.",
    },
    price: "160 DH",
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784821921/Entrec%C3%B4te_Grill%C3%A9e_Ma%C3%AEtre_d_H%C3%B4tel_wwfluq.jpg",
  },
  {
    id: 49,
    slug: "souris-dagneau",
    name: { en: "Braised Lamb Shank", fr: "Souris d'Agneau" },
    description: {
      en: "Slow-braised until it falls from the bone — a genuine moment of indulgence.",
      fr: "Confite lentement jusqu'à devenir fondante à souhait, un véritable instant de gourmandise.",
    },
    price: "250 DH",
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1792083311/IMG_7161.jpg_cyc9ms.jpg",
  },
  {
    id: 52,
    slug: "loup-bar",
    name: { en: "Whole Grilled Sea Bass", fr: "Loup Bar (Entier ou Filet)" },
    description: {
      en: "A refined fish carrying the delicate flavors of the Mediterranean, served as you like it.",
      fr: "Un poisson raffiné aux saveurs délicates de Méditerranée, servi selon vos envies.",
    },
    price: "220 DH",
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784822278/loup_bar_rgmixy.jpg",
  },
];

export const chefHeroDish: Dish = {
  id: 41,
  slug: "poulet-olive-citron",
  name: { en: "Chicken, Olive & Preserved Lemon", fr: "Poulet Olive Citron" },
  description: {
    en: "The great Moroccan classic that reassures from the very first spoonful.",
    fr: "Le grand classique marocain qui rassure dès la première cuillère.",
  },
  price: "95 DH",
  image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806018/Poulet_Olive_Citron_xtv7we.jpg",
};

export const chefSupportingDishes: Dish[] = [
  {
    id: 50,
    slug: "medaillon-de-lotte",
    name: {
      en: "Monkfish Medallion, Mushroom Sauce",
      fr: "Médaillon de Lotte (Sauce Champignons)",
    },
    description: {
      en: "Fine, delicate flesh, handled with elegance and subtlety.",
      fr: "Une chair fine et délicate, travaillée avec élégance et subtilité.",
    },
    price: "165 DH",
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784821919/%C3%89minc%C3%A9_de_Poulet_n1936a.jpg",
  },
  {
    id: 15,
    slug: "keftaa-maalouma",
    name: { en: "Grilled Keftaa Maalouma", fr: "Keftaa Maalouma" },
    description: {
      en: "Our secret recipe — it scents the room before it ever reaches the table.",
      fr: "Notre recette secrète qui parfume la salle avant même d'arriver à table.",
    },
    price: "120 DH",
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784821813/kafta_maaloma_d9husw.jpg",
  },
  {
    id: 38,
    slug: "pastilla-poulet-amandes",
    name: { en: "Chicken & Almond Pastilla", fr: "Pastilla Poulet Amandes" },
    description: {
      en: "A perfect marriage of sweet and savory.",
      fr: "Le mariage parfait du sucré et du salé.",
    },
    price: "120 DH",
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806013/Pastilla_Poulet_Amandes_bkiosj.jpg",
  },
];

/** #51 on the printed menu — part of "Les Incontournables" alongside the signature dishes above. */
export const eminceDePoulet: Dish = {
  id: 51,
  slug: "emince-de-poulet",
  name: {
    en: "Chicken Emincé, Old-Style Mustard Sauce",
    fr: "Émincé de Poulet (Sauce Moutarde à l'Ancienne)",
  },
  description: {
    en: "Tender, flavorful, and delicately seasoned for a plate full of comfort.",
    fr: "Tendre, savoureux et délicatement relevé pour une assiette pleine de réconfort.",
  },
  price: "95 DH",
  image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784821925/M%C3%A9daillon_de_Lotte_tfylz6.jpg",
};

export interface MenuPreviewCategory {
  id: string;
  name: LocalizedText;
  teaser: LocalizedText;
  image: string;
  preview: { name: LocalizedText; price: string }[];
}

export const menuPreviewCategories: MenuPreviewCategory[] = [
  {
    id: "tagines",
    name: { en: "Tagines", fr: "Tagines" },
    teaser: {
      en: "Patience, spices, and Moroccan craft, gathered in a single dish.",
      fr: "La patience, les épices et le savoir-faire marocain réunis dans un seul plat.",
    },
    image: "https://res.cloudinary.com/udflrhgq/image/upload/v1784806018/Poulet_Olive_Citron_xtv7we.jpg",
    preview: [
      { name: { en: "Chicken, Olive & Preserved Lemon", fr: "Poulet Olive Citron" }, price: "95 DH" },
      { name: { en: "Kebab Maghdour", fr: "Kebab Maghdour" }, price: "100 DH" },
    ],
  },
  {
    id: "grillades",
    name: { en: "From the Grill", fr: "Grillades" },
    teaser: {
      en: "Charcoal is what makes the difference here.",
      fr: "Le charbon de bois fait ici toute la différence.",
    },
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784821921/Entrec%C3%B4te_Grill%C3%A9e_Ma%C3%AEtre_d_H%C3%B4tel_wwfluq.jpg",
    preview: [
      { name: { en: "Grilled Chicken Skewer", fr: "Brochette de Poulet" }, price: "110 DH" },
      { name: { en: "Lamb Noisette", fr: "Noisette d'Agneau" }, price: "145 DH" },
    ],
  },
  {
    id: "cassolettes",
    name: { en: "Cassolettes", fr: "Cassolettes" },
    teaser: {
      en: "Generous flavors, served blistering hot and full of fragrance.",
      fr: "Des saveurs généreuses servies brûlantes et parfumées.",
    },
    image:"https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806013/Paella_Valenciana_ifqhoa.jpg",

    preview: [
      { name: { en: "Spicy Prawns Pil Pil", fr: "Gambas Pil Pil" }, price: "95 DH" },
      { name: { en: "Seafood Cassolette", fr: "Fruits de Mer" }, price: "135 DH" },
    ],
  },
  {
    id: "desserts",
    name: { en: "Desserts", fr: "Desserts" },
    teaser: {
      en: "Because there's always room for something sweet.",
      fr: "Parce qu'il reste toujours une place pour une douceur.",
    },
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806006/G%C3%A2teau_Glac%C3%A9_pw1qob.jpg",
    preview: [
      { name: { en: "Lemon Tart", fr: "Tarte au Citron" }, price: "50 DH" },
      { name: { en: "Banoffee Pie", fr: "Banoffie Pie" }, price: "55 DH" },
    ],
  },
];
