# 06 — Byline, ngày cập nhật và căn cứ cho 19 trang hướng dẫn

Trạng thái: **Mẫu + checklist; cần Owner điền tên người thật** · Nguồn: TinyFish fetch 10/11/2026

## Hiện trạng
- 19/19 trang hướng dẫn **không có** tác giả, người rà soát hay ngày cập nhật hiển thị.
- 19/19 trang **không có** TechArticle schema (đã soạn sẵn trong [`schema/huong-dan/`](schema/huong-dan/), chỉ còn thiếu ngày thật).
- Nội dung dài và chi tiết (1.200–10.250 từ, 3–10 FAQ mỗi trang). Đây là tài sản E-E-A-T tốt nhất của site. Chỉ thiếu tín hiệu "ai viết, ai chịu trách nhiệm, đúng tới ngày nào".

## Khối byline (đặt ngay dưới H1)

```
Biên soạn: Đội sản phẩm KimQ · Rà soát nghiệp vụ: [Họ tên], [vai trò]
Cập nhật: [dd/mm/yyyy] · Áp dụng cho phiên bản: [tên/tháng phát hành]
```

Với trang có mức YMYL **Cao**, thêm một khối ngay sau byline:

```
Căn cứ pháp lý: [số hiệu văn bản, ngày hiệu lực] … Thông tin đúng đến ngày [dd/mm/yyyy].
Nội dung mang tính hướng dẫn sử dụng phần mềm, không thay cho tư vấn thuế, pháp lý hoặc y khoa.
```

Tên người rà soát nên link sang mục Đội ngũ trên trang Giới thiệu (file 03).

## Quy tắc ngày
- `Cập nhật` và `dateModified` trong schema = ngày **sửa nội dung thật**, không phải ngày build hay deploy.
- Sitemap `lastmod` dùng **cùng ngày này**, hoặc bỏ `lastmod` nếu chưa lấy được ngày đúng. Google nói ngày 16/07/2026 rằng lastmod sai thì thà bỏ.
- Không đổi ngày chỉ vì sửa chính tả, footer hay năm bản quyền.
- Trong [`schema/huong-dan/*.jsonld`](schema/huong-dan/), thay `__DIEN_NGAY_THAT_YYYY-MM-DD__` bằng ngày thật. **Không deploy file còn placeholder.**

## Checklist 19 trang

| # | Trang hướng dẫn | Số từ | FAQ | Mức YMYL | Người rà soát đề xuất | Byline | Ngày cập nhật |
|---|---|---|---|---|---|---|---|
| 1 | `/san-pham/nhatdat/huong-dan` | 1.470 | 3 | TB | Thẩm định viên về giá | ☐ | ☐ |
| 2 | `/san-pham/thong-tin-dau-thau/huong-dan` | 1.360 | 3 | TB | Chuyên viên đấu thầu | ☐ | ☐ |
| 3 | `/san-pham/giai-phap-hoa-chat/huong-dan` | 8.920 | 9 | Cao | Chuyên viên tuân thủ hoá chất / pháp chế | ☐ | ☐ |
| 4 | `/san-pham/kho-gia-vat-lieu/huong-dan` | 2.223 | 5 | Thấp | Quản lý kho/vận hành | ☐ | ☐ |
| 5 | `/san-pham/lims/huong-dan` | 2.638 | 6 | TB | Quản lý chất lượng phòng thí nghiệm (QA/QC) | ☐ | ☐ |
| 6 | `/san-pham/benh-vien/huong-dan` | 10.250 | 10 | Cao | Nhân sự y tế / quản lý bệnh viện | ☐ | ☐ |
| 7 | `/san-pham/tinh-luong-phong-kham/huong-dan` | 1.659 | 3 | Cao | Kế toán trưởng (lương, BHXH, thuế TNCN) | ☐ | ☐ |
| 8 | `/san-pham/kiem-soat-tai-chinh/huong-dan` | 4.531 | 5 | TB | Kiểm toán nội bộ / kế toán trưởng | ☐ | ☐ |
| 9 | `/san-pham/cong-no/huong-dan` | 8.998 | 9 | TB | Kế toán | ☐ | ☐ |
| 10 | `/san-pham/kho-mua-hang/huong-dan` | 9.966 | 10 | TB | Kế toán kho | ☐ | ☐ |
| 11 | `/san-pham/bao-gia-don-hang/huong-dan` | 8.669 | 10 | Thấp | Kinh doanh / kế toán | ☐ | ☐ |
| 12 | `/san-pham/hoa-don-dau-vao/huong-dan` | 9.972 | 10 | Cao | Kế toán thuế | ☐ | ☐ |
| 13 | `/san-pham/cham-cong-luong/huong-dan` | 9.543 | 10 | Cao | Kế toán lương / HCNS | ☐ | ☐ |
| 14 | `/san-pham/tro-ly-zalo/huong-dan` | 4.827 | 9 | Cao | Kế toán thuế (phần hỏi thuế) | ☐ | ☐ |
| 15 | `/san-pham/chatbot-da-kenh/huong-dan` | 1.393 | 4 | Thấp | Product | ☐ | ☐ |
| 16 | `/san-pham/tu-dong-hoa/huong-dan` | 4.401 | 6 | TB | Kế toán + kỹ sư vận hành | ☐ | ☐ |
| 17 | `/san-pham/ai-studio/huong-dan` | 4.680 | 8 | Thấp | Product | ☐ | ☐ |
| 18 | `/san-pham/tro-ly-fanpage/huong-dan` | 1.242 | 4 | Thấp | Product / marketing | ☐ | ☐ |
| 19 | `/san-pham/ai-gateway/huong-dan` | 5.098 | 7 | Cao (dữ liệu) | Kỹ sư bảo mật / Product | ☐ | ☐ |

## Đề xuất tiêu đề

Một số H1 trang hướng dẫn dài hơn 70 ký tự, ví dụ trang hoá chất và trang công nợ. H1 được phép dài, nhưng title đã rút gọn trong file 04. Giữ H1 hiện tại.
