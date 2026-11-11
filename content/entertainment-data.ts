import type { LocalizedText } from "@/types/menu";

export type EntertainmentIcon = "music" | "disc" | "calendar" | "partyPopper";

export interface EntertainmentEvent {
  id: string;
  icon: EntertainmentIcon;
  name: LocalizedText;
  description: LocalizedText;
}

export const ENTERTAINMENT_EVENTS: EntertainmentEvent[] = [
  {
    id: "live-music",
    icon: "music",
    name: { en: "Live Music", fr: "Musique Live" },
    description: {
      en: "Local acts on select nights, right in the middle of the room.",
      fr: "Des artistes locaux certains soirs, en plein cœur de la salle.",
    },
  },
  {
    id: "dj-nights",
    icon: "disc",
    name: { en: "DJ Nights", fr: "Soirées DJ" },
    description: {
      en: "Resident DJs keep the energy going after the final whistle.",
      fr: "Nos DJs résidents gardent l'énergie après le coup de sifflet final.",
    },
  },
  {
    id: "themed-nights",
    icon: "calendar",
    name: { en: "Themed Nights", fr: "Soirées à Thème" },
    description: {
      en: "Quiz nights, karaoke, and seasonal takeovers that turn any night into an event.",
      fr: "Soirées quiz, karaoké et éditions spéciales qui transforment une simple soirée en événement.",
    },
  },
  {
    id: "weekend-parties",
    icon: "partyPopper",
    name: { en: "Weekend Parties", fr: "Soirées Week-end" },
    description: {
      en: "Pop-up celebrations and a packed dance floor to close out the week right.",
      fr: "Célébrations surprises et piste de danse pleine pour bien finir la semaine.",
    },
  },
];

export interface ShowcaseAct {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  image: string;
}

export const SHOWCASE_ACTS: ShowcaseAct[] = [
  {
    id: "dance-shows",
    name: { en: "Dance Shows", fr: "Spectacles de Danse" },
    description: {
      en: "Choreographed sets and guest dancers that turn the floor into the main event.",
      fr: "Chorégraphies et danseurs invités qui font de la piste le cœur de la soirée.",
    },
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784896948/IMG_7454_rmpvtt.jpg",
  },
  {
    id: "live-singers",
    name: { en: "Live Singers", fr: "Chanteurs Live" },
    description: {
      en: "Real voices, real energy — vocalists who own the room on select nights.",
      fr: "De vraies voix, une vraie énergie — des chanteurs qui enflamment la salle certains soirs.",
    },
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784897093/110ba5f8-87d1-41bb-841d-c4edb7b65fdc_kydp6w.jpg",
  },
  {
    id: "live-band",
    name: { en: "Live Band", fr: "Groupe Live" },
    description: {
      en: "A full band on select nights, playing the room like it's the main stage.",
      fr: "Un groupe live certains soirs, qui joue la salle comme la scène principale.",
    },
    image: "https://res.cloudinary.com/udflrhgq/image/upload/v1784898135/IMG_7525_zjanm2.jpg",
  },
  {
    id: "live-performances",
    name: { en: "Live Performances", fr: "Performances Live" },
    description: {
      en: "Guest acts and one-off performances that turn a regular night into a show.",
      fr: "Artistes invités et performances uniques qui transforment une soirée ordinaire en spectacle.",
    },
    image: "https://res.cloudinary.com/udflrhgq/image/upload/f_auto,q_auto,w_1600,c_limit/v1784992118/IMG_7559.jpg_untckf.jpg",
  },
];
