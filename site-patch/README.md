# site-patch: trust pages, footer, câu đồng ý cho form, 404 thật

Ngày: 10/11/2026 · Dành cho: Dev (lắp vào site) + Owner/luật sư (điền và duyệt nội dung)

Repo này **không chứa mã nguồn site**. Site thật chạy React + Vite + wouter trên Railway, code nằm ở `/app/client/src` và `/app/server`. Các file trong [`site-patch/`](./) được viết theo cấu trúc đó (đọc từ bundle production ngày 09/11) để dev copy vào.

## 1. Đã làm gì

| Hạng mục | File | Trạng thái |
|---|---|---|
| **P0** Chính sách bảo vệ dữ liệu cá nhân | [`client/src/content/trust/chinh-sach-bao-mat.md`](client/src/content/trust/chinh-sach-bao-mat.md) | Nháp đầy đủ. Dữ liệu form thu đúng theo code thật: email, sản phẩm, đường dẫn, ngôn ngữ, `utm_*`, tên miền giới thiệu, thời gian điền. Nhà cung cấp đã xác minh: Cloudflare, Railway, Lark, Google Fonts |
| **P0** Câu đồng ý dưới form "Quan tâm" | [`client/src/components/ConsentNote.tsx`](client/src/components/ConsentNote.tsx) | Code xong. Chỉ hiện link khi trang chính sách đã đăng |
| **P0** Footer đủ pháp nhân | [`client/src/components/Footer.tsx`](client/src/components/Footer.tsx), [`client/src/lib/site-config.ts`](client/src/lib/site-config.ts) | Code xong: tên pháp nhân, MST, địa chỉ, email, 8 link sản phẩm, cột Công ty, Tin cậy, Pháp lý. Link tới trang chưa đăng **tự ẩn** |
| **P0** Trang 404 thật | [`client/src/pages/not-found.tsx`](client/src/pages/not-found.tsx) + [`server/known-routes.ts`](server/known-routes.ts) | Code xong: trang 404 tiếng Việt có `noindex`, server trả **HTTP 404**, 301 cho `/san-pham/tuan-thu-hoa-chat` và cho URL có dấu `/` ở cuối |
| P1 Giới thiệu, Liên hệ, Điều khoản | [`gioi-thieu.md`](client/src/content/trust/gioi-thieu.md), [`lien-he.md`](client/src/content/trust/lien-he.md), [`dieu-khoan-su-dung.md`](client/src/content/trust/dieu-khoan-su-dung.md) | Nháp |
| P1 Bảo mật & dữ liệu | [`bao-mat-du-lieu.md`](client/src/content/trust/bao-mat-du-lieu.md) | Nháp. Mỗi ý dẫn về trang sản phẩm đang nói điều đó; CTO duyệt từng dòng |
| P1 Cam kết xử lý dữ liệu (DPA) | [`cam-ket-xu-ly-du-lieu.md`](client/src/content/trust/cam-ket-xu-ly-du-lieu.md) | Nháp, luật sư duyệt |
| P1 Chính sách dữ liệu AI | [`chinh-sach-du-lieu-ai.md`](client/src/content/trust/chinh-sach-du-lieu-ai.md) | Nháp theo phương án A, **chờ chốt Q1** |
| P2 Case study | [`khach-hang.md`](client/src/content/trust/khach-hang.md) | Mẫu. Chỉ đăng khi có khách đồng ý |
| P2 Bên xử lý phụ | [`ben-xu-ly-phu.md`](client/src/content/trust/ben-xu-ly-phu.md) | 4 nhà cung cấp đã xác minh + các dòng CTO điền |
| P2 Cam kết SLA | [`cam-ket-sla.md`](client/src/content/trust/cam-ket-sla.md) | Khung. Chỉ đăng con số làm được |
| P2 Chính sách cookie + bảng đồng ý GA4 | [`chinh-sach-cookie.md`](client/src/content/trust/chinh-sach-cookie.md), [`components/CookieConsent.tsx`](client/src/components/CookieConsent.tsx) | Xong. Bảng đồng ý chỉ chạy khi có `VITE_GA4_ID`; Consent Mode v2 mặc định `denied` |
| P2 [`security.txt`](client/public/.well-known/security.txt) | [`client/public/.well-known/security.txt`](client/public/.well-known/security.txt) | Xong, hạn tới 10/11/2027 |
| P2 Trang trạng thái hệ thống | `STATUS_PAGE_URL` trong [`site-config.ts`](client/src/lib/site-config.ts) | Hướng dẫn ở mục 5. Link chỉ hiện khi đã dựng |
| P2 Tuyển dụng, Tuyên bố tiếp cận | [`tuyen-dung.md`](client/src/content/trust/tuyen-dung.md), [`tuyen-bo-tiep-can.md`](client/src/content/trust/tuyen-bo-tiep-can.md) | Nháp |

Đã kiểm:
- `tsc --strict` không lỗi, với stub cho các module chỉ có trên site thật.
- Render thử cả 13 trang bằng React: không sót cú pháp Markdown; link tới trang chưa đăng hiển thị thành chữ thường.

## 2. Cơ chế "chưa duyệt thì không lên"

- Mỗi trang là một file Markdown có frontmatter `status: draft | ready`. Chỉ trang `ready` mới có route, có link ở footer, và được server trả 200.
- `node scripts/trust-check.mjs` sẽ **báo lỗi** nếu trang `ready` vẫn còn `[CẦN ĐIỀN`, `[CẦN CHỐT` hoặc "Ghi chú cho người duyệt". Script cũng ghi [`server/trust-routes.json`](server/trust-routes.json) và in đoạn sitemap cho các trang đã sẵn sàng.
- Xem trước bản nháp trên staging: đặt `VITE_SHOW_DRAFT_TRUST=1`. Trang nháp có băng "Bản nháp" và `noindex`. **Không** bật biến này ở production.

Đăng một trang:
1. Điền hết chỗ trống.
2. Đổi frontmatter thành `status: ready`, điền `updated`/`effective` dạng `dd/mm/yyyy`.
3. Chạy `node scripts/trust-check.mjs`.
4. Deploy.

## 3. Lắp vào site (Dev)

| Bước | Việc | Ghi chú |
|---|---|---|
| 1 | Copy [`client/src/content/trust/`](client/src/content/trust/), `client/src/lib/{site-config,trust-pages,use-page-meta}.ts`, `client/src/components/{Markdown,ConsentNote,CookieConsent}.tsx`, [`client/src/pages/trust-page.tsx`](client/src/pages/trust-page.tsx) vào `/app/client/src/` | Alias `@/` trỏ [`client/src`](client/src/) như code hiện tại |
| 2 | Thay [`client/src/components/Footer.tsx`](client/src/components/Footer.tsx) và [`client/src/pages/not-found.tsx`](client/src/pages/not-found.tsx) | Kiểm tên hook ngôn ngữ (`useLanguage` trong `lib/language-context.tsx`) và kiểu export của `Navbar`; sửa import nếu khác |
| 3 | Tạo `client/src/components/InterestForm.tsx`: export lại form "Quan tâm" đang có trong `products/rich/sections.tsx` (form `POST /api/quan-tam`), nhận prop `product` | Trang `/lien-he` dùng lại form này |
| 4 | Trong form "Quan tâm" (`products/rich/sections.tsx`, khoảng dòng 640), thêm `<ConsentNote language={lang} />` ngay dưới nút gửi | Áp dụng cho 19 trang sản phẩm |
| 5 | `App.tsx`: thêm các route trang trust **trước** route bắt mọi URL; gắn `<CookieConsent />` 1 lần | Xem [`client/src/App.routes.snippet.tsx`](client/src/App.routes.snippet.tsx) |
| 6 | Server: trong `serveStatic` (`server/vite.ts`), thay `app.use("*", … sendFile(index.html))` bằng `serveSpaWithRealStatus(app, distPath)` từ [`server/known-routes.ts`](server/known-routes.ts) | `express.static` phải đứng trước để `/.well-known/security.txt` và `/assets/*` vẫn chạy |
| 7 | Build: `"build": "node scripts/trust-check.mjs && vite build && …"`, và copy [`server/trust-routes.json`](server/trust-routes.json) vào cùng thư mục với file server sau build (`dist/`) | [`known-routes.ts`](server/known-routes.ts) đọc file qua `import.meta.dirname` |
| 8 | `PRODUCT_SLUGS` trong [`known-routes.ts`](server/known-routes.ts) phải khớp catalog sản phẩm | Thêm sản phẩm mới mà quên cập nhật thì trang đó sẽ bị trả 404 |
| 9 | Copy [`client/public/.well-known/security.txt`](client/public/.well-known/security.txt) | |
| 10 | Thêm vào `sitemap.xml` các trang `ready` (script in sẵn đoạn XML) | |
| 11 | Copy [`scripts/prerender.mjs`](scripts/prerender.mjs), [`scripts/sitemap.mjs`](scripts/sitemap.mjs), [`client/public/robots.txt`](client/public/robots.txt), [`client/src/components/FitBlock.tsx`](client/src/components/FitBlock.tsx); copy `seo-content/` thành `seo/` | Cách chạy: [`DEV-HANDOFF.md`](../DEV-HANDOFF.md) mục A2, A4, C2 |
| 12 | `serveStatic`: `express.static(distPath, { index: false })` | Để `/` trả bản prerender thay vì `index.html` rỗng |

**Nghiệm thu sau deploy:**

```bash
curl -sI https://kimq.tech/khong-ton-tai | head -1                 # 404
curl -sI https://kimq.tech/san-pham/cong-no | head -1              # 200
curl -sI https://kimq.tech/san-pham/tuan-thu-hoa-chat | grep -i location   # 301 → giai-phap-hoa-chat
curl -s  https://kimq.tech/.well-known/security.txt | head -2      # Contact: …
```

- Footer giống nhau trên mọi trang: có MST, địa chỉ, email, link sản phẩm, và link tới trang trust đã đăng.
- Form "Quan tâm" có câu đồng ý.
- Rich Results Test cho trang trust: `WebPage`/`AboutPage`/`ContactPage` + `BreadcrumbList`.

## 4. Giá trị đã điền — cần Owner/CTO xác nhận trước khi deploy

Ngày 13/11/2026, cả 13 trang đã điền đủ (0 chỗ `[CẦN ĐIỀN]`) và để `status: ready`. Giá trị lấy từ: đăng ký doanh nghiệp (MST 0319416034), DNS/HTTP header của kimq.tech, nội dung website hiện tại, Luật 91/2025/QH15 và NĐ 356/2025, cách làm của các site cùng ngành. **Những giá trị dưới đây là đề xuất, chưa phải sự thật đã xác nhận.** Sai chỗ nào thì sửa trong file `.md` tương ứng rồi chạy lại `trust-check.mjs`.

| # | Giá trị đã điền | Nguồn | Ai xác nhận | File |
|---|---|---|---|---|
| 1 | Người đại diện: Nguyễn Văn An; đăng ký lần đầu 23/02/2026; VPĐD Số 71 đường 61-TML, P. Cát Lái (MST 0319416034-001) | Đăng ký doanh nghiệp | Owner | Giới thiệu, Chính sách bảo mật, `site-config.ts` |
| 2 | Giờ làm việc T2–T6, 8:30–17:30; phản hồi email trong 1 ngày làm việc; không công bố số điện thoại | Đề xuất | Owner | Liên hệ, schema |
| 3 | Bên xử lý: Cloudflare, Railway, Lark, Google Fonts (website); thêm OpenAI, Zalo (VNG), Meta (sản phẩm); dữ liệu Railway và Lark nằm ngoài Việt Nam | DNS, header | CTO | Chính sách bảo mật, Bên xử lý phụ |
| 4 | Lưu dữ liệu form và email 24 tháng; nhật ký 90 ngày; CV 12 tháng | Đề xuất | Owner + luật sư | Chính sách bảo mật, Tuyển dụng |
| 5 | Sao lưu hằng ngày, giữ ≥ 7 ngày; mã hoá khi lưu và khi truyền; bật 2FA nội bộ; chưa có ISO/SOC 2 | Đề xuất | CTO | Bảo mật & dữ liệu |
| 6 | Báo khách sự cố trong 48 giờ; báo trước 30 ngày khi đổi bên xử lý phụ; xuất dữ liệu trong 30 ngày; xoá trong 30 ngày, bản sao lưu trong 90 ngày | Đề xuất (NĐ 356 yêu cầu báo cơ quan 72 giờ) | CTO + luật sư | DPA, Bảo mật & dữ liệu |
| 7 | OpenAI là ví dụ nhà cung cấp mô hình; KimQ không huấn luyện mô hình trên dữ liệu khách | Đề xuất | CTO | Chính sách dữ liệu AI |
| 8 | **Q1 = phương án A**: AI Gateway lưu nội dung sau khi che dữ liệu nhạy cảm | Đề xuất | CTO | Chính sách dữ liệu AI |
| 9 | SLA: mục tiêu 99,5%; mức Nghiêm trọng phản hồi 2 giờ, khắc phục 8 giờ; bảo trì 22:00–06:00, báo trước 48 giờ; bù phí chỉ theo hợp đồng | Đề xuất | Owner + CTO | Cam kết SLA |
| 10 | **Q3**: cho phép công cụ tìm kiếm và trợ lý AI đọc theo `robots.txt`; cấm thu thập hàng loạt để tái xuất bản | Đề xuất | Owner | Điều khoản |
| 11 | Tranh chấp: thương lượng 30 ngày, sau đó Toà án nhân dân có thẩm quyền tại TP.HCM | Đề xuất | Luật sư | Điều khoản |
| 12 | Khách hàng: chưa nêu tên khách nào; trang mô tả ngành, quy trình và nguyên tắc công bố | Thực tế hiện tại | Owner | Khách hàng |
| 13 | Tiếp cận: tuân thủ một phần WCAG 2.1 AA; liệt kê lỗi tương phản, thiếu skip link, thứ tự Tab trang chủ; hẹn sửa trong 30 ngày; phản hồi báo lỗi 5 ngày làm việc | Kiểm tra axe + Tab ngày 13/11/2026 | Dev | Tuyên bố tiếp cận |

**Luật sư cần xem:** Chính sách bảo mật (cơ sở xử lý, danh sách quyền, thời hạn phản hồi, chuyển dữ liệu ra nước ngoài, việc KimQ có thuộc diện được miễn hoặc hoãn nghĩa vụ dành cho doanh nghiệp nhỏ hay không), DPA, Điều khoản (giới hạn trách nhiệm, giải quyết tranh chấp), nhóm của `kq_lead_src` trong Chính sách cookie.

## 5. Trang trạng thái hệ thống (khi có khách trả phí)

1. Dùng dịch vụ có sẵn: Better Stack, Instatus, hoặc tự chạy Uptime Kuma. Theo dõi `kimq.tech` và địa chỉ từng sản phẩm đang vận hành.
2. Trỏ `status.kimq.tech` (CNAME trên Cloudflare) tới trang trạng thái.
3. Điền `STATUS_PAGE_URL = "https://status.kimq.tech"` trong [`site-config.ts`](client/src/lib/site-config.ts); footer tự hiện link.
4. Thêm link trang trạng thái vào [`cam-ket-sla.md`](client/src/content/trust/cam-ket-sla.md).

## 6. Lưu ý

- Trang trust chỉ có tiếng Việt. Khi chọn English, trang hiện dòng "This page is available in Vietnamese only".
- Trang 404 cũ là template dev tiếng Anh. Bản mới có `noindex`, nhưng phải có bước 6 (server trả 404) thì Google mới hết báo soft 404.
- Không tự thêm chứng chỉ, con số hay cam kết chưa có. Nội dung trang trust sai còn hại hơn không có trang.
