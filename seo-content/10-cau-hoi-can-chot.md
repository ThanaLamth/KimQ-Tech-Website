# 10 — 4 câu hỏi cần Owner/Product chốt (Q1–Q4)

Ngày: 12/11/2026 · Trạng thái: **Chờ trả lời**

Đây là những điểm **SEO/Content không tự quyết được**. Nếu tự chọn mà chọn sai, website sẽ nói sai sự thật, kể cả trong văn bản pháp lý. Mỗi câu đang chặn một số trang hoặc file.

## Tóm tắt

| Câu | Hỏi gì | Ai trả lời | Đang chặn việc gì | Đề xuất |
|---|---|---|---|---|
| Q1 | AI Gateway có lưu nội dung câu hỏi không? | CTO / Product | Chính sách dữ liệu AI, DPA, Bảo mật & dữ liệu, sửa trang AI Gateway | Phương án A, nếu đúng với bản đang chạy |
| Q2 | Tên thương hiệu dùng thế nào? | Owner | ✅ **Đã chốt 13/11: KimQ Tech** | KimQ Tech / Công ty Cổ phần KimQ / AI Studio |
| Q3 | Chính sách với bot AI ra sao? | Owner | Điều khoản sử dụng, `robots.txt`, cài đặt AI trong Search Console | Giữ nguyên (tạm thời) |
| Q4 | Bản tiếng Anh có URL riêng (hreflang) không? | Owner | Bản tiếng Anh, sitemap, cấu trúc URL | Tuỳ thị trường mục tiêu |

## Q1 — AI Gateway có lưu nội dung câu hỏi không?

**Tại sao phải hỏi:** website đang tự mâu thuẫn.
- Trang sản phẩm `/san-pham/ai-gateway` ghi "Nội dung câu hỏi không bị lưu" ở 3 chỗ: mục nhật ký kiểm toán, sơ đồ và FAQ.
- Trang hướng dẫn `/san-pham/ai-gateway/huong-dan` ghi "Mặc định lưu sau khi che dữ liệu cá nhân", có cả màn hình để xem nội dung đã che.

**Rủi ro:** hứa "không lưu" mà thực tế có lưu là rủi ro pháp lý theo Luật 91/2025/QH15 và NĐ 356/2025/NĐ-CP. Đồng thời làm mất lòng tin của khách hàng doanh nghiệp.

**Phương án** (chi tiết câu chữ ở [`01-sua-claim-ai-gateway.md`](01-sua-claim-ai-gateway.md)):
- **A (khuyến nghị):** mặc định lưu nội dung đã che dữ liệu cá nhân, và tắt được. Chỉ sửa trang sản phẩm.
- **B:** không lưu nội dung. Sửa trang hướng dẫn và schema.

**Chờ câu trả lời này:**
- [`site-patch/client/src/content/trust/chinh-sach-du-lieu-ai.md`](../site-patch/client/src/content/trust/chinh-sach-du-lieu-ai.md) (đang viết theo phương án A)
- [`cam-ket-xu-ly-du-lieu.md`](../site-patch/client/src/content/trust/cam-ket-xu-ly-du-lieu.md) (DPA)
- [`bao-mat-du-lieu.md`](../site-patch/client/src/content/trust/bao-mat-du-lieu.md)
- [`schema/san-pham/ai-gateway.jsonld`](schema/san-pham/ai-gateway.jsonld)
- [`schema/huong-dan/ai-gateway.jsonld`](schema/huong-dan/ai-gateway.jsonld)

**Cách trả lời:** CTO kiểm tra trên bản đang chạy thật, không dựa vào tài liệu.

## Q2 — Tên thương hiệu dùng thế nào? ✅ ĐÃ CHỐT

**Kết quả (13/11/2026):** thương hiệu công khai là **KimQ Tech**. Không dùng "KimQ Studio". Pháp nhân giữ **Công ty Cổ phần KimQ**. Sản phẩm video giữ tên **AI Studio**. Đã cập nhật: [`02`](02-brand-va-trang-chu.md), [`04`](04-metadata-40-url.md), [`meta-40-url.json`](meta-40-url.json), [`schema/`](schema/), [`site-patch/`](../site-patch/), XLSX.

Phần dưới là lý do ban đầu, giữ lại để tham khảo.

**Tại sao phải hỏi:** site đang dùng lẫn lộn 4–5 tên.

| Tên | Đang xuất hiện ở đâu |
|---|---|
| KimQ Studio | `<title>` của mọi URL, kể cả trang chủ; cũng là tên dịch vụ video AI |
| AI Studio | Trang `/san-pham/ai-studio` và `/san-pham` (cùng sản phẩm với "KimQ Studio") |
| KimQ | Hậu tố title của 39 trang |
| CÔNG TY CỔ PHẦN KIMQ | Footer, alt logo |
| KimQ AI Tech | Chỉ có trong file XLSX |

**Rủi ro:** Google và các công cụ AI khó hiểu KimQ là công ty hay là một sản phẩm, nên entity bị tách và tín hiệu thương hiệu yếu đi.

**Quy ước đã chốt** (chi tiết ở [`02-brand-va-trang-chu.md`](02-brand-va-trang-chu.md)):
- **KimQ Tech:** thương hiệu công khai, title (` | KimQ Tech`), schema `name`, tên hiển thị mạng xã hội. Trong đoạn văn, lần sau được viết gọn "KimQ".
- **Công ty Cổ phần KimQ:** pháp nhân, footer, hợp đồng, schema `legalName`.
- **AI Studio:** sản phẩm video/ảnh AI. Bỏ "KimQ Studio".
- "KimQ AI Tech" → "KimQ Tech".

Handle TikTok `@kimqaitech` không bắt buộc đổi. Tên hiển thị trên Facebook, Instagram, Threads, TikTok nên đổi từ "KimQ" thành **"KimQ Tech"**.

## Q3 — Chính sách với bot AI ra sao?

**Tại sao phải hỏi:** `robots.txt` do Cloudflare quản lý.
- **Đang chặn** các bot lấy nội dung để huấn luyện: GPTBot, ClaudeBot, Google-Extended, CCBot…
- **Đang cho phép** bot tìm kiếm và truy xuất: Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot.

| Phương án | Ý nghĩa |
|---|---|
| **A. Giữ nguyên** (khuyến nghị tạm thời) | Vẫn được tìm thấy và trích dẫn trên Google, ChatGPT search, Perplexity, Claude search; nội dung không bị dùng để huấn luyện |
| B. Bỏ chặn Google-Extended, GPTBot, ClaudeBot | Mô hình AI có thể "biết" KimQ nhiều hơn; đổi lại nội dung được dùng để huấn luyện |

**Chờ câu trả lời này:**
- Mục "Hành vi bị cấm" trong [`dieu-khoan-su-dung.md`](../site-patch/client/src/content/trust/dieu-khoan-su-dung.md).
- Cài đặt Search generative AI control trong Search Console (phải đặt cùng chính sách với `robots.txt`).
- Chiến lược GEO trong [`07-gsc-ga4-chinh-sach-ai-geo.md`](07-gsc-ga4-chinh-sach-ai-geo.md).

## Q4 — Bản tiếng Anh có URL riêng (hreflang) không?

**Tại sao phải hỏi:** nút chuyển ngôn ngữ hiện chỉ đổi chữ trên trình duyệt (lưu trong `localStorage`, khoá `language`) và **giữ nguyên URL**. Google chỉ thấy bản tiếng Việt, nên bản tiếng Anh gần như không được lập chỉ mục. Đây là mục #10 (P1) trong [`../KIMQ-AUDIT-TONG-HOP-2026-11-09.md`](../KIMQ-AUDIT-TONG-HOP-2026-11-09.md).

| Phương án | Cần làm |
|---|---|
| Có nhắm khách nước ngoài | Tạo URL riêng (ví dụ `/en/...`), thêm hreflang `vi`/`en`/`x-default`, sitemap có cả 2 bản, có bản dịch chuẩn cho title, meta, schema và các trang tin cậy |
| Chỉ thị trường Việt Nam | Giữ nút chuyển ngôn ngữ cho người dùng, không đầu tư SEO tiếng Anh; ghi rõ bản tiếng Việt là bản chính |

## Cách trả lời

Trả lời ngắn là đủ, ví dụ:

> Q1: A · Q2: đồng ý đề xuất · Q3: giữ nguyên · Q4: chưa làm

Cập nhật 13/11/2026: các trang tin cậy đã điền đủ và để `ready` với **đáp án đề xuất**: Q1 = phương án A (lưu nội dung sau khi che dữ liệu nhạy cảm), Q3 = cho phép công cụ tìm kiếm và trợ lý AI đọc theo `robots.txt`. Q2 (tên thương hiệu "KimQ Tech") đã áp dụng. Q4 chưa làm. Owner/CTO đổi ý thì báo SEO/Content sửa lại; danh sách giá trị đề xuất ở [`../site-patch/README.md`](../site-patch/README.md) §4.

| Câu | Trả lời | Ngày | Người chốt |
|---|---|---|---|
| Q1 | | | |
| Q2 | KimQ Tech (không dùng KimQ Studio) | 13/11/2026 | Owner |
| Q3 | | | |
| Q4 | | | |
