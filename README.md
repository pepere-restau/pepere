# Pépère

Restaurant · Sports Bar · Grill — a premium, cinematic dining website.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui · Framer Motion · next-intl

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000/en](http://localhost:3000/en) (or `/fr`).

## Structure

- `app/[locale]/` — routes, one tree serving both `en` and `fr`
- `i18n/` — next-intl routing, navigation, and request config
- `messages/` — translation files (`en.json`, `fr.json`)
- `lib/` — shared utilities, motion tokens, fonts
- `types/` — shared TypeScript types
- `components/ui/` — shadcn/ui primitives

Brand tokens (colors, fonts, radius) are defined in `app/globals.css` via Tailwind v4's `@theme`.
