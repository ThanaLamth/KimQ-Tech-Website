---
path: /tuyen-bo-tiep-can
title: Tuyên bố tiếp cận (Accessibility) | KimQ Tech
description: Mức độ tiếp cận của kimq.tech: mục tiêu WCAG 2.1 AA, kết quả kiểm tra, hạn chế đã biết, kế hoạch sửa và cách báo lỗi.
h1: Tuyên bố tiếp cận
schemaType: WebPage
status: ready
priority: P2
updated: "13/11/2026"
review: Dev
---

Công ty Cổ phần KimQ muốn website kimq.tech dùng được cho mọi người: người dùng điện thoại, người chỉ dùng bàn phím, người dùng trình đọc màn hình, người cần chữ to hoặc độ tương phản cao.

## Tình trạng tuân thủ

| | |
|---|---|
| Tiêu chuẩn | Hướng dẫn tiếp cận nội dung web **WCAG 2.1 mức AA** (W3C) |
| Tình trạng | **Tuân thủ một phần**: phần lớn nội dung đạt, một số điểm chưa đạt được liệt kê bên dưới |
| Phạm vi | Các trang công khai của kimq.tech (trang chủ, sản phẩm, hướng dẫn, trang thông tin công ty) |
| Ngoài phạm vi | Ứng dụng sản phẩm sau khi đăng nhập; trang và tệp của bên thứ ba được liên kết tới |
| Ngày đánh giá gần nhất | 13/11/2026 |

## Cách chúng tôi đánh giá

- **Tự động:** Lighthouse (điểm tiếp cận 100/100, trang chủ, bản mobile, 09/11/2026) và axe-core trên 4 trang đại diện, bản mobile, 13/11/2026: trang chủ, [Sản phẩm](/san-pham), [Công nợ & dòng tiền](/san-pham/cong-no), [Hướng dẫn KimQ AI Gateway](/san-pham/ai-gateway/huong-dan).
- **Thủ công:** đi qua trang bằng phím Tab, kiểm tra thứ tự focus, viền focus, thuộc tính ngôn ngữ và liên kết bỏ qua điều hướng.

Kiểm tra tự động chỉ phát hiện được một phần lỗi. Chúng tôi chưa kiểm tra đầy đủ với trình đọc màn hình (NVDA, VoiceOver); việc này nằm trong kế hoạch bên dưới.

## Đã làm được

- Mỗi trang có một tiêu đề chính (H1); tiêu đề theo thứ bậc.
- Ảnh có nội dung đều có mô tả thay thế; ảnh trang trí được đánh dấu để trình đọc màn hình bỏ qua.
- Trang khai báo ngôn ngữ tiếng Việt (`lang="vi"`).
- Mọi phần tử bấm được có **viền focus nhìn thấy** khi dùng bàn phím.
- Form báo lỗi bằng chữ, gắn với ô nhập liệu.
- Nút chuyển ngôn ngữ và nút Menu có nhãn cho trình đọc màn hình.
- Hiệu ứng chuyển động được giảm khi thiết bị bật "Giảm chuyển động".
- Giao diện co giãn theo màn hình điện thoại, không phải cuộn ngang; phóng to tới 200% vẫn đọc được.
- axe-core không phát hiện lỗi nào trên trang chủ và trang Sản phẩm.

## Hạn chế đã biết và kế hoạch sửa

| Vấn đề | Tiêu chí WCAG | Ảnh hưởng | Kế hoạch |
|---|---|---|---|
| Một số chữ màu nhạt chưa đủ độ tương phản (1 chỗ ở trang Công nợ, 4 chỗ ở trang Hướng dẫn AI Gateway) | 1.4.3 Độ tương phản tối thiểu | Người nhìn kém khó đọc | Sửa màu chữ trong 30 ngày |
| Chưa có liên kết "Bỏ qua tới nội dung chính" | 2.4.1 Bỏ qua khối | Người dùng bàn phím phải Tab qua menu ở mỗi trang | Thêm trong 30 ngày |
| Trên trang chủ, khi menu đóng, phím Tab chỉ đi qua logo, nút Menu và email | 2.1.1 Bàn phím | Người dùng bàn phím phải mở Menu để tới các mục khác | Rà lại thứ tự focus trong 30 ngày |
| Bản tiếng Anh dùng chung đường dẫn với bản tiếng Việt, nội dung đổi sau khi bấm nút | 3.1.1 Ngôn ngữ của trang | Trình đọc màn hình có thể đọc sai giọng nếu ngôn ngữ trang không đổi theo | Cập nhật thuộc tính `lang` khi đổi ngôn ngữ; cân nhắc đường dẫn `/en/` riêng |
| Chưa kiểm tra với trình đọc màn hình | — | Có thể còn lỗi chưa phát hiện | Kiểm tra với NVDA và VoiceOver trong 60 ngày |

## Tương thích

Website được thiết kế để chạy trên phiên bản gần đây của Chrome, Safari, Edge và Firefox, trên máy tính và điện thoại (iOS, Android), cùng các trình đọc màn hình phổ biến. Website dùng HTML, CSS, JavaScript và WAI-ARIA; cần bật JavaScript để hiển thị đầy đủ.

## Báo lỗi tiếp cận

Nếu anh/chị gặp khó khi dùng website, xin cho chúng tôi biết:

- Email: [contact@kimq.tech](mailto:contact@kimq.tech), tiêu đề "Tiếp cận".
- Xin ghi: đường dẫn trang, việc đang làm, thiết bị, trình duyệt và phần mềm hỗ trợ đang dùng (nếu có).

Chúng tôi **phản hồi trong 5 ngày làm việc**. Nếu chưa sửa được ngay, chúng tôi sẽ gửi nội danh/chị cần qua email ở dạng dễ đọc (văn bản thuần hoặc PDF có thẻ).

## Cập nhật

Tuyên bố này được rà lại ít nhất 6 tháng một lần, và mỗi khi website thay đổi giao diện lớn. Cập nhật lần cuối: 13/11/2026.
