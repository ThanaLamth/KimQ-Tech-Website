import fs from "node:fs";
import path from "node:path";
import type { Express, Request, Response } from "express";

export const PRODUCT_SLUGS = [
  "nhatdat", "thong-tin-dau-thau", "giai-phap-hoa-chat", "kho-gia-vat-lieu", "lims",
  "benh-vien", "tinh-luong-phong-kham", "kiem-soat-tai-chinh", "cong-no", "kho-mua-hang",
  "bao-gia-don-hang", "hoa-don-dau-vao", "cham-cong-luong", "tro-ly-zalo", "chatbot-da-kenh",
  "tu-dong-hoa", "ai-studio", "tro-ly-fanpage", "ai-gateway",
];

export const REDIRECTS: Record<string, string> = {
  "/san-pham/tuan-thu-hoa-chat": "/san-pham/giai-phap-hoa-chat",
};

function loadTrustRoutes(): string[] {
  try {
    const file = path.resolve(import.meta.dirname, "trust-routes.json");
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch {
    return [];
  }
}

const KNOWN = new Set<string>([
  "/",
  "/san-pham",
  ...PRODUCT_SLUGS.flatMap((slug) => [`/san-pham/${slug}`, `/san-pham/${slug}/huong-dan`]),
  ...loadTrustRoutes(),
]);

export function normalizePath(url: string): string {
  const pathname = decodeURI(url.split(/[?#]/)[0]);
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export function isKnownRoute(url: string): boolean {
  return KNOWN.has(normalizePath(url));
}

export function serveSpaWithRealStatus(app: Express, distPath: string) {
  const indexHtml = path.resolve(distPath, "index.html");
  app.use("*", (req: Request, res: Response) => {
    const pathname = normalizePath(req.originalUrl);
    const target = REDIRECTS[pathname];
    if (target) return res.redirect(301, target);
    if (pathname !== "/" && req.originalUrl.split("?")[0].endsWith("/") && KNOWN.has(pathname)) {
      return res.redirect(301, pathname + (req.originalUrl.includes("?") ? req.originalUrl.slice(req.originalUrl.indexOf("?")) : ""));
    }
    if (KNOWN.has(pathname)) return res.status(200).sendFile(indexHtml);
    res.setHeader("X-Robots-Tag", "noindex");
    return res.status(404).sendFile(indexHtml);
  });
}
