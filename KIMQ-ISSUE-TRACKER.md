# KimQ.tech — Bảng theo dõi vấn đề & hướng giải quyết

Cập nhật: **17/11/2026**: Dev deploy Stage 1–2 ngày 16/11 ([báo cáo đối chiếu 43 mã của Dev](https://highest-packing-civilization-protecting.trycloudflare.com/KQ-20261116-016-bao-cao-seo-thana.html), link tạm). SEO kiểm tra lại trực tiếp trên kimq.tech ngày 17/11: 404, 301, `www`, sitemap 58 URL, robots, `llms.txt`, 13 trang tin cậy và `/kien-thuc` đều chạy đúng.

Nguồn chi tiết:
- [`KIMQ-AUDIT-TONG-HOP-2026-11-09.md`](KIMQ-AUDIT-TONG-HOP-2026-11-09.md): audit kỹ thuật.
- [`KIMQ-GOOGLE-UPDATES-COMPARE-2026-11-10.md`](KIMQ-GOOGLE-UPDATES-COMPARE-2026-11-10.md): đối chiếu với các Google update.
- [`seo-content/`](seo-content/): phần việc SEO/Content.
- [`site-patch/`](site-patch/): code trang tin cậy, footer, 404.
- [`KimQ_SEO_GEO_Master_Audit_90_Days.xlsx`](KimQ_SEO_GEO_Master_Audit_90_Days.xlsx): roadmap T01–T26.

## Ký hiệu trạng thái

| Ký hiệu | Nghĩa |
|---|---|
| ✅ | Xong, đã live hoặc đã hoàn tất tài liệu |
| ⚠️ | Đã lên site nhưng **chưa đạt**, cần sửa tiếp |
| 📝 | Đã soạn sẵn trong repo, chờ Dev đưa lên site |
| ⏳ | Chờ quyết định hoặc thông tin (Owner / CTO / luật sư) |
| ⬜ | Chưa làm |
| ➖ | Không áp dụng / không cần làm |

## Tóm tắt

| Trạng thái chính | Số mục |
|---|---|
| ✅ Xong | 27 |
| ⚠️ Đã lên nhưng chưa đạt | 5 |
| ⏳ Chờ quyết định / thông tin | 4 |
| ⬜ Chưa làm | 5 |
| ➖ Không cần làm | 2 |
| **Tổng** | **43** |

Một số mục có nhiều trạng thái (ví dụ "📝 nội dung sẵn · ⬜ prerender"); bảng trên tính theo trạng thái ghi đầu tiên.

**Việc cần làm tiếp (sau deploy 16/11):**

| # | Việc | Mục | Ai | Mức |
|---|---|---|---|---|
| 1 | Sửa lỗi giả IP khi gọi thẳng origin Railway (header bí mật từ Cloudflare hoặc chặn origin) | E2 | Dev | **Cao** |
| 2 | Xác nhận 13 giá trị đề xuất (README §4), 4 URL mạng xã hội, tên sản phẩm video (AI Studio hay KimQ Studio) | D9, F4, B6 | Owner + CTO | **Cao** |
| 3 | Sửa bản git cho đúng thực tế: Telegram thay Lark, phông chữ lưu trên site, giờ làm việc 24/7 | D9 | SEO | Cao |
| 4 | Thay nội dung 13 trang tin cậy bằng bản git đã xác nhận, nhất là Chính sách bảo mật (đủ mục Luật 91 / NĐ 356) | D1, D4–D6 | Dev | **Cao** |
| 5 | CTO trả lời Q1, sửa câu AI Gateway | C1, D5 | CTO + Dev | Trung bình |
| 6 | Thêm link mạng xã hội vào footer và `sameAs` | F4 | Dev | Thấp |
| 7 | Kiểm tra quyền Search Console; đo lại Lighthouse bản cuối | F1, A3 | SEO | Trung bình |
| 8 | Bật CSP thật sau khi Report-Only chạy ≥ 1 tuần không lỗi | E1 | Dev | Trung bình |
| 9 | Viết 6 bài `/kien-thuc`; test 22 câu hỏi GEO | C5, F5 | SEO/Content | Trung bình |
| 10 | Stage 3: `security.txt`, JSON 404 cho `/api/*`, GA4 + banner cookie, trang trạng thái | D7, E3, D6, D8 | Dev | Thấp |

## A. Kỹ thuật / hiệu năng (Dev)

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| A1 | Production chạy **React development build** (`jsxDEV`, lộ đường dẫn `/app/client/src/...`) | P0 | Build với `NODE_ENV=production` (`vite build`), chạy bản build thay cho dev server | Audit §1, §6 | Dev | ✅ 16/11 |
| A2 | SPA: **HTML gốc mọi URL giống nhau** (title "KimQ Studio", gần như không có chữ, không H1/canonical/schema). Crawler và bot AI không đọc được | P0 | Prerender/SSG 40 route: title, meta, canonical, og, H1, nội dung và JSON-LD nằm trong HTML gốc | Nội dung sẵn: [`seo-content/meta-40-url.json`](seo-content/meta-40-url.json), [`seo-content/schema/`](seo-content/schema/) | Dev | ✅ 16/11 (SSR lúc build) |
| A3 | Trang chủ mobile chậm: Lighthouse **54**, **LCP ~7s**, TBT cao | P0 | Làm A1; `hero-turtle.webp` thêm `srcset` (~400/800px) + `preload`; giảm CSS chặn render (160 KB); thêm `width`/`height` cho `logo.webp`, `footer-lotus.webp` | Audit §3 | Dev | ✅ 16/11 theo đo của Dev (LCP 1,0–1,7 s) · ⏳ SEO đo lại Lighthouse |
| A4 | Không có `sitemap.xml` (404); robots không khai báo `Sitemap:` | P0 | Sinh sitemap 40 URL + các trang tin cậy đã `ready`; `lastmod` = ngày sửa nội dung thật (hoặc bỏ); thêm dòng `Sitemap:` trong Cloudflare | [`seo-content/meta-40-url.json`](seo-content/meta-40-url.json); [`site-patch/scripts/trust-check.mjs`](site-patch/scripts/trust-check.mjs) in sẵn phần trang tin cậy | Dev | ✅ 16/11 (58 URL) |
| A5 | **Soft 404**: URL lạ trả HTTP 200, trang 404 là template dev tiếng Anh | P0 | Server trả **HTTP 404** + `X-Robots-Tag: noindex` cho URL không có trong danh sách; trang 404 tiếng Việt | [`site-patch/server/known-routes.ts`](site-patch/server/known-routes.ts), [`site-patch/client/src/pages/not-found.tsx`](site-patch/client/src/pages/not-found.tsx) | Dev | ✅ 16/11 |
| A6 | `/san-pham/tuan-thu-hoa-chat` là JS redirect | P1 | Đổi sang **301 phía server** về `/san-pham/giai-phap-hoa-chat`; 301 bỏ dấu `/` cuối URL | [`site-patch/server/known-routes.ts`](site-patch/server/known-routes.ts) | Dev | ✅ 16/11 |
| A7 | `www.kimq.tech` không có DNS | P1 | Thêm DNS `www` (proxied) + Redirect Rule 301 về `https://kimq.tech` | Audit §2 | Dev | ✅ 16/11 |
| A8 | Màn hình trống 1–10 giây trên mạng chậm (quy tắc UX loading) | P2 | Thêm skeleton tĩnh trong `index.html` (tự hết khi làm A2) | Audit §5 | Dev | ➖ Dev bỏ: HTML đã có nội dung sẵn (SSR) |
| A9 | 5 thumbnail `benh-vien/video-*.webp` thiếu alt; alt ảnh hero bằng tiếng Anh | P2 | Alt mô tả nội dung từng video; hero: `Linh vật rùa của KimQ` | [`seo-content/02`](seo-content/02-brand-va-trang-chu.md) (hero), [`seo-content/13`](seo-content/13-alt-text-va-llms-txt.md) (5 thumbnail + aria-label video) | Dev + Content | ✅ 16/11 |
| A10 | robots.txt: Lighthouse báo lỗi dòng `Content-Signal` | P2 | Chỉ là cảnh báo do Lighthouse chưa hiểu chỉ thị này. Giữ nguyên, không ảnh hưởng Google | Audit §2 | — | ➖ |
| A11 | HTML gốc khai báo `<html lang="en">` dù nội dung tiếng Việt (JS mới đổi sang `vi`) — phát hiện 13/11 | P1 | Đặt `lang="vi"` trong `index.html` / bản prerender | [`DEV-HANDOFF.md`](DEV-HANDOFF.md) A2 | Dev | ✅ 16/11 |

## B. SEO on-page / schema

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| B1 | 0 JSON-LD trên 40 URL | P1 | Organization + WebSite (trang chủ), SoftwareApplication + Breadcrumb + FAQPage (19 SP), TechArticle (19 hướng dẫn) | [`seo-content/schema/`](seo-content/schema/) (40 file) | Dev | ✅ 16/11 |
| B2 | Trang chủ thiếu canonical và og:image; title chỉ 11 ký tự | P1 | Canonical `https://kimq.tech/`, og:image `/opengraph.jpg`, title mới | [`seo-content/02`](seo-content/02-brand-va-trang-chu.md), [`seo-content/04`](seo-content/04-metadata-40-url.md) | Dev | ✅ 16/11 |
| B3 | Title/meta 40 URL chưa tối ưu, HTML gốc dùng chung 1 câu | P1 | Bộ title/meta mới, đều đạt độ dài | [`seo-content/04-metadata-40-url.md`](seo-content/04-metadata-40-url.md), [`meta-40-url.json`](seo-content/meta-40-url.json) | Dev | ✅ 16/11 |
| B4 | Internal link: trang chủ không link thẳng tới sản phẩm; khối "Sản phẩm liên quan" chưa hợp lý | P1 | Mục sản phẩm trên trang chủ; sửa link liên quan theo nhóm nghiệp vụ | [`seo-content/02`](seo-content/02-brand-va-trang-chu.md), [`seo-content/05`](seo-content/05-noi-dung-trang-san-pham.md) §1 | Dev + Content | ✅ 16/11 |
| B5 | Bản tiếng Anh không có URL riêng / hreflang, nên không được index | P1 | Tuỳ thị trường: làm `/en/...` + hreflang, hoặc chỉ giữ tiếng Việt | [`seo-content/10`](seo-content/10-cau-hoi-can-chot.md) (Q4) | Owner | ⏳ Q4 |
| B6 | Tên thương hiệu lẫn lộn (KimQ Studio / AI Studio / KimQ / KimQ AI Tech) | P0 | **Đã chốt 13/11: KimQ Tech** (thương hiệu) · Công ty Cổ phần KimQ (pháp nhân) · AI Studio (sản phẩm video). Title, meta, schema, site-patch, XLSX đã đổi; Dev bỏ "KimQ Studio" trên site | [`seo-content/02`](seo-content/02-brand-va-trang-chu.md), `04`, `10` | Dev + Content | ⚠️ Trang chủ còn "KimQ Studio" (studio.kimq.tech đang dùng tên này) · ⏳ Owner chốt tên sản phẩm video |
| B7 | File XLSX lỗi thời (thiếu 7/40 URL, T07 sai, dashboard cố định phạm vi) | P0 | Thêm URL, cập nhật T02–T07/T14, mở rộng công thức Dashboard, thêm T22–T26 | [`KimQ_SEO_GEO_Master_Audit_90_Days.xlsx`](KimQ_SEO_GEO_Master_Audit_90_Days.xlsx) | SEO | ✅ |

## C. Nội dung / E-E-A-T

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| C1 | Claim AI Gateway **mâu thuẫn**: trang sản phẩm "không lưu nội dung", trang hướng dẫn "mặc định lưu sau khi che" | P0 | CTO xác nhận trên bản đang chạy → sửa theo phương án A hoặc B | [`seo-content/01`](seo-content/01-sua-claim-ai-gateway.md), [`seo-content/10`](seo-content/10-cau-hoi-can-chot.md) (Q1) | CTO/Product | ⏳ Q1 · câu "Dữ liệu mật không lọt ra ngoài" vẫn còn trên trang |
| C2 | Trang sản phẩm thiếu E-E-A-T; 1 trang chưa có FAQ; claim YMYL (thuế, lương, y tế) chưa có người rà | P1 | Khối E-E-A-T, khối "Phù hợp với ai" cho 19 trang, FAQ cho `tinh-luong-phong-kham`, danh sách claim cần chuyên gia rà | [`seo-content/05`](seo-content/05-noi-dung-trang-san-pham.md), [`seo-content/11`](seo-content/11-phu-hop-voi-ai.md) + [`phu-hop-voi-ai.json`](seo-content/phu-hop-voi-ai.json) | Content + chuyên gia | ✅ 16/11 (19 khối "Phù hợp với ai" + FAQ) · ⏳ người rà YMYL |
| C3 | 19 trang hướng dẫn không có byline / ngày cập nhật / căn cứ pháp lý | P1 | Mẫu byline + ngày cập nhật thật + TechArticle | [`seo-content/06`](seo-content/06-byline-ngay-cap-nhat-huong-dan.md) | Owner gán người rà | ✅ 16/11 (tác giả "Đội sản phẩm KimQ" + ngày sửa thật) · ⏳ người rà chuyên môn |
| C4 | Chưa có case study | P2 | Trang `/khach-hang` mô tả ngành, quy trình triển khai, nguyên tắc công bố; tên khách chỉ thêm khi khách đồng ý bằng văn bản | [`khach-hang.md`](site-patch/client/src/content/trust/khach-hang.md) | Owner | ✅ 16/11 (trang theo ngành) · ⏳ khách đồng ý công bố |
| C5 | Chưa có bài viết hỗ trợ nhắm từ khoá thông tin (XLSX T17) | P2 | 6 bài: hoá đơn sai thuế suất, đối soát công nợ, ROP, chatbot Zalo OA, AI Gateway là gì, LIMS là gì; route `/kien-thuc` | [`seo-content/12`](seo-content/12-ke-hoach-bai-viet-ho-tro.md) | Dev (route) + Content + chuyên gia rà | ✅ 16/11 mục `/kien-thuc` · ⬜ 6 bài chưa viết |

## D. Trang tin cậy / pháp lý (Luật 91/2025/QH15, NĐ 356/2025)

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| D1 | Không có Chính sách bảo vệ dữ liệu cá nhân | P0 | Trang `/chinh-sach-bao-mat` | [`site-patch/client/src/content/trust/chinh-sach-bao-mat.md`](site-patch/client/src/content/trust/chinh-sach-bao-mat.md) | Owner + luật sư + Dev | ⚠️ Live bản Dev tự viết, thiếu thời hạn lưu, danh sách quyền + thời hạn NĐ 356, người đại diện, chuyển dữ liệu ra nước ngoài, thông báo khi lộ dữ liệu · ⏳ Owner xác nhận giá trị để thay bằng bản git |
| D2 | Form email trên 19 trang SP không có câu đồng ý | P0 | Câu đồng ý + link chính sách dưới form | [`site-patch/client/src/components/ConsentNote.tsx`](site-patch/client/src/components/ConsentNote.tsx) | Dev | ✅ 16/11 |
| D3 | Footer chỉ có `© 2026 KimQ JSC`; MST/địa chỉ chỉ trên 2/40 trang | P0 | Footer 4 cột: pháp nhân, MST, địa chỉ, email, link SP, link pháp lý, mạng xã hội | [`site-patch/client/src/components/Footer.tsx`](site-patch/client/src/components/Footer.tsx) | Dev | ✅ 16/11 (thiếu mạng xã hội, xem F4) |
| D4 | Không có Giới thiệu, Liên hệ, Điều khoản sử dụng | P1 | 3 trang đã viết | [`site-patch/.../gioi-thieu.md`](site-patch/client/src/content/trust/gioi-thieu.md), [`lien-he.md`](site-patch/client/src/content/trust/lien-he.md), [`dieu-khoan-su-dung.md`](site-patch/client/src/content/trust/dieu-khoan-su-dung.md) | Owner + Dev | ✅ 16/11 · ⚠️ Liên hệ chưa ghi giờ làm việc 24/7 |
| D5 | Không có Bảo mật & dữ liệu, DPA, Chính sách dữ liệu AI | P1 | 3 trang đã viết | [`bao-mat-du-lieu.md`](site-patch/client/src/content/trust/bao-mat-du-lieu.md), [`cam-ket-xu-ly-du-lieu.md`](site-patch/client/src/content/trust/cam-ket-xu-ly-du-lieu.md), [`chinh-sach-du-lieu-ai.md`](site-patch/client/src/content/trust/chinh-sach-du-lieu-ai.md) | CTO + luật sư | ⚠️ Live bản rút gọn, chưa có cam kết cụ thể · ⏳ CTO xác nhận (Q1, sao lưu, mã hoá, báo sự cố) |
| D6 | Thiếu các trang P2: bên xử lý phụ, SLA, cookie, tuyển dụng, tuyên bố tiếp cận | P2 | 5 trang đã viết; banner cookie chỉ bật khi có GA4 (Consent Mode v2, mặc định từ chối) | [`site-patch/.../*.md`](site-patch/client/src/content/trust/), [`CookieConsent.tsx`](site-patch/client/src/components/CookieConsent.tsx) | Owner + Dev | ⚠️ Live bản rút gọn (SLA không có số liệu, chưa có 24/7) · GA4 chưa bật (đúng) |
| D7 | Không có [`security.txt`](site-patch/client/public/.well-known/security.txt) | P2 | `/.well-known/security.txt` (hết hạn 10/11/2027) | [`site-patch/client/public/.well-known/security.txt`](site-patch/client/public/.well-known/security.txt) | Dev | ⬜ Stage 3 (hiện trả 404) |
| D8 | Chưa có trang trạng thái hệ thống | P2 | Dùng dịch vụ status page ngoài, gắn link vào `STATUS_PAGE_URL` | [`site-patch/README.md`](site-patch/README.md) | Dev | ⬜ Stage 3 |
| D9 | Thiếu thông tin để hoàn thiện ~120 chỗ `[CẦN ĐIỀN]` | P0 | Đã điền hết bằng dữ liệu đăng ký doanh nghiệp, DNS/header và giá trị đề xuất; còn 13 giá trị cần Owner/CTO xác nhận | [`site-patch/README.md`](site-patch/README.md) §4 | Owner + CTO | ⏳ Owner/CTO xác nhận 13 giá trị ở README §4 · ⬜ SEO sửa bản git: Telegram thay Lark, phông chữ lưu trên site (không Google Fonts) |

## E. Bảo mật (Dev)

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| E1 | Thiếu security headers (chỉ có `nosniff`) | P1 | CSP, HSTS, `frame-ancestors`, Referrer-Policy, Permissions-Policy qua Cloudflare Transform Rules | Audit §6 | Dev | ✅ một phần 16/11 (HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) · ⏳ CSP đang Report-Only, bật thật sau ≥ 1 tuần |
| E2 | 5 điểm cần source server để xác minh: rate limit theo IP nào, cờ `?kqtest=1`, escape dữ liệu lead, email xác nhận, truy cập thẳng origin Railway | P1 | Dev rà code server theo danh sách | Audit §6 "needs_validation" | Dev | ⚠️ Đã rà 5 điểm · **chưa sửa lỗi giả IP khi gọi thẳng origin Railway** (lách được giới hạn gửi form) |
| E3 | `/api/*` không tồn tại trả HTML 200 | P2 | Trả JSON 404 | Audit §6 | Dev | ⬜ Stage 3 |

## F. Đo lường / GEO / off-page

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| F1 | Chưa verify Search Console / GA4, chưa có baseline trước core update kế tiếp | P0 | Verify GSC Domain property (TXT DNS) + GA4; lưu số liệu gốc; ghi nhật ký update | [`seo-content/07`](seo-content/07-gsc-ga4-chinh-sach-ai-geo.md) §1 | SEO + Dev (DNS) | ⏳ Kiểm tra SEO đã có quyền GSC chưa (Dev nói Owner đã mời) · GA4: Stage 3 |
| F2 | Chưa chốt chính sách bot AI; Search generative AI control chưa khớp robots | P1 | Chọn A (giữ nguyên) hoặc B (bỏ chặn bot training), đặt GSC cùng chính sách | [`seo-content/07`](seo-content/07-gsc-ga4-chinh-sach-ai-geo.md) §2, [`seo-content/10`](seo-content/10-cau-hoi-can-chot.md) (Q3) | Owner | ✅ 16/11 robots cho phép bot AI (đúng đề xuất Q3) |
| F3 | Kế hoạch GEO chưa cấm mua/thao túng mentions (Google cảnh báo 28/05/2026) | P1 | Ghi rõ quy tắc Không làm / Làm | [`seo-content/07`](seo-content/07-gsc-ga4-chinh-sach-ai-geo.md) §3 | SEO | ✅ |
| F4 | Hồ sơ mạng xã hội chưa có trên site và schema | P1 | Facebook, Instagram, Threads, TikTok vào footer, `sameAs`, trang Liên hệ; thêm LinkedIn, Zalo OA, YouTube khi có; đặt `https://kimq.tech` vào bio | [`site-config.ts`](site-patch/client/src/lib/site-config.ts), [`schema/home.jsonld`](seo-content/schema/home.jsonld) | Marketing + Dev | ✅ tài liệu · ⬜ site: footer/schema chưa có link · ⏳ Owner xác nhận 4 URL |
| F5 | 22 câu hỏi GEO chưa test | P1 | Chạy sau khi prerender (A2) xong; ghi model, có bật web search không, đối thủ được nhắc, ảnh chụp | [`seo-content/07`](seo-content/07-gsc-ga4-chinh-sach-ai-geo.md) §4, sheet GEO Test Set | SEO | ⬜ |
| F6 | Chưa có chiến lược backlink | P2 | Chỉ earned mentions: đối tác, báo ngành, case study thật; không mua link | [`seo-content/07`](seo-content/07-gsc-ga4-chinh-sach-ai-geo.md) §3, XLSX T20 | Marketing | ⬜ |
| F7 | Đối chiếu Google updates 05–11/2026 | — | Đã so sánh và đưa vào ưu tiên | [`KIMQ-GOOGLE-UPDATES-COMPARE-2026-11-10.md`](KIMQ-GOOGLE-UPDATES-COMPARE-2026-11-10.md) | SEO | ✅ |
| F8 | Chưa có [`llms.txt`](seo-content/llms.txt) (tuỳ chọn, chưa công cụ lớn nào xác nhận dùng) | P3 | Bản nháp liệt kê 19 sản phẩm, 19 hướng dẫn, trang công ty; chỉ đưa lên khi đã chốt Q3 và trust pages đã live | [`seo-content/llms.txt`](seo-content/llms.txt), [`seo-content/13`](seo-content/13-alt-text-va-llms-txt.md) §2 | Dev | ✅ 16/11 |

## Các mục đã đạt (không cần làm)

1 H1/trang (40/40) · title/meta duy nhất sau render · 0 link hỏng · 0 ảnh lỗi · 100% ảnh WebP · mobile responsive · accessibility 100 · URL slug sạch · http→https 301 · form "Quan tâm" phản hồi đúng chuẩn UX · không lộ secret trong bundle · không noindex nhầm trang thật.

## Thứ tự đề xuất

| Stage | Việc | Mục | Trạng thái |
|---|---|---|---|
| 1 | Build production, prerender, metadata, sitemap, 404/301, footer, câu đồng ý, 13 trang tin cậy, tốc độ mobile | A1–A7, B3, B6, D1–D6 | ✅ Deploy 16/11 · ⚠️ trang tin cậy bản rút gọn |
| 2 | Schema, internal link, "Phù hợp với ai", alt, `www`, security headers, rà server, `/kien-thuc` | B1, B2, B4, C2, C3, A9, E1, E2, C5 | ✅ Deploy 16/11 · ⚠️ lỗi giả IP chưa sửa |
| 2b | Sửa sau deploy: lỗi giả IP; thay nội dung trang tin cậy sau khi Owner xác nhận; mạng xã hội; câu AI Gateway | E2, D1, D4–D6, F4, C1 | ⬜ |
| 3 | `security.txt`, JSON 404 cho API, GA4 + banner cookie, trang trạng thái | D7, E3, D6, D8 | ⬜ |
| 4 | 6 bài kiến thức, test GEO 22 câu, backlink | C5, F5, F6 | ⬜ |

Khi một mục thay đổi trạng thái, cập nhật dòng tương ứng ở đây và trong XLSX (sheet Roadmap).
