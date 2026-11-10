export type TrustStatus = "draft" | "ready";

export interface TrustPage {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  schemaType: string;
  status: TrustStatus;
  effective?: string;
  updated?: string;
  form?: boolean;
  body: string;
}

const files = import.meta.glob("../content/trust/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parse(file: string, raw: string): TrustPage {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter: ${file}`);
  const meta: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    meta[line.slice(0, idx).trim()] = line
      .slice(idx + 1)
      .trim()
      .replace(/^"(.*)"$/, "$1");
  }
  return {
    slug: file.split("/").pop()!.replace(/\.md$/, ""),
    path: meta.path,
    title: meta.title,
    description: meta.description,
    h1: meta.h1,
    schemaType: meta.schemaType || "WebPage",
    status: meta.status === "ready" ? "ready" : "draft",
    effective: meta.effective,
    updated: meta.updated,
    form: meta.form === "true",
    body: match[2],
  };
}

export const SHOW_DRAFTS = import.meta.env.VITE_SHOW_DRAFT_TRUST === "1";

export const trustPages: TrustPage[] = Object.entries(files).map(([file, raw]) =>
  parse(file, raw),
);

export const routableTrustPages = trustPages.filter(
  (page) => page.status === "ready" || SHOW_DRAFTS,
);

export function isPublished(path: string): boolean {
  return routableTrustPages.some((page) => page.path === path);
}

export function getTrustPage(path: string): TrustPage | undefined {
  return routableTrustPages.find((page) => page.path === path);
}
