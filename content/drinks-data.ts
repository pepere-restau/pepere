import type { DrinkCategory } from "@/types/menu";

/**
 * Transcribed from the restaurant's own bar & wine card. A few entries were
 * cropped out of frame in the source photos — those are listed with no
 * `price` rather than a guessed number:
 * - the last Apéritifs row was cut off, so the list stops at "Kir Royal"
 * - "Mateus" (Vins Rosés) and "Café" (Boissons Soft) had their prices cropped
 */

export const winesCategory: DrinkCategory = {
  id: "wines",
  name: { en: "Wines", fr: "Vins" },
  subcategories: [
    {
      id: "sangria",
      name: { en: "Sangria", fr: "Sangria" },
      items: [
        { name: "Sangria Rouge / Blanc / Rosé", price: "220 DH" },
      ],
    },
    {
      id: "vins-rouges",
      name: { en: "Red Wine", fr: "Vins Rouges" },
      items: [
        { name: "CB Signature", unit: "glass", price: "90 DH" },
        { name: "Le Petit Clos", unit: "glass", price: "70 DH" },
        { name: "La Vieille Ferme", unit: "bottle", price: "280 DH" },
        { name: "Saint Émilion Gros Caillou", unit: "bottle", price: "480 DH" },
        { name: "Côtes du Rhône Réserve Perrin", unit: "bottle", price: "360 DH" },
        { name: "Bourgogne Pinot Noir à Rodet", unit: "bottle", price: "520 DH" },
        { name: "Brouilly Thorin", unit: "bottle", price: "510 DH" },
        { name: "Marques de Cáceres", unit: "bottle", price: "330 DH" },
        { name: "Blason d'Issan Margaux", unit: "bottle", price: "890 DH" },
        { name: "Le Petit Clos", unit: "bottle", price: "150 DH" },
        { name: "Médaillon", unit: "half", price: "180 DH" },
        { name: "Médaillon", unit: "bottle", price: "300 DH" },
        { name: "S de Siroua", unit: "half", price: "180 DH" },
        { name: "S de Siroua", unit: "bottle", price: "310 DH" },
        { name: "Aït Souala Rouge", unit: "bottle", price: "350 DH" },
        { name: "Château Roslane AOC Coteau de l'Atlas", unit: "bottle", price: "600 DH" },
        { name: "CB Signature", unit: "bottle", price: "410 DH" },
        { name: "CB Initiales", unit: "bottle", price: "510 DH" },
        { name: "Tandem", unit: "bottle", price: "600 DH" },
        { name: "Azayi", unit: "bottle", price: "600 DH" },
      ],
    },
    {
      id: "vins-blancs",
      name: { en: "White Wine", fr: "Vins Blancs" },
      items: [
        { name: "CB Signature", unit: "glass", price: "90 DH" },
        { name: "Le Petit Clos", unit: "glass", price: "70 DH" },
        { name: "La Vieille Ferme", unit: "bottle", price: "280 DH" },
        { name: "Médaillon", unit: "half", price: "180 DH" },
        { name: "Médaillon", unit: "bottle", price: "300 DH" },
        { name: "CB Initiales", unit: "bottle", price: "510 DH" },
        { name: "CB Signature", unit: "bottle", price: "410 DH" },
        { name: "Chablis Tremblay", unit: "bottle", price: "460 DH" },
        { name: "Le Petit Clos", unit: "bottle", price: "150 DH" },
        { name: "S de Seroua", unit: "half", price: "180 DH" },
        { name: "S de Seroua", unit: "bottle", price: "310 DH" },
        { name: "La Tour Roslane AOC Coteaux de l'Atlas", unit: "bottle", price: "400 DH" },
        { name: "Marques de Cáceres", unit: "bottle", price: "330 DH" },
      ],
    },
    {
      id: "vins-roses",
      name: { en: "Rosé Wine", fr: "Vins Rosés" },
      items: [
        { name: "Le Petit Clos", unit: "glass", price: "70 DH" },
        { name: "Médaillon", unit: "half", price: "180 DH" },
        { name: "Médaillon", unit: "bottle", price: "300 DH" },
        { name: "S de Seroua", unit: "half", price: "180 DH" },
        { name: "S de Seroua", unit: "bottle", price: "310 DH" },
        { name: "Le Petit Clos", unit: "bottle", price: "390 DH" },
        { name: "Pétale de Rose", unit: "bottle", price: "380 DH" },
        { name: "Côtes de Provence Manon Ravoire", unit: "bottle", price: "650 DH" },
        { name: "Miraval", unit: "bottle", price: "280 DH" },
        { name: "Mateus", unit: "bottle" },
      ],
    },
  ],
};

export const beersCategory: DrinkCategory = {
  id: "beers",
  name: { en: "Beers", fr: "Bières" },
  subcategories: [
    {
      id: "bieres",
      name: { en: "Beers", fr: "Bières" },
      items: [
        { name: "Pression Casablanca 25cl", price: "45 DH" },
        { name: "Pression Casablanca 50cl", price: "80 DH" },
        { name: "Pression Special Gold 25cl", price: "50 DH" },
        { name: "Pression Special Gold 50cl", price: "70 DH" },
        { name: "Special Gold 25cl", price: "35 DH" },
        { name: "Casablanca 25cl", price: "45 DH" },
        { name: "Heineken 25cl", price: "40 DH" },
        { name: "San Miguel 25cl", price: "45 DH" },
        { name: "San Miguel 0%", price: "55 DH" },
        { name: "San Miguel Fresca 33cl", price: "60 DH" },
      ],
    },
  ],
};

export const spiritsCategory: DrinkCategory = {
  id: "spirits",
  name: { en: "Spirits", fr: "Spiritueux" },
  subcategories: [
    {
      id: "whiskies-classic",
      name: { en: "Whiskies — Classic", fr: "Whiskies Classic" },
      items: [
        { name: "Monkey Shoulder", price: "80 DH" },
        { name: "Glenfiddich 12 Ans", price: "100 DH" },
        { name: "Dewar's 12 Ans", price: "90 DH" },
        { name: "Tullamore D.E.W. Irish Whiskey", price: "80 DH" },
        { name: "Johnnie Walker Red Label", price: "80 DH" },
        { name: "Jack Daniel's", price: "80 DH" },
        { name: "Jack Daniel's Honey", price: "80 DH" },
      ],
    },
    {
      id: "whiskies-premium",
      name: { en: "Whiskies — Premium", fr: "Whiskies Premium" },
      items: [
        { name: "Glenfiddich 15 Ans", price: "130 DH" },
        { name: "Glenfiddich 18 Ans", price: "150 DH" },
        { name: "Johnnie Walker Black Label", price: "100 DH" },
      ],
    },
    {
      id: "gin-vodka",
      name: { en: "Gin & Vodka", fr: "Gin & Vodka" },
      items: [
        { name: "Russian Standard", price: "80 DH" },
        { name: "Grey Goose", price: "100 DH" },
        { name: "Tito's Handmade Vodka", price: "80 DH" },
        { name: "Bombay Sapphire", price: "90 DH" },
        { name: "Hendrick's", price: "100 DH" },
      ],
    },
    {
      id: "aperitifs",
      name: { en: "Apéritifs", fr: "Apéritifs" },
      items: [
        { name: "Ricard", price: "80 DH" },
        { name: "Martini Prosecco Brut / Rosé", price: "80 DH" },
        { name: "Porto", price: "90 DH" },
        { name: "Kir au Vin Blanc", price: "80 DH" },
        { name: "Kir Royal", price: "100 DH" },
      ],
    },
    {
      id: "digestifs",
      name: { en: "Digestifs", fr: "Digestifs" },
      items: [
        { name: "Get 27", price: "80 DH" },
        { name: "Amaretto Disaronno", price: "70 DH" },
        { name: "Cointreau", price: "80 DH" },
        { name: "Calvados Boulard VSOP", price: "90 DH" },
        { name: "Cognac ABK6 VS", price: "90 DH" },
        { name: "Armagnac VS", price: "80 DH" },
        { name: "Poire Williams", price: "80 DH" },
        { name: "Grappa", price: "70 DH" },
        { name: "Fernet-Branca", price: "70 DH" },
        { name: "Sambuca", price: "70 DH" },
        { name: "Limoncello", price: "70 DH" },
      ],
    },
    {
      id: "shots",
      name: { en: "Shots", fr: "Shots" },
      items: [
        { name: "Tequila San José Silver", price: "70 DH" },
        { name: "Tequila Patrón Silver", price: "130 DH" },
        { name: "Marie Brizard Limoncini", price: "60 DH" },
        { name: "Grappa Bottega", price: "60 DH" },
        { name: "Tequila Silver", price: "70 DH" },
      ],
    },
  ],
};

export const softDrinksCategory: DrinkCategory = {
  id: "soft-drinks",
  name: { en: "Soft Drinks", fr: "Boissons Soft" },
  subcategories: [
    {
      id: "boissons-soft",
      name: { en: "Soft Drinks", fr: "Boissons Soft" },
      items: [
        { name: "Cocktail Sans Alcool", price: "100 DH" },
        { name: "Jus de Fruits", price: "70 DH" },
        { name: "Red Bull", price: "40 DH" },
        { name: "Soda", price: "25 DH" },
        { name: "Sidi Ali 1.5L", price: "30 DH" },
        { name: "Sidi Ali 0.5L", price: "20 DH" },
        { name: "Oulmès 1L", price: "30 DH" },
        { name: "Oulmès 0.5L", price: "20 DH" },
        { name: "Café" },
      ],
    },
  ],
};

export const drinkCategories: DrinkCategory[] = [
  winesCategory,
  beersCategory,
  spiritsCategory,
  softDrinksCategory,
];
