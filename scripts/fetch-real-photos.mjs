import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";

const ROOT = new URL("../public", import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/, "$1");

// Unsplash photo IDs, sourced via web search, verified free (images.unsplash.com,
// not plus.unsplash.com premium) — Unsplash License: free for commercial use,
// no attribution required. w/h below match each slot's real usage aspect ratio.
const IMAGES = [
  { path: "images/hero/door.jpg", id: "1723713296731-a82e99a1873e", w: 1920, h: 1200 },

  { path: "images/dishes/grilled-ribeye-maitre-dhotel-butter.jpg", id: "1503220178855-e31ec372b8ad", w: 1200, h: 1500 },
  { path: "images/dishes/braised-lamb-shank.jpg", id: "1771285119408-04cca3b35036", w: 1200, h: 1500 },
  { path: "images/dishes/whole-grilled-sea-bass.jpg", id: "1628573587716-72312ed0df65", w: 1200, h: 1500 },
  { path: "images/dishes/chicken-olive-preserved-lemon-tagine.jpg", id: "1643019237176-8ae0859f1123", w: 1200, h: 900 },
  { path: "images/dishes/monkfish-medallion-mushroom-sauce.jpg", id: "1600699899970-b1c9fadd8f9e", w: 1200, h: 1500 },
  { path: "images/dishes/grilled-keftaa-maalouma.jpg", id: "1767974968707-db3d448d4ef3", w: 800, h: 800 },
  { path: "images/dishes/chicken-almond-pastilla.jpg", id: "1543508185-225c92847541", w: 800, h: 800 },

  { path: "images/story/grill-detail.jpg", id: "1512719724284-dbb9ef47eac5", w: 1600, h: 2000 },
  { path: "images/story/fresh-ingredients.jpg", id: "1757627550652-30788bfce978", w: 1200, h: 900 },

  { path: "images/menu-preview/tagines.jpg", id: "1643019237176-8ae0859f1123", w: 1200, h: 1600 },
  { path: "images/menu-preview/grillades.jpg", id: "1626323109252-0adb3b46692b", w: 1200, h: 1600 },
  { path: "images/menu-preview/cassolettes.jpg", id: "1630175860333-5131bda75071", w: 1200, h: 1600 },
  { path: "images/menu-preview/desserts.jpg", id: "1543508185-225c92847541", w: 1200, h: 1600 },

  { path: "images/gallery/grill-flame.jpg", id: "1613244528600-2343a17843a4", w: 1200, h: 1600 },
  { path: "images/gallery/dining-room.jpg", id: "1744561249162-c597c1670032", w: 1600, h: 1200 },
  { path: "images/gallery/cocktail-pour.jpg", id: "1754490865411-ef87ef00f75f", w: 1400, h: 1400 },
  { path: "images/gallery/plated-tagine.jpg", id: "1586735470060-48eef38c2753", w: 1200, h: 1600 },
  { path: "images/gallery/terrace-dusk.jpg", id: "1760537067216-09d216db8a5a", w: 1600, h: 1200 },
  { path: "images/gallery/chef-hands.jpg", id: "1743112194310-d84d4d833be5", w: 1400, h: 1400 },
  { path: "images/gallery/wine-pour.jpg", id: "1682071308361-008f800abdae", w: 1200, h: 1600 },
  { path: "images/gallery/guests-toast.jpg", id: "1758272133483-281d50324455", w: 1600, h: 1200 },
  { path: "images/gallery/bar-glow.jpg", id: "1768466587161-55db9ed1baa6", w: 1400, h: 1400 },
];

for (const img of IMAGES) {
  const url = `https://images.unsplash.com/photo-${img.id}?w=${img.w}&h=${img.h}&fit=crop&q=80&fm=jpg`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error("FAILED", img.path, res.status);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const outPath = join(ROOT, img.path);
  await mkdir(dirname(outPath), { recursive: true });
  await writeFile(outPath, buf);
  console.log("wrote", img.path, `(${(buf.length / 1024).toFixed(0)}kb)`);
}
console.log(`Done: ${IMAGES.length} real photos downloaded.`);
