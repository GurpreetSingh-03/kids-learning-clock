// One-off: download Higgsfield-generated scenes and emit web-optimized assets.
// Usage: node scripts/process-scenes.mjs
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3EkvbR6wlkygIbID27BgYrBBHvp/";

// dest is relative to public/
const ITEMS = [
  { file: "hf_20260624_162628_55aa14c9-2997-4b66-942a-707cf504a6a4.png", dest: "scenes/teach-time.webp", width: 1600 },
  { file: "hf_20260624_162955_0b0289cc-46d2-46aa-9e5e-aa346b164fd2.png", dest: "scenes/analog-vs-digital.webp", width: 1600 },
  { file: "hf_20260624_162957_826ba8f7-5cbf-49e4-86c1-03d32c4a0970.png", dest: "scenes/classroom.webp", width: 1600 },
  { file: "hf_20260624_162959_be4e824b-79e8-418f-8cfc-c89b0d7dad0c.png", dest: "scenes/milestones.webp", width: 1600 },
  { file: "hf_20260624_163002_3c7c007d-34ce-470b-ab29-4b818fd20edf.png", dest: "scenes/teachers.webp", width: 1600 },
  { file: "hf_20260624_163005_9e5bfb9c-d84f-47f8-9dce-4a7df3a69cc1.png", dest: "scenes/parents.webp", width: 1600 },
  { file: "hf_20260624_163008_1586392d-a194-43ee-a8bf-ac3b864572a9.png", dest: "scenes/kindergarten.webp", width: 1600 },
  { file: "hf_20260624_163015_62cd67bb-1365-49c6-81d9-f7284054100e.png", dest: "scenes/second-grade.webp", width: 1600 },
  { file: "hf_20260624_163017_007657ff-63a6-477a-a298-cc4d25a99b38.png", dest: "scenes/sky-castle.webp", width: 1920 },
  { file: "hf_20260624_163019_a5516a53-afc1-4b2b-8c31-b47702f358e5.png", dest: "og-image.png", width: 1200, png: true },
  { file: "hf_20260624_163010_11b8a966-aa9c-43fd-a8a7-c7b903c37143.png", dest: "scenes/first-grade.webp", width: 1600 },
];

const publicDir = path.resolve("public");

for (const item of ITEMS) {
  if (item.file.startsWith("__")) {
    console.log(`SKIP  ${item.dest} (url not ready yet)`);
    continue;
  }
  const url = BASE + item.file;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`FAIL  ${item.dest}: HTTP ${res.status}`);
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const out = path.join(publicDir, item.dest);
  await mkdir(path.dirname(out), { recursive: true });

  let pipeline = sharp(buf).resize({ width: item.width, withoutEnlargement: true });
  pipeline = item.png
    ? pipeline.png({ quality: 90, compressionLevel: 9 })
    : pipeline.webp({ quality: 80 });

  const data = await pipeline.toBuffer();
  await writeFile(out, data);
  console.log(`OK    ${item.dest}  ${(data.length / 1024).toFixed(0)} KB`);
}

console.log("done");
