# 13 — Alt text ảnh trang Bệnh viện và [`llms.txt`](llms.txt)

Ngày: 13/11/2026 · Trạng thái: **Sẵn sàng, chờ Dev đưa lên** · Nguồn: chú thích đang hiển thị trên https://kimq.tech/san-pham/benh-vien (crawl 09/11, TinyFish 10/11)

## 1. Alt text cho 5 ảnh thumbnail video (tracker A9)

Hiện 5 ảnh `/products/media/benh-vien/video-*.webp` có `alt=""` hoặc không có alt. Alt dưới đây viết theo đúng nội dung mỗi video đang mô tả trên trang, không thêm thông tin mới.

| File | Alt (VI) | Alt (EN) |
|---|---|---|
| `video-dieu-hanh.webp` | Video Điều hành: buổi sáng của giám đốc, từ cảnh báo doanh thu khoa Nội giảm 12,4% đến bảng điều hành | Operations video: a director's morning, from an alert that Internal Medicine revenue fell 12.4% to the dashboard |
| `video-doanh-thu.webp` | Video Kiểm soát doanh thu: theo một chỉ định qua 4 bước và phát hiện dòng chưa tính tiền | Revenue control video: tracing one order through 4 steps and catching an unbilled line |
| `video-bhyt.webp` | Video Hồ sơ và XML BHYT: kiểm tra trước khi gửi cổng giám định, bắt lỗi lệch mã lượt khám | Health insurance XML video: checking claims before submission and catching a visit-code mismatch |
| `video-lich-kham.webp` | Video Lịch khám: khung 9 giờ quá tải, hệ thống gợi ý dời lịch để lễ tân xác nhận | Appointments video: the 9 am slot is overloaded and the system suggests a reschedule for reception to confirm |
| `video-duoc.webp` | Video Dược và vật tư: ngưỡng đặt hàng lại, lô sắp hết hạn và đề xuất mua chờ dược sĩ duyệt | Pharmacy & supplies video: reorder threshold, expiring lots and a purchase request awaiting pharmacist approval |

Thẻ `<video>` chính (`video-dieu-hanh.mp4`) chưa có nhãn. Đề xuất thêm:

```html
<video src="/products/media/benh-vien/video-dieu-hanh.mp4"
       poster="/products/media/benh-vien/video-dieu-hanh.webp"
       aria-label="Video demo KimQ Health: buổi sáng của giám đốc bệnh viện trên bảng điều hành"
       controls preload="metadata" playsinline></video>
```

Ghi chú:
- Nếu thumbnail nằm trong nút bấm mở video thì alt của ảnh chính là tên nút, nên giữ dạng "Video …" như trên.
- Nếu bên cạnh ảnh đã có chữ chú thích y hệt thì dùng `alt=""` cho ảnh và đặt `aria-label` cho nút, để trình đọc màn hình không đọc lặp hai lần.
- Ảnh hero: alt `Linh vật rùa của KimQ` (đã ghi trong [`02`](02-brand-va-trang-chu.md)).

## 2. [`llms.txt`](llms.txt) (tuỳ chọn)

File: [`seo-content/llms.txt`](llms.txt), gồm giới thiệu ngắn về KimQ Tech, 19 sản phẩm (title và meta mới trong [`meta-40-url.json`](meta-40-url.json)), 19 trang hướng dẫn và các trang công ty.

- **Tác dụng:** chưa có công cụ tìm kiếm lớn nào xác nhận dùng [`llms.txt`](llms.txt); Google cho biết không cần file đặc biệt nào để xuất hiện trong tính năng AI của Search. Đây chỉ là bản tóm tắt site dễ đọc cho AI agent. Chi phí thấp, nên coi là việc phụ, **không** thay cho sitemap hay schema.
- **Điều kiện trước khi đưa lên:**
  1. Đã chốt **Q3** (chính sách bot AI). Nếu chặn bot AI thì không cần đưa file này.
  2. Các trang `/gioi-thieu`, `/lien-he`, `/chinh-sach-bao-mat` đã live, vì file có link tới chúng.
  3. Title và meta mới ([`04`](04-metadata-40-url.md)) đã lên site, để mô tả trong file khớp với trang.
- **Cách đưa lên:** copy vào `client/public/llms.txt`, kiểm tra `https://kimq.tech/llms.txt` trả 200 và `Content-Type: text/plain`.
- **Mô tả AI Gateway:** sau khi chốt Q1, sửa lại dòng AI Gateway nếu câu trả lời ảnh hưởng tới phần "nhật ký".
