# my little corner 🌿

A personal blog built with **Next.js 14 · React · TypeScript · Tailwind CSS**.

---

## Quick start

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## How to add a new blog post

Open `src/data/posts.ts` and add a new entry to the `posts` array:

```ts
{
  id: "my-new-post",            // becomes the URL: /posts/my-new-post
  title: "My New Post",
  excerpt: "A short summary shown on the card.",
  category: "tech",             // "tech" | "daily" | "learning" | "lists" | "reads"
  date: "April 1, 2026",
  readTime: "5 min",
  emoji: "✨",
  color: "from-brown-300 to-brown-400",  // tailwind gradient
  featured: false,              // set true to show it in the featured slot
}
```

That's it — the card appears automatically on the home page.

---

## How to add photos

1. Drop your `.jpg` / `.png` / `.webp` files into `public/images/`
2. Open `src/components/PhotoGrid.tsx`
3. Edit the `photos` array:

```ts
{ src: "/images/my-photo.jpg", alt: "desk setup", caption: "current setup", wide: false }
```

Set `wide: true` on any photo to make it span 2 columns.

---

## Customise your profile

- **Name & bio** → `src/app/page.tsx` (About strip section)
- **Social links** → `src/components/Navbar.tsx` (update `href` values)
- **Blog title** → `src/app/layout.tsx` (metadata) + Navbar logo
- **Color palette** → `tailwind.config.ts` (brown shades)

---

## Project structure

```
src/
  app/
    globals.css      ← base styles + grain texture
    layout.tsx       ← root layout (Navbar + Footer)
    page.tsx         ← home page
  components/
    Navbar.tsx       ← sticky nav with socials + menu
    Footer.tsx
    PostCard.tsx     ← masonry card
    CategoryFilter.tsx ← tag filter + grid (client)
    PhotoGrid.tsx    ← photo mosaic section
    Newsletter.tsx   ← subscribe form
  data/
    posts.ts         ← ← ADD YOUR POSTS HERE
public/
  images/            ← ← DROP YOUR PHOTOS HERE
```
