# V. Muraleedharan — Professional Leader Website

Premium informational website for **V. Muraleedharan**, senior Bharatiya Janata Party leader from Kerala. Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Hook Form + Zod (contact form)
- `next/font` (Cormorant Garamond + Source Sans 3)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
npm start
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Home |
| `/about` | Biography |
| `/journey` | Political timeline |
| `/initiatives` | Focus areas |
| `/news` | Updates listing |
| `/news/[slug]` | Article detail |
| `/gallery` | Photo gallery + lightbox |
| `/contact` | Contact form |
| `/privacy` | Privacy policy |

## Content & accuracy

Biographical and timeline data live in `src/data/` and are limited to verified public sources (MEA profile, Election Commission of India, Kerala Legislative Assembly member profile, reputable reporting).

- News cards are **sample content** until a CMS/official feed is connected.
- Gallery mixes a **CC BY-SA 3.0** Wikimedia portrait with clearly labelled thematic Unsplash images.
- Contact phone is taken from the Niyamasabha member profile; email/office address are omitted until confirmed.

## Contact form production setup

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
3. Set `CONTACT_WEBHOOK_URL` to a webhook/email relay endpoint.

Without `CONTACT_WEBHOOK_URL`, the API validates submissions and returns a clear **development** success state (no invented “sent” claim).

## Image attribution

- Portrait: Kiran Gopi, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:V._Muraleedharan.jpg), CC BY-SA 3.0
- Atmospheric images: Unsplash (thematic context only)

## Project structure

```
src/app/                 # Routes, layout, API, SEO
src/components/layout/   # Header, footer, page hero
src/components/home/     # Home sections
src/components/about/    # Timeline
src/components/news/     # Article cards
src/components/gallery/  # Gallery + lightbox
src/components/contact/  # Contact form
src/components/animations/
src/data/                # Verified / CMS-ready content
src/lib/                 # Utils + Zod schemas
public/images/           # Local image assets
```
