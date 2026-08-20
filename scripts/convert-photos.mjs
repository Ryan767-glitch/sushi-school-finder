import sharp from "sharp";
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

async function download(url, dest) {
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const jpg = await sharp(buf).rotate().jpeg({ quality: 82 }).resize(1600, 1000, { fit: "cover" }).toBuffer();
  await writeFile(dest, jpg);
  console.log("saved", dest, jpg.length);
}

async function toJpeg(file) {
  const tmp = file + ".tmp.jpg";
  const buf = await sharp(file).rotate().jpeg({ quality: 82 }).resize(1400, 900, { fit: "cover", withoutEnlargement: true }).toBuffer();
  if (buf.length < 8000) throw new Error("too small after convert " + buf.length);
  await writeFile(tmp, buf);
  await writeFile(file, buf);
  console.log("converted", path.basename(file), buf.length);
}

const extras = {
  "hero-real.jpg": "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1600&q=80",
  "nigiri-real.jpg": "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1600&q=80",
  "counter-real.jpg": "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1600&q=80",
};

const better = {
  "tokyo-sushi-washoku": "https://www.sushi-tokyo.jp/quickcode/sushi_2020/themes/sushi/common/css/images/common/logo.png",
  "kyoto-chorishi": "https://www.kyoto-chorishi.ac.jp/CMS/wp-content/themes/kyocho/images/top/mv.jpg",
};

async function main() {
  const dir = "public/images";
  for (const [name, url] of Object.entries(extras)) {
    try {
      await download(url, path.join(dir, name));
    } catch (e) {
      console.log("fail extra", name, e.message);
    }
  }
  const schools = path.join(dir, "schools");
  for (const f of await readdir(schools)) {
    if (!/\.(jpg|jpeg|png|webp)$/i.test(f)) continue;
    try {
      await toJpeg(path.join(schools, f));
    } catch (e) {
      console.log("fail convert", f, e.message);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
