# 11 — Khối "Phù hợp với ai" cho 19 trang sản phẩm

Ngày: 13/11/2026 · Trạng thái: **Sẵn sàng, chờ Dev đưa lên** · Nguồn: nội dung live của từng trang (crawl 09/11, TinyFish 10/11)

Làm theo [`05-noi-dung-trang-san-pham.md`](05-noi-dung-trang-san-pham.md) §3, khối 1. **Không thêm thông tin mới.** Mỗi ý đều lấy từ mô tả đầu trang, FAQ hoặc giới hạn mà trang đã tự nêu; cột "Căn cứ" ghi rõ lấy từ đâu.

## Cách đặt lên trang

- **Vị trí:** cuối trang, ngay **trước** mục "Câu hỏi thường gặp".
- **Cấu trúc:** `H2` "Phù hợp với ai" → hai cột (điện thoại: hai khối chồng nhau): "Phù hợp khi" (3 ý, dấu ✓) và "Chưa phù hợp khi" (1–2 ý, dấu –). Hai tiêu đề con dùng `H3`.
- **Tiếng Anh:** `H2` "Who it's for", `H3` "A good fit if" / "Not the right fit if".
- **Link:** ý "Chưa phù hợp" nào gợi ý sản phẩm khác thì có link nội bộ tới sản phẩm đó (giữ người đọc trên site và tăng internal link).
- **Dữ liệu máy đọc:** [`phu-hop-voi-ai.json`](phu-hop-voi-ai.json) (cùng thư mục), có cả `vi` và `en`.
- **Không** đưa khối này vào schema FAQPage. Nó là nội dung trang thường.

Lưu ý riêng: **AI Gateway** chỉ có 1 ý "Chưa phù hợp" vì trang không nêu giới hạn nào khác. Câu về lưu nội dung câu hỏi **cố ý chưa viết**, chờ Q1.

## Tóm tắt

| # | Trang | Phù hợp | Chưa phù hợp | Link sang sản phẩm khác |
|---|---|---|---|---|
| 1 | `/san-pham/nhatdat` | 3 | 2 | — |
| 2 | `/san-pham/thong-tin-dau-thau` | 3 | 2 | — |
| 3 | `/san-pham/giai-phap-hoa-chat` | 3 | 2 | — |
| 4 | `/san-pham/kho-gia-vat-lieu` | 3 | 2 | — |
| 5 | `/san-pham/lims` | 3 | 2 | — |
| 6 | `/san-pham/benh-vien` | 3 | 2 | — |
| 7 | `/san-pham/tinh-luong-phong-kham` | 3 | 2 | `/san-pham/cham-cong-luong` |
| 8 | `/san-pham/kiem-soat-tai-chinh` | 3 | 2 | — |
| 9 | `/san-pham/cong-no` | 3 | 2 | — |
| 10 | `/san-pham/kho-mua-hang` | 3 | 2 | `/san-pham/kho-gia-vat-lieu` |
| 11 | `/san-pham/bao-gia-don-hang` | 3 | 2 | `/san-pham/chatbot-da-kenh` |
| 12 | `/san-pham/hoa-don-dau-vao` | 3 | 2 | — |
| 13 | `/san-pham/cham-cong-luong` | 3 | 2 | `/san-pham/tinh-luong-phong-kham` |
| 14 | `/san-pham/tro-ly-zalo` | 3 | 2 | `/san-pham/chatbot-da-kenh` |
| 15 | `/san-pham/chatbot-da-kenh` | 3 | 2 | — |
| 16 | `/san-pham/tu-dong-hoa` | 3 | 2 | — |
| 17 | `/san-pham/ai-studio` | 3 | 2 | — |
| 18 | `/san-pham/tro-ly-fanpage` | 3 | 2 | — |
| 19 | `/san-pham/ai-gateway` | 3 | 1 | — |

## 1. Nhà Đất — `/san-pham/nhatdat`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Công ty thẩm định giá cần tra giá đất theo từng đoạn đường, kèm tài sản so sánh có nguồn.
- ✓ Thẩm định viên và người rà hồ sơ muốn đối chiếu cách tính rồi xuất Excel theo mẫu đã triển khai.
- ✓ Doanh nghiệp đang làm hồ sơ tại Quận 4 hoặc Nhà Bè (TP.HCM), nơi đã có dữ liệu.

*Chưa phù hợp khi*
- – Cần chứng thư thẩm định giá hoặc kết quả thay cho thẩm định viên. Nhà Đất là dữ liệu tham chiếu; người thẩm định kiểm tra và quyết định.
- – Cần giá giao dịch đã xác nhận. Nguồn tham chiếu là tin rao bán; khu vực chưa có dữ liệu cần trao đổi để bổ sung.

<details><summary>English</summary>

*A good fit if*
- ✓ Valuation firms that need land prices by road segment, with sourced comparable properties.
- ✓ Appraisers and reviewers who want to check the calculation and export Excel in the templates already deployed.
- ✓ Firms working in District 4 or Nha Be (Ho Chi Minh City), where data is available.

*Not the right fit if*
- – You need a valuation certificate or a replacement for the appraiser. Nha Dat is reference data; the appraiser checks and decides.
- – You need confirmed transaction prices. The source is listing prices; other areas must be discussed before data is added.

</details>

Căn cứ: Dữ liệu hiện có tại Quận 4 và Nhà Bè · FAQ: không thay thẩm định viên, không phải chứng thư; nguồn là tin rao bán

## 2. Thông tin đấu thầu — `/san-pham/thong-tin-dau-thau`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Nhà thầu tìm gói thầu hợp với việc doanh nghiệp làm, lọc theo giá, đơn vị và thời gian còn lại.
- ✓ Doanh nghiệp tra kết quả và giá trúng của gói hoặc lô tương tự để tham khảo.
- ✓ Người tìm tài sản đấu giá cần theo dõi mốc hạn và kết quả.

*Chưa phù hợp khi*
- – Cần thay cho thông báo và hồ sơ mời thầu chính thức. Dữ liệu tổng hợp luôn phải đọc lại ở nguồn.
- – Cần cam kết bao phủ toàn bộ thị trường. Số liệu là bản ghi đã lưu, không phải số tin còn hạn.

<details><summary>English</summary>

*A good fit if*
- ✓ Contractors looking for tenders that match their work, filtered by value, procuring entity and time left.
- ✓ Businesses checking results and winning prices of similar packages or lots for reference.
- ✓ People looking for auctioned assets who need to track deadlines and results.

*Not the right fit if*
- – You need a substitute for the official notice and bidding documents. Aggregated data must always be checked at the source.
- – You need guaranteed full-market coverage. Figures are stored records, not the number of open opportunities.

</details>

Căn cứ: "Dành cho nhà thầu tìm gói phù hợp, doanh nghiệp tra kết quả và người tìm tài sản đấu giá" · FAQ nguồn, số liệu, giá trúng

## 3. Giải pháp phân phối hoá chất — `/san-pham/giai-phap-hoa-chat`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Doanh nghiệp phân phối hoá chất cần đơn, kho, giao vận, công nợ và tuân thủ trên cùng một dữ liệu.
- ✓ Doanh nghiệp đang khai báo hoá chất bằng tay, chứng từ nằm rải trong Zalo, email và Excel.
- ✓ Đội có thủ kho, tài xế, kinh doanh làm việc trên điện thoại và trong nhóm Zalo.

*Chưa phù hợp khi*
- – Muốn thay phần mềm kế toán. Hoá đơn và sổ sách vẫn ở phần mềm đang dùng.
- – Muốn hệ thống tự nộp khai báo hoặc tự chặn đơn. Tệp xuất đúng mẫu để người phụ trách kiểm rồi tải lên Cổng; đơn thiếu giấy tờ được cảnh báo, không bị chặn.

<details><summary>English</summary>

*A good fit if*
- ✓ Chemical distributors that need orders, warehouse, delivery, receivables and compliance on one dataset.
- ✓ Businesses still filing chemical declarations by hand, with documents scattered across Zalo, email and Excel.
- ✓ Teams whose storekeepers, drivers and sales staff work on phones and in Zalo groups.

*Not the right fit if*
- – You want to replace your accounting software. Invoices and books stay in your current software.
- – You want automatic filing or automatic order blocking. Files are exported in the portal template for staff to check and upload; orders missing documents are flagged, not blocked.

</details>

Căn cứ: FAQ: không thay phần mềm kế toán; tệp khai báo người phụ trách tải lên; không chặn việc bán

## 4. Kho, giữ hàng & giá vật liệu — `/san-pham/kho-gia-vat-lieu`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Nhà sản xuất và phân phối vật liệu xây dựng cần hứa hàng theo lô, theo hạn hẹn và giữ hàng có hạn.
- ✓ Kho hay gặp cảnh xe tới trước lấy mất hàng đã hứa cho đơn khác.
- ✓ Doanh nghiệp cần so giá công bố của các tỉnh, quy về đồng/m² chưa VAT.

*Chưa phù hợp khi*
- – Cần thay ERP hoặc phần mềm kế toán. Phần mềm chỉ lo hứa hàng, giữ hàng và xuất kho; dữ liệu nạp từ Excel hoặc hệ thống đang dùng.
- – Muốn trợ lý tự giữ hàng hay dời lịch. Trợ lý chỉ soạn đề xuất; người có quyền xem trước rồi duyệt.

<details><summary>English</summary>

*A good fit if*
- ✓ Building-material manufacturers and distributors that promise stock by lot and delivery date, with time-limited reservations.
- ✓ Warehouses where early trucks take stock already promised to other orders.
- ✓ Businesses comparing provincial published prices converted to VND/m² before VAT.

*Not the right fit if*
- – You need to replace your ERP or accounting software. It only handles promising, reserving and dispatching; data comes from Excel or your current system.
- – You want the assistant to reserve stock or reschedule on its own. It only drafts proposals; an authorised person previews and approves.

</details>

Căn cứ: Mô tả đầu trang: "Phần mềm kho cho nhà sản xuất và phân phối vật liệu xây dựng" · FAQ ERP, trợ lý

## 5. LIMS phòng thí nghiệm — `/san-pham/lims`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Phòng thí nghiệm đang theo dõi mẫu bằng sổ tay và Excel, cần biết mẫu ở ai và còn bao lâu tới hạn.
- ✓ Phòng phải chứng minh ai nhập, ai soát, ai duyệt từng con số khi khách hoặc đoàn đánh giá hỏi.
- ✓ Phòng có nhiều vai, từ lấy mẫu hiện trường, kiểm nghiệm, QA/QC tới lãnh đạo, và muốn có cổng cho khách hàng.

*Chưa phù hợp khi*
- – Muốn sửa hoặc xoá kết quả mà không để lại lịch sử. Mọi chỉnh sửa là bản đính chính kèm lý do; nhật ký không xoá được.
- – Muốn làm mọi việc chỉ trên điện thoại. Điện thoại dùng cho hàng đợi, lấy mẫu, nhận mẫu và tra tiến độ; nhập liệu dài làm trên máy tính.

<details><summary>English</summary>

*A good fit if*
- ✓ Laboratories tracking samples in notebooks and Excel that need to know who holds each sample and how long until it is due.
- ✓ Labs that must show who entered, reviewed and approved each figure when clients or auditors ask.
- ✓ Labs with many roles, from field sampling, testing and QA/QC to management, that want a client portal.

*Not the right fit if*
- – You want to edit or delete results without history. Every change is a correction with a reason; the log cannot be deleted.
- – You want to do everything on a phone. Phones cover queues, sampling, receiving and progress; long data entry is done on a computer.

</details>

Căn cứ: "Phòng thí nghiệm chạy bằng sổ tay và Excel" · FAQ đính chính, 14 vai, điện thoại

## 6. KimQ Health — `/san-pham/benh-vien`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Bệnh viện đang dùng HIS, muốn bệnh nhân tự đặt lịch và xem kết quả trên điện thoại, bớt cuộc gọi dồn về tổng đài.
- ✓ Ban giám đốc cần điều hành bằng số liệu: doanh thu, hồ sơ BHYT, lịch khám, dược và vật tư.
- ✓ Bệnh viện nhiều cơ sở cần một nền chung, mỗi cơ sở có nhận diện riêng.

*Chưa phù hợp khi*
- – Cần AI chẩn đoán hoặc tư vấn điều trị. Trợ lý chỉ giải thích thuật ngữ trên kết quả đã phát hành và khuyên trao đổi với bác sĩ.
- – Chưa có HIS hoặc muốn thay HIS. Dữ liệu gốc nằm trong HIS; lịch chỉ được xác nhận khi HIS phản hồi.

<details><summary>English</summary>

*A good fit if*
- ✓ Hospitals running a HIS that want patients to book and view results on their phones, with fewer calls to the switchboard.
- ✓ Hospital management that wants to run on data: revenue, health-insurance claims, appointments, pharmacy and supplies.
- ✓ Multi-site hospitals that need one platform with separate branding per site.

*Not the right fit if*
- – You need AI diagnosis or treatment advice. The assistant only explains terms on released results and advises talking to a doctor.
- – You have no HIS or want to replace it. Source data stays in the HIS; bookings are confirmed only when the HIS responds.

</details>

Căn cứ: Mô tả đầu trang (nối HIS, dữ liệu gốc ở HIS) · mục năm ứng dụng điều hành · FAQ AI không chẩn đoán, nhiều cơ sở

## 7. Tính lương tự động cho phòng khám — `/san-pham/tinh-luong-phong-kham`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Phòng khám tư có lương bác sĩ theo doanh thu, ca trực và điểm chất lượng; giải pháp thiết kế mẫu cho quy mô khoảng 100 nhân sự.
- ✓ Phòng khám dùng HIS (có API hoặc xuất được XML chuẩn QĐ 130) và MISA Kế toán, MISA AMIS Tiền lương.
- ✓ HCNS và kế toán đang mất nhiều ngày mỗi tháng để gom dữ liệu và lập bảng lương.

*Chưa phù hợp khi*
- – Doanh nghiệp không phải cơ sở y tế, lương không theo doanh thu. Phù hợp hơn: [Chấm công & lương](/san-pham/cham-cong-luong).
- – Muốn bỏ hẳn khâu con người. Người vẫn chấm điểm chất lượng chuyên môn và phê duyệt bảng lương; mức tự động 80–90% là mục tiêu thiết kế.

<details><summary>English</summary>

*A good fit if*
- ✓ Private clinics where doctors' pay depends on revenue, on-call shifts and quality scores; the reference design is a clinic of about 100 staff.
- ✓ Clinics using a HIS (with an API or XML export per Decision 130) and MISA Accounting / MISA AMIS Payroll.
- ✓ HR and accounting teams that spend days each month collecting data and building the payroll.

*Not the right fit if*
- – Your business is not a healthcare provider and pay is not revenue-based. Better fit: [Timesheet & payroll](/san-pham/cham-cong-luong).
- – You want no human step at all. People still score clinical quality and approve the payroll; 80–90% automation is a design target.

</details>

Căn cứ: "Phòng khám quy mô 100 nhân sự" · Kiến trúc (HIS, MISA AMIS Tiền lương, XML QĐ 130) · "Con người chỉ làm hai việc" · Mục tiêu thiết kế

## 8. Kiểm soát tài chính nội bộ — `/san-pham/kiem-soat-tai-chinh`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Chủ doanh nghiệp và người phụ trách kiểm soát nội bộ muốn thấy bất thường ngay trong kỳ, không đợi cuối năm.
- ✓ Doanh nghiệp cần mỗi tín hiệu có gói bằng chứng để giao việc khắc phục và theo tới khi đóng.
- ✓ Doanh nghiệp muốn giữ nguyên phần mềm kế toán; dữ liệu được nạp vào hoặc đọc ở chế độ chỉ đọc.

*Chưa phù hợp khi*
- – Cần phần mềm tự kết luận gian lận. Phần mềm chỉ nêu tín hiệu và gom bằng chứng; người có thẩm quyền kết luận.
- – Cần một phần mềm để ghi sổ kế toán. Sản phẩm chỉ kiểm tra và theo dõi khắc phục.

<details><summary>English</summary>

*A good fit if*
- ✓ Owners and internal-control staff who want to see anomalies within the period, not at year end.
- ✓ Businesses that need an evidence pack for each signal so remediation can be assigned and tracked to closure.
- ✓ Businesses that keep their accounting software; data is imported or read in read-only mode.

*Not the right fit if*
- – You want software that concludes fraud on its own. It only raises signals and gathers evidence; an authorised person decides.
- – You need software to keep the books. This product only checks and tracks remediation.

</details>

Căn cứ: H1 "Thấy bất thường ngay trong kỳ" · "Máy không tự kết luận sai phạm" · FAQ không thay phần mềm kế toán

## 9. Công nợ & dòng tiền — `/san-pham/cong-no`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Chủ doanh nghiệp muốn biết khách nào đang nợ, nợ bao lâu và tuần nào có thể thiếu tiền.
- ✓ Kế toán đang khớp sao kê với hoá đơn bằng tay, công nợ nằm trong nhiều file Excel.
- ✓ Nhân viên kinh doanh cần xem công nợ của khách mình phụ trách trên điện thoại.

*Chưa phù hợp khi*
- – Muốn hệ thống tự ghi sổ hoặc tự gửi thư nhắc khách. Mọi thao tác ghi cần người có quyền duyệt; thư nhắc là bản nháp.
- – Cần con số dòng tiền chắc chắn. Dòng tiền 13 tuần là dự báo theo hạn hoá đơn, không phải cam kết.

<details><summary>English</summary>

*A good fit if*
- ✓ Owners who want to know who owes them, for how long, and which week cash may run short.
- ✓ Accountants matching bank statements to invoices by hand, with receivables spread across Excel files.
- ✓ Sales staff who need to see their own customers' balances on their phones.

*Not the right fit if*
- – You want automatic posting or automatic reminder emails. Every write needs approval; reminders are drafts.
- – You need a guaranteed cash figure. The 13-week cash flow is a forecast based on invoice due dates, not a commitment.

</details>

Căn cứ: H1 + "Ba câu hỏi chủ doanh nghiệp nào cũng có" · FAQ không tự ghi sổ, dòng tiền là dự báo

## 10. Kho & mua hàng — `/san-pham/kho-mua-hang`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Doanh nghiệp có một hoặc nhiều kho, hay biết hết hàng khi khách đã hỏi.
- ✓ Người mua hàng cần đặt báo giá nhà cung cấp cạnh nhau để so chi phí thực: giá, thuế, hoá đơn, ngày giao.
- ✓ Doanh nghiệp muốn thấy hàng nằm lâu đang giữ vốn.

*Chưa phù hợp khi*
- – Muốn trợ lý tự đặt hàng. Trợ lý chỉ tạo đề xuất; đơn mua được ghi khi người có quyền xác nhận và quản lý duyệt.
- – Cần hứa hàng theo lô và hạn hẹn cho vật liệu xây dựng. Phù hợp hơn: [Kho, giữ hàng & giá vật liệu](/san-pham/kho-gia-vat-lieu).

<details><summary>English</summary>

*A good fit if*
- ✓ Businesses with one or more warehouses that find out about stock-outs only when customers ask.
- ✓ Buyers who need supplier quotes side by side to compare true cost: price, tax, invoice, delivery date.
- ✓ Businesses that want to see slow-moving stock tying up cash.

*Not the right fit if*
- – You want the assistant to place orders. It only drafts proposals; purchase orders are recorded after confirmation and manager approval.
- – You need to promise building materials by lot and delivery date. Better fit: [Inventory, reservations & material prices](/san-pham/kho-gia-vat-lieu).

</details>

Căn cứ: "Ba chỗ kho làm mất tiền" · FAQ nhiều kho, trợ lý không tự đặt hàng

## 11. Báo giá & đơn hàng — `/san-pham/bao-gia-don-hang`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Doanh nghiệp bán cho đại lý với giá theo nhóm khách và bậc số lượng.
- ✓ Quản lý muốn duyệt các khoản giảm giá sâu và đơn của khách vượt hạn mức công nợ.
- ✓ Đội bán hàng cần theo dõi đơn tới lúc giao xong, kể cả giao nhiều đợt.

*Chưa phù hợp khi*
- – Muốn ứng dụng tự gửi báo giá cho khách. Báo giá in A4 hoặc xuất Excel; người bán tự gửi.
- – Cần trả lời hỏi giá tự động cho khách trên Fanpage, Zalo OA, website. Phù hợp hơn: [Chatbot đa kênh](/san-pham/chatbot-da-kenh).

<details><summary>English</summary>

*A good fit if*
- ✓ Businesses selling to dealers with prices by customer group and quantity tier.
- ✓ Managers who want to approve deep discounts and orders from customers over their credit limit.
- ✓ Sales teams that track orders until fully delivered, including split deliveries.

*Not the right fit if*
- – You want the app to send quotes to customers. Quotes are printed on A4 or exported to Excel; salespeople send them.
- – You need automatic price answers on Fanpage, Zalo OA or your website. Better fit: [Omnichannel chatbot](/san-pham/chatbot-da-kenh).

</details>

Căn cứ: "Đại lý gọi hỏi giá" · FAQ giảm giá, hạn mức, không tự gửi

## 12. Hoá đơn đầu vào — `/san-pham/hoa-don-dau-vao`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Kế toán muốn bắt hoá đơn đầu vào sai (thuế suất, mã số thuế, cộng tiền, cách thanh toán) trước khi kê khai.
- ✓ Doanh nghiệp cần đối chiếu ba chiều: hoá đơn, đơn mua và phiếu nhập kho.
- ✓ Kế toán cần căn cứ pháp lý kèm từng lỗi để làm việc với người bán.

*Chưa phù hợp khi*
- – Cần tra trạng thái hoá đơn trên cổng thuế, xác thực chữ ký số hoặc nộp tờ khai. Hệ thống không làm các việc này.
- – Muốn thư gửi người bán tự gửi đi. Hệ thống chỉ soạn bản nháp; kế toán tự gửi từ email của mình.

<details><summary>English</summary>

*A good fit if*
- ✓ Accountants who want to catch wrong purchase invoices (VAT rate, tax ID, totals, payment method) before filing.
- ✓ Businesses that need three-way matching: invoice, purchase order and goods receipt.
- ✓ Accountants who need the legal basis for each error when dealing with suppliers.

*Not the right fit if*
- – You need invoice status checks on the tax portal, digital-signature verification or tax filing. The system does none of these.
- – You want letters to suppliers sent automatically. It only drafts them; accountants send from their own email.

</details>

Căn cứ: H1 "trước khi kê khai" · FAQ không tra cổng thuế, không xác thực chữ ký số, không nộp tờ khai; thư là bản nháp

## 13. Chấm công & lương — `/san-pham/cham-cong-luong`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Doanh nghiệp có máy chấm công xuất được Excel hoặc CSV, cuối tháng vẫn dò công bằng tay.
- ✓ Kế toán, nhân sự cần tính bảo hiểm và thuế TNCN theo quy định đang hiệu lực, có số hiệu văn bản.
- ✓ Doanh nghiệp muốn mỗi nhân viên xem phiếu lương của mình trên điện thoại, không gửi file lương chung.

*Chưa phù hợp khi*
- – Phòng khám, bệnh viện tư tính lương theo doanh thu, ca trực, đánh giá. Phù hợp hơn: [Tính lương tự động cho phòng khám](/san-pham/tinh-luong-phong-kham).
- – Cần sửa thẳng kỳ lương đã chốt. Kỳ đã chốt bị khoá; sai sót thành khoản điều chỉnh ở kỳ sau.

<details><summary>English</summary>

*A good fit if*
- ✓ Businesses whose time clocks export Excel or CSV but who still check attendance by hand at month end.
- ✓ Accounting and HR staff who need social insurance and personal income tax calculated under current rules, with document references.
- ✓ Businesses that want each employee to see only their own payslip on their phone.

*Not the right fit if*
- – Clinics or private hospitals paying by revenue, shifts and evaluations. Better fit: [Automated payroll for clinics](/san-pham/tinh-luong-phong-kham).
- – You need to edit a closed payroll period. Closed periods are locked; errors become adjustments in the next period.

</details>

Căn cứ: FAQ máy chấm công, quy định áp dụng, chốt kỳ · mục "Phòng khám, bệnh viện tư" trên trang

## 14. Trợ lý AI trên Zalo — `/san-pham/tro-ly-zalo`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Chủ cửa hàng nhỏ và kế toán đang nhận hoá đơn, bảng lương, câu hỏi qua Zalo mỗi ngày.
- ✓ Người cần trả lời về thuế, lao động kèm số hiệu văn bản, điều khoản và ngày hiệu lực.
- ✓ Doanh nghiệp cần chép ảnh, file thành bảng và soạn văn bản đúng thể thức mà không cài ứng dụng mới.

*Chưa phù hợp khi*
- – Muốn trợ lý tự gửi tin cho khách mà không qua duyệt. Việc quan trọng chỉ là bản nháp chờ người phụ trách bấm duyệt.
- – Cần trả lời khách hàng trên nhiều kênh như Fanpage, website, Zalo OA. Phù hợp hơn: [Chatbot đa kênh](/san-pham/chatbot-da-kenh).

<details><summary>English</summary>

*A good fit if*
- ✓ Small shop owners and accountants who receive invoices, payrolls and questions on Zalo every day.
- ✓ People who need tax and labour answers with document number, article and effective date.
- ✓ Businesses that want photos and files turned into tables and documents drafted in the proper format, with no new app to install.

*Not the right fit if*
- – You want the assistant to message customers without approval. Important actions are drafts waiting for a person to approve.
- – You need to answer customers across Fanpage, website and Zalo OA. Better fit: [Omnichannel chatbot](/san-pham/chatbot-da-kenh).

</details>

Căn cứ: "Một ngày của chị Lan, chủ cửa hàng nhỏ" · FAQ không cài ứng dụng, không tự gửi, trả lời kèm điều khoản

## 15. Chatbot đa kênh — `/san-pham/chatbot-da-kenh`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Doanh nghiệp nhận tin nhắn khách từ Fanpage, Instagram, Zalo OA, website, Telegram, email.
- ✓ Đội chăm sóc khách hàng ít người, nhiều câu hỏi lặp lại về giá, hướng dẫn, trạng thái đơn.
- ✓ Doanh nghiệp đã có bảng giá, chính sách, tài liệu để trợ lý trả lời theo.

*Chưa phù hợp khi*
- – Muốn chatbot tự xử lý hoàn tiền, khiếu nại. Các ca này luôn được chuyển cho người.
- – Chưa có tài liệu, bảng giá rõ ràng. Trợ lý không trả lời khi không tìm được căn cứ mà chuyển người.

<details><summary>English</summary>

*A good fit if*
- ✓ Businesses receiving customer messages from Fanpage, Instagram, Zalo OA, website, Telegram and email.
- ✓ Small customer-care teams facing many repeated questions on price, how-to and order status.
- ✓ Businesses that already have price lists, policies and documents for the assistant to follow.

*Not the right fit if*
- – You want the chatbot to handle refunds and complaints. These are always handed to a person.
- – You have no clear documents or price list. Without a source, the assistant hands over instead of answering.

</details>

Căn cứ: FAQ kênh kết nối, không bịa giá, chuyển người khi chạm tiền/khiếu nại/không có căn cứ · "Doanh nghiệp bạn chuẩn bị"

## 16. Tự động hoá hoá đơn & đối soát — `/san-pham/tu-dong-hoa`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Doanh nghiệp nhận thanh toán qua ngân hàng hoặc cổng thanh toán, cần xuất hoá đơn ngay khi tiền về, mỗi đơn đúng một hoá đơn.
- ✓ Kế toán đang dò khớp đơn hàng, tiền và hoá đơn mỗi ngày.
- ✓ Đội kỹ thuật muốn lỗi hệ thống được phát hiện sớm và có bản sửa kèm kiểm thử chờ duyệt.

*Chưa phù hợp khi*
- – Phần mềm hoá đơn điện tử đang dùng không có kết nối API.
- – Muốn AI tự sửa hệ thống hoặc đổi dữ liệu thật mà không qua người. Mặc định bản sửa chờ kỹ sư duyệt; đổi dữ liệu thật, cấu hình thanh toán không bao giờ tự làm.

<details><summary>English</summary>

*A good fit if*
- ✓ Businesses paid via bank transfer or payment gateway that need an invoice as soon as money arrives, exactly one per order.
- ✓ Accountants who match orders, payments and invoices every day.
- ✓ Engineering teams that want system errors caught early, with a tested fix waiting for approval.

*Not the right fit if*
- – Your e-invoice software has no API connection.
- – You want AI to change production systems or live data without a person. Fixes wait for an engineer by default; live data and payment settings are never changed automatically.

</details>

Căn cứ: Mô tả đầu trang · FAQ phần mềm hoá đơn có API, AI không tự sửa, không thay phần mềm đang dùng

## 17. AI Studio — `/san-pham/ai-studio`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Doanh nghiệp cần video dọc 30–60 giây cho TikTok, Reels, Zalo mà không phải quay hay thu âm.
- ✓ Đội marketing muốn nhiều phiên bản mở đầu cho cùng một chủ đề để thử trên từng kênh.
- ✓ Thương hiệu cần giọng đọc tiếng Việt có giấy phép thương mại.

*Chưa phù hợp khi*
- – Cần nhân bản giọng một người thật khi chưa có đồng ý của người đó.
- – Muốn video tự thêm số liệu hay lời khen của khách không có trong brief. Mọi thông tin trong kịch bản phải có nguồn từ brief.

<details><summary>English</summary>

*A good fit if*
- ✓ Businesses that need 30–60 second vertical videos for TikTok, Reels and Zalo without filming or recording.
- ✓ Marketing teams that want several openings for the same topic to test on each channel.
- ✓ Brands that need Vietnamese voices licensed for commercial use.

*Not the right fit if*
- – You need to clone a real person's voice without their consent.
- – You want the video to add figures or testimonials not in the brief. Every statement in the script must come from the brief.

</details>

Căn cứ: FAQ độ dài video, giọng có giấy phép, không tự thêm số liệu, nhiều phiên bản

## 18. Trợ lý Fanpage — `/san-pham/tro-ly-fanpage`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Cửa hàng, doanh nghiệp cần Fanpage có bài đều mỗi tuần nhưng không có người viết.
- ✓ Chủ trang muốn duyệt bài trên điện thoại; bài đã duyệt tự đăng đúng giờ.
- ✓ Doanh nghiệp đăng trên Facebook Page, kèm Instagram và Threads.

*Chưa phù hợp khi*
- – Muốn bài tự lên trang mà không qua duyệt. Chỉ người được giao quyền duyệt mới đưa bài vào lịch đăng.
- – Muốn trợ lý tự xử lý khiếu nại, đơn hàng trong bình luận. Các trường hợp này được chuyển cho người phụ trách.

<details><summary>English</summary>

*A good fit if*
- ✓ Shops and businesses that need regular weekly posts on their Fanpage but have no one to write them.
- ✓ Page owners who want to approve posts on their phones, with approved posts published on time.
- ✓ Businesses posting on Facebook Pages, plus Instagram and Threads.

*Not the right fit if*
- – You want posts published without approval. Only people with approval rights can schedule posts.
- – You want the assistant to handle complaints and orders in comments. These go to the person in charge.

</details>

Căn cứ: H1 "bạn chỉ việc duyệt" · FAQ không tự lên trang, kênh đăng, chuyển khiếu nại

## 19. KimQ AI Gateway — `/san-pham/ai-gateway`

**Phù hợp với ai**

*Phù hợp khi*
- ✓ Doanh nghiệp có nhiều phòng ban, ứng dụng và agent cùng dùng AI, cần biết mỗi phòng tiêu bao nhiêu.
- ✓ Đội IT cần đặt hạn mức, thu hồi key khi nhân viên nghỉ và tự chuyển dự phòng khi nhà cung cấp AI lỗi.
- ✓ Doanh nghiệp yêu cầu cài tại chỗ hoặc máy chủ đặt tại Việt Nam.

*Chưa phù hợp khi*
- – Ứng dụng gọi AI theo giao thức riêng, không theo các chuẩn API phổ biến. Cần trao đổi thêm, vì cổng chỉ thay được địa chỉ gọi cho ứng dụng theo chuẩn phổ biến.

<details><summary>English</summary>

*A good fit if*
- ✓ Businesses where many departments, apps and agents use AI and need to see what each department spends.
- ✓ IT teams that need budgets, key revocation when staff leave, and automatic failover when an AI provider fails.
- ✓ Businesses that require on-premise deployment or servers in Vietnam.

*Not the right fit if*
- – Your apps call AI through a proprietary protocol rather than common API standards. Talk to us first; the gateway is a drop-in only for apps using common standards.

</details>

Căn cứ: H1 + FAQ hạn mức, key nhân viên nghỉ, dự phòng, cài tại chỗ, ứng dụng theo chuẩn API phổ biến. **Chưa viết gì về lưu nội dung câu hỏi: chờ Q1.**

## Nghiệm thu

- [ ] Dev thêm component khối "Phù hợp với ai" đọc từ [`phu-hop-voi-ai.json`](phu-hop-voi-ai.json), đặt trước FAQ ở 19 trang
- [ ] Có trong HTML gốc sau khi prerender
- [ ] Link nội bộ trong ý "Chưa phù hợp" bấm được
- [ ] Owner rà nhanh 19 khối (mỗi khối 5 dòng) xem có ý nào không còn đúng với sản phẩm hiện tại
