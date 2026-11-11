import { mkdir, writeFile } from "fs/promises";
import { dirname, join } from "path";

const ROOT = new URL("../public", import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/, "$1");

const IMAGES = [
  { path: "images/sports/bar-watching-tv.jpg", id: "1671368913134-c211bc02487f", w: 1600, h: 1000 },
  { path: "images/sports/chicken-wings.jpg", id: "1578875858391-50798bc2ffee", w: 1200, h: 1200 },
  { path: "images/sports/beer-cheers.jpg", id: "1532634922-8fe0b757fb13", w: 1200, h: 900 },
  { path: "images/entertainment/dj-live-music.jpg", id: "1723293874527-020d0ced471e", w: 1200, h: 1500 },
  { path: "images/sports/stadium-crowd.jpg", id: "1766756467595-fd3f1f62d562", w: 1600, h: 1000 },
  { path: "images/entertainment/dance-floor.jpg", id: "1758550445795-278c5867493d", w: 1600, h: 1000 },
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
console.log(`Done: ${IMAGES.length} photos downloaded.`);
