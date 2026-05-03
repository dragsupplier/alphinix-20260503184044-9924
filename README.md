# Alphinix — Web v1

Pune-based technology platform connecting students, colleges, schools, businesses and hiring managers under one stack.

This repo contains the marketing website (static, lead-generation focused). It does **not** include the LMS / ERP / Admin Panel — those are separate products.

## Stack

| Layer        | Choice                                |
| ------------ | ------------------------------------- |
| Build        | Vite 8                                |
| Framework    | React 19 + TypeScript (strict)        |
| Styling      | Tailwind CSS v4 (CSS-first `@theme`)  |
| Animation    | Motion (ex-Framer)                    |
| Icons        | lucide-react                          |
| Type         | Cabinet Grotesk (display) + Satoshi (body) via Fontshare |

See `ALPHINIX_MASTER_PLAN.md` for the full product, design and tech specification.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production bundle
npm run preview  # serve dist/
```

## Source layout

```
src/
  components/
    sections/   Page sections (Header, Hero, Audiences, …)
    ui/         Primitive UI (Button, Logo)
  lib/cn.ts     clsx + tailwind-merge helper
  index.css     Tailwind v4 + brand tokens
  App.tsx       Composes the home page
```
