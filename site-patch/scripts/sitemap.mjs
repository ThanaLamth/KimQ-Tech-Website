// Sinh sitemap.xml: 40 URL trong meta-40-url.json + trang tin cậy đã `ready` (server/trust-routes.json).
//   SEO_DIR=seo node scripts/sitemap.mjs dist/public
// lastmod chỉ ghi khi có ngày sửa nội dung THẬT trong SEO_DIR/lastmod.json, ví dụ:
//   { "/san-pham/lims": "2026-11-20" }
// Không lấy ngày build (Google: lastmod sai thì nên bỏ).
import fs from "node:fs";
import path from "node:path";

const out = path.resolve(process.argv[2] || "dist/public", "sitemap.xml");
const SEO = path.resolve(process.env.SEO_DIR || "seo");
const SITE = "https://kimq.tech";
const meta = JSON.parse(fs.readFileSync(path.join(SEO, "meta-40-url.json"), "utf8"));
const trustFile = path.resolve("server/trust-routes.json");
const trust = fs.existsSync(trustFile) ? JSON.parse(fs.readFileSync(trustFile, "utf8")) : [];
const lastmodFile = path.join(SEO, "lastmod.json");
const lastmod = fs.existsSync(lastmodFile) ? JSON.parse(fs.readFileSync(lastmodFile, "utf8")) : {};

const routes = [...new Set([...meta.map((m) => new URL(m.url).pathname.replace(/\/$/, "") || "/"), ...trust])];
const urls = routes.map((r) => {
  const date = lastmod[r];
  if (date && !/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error(`lastmod sai định dạng: ${r} = ${date}`);
  return `  <url><loc>${SITE}${r === "/" ? "/" : r}</loc>${date ? `<lastmod>${date}</lastmod>` : ""}</url>`;
});
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, xml);
console.log(`Đã ghi ${routes.length} URL vào ${out}`);
