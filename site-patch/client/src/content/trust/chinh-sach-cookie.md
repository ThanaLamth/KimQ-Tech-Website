---
path: /chinh-sach-cookie
title: Chính sách cookie và lưu trữ trên trình duyệt | KimQ Tech
description: kimq.tech lưu gì trên trình duyệt của anh/chị, vì sao, trong bao lâu, nhóm nào luôn bật, nhóm nào chỉ bật khi anh/chị đồng ý, và cách thay đổi lựa chọn.
h1: Chính sách cookie
schemaType: WebPage
status: ready
priority: P2
effective: "13/11/2026"
updated: "13/11/2026"
review: Luật sư + Dev (bảng phải khớp code thật)
---

Cookie và các công nghệ tương tự (localStorage, sessionStorage) là những tệp nhỏ mà website lưu trên trình duyệt của anh/chị. Trang này nói rõ kimq.tech lưu gì, vì sao, trong bao lâu và anh/chị có thể làm gì.

Chính sách này do Công ty Cổ phần KimQ (MST 0319416034) ban hành và là một phần của [Chính sách bảo vệ dữ liệu cá nhân](/chinh-sach-bao-mat).

## Tóm tắt

| Câu hỏi | Trả lời ngắn |
|---|---|
| Website có đặt cookie không? | **Không.** Kiểm tra ngày 13/11/2026: kimq.tech không đặt cookie nào. |
| Có công cụ phân tích, quảng cáo, tiếp thị lại không? | **Không.** Không có Google Analytics, Meta Pixel, TikTok Pixel hay công cụ quảng cáo. |
| Website lưu gì? | Chỉ một vài giá trị kỹ thuật trong bộ nhớ trình duyệt để website chạy đúng (bảng ở mục 2). |
| Có cần anh/chị đồng ý không? | Không, vì các giá trị này thiết yếu để cung cấp đúng dịch vụ anh/chị yêu cầu. Khi bật bất kỳ công cụ phân tích nào, KimQ sẽ hỏi ý anh/chị trước. |

## 1. Các nhóm lưu trữ

| Nhóm | Mục đích | Cần anh/chị đồng ý? | Trạng thái trên kimq.tech |
|---|---|---|---|
| **Thiết yếu** | Để website chạy đúng: nhớ ngôn ngữ, gắn nguồn truy cập vào form anh/chị chủ động gửi | Không | Đang dùng |
| **Phân tích** | Đếm lượt truy cập, đo trang nào hữu ích | **Có**, mặc định tắt | Chưa dùng |
| **Quảng cáo / tiếp thị lại** | Hiển thị quảng cáo theo hành vi | **Có**, mặc định tắt | Không dùng và không có kế hoạch dùng |

## 2. Danh sách chi tiết những gì kimq.tech lưu

| Tên | Loại | Do ai đặt | Mục đích | Thời hạn | Nhóm |
|---|---|---|---|---|---|
| `language` | localStorage | kimq.tech | Nhớ ngôn ngữ anh/chị chọn (Tiếng Việt / English) | Tới khi anh/chị xoá dữ liệu trình duyệt | Thiết yếu |
| `kq_lead_src` | sessionStorage | kimq.tech | Nhớ nguồn truy cập (tham số `utm_*`, tên miền giới thiệu) để gắn vào form "Quan tâm" **chỉ khi anh/chị gửi form** | Tự xoá khi đóng tab | Thiết yếu (chức năng form) |

`kq_lead_src` không chứa họ tên, email hay số điện thoại. Giá trị này không được gửi đi đâu nếu anh/chị không gửi form.

## 3. Dịch vụ bên thứ ba khi tải trang

| Dịch vụ | Dùng để | Dữ liệu trình duyệt gửi đi | Có đặt cookie? |
|---|---|---|---|
| Google Fonts (Google LLC) | Tải phông chữ | Địa chỉ IP, thông tin trình duyệt (như mọi yêu cầu tải tệp) | Không |
| Cloudflare | Phân phối nội dung, chống tấn công | Địa chỉ IP, thông tin yêu cầu | Không đặt cookie theo dõi. Cloudflare có thể đặt cookie kỹ thuật chống bot (ví dụ `__cf_bm`, 30 phút) khi phát hiện lưu lượng bất thường |

Chi tiết các bên này: [Bên xử lý dữ liệu phụ](/ben-xu-ly-phu).

## 4. Nếu sau này KimQ bật công cụ phân tích

KimQ cam kết:

1. **Hỏi trước.** Một bảng lựa chọn hiện ra với hai nút ngang nhau "Đồng ý" và "Từ chối". Không có ô tick sẵn. Im lặng hay tiếp tục lướt trang không được coi là đồng ý.
2. **Mặc định tắt.** Trước khi anh/chị chọn, công cụ phân tích không đặt cookie.
3. **Không quảng cáo.** Không bật quảng cáo, tiếp thị lại hay cá nhân hoá quảng cáo.
4. **Không gửi dữ liệu form** (họ tên, email, số điện thoại) sang công cụ phân tích.
5. **Cập nhật trang này trước** khi bật: thêm tên từng cookie, nhà cung cấp, thời hạn, và ghi ngày cập nhật.
6. **Ghi nhớ lựa chọn** bằng một giá trị `kq_consent` trong 12 tháng, rồi hỏi lại.

## 5. Thay đổi lựa chọn hoặc xoá dữ liệu

- Xoá dữ liệu của trang kimq.tech trong cài đặt trình duyệt (Chrome: Cài đặt → Quyền riêng tư và bảo mật → Dữ liệu trang web; Safari: Cài đặt → Safari → Nâng cao → Dữ liệu trang web).
- Dùng chế độ ẩn danh: dữ liệu bị xoá khi đóng cửa sổ.
- Khi có bảng lựa chọn cookie, nút **"Cài đặt cookie"** ở chân trang sẽ mở lại bảng để anh/chị đổi ý bất cứ lúc nào. Rút lại đồng ý dễ như khi đồng ý.

Chặn bộ nhớ trình duyệt hoàn toàn có thể làm website không nhớ ngôn ngữ anh/chị chọn.

## 6. Thay đổi chính sách

Khi thay đổi, KimQ cập nhật ngày ở đầu trang. Thay đổi làm tăng việc thu thập dữ liệu sẽ được thông báo trên website trước khi áp dụng.

## 7. Liên hệ

Câu hỏi về cookie và dữ liệu: [contact@kimq.tech](mailto:contact@kimq.tech), tiêu đề "Dữ liệu cá nhân". Chúng tôi phản hồi lần đầu trong 2 ngày làm việc.
