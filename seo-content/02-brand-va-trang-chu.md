# 02 — Quy ước tên thương hiệu và nội dung trang chủ

Trạng thái: **Q2 đã chốt ngày 13/11/2026: thương hiệu là KimQ Tech** · Phần trang chủ: đề xuất, chờ duyệt · Nguồn: fetch 10/11/2026, crawl Playwright 09/11/2026

## 1. Hiện trạng: 4 tên, dùng lẫn lộn

| Tên | Đang xuất hiện ở | Vấn đề |
|---|---|---|
| **KimQ Studio** | `<title>` trang chủ và HTML gốc của **mọi URL**; mục "KimQ Studio: sản xuất video AI" trên trang chủ; tiêu đề trang hướng dẫn AI Studio | Vừa là tên công ty trên tab trình duyệt, vừa là tên một dịch vụ video → Google/AI dễ hiểu KimQ là studio video |
| **AI Studio** | Trang `/san-pham/ai-studio`, `/san-pham`, Trợ lý Fanpage | Cùng một sản phẩm với "KimQ Studio" trong trang hướng dẫn |
| **KimQ** | Hậu tố title của 39 trang ("· KimQ"), nội dung | Tên ngắn tốt nhất |
| **CÔNG TY CỔ PHẦN KIMQ** | Footer, alt logo | Pháp nhân, đúng |
| **KimQ AI Tech** | Chỉ trong file XLSX | Không có trên site → **bỏ**, thay bằng KimQ Tech |

## 2. Quy ước đề xuất

| Dùng cho | Tên | Ghi chú |
|---|---|---|
| Thương hiệu công khai, title, schema `name`, `og:site_name`, tên hiển thị mạng xã hội | **KimQ Tech** | Hậu tố title: ` \| KimQ Tech`. Trùng với tên miền kimq.tech. Trong một đoạn văn, lần nhắc đầu viết "KimQ Tech", các lần sau được viết gọn "KimQ". Schema có `alternateName: "KimQ"` |
| Pháp nhân, hợp đồng, footer, schema `legalName` | **Công ty Cổ phần KimQ** | MST 0319416034. Đây là tên trên giấy phép, **không đổi** |
| Sản phẩm video/ảnh AI | **AI Studio** | Giữ tên đang dùng trên trang sản phẩm. Bỏ "KimQ Studio" ở trang chủ và trang hướng dẫn. URL `/san-pham/ai-studio` giữ nguyên |
| Sản phẩm khác | KimQ + tên sản phẩm khi đứng một mình (KimQ Health, KimQ AI Gateway); còn lại dùng tên mô tả (Công nợ & dòng tiền…) | Giữ như hiện tại |

**Không dùng "KimQ Studio" ở bất kỳ đâu.** Những chỗ cần sửa trên site:
- `<title>` mặc định trong `index.html` ("KimQ Studio") → title trang chủ bên dưới.
- Trang chủ: H3 "KimQ Studio" và câu "sản xuất video AI với KimQ Studio" → "AI Studio".
- H1 trang `/san-pham/ai-studio/huong-dan`: "KimQ Studio: tạo ảnh và video…" → "AI Studio: tạo ảnh và video…".
- Hậu tố title của 39 trang: "· KimQ" → " | KimQ Tech" (đã có trong [`04`](04-metadata-40-url.md) và [`meta-40-url.json`](meta-40-url.json)).

## 3. Trang chủ `/`

| Thành phần | Hiện tại | Đề xuất |
|---|---|---|
| Title | `KimQ Studio` (11 ký tự) | `KimQ Tech – Phần mềm nghiệp vụ & trợ lý AI cho doanh nghiệp` (59) |
| Meta description | "KimQ xây phần mềm nghiệp vụ và trợ lý AI cho doanh nghiệp Việt Nam." (67) | `KimQ Tech xây phần mềm nghiệp vụ theo ngành, ứng dụng cho doanh nghiệp vừa và nhỏ, trợ lý AI trên Zalo và AI Gateway. Dùng tay đầy đủ, AI chỉ đề xuất.` (150) |
| Canonical | Không có | `https://kimq.tech/` |
| og:image | Không có (38 trang khác đều có) | Tạm dùng `https://kimq.tech/opengraph.jpg` đang có; nên thiết kế ảnh 1200×630 có logo + câu "Phần mềm nghiệp vụ & trợ lý AI cho doanh nghiệp" |
| H1 | "Xây dựng sản phẩm số cho cuộc sống tốt đẹp hơn" | `Phần mềm nghiệp vụ và trợ lý AI cho doanh nghiệp Việt Nam`; giữ câu cũ làm tagline (thẻ `<p>`) ngay dưới H1 |
| Alt ảnh hero | "KimQ turtle illustration" (tiếng Anh) | `Linh vật rùa của KimQ Tech` |
| Ảnh trang trí (mây, sen, icon) | `alt=""` | **Giữ nguyên** `alt=""`. Đây là đúng chuẩn cho ảnh trang trí |

### Nội dung trang chủ: bổ sung mục sản phẩm

Trang chủ hiện có 320 từ, chỉ nói về "dịch vụ" (phát triển phần mềm, chuyển đổi AI, video). Trang **không giới thiệu và không link** tới 19 sản phẩm, nên trang chủ không truyền liên kết nội bộ cho các trang sản phẩm. Đề xuất chèn mục sau ngay dưới "Chúng tôi là ai":

> ## Sản phẩm của KimQ Tech
> Mỗi sản phẩm dùng tay đầy đủ trên máy tính và điện thoại. Trợ lý AI làm việc trên cùng dữ liệu, chỉ đề xuất; thay đổi chỉ xảy ra khi người có quyền xác nhận.
>
> ### Giải pháp theo ngành
> Thẩm định giá ([Nhà Đất](/san-pham/nhatdat)), [thông tin đấu thầu](/san-pham/thong-tin-dau-thau), [phân phối hoá chất](/san-pham/giai-phap-hoa-chat), [kho và giá vật liệu](/san-pham/kho-gia-vat-lieu), [phòng thí nghiệm (LIMS)](/san-pham/lims), [bệnh viện](/san-pham/benh-vien), [tính lương phòng khám](/san-pham/tinh-luong-phong-kham).
>
> ### Ứng dụng cho doanh nghiệp vừa và nhỏ
> [Công nợ & dòng tiền](/san-pham/cong-no), [kho & mua hàng](/san-pham/kho-mua-hang), [báo giá & đơn hàng](/san-pham/bao-gia-don-hang), [hoá đơn đầu vào](/san-pham/hoa-don-dau-vao), [chấm công & lương](/san-pham/cham-cong-luong), [kiểm soát tài chính nội bộ](/san-pham/kiem-soat-tai-chinh).
>
> ### Trợ lý AI & tự động hoá
> [Trợ lý AI trên Zalo](/san-pham/tro-ly-zalo), [chatbot đa kênh](/san-pham/chatbot-da-kenh), [tự động hoá hoá đơn và đối soát](/san-pham/tu-dong-hoa), [AI Studio](/san-pham/ai-studio), [Trợ lý Fanpage](/san-pham/tro-ly-fanpage), [KimQ AI Gateway](/san-pham/ai-gateway).
>
> [Xem tất cả sản phẩm](/san-pham)

Owner xác nhận lại nhóm của **Kiểm soát tài chính**: `/san-pham` ghi "Năm ứng dụng gọn", nhưng liên kết nội bộ cho thấy trang này nằm ở nhóm ngành.

## 4. Trang `/san-pham`: đoạn mở đầu

Trang hiện có 263 từ. Đề xuất thêm đoạn dưới H1:

> KimQ Tech có 19 sản phẩm chia làm ba nhóm: phần mềm dựng theo quy trình riêng của từng ngành, năm ứng dụng gọn cho doanh nghiệp vừa và nhỏ dùng chung một nền, và các trợ lý AI cùng luồng tự động chạy nền. Sản phẩm nào cũng có trang hướng dẫn sử dụng chi tiết, chạy trên máy tính và điện thoại, và áp dụng chung ba nguyên tắc: trợ lý không ghi thẳng dữ liệu, chạy đúng quyền người đang nhờ, và mọi thao tác đều làm tay được.

## Nghiệm thu
- [x] Owner chốt quy ước tên (mục 2): **KimQ Tech**, 13/11/2026
- [ ] Dev đổi title mặc định `index.html`, thêm canonical và og:image trang chủ
- [ ] Content/Dev bỏ "KimQ Studio" (index.html, trang chủ, H1 hướng dẫn AI Studio); đổi hậu tố title sang " | KimQ Tech"
- [ ] Thêm mục "Sản phẩm của KimQ Tech" lên trang chủ và đoạn mở đầu `/san-pham`
- [x] Sửa tên brand trong XLSX: "KimQ AI Tech" → "KimQ Tech" (13/11/2026)
