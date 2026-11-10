import { useEffect } from "react";
import { SITE_URL } from "@/lib/site-config";

interface PageMeta {
  title: string;
  description?: string;
  path?: string;
  noindex?: boolean;
  jsonLd?: object;
}

function upsert(selector: string, create: () => HTMLElement, apply: (el: HTMLElement) => void) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  apply(el);
  return el;
}

export function usePageMeta({ title, description, path, noindex, jsonLd }: PageMeta) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    const created: HTMLElement[] = [];

    if (description) {
      upsert('meta[name="description"]', () => {
        const meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        return meta;
      }, (el) => el.setAttribute("content", description));
    }

    const robots = upsert('meta[name="robots"]', () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      created.push(meta);
      return meta;
    }, (el) => el.setAttribute("content", noindex ? "noindex, follow" : "index, follow"));

    if (path && !noindex) {
      upsert('link[rel="canonical"]', () => {
        const link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        return link;
      }, (el) => el.setAttribute("href", `${SITE_URL}${path}`));
    }

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.pageMeta = "1";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      document.title = previousTitle;
      if (created.includes(robots)) robots.remove();
      else robots.setAttribute("content", "index, follow");
      script?.remove();
    };
  }, [title, description, path, noindex, jsonLd]);
}
