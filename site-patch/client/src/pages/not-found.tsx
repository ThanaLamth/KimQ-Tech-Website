import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/lib/language-context";
import { usePageMeta } from "@/lib/use-page-meta";

const SUGGESTIONS = [
  { href: "/san-pham/cong-no", vi: "Công nợ & dòng tiền", en: "Receivables & cash flow" },
  { href: "/san-pham/cham-cong-luong", vi: "Chấm công & lương", en: "Timesheet & payroll" },
  { href: "/san-pham/tro-ly-zalo", vi: "Trợ lý AI trên Zalo", en: "AI assistant on Zalo" },
  { href: "/san-pham/ai-gateway", vi: "KimQ AI Gateway", en: "KimQ AI Gateway" },
];

export default function NotFound() {
  const { language } = useLanguage();
  const vi = language !== "en";
  usePageMeta({
    title: vi ? "Không tìm thấy trang | KimQ Tech" : "Page not found | KimQ Tech",
    noindex: true,
  });

  return (
    <div className="min-h-screen bg-[#F9F7F0] text-[#0F2C59]">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 pb-24 pt-36 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-[#0F2C59]/60">404</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold">
          {vi ? "Không tìm thấy trang này" : "We couldn't find this page"}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[#0F2C59]/80">
          {vi
            ? "Đường dẫn có thể đã thay đổi hoặc gõ nhầm. Anh/chị thử một trong các trang dưới đây."
            : "The link may have changed or been mistyped. Try one of these pages."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="min-h-11 rounded-full bg-[#0F2C59] px-6 py-3 font-semibold text-[#F9F7F0]">
            {vi ? "Về trang chủ" : "Home"}
          </Link>
          <Link href="/san-pham" className="min-h-11 rounded-full border border-[#0F2C59]/30 px-6 py-3 font-semibold">
            {vi ? "Xem sản phẩm" : "Products"}
          </Link>
        </div>
        <ul className="mx-auto mt-10 grid max-w-xl gap-2 text-left sm:grid-cols-2">
          {SUGGESTIONS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block rounded-lg border border-[#0F2C59]/10 px-4 py-3 hover:bg-[#0F2C59]/5">
                {vi ? item.vi : item.en}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-sm text-[#0F2C59]/70">
          {vi ? "Cần hỗ trợ? Email " : "Need help? Email "}
          <a href="mailto:social@kimq.tech" className="underline underline-offset-4">social@kimq.tech</a>
        </p>
      </main>
      <Footer />
    </div>
  );
}
