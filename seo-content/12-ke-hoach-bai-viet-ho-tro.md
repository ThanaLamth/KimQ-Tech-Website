# 12 — Kế hoạch 6 bài viết hỗ trợ (task T17)

Ngày: 13/11/2026 · Trạng thái: **Kế hoạch sẵn sàng, chưa viết bài** · Người làm: SEO/Content · Rà chuyên môn: theo từng bài

## Vì sao cần

Trang sản phẩm phục vụ người **đã biết mình cần phần mềm**. Người đang tìm hiểu vấn đề ("đối soát công nợ là gì", "hóa đơn sai thuế suất xử lý thế nào") hiện chưa có trang nào của KimQ Tech để đọc. Mỗi bài dưới đây trả lời một câu hỏi có thật, rồi dẫn về đúng trang sản phẩm.

## Cách chọn chủ đề

- **Nhu cầu tìm kiếm:** lấy từ Google gợi ý tìm kiếm (autocomplete, `hl=vi`, `gl=vn`) ngày 13/11/2026. Gợi ý xuất hiện nghĩa là **có người tìm**, nhưng **chưa có số lượt tìm**. Kiểm lại bằng Google Keyword Planner hoặc Search Console sau 28 ngày có dữ liệu (task T22), rồi đổi thứ tự nếu cần.
- **Khớp sản phẩm:** chỉ chọn chủ đề mà trang sản phẩm đã có sẵn kiến thức để dẫn chứng.
- **Không làm:** bài theo tỉnh/quận, bài biến thể từ khoá hàng loạt, bài viết bằng AI không người rà (spam update 08–09/2026, xem `07` §3).

## Danh sách

| # | Bài | Từ khoá chính | Trang đích | Rà chuyên môn | Ưu tiên | Chờ gì |
|---|---|---|---|---|---|---|
| 1 | Hóa đơn đầu vào sai thuế suất: kiểm tra và xử lý | hóa đơn sai thuế suất | `/san-pham/hoa-don-dau-vao` | Kế toán / tư vấn thuế | P1 | — |
| 2 | Đối soát công nợ là gì, cách làm và mẫu bảng | đối soát công nợ | `/san-pham/cong-no` | Kế toán | P1 | — |
| 3 | Điểm đặt hàng lại (ROP) và tồn kho an toàn | điểm đặt hàng lại | `/san-pham/kho-mua-hang` | Người phụ trách kho / mua hàng | P1 | — |
| 4 | Chatbot Zalo OA: chuẩn bị gì, khi nào chuyển người | chatbot zalo oa | `/san-pham/chatbot-da-kenh` | Product | P2 | — |
| 5 | AI Gateway là gì, doanh nghiệp có cần không | ai gateway là gì | `/san-pham/ai-gateway` | CTO | P2 | **Q1** (mục dữ liệu) |
| 6 | LIMS là gì: phần mềm quản lý phòng thí nghiệm | lims là gì | `/san-pham/lims` | Trưởng phòng thí nghiệm / QA | P2 | — |

Nhịp đề xuất: **1 bài / 2 tuần**. Chất lượng trước số lượng (ghi chú T17 trong XLSX).

## Điều kiện kỹ thuật trước khi đăng (Dev)

Site **chưa có mục bài viết**. Cần:
- Route `/kien-thuc` (danh sách) và `/kien-thuc/<slug>` (bài), có trong HTML gốc (prerender, xem tracker A2).
- Schema `Article` (tác giả `Person`, người rà, `datePublished`, `dateModified` thật) + `BreadcrumbList`.
- Thêm vào `sitemap.xml` với `lastmod` thật.
- Byline và ngày cập nhật theo mẫu `06-byline-ngay-cap-nhat-huong-dan.md`.
- Ở trang sản phẩm tương ứng: thêm link "Đọc thêm" tới bài.

---

## Bài 1 — Hóa đơn đầu vào sai thuế suất: kiểm tra và xử lý

- **Title (≤60):** `Hóa đơn sai thuế suất: điều chỉnh hay thay thế? | KimQ Tech` (59)
- **Slug:** `/kien-thuc/hoa-don-sai-thue-suat`
- **Nhóm từ khoá (autocomplete 13/11):** hóa đơn sai thuế suất · hóa đơn sai thuế suất điều chỉnh hay thay thế · hóa đơn sai thuế suất xử lý thế nào · hóa đơn đầu vào không hợp lệ · xử lý hóa đơn đầu vào không hợp lệ · kiểm tra hóa đơn đầu vào
- **Ý định tìm kiếm:** kế toán vừa phát hiện hóa đơn sai, cần biết làm gì tiếp.
- **Dàn ý:**
  1. Trả lời ngắn ngay đầu bài: sai thuế suất thì xử lý thế nào (2–3 câu, kế toán rà).
  2. Các lỗi hay gặp ở hóa đơn đầu vào: thuế suất không hợp lệ, sai mã số thuế, cộng tiền sai, thanh toán không dùng tiền mặt.
  3. Điều chỉnh hay thay thế: khi nào dùng cách nào (dẫn văn bản, điều khoản).
  4. Hệ quả nếu không xử lý trước khi kê khai: khấu trừ thuế GTGT.
  5. Mẫu thư đề nghị người bán điều chỉnh (dạng văn bản để kế toán chép).
  6. Kiểm tra cả kỳ thay vì từng tờ: đối chiếu ba chiều với đơn mua, phiếu nhập.
  7. FAQ 3–4 câu.
- **Có thể dùng từ trang sản phẩm:** ví dụ hóa đơn thuế suất 12% không hợp lệ theo Điều 9 Luật Thuế GTGT 48/2024/QH15; NĐ 181/2025/NĐ-CP Điều 26 (thanh toán không dùng tiền mặt); nguyên tắc "kiểm theo văn bản có hiệu lực vào ngày lập hóa đơn".
- **Link:** `/san-pham/hoa-don-dau-vao` (CTA chính), `/san-pham/hoa-don-dau-vao/huong-dan`, `/san-pham/kho-mua-hang` (phiếu nhập).
- **Lưu ý YMYL:** mọi kết luận về điều chỉnh/thay thế phải ghi số hiệu văn bản, điều khoản, ngày hiệu lực và do kế toán hoặc tư vấn thuế duyệt trước khi đăng.

## Bài 2 — Đối soát công nợ là gì, cách làm và mẫu bảng

- **Title:** `Đối soát công nợ là gì? Cách làm và mẫu bảng | KimQ Tech` (56)
- **Slug:** `/kien-thuc/doi-soat-cong-no`
- **Nhóm từ khoá:** đối soát công nợ là gì · cách đối soát công nợ · mẫu đối soát công nợ · mẫu bảng đối soát công nợ · file đối soát công nợ · bảng đối soát công nợ
- **Ý định:** định nghĩa + cách làm + tải mẫu.
- **Dàn ý:**
  1. Định nghĩa ngắn (2 câu) và khác gì với "đối chiếu công nợ".
  2. Khi nào cần đối soát: cuối tháng, trước khi chốt sổ, khi khách thanh toán lệch.
  3. Các bước: gom hóa đơn phải thu → khớp sao kê ngân hàng → xác định chênh lệch → gửi biên bản cho khách.
  4. **Mẫu bảng đối soát công nợ (file Excel tải về)** — tài sản thu hút link tự nhiên.
  5. Lỗi hay gặp: chuyển khoản thiếu nội dung, một khoản trả cho nhiều hóa đơn.
  6. Tuổi nợ và dòng tiền: vì sao đối soát xong vẫn cần xem nợ quá hạn.
  7. FAQ.
- **Có thể dùng từ trang sản phẩm:** đọc nội dung chuyển khoản để gợi ý hóa đơn khớp; chia tiền khách nợ theo số ngày trễ hạn; nhập sao kê Excel/CSV không trùng; dòng tiền 13 tuần là dự báo, không phải cam kết.
- **Link:** `/san-pham/cong-no`, `/san-pham/cong-no/huong-dan`, `/san-pham/tu-dong-hoa` (đối soát đơn – tiền – hóa đơn tự động).
- **Việc kèm theo:** soạn file `mau-doi-soat-cong-no.xlsx` (Content làm, kế toán duyệt).

## Bài 3 — Điểm đặt hàng lại (ROP) và tồn kho an toàn

- **Title:** `Điểm đặt hàng lại (ROP): công thức và ví dụ | KimQ Tech` (55)
- **Slug:** `/kien-thuc/diem-dat-hang-lai-rop`
- **Nhóm từ khoá:** điểm đặt hàng lại rop · điểm đặt hàng lại là gì · công thức điểm đặt hàng lại · tính điểm đặt hàng lại · tồn kho an toàn là gì · tồn kho an toàn công thức · mức tồn kho an toàn
- **Ý định:** học công thức, có ví dụ tính tay.
- **Dàn ý:**
  1. ROP là gì (1 câu) + công thức tổng quát: nhu cầu trong thời gian chờ hàng + tồn kho an toàn.
  2. Tồn kho an toàn: vì sao cần, công thức theo mức phục vụ.
  3. Ví dụ tính từng bước với số liệu giả định (ghi rõ là ví dụ).
  4. Cách chọn dữ liệu: lấy bao nhiêu ngày lịch sử xuất, thời gian giao của nhà cung cấp, trừ hàng đang về.
  5. Sai lầm hay gặp: dùng một ROP cho mọi kho, quên hàng đang về.
  6. FAQ.
- **Có thể dùng từ trang sản phẩm:** ứng dụng tính ROP từ lịch sử xuất 90 ngày và thời gian giao của nhà cung cấp, tồn an toàn ở mức phục vụ 95%, đã trừ hàng đang về; theo dõi riêng từng kho.
- **Link:** `/san-pham/kho-mua-hang`, `/san-pham/kho-mua-hang/huong-dan`, `/san-pham/kho-gia-vat-lieu` (cho ngành vật liệu).
- **Gợi ý thêm (không bắt buộc):** ô tính ROP nhỏ ngay trong bài.

## Bài 4 — Chatbot Zalo OA: chuẩn bị gì, khi nào chuyển người

- **Title:** `Chatbot Zalo OA cho doanh nghiệp: chuẩn bị gì? | KimQ Tech` (58)
- **Slug:** `/kien-thuc/chatbot-zalo-oa`
- **Nhóm từ khoá:** chatbot zalo oa · chatbot zalo oa là gì · tạo chatbot zalo oa · chatbot ai zalo oa · kịch bản chatbot zalo oa · hướng dẫn chatbot zalo oa
- **Ý định:** doanh nghiệp đang cân nhắc làm chatbot.
- **Dàn ý:**
  1. Chatbot Zalo OA làm được gì, không nên làm gì.
  2. Chuẩn bị: tài khoản OA, bảng giá, chính sách, danh sách câu hỏi hay gặp, người nhận ca chuyển.
  3. Kịch bản: loại câu tự trả lời, loại câu tra hệ thống, loại câu chuyển người (tiền, hoàn tiền, khiếu nại).
  4. Câu chào phải nói rõ là trợ lý tự động; khách nhắn "gặp người" là được chuyển.
  5. Bảo vệ dữ liệu khách trong chat.
  6. Gộp nhiều kênh (Fanpage, website) vào một hộp thư.
  7. FAQ.
- **Có thể dùng từ trang sản phẩm:** toàn bộ mục "Doanh nghiệp bạn chuẩn bị", quy tắc chuyển người, tra đơn chỉ trả mã và trạng thái, có nhật ký.
- **Link:** `/san-pham/chatbot-da-kenh`, `/san-pham/chatbot-da-kenh/huong-dan`, `/san-pham/tro-ly-zalo` (trợ lý nội bộ trong Zalo, khác chatbot cho khách).

## Bài 5 — AI Gateway là gì, doanh nghiệp có cần không

- **Title:** `AI Gateway là gì? Khi nào doanh nghiệp cần | KimQ Tech` (53)
- **Slug:** `/kien-thuc/ai-gateway-la-gi`
- **Nhóm từ khoá:** ai gateway · ai gateway là gì. Kết quả gợi ý toàn tên sản phẩm nước ngoài (Cloudflare, Vercel, Azure, Databricks), nên bài cần **trung lập, có so sánh cách tiếp cận**, không chê đối thủ.
- **Ý định:** IT/CTO tìm hiểu khái niệm.
- **Dàn ý:**
  1. Định nghĩa 2 câu.
  2. Dấu hiệu cần: nhiều phòng ban giữ key riêng, không biết tổng chi phí, nhân viên nghỉ vẫn giữ key, một nhà cung cấp lỗi làm dừng ứng dụng.
  3. Chức năng chính: key ảo, hạn mức, định tuyến, dự phòng, nhật ký.
  4. Cài tại chỗ hay dịch vụ: tiêu chí chọn.
  5. **Dữ liệu và nhật ký: lưu gì, không lưu gì → viết sau khi chốt Q1.**
  6. FAQ.
- **Link:** `/san-pham/ai-gateway`, `/san-pham/ai-gateway/huong-dan`, `/chinh-sach-du-lieu-ai` (khi đã đăng).
- **Chờ:** Q1. Không đăng trước khi trang sản phẩm và trang hướng dẫn hết mâu thuẫn.

## Bài 6 — LIMS là gì: phần mềm quản lý phòng thí nghiệm

- **Title:** `LIMS là gì? Phần mềm quản lý phòng thí nghiệm | KimQ Tech` (57)
- **Slug:** `/kien-thuc/lims-la-gi`
- **Nhóm từ khoá:** lims là gì · phần mềm lims là gì · hệ thống lims là gì · phần mềm quản lý phòng thí nghiệm · phần mềm quản lý phòng thí nghiệm lims
- **Ý định:** trưởng phòng thí nghiệm hoặc QA tìm hiểu trước khi chọn phần mềm.
- **Dàn ý:**
  1. Định nghĩa + LIMS khác gì Excel/sổ tay.
  2. Vòng đời một mẫu: từ lấy mẫu tới phiếu kết quả.
  3. Truy vết: ai nhập, ai soát, ai duyệt; sửa số liệu bằng bản đính chính.
  4. QC chặn kết quả khi mẻ chưa đạt.
  5. Tiêu chí chọn LIMS: vai trò, mẫu phiếu riêng, cổng khách hàng, dùng trên điện thoại.
  6. FAQ.
- **Có thể dùng từ trang sản phẩm:** 14 vai trò; phiếu .docx theo mẫu phòng; phát hành lại bằng phiếu thay thế, không xoá phiếu cũ.
- **Link:** `/san-pham/lims`, `/san-pham/lims/huong-dan`.
- **Lưu ý:** không nhắc tiêu chuẩn công nhận (ví dụ ISO/IEC 17025) trừ khi Product xác nhận sản phẩm hỗ trợ cụ thể phần nào.

---

## Chủ đề dự phòng (chưa xếp lịch)

| Chủ đề | Gợi ý tìm kiếm có | Trang đích | Vì sao để sau |
|---|---|---|---|
| Kiểm soát nội bộ là gì | kiểm soát nội bộ là gì, theo COSO | `/san-pham/kiem-soat-tai-chinh` | Cạnh tranh với trang ngân hàng, trường đại học |
| Khai báo hóa chất ở đâu, chuẩn bị gì | khai báo hóa chất, khai báo hóa chất theo nghị định mới | `/san-pham/giai-phap-hoa-chat` | Pháp lý, cần người am hiểu ngành rà |
| Tính thuế TNCN 2026 theo biểu 5 bậc | tính thuế tncn 2026 | `/san-pham/cham-cong-luong` | Rất cạnh tranh, YMYL cao |
| Phần mềm thẩm định giá đất | phần mềm thẩm định giá đất | `/san-pham/nhatdat` | Dữ liệu mới có 2 khu vực |

## Mỗi bài phải có (checklist)

- [ ] Trả lời thẳng câu hỏi trong 2–3 câu đầu (phục vụ cả AI Overviews).
- [ ] Byline tác giả + người rà chuyên môn + ngày cập nhật thật.
- [ ] Số liệu, điều khoản có nguồn; ví dụ ghi rõ là ví dụ.
- [ ] 2–3 link nội bộ tới sản phẩm và hướng dẫn; 1 CTA cuối bài.
- [ ] Title ≤ 60, meta 110–160, 1 H1, ảnh có alt.
- [ ] Schema Article + Breadcrumb; có trong sitemap.
- [ ] Không chép nội dung từ trang khác; không đăng bản AI viết khi chưa người rà.
