---
path: /chinh-sach-cookie
title: Chính sách cookie và lưu trữ trên trình duyệt | KimQ Tech
description: kimq.tech lưu gì trên trình duyệt của anh/chị, nhóm nào luôn bật, nhóm nào chỉ bật khi anh/chị đồng ý, và cách thay đổi lựa chọn.
h1: Chính sách cookie
schemaType: WebPage
status: draft
priority: P2
effective: "[CẦN ĐIỀN: dd/mm/yyyy]"
updated: "[CẦN ĐIỀN: dd/mm/yyyy]"
review: Luật sư + Dev (bảng phải khớp code thật)
---

Cookie và các công nghệ tương tự (localStorage, sessionStorage) là những tệp nhỏ website lưu trên trình duyệt của anh/chị.

## 1. Hiện tại kimq.tech lưu gì

Kiểm tra ngày 10/11/2026: website **không đặt cookie nào** và không chạy công cụ phân tích hay quảng cáo. Website chỉ lưu:

| Tên | Loại | Mục đích | Thời hạn | Nhóm |
|---|---|---|---|---|
| `language` | localStorage | Nhớ ngôn ngữ anh/chị chọn (Tiếng Việt / English) | Tới khi anh/chị xoá dữ liệu trình duyệt | Thiết yếu |
| `kq_lead_src` | sessionStorage | Nhớ nguồn truy cập (tham số `utm_*`, tên miền giới thiệu) để gắn vào form "Quan tâm" nếu anh/chị gửi | Tự xoá khi đóng tab | Thiết yếu cho form [CẦN ĐIỀN: luật sư xác nhận nhóm] |
| `kq_consent` | localStorage | Ghi nhớ lựa chọn cookie của anh/chị (chỉ có khi đã bật bảng lựa chọn) | 12 tháng | Thiết yếu |

Phông chữ được tải từ Google Fonts. Khi tải phông, trình duyệt gửi địa chỉ IP tới Google, nhưng không đặt cookie.

## 2. Khi bật công cụ phân tích (chưa bật)

> [CẦN CHỐT: chỉ giữ mục 2 khi đã gắn Google Analytics 4. Chưa gắn thì xoá cả mục 2 và dòng `kq_consent` ở bảng trên.]

| Tên | Nhà cung cấp | Mục đích | Thời hạn | Nhóm |
|---|---|---|---|---|
| `_ga` | Google Analytics 4 | Phân biệt lượt truy cập để đếm người dùng | 2 năm | Phân tích |
| `_ga_<ID>` | Google Analytics 4 | Lưu trạng thái phiên | 2 năm | Phân tích |

- Nhóm **Phân tích chỉ bật khi anh/chị bấm "Đồng ý"** ở bảng lựa chọn. Trước khi anh/chị chọn, Google Analytics chạy ở chế độ không cookie (Consent Mode: `analytics_storage = denied`).
- KimQ **không** bật quảng cáo, tiếp thị lại hay cá nhân hoá quảng cáo (`ad_storage`, `ad_user_data`, `ad_personalization` luôn ở trạng thái `denied`).
- KimQ không gửi email hay dữ liệu form lên Google Analytics.

## 3. Thay đổi lựa chọn

- Bấm **"Cài đặt cookie"** ở chân trang để mở lại bảng lựa chọn.
- Hoặc xoá dữ liệu trang kimq.tech trong cài đặt trình duyệt.

Xem thêm: [Chính sách bảo vệ dữ liệu cá nhân](/chinh-sach-bao-mat).
