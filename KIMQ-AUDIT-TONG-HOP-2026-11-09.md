# KimQ.tech — Báo cáo audit tổng hợp (09/11/2026)

Tổng hợp các lần kiểm tra `https://kimq.tech/` ngày 09/11/2026:

1. SEO kỹ thuật theo [NEWS-SITE-BUILD-CHECKLIST](https://github.com/ThanaLamth/nextjs/blob/main/docs/NEWS-SITE-BUILD-CHECKLIST.md) + checklist SEO 20 mục
2. Quy tắc UX loading (dưới 1s / 1–10s / trên 10s / thao tác đơn giản)
3. Security review theo [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill)
4. Đối chiếu file `KimQ_SEO_GEO_Master_Audit_90_Days.xlsx` với site live bằng [claude-seo](https://github.com/AgriciDaniel/claude-seo), theo nguyên tắc "evidence before claims" của [superpowers](https://github.com/obra/superpowers)

> Mọi số liệu dưới đây đo trực tiếp trên production ngày 09/11/2026. Kết luận nào chưa đo được đều ghi rõ là "cần xác minh".

> **Cập nhật 10/11/2026:** recheck live, chưa có thay đổi (sitemap 404, soft-404, dev build `jsxDEV` ×143). Thêm mục 10: đối chiếu Google Search updates tháng 05–11/2026 (nguồn Search Engine Roundtable, fetch bằng TinyFish). Bảng chi tiết: [`KIMQ-GOOGLE-UPDATES-COMPARE-2026-11-10.md`](KIMQ-GOOGLE-UPDATES-COMPARE-2026-11-10.md).

---

## 0. Tóm tắt điều hành

| # | Vấn đề | Mức | Nhóm |
|---|---|---|---|
| 1 | Production đang chạy **React development build** (`jsxDEV`, lộ đường dẫn `/app/client/src/...`) | P0 | Hiệu năng / Bảo mật |
| 2 | Site là SPA render phía client: **HTML gốc mọi URL giống hệt nhau** (title "KimQ Studio", 2 từ nội dung, không H1/canonical/schema) | P0 | SEO / GEO |
| 3 | Trang chủ mobile chậm: Lighthouse **54** (median 3 lần), **LCP ~7s** | P0 | CWV |
| 4 | Không có `sitemap.xml` (404) | P0 | SEO |
| 5 | **Soft 404**: mọi URL lạ trả HTTP 200, trang 404 là template dev tiếng Anh | P0 | SEO |
| 6 | Claim AI Gateway **mâu thuẫn** giữa trang sản phẩm và trang hướng dẫn (có lưu nội dung câu hỏi hay không) | P0 | Nội dung / Pháp lý |
| 7 | File XLSX dựa trên bản xuất 05/11: thiếu 7/40 URL live, T07 lỗi thời, dùng tên "KimQ AI Tech" không có trên site | P0 | Kế hoạch |
| 8 | 0 JSON-LD trên toàn site; trang chủ thiếu canonical + og:image | P1 | SEO |
| 9 | Thiếu security headers (CSP, HSTS, frame-ancestors, Referrer-Policy, Permissions-Policy) | P1 | Hardening |
| 10 | `www.kimq.tech` không có DNS; EN/VI không có URL riêng / hreflang | P1 | SEO |
| 11 | Chưa xác minh Google Search Console / GA4 → không có baseline trước core update kế tiếp; chưa cấu hình *Search generative AI control* cho khớp robots.txt (đang chặn Google-Extended) | P1 | Đo lường / GEO |
| 12 | Kế hoạch GEO 90 ngày chưa cấm rõ việc mua/thao túng brand mentions (Google cảnh báo 28/05/2026, coi như paid links) | P1 | Kế hoạch / GEO |

**Điểm tốt:** 1 H1/trang (40/40), title + meta duy nhất sau render, 0 link hỏng, 0 ảnh lỗi, toàn bộ ảnh WebP, mobile responsive, accessibility 100, form "Quan tâm" phản hồi đúng chuẩn UX, không lộ secret trong bundle.

---

## 1. Hiện trạng kỹ thuật

| Hạng mục | Giá trị |
|---|---|
| Stack | Vite + React SPA (wouter router), API `/api/quan-tam` |
| Hosting | Railway (edge `cdg1`) sau Cloudflare |
| Route | `/`, `/san-pham`, `/san-pham/:slug`, `/san-pham/:slug/huong-dan` |
| Số URL live | **40** = trang chủ + `/san-pham` + 19 sản phẩm + 19 hướng dẫn |
| JS | `index-*.js` 598 KB (183 KB nén) + chunk lazy `sections` 174 KB, `GuidePage` 50 KB |
| CSS | 160 KB, render-blocking |
| Ảnh | 259 ảnh, 100% WebP, tổng 12.6 MB, lớn nhất `hero-turtle.webp` 237 KB |

Danh sách 19 sản phẩm: `nhatdat`, `thong-tin-dau-thau`, `giai-phap-hoa-chat`, `kho-gia-vat-lieu`, `lims`, `benh-vien`, `tinh-luong-phong-kham`, `kiem-soat-tai-chinh`, `cong-no`, `kho-mua-hang`, `bao-gia-don-hang`, `hoa-don-dau-vao`, `cham-cong-luong`, `tro-ly-zalo`, `chatbot-da-kenh`, `tu-dong-hoa`, `ai-studio`, `tro-ly-fanpage`, `ai-gateway`. Mỗi sản phẩm có `/huong-dan`.

`/san-pham/tuan-thu-hoa-chat` là redirect bằng JS (`location.replace`, HTTP 200) sang `/san-pham/giai-phap-hoa-chat#tuan-thu`.

---

## 2. Checklist SEO 20 mục

| Mục | Kết quả | Chi tiết |
|---|---|---|
| Noindex tags | ⚠️ | Không trang nào noindex, kể cả trang 404 / sản phẩm không tồn tại |
| Meta titles | ⚠️ | Sau render: 40/40 duy nhất, 11–60 ký tự. HTML gốc: tất cả là "KimQ Studio". Title trang chủ 11 ký tự, yếu |
| Meta descriptions | ⚠️ | Sau render: 40/40 duy nhất. HTML gốc dùng chung một câu |
| Alt text ảnh | ✅/⚠️ | Ảnh trang trí `alt=""` là đúng. 5 thumbnail `benh-vien/video-*.webp` cần alt |
| Core Web Vitals | ❌ | Xem mục 3 |
| sitemap.xml | ❌ | 404 (`sitemap.xml`, `sitemap_index.xml`, `sitemap-index.xml`), robots.txt không khai báo |
| og:image | ⚠️ | 39/40. **Trang chủ thiếu** (file `/opengraph.jpg` có sẵn). HTML gốc không có og:image |
| Broken links | ✅ | 0 link hỏng (Playwright + TinyFish). Link ngoài: `mailto:contact@kimq.tech`, `dauthau.io` |
| Header hierarchy | ✅ | Không nhảy cấp heading |
| Backlink strategy | — | Ngoài phạm vi audit kỹ thuật |
| URL slugs | ✅ | Sạch, tiếng Việt không dấu |
| Internal linking | ⚠️ | Trang chủ chỉ link tới `/san-pham` và các anchor, không link thẳng tới sản phẩm nào |
| Canonical | ⚠️ | 39/40 sau render, **trang chủ thiếu**. HTML gốc không có canonical |
| HTTPS | ✅/⚠️ | http→https 301. `www.kimq.tech` không có DNS |
| Nén ảnh | ✅/⚠️ | 100% WebP. Hero 900px nhưng hiển thị 361px trên mobile, không có `srcset` |
| Schema markup | ❌ | 0 JSON-LD trên 40/40 URL |
| Search Console | ⚠️ | Không thấy TXT/meta `google-site-verification` (có thể đã xác minh bằng cách khác) |
| 1 H1/trang | ✅ | 40/40 trang có đúng 1 H1 |
| robots.txt | ⚠️ | Có (Cloudflare managed). Lighthouse báo lỗi dòng `Content-Signal`; thiếu `Sitemap:` |
| Mobile responsive | ✅ | Không scroll ngang, menu bấm được |

---

## 3. Core Web Vitals (Lighthouse 12, mobile, local)

| Trang | Perf | FCP | LCP | TBT | CLS | SEO | A11y | BP |
|---|---|---|---|---|---|---|---|---|
| `/` lần 1 | 43 | 3.4s | 6.9s | 1,370ms | 0.061 | 92 | 100 | 100 |
| `/` lần 2 | 59 | 3.6s | 7.1s | 390ms | 0 | 92 | 100 | 100 |
| `/` lần 3 | 54 | 3.7s | 7.0s | 540ms | 0 | 92 | 100 | 100 |
| **`/` median** | **54** | **3.6s** | **7.0s** | **540ms** | **0** | | | |
| `/san-pham/nhatdat` | 78 | 3.1s | 4.0s | 220ms | 0.013 | 92 | 100 | 100 |

TTFB khoảng 210–260ms (đạt mức dưới 800ms). PSI/CrUX chưa chạy được vì API hết quota.

**Nguyên nhân chính**
- React development build làm main thread bận 3.1–4.2s; ước tính 89–126 KB JS thừa.
- LCP trang chủ là `hero-turtle.webp`: được phát hiện muộn (nằm trong JS), ảnh quá khổ (tiết kiệm được ~241 KB), không có preload. Trang sản phẩm có LCP là H1.
- CSS 160 KB chặn render (tiết kiệm được 170–340ms).
- `logo.webp` và `footer-lotus.webp` thiếu `width`/`height`.
- claude-seo `preload_check`: điểm 50, chưa có speculation rules, chưa preload ảnh LCP.

---

## 4. Đối chiếu NEWS-SITE-BUILD-CHECKLIST

Checklist viết cho site tin tức Headless WP + Next.js; kimq.tech là site doanh nghiệp Vite SPA, nên nhiều mục không áp dụng (N/A).

| Mục | Trạng thái |
|---|---|
| §1 Kiến trúc (WP, ISR, middleware) | N/A. Redirect http→https làm ở edge ✅. Không có URL legacy WP |
| §2 Dữ liệu & API | N/A (không có WP). UTF-8 ✅ |
| §3 Indexing | ❌ Soft 404 chưa noindex. Canonical: thiếu ở trang chủ. robots không chặn assets ✅, nhưng không khai báo sitemap |
| §4 Sitemap | ❌ Không có |
| §5 Structured data | ❌ 0 khối JSON-LD (cần Organization + WebSite, SoftwareApplication/Service, BreadcrumbList) |
| §6 E-E-A-T | ⚠️ Không có trang About/Contact riêng (chỉ anchor `#about`, `#contact`), không có editorial/team page |
| §7 CWV | ❌ Xem mục 3. Ảnh below-fold đã `loading="lazy"` ✅; ảnh LCP có `fetchpriority="high"` nhưng phát hiện muộn |
| §8 Bảo mật | ⚠️ Xem mục 6 |
| §9 Deploy | ❌ Build không phải production mode |
| §10 Monitoring | Chưa có sitemap/GSC baseline để theo dõi |

---

## 5. Quy tắc UX loading

| Tình huống | Quy tắc | Thực tế | Đánh giá |
|---|---|---|---|
| Dưới 1 giây | Không cần loading | Mạng thật: trang chủ, danh mục, sản phẩm, hướng dẫn hiện nội dung trong 0.1–0.7s (TinyFish + Playwright) | ✅ |
| 1–10 giây | Skeleton | Mạng mobile chậm (Lighthouse): FCP ~3s, người dùng chỉ thấy **màn hình be trống** (`#root` rỗng, fallback `Suspense` là div trống) | ⚠️ Thêm skeleton trong `index.html`, hoặc prerender |
| Trên 10 giây | Hiển thị tiến độ | Không có thao tác nào | N/A |
| Thao tác đơn giản | Phản hồi ngay | Form "Quan tâm": validate email tức thì, trạng thái "Đang gửi…", `aria-busy`, thông báo rate-limit; anchor menu cuộn ngay | ✅ |

Chuyển EN/VI hoạt động nhưng không đổi URL, nên nội dung tiếng Anh không được index.

---

## 6. Security review (cloudflare/security-audit-skill)

**Phạm vi:** chạy ở *guidance mode*. Chưa tìm thấy repo source của site đang chạy (`ThanaLamth/kimq-web` là bản HTML tĩnh cũ, commit 12/10/2026). Mình chỉ đọc bundle JS public và gửi GET/OPTIONS tới các URL công khai, **không** POST form. Chưa có `findings.json` theo chuẩn của skill.

### Confirmed
- **[Low] React development build trên production.** 143 lệnh gọi `jsxDEV`, lộ 23 đường dẫn source kèm số dòng (ví dụ `/app/client/src/products/rich/sections.tsx:642`). Không lộ secret, nhưng lộ cấu trúc nội bộ. **Fix:** build với `NODE_ENV=production`.

### Đã kiểm, không có lỗi
- Không có API key hay secret trong bundle; không nhúng biến env vào client.
- Code app không dùng `dangerouslySetInnerHTML`, `eval`, `new Function`, `document.write` (31 chỗ `dangerouslySetInnerHTML` tìm thấy đều thuộc React internals).
- Không có handler `postMessage`; `localStorage` chỉ lưu ngôn ngữ (chỉ nhận `en`/`vi`).
- `location.hash` chỉ dùng cho `getElementById` để cuộn, nên không có DOM XSS; `location.replace` dùng path cố định, nên không có open redirect.
- `/api/quan-tam`: `cache-control: no-store`, GET trả 405, preflight CORS từ origin lạ trả 405.
- `/.env`, `/.git/config`, `/admin` chỉ trả về HTML shell của SPA; source map 404.
- Repo `kimq-web`: không có secret trong 13 commit.

### Cần source server để xác minh (needs_validation)
1. Rate limit của `/api/quan-tam` khoá theo `CF-Connecting-IP` hay `X-Forwarded-For` (header sau có thể bị giả mạo)?
2. Cờ `?kqtest=1` làm client gửi `test:true`: server có bỏ qua rate limit / honeypot khi gặp cờ này không?
3. Các trường `src` (`utm_*`, `l`, `ref`, mỗi trường tối đa 100 ký tự), `email`, `path` do người gửi kiểm soát: có được escape trước khi đẩy vào thông báo lead (Lark/email) không?
4. Server có gửi email xác nhận tới địa chỉ người dùng nhập không (nguy cơ bị lợi dụng gửi mail tới bên thứ ba)?
5. Origin Railway có truy cập thẳng được, bỏ qua Cloudflare không?

### Hardening (không phải lỗ hổng)
- Thêm CSP, HSTS, `frame-ancestors`/X-Frame-Options, Referrer-Policy, Permissions-Policy (Cloudflare Transform Rules). Hiện chỉ có `X-Content-Type-Options: nosniff`.
- `/api/*` không tồn tại nên trả JSON 404 thay vì HTML 200.
- Thêm `/.well-known/security.txt`.

---

## 7. GEO / AI readiness (claude-seo `agentic_check`)

| Check | Kết quả |
|---|---|
| Nội dung khi không chạy JS | ❌ **FAIL**: 2 từ (`words_without_js=2`) |
| robots.txt có nhóm riêng cho AI | ✅ Chặn bot training (GPTBot, ClaudeBot, CCBot, Google-Extended, Applebot-Extended…) |
| Bot tìm kiếm / user-agent AI | ✅ OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User → 200 |
| Content-Signal | `search=yes, ai-train=no, use=reference` |
| URL lạ trả 404 thật | ❌ Trả 200 (catch-all) |
| llms.txt / Markdown | Chưa có (tuỳ chọn) |
| `.well-known/*` | Trả 200 HTML (soft 404) |

Lưu ý: `Google-Extended` và `GoogleOther` bị chặn, nên khi đọc kết quả test GEO trên Gemini cần tính đến điều này.

---

## 8. Đánh giá file `KimQ_SEO_GEO_Master_Audit_90_Days.xlsx` (5 sheet)

File dựng từ `KIMQ-TOAN-BO-CONTENT.md` (xuất 05/11/2026) và đã tự ghi rõ là chưa xác minh trên HTML thật. Đối chiếu live 09/11:

### Sheet 1 — URL Audit (33 dòng)
- ✅ Title đề xuất 21–55 ký tự, meta 100–133 ký tự; heading trong file khớp H1 live **32/32** URL còn tồn tại.
- ❌ **Thiếu 7 URL live:** `nhatdat`, `thong-tin-dau-thau`, `chatbot-da-kenh` (sản phẩm + hướng dẫn của cả 3), cùng `tinh-luong-phong-kham/huong-dan`, `tro-ly-fanpage/huong-dan`. Live là 19 + 19, không phải 17 + 14.
- ❌ **Dòng 19 `tuan-thu-hoa-chat` lỗi thời:** đã là JS redirect, canonical trỏ về `giai-phap-hoa-chat`. Quyết định đúng: **301 phía server**.
- ⚠️ Title/H1 đề xuất dùng "**KimQ AI Tech**", tên này không xuất hiện ở đâu trên site (site dùng "KimQ Studio", "KimQ", "CÔNG TY CỔ PHẦN KIMQ").
- ⚠️ Cột Schema: hạ ưu tiên FAQPage (Google hầu như không còn hiển thị rich result FAQ cho site thương mại); ưu tiên Organization/WebSite + SoftwareApplication/Service + BreadcrumbList.

### Sheet 2 — Roadmap 90 ngày (21 task, tất cả "Chưa bắt đầu")
| Task | Cập nhật theo bằng chứng 09/11 |
|---|---|
| T02 | Đã crawl: 40 URL, tất cả 200 (kể cả URL lạ, tức soft 404) |
| T03 | sitemap 404; robots không có `Sitemap:`; http→https OK; `www` không DNS |
| T04 | **Lỗi đã xác nhận**: đổi từ "kiểm tra" thành "triển khai prerender/SSG" |
| T05 | Đã kiểm tra: xem mục 2–3 |
| T06 | Giữ P0; khoá cột title/H1 và prompt GEO branded cho tới khi chốt tên |
| T07 | Bỏ so sánh nội dung; chỉ còn việc chuyển JS redirect thành 301 |
| T14 | 19 hướng dẫn, không phải 14 |
| **Thiếu** | Build production; resize ảnh hero + preload; skeleton; security headers; trang 404 thật |

### Sheet 3 — Claim Check (8 claim)
Cả 8 claim đều đang có trên site:

| Claim | Live |
|---|---|
| Giảm chi phí tới 30% | Có: "Chi phí thấp hơn tới 30% … tuỳ model và khối lượng" |
| Che PII | Có |
| **Không lưu nội dung câu hỏi/trả lời** | ❌ **MÂU THUẪN**: `/san-pham/ai-gateway` ghi "không lưu nội dung câu hỏi và câu trả lời"; `/san-pham/ai-gateway/huong-dan` ghi "Mặc định lưu sau khi che dữ liệu cá nhân" |
| Fallback khi nhà cung cấp lỗi | Có: "Tự chuyển dự phòng", "không gián đoạn khi một nhà cung cấp lỗi" |
| Kết nối HIS/EMR/LIS | Có |
| Zalo trả lời thuế kèm nguồn | Có: "trả lời thuế, lao động kèm điều khoản" |
| Giọng tiếng Việt có giấy phép thương mại | Có |
| Giá vật liệu quy về cùng quy cách | Có |

### Sheet 4 — GEO Test Set (22 prompt, tất cả "Chưa test")
- Prompt #1 và #20 dùng tên "KimQ AI Tech"; cần chờ T06.
- Nên thêm cột: model + phiên bản, có bật web search không, đối thủ được nhắc, ảnh chụp câu trả lời.
- Chưa chạy được: không có quyền truy cập ChatGPT/Gemini/Perplexity trong phiên audit này.

### Sheet 5 — Dashboard
- ✅ Công thức đúng: 33 / 17 / 14 / 9 P0 / 21 task / 0 xong / 22 prompt / 8 claim.
- ⚠️ Phạm vi cố định `5:37` (data validation cột Q/T cũng vậy), nên thêm URL sẽ không được đếm. Nên mở rộng phạm vi hoặc dùng Excel Table.
- ⚠️ Dòng "P0: 2 URL hóa chất…" cần cập nhật theo T07.

---

## 9. Thứ tự sửa đề xuất

| Tuần | Việc | Kết quả mong đợi |
|---|---|---|
| W1 | Build `NODE_ENV=production`; resize `hero-turtle.webp` (srcset ~400/800px) + preload | TBT và LCP giảm mạnh, hết lộ đường dẫn source |
| W1 | Chốt hành vi lưu log AI Gateway, sửa trang sai | Hết mâu thuẫn claim |
| W1–W2 | Prerender/SSG 40 route (title, meta, canonical, og, H1, nội dung trong HTML gốc) | Crawler và AI fetcher đọc được nội dung |
| W2 | `sitemap.xml` 40 URL + `Sitemap:` trong robots; 404 thật + noindex; 301 cho `tuan-thu-hoa-chat` và `www` | Index sạch |
| W2 | Canonical + og:image cho trang chủ; title trang chủ rõ ràng sau khi chốt tên thương hiệu | |
| W3 | JSON-LD: Organization + WebSite, SoftwareApplication/Service, BreadcrumbList | Rich result và entity |
| W3 | Security headers ở Cloudflare; `security.txt` | Hardening |
| W3 | Cập nhật XLSX: thêm 7 URL, cập nhật T02–T07/T14, mở rộng Dashboard | Kế hoạch khớp thực tế |
| **W1 (mới)** | Xác minh GSC (Domain property) + GA4 ngay, trước core update kế tiếp | Có baseline để đo tác động update |
| W2 | Sitemap: `lastmod` = ngày sửa nội dung thật hoặc bỏ hẳn (không lấy ngày build) | Google tin tưởng lastmod |
| W2 | Thêm About/đội ngũ/pháp nhân, tác giả + ngày cập nhật cho 19 guide; làm khác biệt nội dung 19 trang sản phẩm | Giảm rủi ro core/spam update |
| W3 | Chốt chính sách AI: robots.txt (Google-Extended…) và *Search generative AI control* trong GSC nhất quán; ghi vào plan GEO "không mua mentions" | GEO an toàn |
| Sau đó | Xác minh 5 mục needs_validation khi có source server; chạy GEO Test Set | |

---

## 10. Đối chiếu Google Search updates 05–11/2026 (cập nhật 10/11)

Nguồn: 20 bài trên [Search Engine Roundtable — Google Updates](https://www.seroundtable.com/category/google-updates), từ 21/05 đến 09/11/2026. KimQ chưa có GSC/GA4 nên chỉ đánh giá **rủi ro**, chưa đo được tác động thực tế.

### Timeline chính

| Ngày | Sự kiện |
|---|---|
| 21/05 → 02/06 | **May 2026 Broad Core Update** (12 ngày, toàn cầu, lớn hơn March 2026 core) |
| 28/05 | Google cảnh báo **mua/thao túng brand mentions** để lên AI Overviews/AI Mode |
| 24–26/06 | June 2026 Spam Update |
| 16/07 | Gary Illyes: **lastmod sai thì nên bỏ** |
| 18–21/08 | **August 2026 Spam Update**: đánh mạnh site programmatic/scaled |
| 18/08 | Google sẽ hỗ trợ HTTP QUERY (faceted nav), vài năm nữa |
| 08/09 | Tài liệu Regional differences in Search (DMA) |
| 24/09 → 08/10 | **September 2026 Spam Update**: rollout 2 tuần, tác động "giống core" |
| 06/10 | GSC *Search generative AI control* đã global; thêm thông báo khi property con override cha |
| 16/10 → 09/11 | Nhiều đợt biến động chưa xác nhận; giới SEO **đang chờ core update kế tiếp**; báo cáo hiệu suất GSC lỗi với nhiều site |

### Ảnh hưởng tới KimQ

| Update / guidance | Rủi ro | Liên hệ với audit | Hành động |
|---|---|---|---|
| Core update (May + sắp tới) | **Cao** | Vấn đề #2, #3, #6: HTML gốc trống, LCP ~7s, claim mâu thuẫn, thiếu About/team/case study | SSR/prerender, build production, sửa claim, bổ sung E-E-A-T |
| Spam updates (Aug, Sep) | Thấp–TB | 40 URL viết tay (OK); #5 soft-404 + 19 trang sản phẩm cùng template | 404 thật; nội dung riêng cho từng sản phẩm; không bung trang programmatic |
| Lastmod guidance | TB | #4 chưa có sitemap | Sitemap với lastmod thật hoặc bỏ |
| Manipulating mentions for AI | TB | #12 kế hoạch GEO trong XLSX | Chỉ PR/đối tác/case study thật; thống nhất tên brand |
| Search generative AI control | TB | #11 chưa verify GSC; robots chặn Google-Extended, GPTBot, ClaudeBot | Verify GSC, chốt chính sách AI nhất quán |
| HTTP QUERY, Regional (DMA), AI Mode UI | Không đáng kể | Site không có faceted nav, nhắm VN | Theo dõi |

---

## Phụ lục — Công cụ & phương pháp

- **Playwright** (Pixel 5): crawl và render 40 URL; trích title/meta/canonical/og/H1/ảnh/link/lỗi console.
- **Lighthouse 12** mobile: 3 lần cho trang chủ (lấy median), 1 lần cho trang sản phẩm.
- **TinyFish agent** (trình duyệt thật): UX loading, tương tác form, link header/footer, chuyển ngôn ngữ.
- **claude-seo**: `render_page.py`, `sitemap_discovery.py`, `agentic_check.py --ua-matrix`, `preload_check.py`.
- **cloudflare/security-audit-skill**: guidance mode; phân tích tĩnh bundle public + header.
- **curl/dig**: header, redirect, DNS TXT, kiểm tra các path nhạy cảm.
- **TinyFish fetch** (10/11): 20 bài Google updates trên Search Engine Roundtable cho mục 10.
- Bản XLSX có thêm 2 sheet "Live Check 09-11" và "Đánh giá XLSX" được tạo ở máy audit, chưa đưa vào repo.
