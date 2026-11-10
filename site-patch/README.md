# site-patch: trust pages, footer, câu đồng ý cho form, 404 thật

Ngày: 10/11/2026 · Dành cho: Dev (lắp vào site) + Owner/luật sư (điền và duyệt nội dung)

Repo này **không chứa mã nguồn site**. Site thật chạy React + Vite + wouter trên Railway, code nằm ở `/app/client/src` và `/app/server`. Các file trong `site-patch/` được viết theo cấu trúc đó (đọc từ bundle production ngày 09/11) để dev copy vào.

## 1. Đã làm gì

| Hạng mục | File | Trạng thái |
|---|---|---|
| **P0** Chính sách bảo vệ dữ liệu cá nhân | `client/src/content/trust/chinh-sach-bao-mat.md` | Nháp đầy đủ. Dữ liệu form thu đúng theo code thật: email, sản phẩm, đường dẫn, ngôn ngữ, `utm_*`, tên miền giới thiệu, thời gian điền. Nhà cung cấp đã xác minh: Cloudflare, Railway, Lark, Google Fonts |
| **P0** Câu đồng ý dưới form "Quan tâm" | `client/src/components/ConsentNote.tsx` | Code xong. Chỉ hiện link khi trang chính sách đã đăng |
| **P0** Footer đủ pháp nhân | `client/src/components/Footer.tsx`, `client/src/lib/site-config.ts` | Code xong: tên pháp nhân, MST, địa chỉ, email, 8 link sản phẩm, cột Công ty, Tin cậy, Pháp lý. Link tới trang chưa đăng **tự ẩn** |
| **P0** Trang 404 thật | `client/src/pages/not-found.tsx` + `server/known-routes.ts` | Code xong: trang 404 tiếng Việt có `noindex`, server trả **HTTP 404**, 301 cho `/san-pham/tuan-thu-hoa-chat` và cho URL có dấu `/` ở cuối |
| P1 Giới thiệu, Liên hệ, Điều khoản | `gioi-thieu.md`, `lien-he.md`, `dieu-khoan-su-dung.md` | Nháp |
| P1 Bảo mật & dữ liệu | `bao-mat-du-lieu.md` | Nháp. Mỗi ý dẫn về trang sản phẩm đang nói điều đó; CTO duyệt từng dòng |
| P1 Cam kết xử lý dữ liệu (DPA) | `cam-ket-xu-ly-du-lieu.md` | Nháp, luật sư duyệt |
| P1 Chính sách dữ liệu AI | `chinh-sach-du-lieu-ai.md` | Nháp theo phương án A, **chờ chốt Q1** |
| P2 Case study | `khach-hang.md` | Mẫu. Chỉ đăng khi có khách đồng ý |
| P2 Bên xử lý phụ | `ben-xu-ly-phu.md` | 4 nhà cung cấp đã xác minh + các dòng CTO điền |
| P2 Cam kết SLA | `cam-ket-sla.md` | Khung. Chỉ đăng con số làm được |
| P2 Chính sách cookie + bảng đồng ý GA4 | `chinh-sach-cookie.md`, `components/CookieConsent.tsx` | Xong. Bảng đồng ý chỉ chạy khi có `VITE_GA4_ID`; Consent Mode v2 mặc định `denied` |
| P2 `security.txt` | `client/public/.well-known/security.txt` | Xong, hạn tới 10/11/2027 |
| P2 Trang trạng thái hệ thống | `STATUS_PAGE_URL` trong `site-config.ts` | Hướng dẫn ở mục 5. Link chỉ hiện khi đã dựng |
| P2 Tuyển dụng, Tuyên bố tiếp cận | `tuyen-dung.md`, `tuyen-bo-tiep-can.md` | Nháp |

Đã kiểm:
- `tsc --strict` không lỗi, với stub cho các module chỉ có trên site thật.
- Render thử cả 13 trang bằng React: không sót cú pháp Markdown; link tới trang chưa đăng hiển thị thành chữ thường.

## 2. Cơ chế "chưa duyệt thì không lên"

- Mỗi trang là một file Markdown có frontmatter `status: draft | ready`. Chỉ trang `ready` mới có route, có link ở footer, và được server trả 200.
- `node scripts/trust-check.mjs` sẽ **báo lỗi** nếu trang `ready` vẫn còn `[CẦN ĐIỀN`, `[CẦN CHỐT` hoặc "Ghi chú cho người duyệt". Script cũng ghi `server/trust-routes.json` và in đoạn sitemap cho các trang đã sẵn sàng.
- Xem trước bản nháp trên staging: đặt `VITE_SHOW_DRAFT_TRUST=1`. Trang nháp có băng "Bản nháp" và `noindex`. **Không** bật biến này ở production.

Đăng một trang:
1. Điền hết chỗ trống.
2. Đổi frontmatter thành `status: ready`, điền `updated`/`effective` dạng `dd/mm/yyyy`.
3. Chạy `node scripts/trust-check.mjs`.
4. Deploy.

## 3. Lắp vào site (Dev)

| Bước | Việc | Ghi chú |
|---|---|---|
| 1 | Copy `client/src/content/trust/`, `client/src/lib/{site-config,trust-pages,use-page-meta}.ts`, `client/src/components/{Markdown,ConsentNote,CookieConsent}.tsx`, `client/src/pages/trust-page.tsx` vào `/app/client/src/` | Alias `@/` trỏ `client/src` như code hiện tại |
| 2 | Thay `client/src/components/Footer.tsx` và `client/src/pages/not-found.tsx` | Kiểm tên hook ngôn ngữ (`useLanguage` trong `lib/language-context.tsx`) và kiểu export của `Navbar`; sửa import nếu khác |
| 3 | Tạo `client/src/components/InterestForm.tsx`: export lại form "Quan tâm" đang có trong `products/rich/sections.tsx` (form `POST /api/quan-tam`), nhận prop `product` | Trang `/lien-he` dùng lại form này |
| 4 | Trong form "Quan tâm" (`products/rich/sections.tsx`, khoảng dòng 640), thêm `<ConsentNote language={lang} />` ngay dưới nút gửi | Áp dụng cho 19 trang sản phẩm |
| 5 | `App.tsx`: thêm các route trang trust **trước** route bắt mọi URL; gắn `<CookieConsent />` 1 lần | Xem `client/src/App.routes.snippet.tsx` |
| 6 | Server: trong `serveStatic` (`server/vite.ts`), thay `app.use("*", … sendFile(index.html))` bằng `serveSpaWithRealStatus(app, distPath)` từ `server/known-routes.ts` | `express.static` phải đứng trước để `/.well-known/security.txt` và `/assets/*` vẫn chạy |
| 7 | Build: `"build": "node scripts/trust-check.mjs && vite build && …"`, và copy `server/trust-routes.json` vào cùng thư mục với file server sau build (`dist/`) | `known-routes.ts` đọc file qua `import.meta.dirname` |
| 8 | `PRODUCT_SLUGS` trong `known-routes.ts` phải khớp catalog sản phẩm | Thêm sản phẩm mới mà quên cập nhật thì trang đó sẽ bị trả 404 |
| 9 | Copy `client/public/.well-known/security.txt` | |
| 10 | Thêm vào `sitemap.xml` các trang `ready` (script in sẵn đoạn XML) | |

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

## 4. Thông tin Owner cần điền (điền một lần, dùng cho nhiều trang)

| # | Thông tin | Dùng ở |
|---|---|---|
| 1 | Email nhận yêu cầu về dữ liệu cá nhân (đề xuất `privacy@kimq.tech`) và người/bộ phận phụ trách | Chính sách bảo mật, DPA |
| 2 | Giấy CNĐKDN: nơi cấp, ngày cấp lần đầu; người đại diện theo pháp luật | Footer (`COMPANY.registration`), Giới thiệu |
| 3 | Số điện thoại/Zalo công khai, giờ làm việc, kênh hỗ trợ khách đang dùng | Footer (`COMPANY.phone`), Liên hệ, SLA |
| 4 | Link mạng xã hội thật (LinkedIn công ty, Facebook, Zalo OA, YouTube) | Footer (`COMPANY.social`), `sameAs` trong `seo-content/schema/home.jsonld` |
| 5 | Vùng máy chủ Railway; vùng dữ liệu tài khoản Lark; nơi lưu danh sách khách điền form | Chính sách bảo mật, Bên xử lý phụ |
| 6 | Thời gian lưu: dữ liệu form, email, nhật ký máy chủ, CV ứng viên | Chính sách bảo mật, Tuyển dụng |
| 7 | Hạ tầng chạy sản phẩm, vị trí máy chủ; có mã hoá khi lưu không | Bảo mật & dữ liệu, Bên xử lý phụ, DPA |
| 8 | Nhà cung cấp mô hình AI; họ có dùng dữ liệu API để huấn luyện không; KimQ có dùng dữ liệu khách để huấn luyện không | Chính sách dữ liệu AI, DPA |
| 9 | **Q1**: AI Gateway có lưu nội dung câu hỏi không (phương án A hoặc B ở `seo-content/01`) | Chính sách dữ liệu AI |
| 10 | Sao lưu (tần suất, nơi lưu, thời gian giữ); quy trình xử lý sự cố; số giờ báo khách khi có sự cố | Bảo mật & dữ liệu, DPA |
| 11 | Con số SLA (uptime, thời gian phản hồi), có bù phí không | Cam kết SLA |
| 12 | Đội ngũ (ảnh, tên, vai trò, LinkedIn), các mốc hành trình, khách hàng đồng ý công khai | Giới thiệu, Khách hàng |
| 13 | **Q3**: chính sách bot AI | Điều khoản |

**Luật sư cần xem:** Chính sách bảo mật (cơ sở xử lý, danh sách quyền, thời hạn phản hồi, chuyển dữ liệu ra nước ngoài, việc KimQ có thuộc diện được miễn hoặc hoãn nghĩa vụ dành cho doanh nghiệp nhỏ hay không), DPA, Điều khoản (giới hạn trách nhiệm, giải quyết tranh chấp), nhóm của `kq_lead_src` trong Chính sách cookie.

## 5. Trang trạng thái hệ thống (khi có khách trả phí)

1. Dùng dịch vụ có sẵn: Better Stack, Instatus, hoặc tự chạy Uptime Kuma. Theo dõi `kimq.tech` và địa chỉ từng sản phẩm đang vận hành.
2. Trỏ `status.kimq.tech` (CNAME trên Cloudflare) tới trang trạng thái.
3. Điền `STATUS_PAGE_URL = "https://status.kimq.tech"` trong `site-config.ts`; footer tự hiện link.
4. Bỏ ghi chú `[CẦN ĐIỀN]` ở link trạng thái trong `cam-ket-sla.md`.

## 6. Lưu ý

- Trang trust chỉ có tiếng Việt. Khi chọn English, trang hiện dòng "This page is available in Vietnamese only".
- Trang 404 cũ là template dev tiếng Anh. Bản mới có `noindex`, nhưng phải có bước 6 (server trả 404) thì Google mới hết báo soft 404.
- Không tự thêm chứng chỉ, con số hay cam kết chưa có. Nội dung trang trust sai còn hại hơn không có trang.
