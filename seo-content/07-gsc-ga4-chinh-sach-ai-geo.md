# 07 — Search Console, GA4, chính sách bot AI và quy tắc GEO/off-page

Trạng thái: **Checklist + đề xuất**. Phần cài đặt cần người có quyền DNS/Cloudflare và tài khoản Google của công ty.

## 1. Search Console và GA4: làm ngay, trước core update kế tiếp

Từ 16/10 đến 09/11/2026 có nhiều đợt biến động, và giới SEO đang chờ core update tiếp theo (SER, 21/10 và 09/11). KimQ chưa có dữ liệu nào để so sánh trước/sau.

| Bước | Ai | Ghi chú |
|---|---|---|
| Tạo property **Domain** `kimq.tech` trong Search Console bằng tài khoản Google của công ty (không dùng tài khoản cá nhân) | SEO | Domain property bao cả http/https/www |
| Thêm bản ghi TXT `google-site-verification=…` vào DNS Cloudflare | Dev | Hiện chưa có TXT nào của Google |
| Thêm 2–3 người quản trị (Owner + SEO + Dev) | SEO | Tránh mất quyền khi nhân sự nghỉ |
| Nộp `https://kimq.tech/sitemap.xml` | SEO | **Sau khi** Dev tạo sitemap. Hiện trả 404 |
| Kiểm tra URL: `/`, 1 trang sản phẩm, 1 trang hướng dẫn → xem "HTML đã hiển thị" | SEO | Để xác nhận Google render được SPA. Làm lại sau khi Dev prerender |
| Tạo GA4 property, gắn thẻ, đánh dấu chuyển đổi **gửi form "Quan tâm"** và **bấm "Mở nhóm Zalo"** | Dev + SEO | Không gửi dữ liệu cá nhân trong form lên GA4 |
| Liên kết GA4 ↔ Search Console | SEO | |

### Số liệu cần lưu ngay khi có 28 ngày dữ liệu đầu

| Chỉ số | Nơi lấy | Ghi |
|---|---|---|
| Số trang đã index / chưa index, kèm lý do | Search Console › Trang | Đặc biệt "Đã thu thập – chưa index" và "Soft 404" |
| Clicks, impressions, CTR, vị trí theo trang | Search Console › Hiệu suất | Xuất CSV |
| Truy vấn có chữ "kimq" và không có | Search Console › Hiệu suất | Tách branded / non-branded |
| Core Web Vitals (CrUX) | Search Console › Trải nghiệm | Lighthouse lab hiện cho LCP ~7s trên trang chủ |
| Phiên organic, form gửi, bấm Zalo | GA4 | |

Từ 09/11/2026, báo cáo hiệu suất của Search Console đang lỗi với nhiều site (SER). Nên đối chiếu thêm với GA4.

### Nhật ký update để đánh dấu lên biểu đồ

| Ngày | Sự kiện |
|---|---|
| 21/05 → 02/06/2026 | May 2026 core update |
| 24 → 26/06/2026 | June 2026 spam update |
| 18 → 21/08/2026 | August 2026 spam update |
| 24/09 → 08/10/2026 | September 2026 spam update |
| 16, 20–21, 24, 27/10 và 08–09/11/2026 | Biến động chưa xác nhận |
| [ngày deploy] | Prerender + sitemap + 404 thật (ghi khi Dev làm xong) |

## 2. Chính sách bot AI: cần Owner chốt (Q3)

`robots.txt` hiện do **Cloudflare quản lý**:
- Dòng `Content-Signal: search=yes,ai-train=no,use=reference`.
- **Chặn**: GPTBot, ClaudeBot, anthropic-ai, Claude-Web, Google-Extended, GoogleOther, CCBot, Applebot-Extended, Amazonbot, Bytespider, meta-externalagent, cohere-ai, MistralAI-Training, Diffbot, Baiduspider, PetalBot…
- **Không chặn** bot tìm kiếm/truy xuất: Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot.

| Phương án | Ý nghĩa | Hợp khi |
|---|---|---|
| **A. Giữ nguyên** (khuyến nghị tạm thời) | Vẫn được tìm và trích dẫn trong Google, ChatGPT search, Perplexity, Claude search; không cho dùng nội dung để huấn luyện | Ưu tiên bảo vệ nội dung |
| B. Bỏ chặn Google-Extended, GPTBot, ClaudeBot | Cho phép dùng để huấn luyện, tăng khả năng mô hình "biết" KimQ | Ưu tiên hiện diện tối đa trong AI |

Google-Extended chỉ kiểm soát việc dùng nội dung cho Gemini và huấn luyện. Nó **không** chặn Googlebot hay việc hiển thị trong Google Search. Dù chọn A hay B:
- Thêm dòng `Sitemap: https://kimq.tech/sitemap.xml` (Dev, trong cấu hình Cloudflare).
- Sau khi verify Search Console, mở trang **Search generative AI control** và đặt **cùng chính sách** với robots. Google đã mở công cụ này toàn cầu và có thông báo khi property con ghi đè cài đặt của property cha (SER, 06/10/2026). Chỉ dùng property Domain để tránh cài đặt chồng nhau.

## 3. Quy tắc GEO và off-page (đưa vào kế hoạch 90 ngày)

Ngày 28/05/2026, Google cảnh báo rằng mua hoặc thao túng việc nhắc tên thương hiệu để lên AI Overviews/AI Mode bị xử lý **như mua link**: bị phát hiện, bị bỏ qua và có thể phản tác dụng.

**Không làm**
- Mua bài PR, listicle "top phần mềm", hay gói "AI mentions" tự động.
- Đăng hàng loạt câu trả lời nhắc KimQ trên forum hoặc Reddit bằng nhiều tài khoản.
- Mua backlink, trao đổi link hàng loạt.
- Tạo trang theo địa phương hay biến thể từ khoá hàng loạt.

**Làm**
- Case study thật, có sự đồng ý công khai của khách (task T16).
- Hồ sơ nhất quán: LinkedIn công ty, Facebook, Zalo OA, YouTube (video KimQ Studio), Masothue/Trang vàng. Dùng cùng tên "KimQ", tên pháp nhân, địa chỉ và website. Sau đó thêm vào `sameAs` (`schema/home.jsonld`).
- Bài chuyên môn của người thật trong đội (byline, file 06) trên các kênh ngành: kế toán, y tế, thẩm định.
- Đối tác tích hợp có trang liệt kê thật (ví dụ đối tác HIS, MISA, ngân hàng) nếu được phép.

## 4. Kiểm thử GEO (22 câu hỏi trong sheet GEO Test Set)

**Chưa chạy, và nên đợi Dev prerender xong.** Hiện HTML gốc của mọi URL gần như trống, nên kết quả bây giờ chỉ phản ánh lỗi kỹ thuật.

Khi chạy, mỗi câu hỏi test trên Google AI Mode/AI Overviews, ChatGPT search, Perplexity, Gemini. Ghi lại: có nhắc KimQ không, có đúng không, URL được trích dẫn, ngày chạy. Chạy lại mỗi 2 tuần.
