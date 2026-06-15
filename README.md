# Muhammad Quthbul Alam — Portfolio

Personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
Features a clean, aesthetic design with **orange / black / white** color scheme and **dark/light theme toggle**.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Home page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Navigation + theme toggle
│   │   └── Footer.tsx    # Footer + social links
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── SkillsSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       └── ContactSection.tsx
├── lib/
│   ├── data.ts           # ← EDIT THIS to update content
│   ├── theme.tsx         # Theme context & provider
│   └── utils.ts          # Helper utilities
└── styles/
    └── globals.css       # CSS variables + global styles
```

---

## ✏️ Customizing Content

All content lives in **`src/lib/data.ts`**. Edit this file to update:

- `profile` — name, bio, location, social links, avatar
- `skills` — your tech stack with proficiency levels
- `experiences` — work history
- `projects` — your projects (link GitHub repos + live demos)
- `education` — your educational background
- `services` — what you offer to clients

---

## 🎨 Theme System

Two themes available:
- **Dark** (default) — black background, orange accent, white text
- **Light** — white background, orange accent, dark text

The theme toggle is in the navbar. Theme preference is saved to `localStorage`.

To modify colors, edit the CSS variables in `src/styles/globals.css`:

```css
html.dark {
  --bg: #0a0a0a;
  --accent: #ff6b1a;
  /* ... */
}

html.light {
  --bg: #ffffff;
  --accent: #ff6b1a;
  /* ... */
}
```

---

## 🚢 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect to [vercel.com](https://vercel.com).

---

## 🛠 Tech Stack

- **Framework** — Next.js 14 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS + CSS Variables
- **Fonts** — Syne (display) + Inter (body) + JetBrains Mono (code)
- **Icons** — Lucide React
- **Animations** — CSS Animations + Framer Motion ready
- **Deployment** — Vercel

---

Built with 🧡 by Muhammad Quthbul Alam
