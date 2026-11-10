# 01 — Sửa mâu thuẫn claim lưu dữ liệu của KimQ AI Gateway

Trạng thái: **Nháp, chờ Product/Owner chốt Q1** · Nguồn: TinyFish fetch ngày 10/11/2026 (`/san-pham/ai-gateway`, `/san-pham/ai-gateway/huong-dan`)

## Vấn đề

Hai trang nói ngược nhau về việc **có lưu nội dung câu hỏi** gửi qua cổng hay không.

| Trang | Câu đang hiển thị | Nói gì |
|---|---|---|
| Sản phẩm — mục "Nhật ký kiểm toán, dữ liệu lưu tại Việt Nam" | "Mỗi lần dùng AI được ghi: ai, ứng dụng nào, model nào, lúc nào. **Nội dung câu hỏi không bị lưu**; máy chủ đặt tại Việt Nam hoặc trong mạng của doanh nghiệp." | Không lưu |
| Sản phẩm — sơ đồ "Một cổng giữa ứng dụng và nhà cung cấp AI" | "Cài tại chỗ hoặc máy chủ tại Việt Nam; **không lưu nội dung câu hỏi**." | Không lưu |
| Sản phẩm — FAQ "Dữ liệu được lưu ở đâu?" | "… Cổng chỉ lưu nhật ký sử dụng (ai, lúc nào, model nào, bao nhiêu token), **không lưu nội dung câu hỏi và câu trả lời**." | Không lưu |
| Hướng dẫn — mục Nhật ký | "Bấm **Nội dung (đã che dữ liệu cá nhân)** để xem câu hỏi." / "Số điện thoại, email, CCCD… được thay bằng [PHONE], [EMAIL]… **trước khi lưu**." | Có lưu (đã che) |
| Hướng dẫn — "Che dữ liệu cá nhân trong nhật ký" | "… được che trước khi lưu. **Có thể tắt lưu nội dung hoàn toàn**, hoặc bỏ ghi từng lượt bằng một header." | Có lưu, tắt được |
| Hướng dẫn — FAQ "Nội dung câu hỏi có bị lưu không?" | "**Mặc định lưu sau khi che dữ liệu cá nhân.** Doanh nghiệp có thể tắt lưu nội dung hoàn toàn hoặc bỏ ghi từng lượt." | Có lưu mặc định |

Câu "Dữ liệu nhạy cảm được thay bằng nhãn hoặc giữ trong công ty; **nội dung gốc** không được lưu." trên trang sản phẩm **không mâu thuẫn**, vì nó nói về nội dung gốc chưa che. Giữ nguyên câu này.

Hướng dẫn mô tả một màn hình có thật để xem nội dung đã che. Vì vậy nhiều khả năng sản phẩm **đang lưu nội dung đã che theo mặc định**, và trang sản phẩm là trang sai. **Product cần xác nhận trên bản đang chạy** trước khi đăng.

## Phương án A (khuyến nghị): sản phẩm mặc định lưu nội dung đã che

Chỉ sửa trang sản phẩm `/san-pham/ai-gateway`. Giữ nguyên trang hướng dẫn.

| Vị trí | Thay bằng |
|---|---|
| Mục "Nhật ký kiểm toán, dữ liệu lưu tại Việt Nam" | Mỗi lần dùng AI được ghi: ai, ứng dụng nào, model nào, lúc nào. Nội dung câu hỏi chỉ được lưu sau khi che dữ liệu cá nhân; doanh nghiệp có thể tắt lưu nội dung hoặc bỏ ghi từng lượt. Máy chủ đặt tại Việt Nam hoặc trong mạng của doanh nghiệp. |
| Sơ đồ, dòng mô tả cổng | Cài tại chỗ hoặc máy chủ tại Việt Nam; nội dung lưu đã che dữ liệu cá nhân, tắt được. |
| FAQ "Dữ liệu được lưu ở đâu?" | Bản cài tại chỗ: mọi thứ nằm trên máy chủ của doanh nghiệp. Bản dịch vụ: máy chủ đặt tại Việt Nam. Mặc định, cổng lưu nhật ký sử dụng (ai, lúc nào, model nào, bao nhiêu token) và nội dung câu hỏi sau khi đã che dữ liệu cá nhân. Doanh nghiệp có thể tắt lưu nội dung hoàn toàn hoặc bỏ ghi từng lượt bằng một header. |

Nên thêm 1 câu FAQ mới trên trang sản phẩm để khớp với hướng dẫn:

> **Có thể tắt hẳn việc lưu nội dung không?**
> Có. Quản trị viên tắt lưu nội dung cho toàn cổng; khi đó nhật ký chỉ còn ai, lúc nào, model nào, bao nhiêu token. Với từng lượt đặc biệt nhạy cảm, ứng dụng gửi kèm header không ghi nhật ký.

Schema `schema/san-pham/ai-gateway.jsonld` và `schema/huong-dan/ai-gateway.jsonld` **đã viết theo phương án A**.

## Phương án B: sản phẩm thật sự không lưu nội dung

Giữ trang sản phẩm. Sửa trang hướng dẫn: bỏ thao tác "Bấm Nội dung (đã che dữ liệu cá nhân)", và sửa đoạn "che trước khi lưu" cùng FAQ thành "Cổng không lưu nội dung câu hỏi và câu trả lời; nhật ký chỉ gồm ai, lúc nào, model nào, bao nhiêu token." Nếu chọn B, phải sửa lại câu trả lời FAQ trong 2 file schema nói trên.

## Claim khác trên trang cần bằng chứng (đã có trong sheet Claim Check)

| Câu trên trang | Cần gì trước khi giữ |
|---|---|
| "Chi phí thấp hơn **tới 30%** so với mua trực tiếp…" | Bảng giá so sánh theo model và khối lượng, ghi ngày cập nhật. Nếu chưa có thì đổi thành "có thể thấp hơn tuỳ model và khối lượng". |
| "Không gián đoạn khi nhà cung cấp lỗi" | Mô tả điều kiện fallback; nên đổi thành "tự chuyển đường dự phòng đã cấu hình". |
| "Dữ liệu cá nhân được che trước khi gửi đi" | Liệt kê đúng loại dữ liệu được che (email, SĐT VN, CCCD, MST, số thẻ) như trang hướng dẫn; tránh hứa che "mọi" dữ liệu. |

## Nghiệm thu
- [ ] Product xác nhận A hoặc B trên bản đang chạy
- [ ] Sửa 3 vị trí và thêm FAQ
- [ ] Cập nhật JSON-LD FAQ cho khớp chữ hiển thị
- [ ] Cập nhật sheet Claim Check: dòng "Nhật ký không lưu nội dung" → Đã xử lý
