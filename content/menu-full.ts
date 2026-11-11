import type { Dish, MenuCategory } from "@/types/menu";
import {
  signatureDishes,
  chefSupportingDishes,
  chefHeroDish,
  eminceDePoulet,
} from "@/content/menu-data";

/**
 * Original dishes are transcribed from the restaurant's own printed cards
 * (food card #1–58, plus the drinks/wine card handled separately in
 * `drinks-data.ts`).
 *
 * Photos: dishes with real restaurant photography (Cloudinary, sourced from
 * the "Menu pépère2" shoot) carry it. Pied de Veau (#47) is the only item
 * that shoot hasn't covered yet, so it still renders an approximate stock
 * photo. Every other unphotographed item renders text-only rather than
 * guessing at a stock photo. The owner-requested Sandwiches & Burgers
 * additions use generated illustrative images stored locally.
 */

function find(slug: string, dishes: Dish[]): Dish {
  const dish = dishes.find((d) => d.slug === slug);
  if (!dish) throw new Error(`Dish "${slug}" not found`);
  return dish;
}

// "Les Incontournables" — the house's own labeled signatures (#48–52).
export const fanFavoritesCategory: MenuCategory = {
  id: "fan-favorites",
  name: { en: "Fan Favorites", fr: "Les Incontournables" },
  description: {
    en: "The house's great signatures — not to be missed.",
    fr: "Les grandes signatures de la maison, à découvrir absolument.",
  },
  dishes: [
    find("entrecote-grillee-maitre-dhotel", signatureDishes),
    find("souris-dagneau", signatureDishes),
    find("medaillon-de-lotte", chefSupportingDishes),
    eminceDePoulet,
    find("loup-bar", signatureDishes),
  ],
};

// "Tapas D'ici" (#1–5) — small plates, transcribed from the printed food card.
export const tapasCategory: MenuCategory = {
  id: "tapas",
  name: { en: "Tapas", fr: "Tapas D'ici" },
  description: {
    en: "Small plates full of character and flavor.",
    fr: "Des petites assiettes pleines de caractère et de gourmandise.",
  },
  dishes: [
    {
      id: 1,
      slug: "zaalouk",
      name: { en: "Zaalouk", fr: "Zaalouk" },
      description: {
        en: "The eggplant left the garden to become the star of your table.",
        fr: "L'aubergine a quitté le potager pour devenir la star de votre table.",
      },
      price: "30 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806031/Zaalouk_j3cz2k.jpg",
    },
    {
      id: 2,
      slug: "taktouka",
      name: { en: "Taktouka", fr: "Taktouka" },
      description: {
        en: "The perfect meeting of tomato, pepper, and Moroccan sun.",
        fr: "La rencontre parfaite entre tomate, poivron et soleil marocain.",
      },
      price: "30 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806022/Taktouka_whoge5.jpg",
    },
    {
      id: 3,
      slug: "foule-gnaoua",
      name: { en: "Foule Gnaoua", fr: "Foule Gnaoua" },
      description: {
        en: "A generous dish that starts with \"just a taste\" and ends with all the bread. Khalii supplement +20 DH.",
        fr: "Un plat généreux qui commence par « je goûte » et finit avec tout le pain. Supplément Khalii +20 DH.",
      },
      price: "35 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806001/Foule_Gnaoua_xpw8wb.jpg",
    },
    {
      id: 4,
      slug: "haricot-blanc",
      name: { en: "White Bean Stew", fr: "Haricot Blanc" },
      description: {
        en: "A delicious surprise worth every bit of your curiosity.",
        fr: "Une surprise gourmande qui mérite toute votre curiosité.",
      },
      price: "30 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806006/Haricot_Blanc_oe7kgf.jpg",
    },
    {
      id: 5,
      slug: "lentilles",
      name: { en: "Lentils", fr: "Lentilles" },
      description: {
        en: "The comforting taste of old-time kitchens, revisited with elegance. Khalii supplement +20 DH.",
        fr: "Le goût réconfortant des cuisines d'antan, revisité avec élégance. Supplément Khalii +20 DH.",
      },
      price: "30 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806009/Lentilles_l5qtvh.jpg",
    },
  ],
};

// "Salades" (#6–14) — transcribed from the printed food card.
export const saladesCategory: MenuCategory = {
  id: "salades",
  name: { en: "Salads", fr: "Salades" },
  description: {
    en: "Fresh, refined, and always welcome at the table.",
    fr: "Fraîches, raffinées et toujours les bienvenues à table.",
  },
  dishes: [
    {
      id: 6,
      slug: "tomate-oignon-concombre",
      name: { en: "Tomato, Onion & Cucumber", fr: "Tomate, Oignon & Concombre" },
      description: {
        en: "Simple, fresh, and as essential as lunch in the sun.",
        fr: "Simple, fraîche et indispensable comme un déjeuner au soleil.",
      },
      price: "35 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806029/Tomate_Oignon_Concombre_qt2xdt.jpg",
    },
    {
      id: 7,
      slug: "oeuf-dur-mayonnaise",
      name: { en: "Hard-Boiled Egg, Mayonnaise", fr: "Œuf Dur Mayonnaise" },
      description: {
        en: "The great classic that never goes out of style.",
        fr: "Le grand classique qui traverse le temps sans jamais perdre son charme.",
      },
      price: "35 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806028/%C5%92uf_Dur_Mayonnaise_ylfs6d.jpg",
    },
    {
      id: 8,
      slug: "artichaut-vinaigrette",
      name: { en: "Artichoke Vinaigrette", fr: "Artichaut Vinaigrette" },
      description: {
        en: "Delicate, elegant, and subtly Mediterranean.",
        fr: "Délicat, élégant et subtilement méditerranéen.",
      },
      price: "50 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805994/Artichaut_Vinaigrette_xdcxkm.jpg",
    },
    {
      id: 9,
      slug: "avocat-vinaigrette",
      name: { en: "Avocado Vinaigrette", fr: "Avocat Vinaigrette" },
      description: {
        en: "The gentle richness of avocado, in its simplest form.",
        fr: "La douceur de l'avocat dans toute sa simplicité.",
      },
      price: "35 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805990/Avocat_Vinaigrette_vq5afl.jpg",
    },
    {
      id: 10,
      slug: "crevettes-mayonnaise",
      name: { en: "Shrimp, Mayonnaise", fr: "Crevettes Mayonnaise" },
      description: {
        en: "Shrimp that clearly chose comfort and elegance.",
        fr: "Des crevettes qui ont clairement choisi le confort et l'élégance.",
      },
      price: "60 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805999/Crevettes_Mayonnaise_ibfef3.jpg",
    },
    {
      id: 11,
      slug: "avocat-crevettes-sauce-cocktail",
      name: { en: "Avocado & Shrimp, Cocktail Sauce", fr: "Avocat Crevettes Sauce Cocktail" },
      description: {
        en: "A stylish duo that always makes an impression.",
        fr: "Un duo chic qui fait toujours son effet.",
      },
      price: "65 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805987/Avocat_Crevettes_Sauce_Cocktail_k4jkvb.jpg",
    },
    {
      id: 12,
      slug: "salade-verte-coeur-sucrine",
      name: { en: "Green Salad or Sucrine Lettuce", fr: "Salade Verte ou Cœur de Sucrine" },
      description: {
        en: "For a clear conscience before the grill arrives.",
        fr: "Pour se donner bonne conscience avant les grillades.",
      },
      price: "35 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806023/Salade_Verte_ou_C%C5%93ur_de_Sucrine_uhhurk.jpg",
    },
    {
      id: 13,
      slug: "salade-pommes-de-terre-thon",
      name: { en: "Potato & Tuna Salad", fr: "Salade de Pommes de Terre & Thon" },
      description: {
        en: "Generous, easygoing, and quietly addictive.",
        fr: "Généreuse, conviviale et discrètement addictive.",
      },
      price: "55 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806020/Salade_de_Pommes_de_Terre_Thon_tfjk53.jpg",
    },
    {
      id: 14,
      slug: "salade-thon-tomate-oignon",
      name: { en: "Tuna, Tomato & Onion Salad", fr: "Salade Thon Tomate Oignon" },
      description: {
        en: "Three simple ingredients, not a single misstep.",
        fr: "Trois ingrédients simples, zéro faute de goût.",
      },
      price: "55 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806019/Salade_Thon_Tomate_Oignon_nsmv5i.jpg",
    },
  ],
};

// "Grillades" (#15–20) — real charcoal, served with a Moroccan salad and fries.
export const grillCategory: MenuCategory = {
  id: "from-the-grill",
  name: { en: "From the Grill", fr: "Grillades" },
  description: {
    en: "Served with a Moroccan salad and fries.",
    fr: "Accompagnées d'une salade marocaine et de frites.",
  },
  dishes: [
    find("keftaa-maalouma", chefSupportingDishes),
    {
      id: 16,
      slug: "noisette-dagneau",
      name: { en: "Lamb Noisette", fr: "Noisette d'Agneau" },
      description: {
        en: "Tender meat that deserves a moment of silence at the first bite.",
        fr: "Une viande tendre qui mérite quelques secondes de silence à la première bouchée.",
      },
      price: "145 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784823732/Noisette_b8fxfr_imcxiw.jpg",
    },
    {
      id: 17,
      slug: "brochette-de-poulet",
      name: { en: "Grilled Chicken Skewer", fr: "Brochette de Poulet" },
      description: {
        en: "Today, the chicken decided to be exceptional.",
        fr: "Le poulet a décidé aujourd'hui d'être exceptionnel.",
      },
      price: "110 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805994/Brochette_de_Poulet_j8gebn.jpg",
    },
    {
      id: 18,
      slug: "brochette-de-boulfaf",
      name: { en: "Grilled Boulfaf Skewer", fr: "Brochette de Boulfaf" },
      description: {
        en: "A Moroccan specialty everyone can agree on.",
        fr: "Une spécialité marocaine qui met tout le monde d'accord.",
      },
      price: "125 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805994/Brochette_de_Boulfaf_lgtsr9.jpg",
    },
    {
      id: 19,
      slug: "coquelet-grille",
      name: { en: "Grilled Spring Chicken", fr: "Coquelet Grillé" },
      description: {
        en: "Small size, big pleasure.",
        fr: "Petit format, grand plaisir.",
      },
      price: "95 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806005/Coquelet_Grill%C3%A9_ng0bmp.jpg",
    },
    {
      id: 20,
      slug: "ailes-de-poulet",
      name: { en: "Chicken Wings", fr: "Ailes de Poulet" },
      description: {
        en: "Best enjoyed with your fingers and zero guilt.",
        fr: "À déguster avec les doigts et sans aucune culpabilité.",
      },
      price: "75 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805982/Ailes_de_Poulet_jgkp0k.jpg",
    },
  ],
};

export const friturePoissonCategory: MenuCategory = {
  id: "fritures-poissons",
  name: { en: "Fried & Grilled Fish", fr: "Fritures Poissons ou à la Plancha" },
  dishes: [
    {
      id: 27,
      slug: "calamar",
      name: { en: "Crispy Fried Calamari", fr: "Calamar" },
      description: {
        en: "Crispy, golden, and impossible to stop eating once you start.",
        fr: "Croustillant, doré et impossible à arrêter une fois commencé.",
      },
      price: "75 DH / 140 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805998/Calamar_ogf3ea.jpg",
    },
    {
      id: 28,
      slug: "solettes",
      name: { en: "Sole", fr: "Solettes" },
      description: {
        en: "Delicate and refined, like a summer evening by the sea.",
        fr: "Délicates et raffinées comme une soirée d'été au bord de la mer.",
      },
      price: "50 DH / 95 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806020/Solettes_gadhhf.jpg",
    },
    {
      id: 29,
      slug: "merlans",
      name: { en: "Whiting", fr: "Merlans" },
      description: {
        en: "The crowd-pleasing fish that always wins people over.",
        fr: "Le poisson populaire qui sait parfaitement séduire.",
      },
      price: "45 DH / 85 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806009/Merlans_ysgo5n.jpg",
    },
    {
      id: 30,
      slug: "friture-poisson-mixte",
      name: { en: "Mixed Fried or Grilled Fish Platter", fr: "Friture Poisson Mixte ou à la Plancha" },
      description: {
        en: "Because sometimes it's impossible to choose just one pleasure.",
        fr: "Parce qu'il est parfois impossible de choisir un seul plaisir.",
      },
      price: "145 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806003/Friture_Poisson_u4rpqd.jpg",
    },
    {
      id: 31,
      slug: "paella-valenciana",
      name: { en: "Valencian Paella", fr: "Paella Valenciana" },
      description: {
        en: "All of Spain gathered in one generous pan.",
        fr: "L'Espagne entière réunie dans une poêle généreuse.",
      },
      price: "140 DH (1 pers.) / 280 DH (2 pers.)",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806013/Paella_Valenciana_ifqhoa.jpg",
    },
  ],
};

export const saveursDailleursCategory: MenuCategory = {
  id: "saveurs-dailleurs",
  name: { en: "Flavors from Elsewhere", fr: "Saveurs d'Ailleurs" },
  dishes: [
    {
      id: 32,
      slug: "patatas-bravas",
      name: { en: "Patatas Bravas", fr: "Patatas Bravas" },
      description: {
        en: "Crispy potatoes with plenty of character.",
        fr: "Des pommes de terre croustillantes avec beaucoup de tempérament.",
      },
      price: "40 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806014/Patatas_Bravas_yiwhbe.jpg",
    },
    {
      id: 33,
      slug: "tortilla-espagnole",
      name: { en: "Spanish Tortilla", fr: "Tortilla Espagnole" },
      description: {
        en: "Simple, generous, and always comforting.",
        fr: "Simple, généreuse et toujours réconfortante.",
      },
      price: "45 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806025/Tortilla_Espagnole_jnkhof.jpg",
    },
    {
      id: 34,
      slug: "croquettes-de-crevettes",
      name: { en: "Shrimp Croquettes (4 pieces)", fr: "Croquettes de Crevettes (4 pièces)" },
      description: {
        en: "Golden outside, melting inside, and totally irresistible.",
        fr: "Dorées dehors, fondantes dedans et totalement irrésistibles.",
      },
      price: "70 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805998/Croquettes_de_Crevettes_vnoelr.jpg",
    },
    {
      id: 35,
      slug: "croquettes-de-poulet",
      name: { en: "Chicken Croquettes (4 pieces)", fr: "Croquettes de Poulet (4 pièces)" },
      description: {
        en: "Crispy bites that mysteriously disappear fast.",
        fr: "Des bouchées croustillantes qui disparaissent mystérieusement très vite.",
      },
      price: "60 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805999/Croquettes_de_Poulet_hpspfr.jpg",
    },
    {
      id: 36,
      slug: "anchois-marines",
      name: { en: "Marinated Anchovies", fr: "Anchois Marinés" },
      description: {
        en: "Small fish, big personality.",
        fr: "Petit poisson, grande personnalité.",
      },
      price: "55 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805992/Anchois_Marin%C3%A9s_m9oxf4.jpg",
    },
    {
      id: 37,
      slug: "assortiment-de-briouates",
      name: { en: "Briouates Assortment (6 pieces)", fr: "Assortiment de Briouates (6 pièces)" },
      description: {
        en: "Sharing, in its crispiest form.",
        fr: "Le plaisir du partage dans sa version la plus croustillante.",
      },
      price: "90 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805992/Assortiment_de_Briouates_gdihx7.jpg",
    },
    find("pastilla-poulet-amandes", chefSupportingDishes),
    {
      id: 39,
      slug: "pastilla-fruits-de-mer",
      name: { en: "Seafood Pastilla", fr: "Pastilla Fruits de Mer" },
      description: {
        en: "A delicious encounter between Marrakech and the Mediterranean.",
        fr: "Une rencontre gourmande entre Marrakech et la Méditerranée.",
      },
      price: "130 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806013/Pastilla_Fruits_de_Mer_djp8sr.jpg",
    },
    {
      id: 40,
      slug: "assiette-de-fromage",
      name: { en: "Cheese Plate", fr: "Assiette de Fromage" },
      description: {
        en: "Because a good meal always deserves a beautiful finish.",
        fr: "Parce qu'un bon repas mérite toujours une belle fin.",
      },
      price: "100 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805983/Assiette_de_Fromage_ggdjec.jpg",
    },
  ],
};

// "Cassolettes" (#21–26) — transcribed from the printed food card.
export const cassolettesCategory: MenuCategory = {
  id: "cassolettes",
  name: { en: "Cassolettes", fr: "Cassolettes" },
  description: {
    en: "Generous flavors, served blistering hot and full of fragrance.",
    fr: "Des saveurs généreuses servies brûlantes et parfumées.",
  },
  dishes: [
    {
      id: 42,
      slug: "poisson-a-la-marocaine",
      name: {
        en: "Moroccan-Style Fish Tagine (Sea Bass or Sea Bream)",
        fr: "Poisson à la Marocaine (Loup ou Dorade)",
      },
      description: {
        en: "A fragrant recipe that celebrates the flavors of the open sea.",
        fr: "Une recette parfumée qui célèbre la cuisine du large.",
      },
      price: "250 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806016/Poisson_%C3%A0_la_Marocaine_sbqtpe.jpg",
    },
    {
      id: 21,
      slug: "moules",
      name: { en: "Mussels", fr: "Moules" },
      description: {
        en: "Like a one-way ticket to the seaside.",
        fr: "Comme un aller simple vers le bord de mer.",
      },
      price: "90 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806011/Moules_owt1xb.jpg",
    },
    {
      id: 22,
      slug: "gambas-messlala",
      name: { en: "Prawns Messlala", fr: "Gambas Messlala" },
      description: {
        en: "Prawns traveling between Moroccan tradition and Mediterranean spirit.",
        fr: "Des gambas qui voyagent entre tradition marocaine et esprit méditerranéen.",
      },
      price: "120 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806003/Gambas_Messlala_zjelmy.jpg",
    },
    {
      id: 23,
      slug: "espadon-gambas",
      name: { en: "Swordfish & Prawns", fr: "Espadon & Gambas" },
      description: {
        en: "A refined plate that smells like vacation.",
        fr: "Une assiette raffinée qui sent bon les vacances.",
      },
      price: "135 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806003/Espadon_Gambas_rlxnmi.jpg",
    },
    {
      id: 24,
      slug: "fruits-de-mer",
      name: { en: "Seafood Cassolette", fr: "Fruits de Mer" },
      description: {
        en: "The whole sea, gathered in a single pot.",
        fr: "Toute la mer réunie dans une seule casserole.",
      },
      price: "135 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806003/fruits_de_mer_ts6o1i.jpg",
    },
    {
      id: 25,
      slug: "gambas-pil-pil",
      name: { en: "Spicy Prawns Pil Pil", fr: "Gambas Pil Pil" },
      description: {
        en: "A light kick of spice to wake up curious palates.",
        fr: "Une légère touche de piquant pour réveiller les palais curieux.",
      },
      price: "95 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806004/Gambas_Pil_Pil_dqlsbe.jpg",
    },
    {
      id: 26,
      slug: "boulette-de-merlan",
      name: { en: "Whiting Fish Ball", fr: "Boulette de Merlan" },
      description: {
        en: "A specialty as simple and sincere as the best recipes.",
        fr: "Une spécialité simple et sincère comme les meilleures recettes.",
      },
      price: "90 DH",
      image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805994/Boulette_de_Merlan_mhrrqa.jpg",
    },
  ],
};

export const tagineCategory: MenuCategory = {
  id: "tagines",
  name: { en: "Tagines", fr: "Tagines" },
  description: {
    en: "Patience, spices, and Moroccan craft, gathered in a single dish.",
    fr: "La patience, les épices et le savoir-faire marocain réunis dans un seul plat.",
  },
  dishes: [
    chefHeroDish,
    {
      id: 66,
      slug: "tangia",
      name: { en: "Tangia", fr: "Tangia" },
      description: {
        en: "A slow-cooked specialty from Marrakech.",
        fr: "Une spécialité marrakchie mijotée lentement.",
      },
      price: "130 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/v1792496159/Steaming_Clay_Pot_Stew_gbejoc.png",
    },
    {
      id: 43,
      slug: "kebab-maghdour",
      name: { en: "Kebab Maghdour", fr: "Kebab Maghdour" },
      description: {
        en: "A generous dish with real character.",
        fr: "Un plat généreux au caractère bien affirmé.",
      },
      price: "100 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806015/Kebab_Maghdour_ipzvsw.jpg",
    },
    {
      id: 44,
      slug: "kefta",
      name: { en: "Kefta Tagine", fr: "Kefta" },
      description: {
        en: "A sauce so good it always calls for more bread.",
        fr: "Une sauce si bonne qu'elle mérite toujours plus de pain.",
      },
      price: "110 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784821813/kafta_ntep6l.jpg",
    },
    {
      id: 45,
      slug: "cervelle",
      name: { en: "Brain Tagine", fr: "Cervelle" },
      description: {
        en: "The authentic specialty reserved for lovers of tradition.",
        fr: "La spécialité authentique réservée aux amateurs de traditions.",
      },
      price: "120 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805997/Cervelle_qpzzal.jpg",
    },
    {
      id: 46,
      slug: "queue-de-boeuf",
      name: { en: "Oxtail Tagine (Kaawi)", fr: "Queue de Bœuf (Kaawi)" },
      description: {
        en: "Slow-simmered to bring out its full richness.",
        fr: "Mijotée lentement pour révéler toute sa richesse.",
      },
      price: "135 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784821813/Queue_de_B%C5%93uf_quehes.jpg",
    },
    {
      id: 47,
      slug: "pied-de-veau",
      name: { en: "Veal Trotter Tagine (Hargma)", fr: "Pied de Veau (Hargma)" },
      description: {
        en: "The definition of Moroccan comfort food.",
        fr: "La définition même du plat réconfortant marocain.",
      },
      price: "145 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/v1790938916/Rustic_Moroccan_Tagine_Feast_s8jjrz.png",
    },
  ],
};

export const dessertCategory: MenuCategory = {
  id: "desserts",
  name: { en: "Desserts", fr: "Desserts" },
  description: {
    en: "Because there's always room for something sweet.",
    fr: "Parce qu'il reste toujours une place pour une douceur.",
  },
  dishes: [
    {
      id: 53,
      slug: "creme-caramel",
      name: { en: "Crème Caramel", fr: "Crème Caramel" },
      description: {
        en: "A classic sweetness with a delicately nostalgic taste.",
        fr: "Une douceur classique au goût délicatement régressif.",
      },
      price: "45 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805999/Cr%C3%A8me_Caramel_adghpu.jpg",
    },
    {
      id: 54,
      slug: "tarte-au-citron",
      name: { en: "Lemon Tart", fr: "Tarte au Citron" },
      description: {
        en: "Fresh, light, and subtly tangy.",
        fr: "Fraîche, légère et subtilement acidulée.",
      },
      price: "50 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784999462/IMG_7258_ja93va.jpg",
    },
    {
      id: 55,
      slug: "gateau-glace",
      name: { en: "Ice Cream Cake", fr: "Gâteau Glacé" },
      description: {
        en: "The cool finishing touch that ends the meal in style.",
        fr: "La touche fraîche qui termine le repas avec style.",
      },
      price: "70 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784806006/G%C3%A2teau_Glac%C3%A9_pw1qob.jpg",
    },
    {
      id: 56,
      slug: "assortiment-de-glaces",
      name: { en: "Ice Cream Assortment", fr: "Assortiment de Glaces" },
      description: {
        en: "For those who refuse to choose just one flavor.",
        fr: "Pour ceux qui refusent de choisir un seul parfum.",
      },
      price: "75 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805985/Assortiment_de_Glaces_mgt0w9.jpg",
    },
    {
      id: 57,
      slug: "banoffee-pie",
      name: { en: "Banoffee Pie", fr: "Banoffee Pie" },
      description: {
        en: "Banana, caramel, and instant happiness.",
        fr: "Banane, caramel et bonheur immédiat.",
      },
      price: "55 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805990/Banoffee_Pie_tgqmtv.jpg",
    },
    {
      id: 58,
      slug: "assiette-de-fruits",
      name: { en: "Fruit Plate", fr: "Assiette de Fruits" },
      description: {
        en: "A light finale on a fresh, colorful note.",
        fr: "Une finale légère pour finir sur une note fraîche et colorée.",
      },
      price: "60 DH",
      image:
        "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784805988/Assiette_de_Fruits_zvqj6t.jpg",
    },
  ],
};

/** Owner-requested additions; sandwich images are AI-generated illustrations. */
export const sandwichesCategory: MenuCategory = {
  id: "sandwiches-burgers",
  name: { en: "Sandwiches & Burgers", fr: "Sandwichs & Burgers" },
  dishes: [
    {
      id: 59,
      slug: "sandwich-merguez",
      name: { en: "Merguez Sandwich", fr: "Sandwich Merguez" },
      description: {
        en: "Bold merguez flavor with a little kick in every bite.",
        fr: "Le caractère de la merguez, une touche relevée à chaque bouchée.",
      },
      price: "95 DH",
      image: "/images/menu/sandwich-merguez.png",
    },
    {
      id: 60,
      slug: "sandwich-boulfaf",
      name: { en: "Boulfaf Sandwich", fr: "Sandwich Boulfaf" },
      description: {
        en: "All the character of Moroccan boulfaf in a hearty sandwich.",
        fr: "Tout le caractère du boulfaf marocain dans un sandwich généreux.",
      },
      price: "95 DH",
      image: "/images/menu/sandwich-boulfaf.png",
    },
    {
      id: 61,
      slug: "sandwich-viande",
      name: { en: "Beef Sandwich", fr: "Sandwich Viande" },
      description: {
        en: "Rich beef flavor for a hearty, satisfying bite.",
        fr: "Toute la saveur du bœuf pour une pause généreuse et gourmande.",
      },
      price: "95 DH",
      image: "/images/menu/sandwich-viande.png",
    },
    {
      id: 62,
      slug: "sandwich-poulet",
      name: { en: "Chicken Sandwich", fr: "Sandwich Poulet" },
      description: {
        en: "A comforting chicken classic for any appetite.",
        fr: "Un classique au poulet, simple et réconfortant.",
      },
      price: "95 DH",
      image: "/images/menu/sandwich-poulet.png",
    },
    {
      id: 63,
      slug: "sandwich-kefta",
      name: { en: "Kefta Sandwich", fr: "Sandwich Kefta" },
      description: {
        en: "The familiar flavors of Moroccan kefta in every bite.",
        fr: "Les saveurs de la kefta marocaine à chaque bouchée.",
      },
      price: "95 DH",
      image: "/images/menu/sandwich-kefta.png",
    },
    {
      id: 64,
      slug: "club-sandwich",
      name: { en: "Club Sandwich", fr: "Club Sandwich" },
      description: {
        en: "A generous classic, stacked with flavor.",
        fr: "Un grand classique, généreux à chaque étage.",
      },
      price: "120 DH",
      image: "/images/menu/club-sandwich.png",
    },
    {
      id: 65,
      slug: "cheeseburger",
      name: { en: "Cheeseburger", fr: "Cheeseburger" },
      description: {
        en: "Cheesy comfort for a truly satisfying burger break.",
        fr: "Une pause burger gourmande pour les amateurs de fromage.",
      },
      price: "120 DH",
      image: "/images/menu/cheeseburger.png",
    },
  ],
};

export const foodCategories: MenuCategory[] = [
  fanFavoritesCategory,
  tapasCategory,
  saladesCategory,
  grillCategory,
  sandwichesCategory,
  friturePoissonCategory,
  saveursDailleursCategory,
  cassolettesCategory,
  tagineCategory,
  dessertCategory,
];
