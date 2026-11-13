---
path: /bao-mat-du-lieu
title: Bảo mật & dữ liệu trong sản phẩm KimQ Tech
description: Cách KimQ bảo vệ dữ liệu doanh nghiệp: kiểm quyền ở máy chủ, nhật ký không sửa xoá được, AI chỉ đề xuất, che dữ liệu cá nhân, mã hoá key, cài tại chỗ.
h1: Bảo mật & dữ liệu
schemaType: WebPage
status: ready
priority: P1
updated: "13/11/2026"
review: CTO
---

Trang này tóm tắt cách các sản phẩm KimQ bảo vệ dữ liệu của doanh nghiệp. Điểm nào chỉ áp dụng cho một số sản phẩm thì ghi rõ tên sản phẩm và dẫn tới trang mô tả chi tiết.

Khung pháp lý chúng tôi áp dụng: Luật Bảo vệ dữ liệu cá nhân 91/2025/QH15, Nghị định 356/2025/NĐ-CP, Luật An ninh mạng và các quy định về an toàn thông tin mạng.

## Tóm tắt

| Câu hỏi | Trả lời ngắn |
|---|---|
| Ai xem được dữ liệu của doanh nghiệp? | Người dùng của doanh nghiệp theo quyền được cấp. Nhân sự KimQ chỉ truy cập khi cần hỗ trợ hoặc xử lý sự cố, có ghi nhật ký |
| Trợ lý AI có tự sửa dữ liệu không? | Không. Trợ lý chỉ tạo đề xuất; người có quyền duyệt thì dữ liệu mới đổi |
| Có xoá được dấu vết không? | Không. Nhật ký chỉ thêm; sửa sai bằng bút toán đảo hoặc bản đính chính |
| Dữ liệu có dùng để huấn luyện AI không? | KimQ không dùng dữ liệu khách hàng để huấn luyện mô hình. Xem [Chính sách dữ liệu AI](/chinh-sach-du-lieu-ai) |
| Dữ liệu nằm ở đâu? | Trên hạ tầng đám mây do KimQ vận hành, tách theo doanh nghiệp; hoặc trên máy chủ của doanh nghiệp với sản phẩm hỗ trợ cài tại chỗ |
| Khi có sự cố? | Báo cho doanh nghiệp không chậm trễ, tối đa 48 giờ với sự cố dữ liệu cá nhân |

## 1. Phân quyền

- **Quyền được kiểm ở máy chủ cho mọi đường vào:** ứng dụng, trợ lý trong app, trợ lý trên Zalo. Hỏi trợ lý về dữ liệu ngoài quyền của mình, ví dụ lương người khác, sẽ bị từ chối. ([Chấm công & lương](/san-pham/cham-cong-luong), [Công nợ](/san-pham/cong-no))
- **Phân quyền theo vai trò và phạm vi dữ liệu.** Ví dụ, Kiểm soát tài chính chia sáu vai, mỗi vai được xem và thao tác khác nhau; dữ liệu giá đất được mở theo khu vực của từng tài khoản. ([Kiểm soát tài chính](/san-pham/kiem-soat-tai-chinh), [Nhà Đất](/san-pham/nhatdat))
- **Kiểm quyền ở từng bước chuyển trạng thái** trong quy trình nhiều bước, ví dụ nhận mẫu → phân tích → duyệt kết quả trong LIMS. ([LIMS](/san-pham/lims))
- **Thu hồi nhanh:** khoá tài khoản hoặc key của người nghỉ việc trong một bước; lịch sử vẫn còn để đối chiếu. ([AI Gateway](/san-pham/ai-gateway/huong-dan))

## 2. AI chỉ đề xuất, người duyệt mới ghi

- Trợ lý AI chạy đúng quyền của người đang nhờ.
- Lệnh ghi, kể cả gửi từ Zalo, chỉ tạo **yêu cầu chờ duyệt**. Người có quyền sửa và duyệt xong thì dữ liệu mới thay đổi. ([Công nợ](/san-pham/cong-no))
- Chỗ mơ hồ, hệ thống dừng lại chờ người quyết, không tự đoán. ([Tự động hoá](/san-pham/tu-dong-hoa))
- Câu hỏi chạm tới tiền, hoàn tiền, khiếu nại được chatbot chuyển cho người, kèm tóm tắt. ([Chatbot đa kênh](/san-pham/chatbot-da-kenh))

Chi tiết: [Chính sách dữ liệu AI](/chinh-sach-du-lieu-ai).

## 3. Nhật ký và dấu vết

- Mọi thao tác ghi đều có nhật ký: ai làm, làm gì, lúc nào.
- Sổ công nợ **chỉ thêm, không xoá**. Huỷ là bút toán đảo, nên luôn còn dấu vết. ([Công nợ](/san-pham/cong-no))
- LIMS: cơ sở dữ liệu từ chối lệnh sửa hay xoá nhật ký. Sửa kết quả bằng cách thêm bản đính chính kèm lý do. ([LIMS](/san-pham/lims))
- AI Gateway: nhật ký quản trị chống sửa, ghi tên người thao tác và giờ. ([AI Gateway](/san-pham/ai-gateway/huong-dan))
- Chatbot: mọi lượt trả lời, chuyển người và tiếp quản đều có nhật ký. ([Chatbot đa kênh](/san-pham/chatbot-da-kenh))

## 4. Giảm dữ liệu cá nhân phải giữ

- Tính lương phòng khám chỉ giữ mã lượt khám, **không giữ tên hay chẩn đoán** của bệnh nhân. ([Tính lương phòng khám](/san-pham/tinh-luong-phong-kham))
- Dữ liệu dùng để phân tích trong Kiểm soát tài chính được khử định danh. ([Kiểm soát tài chính](/san-pham/kiem-soat-tai-chinh))
- Chatbot tra đơn chỉ trả mã, trạng thái và đường dẫn kết quả; không đọc email, ngày sinh hay hoá đơn ra khung chat. Đường dẫn kết quả gửi vào email chủ đơn. ([Chatbot đa kênh](/san-pham/chatbot-da-kenh))
- AI Gateway che email, số điện thoại Việt Nam, CCCD, mã số thuế và số thẻ thành `[EMAIL]`, `[PHONE]`… Lượt có dữ liệu cá nhân có thể bị chặn, được che trước khi gửi, hoặc chuyển sang model chạy trên máy chủ riêng của doanh nghiệp. ([AI Gateway](/san-pham/ai-gateway/huong-dan))

## 5. Mã hoá và khoá bí mật

- **Khi truyền:** mọi kết nối tới website và sản phẩm dùng HTTPS (TLS). Tên miền riêng của doanh nghiệp được cấp chứng chỉ tự động.
- **Khi lưu:** dữ liệu cá nhân trên hạ tầng đám mây được mã hoá khi lưu trữ, theo yêu cầu tại Điều 12 Nghị định 356/2025.
- **Khoá bí mật:** AI Gateway lưu key nhà cung cấp AI ở dạng mã hoá, chỉ hiện 4 ký tự cuối; khoá bí mật của key ảo chỉ lưu dạng mã băm nên không ai xem lại được. Key thật chỉ nằm trong gateway; mỗi phòng ban dùng key ảo, thu hồi được ngay.
- **Giới hạn truy cập:** giới hạn địa chỉ IP cho từng key và cho trang quản trị AI Gateway; nhiều khoá quản trị với vai trò riêng.

## 6. Nơi đặt dữ liệu

| Cách triển khai | Dữ liệu nằm ở đâu |
|---|---|
| Dịch vụ do KimQ vận hành | Trên hạ tầng đám mây do KimQ thuê, đặt ngoài Việt Nam. Dữ liệu của mỗi doanh nghiệp được tách riêng; với AI Gateway, key, nhật ký và cấu hình tách theo từng doanh nghiệp. Danh sách nhà cung cấp: [Bên xử lý phụ](/ben-xu-ly-phu) |
| Cài trên máy chủ của doanh nghiệp (sản phẩm hỗ trợ, ví dụ AI Gateway) | Toàn bộ dữ liệu, nhật ký và key nằm trong hạ tầng của doanh nghiệp. Dữ liệu chỉ ra ngoài khi doanh nghiệp cấu hình gọi tới dịch vụ bên ngoài |

Doanh nghiệp cần đặt dữ liệu tại Việt Nam có thể trao đổi phương án cài tại chỗ hoặc máy chủ trong nước khi ký hợp đồng.

## 7. Sao lưu và khôi phục

- Cơ sở dữ liệu sản phẩm do KimQ vận hành được sao lưu tự động hằng ngày.
- Bản sao lưu được mã hoá, lưu tách khỏi hệ thống đang chạy và giữ tối thiểu 7 ngày.
- Khi kết thúc hợp đồng, dữ liệu trong bản sao lưu được xoá theo vòng quay sao lưu, như ghi ở [Cam kết xử lý dữ liệu](/cam-ket-xu-ly-du-lieu) mục 7.
- Doanh nghiệp có thể tự xuất dữ liệu ra Excel ở các sản phẩm có chức năng xuất để lưu riêng.

## 8. Xử lý sự cố

1. **Phát hiện và khoanh vùng:** khoá key, tài khoản hoặc đường truy cập liên quan; giữ lại nhật ký để điều tra.
2. **Thông báo:** sự cố ảnh hưởng tới dữ liệu cá nhân của khách hàng được báo cho doanh nghiệp qua email **không chậm trễ, tối đa 48 giờ** kể từ khi phát hiện, để doanh nghiệp kịp thông báo cơ quan chuyên trách trong 72 giờ theo Điều 23 Luật 91/2025. Chi tiết tại [Cam kết xử lý dữ liệu](/cam-ket-xu-ly-du-lieu).
3. **Khắc phục và báo cáo:** sau sự cố nghiêm trọng, KimQ gửi báo cáo nguyên nhân và biện pháp tránh lặp lại.

## 9. Nhân sự và quy trình nội bộ

- Nhân sự KimQ ký cam kết bảo mật; quyền truy cập hệ thống cấp theo nhu cầu công việc và thu hồi khi nghỉ việc.
- Truy cập vào dữ liệu của khách hàng chỉ để hỗ trợ hoặc xử lý sự cố, có ghi nhật ký.
- Tài khoản quản trị hạ tầng dùng đăng nhập hai lớp.

## 10. Chứng chỉ và đánh giá

KimQ **chưa có** chứng nhận ISO/IEC 27001 hay báo cáo SOC 2. Chúng tôi không ghi những chứng nhận mình chưa có. Nhà cung cấp hạ tầng chính công bố chứng nhận bảo mật của họ trên trang tin cậy riêng. Khách hàng có thể yêu cầu thông tin để đánh giá tuân thủ như ghi ở [Cam kết xử lý dữ liệu](/cam-ket-xu-ly-du-lieu) mục 8.

## Báo cáo lỗ hổng {#bao-cao-lo-hong}

Nếu phát hiện lỗ hổng bảo mật trên kimq.tech hoặc sản phẩm của KimQ, xin gửi mô tả và cách tái hiện tới **[contact@kimq.tech](mailto:contact@kimq.tech)**, tiêu đề bắt đầu bằng "[Bảo mật]".

- Không truy cập, sửa hay xoá dữ liệu của người khác; chỉ dùng tài khoản của chính mình để thử.
- Không làm gián đoạn dịch vụ, không thử tấn công từ chối dịch vụ, không dùng kỹ thuật lừa đảo với nhân sự KimQ.
- Cho chúng tôi thời gian khắc phục trước khi công bố.

Chúng tôi xác nhận đã nhận báo cáo trong **03 ngày làm việc**, cập nhật tiến độ xử lý, và ghi nhận người báo nếu người đó muốn. Báo cáo thiện chí theo đúng các điều trên sẽ không bị KimQ khởi kiện. Thông tin máy đọc được: [/.well-known/security.txt](/.well-known/security.txt).

## Liên quan

[Chính sách dữ liệu AI](/chinh-sach-du-lieu-ai) · [Cam kết xử lý dữ liệu](/cam-ket-xu-ly-du-lieu) · [Bên xử lý phụ](/ben-xu-ly-phu) · [Cam kết dịch vụ](/cam-ket-sla)
