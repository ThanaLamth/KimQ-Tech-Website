---
path: /bao-mat-du-lieu
title: Bảo mật & dữ liệu trong sản phẩm KimQ Tech
description: Cách KimQ bảo vệ dữ liệu doanh nghiệp: kiểm quyền ở máy chủ, nhật ký không sửa xoá được, AI chỉ đề xuất, che dữ liệu cá nhân, mã hoá key, cài tại chỗ.
h1: Bảo mật & dữ liệu
schemaType: WebPage
status: draft
priority: P1
updated: "[CẦN ĐIỀN: dd/mm/yyyy]"
review: CTO xác nhận từng dòng
---

Trang này tóm tắt cách các sản phẩm KimQ bảo vệ dữ liệu của doanh nghiệp. Mỗi điểm dưới đây đều đang được mô tả trên trang sản phẩm tương ứng. Điểm nào chỉ áp dụng cho một số sản phẩm thì ghi rõ tên sản phẩm.

> Ghi chú cho người duyệt (xoá trước khi đăng): CTO đánh dấu từng dòng là "đúng cho mọi sản phẩm", "chỉ sản phẩm X", hoặc "bỏ". Không thêm biện pháp hay chứng chỉ chưa có.

## Phân quyền

- **Quyền được kiểm ở máy chủ cho mọi đường vào:** ứng dụng, trợ lý trong app, trợ lý trên Zalo. Hỏi trợ lý về dữ liệu ngoài quyền của mình, ví dụ lương người khác, sẽ bị từ chối. ([Chấm công & lương](/san-pham/cham-cong-luong), [Công nợ](/san-pham/cong-no))
- Phân quyền theo vai trò. Ví dụ, Kiểm soát tài chính chia sáu vai, mỗi vai được xem và thao tác khác nhau. ([Kiểm soát tài chính](/san-pham/kiem-soat-tai-chinh))

## AI chỉ đề xuất, người duyệt mới ghi

- Trợ lý AI chạy đúng quyền của người đang nhờ.
- Lệnh ghi, kể cả gửi từ Zalo, chỉ tạo **yêu cầu chờ duyệt**. Người có quyền sửa và duyệt xong thì dữ liệu mới thay đổi. ([Công nợ](/san-pham/cong-no))
- Chỗ mơ hồ, hệ thống dừng lại chờ người quyết, không tự đoán. ([Tự động hoá](/san-pham/tu-dong-hoa))

Chi tiết: [Chính sách dữ liệu AI](/chinh-sach-du-lieu-ai).

## Nhật ký và dấu vết

- Mọi thao tác ghi đều có nhật ký: ai làm, làm gì, lúc nào.
- Sổ công nợ **chỉ thêm, không xoá**. Huỷ là bút toán đảo, nên luôn còn dấu vết. ([Công nợ](/san-pham/cong-no))
- LIMS: cơ sở dữ liệu từ chối lệnh sửa hay xoá nhật ký. Sửa kết quả bằng cách thêm bản đính chính kèm lý do. ([LIMS](/san-pham/lims))
- AI Gateway: nhật ký quản trị chống sửa, ghi tên người thao tác và giờ. ([AI Gateway](/san-pham/ai-gateway/huong-dan))

## Giảm dữ liệu cá nhân phải giữ

- Tính lương phòng khám chỉ giữ mã lượt khám, **không giữ tên hay chẩn đoán** của bệnh nhân. ([Tính lương phòng khám](/san-pham/tinh-luong-phong-kham))
- Dữ liệu dùng để phân tích trong Kiểm soát tài chính được khử định danh. ([Kiểm soát tài chính](/san-pham/kiem-soat-tai-chinh))
- AI Gateway che email, số điện thoại Việt Nam, CCCD, mã số thuế và số thẻ thành `[EMAIL]`, `[PHONE]`… Lượt có dữ liệu cá nhân có thể bị chặn, được che trước khi gửi, hoặc chuyển sang model chạy trên máy chủ riêng của doanh nghiệp. ([AI Gateway](/san-pham/ai-gateway/huong-dan))

## Khoá bí mật và mã hoá

- AI Gateway lưu key nhà cung cấp AI ở dạng **mã hoá**, chỉ hiện 4 ký tự cuối. Key thật chỉ nằm trong gateway; mỗi phòng ban dùng key ảo, thu hồi được ngay.
- Dữ liệu truyền qua mạng được mã hoá (HTTPS). Tên miền riêng của doanh nghiệp được cấp chứng chỉ tự động.
- Mã hoá dữ liệu khi lưu trữ (ổ đĩa, cơ sở dữ liệu): [CẦN ĐIỀN: CTO xác nhận có hay không, áp dụng cho sản phẩm nào].
- Giới hạn IP cho từng key và cho trang quản trị AI Gateway.

## Nơi đặt dữ liệu

| Cách triển khai | Dữ liệu nằm ở đâu |
|---|---|
| Cài trên máy chủ của doanh nghiệp (một số sản phẩm, ví dụ AI Gateway) | Toàn bộ dữ liệu, nhật ký và key nằm trong hạ tầng của doanh nghiệp |
| Dịch vụ do KimQ vận hành | [CẦN ĐIỀN: nhà cung cấp và vị trí máy chủ thật, ví dụ "máy chủ tại Việt Nam do X cung cấp"]. Với AI Gateway, key, nhật ký và cấu hình được tách riêng cho từng doanh nghiệp. [CẦN ĐIỀN: CTO xác nhận các sản phẩm khác có tách riêng như vậy không] |

Danh sách nhà cung cấp hạ tầng: [Bên xử lý phụ](/ben-xu-ly-phu).

## Sao lưu và khôi phục

[CẦN ĐIỀN: tần suất sao lưu, nơi lưu bản sao, thời gian giữ bản sao, lần thử khôi phục gần nhất. Chưa có quy trình thì ghi "đang xây dựng", không ghi số liệu.]

## Xử lý sự cố

[CẦN ĐIỀN: ai trực, thông báo cho khách trong bao lâu, kênh thông báo]. Sự cố liên quan dữ liệu cá nhân được thông báo theo [Cam kết xử lý dữ liệu](/cam-ket-xu-ly-du-lieu).

## Chứng chỉ và đánh giá

KimQ **chưa có** chứng nhận ISO 27001 hay SOC 2. [CẦN ĐIỀN: nếu đang làm thì ghi kế hoạch và mốc thời gian thật; nếu đã kiểm thử xâm nhập độc lập thì ghi đơn vị và thời điểm.]

## Báo cáo lỗ hổng {#bao-cao-lo-hong}

Nếu phát hiện lỗ hổng bảo mật trên kimq.tech hoặc sản phẩm của KimQ, xin gửi mô tả và cách tái hiện tới **[CẦN ĐIỀN: security@kimq.tech, hoặc contact@kimq.tech]**.

- Không truy cập, sửa hay xoá dữ liệu của người khác.
- Không làm gián đoạn dịch vụ.
- Cho chúng tôi thời gian khắc phục trước khi công bố.

Chúng tôi sẽ xác nhận đã nhận báo cáo trong [CẦN ĐIỀN] ngày làm việc. Thông tin máy đọc được: [/.well-known/security.txt](/.well-known/security.txt).
