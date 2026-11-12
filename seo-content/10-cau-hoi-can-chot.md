# 10 — 4 câu hỏi cần Owner/Product chốt (Q1–Q4)

Ngày: 12/11/2026 · Trạng thái: **Chờ trả lời**

Đây là những điểm **SEO/Content không tự quyết được**. Nếu tự chọn mà chọn sai, website sẽ nói sai sự thật, kể cả trong văn bản pháp lý. Mỗi câu đang chặn một số trang hoặc file.

## Tóm tắt

| Câu | Hỏi gì | Ai trả lời | Đang chặn việc gì | Đề xuất |
|---|---|---|---|---|
| Q1 | AI Gateway có lưu nội dung câu hỏi không? | CTO / Product | Chính sách dữ liệu AI, DPA, Bảo mật & dữ liệu, sửa trang AI Gateway | Phương án A, nếu đúng với bản đang chạy |
| Q2 | Tên thương hiệu dùng thế nào? | Owner | Title, schema, nội dung trang chủ, mạng xã hội | KimQ / Công ty Cổ phần KimQ / KimQ Studio |
| Q3 | Chính sách với bot AI ra sao? | Owner | Điều khoản sử dụng, `robots.txt`, cài đặt AI trong Search Console | Giữ nguyên (tạm thời) |
| Q4 | Bản tiếng Anh có URL riêng (hreflang) không? | Owner | Bản tiếng Anh, sitemap, cấu trúc URL | Tuỳ thị trường mục tiêu |

## Q1 — AI Gateway có lưu nội dung câu hỏi không?

**Tại sao phải hỏi:** website đang tự mâu thuẫn.
- Trang sản phẩm `/san-pham/ai-gateway` ghi "Nội dung câu hỏi không bị lưu" ở 3 chỗ: mục nhật ký kiểm toán, sơ đồ và FAQ.
- Trang hướng dẫn `/san-pham/ai-gateway/huong-dan` ghi "Mặc định lưu sau khi che dữ liệu cá nhân", có cả màn hình để xem nội dung đã che.

**Rủi ro:** hứa "không lưu" mà thực tế có lưu là rủi ro pháp lý theo Luật 91/2025/QH15 và NĐ 356/2025/NĐ-CP. Đồng thời làm mất lòng tin của khách hàng doanh nghiệp.

**Phương án** (chi tiết câu chữ ở `01-sua-claim-ai-gateway.md`):
- **A (khuyến nghị):** mặc định lưu nội dung đã che dữ liệu cá nhân, và tắt được. Chỉ sửa trang sản phẩm.
- **B:** không lưu nội dung. Sửa trang hướng dẫn và schema.

**Chờ câu trả lời này:**
- `site-patch/client/src/content/trust/chinh-sach-du-lieu-ai.md` (đang viết theo phương án A)
- `cam-ket-xu-ly-du-lieu.md` (DPA)
- `bao-mat-du-lieu.md`
- `schema/san-pham/ai-gateway.jsonld`
- `schema/huong-dan/ai-gateway.jsonld`

**Cách trả lời:** CTO kiểm tra trên bản đang chạy thật, không dựa vào tài liệu.

## Q2 — Tên thương hiệu dùng thế nào?

**Tại sao phải hỏi:** site đang dùng lẫn lộn 4–5 tên.

| Tên | Đang xuất hiện ở đâu |
|---|---|
| KimQ Studio | `<title>` của mọi URL, kể cả trang chủ; cũng là tên dịch vụ video AI |
| AI Studio | Trang `/san-pham/ai-studio` và `/san-pham` (cùng sản phẩm với "KimQ Studio") |
| KimQ | Hậu tố title của 39 trang |
| CÔNG TY CỔ PHẦN KIMQ | Footer, alt logo |
| KimQ AI Tech | Chỉ có trong file XLSX |

**Rủi ro:** Google và các công cụ AI khó hiểu KimQ là công ty hay là một sản phẩm, nên entity bị tách và tín hiệu thương hiệu yếu đi.

**Đề xuất** (chi tiết ở `02-brand-va-trang-chu.md`):
- **KimQ:** thương hiệu công khai, title, schema `name`, mạng xã hội.
- **Công ty Cổ phần KimQ:** pháp nhân, footer, hợp đồng, schema `legalName`.
- **KimQ Studio:** chỉ dùng cho sản phẩm video/ảnh AI. URL `/san-pham/ai-studio` giữ nguyên.
- Bỏ tên "KimQ AI Tech".

Riêng handle TikTok là `@kimqaitech`. Không bắt buộc đổi, nhưng tên hiển thị trên TikTok nên là "KimQ".

## Q3 — Chính sách với bot AI ra sao?

**Tại sao phải hỏi:** `robots.txt` do Cloudflare quản lý.
- **Đang chặn** các bot lấy nội dung để huấn luyện: GPTBot, ClaudeBot, Google-Extended, CCBot…
- **Đang cho phép** bot tìm kiếm và truy xuất: Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot.

| Phương án | Ý nghĩa |
|---|---|
| **A. Giữ nguyên** (khuyến nghị tạm thời) | Vẫn được tìm thấy và trích dẫn trên Google, ChatGPT search, Perplexity, Claude search; nội dung không bị dùng để huấn luyện |
| B. Bỏ chặn Google-Extended, GPTBot, ClaudeBot | Mô hình AI có thể "biết" KimQ nhiều hơn; đổi lại nội dung được dùng để huấn luyện |

**Chờ câu trả lời này:**
- Mục "Hành vi bị cấm" trong `dieu-khoan-su-dung.md`.
- Cài đặt Search generative AI control trong Search Console (phải đặt cùng chính sách với `robots.txt`).
- Chiến lược GEO trong `07-gsc-ga4-chinh-sach-ai-geo.md`.

## Q4 — Bản tiếng Anh có URL riêng (hreflang) không?

**Tại sao phải hỏi:** nút chuyển ngôn ngữ hiện chỉ đổi chữ trên trình duyệt (lưu trong `localStorage`, khoá `language`) và **giữ nguyên URL**. Google chỉ thấy bản tiếng Việt, nên bản tiếng Anh gần như không được lập chỉ mục. Đây là mục #10 (P1) trong `../KIMQ-AUDIT-TONG-HOP-2026-11-09.md`.

| Phương án | Cần làm |
|---|---|
| Có nhắm khách nước ngoài | Tạo URL riêng (ví dụ `/en/...`), thêm hreflang `vi`/`en`/`x-default`, sitemap có cả 2 bản, có bản dịch chuẩn cho title, meta, schema và các trang tin cậy |
| Chỉ thị trường Việt Nam | Giữ nút chuyển ngôn ngữ cho người dùng, không đầu tư SEO tiếng Anh; ghi rõ bản tiếng Việt là bản chính |

## Cách trả lời

Trả lời ngắn là đủ, ví dụ:

> Q1: A · Q2: đồng ý đề xuất · Q3: giữ nguyên · Q4: chưa làm

Sau khi có câu trả lời, SEO/Content sẽ cập nhật các trang và file liên quan. Các trang tin cậy liên quan sẽ được chuyển sang `ready` khi đã điền hết chỗ `[CẦN ĐIỀN]` và luật sư đã duyệt.

| Câu | Trả lời | Ngày | Người chốt |
|---|---|---|---|
| Q1 | | | |
| Q2 | | | |
| Q3 | | | |
| Q4 | | | |
