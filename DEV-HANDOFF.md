# KimQ.tech — Bàn giao cho Dev

Ngày: 13/11/2026 · Repo: https://github.com/ThanaLamth/KimQ-Tech-Website

Repo này **không chứa mã nguồn site**. Ở đây có: nội dung, metadata, schema đã soạn sẵn ([`seo-content/`](seo-content/)) và code mẫu cho trang tin cậy, footer, 404 ([`site-patch/`](site-patch/)). Dev lắp vào mã nguồn thật.

Bấm vào mã việc (A1, A2…) trong bảng để xem **cách làm chi tiết**. Theo dõi trạng thái chung: [`KIMQ-ISSUE-TRACKER.md`](KIMQ-ISSUE-TRACKER.md) (mã A1, B3… dưới đây khớp với tracker). Làm xong mục nào thì báo lại để đổi trạng thái.

---

## Đợt 1 — Làm ngay (P0, ~1 tuần)

Không phụ thuộc quyết định nào của Owner.

| # | Việc | Dùng file | Kiểm tra xong |
|---|---|---|---|
| [A1](#a1) | Chạy **production build** (`vite build`, `NODE_ENV=production`), bỏ dev server | [Audit §1, §6](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) | View source không còn `jsxDEV` và đường dẫn `/app/client/src/...` |
| [A2](#a2) | **Prerender/SSG 40 URL**: title, meta, canonical, og, H1, nội dung, JSON-LD nằm trong HTML gốc | [`meta-40-url.json`](seo-content/meta-40-url.json), [`schema/`](seo-content/schema/) | `curl -s URL` thấy đúng title, H1 và chữ nội dung của từng trang; HTML gốc có `<html lang="vi">` (hiện là `lang="en"`, chỉ đổi sau khi JS chạy) |
| [B3](#a2) | Title + meta description mới cho 40 URL (hậu tố ` \| KimQ Tech`) | [`04-metadata-40-url.md`](seo-content/04-metadata-40-url.md), [`meta-40-url.json`](seo-content/meta-40-url.json) | Không trang nào còn "KimQ Studio" trong title |
| [B6](#a2) | Bỏ chữ "KimQ Studio" ở mọi nơi trên site → **KimQ Tech** (sản phẩm video vẫn là **AI Studio**) | [`02-brand-va-trang-chu.md`](seo-content/02-brand-va-trang-chu.md) | `grep -ri "KimQ Studio"` trong source = 0 |
| [A4](#a4) | `sitemap.xml` 40 URL; thêm `Sitemap: https://kimq.tech/sitemap.xml` vào robots. `lastmod` = ngày sửa nội dung thật, **không** lấy ngày build; không có thì bỏ | [`meta-40-url.json`](seo-content/meta-40-url.json), [`trust-check.mjs`](site-patch/scripts/trust-check.mjs) | `/sitemap.xml` trả 200, XML hợp lệ |
| [A5, A6](#a5) | URL lạ trả **HTTP 404** (trang 404 tiếng Việt); `/san-pham/tuan-thu-hoa-chat` → **301** | [`known-routes.ts`](site-patch/server/known-routes.ts), [`not-found.tsx`](site-patch/client/src/pages/not-found.tsx) | `curl -I /abc-xyz` → 404; `curl -I /san-pham/tuan-thu-hoa-chat` → 301 |
| D3 | Footer pháp nhân 4 cột (MST, địa chỉ, email, link SP, mạng xã hội) | [`Footer.tsx`](site-patch/client/src/components/Footer.tsx), [`site-config.ts`](site-patch/client/src/lib/site-config.ts) | Footer có trên cả 40 trang |
| D2 | Câu đồng ý + link chính sách dưới form "Quan tâm" | [`ConsentNote.tsx`](site-patch/client/src/components/ConsentNote.tsx) | Có trên 19 trang sản phẩm |
| D1–D6 | **Lắp cơ chế trang tin cậy** (bước 1–10 trong README). Bắt buộc làm cùng D2, D3 vì Footer và câu đồng ý dùng chung `trust-pages.ts`. 13 trang đang `draft` nên **chưa hiện**; footer và câu đồng ý tự thêm link khi trang chuyển `ready` | [`site-patch/README.md`](site-patch/README.md) §3 | `node scripts/trust-check.mjs` chạy không lỗi; `/chinh-sach-bao-mat` hiện trả 404 (đúng, vì còn nháp) |
| [A3](#a3) | Hiệu năng mobile: `srcset` + `preload` ảnh hero, `width/height` cho logo, giảm CSS chặn render | [Audit §3](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) | Lighthouse mobile ≥ 80, LCP < 2,5 s |
| [F1](#f1) | Thêm bản ghi **TXT DNS** để verify Google Search Console (SEO gửi mã) | [`07` §1](seo-content/07-gsc-ga4-chinh-sach-ai-geo.md) | GSC báo đã xác minh |

## Đợt 2 — Trong 2–3 tuần (P1)

| # | Việc | Dùng file | Kiểm tra xong |
|---|---|---|---|
| [B1](#b1) | Gắn JSON-LD cho 40 trang (Organization, SoftwareApplication, FAQPage, TechArticle) | [`seo-content/schema/`](seo-content/schema/) | Rich Results Test không lỗi. Không còn chuỗi `__DIEN_NGAY` trong HTML (19 file hướng dẫn cần ngày đăng/cập nhật thật). Câu FAQ "Dữ liệu được lưu ở đâu?" của AI Gateway **chưa gắn** cho tới khi CTO xác nhận. `BreadcrumbList` phải khớp đường dẫn hiển thị |
| [B2](#a2) | Trang chủ: canonical, `og:image` | [`02`](seo-content/02-brand-va-trang-chu.md) | Có trong HTML gốc |
| [B4](#b4) | Trang chủ link thẳng tới 19 sản phẩm; sửa khối "Sản phẩm liên quan" theo nhóm nghiệp vụ | [`02`](seo-content/02-brand-va-trang-chu.md), [`05` §1](seo-content/05-noi-dung-trang-san-pham.md) | LIMS không còn link sang Nhà Đất/Đấu thầu |
| [C2](#c2) | Khối **"Phù hợp với ai"** trước FAQ ở 19 trang SP; FAQ cho tính lương phòng khám | [`11-phu-hop-voi-ai.md`](seo-content/11-phu-hop-voi-ai.md), [`phu-hop-voi-ai.json`](seo-content/phu-hop-voi-ai.json), [`05`](seo-content/05-noi-dung-trang-san-pham.md) | Có trong HTML gốc |
| A9 | Alt cho 5 ảnh video trang Bệnh viện + `aria-label` cho video; alt ảnh hero | [`13` §1](seo-content/13-alt-text-va-llms-txt.md) | Không còn `<img>` thiếu alt |
| C3 | Byline + ngày cập nhật cho 19 trang hướng dẫn | [`06`](seo-content/06-byline-ngay-cap-nhat-huong-dan.md) | Ngày lấy từ lần sửa thật, không tự sinh |
| [A7](#a7) | DNS `www` + 301 về `https://kimq.tech` | [Audit §2](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) | `curl -I https://www.kimq.tech` → 301 |
| [E1](#e1) | Security headers (CSP, HSTS, `frame-ancestors`, Referrer-Policy, Permissions-Policy) qua Cloudflare | [Audit §6](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) | securityheaders.com ≥ A |
| [E2](#e2) | Rà code server 5 điểm: rate limit, cờ `?kqtest=1`, escape dữ liệu lead, email xác nhận, chặn truy cập thẳng origin Railway | [Audit §6](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) | Báo lại kết quả từng điểm |
| [C5](#c5) | Tạo mục **`/kien-thuc`** (danh sách bài + trang bài, có byline, ngày, breadcrumb, Article schema, vào sitemap) | [`12`](seo-content/12-ke-hoach-bai-viet-ho-tro.md) | Đăng được bài nháp thử |

## Đợt 3 — Khi có điều kiện (P2)

| # | Việc | Dùng file |
|---|---|---|
| [A8](#a8) | Skeleton tĩnh trong `index.html` cho mạng chậm (quy tắc: dưới 1 s không cần, 1–10 s skeleton) | [Audit §5](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) |
| [E3](#a5) | `/api/*` không tồn tại trả JSON 404 | [Audit §6](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) |
| [D6](#d6) | **GA4 + banner cookie**: chỉ gắn GA4 (`VITE_GA4_ID`) sau khi `/chinh-sach-cookie` đã `ready`; Consent Mode v2, mặc định từ chối | [`CookieConsent.tsx`](site-patch/client/src/components/CookieConsent.tsx) |
| D7 | `/.well-known/security.txt` | [`security.txt`](site-patch/client/public/.well-known/security.txt) |
| D8 | Trang trạng thái hệ thống (dịch vụ ngoài), điền `STATUS_PAGE_URL` | [`site-patch/README.md`](site-patch/README.md) §5 |

## Cách làm từng việc

Mỗi mục: **vấn đề hiện tại → cách sửa cụ thể → kiểm tra**. Số liệu hiện trạng đo lại ngày 13/11/2026.

### <a id="a1"></a>A1 — Production build

- **Hiện tại:** bundle `/assets/index-*.js` có 143 lệnh `jsxDEV` và lộ đường dẫn `/app/client/src/...`. Server đang chạy chế độ dev.
- **Cách sửa** (cấu trúc `server/vite.ts` + `serveStatic` như template hiện tại):
  ```json
  "scripts": {
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
    "start": "NODE_ENV=production node dist/index.js"
  }
  ```
  Railway → Settings → Deploy: **Build command** `npm run build`, **Start command** `npm run start` (không dùng `npm run dev`). Biến môi trường `NODE_ENV=production`.
- **Kiểm tra:** `curl -s https://kimq.tech/assets/index-*.js | grep -c jsxDEV` = 0.

### <a id="a2"></a>A2 — Prerender 40 URL (kèm B2, B3, B6 phần thẻ head)

- **Hiện tại:** HTML gốc của mọi URL giống nhau: `<html lang="en">`, title "KimQ Studio", `og:description` tiếng Anh "A Vietnam-based digital product studio", `<div id="root"></div>` rỗng, không canonical, không JSON-LD.
- **Cách sửa:** không cần đổi framework. Sau khi build, chạy trình duyệt headless mở từng route và lưu HTML đã render. Script viết sẵn: [`site-patch/scripts/prerender.mjs`](site-patch/scripts/prerender.mjs) (đã chạy thử 13/11 trên site thật, ra HTML có `lang="vi"`, title mới, canonical, JSON-LD).
  1. Copy thư mục `seo-content/` vào repo site thành `seo/` (cần `meta-40-url.json` và `schema/`).
  2. `npm i -D playwright && npx playwright install chromium`.
  3. Sau `npm run build`: chạy server production ở cổng 5000, rồi `BASE_URL=http://localhost:5000 SEO_DIR=seo node scripts/prerender.mjs dist` → ra `dist/prerender/<route>/index.html`.
  4. Server trả bản prerender: dùng [`site-patch/server/known-routes.ts`](site-patch/server/known-routes.ts) (đã sửa: tự lấy file trong `dist/prerender`, không có thì dùng `index.html`).
  5. Trong `serveStatic`: đổi thành `app.use(express.static(distPath, { index: false }))`. Nếu không, `/` vẫn trả `index.html` rỗng.
  6. Sửa `client/index.html` (bản dùng cho trang 404 và lúc chưa prerender):
     ```html
     <html lang="vi">
     <title>KimQ Tech – Phần mềm nghiệp vụ & trợ lý AI cho doanh nghiệp</title>
     <meta name="description" content="KimQ Tech xây phần mềm nghiệp vụ theo ngành, ứng dụng cho doanh nghiệp vừa và nhỏ, trợ lý AI trên Zalo và AI Gateway. Dùng tay đầy đủ, AI chỉ đề xuất." />
     <meta property="og:title" content="KimQ Tech – Phần mềm nghiệp vụ & trợ lý AI cho doanh nghiệp" />
     <meta property="og:description" content="Phần mềm nghiệp vụ theo ngành và trợ lý AI cho doanh nghiệp Việt Nam." />
     <meta property="og:image" content="https://kimq.tech/opengraph.jpg" />
     <meta name="twitter:title" content="KimQ Tech – Phần mềm nghiệp vụ & trợ lý AI cho doanh nghiệp" />
     ```
- **Cách script xử lý chỗ chưa chốt:** schema còn ngày giả `__DIEN_NGAY__` thì **bỏ qua** JSON-LD trang đó; câu FAQ "Dữ liệu được lưu ở đâu?" của AI Gateway bị **bỏ ra** cho tới khi chạy với `Q1_CONFIRMED=1`.
- **Ghi chú:** app dùng `createRoot`, nên khi JS chạy React vẽ lại đè lên HTML prerender. Nội dung giống nhau, không cần chuyển sang hydrate.
- **Kiểm tra:** `curl -s https://kimq.tech/san-pham/lims | grep -o '<h1[^>]*>[^<]*'` thấy H1 thật; `grep -c 'ld+json'` ≥ 1; `<html lang="vi">`.

### <a id="a3"></a>A3 — Hiệu năng mobile (LCP ~7 s)

- **Hiện tại:** `hero-turtle.webp` 900×900 px nhưng hiển thị 361 px; không có `width`/`height`; ảnh nằm trong JS nên được phát hiện muộn. `logo.webp` 512×171 thiếu kích thước. CSS 160 KB chặn render.
- **Cách sửa:**
  1. Tạo 2 bản nhỏ: `npx sharp-cli -i client/public/hero-turtle.webp -o client/public/hero-turtle-400.webp resize 400` (tương tự 800).
  2. Ảnh hero trong `Hero.tsx`:
     ```tsx
     <img src="/hero-turtle-800.webp"
          srcSet="/hero-turtle-400.webp 400w, /hero-turtle-800.webp 800w, /hero-turtle.webp 900w"
          sizes="(max-width: 1024px) 90vw, 450px" width={900} height={900}
          fetchPriority="high" decoding="async" alt="Linh vật rùa của KimQ Tech"
          className="w-full h-full object-contain rounded-2xl" />
     ```
  3. `client/index.html` (chỉ trang chủ cần, nhưng để chung cũng được):
     ```html
     <link rel="preload" as="image" href="/hero-turtle-800.webp"
           imagesrcset="/hero-turtle-400.webp 400w, /hero-turtle-800.webp 800w, /hero-turtle.webp 900w"
           imagesizes="(max-width: 1024px) 90vw, 450px" fetchpriority="high">
     ```
  4. Logo: thêm `width={512} height={171}` (class `h-9 w-auto` giữ nguyên). `footer-lotus.webp`: thêm `width`/`height` đúng kích thước file.
  5. CSS chặn render: sau khi có prerender, bật inline critical CSS bằng `beasties` (chạy trên các file `dist/prerender/**/index.html`) hoặc chấp nhận nếu Lighthouse đã ≥ 80.
- **Kiểm tra:** Lighthouse mobile trang chủ ≥ 80, LCP < 2,5 s (chạy 3 lần lấy trung vị).

### <a id="a4"></a>A4 — Sitemap + robots

- **Cách sửa:** script [`site-patch/scripts/sitemap.mjs`](site-patch/scripts/sitemap.mjs): `SEO_DIR=seo node scripts/sitemap.mjs dist/public` → `dist/public/sitemap.xml` gồm 40 URL + trang tin cậy đã `ready`. `lastmod` chỉ ghi khi có ngày sửa thật trong `seo/lastmod.json`.
- robots: copy [`site-patch/client/public/robots.txt`](site-patch/client/public/robots.txt) (có dòng `Sitemap:`). Cloudflare Managed robots.txt sẽ ghép phần của Cloudflare lên trên file này, giữ nguyên các dòng chặn bot AI hiện có.
- **Build hoàn chỉnh:** `node scripts/trust-check.mjs && vite build && esbuild … && (chạy server) && node scripts/prerender.mjs dist && node scripts/sitemap.mjs dist/public`.
- **Kiểm tra:** `/sitemap.xml` 200, đủ 40 `<url>`; `/robots.txt` có dòng `Sitemap:`.

### <a id="a5"></a>A5, A6, E3 — 404 thật, 301, API 404

- **Hiện tại:** `/abc-xyz` trả 200; `/san-pham/tuan-thu-hoa-chat` chuyển bằng JS; `/api/khong-co` trả HTML 200.
- **Cách sửa:** dùng `serveSpaWithRealStatus(app, distPath)` trong [`known-routes.ts`](site-patch/server/known-routes.ts) thay cho `app.use("*", … index.html)`. Hàm này đã gồm: 404 + `X-Robots-Tag: noindex`, 301 cho `tuan-thu-hoa-chat`, 301 bỏ dấu `/` cuối, `/api/*` không tồn tại trả JSON 404. Gọi **sau** khi đã đăng ký các route API thật.
- **Kiểm tra:** `curl -sI /abc-xyz` → 404; `curl -sI /san-pham/tuan-thu-hoa-chat` → 301; `curl -s /api/x` → `{"error":"not_found"}`.

### <a id="a7"></a>A7 — `www`

- **Cách sửa (Cloudflare):** DNS → thêm `CNAME www → kimq.tech` (Proxied). Rules → Redirect Rules → *Dynamic*: khi `http.host eq "www.kimq.tech"` → URL `concat("https://kimq.tech", http.request.uri.path)`, mã 301, giữ query string.
- **Kiểm tra:** `curl -sI https://www.kimq.tech/san-pham` → `301`, `location: https://kimq.tech/san-pham`.

### <a id="a8"></a>A8 — Skeleton khi mạng chậm

- **Cách sửa:** trang có prerender thì không cần. Riêng `client/index.html` (404 và trường hợp chưa prerender), đặt sẵn trong `#root` (React xoá khi chạy):
  ```html
  <div id="root"><div style="min-height:100vh;background:#F9F7F0">
    <div style="height:64px"></div>
    <div style="max-width:960px;margin:96px auto;padding:0 24px">
      <div style="height:40px;width:70%;background:#0F2C5914;border-radius:8px"></div>
      <div style="height:16px;width:90%;margin-top:24px;background:#0F2C590d;border-radius:6px"></div>
      <div style="height:16px;width:60%;margin-top:12px;background:#0F2C590d;border-radius:6px"></div>
    </div></div></div>
  ```

### <a id="b1"></a>B1 — JSON-LD

- Đã gắn tự động bởi prerender (A2). Nếu muốn có cả lúc chuyển trang phía client, dùng `usePageMeta({ jsonLd })` trong [`use-page-meta.ts`](site-patch/client/src/lib/use-page-meta.ts) với cùng file JSON.
- **Ngày thật cho 19 trang hướng dẫn:** thay `__DIEN_NGAY_THAT_YYYY-MM-DD__` trong `seo/schema/huong-dan/*.jsonld` bằng ngày đăng và ngày sửa thật (lấy từ git log của file nội dung hướng dẫn). Chưa thay thì prerender tự bỏ qua schema trang đó.
- **Kiểm tra:** Rich Results Test + Schema Markup Validator cho 1 trang mỗi loại.

### <a id="b4"></a>B4, N1–N3 — Trang chủ và link nội bộ

- Mục "Sản phẩm của KimQ Tech" (N2) và đoạn mở đầu `/san-pham` (N3) là chữ có sẵn trong [`02` §3–4](seo-content/02-brand-va-trang-chu.md), dán vào `pages/home.tsx` (dưới `About`) và trang danh mục.
- "Sản phẩm liên quan": thay cách lấy theo thứ tự danh sách bằng bảng nhóm trong [`05` §1](seo-content/05-noi-dung-trang-san-pham.md) (mỗi sản phẩm có danh sách slug liên quan cố định).

### <a id="c2"></a>C2 — Khối "Phù hợp với ai"

- Component viết sẵn: [`site-patch/client/src/components/FitBlock.tsx`](site-patch/client/src/components/FitBlock.tsx). Copy [`phu-hop-voi-ai.json`](seo-content/phu-hop-voi-ai.json) vào `client/src/content/`.
- Trong `products/rich/sections.tsx`, ngay trước khối FAQ: `<FitBlock path={`/san-pham/${slug}`} language={lang} />`.

### <a id="e1"></a>E1 — Security headers

- **Hiện tại:** chỉ có `X-Content-Type-Options: nosniff`.
- **Cách sửa (Cloudflare → Rules → Transform Rules → Modify Response Header, áp dụng `http.host eq "kimq.tech"`):**

  | Header | Giá trị |
  |---|---|
  | `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` (chỉ bật sau khi `www` đã chạy HTTPS) |
  | `X-Frame-Options` | `DENY` |
  | `Referrer-Policy` | `strict-origin-when-cross-origin` |
  | `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=()` |
  | `Content-Security-Policy-Report-Only` | `default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.google-analytics.com; media-src 'self'; connect-src 'self' https://*.google-analytics.com https://*.analytics.google.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'; object-src 'none'` |

- Chạy CSP ở chế độ **Report-Only** 1 tuần, xem Console không có lỗi rồi mới đổi tên header thành `Content-Security-Policy`. Lưu ý: thẻ font trong `index.html` dùng `onload="this.media='all'"` (inline handler) sẽ bị CSP chặn; đổi sang `<link rel="stylesheet" href="…fonts…">` thường, hoặc tự host font.
- **Kiểm tra:** securityheaders.com ≥ A.

### <a id="e2"></a>E2 — 5 điểm cần rà code server (`/api/quan-tam`)

| Điểm | Cần đúng như sau |
|---|---|
| 1. Rate limit theo IP | Lấy IP từ `CF-Connecting-IP`, **không** từ `X-Forwarded-For` (giả được). Với Express: không bật `trust proxy` toàn cục rồi đọc `req.ip` |
| 2. Cờ `?kqtest=1` / `test:true` | Ở production, cờ này **không** được bỏ qua rate limit hay honeypot. Hoặc chỉ nhận khi có header bí mật |
| 3. Dữ liệu người gửi (`email`, `path`, `utm_*`, `ref`) | Escape trước khi đưa vào tin nhắn Lark / email (Markdown của Lark và HTML); giới hạn độ dài; email phải qua kiểm tra định dạng |
| 4. Email xác nhận | Nếu có gửi mail tới địa chỉ người dùng nhập: giới hạn mỗi địa chỉ/IP, nội dung cố định không chèn dữ liệu người gửi. Không gửi thì ghi rõ |
| 5. Truy cập thẳng Railway | Tắt domain `*.up.railway.app` công khai, hoặc Cloudflare thêm header bí mật (Transform Rule request header) và server từ chối request thiếu header |

Báo lại kết quả từng điểm để cập nhật tracker.

### <a id="f1"></a>F1 — Search Console

1. SEO tạo property **Domain** `kimq.tech` trong Search Console → Google đưa 1 bản ghi TXT.
2. Dev: Cloudflare DNS → thêm bản ghi `TXT` tên `@`, giá trị đúng như Google đưa.
3. Bấm Verify; gửi `https://kimq.tech/sitemap.xml` trong mục Sitemaps.

### <a id="c5"></a>C5 — Mục blog `/kien-thuc`

- Làm giống cơ chế trang tin cậy: mỗi bài một file Markdown trong `client/src/content/kien-thuc/` có frontmatter `path, title, description, h1, author, reviewer, published, updated, status`. Dùng lại component [`Markdown.tsx`](site-patch/client/src/components/Markdown.tsx).
- Route `/kien-thuc` (danh sách) và `/kien-thuc/:slug`; thêm vào `KNOWN` trong `known-routes.ts`, vào prerender và sitemap như trang tin cậy.
- Schema mỗi bài: `Article` (author, datePublished, dateModified) + `BreadcrumbList`.

### <a id="d6"></a>D6 — GA4

- Khi `/chinh-sach-cookie` đã `ready`: đặt biến `VITE_GA4_ID=G-…` trên Railway và gắn `<CookieConsent />` (đã có trong [`App.routes.snippet.tsx`](site-patch/client/src/App.routes.snippet.tsx)). Mặc định từ chối; chỉ đo khi người dùng đồng ý.

## Nội dung cần thêm / sửa trên trang (chữ đã viết sẵn, Dev chỉ dán vào)

Làm cùng Đợt 1–2. Chép **nguyên văn** từ file nguồn, không tự viết lại.

### Thêm mới

| # | Trang | Nội dung | Chép từ |
|---|---|---|---|
| N1 | Trang chủ `/` | Đổi **H1** thành "Phần mềm nghiệp vụ và trợ lý AI cho doanh nghiệp Việt Nam"; câu cũ "Xây dựng sản phẩm số cho cuộc sống tốt đẹp hơn" chuyển xuống thành tagline `<p>` | [`02` §3](seo-content/02-brand-va-trang-chu.md) |
| N2 | Trang chủ `/` | Thêm mục **"Sản phẩm của KimQ Tech"** (3 nhóm, link tới 19 sản phẩm + "Xem tất cả sản phẩm"), đặt ngay dưới "Chúng tôi là ai" | [`02` §3](seo-content/02-brand-va-trang-chu.md) |
| N3 | `/san-pham` | Thêm **đoạn mở đầu** dưới H1 | [`02` §4](seo-content/02-brand-va-trang-chu.md) |
| N4 | 19 trang sản phẩm | Khối **"Phù hợp với ai"** trước FAQ | [`11`](seo-content/11-phu-hop-voi-ai.md), [`phu-hop-voi-ai.json`](seo-content/phu-hop-voi-ai.json) |
| N5 | `/san-pham/tinh-luong-phong-kham` | Mục **FAQ** (trang duy nhất chưa có) | [`05` §2](seo-content/05-noi-dung-trang-san-pham.md) |
| N6 | 19 trang hướng dẫn | **Byline** + "Cập nhật lần cuối" dưới H1. Cần Owner gửi tên người rà soát + ngày thật; chưa có thì **chưa gắn** | [`06`](seo-content/06-byline-ngay-cap-nhat-huong-dan.md) |
| N7 | `tinh-luong-phong-kham`, `cham-cong-luong`, `tro-ly-zalo`, `hoa-don-dau-vao` | Dòng **"Cập nhật lần cuối: dd/mm/yyyy"** dưới H1 (trang có số liệu thuế/BHXH). Ngày = ngày kế toán rà xong; chưa rà thì **chưa gắn** | [`05` §3](seo-content/05-noi-dung-trang-san-pham.md) |

### Sửa câu đang có

| # | Trang | Câu hiện tại | Sửa thành |
|---|---|---|---|
| S1 | `/san-pham/kho-mua-hang` | "Hàng về trước khi chạm phần tồn an toàn, không bao giờ hết hàng." | "Đặt hàng sớm để hàng về trước khi chạm tồn an toàn, giảm nguy cơ hết hàng." |
| S2 | `/san-pham/ai-gateway` | "Chi phí thấp hơn tới 30% so với mua trực tiếp từ các nhà cung cấp như thông thường, tuỳ model và khối lượng sử dụng." | "Chi phí có thể thấp hơn so với mua trực tiếp từ các nhà cung cấp, tuỳ model và khối lượng sử dụng." (chỉ giữ "30%" nếu có bảng giá so sánh công khai, xem [`01`](seo-content/01-sua-claim-ai-gateway.md)) |
| S3 | `/san-pham/ai-gateway` | Tiêu đề "Không gián đoạn khi nhà cung cấp lỗi" | "Tự chuyển đường dự phòng khi nhà cung cấp lỗi" |
| S4 | Toàn site | "KimQ Studio" | "KimQ Tech" (riêng sản phẩm video giữ "AI Studio") |
| S5 | Trang chủ, ảnh hero | alt "KimQ turtle illustration" | alt "Linh vật rùa của KimQ Tech" |
| S6 | `/san-pham/benh-vien` | 5 ảnh video thiếu alt, video thiếu nhãn | Theo bảng trong [`13` §1](seo-content/13-alt-text-va-llms-txt.md) |
| S7 | LIMS, Kiểm soát tài chính… | Khối "Sản phẩm liên quan" link sai nhóm | Theo bảng trong [`05` §1](seo-content/05-noi-dung-trang-san-pham.md) |
| S8 | Toàn site (40 trang), schema, `mailto:` | Đang ghi email `contact@kimq.tech` | Đổi hết thành **`social@kimq.tech`** (Owner chốt 13/11/2026). Patch đã dùng email mới: [`site-config.ts`](site-patch/client/src/lib/site-config.ts), [`security.txt`](site-patch/client/public/.well-known/security.txt), [`home.jsonld`](seo-content/schema/home.jsonld). Kiểm tra: `curl -s https://kimq.tech/ | grep -c contact@` ra 0 |

Hai câu AI Gateway về **dữ liệu** (trang sản phẩm "che trước khi gửi đi", trang hướng dẫn "che trước khi lưu", và chuyện có lưu nội dung câu hỏi hay không) **chưa sửa**, chờ CTO xác nhận rồi bổ sung vào đây.

### Blog `/kien-thuc`

Dev chỉ cần dựng mục (C5 ở Đợt 2). Bài viết do Content gửi riêng khi xong; kế hoạch 6 bài ở [`12`](seo-content/12-ke-hoach-bai-viet-ho-tro.md).

## Trang tin cậy (13 trang) — nội dung đã viết, chờ điền thông tin

Chữ đã viết sẵn trong [`site-patch/client/src/content/trust/`](site-patch/client/src/content/trust/). Mỗi trang còn chỗ `[CẦN ĐIỀN]` (thông tin chỉ KimQ biết: điện thoại, máy chủ, thời gian lưu dữ liệu…). **Dev không viết hay sửa nội dung các trang này.**

| Ưu tiên | Trang | File | Chỗ trống | Ai điền / duyệt |
|---|---|---|---|---|
| **P0** | `/chinh-sach-bao-mat` — Chính sách bảo vệ dữ liệu cá nhân | [`chinh-sach-bao-mat.md`](site-patch/client/src/content/trust/chinh-sach-bao-mat.md) | 18 | Owner + **luật sư** |
| P1 | `/gioi-thieu` — Giới thiệu | [`gioi-thieu.md`](site-patch/client/src/content/trust/gioi-thieu.md) | 10 | Owner |
| P1 | `/lien-he` — Liên hệ | [`lien-he.md`](site-patch/client/src/content/trust/lien-he.md) | 5 | Owner |
| P1 | `/dieu-khoan-su-dung` — Điều khoản sử dụng | [`dieu-khoan-su-dung.md`](site-patch/client/src/content/trust/dieu-khoan-su-dung.md) | 5 | Owner + luật sư (chờ Q3) |
| P1 | `/bao-mat-du-lieu` — Bảo mật & dữ liệu | [`bao-mat-du-lieu.md`](site-patch/client/src/content/trust/bao-mat-du-lieu.md) | 9 | CTO |
| P1 | `/cam-ket-xu-ly-du-lieu` — Cam kết xử lý dữ liệu (DPA) | [`cam-ket-xu-ly-du-lieu.md`](site-patch/client/src/content/trust/cam-ket-xu-ly-du-lieu.md) | 15 | CTO + luật sư |
| P1 | `/chinh-sach-du-lieu-ai` — Chính sách dữ liệu AI | [`chinh-sach-du-lieu-ai.md`](site-patch/client/src/content/trust/chinh-sach-du-lieu-ai.md) | 6 | CTO (chờ Q1) |
| P2 | `/chinh-sach-cookie` — Cookie (bắt buộc trước khi bật GA4) | [`chinh-sach-cookie.md`](site-patch/client/src/content/trust/chinh-sach-cookie.md) | 3 | Owner + luật sư |
| P2 | `/ben-xu-ly-phu` — Bên xử lý dữ liệu phụ | [`ben-xu-ly-phu.md`](site-patch/client/src/content/trust/ben-xu-ly-phu.md) | 7 | CTO |
| P2 | `/cam-ket-sla` — Cam kết SLA | [`cam-ket-sla.md`](site-patch/client/src/content/trust/cam-ket-sla.md) | 20 | Owner + CTO |
| P2 | `/khach-hang` — Khách hàng / case study | [`khach-hang.md`](site-patch/client/src/content/trust/khach-hang.md) | 9 | Owner (khi khách đồng ý) |
| P2 | `/tuyen-dung` — Tuyển dụng | [`tuyen-dung.md`](site-patch/client/src/content/trust/tuyen-dung.md) | 6 | Owner |
| P2 | `/tuyen-bo-tiep-can` — Tuyên bố tiếp cận | [`tuyen-bo-tiep-can.md`](site-patch/client/src/content/trust/tuyen-bo-tiep-can.md) | 4 | Owner |

Danh sách thông tin cần điền (13 nhóm, điền một lần dùng cho nhiều trang): [`site-patch/README.md`](site-patch/README.md) §4.

**Khi một trang đã điền xong và được duyệt**, Dev làm:
1. Đổi `status: draft` → `status: ready`, điền `updated` / `effective` (dd/mm/yyyy).
2. Chạy `node scripts/trust-check.mjs` (báo lỗi nếu còn `[CẦN ĐIỀN]`).
3. Deploy. Route, link footer, câu đồng ý dưới form và sitemap tự cập nhật.

Đăng **`/chinh-sach-bao-mat` trước tiên**: form "Quan tâm" đang thu email trên 19 trang mà chưa có chính sách (Luật BVDLCN 91/2025/QH15, hiệu lực 01/01/2026).

## Sau mỗi lần deploy

1. Báo SEO ngày deploy và danh sách mục đã xong.
2. SEO kiểm tra lại live bằng curl/trình duyệt, cập nhật [`KIMQ-ISSUE-TRACKER.md`](KIMQ-ISSUE-TRACKER.md), gửi sitemap trong Search Console.
