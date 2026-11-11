import { readdir, writeFile } from "fs/promises";
import { join, relative, extname } from "path";
import { config } from "dotenv";
import { v2 as cloudinary } from "cloudinary";

config({ path: new URL("../.env.local", import.meta.url).pathname.replace(/^\/([a-zA-Z]:)/, "$1") });

/**
 * One-off migration: uploads every file under public/images to Cloudinary
 * (preserving the folder structure under a "pepere/" prefix) and writes a
 * local-path -> Cloudinary-URL map used to update source references in a
 * second pass. Re-run is safe (overwrite: true) if assets change later.
 */

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const ROOT = new URL("../public/images", import.meta.url).pathname.replace(
  /^\/([a-zA-Z]:)/,
  "$1",
);

const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }
  return files;
}

function withAutoTransform(secureUrl, resourceType) {
  // f_auto (best format per browser) + q_auto (best quality/size trade-off)
  // inserted right after /upload/ — the standard Cloudinary delivery pattern.
  return secureUrl.replace(
    `/${resourceType}/upload/`,
    `/${resourceType}/upload/f_auto,q_auto/`,
  );
}

const outPath = new URL("./cloudinary-map.json", import.meta.url).pathname.replace(
  /^\/([a-zA-Z]:)/,
  "$1",
);

const files = await walk(ROOT);
const map = {};

for (const filePath of files) {
  const rel = relative(ROOT, filePath).split("\\").join("/"); // windows-safe
  const localPath = `/images/${rel}`;
  const ext = extname(rel);
  const withoutExt = rel.slice(0, -ext.length);
  const resourceType = VIDEO_EXTENSIONS.has(ext.toLowerCase()) ? "video" : "image";
  const publicId = `pepere/${withoutExt}`;

  process.stdout.write(`Uploading ${rel} (${resourceType})... `);

  // Videos go through the chunked large-file uploader — this hero video is
  // well past the ~100MB limit of the plain upload endpoint.
  const result =
    resourceType === "video"
      ? await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_large(
            filePath,
            { public_id: publicId, resource_type: resourceType, overwrite: true, chunk_size: 20_000_000 },
            (error, uploadResult) => (error ? reject(error) : resolve(uploadResult)),
          );
        })
      : await cloudinary.uploader.upload(filePath, {
          public_id: publicId,
          resource_type: resourceType,
          overwrite: true,
        });

  map[localPath] = withAutoTransform(result.secure_url, resourceType);
  // Persisted after every file — a later failure (e.g. one oversized video)
  // shouldn't cost the uploads that already succeeded.
  await writeFile(outPath, JSON.stringify(map, null, 2));
  console.log("done");
}

console.log(`\nWrote ${Object.keys(map).length} entries to scripts/cloudinary-map.json`);
