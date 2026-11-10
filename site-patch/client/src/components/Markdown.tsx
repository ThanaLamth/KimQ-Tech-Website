import { Fragment, type ReactNode } from "react";
import { Link } from "wouter";
import { isPublished } from "@/lib/trust-pages";

const TRUST_PREFIXES = [
  "/gioi-thieu", "/lien-he", "/chinh-sach-bao-mat", "/dieu-khoan-su-dung",
  "/bao-mat-du-lieu", "/cam-ket-xu-ly-du-lieu", "/chinh-sach-du-lieu-ai",
  "/chinh-sach-cookie", "/ben-xu-ly-phu", "/cam-ket-sla", "/khach-hang",
  "/tuyen-dung", "/tuyen-bo-tiep-can",
];

function renderLink(text: string, href: string, key: number): ReactNode {
  const basePath = href.split("#")[0];
  if (TRUST_PREFIXES.includes(basePath) && !isPublished(basePath)) {
    return <Fragment key={key}>{text}</Fragment>;
  }
  if (href.startsWith("/") && !href.startsWith("/.well-known")) {
    return (
      <Link key={key} href={href} className="underline underline-offset-4 hover:text-[#1B3C73]">
        {text}
      </Link>
    );
  }
  const external = /^https?:\/\//.test(href);
  return (
    <a
      key={key}
      href={href}
      className="underline underline-offset-4 hover:text-[#1B3C73]"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {text}
    </a>
  );
}

function inline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const pattern = /\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)|\*([^*]+)\*/g;
  let last = 0;
  let key = 0;
  for (const match of text.matchAll(pattern)) {
    if (match.index! > last) out.push(text.slice(last, match.index));
    if (match[1] !== undefined) out.push(<strong key={key++}>{inline(match[1])}</strong>);
    else if (match[2] !== undefined)
      out.push(<code key={key++} className="rounded bg-[#0F2C59]/5 px-1 text-[0.9em]">{match[2]}</code>);
    else if (match[3] !== undefined) out.push(renderLink(match[3], match[4], key++));
    else if (match[5] !== undefined) out.push(<em key={key++}>{match[5]}</em>);
    last = match.index! + match[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function splitRow(line: string): string[] {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
}

export function Markdown({ source }: { source: string }) {
  const lines = source.replace(/\r/g, "").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }

    const heading = line.match(/^(#{2,4})\s+(.*?)(?:\s+\{#([\w-]+)\})?\s*$/);
    if (heading) {
      const level = heading[1].length;
      const Tag = (`h${level}`) as "h2" | "h3" | "h4";
      const size = level === 2 ? "text-2xl mt-10" : level === 3 ? "text-xl mt-8" : "text-lg mt-6";
      blocks.push(
        <Tag key={key++} id={heading[3]} className={`${size} mb-3 font-serif font-semibold text-[#0F2C59] scroll-mt-24`}>
          {inline(heading[2])}
        </Tag>,
      );
      i++;
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      blocks.push(<hr key={key++} className="my-8 border-[#0F2C59]/15" />);
      i++;
      continue;
    }

    if (line.trim().startsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        if (!/^\|?\s*:?-{2,}/.test(lines[i].trim().replace(/^\|/, "").trim())) rows.push(splitRow(lines[i]));
        i++;
      }
      const [head, ...body] = rows;
      const hasHead = head.some((cell) => cell !== "");
      blocks.push(
        <div key={key++} className="my-5 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            {hasHead && (
              <thead>
                <tr>{head.map((cell, c) => <th key={c} className="border-b-2 border-[#0F2C59]/20 p-2 text-left font-semibold">{inline(cell)}</th>)}</tr>
              </thead>
            )}
            <tbody>
              {body.map((row, r) => (
                <tr key={r} className="align-top">
                  {row.map((cell, c) => (
                    <td key={c} className={`border-b border-[#0F2C59]/10 p-2 ${!hasHead && c === 0 ? "w-1/3 font-medium" : ""}`}>{inline(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    if (line.startsWith(">")) {
      const quote: string[] = [];
      while (i < lines.length && lines[i].startsWith(">")) quote.push(lines[i++].replace(/^>\s?/, ""));
      blocks.push(
        <blockquote key={key++} className="my-5 border-l-4 border-[#0F2C59]/30 pl-4 italic text-[#0F2C59]/80">
          {inline(quote.join(" "))}
        </blockquote>,
      );
      continue;
    }

    const listMatch = line.match(/^(\s*)([-*]|\d+\.)\s+/);
    if (listMatch) {
      const ordered = /\d/.test(listMatch[2]);
      const items: string[] = [];
      while (i < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[i])) {
        items.push(lines[i].replace(/^\s*([-*]|\d+\.)\s+/, ""));
        i++;
      }
      const List = ordered ? "ol" : "ul";
      blocks.push(
        <List key={key++} className={`my-4 space-y-2 pl-6 ${ordered ? "list-decimal" : "list-disc"}`}>
          {items.map((item, n) => <li key={n}>{inline(item)}</li>)}
        </List>,
      );
      continue;
    }

    const para: string[] = [];
    while (i < lines.length && lines[i].trim() && !/^(#{2,4}\s|\||>|\s*([-*]|\d+\.)\s|---+$)/.test(lines[i])) {
      para.push(lines[i++].trim());
    }
    blocks.push(<p key={key++} className="my-4 leading-relaxed">{inline(para.join(" "))}</p>);
  }

  return <>{blocks}</>;
}
