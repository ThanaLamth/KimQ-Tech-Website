import { Link } from "wouter";
import { useLanguage } from "@/lib/language-context";
import { COMPANY, FOOTER_PRODUCTS, GA4_ID, STATUS_PAGE_URL } from "@/lib/site-config";
import { isPublished } from "@/lib/trust-pages";
import { openCookieSettings } from "@/components/CookieConsent";

type Item = { href: string; vi: string; en: string };

const COMPANY_LINKS: Item[] = [
  { href: "/gioi-thieu", vi: "Giới thiệu", en: "About us" },
  { href: "/khach-hang", vi: "Khách hàng", en: "Customers" },
  { href: "/tuyen-dung", vi: "Tuyển dụng", en: "Careers" },
  { href: "/lien-he", vi: "Liên hệ", en: "Contact" },
];

const TRUST_LINKS: Item[] = [
  { href: "/bao-mat-du-lieu", vi: "Bảo mật & dữ liệu", en: "Security & data" },
  { href: "/chinh-sach-du-lieu-ai", vi: "Chính sách dữ liệu AI", en: "AI data policy" },
  { href: "/cam-ket-xu-ly-du-lieu", vi: "Cam kết xử lý dữ liệu", en: "Data processing terms" },
  { href: "/ben-xu-ly-phu", vi: "Bên xử lý phụ", en: "Subprocessors" },
  { href: "/cam-ket-sla", vi: "Cam kết dịch vụ (SLA)", en: "Service level (SLA)" },
];

const LEGAL_LINKS: Item[] = [
  { href: "/chinh-sach-bao-mat", vi: "Chính sách bảo vệ dữ liệu cá nhân", en: "Privacy policy" },
  { href: "/dieu-khoan-su-dung", vi: "Điều khoản sử dụng", en: "Terms of use" },
  { href: "/chinh-sach-cookie", vi: "Chính sách cookie", en: "Cookie policy" },
  { href: "/tuyen-bo-tiep-can", vi: "Tuyên bố tiếp cận", en: "Accessibility" },
];

const linkClass = "text-[#0F2C59]/75 hover:text-[#0F2C59] hover:underline underline-offset-4 inline-block py-1.5";

function Column({ title, items, lang }: { title: string; items: Item[]; lang: "vi" | "en" }) {
  const visible = items.filter((item) => item.href.startsWith("/san-pham") || isPublished(item.href));
  if (!visible.length) return null;
  return (
    <nav aria-label={title}>
      <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#0F2C59]">{title}</h2>
      <ul className="space-y-0.5 text-sm">
        {visible.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={linkClass}>{item[lang]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const { language } = useLanguage();
  const lang: "vi" | "en" = language === "en" ? "en" : "vi";
  const vi = lang === "vi";
  const year = new Date().getFullYear();
  const legalName = vi ? COMPANY.legalName : COMPANY.legalNameEn;

  return (
    <footer className="border-t border-[#0F2C59]/10 bg-[#F9F7F0] text-[#0F2C59]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" aria-label="KimQ Tech">
            <img src="/logo.webp" alt={COMPANY.legalName} width={144} height={36} loading="lazy" decoding="async" className="h-9 w-auto object-contain" />
          </Link>
          <address className="mt-4 space-y-1.5 text-sm not-italic text-[#0F2C59]/80">
            <p className="font-semibold text-[#0F2C59]">{legalName}</p>
            <p>{vi ? "Mã số thuế" : "Tax ID"}: {COMPANY.taxId}</p>
            {COMPANY.registration && <p>{COMPANY.registration}</p>}
            <p>{vi ? "Địa chỉ" : "Address"}: {vi ? COMPANY.address : COMPANY.addressEn}</p>
            <p>
              Email: <a href={`mailto:${COMPANY.email}`} className="underline underline-offset-4">{COMPANY.email}</a>
            </p>
            {COMPANY.phone && (
              <p>
                {vi ? "Điện thoại" : "Phone"}: <a href={`tel:${COMPANY.phone.replace(/[^\d+]/g, "")}`} className="underline underline-offset-4">{COMPANY.phone}</a>
              </p>
            )}
          </address>
          {COMPANY.social.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-3 text-sm">
              {COMPANY.social.map((item) => (
                <li key={item.href}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={linkClass}>{item.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label={vi ? "Sản phẩm" : "Products"}>
          <h2 className="mb-3 text-xs font-bold uppercase tracking-wider">{vi ? "Sản phẩm" : "Products"}</h2>
          <ul className="space-y-0.5 text-sm">
            {FOOTER_PRODUCTS.map((item) => (
              <li key={item.href}><Link href={item.href} className={linkClass}>{item[lang]}</Link></li>
            ))}
            <li><Link href="/san-pham" className={`${linkClass} font-semibold`}>{vi ? "Tất cả sản phẩm →" : "All products →"}</Link></li>
          </ul>
        </nav>

        <div className="space-y-8">
          <Column title={vi ? "Công ty" : "Company"} items={COMPANY_LINKS} lang={lang} />
          <Column title={vi ? "Tin cậy" : "Trust"} items={TRUST_LINKS} lang={lang} />
        </div>

        <div className="space-y-8">
          <Column title={vi ? "Pháp lý" : "Legal"} items={LEGAL_LINKS} lang={lang} />
          {(STATUS_PAGE_URL || GA4_ID) && (
            <ul className="space-y-0.5 text-sm">
              {STATUS_PAGE_URL && (
                <li><a href={STATUS_PAGE_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>{vi ? "Trạng thái hệ thống" : "System status"}</a></li>
              )}
              {GA4_ID && (
                <li><button type="button" onClick={openCookieSettings} className={`${linkClass} text-left`}>{vi ? "Cài đặt cookie" : "Cookie settings"}</button></li>
              )}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-[#0F2C59]/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-[#0F2C59]/70 md:flex-row">
          <p>© {year} {legalName}. {vi ? "Mọi quyền được bảo lưu." : "All rights reserved."}</p>
          <img src="/footer-lotus.webp" alt="" width={64} height={32} loading="lazy" decoding="async" className="h-8 w-auto opacity-40" />
        </div>
      </div>
    </footer>
  );
}
