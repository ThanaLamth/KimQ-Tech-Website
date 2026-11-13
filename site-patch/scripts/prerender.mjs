// Prerender: mở từng route bằng trình duyệt headless trên bản build production,
// chèn title/meta/canonical/og/JSON-LD đã soạn sẵn, rồi lưu HTML vào dist/prerender/<route>/index.html.
// Chạy SAU `vite build`, khi server production đang chạy ở BASE_URL.
//
//   NODE_ENV=production node dist/index.js &          # hoặc npm start
//   BASE_URL=http://localhost:5000 SEO_DIR=seo node scripts/prerender.mjs dist
//
// SEO_DIR là bản copy của thư mục seo-content/ (cần meta-40-url.json và schema/).
// Q1_CONFIRMED=1 khi CTO đã xác nhận câu trả lời "Dữ liệu được lưu ở đâu?" của AI Gateway.
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const dist = path.resolve(process.argv[2] || "dist");
const outDir = path.join(dist, "prerender");
const BASE = process.env.BASE_URL || "http://localhost:5000";
const SEO = path.resolve(process.env.SEO_DIR || "seo");
const SITE = "https://kimq.tech";
const OG_DEFAULT = `${SITE}/opengraph.jpg`;
const HOLD_FAQ = process.env.Q1_CONFIRMED === "1" ? [] : ["Dữ liệu được lưu ở đâu?"];

const meta = JSON.parse(fs.readFileSync(path.join(SEO, "meta-40-url.json"), "utf8"));
const trustFile = path.resolve("server/trust-routes.json");
const trustRoutes = fs.existsSync(trustFile) ? JSON.parse(fs.readFileSync(trustFile, "utf8")) : [];

function schemaFor(route) {
  const m = route.match(/^\/san-pham\/([^/]+)(\/huong-dan)?$/);
  const file = route === "/" ? "home.jsonld"
    : route === "/san-pham" ? "san-pham.jsonld"
    : m ? path.join(m[2] ? "huong-dan" : "san-pham", `${m[1]}.jsonld`) : null;
  if (!file) return null;
  const full = path.join(SEO, "schema", file);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf8");
  if (raw.includes("__DIEN_NGAY")) {
    console.warn(`  ! ${file}: còn ngày giả __DIEN_NGAY__, bỏ qua JSON-LD trang này`);
    return null;
  }
  const data = JSON.parse(raw);
  for (const node of data["@graph"] || [data]) {
    if (node["@type"] === "FAQPage") {
      node.mainEntity = node.mainEntity.filter((q) => !HOLD_FAQ.includes(q.name));
    }
  }
  return JSON.stringify(data);
}

const pages = [
  ...meta.map((m) => ({ route: new URL(m.url).pathname.replace(/\/$/, "") || "/", title: m.title, description: m.description })),
  ...trustRoutes.map((route) => ({ route })),
];

const browser = await chromium.launch();
const context = await browser.newContext({ locale: "vi-VN" });
let failed = 0;
for (const p of pages) {
  const page = await context.newPage();
  try {
    await page.goto(BASE + p.route, { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForSelector("h1", { timeout: 15000 });
    const jsonLd = schemaFor(p.route);
    await page.evaluate(({ p, jsonLd, SITE, OG_DEFAULT }) => {
      const head = document.head;
      const set = (selector, attrs) => {
        let el = head.querySelector(selector);
        if (!el) { el = document.createElement(selector.startsWith("link") ? "link" : "meta"); head.appendChild(el); }
        for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
      };
      document.documentElement.lang = "vi";
      const title = p.title || document.title;
      const description = p.description || head.querySelector('meta[name="description"]')?.content || "";
      const url = SITE + (p.route === "/" ? "/" : p.route);
      document.title = title;
      set('meta[name="description"]', { name: "description", content: description });
      set('link[rel="canonical"]', { rel: "canonical", href: url });
      set('meta[property="og:title"]', { property: "og:title", content: title });
      set('meta[property="og:description"]', { property: "og:description", content: description });
      set('meta[property="og:url"]', { property: "og:url", content: url });
      set('meta[property="og:locale"]', { property: "og:locale", content: "vi_VN" });
      set('meta[property="og:site_name"]', { property: "og:site_name", content: "KimQ Tech" });
      if (!head.querySelector('meta[property="og:image"]')) set('meta[property="og:image"]', { property: "og:image", content: OG_DEFAULT });
      set('meta[name="twitter:title"]', { name: "twitter:title", content: title });
      set('meta[name="twitter:description"]', { name: "twitter:description", content: description });
      head.querySelectorAll('script[type="application/ld+json"]').forEach((s) => s.remove());
      if (jsonLd) {
        const s = document.createElement("script");
        s.type = "application/ld+json";
        s.textContent = jsonLd;
        head.appendChild(s);
      }
    }, { p, jsonLd, SITE, OG_DEFAULT });
    const html = "<!DOCTYPE html>\n" + (await page.evaluate(() => document.documentElement.outerHTML));
    if (html.includes("jsxDEV")) throw new Error("đang là development build");
    const file = p.route === "/" ? path.join(outDir, "index.html") : path.join(outDir, p.route, "index.html");
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, html);
    console.log(`✓ ${p.route}`);
  } catch (err) {
    failed++;
    console.error(`✗ ${p.route}: ${err.message}`);
  }
  await page.close();
}
await browser.close();
console.log(`\n${pages.length - failed}/${pages.length} trang đã prerender vào ${path.relative(process.cwd(), outDir)}`);
process.exit(failed ? 1 : 0);
