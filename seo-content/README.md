# Gói việc SEO / Content: KimQ.tech

Ngày: 10/11/2026 · Dữ liệu: TinyFish fetch 40/40 URL live (10/11), crawl Playwright (09/11), bài Google updates trên SER (05–11/2026)
Liên quan: `../KIMQ-AUDIT-TONG-HOP-2026-11-09.md`, `../KIMQ-GOOGLE-UPDATES-COMPARE-2026-11-10.md`, `../KimQ_SEO_GEO_Master_Audit_90_Days.xlsx`

| # | File | Nội dung | Trạng thái | Cần ai |
|---|---|---|---|---|
| 01 | `01-sua-claim-ai-gateway.md` | Câu sửa cụ thể cho mâu thuẫn "có lưu nội dung câu hỏi không", 2 phương án | Nháp sẵn sàng | Product chốt Q1 → Dev/Content sửa trang |
| 02 | `02-brand-va-trang-chu.md` | Quy ước tên (KimQ / Công ty Cổ phần KimQ / KimQ Studio), title–meta–H1–alt trang chủ, mục sản phẩm trên trang chủ, đoạn mở đầu `/san-pham` | Đề xuất | Owner chốt Q2 |
| 03 | `03-trang-gioi-thieu-draft.md` | Bản nháp trang `/gioi-thieu` + schema AboutPage | Nháp, còn `[CẦN ĐIỀN]` | Owner điền đội ngũ, năm thành lập, khách hàng |
| 04 | `04-metadata-40-url.md` + `meta-40-url.json` | Title, meta cho 40 URL; đều đạt độ dài | Sẵn sàng | Dev đưa vào prerender |
| 05 | `05-noi-dung-trang-san-pham.md` | Sửa link "sản phẩm liên quan", FAQ cho trang tính lương phòng khám, khối E-E-A-T, claim cần chuyên gia rà | Nháp | Content + kế toán/luật rà số liệu |
| 06 | `06-byline-ngay-cap-nhat-huong-dan.md` | Mẫu byline, ngày cập nhật, căn cứ pháp lý; checklist 19 trang hướng dẫn | Mẫu | Owner gán người rà soát |
| 07 | `07-gsc-ga4-chinh-sach-ai-geo.md` | Cài Search Console/GA4, số liệu gốc, nhật ký update, chính sách bot AI, quy tắc không mua mention, kế hoạch test GEO | Checklist | SEO + Dev (DNS) + Owner chốt Q3 |
| 08 | `08-trust-pages-footer.md` | Đánh giá trust pages và footer (chưa đạt), spec footer 4 cột, nháp `/lien-he`, Chính sách bảo mật, Điều khoản, câu đồng ý cho form, `security.txt` | Nháp, còn `[CẦN ĐIỀN]` | Owner + luật sư rà chính sách → Dev dựng trang và footer |
| 09 | `09-trust-pages-nghien-cuu.md` | Nghiên cứu 28 site (SaaS VN, CNTT VN, SaaS quốc tế, Portkey): họ có trust pages gì → danh sách 18 trang P0/P1/P2 cho KimQ + những thứ chưa cần làm | Sẵn sàng | Owner duyệt thứ tự |
| — | `../site-patch/` | **Đã làm** toàn bộ P0–P2 trust: 13 trang nội dung (Markdown, có cơ chế draft/ready), Footer pháp nhân, câu đồng ý cho form, trang 404 + server trả HTTP 404, bảng đồng ý cookie (Consent Mode v2), `security.txt`, script kiểm chỗ trống | Code xong; nội dung chờ điền | Dev lắp theo `site-patch/README.md`; Owner điền 13 mục; luật sư duyệt |
| — | `schema/` | JSON-LD: `home.jsonld` (Organization + WebSite), `san-pham.jsonld` (CollectionPage + ItemList), 19 trang sản phẩm (SoftwareApplication + Breadcrumb + FAQPage), 19 trang hướng dẫn (TechArticle + Breadcrumb + FAQPage) | Sẵn sàng; hướng dẫn còn thiếu ngày thật | Dev |

## Ghi chú về schema
- FAQPage lấy **đúng** các câu hỏi đang hiển thị trên trang (TinyFish 10/11). Riêng AI Gateway viết theo phương án A của file 01. Nếu sửa chữ trên trang thì phải sửa JSON-LD theo.
- Google hiện chỉ hiện rich result FAQ cho một số site chính phủ và y tế. Markup vẫn hữu ích để máy hiểu nội dung, nhưng đừng kỳ vọng có rich result.
- SoftwareApplication **không có** `offers` hay `aggregateRating` vì chưa có giá công khai và chưa có đánh giá thật. Vì vậy không đủ điều kiện rich result phần mềm, và đó là chủ ý.
- `sameAs` để trống tới khi có link mạng xã hội thật.
- Kiểm tra bằng Rich Results Test và Schema Markup Validator sau khi deploy.

## Phát hiện mới khi làm (10/11)
- Trùng nội dung giữa 19 trang sản phẩm chỉ ≤ 13,4% (5-gram). Nội dung **không** bị coi là scaled content; chỉ bố cục giống nhau.
- Có 3 tên cho cùng một thứ: "AI Studio" (trang sản phẩm) và "KimQ Studio" (trang hướng dẫn, trang chủ); "KimQ Studio" còn là title mặc định của cả site.
- Khối "sản phẩm liên quan" lấy theo thứ tự danh sách: LIMS và Kiểm soát tài chính đang link sang Nhà Đất và Đấu thầu.
- XLSX thiếu **8** URL live, không phải 7 như ghi trước đây: chatbot-da-kenh, nhatdat, thong-tin-dau-thau (+ 3 trang hướng dẫn), tinh-luong-phong-kham/huong-dan, tro-ly-fanpage/huong-dan. Dòng `/san-pham/tuan-thu-hoa-chat` là trang chuyển hướng.
- Trang tính lương phòng khám có số liệu lương, BHXH, thuế hiệu lực 2026 nhưng không ghi căn cứ. Cần kế toán rà.
- Trust pages: 0/4 trang trust tồn tại (21 URL thử đều soft 404). Footer chỉ có dòng `© 2026 KimQ JSC`. MST và địa chỉ chỉ có trên 2/40 trang. Form email trên 19 trang sản phẩm chưa có chính sách bảo mật (Luật BVDLCN 91/2025/QH15, hiệu lực 01/01/2026).
