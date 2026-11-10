---
path: /chinh-sach-du-lieu-ai
title: Chính sách dữ liệu AI – AI dùng dữ liệu thế nào | KimQ
description: Trợ lý AI và AI Gateway của KimQ dùng dữ liệu thế nào: AI chỉ đề xuất, chạy đúng quyền người dùng, che dữ liệu cá nhân, nội dung lưu gì, nhà cung cấp model nào.
h1: Chính sách dữ liệu AI
schemaType: WebPage
status: draft
priority: P1
updated: "[CẦN ĐIỀN: dd/mm/yyyy]"
review: Owner + CTO (cần chốt Q1 trước)
---

Nhiều sản phẩm KimQ có trợ lý AI: trợ lý trong ứng dụng, trợ lý trên Zalo, chatbot đa kênh, Trợ lý Fanpage, KimQ Studio. KimQ AI Gateway là cổng để doanh nghiệp quản lý việc dùng AI. Trang này giải thích AI được làm gì và dữ liệu đi đâu.

## 1. AI chỉ đề xuất, người quyết định

- Trợ lý không ghi thẳng vào dữ liệu nghiệp vụ. Mọi lệnh ghi, kể cả gửi từ Zalo, chỉ tạo **yêu cầu chờ duyệt**. Người có quyền xem trước, sửa nếu cần, rồi duyệt.
- Trợ lý chạy **đúng quyền của người đang nhờ**. Quyền được kiểm ở máy chủ, nên trợ lý không đọc được dữ liệu mà người đó không được xem.
- Mọi việc đều làm tay được. Doanh nghiệp không bắt buộc phải dùng AI.

## 2. Dữ liệu gửi tới mô hình AI

Khi anh/chị hỏi trợ lý, phần dữ liệu cần để trả lời (câu hỏi, dữ liệu liên quan trong quyền của anh/chị) được gửi tới mô hình AI để xử lý.

| | |
|---|---|
| Nhà cung cấp mô hình đang dùng | [CẦN ĐIỀN: tên nhà cung cấp, ví dụ OpenAI, Google, Anthropic, model nội bộ…; vùng xử lý] |
| Nhà cung cấp có dùng dữ liệu để huấn luyện không | [CẦN ĐIỀN: theo điều khoản API của từng nhà cung cấp; CTO kiểm tra cấu hình tài khoản] |
| KimQ có dùng dữ liệu khách hàng để huấn luyện mô hình không | [CẦN ĐIỀN: đề xuất "Không". CTO xác nhận] |
| Doanh nghiệp tự chọn model được không | Có, với AI Gateway: chọn model theo chính sách, dùng key riêng, hoặc model chạy trên máy chủ riêng của doanh nghiệp |

## 3. KimQ AI Gateway lưu gì

> [CẦN CHỐT Q1 TRƯỚC KHI ĐĂNG] Hiện trang sản phẩm và trang hướng dẫn AI Gateway đang nói ngược nhau. Đoạn dưới viết theo **phương án A** (đã đề xuất ở `seo-content/01`). Nếu chọn phương án B (không lưu nội dung), sửa lại cả đoạn này.

- **Luôn lưu nhật ký sử dụng:** ai gọi, ứng dụng nào, model nào, lúc nào, bao nhiêu token, chi phí, thành công hay bị chặn.
- **Nội dung câu hỏi:** mặc định được lưu **sau khi che dữ liệu cá nhân**. Email, số điện thoại Việt Nam, CCCD, mã số thuế, số thẻ được thay bằng `[EMAIL]`, `[PHONE]`… trước khi lưu.
- Doanh nghiệp có thể **tắt lưu nội dung hoàn toàn**, hoặc bỏ ghi một lượt bằng header riêng.
- Lượt có dữ liệu cá nhân có thể bị **chặn**, được **che trước khi gửi** đi, hoặc **chuyển sang model nội bộ** trên máy chủ của doanh nghiệp.
- Thời gian lưu nhật ký: [CẦN ĐIỀN].

## 4. Trợ lý trong sản phẩm lưu gì

[CẦN ĐIỀN: CTO trả lời cho từng nhóm sản phẩm: lịch sử hội thoại có lưu không, lưu bao lâu, ai xem được, xoá được không.]

## 5. Nội dung do AI tạo

- **Trợ lý Fanpage:** không bài nào lên trang khi chưa duyệt. Chỉ người được giao quyền duyệt mới đưa bài vào lịch đăng. Chỗ AI không chắc được đánh dấu để người duyệt kiểm.
- **KimQ Studio:** doanh nghiệp duyệt kịch bản và bản dựng trước khi nhận video.
- **Chatbot đa kênh:** mỗi loại câu chỉ được bật tự trả lời sau khi đã soạn đúng ở chế độ duyệt nháp. Không có căn cứ trong tài liệu và hệ thống, hoặc câu hỏi chạm tới tiền, hoàn tiền, khiếu nại, thì trợ lý chuyển cho người, kèm tóm tắt.
- Doanh nghiệp chịu trách nhiệm cuối cùng về nội dung đăng trên kênh của mình.
- AI có thể sai. Với số liệu kế toán, thuế hay y tế, người có chuyên môn phải kiểm tra trước khi dùng.

## 6. Liên quan

[Bảo mật & dữ liệu](/bao-mat-du-lieu) · [Cam kết xử lý dữ liệu](/cam-ket-xu-ly-du-lieu) · [Bên xử lý phụ](/ben-xu-ly-phu)
