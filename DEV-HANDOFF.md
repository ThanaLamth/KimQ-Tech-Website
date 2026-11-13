# KimQ.tech — Bàn giao cho Dev

Ngày: 13/11/2026 · Repo: https://github.com/ThanaLamth/KimQ-Tech-Website

Repo này **không chứa mã nguồn site**. Ở đây có: nội dung, metadata, schema đã soạn sẵn ([`seo-content/`](seo-content/)) và code mẫu cho trang tin cậy, footer, 404 ([`site-patch/`](site-patch/)). Dev lắp vào mã nguồn thật.

Theo dõi trạng thái chung: [`KIMQ-ISSUE-TRACKER.md`](KIMQ-ISSUE-TRACKER.md) (mã A1, B3… dưới đây khớp với tracker). Làm xong mục nào thì báo lại để đổi trạng thái.

---

## Đợt 1 — Làm ngay (P0, ~1 tuần)

Không phụ thuộc quyết định nào của Owner.

| # | Việc | Dùng file | Kiểm tra xong |
|---|---|---|---|
| A1 | Chạy **production build** (`vite build`, `NODE_ENV=production`), bỏ dev server | [Audit §1, §6](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) | View source không còn `jsxDEV` và đường dẫn `/app/client/src/...` |
| A2 | **Prerender/SSG 40 URL**: title, meta, canonical, og, H1, nội dung, JSON-LD nằm trong HTML gốc | [`meta-40-url.json`](seo-content/meta-40-url.json), [`schema/`](seo-content/schema/) | `curl -s URL` thấy đúng title, H1 và chữ nội dung của từng trang |
| B3 | Title + meta description mới cho 40 URL (hậu tố ` \| KimQ Tech`) | [`04-metadata-40-url.md`](seo-content/04-metadata-40-url.md), [`meta-40-url.json`](seo-content/meta-40-url.json) | Không trang nào còn "KimQ Studio" trong title |
| B6 | Bỏ chữ "KimQ Studio" ở mọi nơi trên site → **KimQ Tech** (sản phẩm video vẫn là **AI Studio**) | [`02-brand-va-trang-chu.md`](seo-content/02-brand-va-trang-chu.md) | `grep -ri "KimQ Studio"` trong source = 0 |
| A4 | `sitemap.xml` 40 URL; thêm `Sitemap: https://kimq.tech/sitemap.xml` vào robots | [`meta-40-url.json`](seo-content/meta-40-url.json), [`trust-check.mjs`](site-patch/scripts/trust-check.mjs) | `/sitemap.xml` trả 200, XML hợp lệ |
| A5, A6 | URL lạ trả **HTTP 404** (trang 404 tiếng Việt); `/san-pham/tuan-thu-hoa-chat` → **301** | [`known-routes.ts`](site-patch/server/known-routes.ts), [`not-found.tsx`](site-patch/client/src/pages/not-found.tsx) | `curl -I /abc-xyz` → 404; `curl -I /san-pham/tuan-thu-hoa-chat` → 301 |
| D3 | Footer pháp nhân 4 cột (MST, địa chỉ, email, link SP, mạng xã hội) | [`Footer.tsx`](site-patch/client/src/components/Footer.tsx), [`site-config.ts`](site-patch/client/src/lib/site-config.ts) | Footer có trên cả 40 trang |
| D2 | Câu đồng ý + link chính sách dưới form "Quan tâm" | [`ConsentNote.tsx`](site-patch/client/src/components/ConsentNote.tsx) | Có trên 19 trang sản phẩm |
| A3 | Hiệu năng mobile: `srcset` + `preload` ảnh hero, `width/height` cho logo, giảm CSS chặn render | [Audit §3](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) | Lighthouse mobile ≥ 80, LCP < 2,5 s |
| F1 | Thêm bản ghi **TXT DNS** để verify Google Search Console (SEO gửi mã) | [`07` §1](seo-content/07-gsc-ga4-chinh-sach-ai-geo.md) | GSC báo đã xác minh |

## Đợt 2 — Trong 2–3 tuần (P1)

| # | Việc | Dùng file | Kiểm tra xong |
|---|---|---|---|
| B1 | Gắn JSON-LD cho 40 trang (Organization, SoftwareApplication, FAQPage, TechArticle) | [`seo-content/schema/`](seo-content/schema/) | Rich Results Test không lỗi |
| B2 | Trang chủ: canonical, `og:image` | [`02`](seo-content/02-brand-va-trang-chu.md) | Có trong HTML gốc |
| B4 | Trang chủ link thẳng tới 19 sản phẩm; sửa khối "Sản phẩm liên quan" theo nhóm nghiệp vụ | [`02`](seo-content/02-brand-va-trang-chu.md), [`05` §1](seo-content/05-noi-dung-trang-san-pham.md) | LIMS không còn link sang Nhà Đất/Đấu thầu |
| C2 | Khối **"Phù hợp với ai"** trước FAQ ở 19 trang SP; FAQ cho tính lương phòng khám | [`11-phu-hop-voi-ai.md`](seo-content/11-phu-hop-voi-ai.md), [`phu-hop-voi-ai.json`](seo-content/phu-hop-voi-ai.json), [`05`](seo-content/05-noi-dung-trang-san-pham.md) | Có trong HTML gốc |
| A9 | Alt cho 5 ảnh video trang Bệnh viện + `aria-label` cho video; alt ảnh hero | [`13` §1](seo-content/13-alt-text-va-llms-txt.md) | Không còn `<img>` thiếu alt |
| C3 | Byline + ngày cập nhật cho 19 trang hướng dẫn | [`06`](seo-content/06-byline-ngay-cap-nhat-huong-dan.md) | Ngày lấy từ lần sửa thật, không tự sinh |
| D1–D6 | Lắp cơ chế trang tin cậy (13 trang Markdown). Trang `status: draft` **tự không lên** cho tới khi Owner duyệt | [`site-patch/README.md`](site-patch/README.md) §3, [`trust-pages.ts`](site-patch/client/src/lib/trust-pages.ts) | Chạy `trust-check.mjs` không lỗi |
| A7 | DNS `www` + 301 về `https://kimq.tech` | [Audit §2](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) | `curl -I https://www.kimq.tech` → 301 |
| E1 | Security headers (CSP, HSTS, `frame-ancestors`, Referrer-Policy, Permissions-Policy) qua Cloudflare | [Audit §6](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) | securityheaders.com ≥ A |
| E2 | Rà code server 5 điểm: rate limit, cờ `?kqtest=1`, escape dữ liệu lead, email xác nhận, chặn truy cập thẳng origin Railway | [Audit §6](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) | Báo lại kết quả từng điểm |
| C5 | Tạo mục **`/kien-thuc`** (danh sách bài + trang bài, có byline, ngày, breadcrumb, Article schema, vào sitemap) | [`12`](seo-content/12-ke-hoach-bai-viet-ho-tro.md) | Đăng được bài nháp thử |

## Đợt 3 — Khi có điều kiện (P2)

| # | Việc | Dùng file |
|---|---|---|
| A8 | Skeleton tĩnh trong `index.html` cho mạng chậm (quy tắc: dưới 1 s không cần, 1–10 s skeleton) | [Audit §5](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) |
| E3 | `/api/*` không tồn tại trả JSON 404 | [Audit §6](KIMQ-AUDIT-TONG-HOP-2026-11-09.md) |
| D6 | Banner cookie, **chỉ bật khi gắn GA4** (Consent Mode v2, mặc định từ chối) | [`CookieConsent.tsx`](site-patch/client/src/components/CookieConsent.tsx) |
| D7 | `/.well-known/security.txt` | [`security.txt`](site-patch/client/public/.well-known/security.txt) |
| D8 | Trang trạng thái hệ thống (dịch vụ ngoài), điền `STATUS_PAGE_URL` | [`site-patch/README.md`](site-patch/README.md) §5 |

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
| N6 | 19 trang hướng dẫn | **Byline** + "Cập nhật lần cuối" dưới H1 | [`06`](seo-content/06-byline-ngay-cap-nhat-huong-dan.md) |
| N7 | `tinh-luong-phong-kham`, `cham-cong-luong`, `tro-ly-zalo`, `hoa-don-dau-vao` | Dòng **"Cập nhật lần cuối: dd/mm/yyyy"** dưới H1 (trang có số liệu thuế/BHXH) | [`05` §3](seo-content/05-noi-dung-trang-san-pham.md) |

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

Hai câu AI Gateway về **dữ liệu** (trang sản phẩm "che trước khi gửi đi", trang hướng dẫn "che trước khi lưu", và chuyện có lưu nội dung câu hỏi hay không) **chưa sửa**, chờ CTO xác nhận rồi bổ sung vào đây.

### Blog `/kien-thuc`

Dev chỉ cần dựng mục (C5 ở Đợt 2). Bài viết do Content gửi riêng khi xong; kế hoạch 6 bài ở [`12`](seo-content/12-ke-hoach-bai-viet-ho-tro.md).

## Sau mỗi lần deploy

1. Báo SEO ngày deploy và danh sách mục đã xong.
2. SEO kiểm tra lại live bằng curl/trình duyệt, cập nhật [`KIMQ-ISSUE-TRACKER.md`](KIMQ-ISSUE-TRACKER.md), gửi sitemap trong Search Console.
