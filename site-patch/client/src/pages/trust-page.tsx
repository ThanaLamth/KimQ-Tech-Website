import { useMemo } from "react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Markdown } from "@/components/Markdown";
import { ConsentNote } from "@/components/ConsentNote";
import { InterestForm } from "@/components/InterestForm";
import { SITE_URL } from "@/lib/site-config";
import { usePageMeta } from "@/lib/use-page-meta";
import type { TrustPage as TrustPageData } from "@/lib/trust-pages";
import { useLanguage } from "@/lib/language-context";

function toIsoDate(value?: string) {
  const match = value?.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return match ? `${match[3]}-${match[2]}-${match[1]}` : undefined;
}

export default function TrustPage({ page }: { page: TrustPageData }) {
  const { language } = useLanguage();
  const jsonLd = useMemo(() => {
    const url = `${SITE_URL}${page.path}`;
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": page.schemaType,
          "@id": `${url}#webpage`,
          url,
          name: page.title,
          description: page.description,
          inLanguage: "vi-VN",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
          publisher: { "@id": `${SITE_URL}/#organization` },
          ...(toIsoDate(page.updated) ? { dateModified: toIsoDate(page.updated) } : {}),
          ...(page.schemaType === "ContactPage" || page.schemaType === "AboutPage"
            ? { mainEntity: { "@id": `${SITE_URL}/#organization` } }
            : {}),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: page.h1, item: url },
          ],
        },
      ],
    };
  }, [page]);

  usePageMeta({
    title: page.title,
    description: page.description,
    path: page.path,
    noindex: page.status !== "ready",
    jsonLd,
  });

  return (
    <div className="min-h-screen bg-[#F9F7F0] text-[#0F2C59]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-20 pt-32">
        <nav aria-label="Breadcrumb" className="text-sm text-[#0F2C59]/70">
          <ol className="flex gap-2">
            <li><Link href="/" className="hover:underline">Trang chủ</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">{page.h1}</li>
          </ol>
        </nav>
        {page.status !== "ready" && (
          <p role="note" className="mt-6 rounded-lg border border-amber-400 bg-amber-50 p-3 text-sm text-amber-900">
            Bản nháp: chưa được duyệt, không đăng công khai.
          </p>
        )}
        {language === "en" && (
          <p className="mt-6 text-sm text-[#0F2C59]/70">This page is available in Vietnamese only.</p>
        )}
        <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight">{page.h1}</h1>
        {(page.updated || page.effective) && (
          <p className="mt-3 text-sm text-[#0F2C59]/70">
            {page.effective && <>Hiệu lực từ: <time dateTime={toIsoDate(page.effective)}>{page.effective}</time> · </>}
            {page.updated && <>Cập nhật: <time dateTime={toIsoDate(page.updated)}>{page.updated}</time></>}
          </p>
        )}
        <article className="mt-6 text-[1.0625rem]">
          <Markdown source={page.body} />
        </article>
        {page.form && (
          <section aria-labelledby="contact-form" className="mt-12 rounded-2xl bg-[#0F2C59] p-6 text-[#F9F7F0] md:p-8">
            <h2 id="contact-form" className="font-serif text-2xl font-semibold">Để lại email, KimQ liên hệ lại</h2>
            <InterestForm product="lien-he" />
            <ConsentNote className="mt-3" />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
