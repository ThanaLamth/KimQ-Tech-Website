import fs from "node:fs";
import path from "node:path";

const root = process.argv[2] || process.cwd();
const contentDir = path.join(root, "client/src/content/trust");
const routesOut = path.join(root, "server/trust-routes.json");
const BLOCKERS = ["[CẦN ĐIỀN", "[CẦN CHỐT", "Ghi chú cho người duyệt"];

const pages = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md")).map((file) => {
  const raw = fs.readFileSync(path.join(contentDir, file), "utf8");
  const front = raw.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
  const get = (key) => front.match(new RegExp(`^${key}:\\s*"?(.*?)"?\\s*$`, "m"))?.[1] ?? "";
  const body = raw.slice(raw.indexOf("---", 3) + 3);
  const blockers = BLOCKERS.flatMap((needle) =>
    body.split("\n").map((line, n) => (line.includes(needle) ? n + 1 : 0)).filter(Boolean).map((n) => `${needle} (dòng ${n})`),
  );
  const frontBlockers = front.split("\n").filter((l) => /^(effective|updated):/.test(l) && BLOCKERS.some((b) => l.includes(b))).map((l) => l.split(":")[0]);
  return { file, path: get("path"), status: get("status"), title: get("title"), description: get("description"), updated: get("updated"), blockers, frontBlockers };
});

let failed = false;
console.log("Trang | Trạng thái | Còn chỗ trống");
for (const page of pages) {
  const count = page.blockers.length + page.frontBlockers.length;
  console.log(`${page.path} | ${page.status} | ${count}`);
  if (page.status === "ready" && count > 0) {
    failed = true;
    console.error(`  ✗ ${page.file} đang ready nhưng còn: ${[...page.frontBlockers, ...page.blockers].slice(0, 5).join(", ")}`);
  }
  if (page.title.length > 60) console.warn(`  ! ${page.file}: title ${page.title.length} ký tự (> 60)`);
  if (page.description.length < 110 || page.description.length > 160) console.warn(`  ! ${page.file}: description ${page.description.length} ký tự (nên 110–160)`);
}

const ready = pages.filter((p) => p.status === "ready");
fs.mkdirSync(path.dirname(routesOut), { recursive: true });
fs.writeFileSync(routesOut, JSON.stringify(ready.map((p) => p.path), null, 2) + "\n");
console.log(`\nĐã ghi ${ready.length} route vào ${path.relative(root, routesOut)}`);

if (ready.length) {
  console.log("\n<!-- thêm vào sitemap.xml -->");
  for (const p of ready) {
    const m = p.updated.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    console.log(`<url><loc>https://kimq.tech${p.path}</loc>${m ? `<lastmod>${m[3]}-${m[2]}-${m[1]}</lastmod>` : ""}</url>`);
  }
}
process.exit(failed ? 1 : 0);
