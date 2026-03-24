# Void Architects

Website của studio kiến trúc **Void Architects** — xây dựng bằng Next.js + Tailwind CSS.

## Tính năng

- Trang chủ, About, Projects, Journal (blog)
- **Admin Mode** — quản lý bài viết (thêm, sửa, xoá, publish/unpublish)
- Dữ liệu lưu trong localStorage (persist qua reload)
- Dark minimalist design

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

## Admin

Vào `/admin` và đăng nhập bằng password:

```
voidarchitects2024
```

## Deploy lên GitHub Pages

1. Vào **Settings → Pages** của repo
2. Chọn **Source: GitHub Actions**
3. Push lên branch `main` → workflow tự chạy và deploy

URL sau khi deploy: `https://<username>.github.io/voidarchitects/`

## Deploy lên Vercel (dễ hơn)

```bash
npx vercel
```

Không cần set `NEXT_PUBLIC_BASE_PATH` khi dùng Vercel.

## Stack

- [Next.js 16](https://nextjs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) — state management
