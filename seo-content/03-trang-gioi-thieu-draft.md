# 03 — Trang Giới thiệu (About): bản nháp

Trạng thái: **Nháp**. Các chỗ `[CẦN ĐIỀN]` phải lấy thông tin thật, **không tự bịa**.
URL đề xuất: `/gioi-thieu` · Link từ menu chính và footer · Schema: `AboutPage` + `Organization` (dùng `schema/home.jsonld`, `@id` `https://kimq.tech/#organization`)

Mọi câu không có `[CẦN ĐIỀN]` đều lấy từ nội dung đang có trên kimq.tech.

---

**Title:** `Giới thiệu KimQ – Công ty Cổ phần KimQ` (39)
**Meta:** `KimQ là đội ngũ phát triển phần mềm nghiệp vụ và trợ lý AI tại TP.HCM. Thông tin pháp nhân, nguyên tắc sản phẩm, đội ngũ và cách liên hệ.` (139)

# Về KimQ

KimQ là đội ngũ phát triển sản phẩm tại Việt Nam. Chúng tôi xây phần mềm nghiệp vụ và trợ lý AI cho doanh nghiệp, tập trung vào nhu cầu thực sự của người dùng, kết hợp hiểu biết địa phương với tiêu chuẩn quốc tế.

## Thông tin pháp nhân

| | |
|---|---|
| Tên công ty | Công ty Cổ phần KimQ |
| Mã số thuế | 0319416034 |
| Địa chỉ | Tầng 2, số 02 Song Hành, Phường Bình Trưng, Thành phố Hồ Chí Minh, Việt Nam |
| Email | contact@kimq.tech |
| Năm thành lập | [CẦN ĐIỀN, theo giấy ĐKKD] |
| Người đại diện | [CẦN ĐIỀN] |
| Điện thoại / Zalo | [CẦN ĐIỀN, nếu muốn công khai] |

## Chúng tôi làm gì

- **Phần mềm theo ngành**: thẩm định giá, đấu thầu, phân phối hoá chất, vật liệu xây dựng, phòng thí nghiệm, bệnh viện và phòng khám.
- **Ứng dụng cho doanh nghiệp vừa và nhỏ**: công nợ, kho và mua hàng, báo giá, hoá đơn đầu vào, chấm công và lương.
- **Trợ lý AI và tự động hoá**: trợ lý trên Zalo, chatbot đa kênh, tự động xuất hoá đơn và đối soát, KimQ Studio làm video AI, Trợ lý Fanpage, KimQ AI Gateway.
- **Dịch vụ**: phát triển phần mềm web và di động, đồng hành chuyển đổi AI, sản xuất video AI.

[Xem 19 sản phẩm →](/san-pham)

## Nguyên tắc sản phẩm

1. **Trợ lý không ghi thẳng dữ liệu.** Trợ lý chỉ đề xuất. Thay đổi chỉ xảy ra khi người có quyền xem trước và xác nhận.
2. **Chạy đúng quyền người đang nhờ.** Trợ lý chỉ thấy và chỉ gọi được những lệnh mà vai của người đó được dùng.
3. **Dùng tay đầy đủ, không phụ thuộc AI.** Bảng, biểu mẫu, duyệt và báo cáo đều thao tác tay được trên máy tính và điện thoại.
4. **Có nhật ký.** Mọi thao tác ghi đều có dấu vết. Trong các ứng dụng kế toán, kho, sửa sai bằng bút toán đảo, không xoá.

## Cách chúng tôi làm việc

1. **Thấu hiểu người dùng**: [CẦN ĐIỀN 1–2 câu mô tả thật, ví dụ khảo sát quy trình tại chỗ]
2. **Thiết kế & kiểm thử**: [CẦN ĐIỀN]
3. **Xây dựng & cải tiến**: [CẦN ĐIỀN]

Triển khai thường bắt đầu từ một buổi xem thử trên dữ liệu và quy trình của chính doanh nghiệp.

## Đội ngũ

[CẦN ĐIỀN, mỗi người: ảnh thật, họ tên, vai trò, 1–2 câu kinh nghiệm liên quan (năm kinh nghiệm, lĩnh vực: kế toán, y tế, thẩm định…), link LinkedIn]

> Đây là phần quan trọng nhất cho E-E-A-T. Nên có ít nhất người phụ trách sản phẩm, kỹ thuật, và người rà soát nghiệp vụ (kế toán/thuế, y tế) nếu có. Những người này sẽ đứng tên "Rà soát nghiệp vụ" trên các trang hướng dẫn (xem file 06).

## Khách hàng và dự án

[CẦN ĐIỀN, chỉ đưa khi có sự đồng ý công khai: logo, ngành, 1 câu kết quả. Chưa có thì **bỏ mục này**, không dùng logo minh hoạ.]

## Dữ liệu và bảo mật

- Máy chủ đặt tại Việt Nam, hoặc cài trên hạ tầng của doanh nghiệp tuỳ sản phẩm.
- Quyền được kiểm ở máy chủ cho mọi đường vào: ứng dụng, trợ lý trong app, trợ lý trên Zalo.
- [CẦN ĐIỀN: chính sách bảo mật / điều khoản. Nếu chưa có trang riêng thì cần soạn, đặc biệt cho KimQ Health và AI Gateway.]

## Liên hệ

Email: contact@kimq.tech · Nhóm Zalo cộng đồng KimQ · Địa chỉ: Tầng 2, số 02 Song Hành, Phường Bình Trưng, TP.HCM

---

### Schema bổ sung cho trang này

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://kimq.tech/gioi-thieu#webpage",
  "url": "https://kimq.tech/gioi-thieu",
  "name": "Giới thiệu KimQ – Công ty Cổ phần KimQ",
  "isPartOf": {"@id": "https://kimq.tech/#website"},
  "about": {"@id": "https://kimq.tech/#organization"},
  "inLanguage": "vi-VN"
}
```

`sameAs` trong `schema/home.jsonld` đã có Facebook, Instagram, Threads, TikTok. Thêm LinkedIn công ty, Zalo OA, YouTube khi có.
