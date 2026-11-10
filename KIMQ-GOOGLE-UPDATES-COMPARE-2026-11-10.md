# KimQ.tech × Google Search Updates (05–11/2026) — so sánh với audit

- Ngày: 2026-11-10
- Nguồn update: Search Engine Roundtable, category `google-updates` + trang chủ (fetch bằng TinyFish, 20 bài, 21/05 → 09/11/2026)
- Đối chiếu với: `KIMQ-AUDIT-TONG-HOP-2026-11-09.md` (đã recheck live 10/11: chưa có thay đổi)
- Giới hạn: KimQ chưa có dữ liệu GSC/GA4 → không đo được tác động thực tế của từng update, chỉ đánh giá rủi ro/mức sẵn sàng.

## 1. Timeline update (tóm tắt)

| Ngày | Sự kiện | Loại |
|---|---|---|
| 21/05 → 02/06 | **May 2026 Broad Core Update** (12 ngày, toàn cầu, mọi ngôn ngữ, "lớn hơn March 2026 core") | Confirmed |
| 28/05 | Google cảnh báo **mua/thao túng brand mentions để lên AI Overviews/AI Mode** — coi như paid links, bị phát hiện & bỏ qua | Guidance |
| 24–26/06 | June 2026 Spam Update | Confirmed |
| 16/07 | Gary Illyes: **lastmod sai thì thà bỏ**; chỉ đổi lastmod khi nội dung đổi đáng kể | Guidance |
| 18/08 | Google Search **sẽ hỗ trợ HTTP QUERY** (faceted nav), phải vài năm nữa | Guidance |
| 18–21/08 | **August 2026 Spam Update** — đánh mạnh site programmatic/scaled (1.3M URL, 250K URL), +82% URL bị đẩy khỏi top 100 | Confirmed |
| 19/08 | Google không rollout trước khi thông báo; biến động trước đó là chuyện khác | Guidance |
| 31/08 | Google xác nhận spam team vẫn đủ lực (nhắm "scaled listicles") | Guidance |
| 08/09 | Tài liệu **Regional differences in Search** (DMA: aggregator/supplier units, carousels) | Doc |
| 04–24/09 | Nhiều đợt biến động chưa xác nhận | Unconfirmed |
| 24/09 → 08/10 | **September 2026 Spam Update** — rollout 2 tuần (thay vì 2 ngày), 3 đợt, tác động "giống core" | Confirmed |
| 06/10 | GSC **Search generative AI control**: đã global; thêm thông báo khi property con override cha | Product |
| 16, 20–21, 24, 27/10 | Biến động mạnh chưa xác nhận; giới SEO **đang chờ core update tiếp theo** | Unconfirmed |
| 06/11 | AI Mode hỏi "Continue with this search?" (chống bot) | SERP |
| 09/11 | Biến động trở lại; tool tracking kém tin cậy, **GSC performance report lỗi với nhiều site** | Unconfirmed |

## 2. Ma trận so sánh update ↔ KimQ

| Update / guidance | Google nhắm vào | Hiện trạng KimQ (audit) | Rủi ro | Hành động |
|---|---|---|---|---|
| **Core update (May + core sắp tới)** | Nội dung hữu ích, đáng tin, trải nghiệm trang | Raw HTML giống hệt mọi URL ("KimQ Studio", 2 từ); render JS mới có nội dung. Không About/team, không case study, claim mâu thuẫn (AI Gateway "không lưu" vs "mặc định lưu sau khi che") ; LCP mobile ~7s, score 54 | **Cao** | P0: SSR/prerender, build production; sửa claim AI Gateway; thêm About/đội ngũ/pháp nhân, case study, tác giả cho 19 guide; tối ưu hero LCP |
| **Spam updates (Aug, Sep)** | Scaled/programmatic content, thin pages, spam policies | 40 URL, nội dung viết tay; không thấy scaled content. Nhưng 19 trang sản phẩm khá cùng template + soft-404 (URL bất kỳ trả 200 cùng nội dung) | **Thấp–TB** | Trả 404 thật cho URL lạ; làm khác biệt nội dung 19 trang sản phẩm (use case, số liệu, FAQ riêng); không bung programmatic page hàng loạt theo plan 90 ngày |
| **Lastmod guidance** | lastmod sai → Google bỏ tin | **Không có sitemap (404)**, robots.txt không có `Sitemap:` | TB (thiếu sitemap) | Tạo `sitemap.xml` 39 URL canonical (bỏ redirect `/san-pham/tuan-thu-hoa-chat`); lastmod = ngày sửa nội dung thật hoặc **bỏ hẳn**; không auto = ngày build |
| **Manipulating mentions for AI** | Mua/tự động hoá mentions để lên AI Overviews/AI Mode/LLM | XLSX GEO plan có hạng mục mentions/backlink; T20 đã ghi tránh mua link | TB (nếu thực thi sai) | Ghi rõ trong plan: **không mua mention/listicle/PR farm**; chỉ PR thật, đối tác, case study, cộng đồng; thống nhất tên brand (KimQ Studio / KimQ / CTCP KimQ — "KimQ AI Tech" chưa có trên site) |
| **Search generative AI control (GSC)** | Cho chủ site bật/tắt sử dụng trong AI features của Search | Chưa verify GSC (không thấy TXT google-site-verification). robots chặn Google-Extended, GPTBot, ClaudeBot, CCBot…; cho OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot | TB | Verify GSC (Domain property) → quyết định chính sách AI control **nhất quán** với robots (Cloudflare managed). Nếu mục tiêu GEO: cân nhắc bỏ chặn Google-Extended; chặn Google-Extended không chặn AI Overviews nhưng ảnh hưởng Gemini |
| **Volatility Oct–Nov / core sắp tới** | — | Site mới, chưa baseline | — | Verify GSC + GA4 **trước** core update kế tiếp để có baseline; ghi annotate ngày update |
| **Không rollout trước khi announce** | — | — | — | Khi phân tích sụt/tăng, đối chiếu đúng ngày Search Status Dashboard |
| **HTTP QUERY** | Faceted nav/filter | Site không có faceted nav | Không | Không cần làm gì; giữ URL slug gọn như hiện tại |
| **Regional differences (DMA)** | VSS/CSS/supplier units ở EU | KimQ nhắm VN, B2B | Không | Theo dõi; không áp dụng |
| **AI Mode "continue" / ads in AI Mode** | Chống bot; thương mại hoá AI Mode | Không liên quan kỹ thuật | Thấp | GEO nên đo bằng prompt test thủ công + GSC, không dựa tool scrape |
| **GSC performance report lỗi (09/11)** | — | Chưa có GSC | — | Khi có GSC, dùng thêm GA4/log server để đối chiếu |

## 3. Mức độ "sẵn sàng" của KimQ với hướng đi của Google

| Tín hiệu Google nhấn mạnh 2026 | KimQ | Ghi chú |
|---|---|---|
| Nội dung crawl được không phụ thuộc JS | ❌ | Raw HTML trống; dev build React (`jsxDEV` ×143, path `/app/client/src` ×140 trong bundle) |
| Page experience (CWV mobile) | ❌ | LCP ~7.0s home, ~4.0s product; TBT cao |
| Sitemap + lastmod đúng | ❌ | Không có sitemap |
| Status code đúng (404) | ❌ | Soft-404 |
| Structured data | ❌ | 0 JSON-LD / 40 URL |
| Tín hiệu E-E-A-T / pháp nhân | ⚠️ | Có tên công ty, thiếu About/team/case study; claim mâu thuẫn |
| Không scaled/spam content | ✅ | 40 URL viết tay |
| Mentions tự nhiên, không mua | ✅ (hiện) | Cần giữ trong plan 90 ngày |
| 1 H1, title/meta unique, mobile, a11y, link không gãy | ✅ | Sau render |
| GSC + AI control | ❌ | Chưa verify |

## 4. Ưu tiên trước core update kế tiếp (dự kiến sớm)

1. **Build production + SSR/prerender** 40 URL (title/meta/H1/canonical/JSON-LD có trong HTML gốc).
2. **Sửa mâu thuẫn claim AI Gateway** + thêm trang About/đội ngũ/pháp nhân, tác giả & ngày cập nhật cho guide.
3. **Sitemap.xml** (lastmod thật hoặc bỏ) + `Sitemap:` trong robots + **404 thật**.
4. **Verify GSC + GA4** để có baseline; thiết lập Search generative AI control khớp chính sách robots.
5. **LCP**: hero-turtle.webp responsive (`srcset`, ~400px mobile), preload, giảm JS.
6. **Schema**: Organization, WebSite, Product/SoftwareApplication, Article, BreadcrumbList, FAQPage (nếu có FAQ hiển thị).
7. **Plan GEO**: cấm mua mentions; tập trung PR/đối tác/case study thật, thống nhất tên brand.

## 5. Nguồn (SER)

- https://www.seroundtable.com/google-search-ranking-volatility-november-9th-42486.html
- https://www.seroundtable.com/google-search-ranking-volatility-42379.html
- https://www.seroundtable.com/google-search-ranking-volatility-chatter-42317.html
- https://www.seroundtable.com/google-september-2026-spam-update-done-42235.html
- https://www.seroundtable.com/google-september-2026-spam-update-42163.html
- https://www.seroundtable.com/google-search-generative-ai-control-add-42236.html
- https://www.seroundtable.com/google-regional-differences-in-search-experience-42044.html
- https://www.seroundtable.com/google-search-spam-team-fighting-41980.html
- https://www.seroundtable.com/google-rollout-search-updates-announcement-41901.html
- https://www.seroundtable.com/google-august-2026-spam-update-41895.html
- https://www.seroundtable.com/google-support-http-query-method-41882.html
- https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html
- https://www.seroundtable.com/google-may-2026-core-update-done-41435.html
- https://www.seroundtable.com/google-inauthentic-mentions-ai-41401.html
- https://www.seroundtable.com/google-ai-mode-continue-with-this-search-42475.html
- https://www.seroundtable.com/recap-11-09-2026-42485.html
