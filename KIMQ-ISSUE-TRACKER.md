# KimQ.tech — Bảng theo dõi vấn đề & hướng giải quyết

Cập nhật: **13/11/2026** (thêm phần 1 SEO/Content: `seo-content/11–13`) · Kiểm tra lại live ngày 12/11: site **chưa deploy gì mới** từ 09/11 (`last-modified: 09/11/2026`). Vẫn là build dev, HTML gốc vẫn có title "KimQ Studio", URL lạ vẫn trả 200, `/sitemap.xml` vẫn 404, `www` chưa có DNS, chưa có security headers.

Nguồn chi tiết:
- `KIMQ-AUDIT-TONG-HOP-2026-11-09.md`: audit kỹ thuật.
- `KIMQ-GOOGLE-UPDATES-COMPARE-2026-11-10.md`: đối chiếu với các Google update.
- `seo-content/`: phần việc SEO/Content.
- `site-patch/`: code trang tin cậy, footer, 404.
- `KimQ_SEO_GEO_Master_Audit_90_Days.xlsx`: roadmap T01–T26.

## Ký hiệu trạng thái

| Ký hiệu | Nghĩa |
|---|---|
| ✅ | Xong, đã live hoặc đã hoàn tất tài liệu |
| 📝 | Đã soạn hoặc code sẵn trong repo, **chờ Dev đưa lên site** |
| ⏳ | Chờ quyết định hoặc thông tin (Owner / CTO / luật sư) |
| ⬜ | Chưa làm |
| ➖ | Không áp dụng / không cần làm |

## Tóm tắt

| Trạng thái chính | Số mục |
|---|---|
| ✅ Xong | 4 |
| 📝 Sẵn, chờ Dev | 19 |
| ⏳ Chờ quyết định / thông tin | 6 |
| ⬜ Chưa làm | 13 |
| ➖ Không cần làm | 1 |
| **Tổng** | **43** |

Một số mục có nhiều trạng thái (ví dụ "📝 nội dung sẵn · ⬜ prerender"); bảng trên tính theo trạng thái ghi đầu tiên.

**Nút thắt lớn nhất:** gần như mọi thứ đều chờ **Dev deploy**, vì mã nguồn site không nằm trong repo này. Tiếp theo là **4 câu hỏi Q1–Q4** (`seo-content/10-cau-hoi-can-chot.md`) và **thông tin Owner cần điền** (`site-patch/README.md`).

## A. Kỹ thuật / hiệu năng (Dev)

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| A1 | Production chạy **React development build** (`jsxDEV`, lộ đường dẫn `/app/client/src/...`) | P0 | Build với `NODE_ENV=production` (`vite build`), chạy bản build thay cho dev server | Audit §1, §6 | Dev | ⬜ (12/11 vẫn dev) |
| A2 | SPA: **HTML gốc mọi URL giống nhau** (title "KimQ Studio", gần như không có chữ, không H1/canonical/schema). Crawler và bot AI không đọc được | P0 | Prerender/SSG 40 route: title, meta, canonical, og, H1, nội dung và JSON-LD nằm trong HTML gốc | Nội dung sẵn: `seo-content/meta-40-url.json`, `seo-content/schema/` | Dev | 📝 nội dung sẵn · ⬜ prerender |
| A3 | Trang chủ mobile chậm: Lighthouse **54**, **LCP ~7s**, TBT cao | P0 | Làm A1; `hero-turtle.webp` thêm `srcset` (~400/800px) + `preload`; giảm CSS chặn render (160 KB); thêm `width`/`height` cho `logo.webp`, `footer-lotus.webp` | Audit §3 | Dev | ⬜ |
| A4 | Không có `sitemap.xml` (404); robots không khai báo `Sitemap:` | P0 | Sinh sitemap 40 URL + các trang tin cậy đã `ready`; `lastmod` = ngày sửa nội dung thật (hoặc bỏ); thêm dòng `Sitemap:` trong Cloudflare | `seo-content/meta-40-url.json`; `site-patch/scripts/trust-check.mjs` in sẵn phần trang tin cậy | Dev | ⬜ |
| A5 | **Soft 404**: URL lạ trả HTTP 200, trang 404 là template dev tiếng Anh | P0 | Server trả **HTTP 404** + `X-Robots-Tag: noindex` cho URL không có trong danh sách; trang 404 tiếng Việt | `site-patch/server/known-routes.ts`, `site-patch/client/src/pages/not-found.tsx` | Dev | 📝 |
| A6 | `/san-pham/tuan-thu-hoa-chat` là JS redirect | P1 | Đổi sang **301 phía server** về `/san-pham/giai-phap-hoa-chat`; 301 bỏ dấu `/` cuối URL | `site-patch/server/known-routes.ts` | Dev | 📝 |
| A7 | `www.kimq.tech` không có DNS | P1 | Thêm DNS `www` (proxied) + Redirect Rule 301 về `https://kimq.tech` | Audit §2 | Dev | ⬜ |
| A8 | Màn hình trống 1–10 giây trên mạng chậm (quy tắc UX loading) | P2 | Thêm skeleton tĩnh trong `index.html` (tự hết khi làm A2) | Audit §5 | Dev | ⬜ |
| A9 | 5 thumbnail `benh-vien/video-*.webp` thiếu alt; alt ảnh hero bằng tiếng Anh | P2 | Alt mô tả nội dung từng video; hero: `Linh vật rùa của KimQ` | `seo-content/02` (hero), `seo-content/13` (5 thumbnail + aria-label video) | Dev + Content | 📝 |
| A10 | robots.txt: Lighthouse báo lỗi dòng `Content-Signal` | P2 | Chỉ là cảnh báo do Lighthouse chưa hiểu chỉ thị này. Giữ nguyên, không ảnh hưởng Google | Audit §2 | — | ➖ |

## B. SEO on-page / schema

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| B1 | 0 JSON-LD trên 40 URL | P1 | Organization + WebSite (trang chủ), SoftwareApplication + Breadcrumb + FAQPage (19 SP), TechArticle (19 hướng dẫn) | `seo-content/schema/` (40 file) | Dev | 📝 |
| B2 | Trang chủ thiếu canonical và og:image; title chỉ 11 ký tự | P1 | Canonical `https://kimq.tech/`, og:image `/opengraph.jpg`, title mới | `seo-content/02`, `seo-content/04` | Dev | 📝 |
| B3 | Title/meta 40 URL chưa tối ưu, HTML gốc dùng chung 1 câu | P1 | Bộ title/meta mới, đều đạt độ dài | `seo-content/04-metadata-40-url.md`, `meta-40-url.json` | Dev | 📝 |
| B4 | Internal link: trang chủ không link thẳng tới sản phẩm; khối "Sản phẩm liên quan" chưa hợp lý | P1 | Mục sản phẩm trên trang chủ; sửa link liên quan theo nhóm nghiệp vụ | `seo-content/02`, `seo-content/05` §1 | Dev + Content | 📝 |
| B5 | Bản tiếng Anh không có URL riêng / hreflang, nên không được index | P1 | Tuỳ thị trường: làm `/en/...` + hreflang, hoặc chỉ giữ tiếng Việt | `seo-content/10` (Q4) | Owner | ⏳ Q4 |
| B6 | Tên thương hiệu lẫn lộn (KimQ Studio / AI Studio / KimQ / KimQ AI Tech) | P0 | **Đã chốt 13/11: KimQ Tech** (thương hiệu) · Công ty Cổ phần KimQ (pháp nhân) · AI Studio (sản phẩm video). Title, meta, schema, site-patch, XLSX đã đổi; Dev bỏ "KimQ Studio" trên site | `seo-content/02`, `04`, `10` | Dev + Content | 📝 |
| B7 | File XLSX lỗi thời (thiếu 7/40 URL, T07 sai, dashboard cố định phạm vi) | P0 | Thêm URL, cập nhật T02–T07/T14, mở rộng công thức Dashboard, thêm T22–T26 | `KimQ_SEO_GEO_Master_Audit_90_Days.xlsx` | SEO | ✅ |

## C. Nội dung / E-E-A-T

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| C1 | Claim AI Gateway **mâu thuẫn**: trang sản phẩm "không lưu nội dung", trang hướng dẫn "mặc định lưu sau khi che" | P0 | CTO xác nhận trên bản đang chạy → sửa theo phương án A hoặc B | `seo-content/01`, `seo-content/10` (Q1) | CTO/Product | ⏳ Q1 |
| C2 | Trang sản phẩm thiếu E-E-A-T; 1 trang chưa có FAQ; claim YMYL (thuế, lương, y tế) chưa có người rà | P1 | Khối E-E-A-T, khối "Phù hợp với ai" cho 19 trang, FAQ cho `tinh-luong-phong-kham`, danh sách claim cần chuyên gia rà | `seo-content/05`, `seo-content/11` + `phu-hop-voi-ai.json` | Content + chuyên gia | 📝 · ⏳ người rà |
| C3 | 19 trang hướng dẫn không có byline / ngày cập nhật / căn cứ pháp lý | P1 | Mẫu byline + ngày cập nhật thật + TechArticle | `seo-content/06` | Owner gán người rà | ⏳ |
| C4 | Chưa có case study | P2 | Chỉ làm khi khách đồng ý công khai | `site-patch/.../khach-hang.md` (nháp) | Owner | ⏳ |
| C5 | Chưa có bài viết hỗ trợ nhắm từ khoá thông tin (XLSX T17) | P2 | 6 bài: hoá đơn sai thuế suất, đối soát công nợ, ROP, chatbot Zalo OA, AI Gateway là gì, LIMS là gì; route `/kien-thuc` | `seo-content/12` | Dev (route) + Content + chuyên gia rà | 📝 kế hoạch · ⬜ viết bài |

## D. Trang tin cậy / pháp lý (Luật 91/2025/QH15, NĐ 356/2025)

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| D1 | Không có Chính sách bảo vệ dữ liệu cá nhân | P0 | Trang `/chinh-sach-bao-mat` | `site-patch/client/src/content/trust/chinh-sach-bao-mat.md` | Owner + luật sư + Dev | 📝 nháp · ⏳ điền + duyệt |
| D2 | Form email trên 19 trang SP không có câu đồng ý | P0 | Câu đồng ý + link chính sách dưới form | `site-patch/client/src/components/ConsentNote.tsx` | Dev | 📝 |
| D3 | Footer chỉ có `© 2026 KimQ JSC`; MST/địa chỉ chỉ trên 2/40 trang | P0 | Footer 4 cột: pháp nhân, MST, địa chỉ, email, link SP, link pháp lý, mạng xã hội | `site-patch/client/src/components/Footer.tsx` | Dev | 📝 |
| D4 | Không có Giới thiệu, Liên hệ, Điều khoản sử dụng | P1 | 3 trang nháp | `site-patch/.../gioi-thieu.md`, `lien-he.md`, `dieu-khoan-su-dung.md` | Owner + Dev | 📝 · ⏳ điền (Điều khoản chờ Q3) |
| D5 | Không có Bảo mật & dữ liệu, DPA, Chính sách dữ liệu AI | P1 | 3 trang nháp | `bao-mat-du-lieu.md`, `cam-ket-xu-ly-du-lieu.md`, `chinh-sach-du-lieu-ai.md` | CTO + luật sư | 📝 · ⏳ Q1 |
| D6 | Thiếu các trang P2: bên xử lý phụ, SLA, cookie, tuyển dụng, tuyên bố tiếp cận | P2 | 5 trang nháp; banner cookie chỉ bật khi có GA4 (Consent Mode v2, mặc định từ chối) | `site-patch/.../*.md`, `CookieConsent.tsx` | Owner + Dev | 📝 |
| D7 | Không có `security.txt` | P2 | `/.well-known/security.txt` (hết hạn 10/11/2027) | `site-patch/client/public/.well-known/security.txt` | Dev | 📝 |
| D8 | Chưa có trang trạng thái hệ thống | P2 | Dùng dịch vụ status page ngoài, gắn link vào `STATUS_PAGE_URL` | `site-patch/README.md` | Dev | ⬜ |
| D9 | Thiếu thông tin để hoàn thiện ~120 chỗ `[CẦN ĐIỀN]` | P0 | Owner điền 12 nhóm thông tin còn lại (điện thoại, giờ làm việc, người phụ trách dữ liệu, đội ngũ…) | `site-patch/README.md` (bảng 13 mục) | Owner | ⏳ (1/13 xong: mạng xã hội) |

## E. Bảo mật (Dev)

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| E1 | Thiếu security headers (chỉ có `nosniff`) | P1 | CSP, HSTS, `frame-ancestors`, Referrer-Policy, Permissions-Policy qua Cloudflare Transform Rules | Audit §6 | Dev | ⬜ |
| E2 | 5 điểm cần source server để xác minh: rate limit theo IP nào, cờ `?kqtest=1`, escape dữ liệu lead, email xác nhận, truy cập thẳng origin Railway | P1 | Dev rà code server theo danh sách | Audit §6 "needs_validation" | Dev | ⬜ |
| E3 | `/api/*` không tồn tại trả HTML 200 | P2 | Trả JSON 404 | Audit §6 | Dev | ⬜ |
| E4 | 6 TinyFish API key bị lộ trong chat | P0 | Rotate cả 6 key | — | Owner | ⬜ |

## F. Đo lường / GEO / off-page

| # | Vấn đề | Mức | Hướng giải quyết | Tài liệu / code | Ai | Trạng thái |
|---|---|---|---|---|---|---|
| F1 | Chưa verify Search Console / GA4, chưa có baseline trước core update kế tiếp | P0 | Verify GSC Domain property (TXT DNS) + GA4; lưu số liệu gốc; ghi nhật ký update | `seo-content/07` §1 | SEO + Dev (DNS) | ⬜ |
| F2 | Chưa chốt chính sách bot AI; Search generative AI control chưa khớp robots | P1 | Chọn A (giữ nguyên) hoặc B (bỏ chặn bot training), đặt GSC cùng chính sách | `seo-content/07` §2, `seo-content/10` (Q3) | Owner | ⏳ Q3 |
| F3 | Kế hoạch GEO chưa cấm mua/thao túng mentions (Google cảnh báo 28/05/2026) | P1 | Ghi rõ quy tắc Không làm / Làm | `seo-content/07` §3 | SEO | ✅ |
| F4 | Hồ sơ mạng xã hội chưa có trên site và schema | P1 | Facebook, Instagram, Threads, TikTok vào footer, `sameAs`, trang Liên hệ; thêm LinkedIn, Zalo OA, YouTube khi có; đặt `https://kimq.tech` vào bio | `site-config.ts`, `schema/home.jsonld` | Marketing + Dev | ✅ tài liệu · 📝 site · ⬜ LinkedIn/Zalo/YouTube |
| F5 | 22 câu hỏi GEO chưa test | P1 | Chạy sau khi prerender (A2) xong; ghi model, có bật web search không, đối thủ được nhắc, ảnh chụp | `seo-content/07` §4, sheet GEO Test Set | SEO | ⬜ |
| F6 | Chưa có chiến lược backlink | P2 | Chỉ earned mentions: đối tác, báo ngành, case study thật; không mua link | `seo-content/07` §3, XLSX T20 | Marketing | ⬜ |
| F7 | Đối chiếu Google updates 05–11/2026 | — | Đã so sánh và đưa vào ưu tiên | `KIMQ-GOOGLE-UPDATES-COMPARE-2026-11-10.md` | SEO | ✅ |
| F8 | Chưa có `llms.txt` (tuỳ chọn, chưa công cụ lớn nào xác nhận dùng) | P3 | Bản nháp liệt kê 19 sản phẩm, 19 hướng dẫn, trang công ty; chỉ đưa lên khi đã chốt Q3 và trust pages đã live | `seo-content/llms.txt`, `seo-content/13` §2 | Dev | 📝 · ⏳ Q3 |

## Các mục đã đạt (không cần làm)

1 H1/trang (40/40) · title/meta duy nhất sau render · 0 link hỏng · 0 ảnh lỗi · 100% ảnh WebP · mobile responsive · accessibility 100 · URL slug sạch · http→https 301 · form "Quan tâm" phản hồi đúng chuẩn UX · không lộ secret trong bundle · không noindex nhầm trang thật.

## Thứ tự đề xuất

| Tuần | Việc | Mục |
|---|---|---|
| Ngay | Rotate TinyFish key; CTO trả lời Q1; Owner trả lời Q2–Q4 | E4, C1, B6, F2, B5 |
| W1 | Build production; verify GSC + GA4; ảnh hero responsive | A1, F1, A3 |
| W1–W2 | Ghép `site-patch` (404 thật, 301, footer, câu đồng ý, security.txt); Owner điền thông tin, luật sư duyệt Chính sách bảo mật | A5, A6, D1–D3, D7, D9 |
| W2 | Prerender 40 route + title/meta/schema; sitemap; DNS `www` | A2, B1–B3, A4, A7 |
| W3 | Security headers + rà server; trang P1; internal link | E1–E3, D4, D5, B4 |
| Sau prerender | Test GEO 22 câu hỏi; byline hướng dẫn; case study | F5, C3, C4 |

Khi một mục thay đổi trạng thái, cập nhật dòng tương ứng ở đây và trong XLSX (sheet Roadmap).
