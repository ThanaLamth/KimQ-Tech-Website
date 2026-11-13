export const SITE_URL = "https://kimq.tech";

export const COMPANY = {
  brand: "KimQ Tech",
  legalName: "Công ty Cổ phần KimQ",
  legalNameEn: "KimQ Joint Stock Company",
  taxId: "0319416034",
  registration: "MST/MSDN 0319416034, đăng ký lần đầu ngày 23/02/2026 tại TP. Hồ Chí Minh",
  address: "Tầng 2, số 02 Song Hành, Phường Bình Trưng, Thành phố Hồ Chí Minh, Việt Nam",
  addressEn: "2nd Floor, No. 02 Song Hanh, Binh Trung Ward, Ho Chi Minh City, Vietnam",
  email: "contact@kimq.tech",
  phone: "",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61595159860837" },
    { label: "Instagram", href: "https://www.instagram.com/kimqtech/" },
    { label: "Threads", href: "https://www.threads.com/@kimqtech" },
    { label: "TikTok", href: "https://www.tiktok.com/@kimqaitech" },
  ] as { label: string; href: string }[],
};

export const STATUS_PAGE_URL = "";

export const GA4_ID: string = import.meta.env.VITE_GA4_ID ?? "";

export const FOOTER_PRODUCTS = [
  { href: "/san-pham/cong-no", vi: "Công nợ & dòng tiền", en: "Receivables & cash flow" },
  { href: "/san-pham/cham-cong-luong", vi: "Chấm công & lương", en: "Timesheet & payroll" },
  { href: "/san-pham/kho-mua-hang", vi: "Kho & mua hàng", en: "Inventory & purchasing" },
  { href: "/san-pham/hoa-don-dau-vao", vi: "Hoá đơn đầu vào", en: "Purchase invoices" },
  { href: "/san-pham/lims", vi: "LIMS phòng thí nghiệm", en: "Laboratory LIMS" },
  { href: "/san-pham/benh-vien", vi: "KimQ Health", en: "KimQ Health" },
  { href: "/san-pham/tro-ly-zalo", vi: "Trợ lý AI trên Zalo", en: "AI assistant on Zalo" },
  { href: "/san-pham/ai-gateway", vi: "KimQ AI Gateway", en: "KimQ AI Gateway" },
];
