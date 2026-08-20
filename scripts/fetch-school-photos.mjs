import { mkdir, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve("public/images");
const SCHOOLS = path.join(ROOT, "schools");
const ARTICLES = path.join(ROOT, "articles");
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36";

const official = {
  "tokyo-sushi-academy": "https://www.sushiacademy.co.jp/",
  "tokyo-sushi-washoku": "https://www.sushi-tokyo.jp/",
  "insyokujin-tokyo": "https://insyokujin.ac/",
  "insyokujin-osaka": "https://insyokujin.ac/",
  "insyokujin-awaji": "https://insyokujin.ac/",
  "insyokujin-fukuoka": "https://insyokujin.ac/",
  "ginza-onodera": "https://onodera-sushiacademy.com/",
  "sushi-juku-tokyo": "https://jsatokyo.com/",
  "sushi-college-tokyo": "https://season2-group.com/sushi-college/",
  "tokyo-sushi-school": "https://sushi-school.tokyo/",
  tssa: "https://tssa.jp/",
  jsla: "https://jsla.academy/",
  "nihonbashi-sushi": "https://www.nihonbashi.cc/",
  inshokujuku: "https://gf-support.com/inshokujyuku/course/sushi",
  "kyoto-chorishi": "https://www.kyoto-chorishi.ac.jp/",
  "kyoto-sushi-academy": "https://kyoto-sushiacademy.jp/",
  "masazushi-dojo": "https://masazushi.co.jp/masazushidojo/",
  "sushi-labo": "https://www.sushi-lab.jp/",
  "kimiya-sushi": "https://sushiichitaka.my.canva.site/",
  "osuno-sushi": "https://www.osunosushi.com/",
  "sushi-university": "https://sushi-university.com/",
  "lecole-vantan": "https://www.lecole.jp/",
  "hokuriku-sushi-academy": "https://hokuriku-sushiacademy.jp/",
  "sushi-school-narita": "https://www.sushischoolnarita.com/",
  "all-japan-sushi-academy": "https://www.alljapan-sushi-academy.com/",
};

const fallbacks = {
  "tokyo-sushi-academy": [
    "https://ferret-one.akamaized.net/images/5e38cd345436af38f9e645b3/original.jpeg?utime=1580780852",
  ],
  "insyokujin-tokyo": ["https://insyokujin.ac/wp-content/themes/insyokujinCollege/assets/img/mv-sp-1.jpg.webp"],
  "insyokujin-osaka": ["https://insyokujin.ac/wp-content/themes/insyokujinCollege/assets/img/school-osaka_sp.jpg"],
  "insyokujin-awaji": ["https://insyokujin.ac/wp-content/themes/insyokujinCollege/assets/img/school-awaji_sp.jpg"],
  "insyokujin-fukuoka": ["https://insyokujin.ac/wp-content/themes/insyokujinCollege/assets/img/school-fukuoka_sp.jpg"],
  "ginza-onodera": ["https://onodera-sushiacademy.com/img/top/mv.jpg"],
  "sushi-juku-tokyo": [
    "https://jsatokyo.com/wp-content/themes/sushi-juku-20251031_r10.1.5/images/topimg.jpg",
  ],
  "sushi-college-tokyo": [
    "https://season2-group.com/sushi-college/wp-content/themes/season-two/images/about.webp",
  ],
  "tokyo-sushi-school": ["https://sushi-school.tokyo/img-webp/mainPhotoParts2.webp"],
  tssa: ["https://tssa.jp/wp-content/themes/sushi_theme/img/index/bnr_course.jpg"],
  "masazushi-dojo": [
    "https://masazushi.co.jp/masazushidojo/wp-content/themes/otaru-dojo_jp/assets/images/top_mvimg.png",
  ],
  "sushi-labo": ["https://www.sushi-lab.jp/shared/img/index/sec1_img.jpg"],
  "hokuriku-sushi-academy": ["https://hokuriku-sushiacademy.jp/img/home/img-hero.webp"],
  "sushi-school-narita": ["https://www.sushischoolnarita.com/wp-content/uploads/image01.webp"],
  "osuno-sushi": [
    "https://static.wixstatic.com/media/0d1370_1cfbf8ee67a849c29d63ee07d7ea6b9b~mv2.png",
  ],
  "sushi-university": ["https://sushi-university.com/lp/images/about.jpg"],
  "all-japan-sushi-academy": ["https://www.alljapan-sushi-academy.com/img/common/logo.png"],
  nihonbashi: ["https://www.nihonbashi.cc/image/sushi_03.png"],
  "nihonbashi-sushi": ["https://www.nihonbashi.cc/image/gaikan.png"],
  jsla: ["https://jsla.academy/images/re_top8.jpg"],
};

const wikimedia = {
  hero: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sushi_platter.jpg/1280px-Sushi_platter.jpg",
  nigiri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sushi_platter.jpg/960px-Sushi_platter.jpg",
  platter: "https://upload.wikimedia.org/wikipedia/commons/5/54/Edamame_and_sushi.jpg",
};

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const type = res.headers.get("content-type") || "";
  if (!type.includes("image") && !url.match(/\.(jpg|jpeg|png|webp|gif)(\?|$)/i)) {
    throw new Error(`not image: ${type} ${url}`);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 2000) throw new Error(`too small ${buf.length} ${url}`);
  await writeFile(dest, buf);
  return buf.length;
}

function absUrl(src, base) {
  try {
    return new URL(src, base).href;
  } catch {
    return null;
  }
}

function pickFromHtml(html, base) {
  const urls = [];
  const og = html.match(/property=["']og:image["'][^>]*content=["']([^"']+)/i) || html.match(/content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
  if (og?.[1]) urls.push(og[1]);
  const tw = html.match(/name=["']twitter:image["'][^>]*content=["']([^"']+)/i);
  if (tw?.[1]) urls.push(tw[1]);
  for (const m of html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)) {
    const src = m[1];
    if (/logo|icon|sprite|svg|1x1|pixel|badge/i.test(src)) continue;
    urls.push(src);
  }
  return [...new Set(urls.map((u) => absUrl(u, base)).filter(Boolean))];
}

async function fetchHtml(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "text/html" }, redirect: "follow" });
  if (!res.ok) throw new Error(`html ${res.status} ${url}`);
  return { html: await res.text(), final: res.url };
}

async function saveSchool(slug, pageUrl) {
  const dest = path.join(SCHOOLS, `${slug}.jpg`);
  const tried = [];
  const list = [...(fallbacks[slug] || [])];
  try {
    const { html, final } = await fetchHtml(pageUrl);
    list.push(...pickFromHtml(html, final).slice(0, 8));
  } catch (e) {
    tried.push(String(e.message || e));
  }
  for (const url of list) {
    try {
      const n = await download(url, dest);
      console.log("OK", slug, n, url.slice(0, 90));
      return true;
    } catch (e) {
      tried.push(`${url} -> ${e.message}`);
    }
  }
  console.log("FAIL", slug, tried.slice(0, 3).join(" | "));
  return false;
}

async function main() {
  await mkdir(SCHOOLS, { recursive: true });
  await mkdir(ARTICLES, { recursive: true });

  const commons = [
    ["hero-real.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sushi_in_Japan.jpg/1280px-Sushi_in_Japan.jpg"],
    ["nigiri-real.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sushi_sashimi_platter.jpg/1280px-Sushi_sashimi_platter.jpg"],
    ["counter-real.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sushi_bar.jpg/1280px-Sushi_bar.jpg"],
  ];
  const commonsAlt = [
    ["hero-real.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sushi.jpg/1280px-Sushi.jpg"],
    ["nigiri-real.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Nigiri_sushi.jpg/1280px-Nigiri_sushi.jpg"],
    ["counter-real.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sushi.jpg/1280px-Sushi.jpg"],
  ];

  for (const [name, url] of [...commons, ...commonsAlt]) {
    const dest = path.join(ROOT, name);
    if (existsSync(dest) && (await import("node:fs")).statSync(dest).size > 8000) continue;
    try {
      await download(url, dest);
      console.log("OK commons", name);
    } catch (e) {
      console.log("FAIL commons", name, e.message);
    }
  }

  for (const [slug, url] of Object.entries(official)) {
    await saveSchool(slug, url);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
