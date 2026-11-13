import fitData from "@/content/phu-hop-voi-ai.json";
import { Markdown } from "@/components/Markdown";

type Lang = "vi" | "en";
interface FitCopy { heading: string; fit_title: string; fit: string[]; not_fit_title: string; not_fit: string[] }
interface FitEntry { path: string; product: string; vi: FitCopy; en: FitCopy }

// Đặt ngay TRƯỚC mục "Câu hỏi thường gặp" trên 19 trang sản phẩm:
//   <FitBlock path="/san-pham/lims" language={lang} />
export function FitBlock({ path, language = "vi" }: { path: string; language?: Lang }) {
  const entry = (fitData as FitEntry[]).find((item) => item.path === path);
  if (!entry) return null;
  const copy = entry[language] ?? entry.vi;
  const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");
  return (
    <section aria-labelledby="fit-heading" className="mx-auto max-w-5xl px-6 py-16">
      <h2 id="fit-heading" className="font-serif text-3xl font-semibold">{copy.heading}</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">✓ {copy.fit_title}</h3>
          <Markdown source={list(copy.fit)} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">– {copy.not_fit_title}</h3>
          <Markdown source={list(copy.not_fit)} />
        </div>
      </div>
    </section>
  );
}
