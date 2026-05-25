# YD Investment Capital — Website

Institutional-grade website for YD Investment Capital. Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and next-intl (EN/PT/FR).

## Setup

### 1. Install Node.js
Download from: https://nodejs.org (LTS version recommended — 20.x or 22.x)

### 2. Install dependencies
```bash
cd yd-investment-capital
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open http://localhost:3000 — it will redirect to `/en` automatically.

### Language routes
- English: http://localhost:3000/en
- Portuguese: http://localhost:3000/pt
- French: http://localhost:3000/fr

### Build for production
```bash
npm run build
npm start
```

## Structure

```
yd-investment-capital/
├── app/
│   └── [locale]/          # All locale-aware pages
│       ├── page.tsx        # Homepage (9 sections)
│       ├── strategic-finance/
│       ├── investment-capital/
│       ├── industries/
│       ├── portfolio/
│       ├── insights/
│       ├── about/
│       └── contact/
├── components/
│   ├── layout/            # Navigation + Footer
│   ├── home/              # All homepage sections
│   └── ui/                # Reusable primitives
├── i18n/                  # next-intl config
├── messages/              # EN, PT, FR translations
│   ├── en.json
│   ├── pt.json
│   └── fr.json
├── middleware.ts           # i18n routing
├── tailwind.config.ts      # Custom design system
└── next.config.ts
```

## Tech Stack
- **Next.js 15** — App Router, RSC
- **TypeScript** — Full type safety
- **Tailwind CSS** — Custom institutional design system
- **Framer Motion** — Premium animations
- **next-intl** — EN/PT/FR with locale-based routing
- **Google Fonts** — Cormorant Garamond (serif display) + Inter (sans)
