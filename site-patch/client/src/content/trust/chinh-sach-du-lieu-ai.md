---
path: /chinh-sach-du-lieu-ai
title: Chính sách dữ liệu AI – AI dùng dữ liệu thế nào | KimQ Tech
description: Trợ lý AI và AI Gateway của KimQ dùng dữ liệu thế nào: AI chỉ đề xuất, chạy đúng quyền người dùng, che dữ liệu cá nhân, nội dung lưu gì, nhà cung cấp model nào.
h1: Chính sách dữ liệu AI
schemaType: WebPage
status: ready
priority: P1
updated: "13/11/2026"
review: CTO
---

Nhiều sản phẩm KimQ có trợ lý AI: trợ lý trong ứng dụng, trợ lý trên Zalo, chatbot đa kênh, Trợ lý Fanpage, AI Studio. KimQ AI Gateway là cổng để doanh nghiệp quản lý việc dùng AI. Trang này giải thích AI được làm gì, dữ liệu đi đâu, lưu bao lâu và doanh nghiệp kiểm soát được gì.

Chúng tôi viết trang này theo yêu cầu minh bạch về xử lý dữ liệu tự động tại Điều 30 Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15 và Điều 10 Nghị định 356/2025/NĐ-CP: người dùng cần được biết dữ liệu được xử lý tự động thế nào, ảnh hưởng ra sao và có lựa chọn không tham gia.

## Tóm tắt

| Câu hỏi | Trả lời |
|---|---|
| AI có tự quyết định thay người không? | Không. AI đề xuất; người có quyền duyệt |
| Dữ liệu của doanh nghiệp có dùng để huấn luyện mô hình không? | **Không.** KimQ không dùng dữ liệu khách hàng để huấn luyện hay tinh chỉnh mô hình AI |
| Có bắt buộc dùng AI không? | Không. Mọi việc đều làm tay được |
| AI Gateway có lưu nội dung câu hỏi không? | Mặc định lưu **sau khi che dữ liệu cá nhân**. Doanh nghiệp tắt được hoàn toàn hoặc bỏ ghi từng lượt |
| Doanh nghiệp tự chọn mô hình được không? | Được, qua AI Gateway: chọn model, dùng key riêng, hoặc model chạy trên máy chủ của doanh nghiệp |

## 1. AI chỉ đề xuất, người quyết định

- Trợ lý không ghi thẳng vào dữ liệu nghiệp vụ. Mọi lệnh ghi, kể cả gửi từ Zalo, chỉ tạo **yêu cầu chờ duyệt**. Người có quyền xem trước, sửa nếu cần, rồi duyệt.
- Trợ lý chạy **đúng quyền của người đang nhờ**. Quyền được kiểm ở máy chủ, nên trợ lý không đọc được dữ liệu mà người đó không được xem.
- Chỗ mơ hồ, hệ thống dừng lại hỏi người, không tự đoán.
- Mọi việc đều làm tay được. Doanh nghiệp có thể tắt trợ lý mà không mất chức năng nghiệp vụ.

## 2. Dữ liệu gửi tới mô hình AI

Khi anh/chị hỏi trợ lý, chỉ phần dữ liệu cần để trả lời được gửi tới mô hình AI: câu hỏi, và dữ liệu liên quan nằm trong quyền của anh/chị.

| | |
|---|---|
| Mô hình nào xử lý | Mô hình ngôn ngữ lớn của các nhà cung cấp AI quốc tế (ví dụ OpenAI), qua kết nối API dành cho doanh nghiệp; hoặc mô hình nội bộ trên máy chủ của doanh nghiệp. Model chạy thật của từng lượt hiện trong Nhật ký AI Gateway |
| Nơi xử lý | Máy chủ của nhà cung cấp mô hình, thường đặt ngoài Việt Nam. Danh sách tại [Bên xử lý phụ](/ben-xu-ly-phu) |
| Nhà cung cấp có dùng dữ liệu để huấn luyện không | KimQ chỉ dùng kết nối API mà theo điều khoản của nhà cung cấp, dữ liệu gửi qua API **không** được dùng để huấn luyện mô hình theo mặc định. Nhà cung cấp có thể giữ dữ liệu trong thời gian ngắn để chống lạm dụng, theo điều khoản của họ |
| KimQ có dùng dữ liệu để huấn luyện không | **Không** |
| Doanh nghiệp tự chọn được không | Có, với AI Gateway: chọn model theo chính sách, dùng key riêng của doanh nghiệp, hoặc chuyển lượt có dữ liệu nhạy cảm sang model nội bộ |

Khi doanh nghiệp dùng key riêng hoặc cài AI Gateway trên máy chủ của mình, nhà cung cấp AI do doanh nghiệp chọn và ký hợp đồng trực tiếp.

## 3. KimQ AI Gateway lưu gì

- **Luôn lưu nhật ký sử dụng:** ai gọi, ứng dụng nào, model nào, lúc nào, bao nhiêu token, chi phí, thành công hay bị chặn.
- **Nội dung câu hỏi:** mặc định được lưu **sau khi che dữ liệu cá nhân**. Email, số điện thoại Việt Nam, CCCD, mã số thuế, số thẻ được thay bằng `[EMAIL]`, `[PHONE]`… trước khi lưu.
- Doanh nghiệp có thể **tắt lưu nội dung hoàn toàn**, hoặc bỏ ghi một lượt bằng header riêng, dùng cho nội dung đặc biệt nhạy cảm.
- Lượt có dữ liệu cá nhân có thể bị **chặn**, được **che trước khi gửi** đi, hoặc **chuyển sang model nội bộ** trên máy chủ của doanh nghiệp, theo quy tắc doanh nghiệp đặt.
- **Thời gian lưu:** nhật ký được giữ trong suốt thời hạn hợp đồng để doanh nghiệp đối chiếu chi phí và kiểm toán; doanh nghiệp xoá được theo yêu cầu. Khi hợp đồng kết thúc, nhật ký được xoá theo [Cam kết xử lý dữ liệu](/cam-ket-xu-ly-du-lieu) mục 7.
- Với bản cài trên máy chủ của doanh nghiệp, toàn bộ nhật ký nằm trong hạ tầng của doanh nghiệp; KimQ không truy cập.

Hướng dẫn thao tác: [AI Gateway – Hướng dẫn](/san-pham/ai-gateway/huong-dan).

## 4. Trợ lý trong sản phẩm lưu gì

- **Yêu cầu và đề xuất của trợ lý** được ghi vào nhật ký của sản phẩm cùng các thao tác khác: ai nhờ, trợ lý đề xuất gì, ai duyệt, lúc nào. Nhật ký này phục vụ kiểm tra và truy vết.
- **Chatbot đa kênh, Trợ lý Zalo, Trợ lý Fanpage:** tin nhắn đi qua kênh của doanh nghiệp (Zalo, Fanpage) và được lưu trong hộp thư hội thoại của sản phẩm để nhân viên tiếp quản; mọi lượt trả lời, chuyển người, tiếp quản đều có nhật ký.
- Dữ liệu này là dữ liệu của doanh nghiệp, chỉ người được doanh nghiệp phân quyền xem được, và được xoá theo hợp đồng.

## 5. Nội dung do AI tạo

- **Trợ lý Fanpage:** không bài nào lên trang khi chưa duyệt. Chỉ người được giao quyền duyệt mới đưa bài vào lịch đăng. Chỗ AI không chắc được đánh dấu để người duyệt kiểm.
- **AI Studio:** doanh nghiệp duyệt kịch bản và bản dựng trước khi nhận video. Video do AI tạo nên được ghi rõ là nội dung do AI hỗ trợ khi đăng tải, theo quy định của nền tảng và pháp luật.
- **Chatbot đa kênh:** mỗi loại câu chỉ được bật tự trả lời sau khi đã soạn đúng ở chế độ duyệt nháp. Không có căn cứ trong tài liệu và hệ thống, hoặc câu hỏi chạm tới tiền, hoàn tiền, khiếu nại, thì trợ lý chuyển cho người, kèm tóm tắt.
- Doanh nghiệp chịu trách nhiệm cuối cùng về nội dung đăng trên kênh của mình.

## 6. Giới hạn của AI

- AI có thể trả lời sai, thiếu hoặc lỗi thời. Với số liệu kế toán, thuế, lương, bảo hiểm hay y tế, người có chuyên môn phải kiểm tra trước khi dùng.
- AI không thay thế tư vấn pháp lý, kế toán hay chẩn đoán y tế.
- Thấy câu trả lời sai hoặc không phù hợp, xin báo qua [contact@kimq.tech](mailto:contact@kimq.tech) để chúng tôi điều chỉnh.

## 7. Quyền lựa chọn của doanh nghiệp và người dùng

- Tắt trợ lý AI cho cả doanh nghiệp hoặc cho từng nhóm người dùng.
- Tắt lưu nội dung, đặt quy tắc chặn hoặc che dữ liệu trên AI Gateway.
- Người dùng cuối (ví dụ khách nhắn vào Fanpage) có thể yêu cầu nói chuyện với người; doanh nghiệp là đầu mối nhận yêu cầu về dữ liệu của họ, KimQ hỗ trợ theo [Cam kết xử lý dữ liệu](/cam-ket-xu-ly-du-lieu).

## Liên quan

[Bảo mật & dữ liệu](/bao-mat-du-lieu) · [Cam kết xử lý dữ liệu](/cam-ket-xu-ly-du-lieu) · [Bên xử lý phụ](/ben-xu-ly-phu)
