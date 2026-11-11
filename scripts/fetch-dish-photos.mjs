import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";

const ROOT = new URL("../public", import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/, "$1");

// Unsplash photo IDs for the Menu page dishes that had no restaurant photography.
// Sourced via web search, verified free (images.unsplash.com, not plus.unsplash.com
// premium) — Unsplash License: free for commercial use, no attribution required.
// These are stock approximations, not photos of the actual dishes (the restaurant
// hasn't photographed this part of the menu yet) — square crop to match the
// existing dish-thumbnail slots (grilled-keftaa-maalouma.jpg, chicken-almond-pastilla.jpg).
const IMAGES = [
  { path: "images/dishes/chicken-emince-mustard-sauce.jpg", id: "1778851243090-10cec14c7ee7" },
  { path: "images/dishes/crispy-fried-calamari.jpg", id: "1763467940825-d067fb3baf22" },
  { path: "images/dishes/sole.jpg", id: "1776097633704-6666ffafc58d" },
  { path: "images/dishes/whiting.jpg", id: "1673436977947-0787164a9abc" },
  { path: "images/dishes/mixed-fried-fish-platter.jpg", id: "1565733618599-cb82f14f34ac" },
  { path: "images/dishes/valencian-paella.jpg", id: "1694685367640-05d6624e57f1" },
  { path: "images/dishes/patatas-bravas.jpg", id: "1565599837634-134bc3aadce8" },
  { path: "images/dishes/spanish-tortilla.jpg", id: "1639669794539-952631b44515" },
  { path: "images/dishes/shrimp-croquettes.jpg", id: "1764337290548-5e116a0030d0" },
  { path: "images/dishes/chicken-croquettes.jpg", id: "1734774924912-dcbb467f8599" },
  { path: "images/dishes/marinated-anchovies.jpg", id: "1560174122-cac0c0bdacc6" },
  { path: "images/dishes/briouates-assortment.jpg", id: "1515022376298-7333f33e704b" },
  { path: "images/dishes/seafood-pastilla.jpg", id: "1530522464290-e32ba6a923a5" },
  { path: "images/dishes/cheese-plate.jpg", id: "1707079288822-be30b3d1de72" },
  { path: "images/dishes/moroccan-fish-tagine.jpg", id: "1492470026006-0e12a33eb7fb" },
  { path: "images/dishes/kebab-maghdour.jpg", id: "1541518763669-27fef04b14ea" },
  { path: "images/dishes/kefta-tagine.jpg", id: "1781941622549-1a54f4364845" },
  { path: "images/dishes/cervelle-tagine.jpg", id: "1661083098412-054431ab7112" },
  { path: "images/dishes/oxtail-tagine.jpg", id: "1608500218861-01091cdc501e" },
  { path: "images/dishes/veal-trotter-tagine.jpg", id: "1445979323117-80453f573b71" },
  { path: "images/dishes/creme-caramel.jpg", id: "1780798465831-de1e4d58ee46" },
  { path: "images/dishes/tarte-au-citron.jpg", id: "1614174486496-344ef3e9d870" },
  { path: "images/dishes/gateau-glace.jpg", id: "1621303837174-89787a7d4729" },
  { path: "images/dishes/assortiment-de-glaces.jpg", id: "1589378884250-431463f05637" },
  { path: "images/dishes/banoffee-pie.jpg", id: "1660485038927-478e032fe2f1" },
  { path: "images/dishes/assiette-de-fruits.jpg", id: "1665589048355-579bc80169d1" },
];

for (const img of IMAGES) {
  const url = `https://images.unsplash.com/photo-${img.id}?w=800&h=800&fit=crop&q=80&fm=jpg`;
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
console.log(`Done: ${IMAGES.length} dish photos downloaded.`);
