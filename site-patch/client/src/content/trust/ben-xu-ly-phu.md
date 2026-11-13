---
path: /ben-xu-ly-phu
title: Danh sách bên xử lý phụ (nhà cung cấp hạ tầng) | KimQ Tech
description: Danh sách nhà cung cấp hạ tầng, email và AI mà KimQ dùng để vận hành website và sản phẩm, kèm mục đích, loại dữ liệu và nơi xử lý.
h1: Bên xử lý phụ
schemaType: WebPage
status: draft
priority: P2
updated: "[CẦN ĐIỀN: dd/mm/yyyy]"
review: CTO
---

Đây là các nhà cung cấp mà KimQ dùng để vận hành website và sản phẩm. Họ có thể tiếp cận một phần dữ liệu. Mỗi nhà cung cấp chỉ xử lý dữ liệu cho mục đích ghi trong bảng, theo cam kết bảo mật với KimQ.

Khách hàng doanh nghiệp được báo trước khi danh sách thay đổi, như quy định trong [Cam kết xử lý dữ liệu](/cam-ket-xu-ly-du-lieu).

> Ghi chú cho người duyệt (xoá trước khi đăng): 4 dòng đầu được xác minh từ DNS và header máy chủ ngày 10/11/2026. Các dòng còn lại, CTO điền theo hệ thống thật. DNS kimq.tech có bản ghi xác minh tên miền của OpenAI và Replit; cần xác nhận có dùng cho sản phẩm không.

## Website kimq.tech

| Nhà cung cấp | Mục đích | Dữ liệu | Nơi xử lý |
|---|---|---|---|
| Cloudflare, Inc. | Quản lý tên miền, mạng phân phối nội dung, chống tấn công | Địa chỉ IP, yêu cầu truy cập | Toàn cầu |
| Railway Corporation | Máy chủ chạy website, nhận dữ liệu form | Dữ liệu form, nhật ký máy chủ | [CẦN ĐIỀN: vùng máy chủ] |
| Lark Technologies (Lark Suite) | Email @kimq.tech | Email trao đổi | [CẦN ĐIỀN: vùng dữ liệu tài khoản] |
| Google (Google Fonts) | Phông chữ cho website | Địa chỉ IP khi tải phông | Toàn cầu |

## Sản phẩm

| Nhà cung cấp | Mục đích | Sản phẩm dùng | Dữ liệu | Nơi xử lý |
|---|---|---|---|---|
| [CẦN ĐIỀN: máy chủ / đám mây chạy sản phẩm] | Lưu trữ, chạy ứng dụng | | | |
| [CẦN ĐIỀN: nhà cung cấp mô hình AI] | Xử lý câu hỏi cho trợ lý AI | Trợ lý, chatbot, AI Gateway (khi dùng tài khoản KimQ) | Câu hỏi và dữ liệu liên quan | |
| Zalo (Công ty Cổ phần VNG) | Kênh trợ lý trên Zalo, Zalo OA | Trợ lý Zalo, chatbot đa kênh | Tin nhắn qua Zalo | Việt Nam [CẦN ĐIỀN: xác nhận] |
| Meta Platforms | Kết nối Fanpage | Trợ lý Fanpage, chatbot đa kênh | Bài đăng, bình luận, tin nhắn Fanpage | Toàn cầu |
| [CẦN ĐIỀN: dịch vụ gửi email, sao lưu, giám sát lỗi…] | | | | |

Khi khách hàng dùng key riêng hoặc cài AI Gateway trên máy chủ của mình, nhà cung cấp AI do khách hàng chọn. Họ là bên của khách hàng, không phải bên xử lý phụ của KimQ.
