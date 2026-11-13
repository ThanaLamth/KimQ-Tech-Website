# 08 — Trust pages và footer: đánh giá + bản nháp

> **Cập nhật 10/11/2026:** bản nháp ở file này đã được viết lại đầy đủ và kèm code trong [`site-patch/`](../site-patch/README.md). Khi có khác biệt, lấy `site-patch/` làm bản chính.

Ngày kiểm: 10/11/2026 · Công cụ: Playwright (render thật, desktop 1366px), fetch (`/`, `/san-pham`, `/chinh-sach-bao-mat`), dữ liệu 40 URL (`pages.json`, `render.json`)
Lưu ý: site bị **soft 404** (URL lạ vẫn trả HTTP 200). Vì vậy mỗi URL được chấm theo H1 và nội dung thật sau render, không theo status code.

## Kết luận nhanh

**Chưa đạt.** Site chưa có trang trust riêng nào. Thẻ `<footer>` chỉ có logo, ảnh hoa sen và dòng `© 2026 KimQ JSC. Mọi quyền được bảo lưu.`, không có link nào.
Thông tin pháp nhân (tên công ty, MST, địa chỉ) nằm trong section `#contact`, và chỉ xuất hiện trên **2/40 trang** (`/` và `/san-pham`).
Rủi ro lớn nhất là **pháp lý**: 19 trang sản phẩm có form thu email, nhưng không có chính sách bảo mật và không có câu thông báo xử lý dữ liệu.

## 1. Trust pages

Đã thử 21 URL ứng viên. Tất cả đều trả **"404 Page Not Found — Did you forget to add the page to the router?"** với HTTP 200. Riêng [`security.txt`](../site-patch/client/public/.well-known/security.txt) trả 404 thật.

| Trang | URL đã thử | Hiện trạng | Đánh giá | Việc cần làm |
|---|---|---|---|---|
| Giới thiệu | `/gioi-thieu`, `/ve-chung-toi`, `/about` | Chỉ có anchor `#about` trên trang chủ | ❌ | Dùng nháp [`03-trang-gioi-thieu-draft.md`](03-trang-gioi-thieu-draft.md) |
| Liên hệ | `/lien-he`, `/contact` | Anchor `#contact`: tên công ty, MST, địa chỉ, email. Không có SĐT, giờ làm việc, bản đồ | ⚠️ | Tạo `/lien-he` (mục 4.1) |
| Chính sách bảo mật | `/chinh-sach-bao-mat`, `/privacy`, `/privacy-policy`, `/bao-mat` | Không có | ❌ **P0** | Mục 4.2; cần luật sư rà |
| Điều khoản sử dụng | `/dieu-khoan`, `/dieu-khoan-su-dung`, `/terms` | Không có | ❌ P1 | Mục 4.3 |
| Chính sách cookie | `/chinh-sach-cookie`, `/cookies` | Không có. Hiện **không có cookie** và không có script bên thứ ba (chỉ 1 bundle `index-*.js`) | ✅ Chưa cần | Bắt buộc phải có khi gắn GA4 (xem [`07`](07-gsc-ga4-chinh-sach-ai-geo.md)) |
| Đội ngũ / khách hàng / case study | `/khach-hang`, `/case-study`, `/tuyen-dung` | Không có | ❌ P2 | Gộp vào `/gioi-thieu` trước; làm case study khi có khách đồng ý |
| Blog / tin tức | `/blog`, `/tin-tuc` | Không có (19 trang hướng dẫn đang đóng vai trò này) | — Tuỳ chọn | Không bắt buộc |
| `/.well-known/security.txt` | | 404 | ❌ P2 | Mục 5 |
| Trang 404 | URL bất kỳ | Template dev tiếng Anh, HTTP 200 | ❌ P0 | Đã ghi ở audit #5 |
| Organization schema | | 0 JSON-LD trên site | ❌ | Đã soạn trong [`schema/home.jsonld`](schema/home.jsonld) |

## 2. Footer

| Thành phần | Hiện trạng (40/40 trang giống nhau) | Đánh giá |
|---|---|---|
| Thẻ `<footer>` | Có | ✅ |
| Logo | `logo.webp`, alt "CÔNG TY CỔ PHẦN KIMQ"; thiếu `width`/`height` | ⚠️ |
| Ảnh trang trí `footer-lotus.webp` | `alt=""` | ✅ Đúng với ảnh trang trí |
| Copyright | `© 2026 KimQ JSC.` | ⚠️ "KimQ JSC" là tên thứ 4, không khớp quy ước ở [`02`](02-brand-va-trang-chu.md) |
| Tên pháp nhân, MST, địa chỉ | Không có trong footer. Chỉ có ở `#contact` trên `/` và `/san-pham` | ❌ |
| Email | Không có trong footer. 40/40 trang có `social@kimq.tech` ở section `#contact` | ⚠️ |
| Số điện thoại / hotline | Không có ở đâu trên site | ❌ (B2B nên có, hoặc ghi rõ kênh Zalo OA) |
| Link Chính sách bảo mật / Điều khoản | Không có | ❌ |
| Link Giới thiệu / Liên hệ | Chỉ có trên menu dạng anchor (`#about`, `#contact`) | ❌ |
| Link sản phẩm / hướng dẫn | Không có trong footer | ❌ Mất cơ hội internal link sitewide |
| Mạng xã hội (`sameAs`) | Không có (lúc audit) | ✅ Đã điền 4 hồ sơ ngày 12/11/2026 (Facebook, Instagram, Threads, TikTok) |
| Badge Bộ Công Thương | Không có | ✅ Không bắt buộc: site B2B giới thiệu, không bán hàng hay đặt hàng trực tuyến. Chỉ cần nếu sau này có chức năng đặt mua hoặc thanh toán |

**Lưu ý thêm:** form "Quan tâm" trên 19 trang sản phẩm thu `email` (bắt buộc), và có một trường `website` ẩn, có thể là honeypot chống spam. Form không có câu thông báo hay link chính sách.

## 3. Spec footer đề xuất (cho Dev)

Footer phải giống nhau trên mọi trang, render sẵn trong HTML (prerender), và dùng link `<a href>` thật, không dùng anchor.

| Cột | Nội dung |
|---|---|
| 1. Công ty | Logo (có `width`/`height`) · **Công ty Cổ phần KimQ** · MST: 0319416034 · Địa chỉ: Tầng 2, số 02 Song Hành, Phường Bình Trưng, TP. Hồ Chí Minh · Email: social@kimq.tech · ĐT: `[CẦN ĐIỀN]` |
| 2. Sản phẩm | 6–8 sản phẩm chính + "Tất cả sản phẩm" → `/san-pham` |
| 3. Tài nguyên | "Hướng dẫn sử dụng" (link tới 3–5 trang hướng dẫn nổi bật) · Giới thiệu `/gioi-thieu` · Liên hệ `/lien-he` |
| 4. Pháp lý | Chính sách bảo mật `/chinh-sach-bao-mat` · Điều khoản sử dụng `/dieu-khoan-su-dung` · (Chính sách cookie `/chinh-sach-cookie` khi có GA4) |
| Dòng cuối | `© 2026 Công ty Cổ phần KimQ. Mọi quyền được bảo lưu.` · link mạng xã hội: Facebook, Instagram, Threads, TikTok (thêm LinkedIn, Zalo OA, YouTube khi có) |

Yêu cầu:
- Năm copyright lấy theo năm hiện tại khi build.
- Thông tin NAP (tên, địa chỉ, SĐT) trong footer **phải trùng từng chữ** với [`schema/home.jsonld`](schema/home.jsonld) và trang `/lien-he`.
- `sameAs` trong [`schema/home.jsonld`](schema/home.jsonld) và `COMPANY.social` trong [`site-patch`](../site-patch/) đã có 4 hồ sơ.
- Mobile: các cột chuyển thành accordion hoặc xếp dọc; vùng chạm ≥ 44px.
- Thêm 4 URL mới vào `sitemap.xml`.
- Mỗi trang mới cần title, meta, canonical riêng (bảng mục 6).

## 4. Bản nháp trang

> Các bản nháp dưới đây **không phải tư vấn pháp lý**. Mọi chỗ `[CẦN ĐIỀN]` phải do Owner hoặc pháp chế điền. Không được tự thêm sự kiện. Chính sách bảo mật và điều khoản cần luật sư rà trước khi đăng.

### 4.1 `/lien-he` — Liên hệ

**H1:** Liên hệ KimQ

Anh/chị cần tư vấn sản phẩm, báo giá hay hỗ trợ kỹ thuật? Gửi email hoặc gọi cho chúng tôi. KimQ phản hồi trong `[CẦN ĐIỀN: ví dụ 1 ngày làm việc]`.

| | |
|---|---|
| Công ty | Công ty Cổ phần KimQ |
| Mã số thuế | 0319416034 |
| Địa chỉ | Tầng 2, số 02 Song Hành, Phường Bình Trưng, Thành phố Hồ Chí Minh, Việt Nam |
| Email | social@kimq.tech |
| Điện thoại / Zalo | `[CẦN ĐIỀN]` |
| Giờ làm việc | `[CẦN ĐIỀN: ví dụ Thứ 2–Thứ 6, 8:30–17:30]` |

- Thêm form liên hệ. Dùng lại form "Quan tâm" và thêm ô chọn sản phẩm cùng ô nội dung. Gắn câu đồng ý (mục 4.4).
- Thêm bản đồ (Google Maps embed, nhớ `loading="lazy"`) hoặc link "Xem bản đồ".
- Schema: `ContactPage`, với `mainEntity` → `#organization`.

### 4.2 `/chinh-sach-bao-mat` — Chính sách bảo mật (khung)

Căn cứ cần luật sư xác nhận:
- **Luật Bảo vệ dữ liệu cá nhân số 91/2025/QH15**, có hiệu lực từ 01/01/2026.
- **Nghị định 356/2025/NĐ-CP** hướng dẫn luật này.
- Nghị định 13/2023/NĐ-CP **đã hết hiệu lực**, không dẫn chiếu nữa.

**H1:** Chính sách bảo mật

1. **Phạm vi:** áp dụng cho website kimq.tech. Dữ liệu trong từng sản phẩm (Công nợ, KimQ Health, AI Gateway…) được điều chỉnh bởi hợp đồng và thoả thuận xử lý dữ liệu riêng: `[CẦN ĐIỀN: có/không]`.
2. **Bên kiểm soát dữ liệu:** Công ty Cổ phần KimQ, MST 0319416034, địa chỉ như trên. Đầu mối bảo vệ dữ liệu: `[CẦN ĐIỀN: tên bộ phận/email, social@kimq.tech]`.
3. **Dữ liệu chúng tôi thu thập trên website:**
   - Email anh/chị nhập vào form "Quan tâm".
   - Tên trang/sản phẩm anh/chị quan tâm.
   - Nội dung anh/chị gửi qua email.
   - Dữ liệu kỹ thuật do máy chủ/CDN ghi (địa chỉ IP, trình duyệt, thời gian truy cập): `[CẦN ĐIỀN: thời gian lưu log Cloudflare/máy chủ]`.
   - Hiện website **không dùng cookie quảng cáo hay công cụ phân tích**. Nếu sau này dùng, chúng tôi sẽ cập nhật mục này và hiển thị thông báo.
4. **Mục đích:** liên hệ tư vấn và báo giá theo yêu cầu của anh/chị; bảo mật và chống spam. **Không** bán hay cho thuê dữ liệu cá nhân.
5. **Cơ sở xử lý:** sự đồng ý của anh/chị khi gửi form `[luật sư xác nhận]`.
6. **Thời gian lưu:** `[CẦN ĐIỀN: ví dụ 24 tháng kể từ lần liên hệ cuối, hoặc tới khi anh/chị yêu cầu xoá]`.
7. **Chia sẻ với bên thứ ba:** nhà cung cấp hạ tầng (`[CẦN ĐIỀN: Cloudflare, dịch vụ email, CRM…]`) chỉ xử lý theo chỉ dẫn của KimQ. Chia sẻ theo yêu cầu của cơ quan nhà nước có thẩm quyền.
8. **Chuyển dữ liệu ra nước ngoài:** `[CẦN ĐIỀN: có/không; nếu dùng dịch vụ đặt máy chủ ngoài Việt Nam thì luật sư hướng dẫn thủ tục]`.
9. **Quyền của anh/chị:** được biết, đồng ý hoặc rút lại đồng ý, xem, chỉnh sửa, xoá, hạn chế xử lý, phản đối và khiếu nại. Gửi yêu cầu tới `[email]`; KimQ phản hồi trong `[CẦN ĐIỀN]` ngày.
10. **Bảo mật:** HTTPS, phân quyền truy cập nội bộ, `[CẦN ĐIỀN: biện pháp thực tế]`. Không ghi những biện pháp chưa làm.
11. **Trẻ em:** website dành cho doanh nghiệp, không chủ đích thu dữ liệu của người dưới 16 tuổi `[luật sư xác nhận ngưỡng tuổi]`.
12. **Cập nhật:** ngày hiệu lực `[CẦN ĐIỀN]`; các thay đổi lớn sẽ được thông báo trên trang này.

**Lưu ý cho Owner:** KimQ Health (dữ liệu sức khoẻ) và AI Gateway (nội dung câu hỏi) xử lý **dữ liệu cá nhân nhạy cảm** ở phía sản phẩm. Phần này cần thoả thuận xử lý dữ liệu (DPA) hoặc điều khoản riêng cho khách hàng doanh nghiệp, và có thể phải đánh giá tác động. Đừng gộp vào chính sách website. Câu trả lời cho Q1 (AI Gateway có lưu nội dung không) phải khớp với chính sách này.

### 4.3 `/dieu-khoan-su-dung` — Điều khoản sử dụng website (khung)

1. Chấp nhận điều khoản khi truy cập website.
2. Nội dung trên website (mô tả sản phẩm, hướng dẫn, số liệu lương, thuế, BHXH) chỉ để tham khảo. **Không thay thế tư vấn kế toán, pháp lý hay y tế**. Ghi rõ ngày cập nhật ở từng trang.
3. Quyền sở hữu trí tuệ: nội dung, logo và hình ảnh thuộc Công ty Cổ phần KimQ, trừ khi có ghi chú khác.
4. Hành vi bị cấm: cào dữ liệu trái phép, tấn công, giả mạo KimQ. `[Owner chốt: có cho phép bot AI theo robots.txt hay không, xem Q3]`.
5. Liên kết ra ngoài (ví dụ dauthau.io): KimQ không chịu trách nhiệm cho nội dung của site bên thứ ba.
6. Giới hạn trách nhiệm `[luật sư soạn]`.
7. Điều khoản dịch vụ của từng sản phẩm được quy định trong hợp đồng riêng.
8. Luật áp dụng: pháp luật Việt Nam. Cơ quan giải quyết tranh chấp: `[CẦN ĐIỀN]`.
9. Liên hệ: social@kimq.tech. Ngày hiệu lực: `[CẦN ĐIỀN]`.

### 4.4 Câu đồng ý cho form "Quan tâm" (19 trang sản phẩm + `/lien-he`)

> Bằng việc gửi email, anh/chị đồng ý để KimQ liên hệ tư vấn theo [Chính sách bảo mật](/chinh-sach-bao-mat).

- Đặt câu này ngay dưới nút gửi. Chữ nhỏ nhưng tương phản đủ (≥ 4.5:1).
- Luật sư xác nhận xem có cần checkbox đồng ý riêng không. Nếu cần, **không** đánh dấu sẵn.

## 5. `/.well-known/security.txt` (Dev)

```
Contact: mailto:social@kimq.tech
Expires: 2027-11-10T00:00:00.000Z
Preferred-Languages: vi, en
Canonical: https://kimq.tech/.well-known/security.txt
Policy: https://kimq.tech/chinh-sach-bao-mat
```

- Email chính thức: `social@kimq.tech`.
- Đặt lịch gia hạn `Expires` trước ngày hết hạn.

## 6. Metadata cho trang mới

| URL | Title | Meta description | Schema |
|---|---|---|---|
| `/gioi-thieu` | Giới thiệu Công ty Cổ phần KimQ | xem [`03`](03-trang-gioi-thieu-draft.md) | `AboutPage` |
| `/lien-he` | Liên hệ KimQ – Tư vấn & báo giá phần mềm | Liên hệ Công ty Cổ phần KimQ: email social@kimq.tech, địa chỉ tại TP. Hồ Chí Minh. Tư vấn sản phẩm, báo giá và hỗ trợ kỹ thuật. | `ContactPage` |
| `/chinh-sach-bao-mat` | Chính sách bảo mật – KimQ | KimQ thu thập dữ liệu gì trên website, dùng để làm gì, lưu bao lâu và cách anh/chị yêu cầu xem, sửa hoặc xoá dữ liệu cá nhân. | `WebPage` |
| `/dieu-khoan-su-dung` | Điều khoản sử dụng website – KimQ | Điều khoản khi sử dụng website kimq.tech: quyền sở hữu nội dung, giới hạn trách nhiệm, liên kết bên ngoài và luật áp dụng. | `WebPage` |

- Trang chính sách và điều khoản: để **index**. Không đặt noindex: Google và AI dùng những trang này để đánh giá độ tin cậy.
- Chỉ đưa vào sitemap khi nội dung đã hoàn chỉnh. Không index bản còn `[CẦN ĐIỀN]`.

## 7. Checklist nghiệm thu

- [ ] 4 trang mới render đúng H1, có trong HTML gốc (prerender), HTTP 200, có trong sitemap.
- [ ] Footer giống nhau trên 40+ trang, có link tới 4 trang mới, NAP trùng schema.
- [ ] Copyright: "Công ty Cổ phần KimQ", không còn "KimQ JSC".
- [ ] Form "Quan tâm" có câu đồng ý + link chính sách.
- [ ] [`security.txt`](../site-patch/client/public/.well-known/security.txt) trả 200.
- [x] `sameAs` có ít nhất 1 hồ sơ mạng xã hội thật.
- [ ] Gắn GA4 → bổ sung chính sách cookie + thông báo/Consent Mode **trước** khi bật.
