# Trang Thực tiễn - MLN131

## Tổng quan

Tôi đã tạo một trang Thực tiễn mới theo yêu cầu của bạn tại `/app/practice-new/page.tsx`. Trang này bao gồm tất cả các nội dung bạn đã yêu cầu:

## Nội dung chính

### 1. Hero Section

- Tiêu đề: "Thực tiễn và hòa hợp tôn giáo"
- Phụ đề: "Khám phá tình hình thực tế và những thách thức trong quản lý tôn giáo tại Việt Nam"

### 2. Section 16 Tôn giáo được công nhận

- Hiển thị đầy đủ 16 tôn giáo được Nhà nước Việt Nam công nhận
- Chia thành 2 lưới: 8 tôn giáo đầu và 8 tôn giáo sau
- Mỗi tôn giáo có:
  - Hình ảnh đại diện
  - Icon phù hợp
  - Tên tôn giáo
  - Tóm tắt ngắn
  - Button "Xem chi tiết"
  - Dialog popup hiển thị thông tin chi tiết

### 3. Section Vấn đề/Thách thức

- 5 thách thức chính trong thực tiễn quản lý tôn giáo:
  1. Khác biệt giáo lý, thế giới quan – nhân sinh quan
  2. Cạnh tranh tín đồ và phát triển đạo
  3. Mâu thuẫn và bất ổn nội bộ
  4. Nguy cơ bị lợi dụng chính trị
  5. Thiếu cơ chế đối thoại bền vững

### 4. Call to Action

- Kêu gọi tìm hiểu thêm về chính sách và giải pháp

## Tính năng kỹ thuật

### Components sử dụng:

- Navigation (từ components hiện có)
- PageTransition (hiệu ứng chuyển trang)
- Card, Button, Badge (custom components)
- Dialog (popup chi tiết)
- Icons từ Lucide React

### Styling:

- Gradient background từ xanh dương đến xanh lá
- Glass morphism effect (backdrop-blur)
- Hover effects và animations
- Responsive design (mobile, tablet, desktop)

## Hướng dẫn sử dụng

### 1. Truy cập trang mới:

Để xem trang này, bạn có thể:

- Truy cập URL: `/practice-new`
- Hoặc cập nhật navigation để trỏ đến trang mới

### 2. Cập nhật Navigation:

Nếu bạn muốn thay thế trang practice cũ, hãy cập nhật file `components/navigation.tsx`:

```tsx
const navigationItems = [
  { href: "/theory", label: "Lý thuyết" },
  { href: "/policy", label: "Chính sách Việt Nam" },
  { href: "/practice-new", label: "Thực tiễn" }, // Thay đổi từ /practice thành /practice-new
  { href: "/solutions", label: "Vận dụng" },
];
```

### 3. Xóa trang cũ (tùy chọn):

Sau khi đã kiểm tra trang mới hoạt động tốt, bạn có thể:

- Xóa file `/app/practice/page.tsx` cũ
- Đổi tên folder từ `practice-new` thành `practice`

## Các hình ảnh đã sử dụng

### Hình ảnh từ Unsplash (miễn phí):

- Phật giáo, Công giáo, Tin lành, Cao Đài, v.v. sử dụng hình ảnh chất lượng cao từ Unsplash

### Hình ảnh từ nguồn bạn cung cấp:

- Phật giáo Tứ Ân Hiếu nghĩa
- Minh Sư đạo
- Minh Lý đạo – Tam Tông Miếu
- Bà-la-môn giáo
- Phật giáo Hiếu Nghĩa Tà Lơn
- Bửu Sơn Kỳ Hương

## Lưu ý

1. **Không chỉnh sửa file cũ**: Như bạn yêu cầu, tôi đã tạo file mới hoàn toàn
2. **Responsive**: Trang được thiết kế responsive cho mọi thiết bị
3. **Performance**: Sử dụng Next.js Image component để tối ưu hình ảnh
4. **Accessibility**: Có alt text cho hình ảnh và proper semantic HTML
5. **Consistent Design**: Phù hợp với design system của dự án hiện tại

## Chạy và kiểm tra

```bash
npm run dev
# Truy cập http://localhost:3000/practice-new
```

Trang đã sẵn sàng để sử dụng trong presentation của bạn!
