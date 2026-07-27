# gianlucadipaola.com

Personal portfolio website built with **Next.js 15**, **React 19**, **Tailwind CSS** and **shadcn/ui**.

🌐 **Live:** [gianlucadipaola.com](https://gianlucadipaola.com)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 15](https://nextjs.org/) (Static Export) |
| UI Library | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Carousel | [Embla Carousel](https://www.embla-carousel.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Deployment | [Cloudflare Pages](https://pages.cloudflare.com/) |
| Language | TypeScript (strict mode) |

## Architecture

```
├── app/
│   ├── layout.tsx          # Root layout, metadata, SEO, fonts
│   ├── page.tsx            # Page composition — imports all sections
│   └── globals.css         # CSS variables, design tokens, Tailwind layers
├── components/
│   ├── navbar.tsx           # Fixed navbar (desktop + mobile)
│   ├── hero-section.tsx     # Landing / hero section
│   ├── about-section.tsx    # About me section
│   ├── education-section.tsx
│   ├── projects-section.tsx # Grid + Carousel views, Embla integration
│   ├── experience-section.tsx
│   ├── certifications-section.tsx
│   ├── contact-dialog.tsx   # Contact modal with obfuscated email
│   ├── footer.tsx
│   ├── language-picker.tsx  # EN/IT language switcher
│   └── ui/                  # shadcn/ui primitives (Button, Card, Dialog, Badge)
├── hooks/
│   └── use-language.tsx     # Language context provider (localStorage + browser detection)
├── lib/
│   ├── types.ts             # Shared TypeScript interfaces for all site data
│   ├── siteData.ts          # 🇬🇧 English content
│   ├── siteData-ITA.ts      # 🇮🇹 Italian content
│   ├── badge-colors.ts      # Badge color mapping utility
│   └── utils.ts             # Tailwind class merge utility
└── public/
    ├── _headers             # Cloudflare Pages security headers
    ├── preview.jpg           # OG image for social sharing
    └── *.pdf                 # Downloadable documents
```

### Data-Driven Design

Site content is fully separated from presentation logic via `lib/siteData.ts` and `lib/siteData-ITA.ts`. Both files are type-checked against shared interfaces defined in `lib/types.ts`, ensuring structural consistency across languages. To update the site content, edit only these data files — no component code changes required.

## Development

```bash
# Install dependencies
npm install

# Start dev server (Turbopack)
npm run dev

# Type check
npm run typecheck

# Lint
npm run lint

# Production build (static export)
npm run build
```

## Deployment

The site is deployed on **Cloudflare Pages** via GitHub integration:

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `out` |
| Node.js version | `>=20` |

## License

MIT
