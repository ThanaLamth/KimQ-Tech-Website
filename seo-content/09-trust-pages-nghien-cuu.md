# 09 — Nghiên cứu trust pages: các site cùng ngành làm gì → danh sách cho KimQ

Ngày: 10/11/2026
Phương pháp:
- TinyFish fetch trang chủ 28 site, lấy toàn bộ link (`--links`).
- Playwright đọc footer của 12 site SaaS Việt Nam.
- TinyFish đọc 20 trang pháp lý/trust mẫu.
Phát hiện dựa trên link có trên **trang chủ**. Trang nào chỉ được link từ chỗ khác thì có thể bị sót.
Bản nháp chi tiết các trang P0–P1: xem `08-trust-pages-footer.md`.

## 1. Nhóm site đã khảo sát

| Nhóm | Site |
|---|---|
| SaaS B2B Việt Nam (12) | misa.vn, amis.misa.vn, base.vn, kiotviet.vn, sapo.vn, haravan.com, 1office.vn, getfly.vn, fpt.ai, fastwork.vn, vbee.vn, bizfly.vn |
| CNTT / doanh nghiệp Việt Nam (5) | fpt-is.com, vnpt.com.vn, meinvoice.vn, kms-technology.com, nashtechglobal.com, savvycomsoftware.com |
| SaaS quốc tế (10) | stripe.com, linear.app, notion.com, hubspot.com, zoho.com, xero.com, freshworks.com, vercel.com, intercom.com, **portkey.ai** (AI gateway, đối thủ trực tiếp của KimQ AI Gateway) |

## 2. Họ có những trang gì

| Trang trust | SaaS VN (12) | Quốc tế (10) | Ví dụ đáng học |
|---|---|---|---|
| Giới thiệu | 11/12 | 10/10 | base.vn/about-us (tầm nhìn, sứ mệnh, giá trị, hành trình); fpt.ai/about-us (câu chuyện, cam kết, tác động, **chứng nhận, giải thưởng**) |
| Liên hệ / hỗ trợ | 11/12 | 10/10 | kiotviet.vn/lien-he: hotline in lớn, địa chỉ, form |
| Chính sách bảo mật / bảo vệ dữ liệu cá nhân | 10/12 | 10/10 | base.vn/bao-mat: dẫn **Luật 91/2025/QH15 + NĐ 356/2025**, cập nhật 2026 |
| Điều khoản sử dụng | 8/12 | 9/10 | 1office.vn tách 2 trang: `dieu-khoan-su-dung` (website) và `dieu-khoan-dich-vu` (sản phẩm) |
| Pháp nhân trong footer (MST / Giấy CNĐKDN) | ≥ 5/12 hiện ngay ở footer | — | misa.vn: "Giấy CNĐKKD: 0101243150 – ngày cấp lần đầu 22/04/2002"; fpt-is.com: mã số DN + nơi cấp + ngày cấp + lần sửa đổi |
| Hotline trong footer | 9/12 | ít | getfly.vn tách hotline hỗ trợ và hotline kinh doanh theo từng chi nhánh |
| Khách hàng / case study | 8/12 | 10/10 | bizfly.vn/case-study, fpt-is.com/khach-hang, customers.base.vn |
| Trang bảo mật / trust center | 3/12 (chủ yếu ghi ISO 27001) | 8/10 | notion.com/security; linear.app/security; vercel trust center (ISO 27001, SOC 2, subprocessors); **portkey.ai/features/security-compliance** (virtual key, kiểm soát truy cập, che dữ liệu nhạy cảm, tiêu chuẩn) |
| Cam kết xử lý dữ liệu, vai trò bên xử lý (DPA) | 2/12 | 5/10 | base.vn "Chính sách xử lý dữ liệu – Bên xử lý"; 1office.vn "Cam kết xử lý dữ liệu cá nhân"; vercel/portkey/linear `/dpa` |
| Danh sách bên xử lý phụ (subprocessors) | 0/12 | 3/10 | vercel.com/legal/sub-processors; notion |
| Cam kết SLA / uptime | 1/12 | 2/10 | 1office.vn/cam-ket-sla (uptime, loại trừ, service credit, hỗ trợ) |
| Trang trạng thái (status) | 0/12 | 6/10 | status.stripe.com, status.portkey.ai |
| Chính sách cookie | 2/12 | 5/10 | fastwork.vn: nhóm cookie (thiết yếu, chức năng, phân tích, quảng cáo), danh mục công cụ, cách từ chối |
| Chính sách sử dụng chấp nhận được (AUP) / quản trị AI | 0/12 | 3/10 | vercel AUP; linear `/legal/aup`; notion mục "AI governance / AI Security" |
| Tuyên bố tiếp cận (accessibility) | 0/12 | 3/10 | hubspot, xero, freshworks |
| Badge Bộ Công Thương | 7/12 | — | Các site này **bán và thu tiền online** (đăng ký gói, thanh toán) |
| Badge DMCA | 7/12 | — | Chỉ mang tính trang trí, không có giá trị pháp lý hay SEO |
| Thanh toán / hoàn tiền / bảo hành | 4/12 | — | getfly, fastwork, bizfly, vbee. Chỉ cần khi bán gói online |

**Rút ra:**
1. Ở Việt Nam, bộ trang "tối thiểu ai cũng có" gồm: **Giới thiệu, Liên hệ, Chính sách bảo vệ dữ liệu cá nhân, Điều khoản, footer có pháp nhân + hotline**.
2. Các site Việt Nam đã cập nhật làm đúng hai việc: dẫn **Luật 91/2025 + NĐ 356/2025**, và **tách vai trò** "bên kiểm soát" (dữ liệu khách truy cập website) khỏi "bên xử lý" (dữ liệu khách hàng đưa vào sản phẩm).
3. Site SaaS quốc tế thắng niềm tin bằng **trang Bảo mật / Trust center + DPA + status**. Đây là chỗ KimQ có thể vượt các site Việt Nam, vì KimQ bán AI Gateway, KimQ Health và LIMS, toàn sản phẩm xử lý dữ liệu nhạy cảm.

## 3. Danh sách trust pages cho KimQ

Hiện tại KimQ có **0** trang trong danh sách dưới đây (xem `08`).

### P0: làm ngay (pháp lý + nền tảng)

| # | Trang / thành phần | URL đề xuất | Nội dung chính (theo mẫu tốt) | Ai làm |
|---|---|---|---|---|
| 1 | Chính sách bảo vệ dữ liệu cá nhân (website, KimQ là **bên kiểm soát**) | `/chinh-sach-bao-mat` | Theo khung base.vn: định nghĩa → dữ liệu thu (email form, log) → mục đích → bên nhận → quyền chủ thể + cách thực hiện → biện pháp bảo vệ → thời gian lưu → chuyển ra nước ngoài → cam kết không mua bán → ngày hiệu lực → liên hệ. Khung có sẵn ở `08` mục 4.2 | Owner + luật sư → Dev |
| 2 | Câu thông báo + link chính sách dưới form "Quan tâm" | 19 trang SP | `08` mục 4.4 | Dev |
| 3 | Footer có pháp nhân đầy đủ | sitewide | Theo misa/fpt-is: **Công ty Cổ phần KimQ · Giấy CNĐKDN/MST 0319416034 do `[CẦN ĐIỀN: nơi cấp]` cấp ngày `[CẦN ĐIỀN]`** · địa chỉ · hotline · email · 4 cột link (`08` mục 3) | Owner điền → Dev |
| 4 | Trang 404 thật (HTTP 404, tiếng Việt, có link về SP) | mọi URL lạ | Hiện đang là soft 404 template dev | Dev |

### P1: trong 2–4 tuần (E-E-A-T + bán B2B)

| # | Trang | URL đề xuất | Nội dung chính | Ai làm |
|---|---|---|---|---|
| 5 | Giới thiệu | `/gioi-thieu` | Theo base.vn + fpt.ai: câu chuyện, sứ mệnh, giá trị, **đội ngũ có tên thật**, hành trình theo năm, chứng nhận/giải thưởng (nếu có thật). Nháp: `03` | Owner + Content |
| 6 | Liên hệ | `/lien-he` | Theo kiotviet: hotline nổi bật, giờ làm việc, địa chỉ + bản đồ, form có câu đồng ý. Nháp: `08` mục 4.1 | Content + Dev |
| 7 | Điều khoản sử dụng website | `/dieu-khoan-su-dung` | `08` mục 4.3. Điều khoản dịch vụ từng sản phẩm để sang hợp đồng, hoặc trang riêng như 1office | Luật sư |
| 8 | **Bảo mật & dữ liệu** (trust center gọn) | `/bao-mat-du-lieu` | Theo notion/linear/portkey, **chỉ ghi điều đang làm thật**: nơi đặt máy chủ (VN / on-premise), mã hoá, phân quyền, nhật ký kiểm toán, che dữ liệu cá nhân (AI Gateway), sao lưu, quy trình xử lý sự cố, chứng chỉ (chưa có thì không ghi), liên hệ báo lỗ hổng | CTO + Content |
| 9 | Cam kết xử lý dữ liệu, KimQ là **bên xử lý** (DPA) | `/cam-ket-xu-ly-du-lieu` | Theo base.vn "Bên xử lý" và 1office: KimQ xử lý dữ liệu khách hàng đưa vào Công nợ, Lương, Health, LIMS, AI Gateway theo chỉ dẫn của khách; bảo mật; bên xử lý phụ; thông báo sự cố; xoá/trả dữ liệu khi kết thúc. **Dữ liệu sức khoẻ = nhạy cảm** | Luật sư + CTO |
| 10 | Chính sách dữ liệu AI | mục trong #8 hoặc `/chinh-sach-ai` | Model/nhà cung cấp nào được dùng; dữ liệu khách **có hay không** dùng để huấn luyện; AI Gateway có lưu nội dung không (**phải chốt Q1 trước**); người duyệt trước khi AI ghi dữ liệu (đã có trên trang Công nợ: "chỉ tạo yêu cầu chờ duyệt") | Owner + CTO |

### P2: khi có khách / có nguồn lực

| # | Trang | Khi nào cần | Mẫu |
|---|---|---|---|
| 11 | Khách hàng / case study | Khi có khách đồng ý nêu tên | bizfly, fpt-is (bài theo bài toán → giải pháp → số liệu) |
| 12 | Danh sách bên xử lý phụ | Khi ký hợp đồng với doanh nghiệp vừa/lớn hoặc bệnh viện | vercel sub-processors (tên, mục đích, quốc gia) |
| 13 | Cam kết SLA & hỗ trợ | Khi bán gói có phí | 1office.vn/cam-ket-sla |
| 14 | Chính sách cookie + bảng đồng ý | **Bắt buộc trước khi bật GA4** | fastwork.vn (nhóm cookie, danh mục, cách từ chối) |
| 15 | `/.well-known/security.txt` + chính sách báo lỗ hổng | Nên làm sớm, tốn 10 phút | `08` mục 5 |
| 16 | Trang trạng thái hệ thống | Khi có khách trả phí dùng hằng ngày | status.portkey.ai |
| 17 | Tuyển dụng | Tuỳ chọn: tín hiệu "công ty thật, đang phát triển" | about.kiotviet.vn/tuyen-dung |
| 18 | Tuyên bố tiếp cận | Tuỳ chọn | xero, hubspot |

### Chưa cần, ghi rõ để khỏi làm thừa

| Thứ | Lý do |
|---|---|
| Badge / thông báo Bộ Công Thương | 7/12 site Việt Nam có badge, nhưng đều là site **đăng ký gói và thanh toán online**. KimQ hiện chỉ giới thiệu và thu email liên hệ. Khi thêm chức năng đặt mua/thanh toán trên web thì nhờ luật sư kiểm tra nghĩa vụ thông báo website thương mại điện tử |
| Badge DMCA | Trang trí, không có giá trị pháp lý hay SEO |
| Chính sách thanh toán / hoàn tiền / bảo hành | Chỉ cần khi bán gói hoặc công khai bảng giá |
| Chứng chỉ ISO 27001 / SOC 2 | Không có thì **không ghi**. Nếu đang làm thủ tục thì có thể ghi "đang triển khai" kèm mốc thời gian thật |

## 4. Quy tắc viết (áp dụng cho mọi trang trust)

- **Không ghi điều chưa làm.** Trang bảo mật nói sai còn hại hơn không có. Mâu thuẫn AI Gateway (`01`) là ví dụ.
- Mỗi trang chính sách ghi **ngày hiệu lực + ngày cập nhật**, và lưu bản cũ (như base.vn, fpt-is.com, fastwork.vn).
- Dẫn đúng căn cứ hiện hành: **Luật 91/2025/QH15, NĐ 356/2025/NĐ-CP**. Không dẫn NĐ 13/2023, vì nghị định này đã hết hiệu lực.
- Tách hai vai trò:
  - **website** (KimQ là bên kiểm soát): trang #1;
  - **sản phẩm** (KimQ là bên xử lý dữ liệu khách hàng): trang #9.
- NAP (tên, địa chỉ, điện thoại) và MST phải trùng từng chữ giữa footer, `/lien-he`, `/gioi-thieu` và `schema/home.jsonld`.
- Trang trust phải được index, có trong sitemap, render sẵn HTML, và có link từ footer trên mọi trang.
- Trang có `[CẦN ĐIỀN]` thì chưa được đưa lên.

## 5. Thứ tự đề xuất

| Tuần | Việc |
|---|---|
| W1 | #1, #2, #3, #4, #15 |
| W2 | #5, #6, #7 |
| W3–W4 | Chốt Q1 → #10 → #8 → #9 |
| Khi có điều kiện | #11–#14, #16–#18 |
