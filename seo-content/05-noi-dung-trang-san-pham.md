# 05 — Nội dung 19 trang sản phẩm: liên kết, FAQ, E-E-A-T, claim

Trạng thái: **Nháp, chờ duyệt** · Nguồn: TinyFish fetch 40/40 URL ngày 10/11/2026

## 0. Kết luận về trùng lặp nội dung

Mức trùng 5-gram giữa các cặp trang sản phẩm cao nhất chỉ **13,4%** (kho-gia-vat-lieu ↔ lims), và phần trùng chủ yếu là footer, khối CTA, khối Zalo. Mỗi trang dài 1.000–3.400 từ, có ví dụ riêng và FAQ riêng.
→ Nội dung **không phải** dạng scaled/programmatic mà spam update tháng 8 và tháng 9/2026 nhắm tới. Nhận định "19 trang cùng template" trong báo cáo trước chỉ đúng về **bố cục**, không đúng về nội dung. Không cần viết lại hàng loạt. Chỉ cần làm 4 việc dưới đây.

## 1. Sửa khối "Sản phẩm liên quan" (internal link)

Mỗi trang hiện có 3 link sang sản phẩm khác. Nhiều link đang lấy theo thứ tự danh sách, không theo chủ đề. Ví dụ: LIMS và Kiểm soát tài chính đang link sang Nhà Đất và Đấu thầu.

| Trang | Đang link | Đề xuất (lý do) |
|---|---|---|
| nhatdat | kiem-soat-tai-chinh, kho-gia-vat-lieu, thong-tin-dau-thau | **thong-tin-dau-thau** (đấu giá tài sản), **kho-gia-vat-lieu** (giá vật liệu), **tro-ly-zalo** |
| thong-tin-dau-thau | tro-ly-zalo, kho-gia-vat-lieu, nhatdat | Giữ |
| giai-phap-hoa-chat | tro-ly-zalo, cong-no, nhatdat | **kho-mua-hang**, **cong-no**, **bao-gia-don-hang** (các phân hệ tương ứng); vẫn nhắc tro-ly-zalo trong nội dung |
| kho-gia-vat-lieu | nhatdat, thong-tin-dau-thau, giai-phap-hoa-chat | **kho-mua-hang**, **bao-gia-don-hang**, **thong-tin-dau-thau** |
| lims | nhatdat, thong-tin-dau-thau, giai-phap-hoa-chat | **benh-vien**, **tinh-luong-phong-kham**, **tro-ly-zalo** (khách hỏi tiến độ trên Zalo) |
| benh-vien | tinh-luong-phong-kham, nhatdat, thong-tin-dau-thau | **tinh-luong-phong-kham**, **lims**, **chatbot-da-kenh** |
| tinh-luong-phong-kham | cham-cong-luong, benh-vien, nhatdat | **cham-cong-luong**, **benh-vien**, **lims** |
| kiem-soat-tai-chinh | nhatdat, thong-tin-dau-thau, giai-phap-hoa-chat | **hoa-don-dau-vao**, **cong-no**, **tu-dong-hoa** |
| cong-no / kho-mua-hang / bao-gia-don-hang / hoa-don-dau-vao | nhau | Giữ; thêm **kiem-soat-tai-chinh** vào hoa-don-dau-vao |
| cham-cong-luong | tinh-luong-phong-kham, cong-no, kho-mua-hang | **tinh-luong-phong-kham**, **tro-ly-zalo** (quản lý hỏi bảng công qua Zalo), **cong-no** |
| tro-ly-zalo / chatbot-da-kenh | — | Giữ |
| tu-dong-hoa | tro-ly-zalo, chatbot-da-kenh, ai-studio | **hoa-don-dau-vao**, **cong-no**, **kiem-soat-tai-chinh** (hoá đơn, đối soát) |
| ai-studio | tro-ly-zalo, chatbot-da-kenh, tu-dong-hoa | **tro-ly-fanpage**, **chatbot-da-kenh**, **ai-gateway** |
| tro-ly-fanpage | tro-ly-zalo, chatbot-da-kenh, tu-dong-hoa | **ai-studio**, **chatbot-da-kenh**, **tro-ly-zalo** |
| ai-gateway | tro-ly-zalo, chatbot-da-kenh, tu-dong-hoa | Giữ |

Dev nên cho phép khai báo `related: [...]` riêng cho từng sản phẩm thay vì lấy 3 sản phẩm đầu cùng nhóm.

## 2. FAQ cho `/san-pham/tinh-luong-phong-kham` (trang duy nhất chưa có FAQ)

Mọi câu trả lời lấy từ nội dung đang có trên trang. Sau khi đăng, thêm FAQPage vào [`schema/san-pham/tinh-luong-phong-kham.jsonld`](schema/san-pham/tinh-luong-phong-kham.jsonld).

**Phòng khám đang dùng MISA thì có phải bỏ không?**
Không. Bộ máy tính lương kết nối MISA AMIS Tiền lương phòng khám đang dùng, thêm mô-đun tính lương hiệu suất (P3) riêng cho công thức của bác sĩ; bút toán lương chuyển sang MISA Kế toán một bước.

**HIS không có API hoặc thiếu mã bác sĩ thì sao?**
Hệ thống lấy tệp XML chuẩn QĐ 130/QĐ-BYT xuất theo lịch tự động. Dòng chưa khớp bị loại khỏi tính lương; KimQ cùng phòng khám chỉnh quy trình nhập liệu HIS khi triển khai.

**Hệ thống có lấy thông tin bệnh nhân không?**
Không giữ tên hay chẩn đoán của bệnh nhân. Lớp dữ liệu chỉ giữ mã lượt khám để gắn doanh thu với bác sĩ chỉ định và người thực hiện.

**Doanh thu trên HIS lệch sổ quỹ thì tính lương thế nào?**
Hệ thống đối soát tự động hằng ngày. Phần lương hiệu suất chỉ tính trên dòng đã khớp và đã thực thu; khoản hoàn tiền được thu hồi ở kỳ sau.

**Trưởng khoa chấm điểm chất lượng trễ thì sao?**
Hạn chấm là ngày 5. Quá hạn thì hệ số tạm tính 1,0; nhân viên xem điểm và khiếu nại trong 2 ngày.

**Con người còn phải làm gì?**
Hai việc: chấm điểm chất lượng chuyên môn và phê duyệt bảng lương. Kế toán trưởng kiểm soát, giám đốc điều hành duyệt và ký số trước khi chi lương ngày 10.

## 3. Bổ sung E-E-A-T trên từng trang sản phẩm

Mỗi trang sản phẩm cần thêm 3 khối nhỏ. Không cần viết lại phần đang có.

1. **"Phù hợp với ai / chưa phù hợp với ai"**: 3 + 2 gạch đầu dòng, cuối trang trước FAQ. Lấy từ các giới hạn trang đã tự nêu. Ví dụ Nhà Đất "không thay thẩm định viên", Kiểm soát tài chính "tín hiệu chưa phải gian lận", Công nợ "dòng tiền là dự báo, không phải cam kết". Đây là điểm mạnh nên đưa lên rõ hơn.
2. **"Đang chạy ở đâu"**: 1 câu về triển khai thật, ví dụ "Đang dùng tại [loại doanh nghiệp, quy mô] từ [tháng/năm]". Chỉ thêm khi có thật và được phép công khai. Ưu tiên các trang có ví dụ cụ thể: nhatdat (bảng tuyến đường Quận 4 "đã triển khai"), tinh-luong-phong-kham ("phòng khám quy mô 100 nhân sự"), giai-phap-hoa-chat.
3. **Dòng "Cập nhật lần cuối: dd/mm/yyyy"** dưới H1 cho các trang có số liệu pháp lý (mục 4).

Trang **chưa có ảnh màn hình thật**, cần bổ sung ảnh chụp app (đã ẩn dữ liệu thật): benh-vien, tinh-luong-phong-kham, bao-gia-don-hang, hoa-don-dau-vao, tu-dong-hoa, ai-studio, tro-ly-fanpage, ai-gateway. Các trang còn lại đã có mục "Màn hình thật trên điện thoại".

## 4. Claim và số liệu cần người có chuyên môn rà (YMYL)

| Trang | Nội dung | Rủi ro | Việc cần làm |
|---|---|---|---|
| tinh-luong-phong-kham | "Lương tối thiểu Vùng I 5,31 tr; lương cơ sở 2,53 tr và trần BHXH 50,6 tr từ 1/7/2026; giảm trừ 15,5 tr + 6,2 tr/NPT; thuế 5 bậc 5–35%" | Cao (thuế, BHXH) | Kế toán/luật rà, ghi **số hiệu văn bản** và ngày hiệu lực ngay cạnh con số. Content **chưa** tự xác minh các số này |
| tinh-luong-phong-kham | "Tự động 80–90%", "< 1% phiếu điều chỉnh", "100% doanh thu đối soát" | TB | Đã ghi là "Mục tiêu thiết kế". Giữ nhãn này sát con số, không dùng làm số đo thực tế |
| cham-cong-luong, tro-ly-zalo | Ví dụ BHXH 8%/1,5%/1%, thuế bậc 1 5% | Cao | Như trên: ghi căn cứ và ngày cập nhật |
| hoa-don-dau-vao | "17 phép kiểm có căn cứ", ví dụ thuế 8%/10% | Cao | Ghi danh sách căn cứ pháp lý ở trang hướng dẫn; ngày rà soát |
| kho-mua-hang | "Hàng về trước khi chạm phần tồn an toàn, **không bao giờ hết hàng**." | TB (tuyệt đối hoá) | Đổi thành: "Đặt hàng sớm để hàng về trước khi chạm tồn an toàn, giảm nguy cơ hết hàng." |
| ai-gateway | "Chi phí thấp hơn tới 30%…", "không lưu nội dung câu hỏi" | Cao | Xem file 01 |
| benh-vien | Kết nối HIS/EMR/LIS/PACS | Cao | Danh sách HIS đã kết nối thật (tên nhà cung cấp, nếu được phép) |
| ai-studio | Giọng đọc tiếng Việt | TB | Giấy phép thương mại của nguồn giọng (sheet Claim Check) |

## 5. Không làm

- Không tạo thêm trang theo tỉnh, quận hay biến thể từ khoá. Spam update tháng 8 và tháng 9/2026 đánh mạnh vào dạng trang này.
- Không thêm `aggregateRating` hay review khi chưa có đánh giá thật.
- Không thêm logo khách hàng minh hoạ.
