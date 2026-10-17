# Robert Kampi Laari: personal brand website

The official website of **Robert Kampi Laari**: Youth Development Advocate, Public Sector Leader, Author,
Motivational Speaker and Founder of the Tamale Youth Summit.

Built with **Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Neon Postgres**.

Designed and developed by **Richard Mensah**.

---

## Contents

1. [Quick start](#1-quick-start)
2. [Environment variables](#2-environment-variables)
3. [Set up Neon (the database)](#3-set-up-neon-the-database)
4. [What's on the site](#4-whats-on-the-site)
5. [The admin inbox](#5-the-admin-inbox)
6. [Managing content](#6-managing-content)
7. [Publishing Insights (articles)](#7-publishing-insights-articles)
8. [Brand assets, logo and favicon](#8-brand-assets-logo-and-favicon)
9. [Deploying to Vercel](#9-deploying-to-vercel)
10. [Google Search Console](#10-google-search-console)
11. [Project structure](#11-project-structure)
12. [Content rules](#12-content-rules)
13. [Troubleshooting](#13-troubleshooting)

---

## 1. Quick start

You need **Node.js 20 or newer** ([nodejs.org](https://nodejs.org)).

```bash
npm install            # install dependencies
cp .env.example .env.local   # then fill in the values (section 2)
npm run db:migrate     # create the database tables in Neon (section 3)
npm run db:check       # confirm the connection and tables
npm run dev            # start the site at http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload on http://localhost:3000 |
| `npm run build` | Production build (also type-checks and lints) |
| `npm start` | Run the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check only |
| `npm run db:migrate` | Apply `db/schema.sql` to the Neon database in `DATABASE_URL` |
| `npm run db:check` | Test the Neon connection and list each table with its row count |
| `npm run brand:assets` | Regenerate favicon, icons and social images from `logo.png` |

> The site works **without** a database: forms politely say they are "not available yet" and Insights
> shows "coming soon". Add `DATABASE_URL` whenever you're ready.

---

## 2. Environment variables

Local values live in **`.env.local`** (copy it from `.env.example`; it is git-ignored so secrets never get committed).
**`.env.example`** documents every variable and is safe to commit.

| Variable | Required | Example | Purpose |
|---|---|---|---|
| `DATABASE_URL` | For forms and Insights | `postgresql://user:pass@ep-xxx-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require` | Neon Postgres connection (use the **pooled** string) |
| `ADMIN_USERNAME` | For `/admin` | `robert` | Admin inbox login |
| `ADMIN_PASSWORD` | For `/admin` | a long passphrase (12+ characters) | Admin inbox password |
| `NEXT_PUBLIC_SITE_URL` | Yes in production | `https://robertkampilaari.com` | Canonical URLs, sitemap, social previews |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | `abc123…` | Google Search Console HTML-tag verification |

Environment values are validated at startup (`lib/env.ts`). A malformed value is logged and ignored rather
than crashing the site. **Restart `npm run dev` after editing `.env.local`.**

---

## 3. Set up Neon (the database)

1. Create a free account at [neon.tech](https://neon.tech) and click **New Project**.
   Choose the region closest to your visitors (for Ghana, a European region such as Frankfurt works well).
2. Open **Dashboard → Connection Details**, select **Pooled connection**, and copy the connection string.
3. Paste it into `.env.local`:
   ```
   DATABASE_URL="postgresql://…-pooler…neon.tech/neondb?sslmode=require"
   ```
4. Create the tables:
   ```bash
   npm run db:migrate
   ```
   This runs `db/schema.sql`. It is safe to run again: every statement uses `if not exists`.
5. Restart `npm run dev`. The forms now save to Neon.

### Tables

| Table | Filled by | Contains |
|---|---|---|
| `inquiries` | Contact wizard, speaking invitation form | Speaking, partnership, media and general enquiries |
| `subscribers` | Book "Notify me", Insights subscribe, Summit delegate pass | Opt-in emails per interest (`insights`, `books`, `summit`) |
| `compass_results` | Leadership Compass | **Anonymous** result level only, with no personal data |
| `insights` | You (see section 7) | Articles for the Insights page |

You can browse and edit tables in Neon's **Tables** view or run SQL in its **SQL Editor**.

---

## 4. What's on the site

| Page | Signature experience |
|---|---|
| **Home** `/` | Night-sky hero, "Choose your path" switcher (young person / organisation / event organiser / media), quest-map sections |
| **About** `/about` | Scroll-driven *five chapters* with a sticky progress rail, full biography, motto manifesto |
| **Leadership** `/leadership` | Interactive *focus-area explorer* (six areas) and a *partnership orbit* diagram |
| **Youth Development** `/youth-development` | Five-level *quest map* plus the **Leadership Compass**, a one-minute reflection that points to your level |
| **Author** `/author` | 3D *flip-books* and a "notify me when available" opt-in |
| **Speaker** `/speaker` | Themes, an **event planner** that builds a live invitation brief and pre-fills the booking form |
| **Speaker one-sheet** `/speaker/one-sheet` | Printable page for organisers and media (Print → Save as PDF) |
| **Tamale Youth Summit** `/tamale-youth-summit` | Live 3D **delegate pass** that personalises as you type, with register-interest |
| **Insights** `/insights` | Article listing with search and category filters, article pages, subscribe |
| **Contact** `/contact` | Three-step **contact wizard** (pathway → details → message and review) |

**Site-wide features**
- **⌘K / Ctrl+K command palette**: search any page or action from anywhere.
- **"Climb to the Top" journey**: an altitude meter while scrolling, 8 milestone badges (7 pages plus completing
  the Compass), a Journey panel in the header, and a summit moment in the footer. Progress is stored only in
  the visitor's own browser.
- Fully responsive, keyboard accessible, and respects *reduced motion* settings.

---

## 5. The admin inbox

Visit **`/admin`** (for example http://localhost:3000/admin) and sign in with `ADMIN_USERNAME` / `ADMIN_PASSWORD`.

You'll see:
- counts of enquiries by type, subscribers by interest, and Leadership Compass results by level
- recent enquiries (click one to expand it; the email is a mailto link for quick replies)
- the subscriber list

If either admin variable is empty, `/admin` is disabled. It is excluded from search engines
(`noindex` and `robots.txt`). **Use a strong, unique password in production.**

---

## 6. Managing content

All wording lives in `data/`, separate from the design:

| File | Content |
|---|---|
| `data/profile.ts` | Biography, role, education, belief, vision, motto |
| `data/chapters.ts` | The five About-page chapters |
| `data/pillars.ts` | At-a-glance items, the six leadership areas, Summit focus, the five-level framework, manifesto lines |
| `data/books.ts` | Books (add synopses, publishers and purchase links here when available) |
| `data/speaking.ts` | Speaking themes and formats |
| `data/compass.ts` | Leadership Compass questions and next-step advice |
| `data/paths.ts` | "Choose your path" options |
| `data/commands.ts` | Command palette entries |
| `data/navigation.ts` | Menu and **social links** (replace `null` with real profile URLs) |
| `data/images.ts` | Which photo fills each fixed page slot (hero, about, summit…) |
| `data/gallery.ts` | Impact stories and every gallery photo (see below) |

### Photos, the gallery and impact stories

All photography lives in `public/images/<story>/` and is listed in `data/gallery.ts`:

1. Drop the file into `public/images/<story>/` (for example `public/images/red-stop-walk/red-stop-walk-06.jpg`).
2. Add a row to `PHOTOS` with its `id`, `story`, `width`, `height`, a descriptive `alt` and, if a photographer's
   watermark is visible, a `credit`.
3. For a new event, add a story to `STORIES`. Summaries describe only what the photos and banners show; add
   `figures` (e.g. attendance) only once a source confirms them.

The real cover for *If I Knew Then* is still to come: set its `cover` in `data/books.ts` when the file arrives.

Next.js automatically serves optimised AVIF/WebP versions. Use authentic photographs only.

---

## 7. Publishing Insights (articles)

Insert a row in Neon's SQL Editor:

```sql
insert into insights (slug, title, excerpt, body, category, featured, status, published_at)
values (
  'leading-with-purpose',
  'Leading with Purpose',
  'Why young leaders should start with the change they want to see.',
  'First paragraph…

## A heading

Second paragraph…

> A pull quote.',
  'leadership',      -- leadership | youth-development | career | personal-growth | entrepreneurship | public-service | community-development
  true,              -- show as the featured article
  'published',       -- or 'draft' to hide it
  now()
);
```

Body formatting: blank lines separate paragraphs, `## ` starts a heading, `> ` starts a pull quote.
For a cover image, add a file under `public/images/insights/` and set `cover_image = '/images/insights/file.jpg'`.
Published articles appear on `/insights` and in the sitemap within about five minutes.

---

## 8. Brand assets, logo and favicon

`logo.png` (project root) is the single source for:
- the favicon (`app/icon.png`) and Apple touch icon (`app/apple-icon.png`)
- the header monogram (`public/brand/monogram.png`) and full logo (`public/brand/logo.png`)
- social share images (`app/opengraph-image.jpg`, `app/twitter-image.jpg`)

After replacing `logo.png`, run `npm run brand:assets`.

Colours and fonts are defined once in `app/globals.css` (`@theme`): night green `#0b2a20`, gold `#e6c77e`,
ivory `#f5f1e8`; Cinzel (labels), Newsreader (headings), Inter (text), Allura (the "See you at the top" signature).

---

## 9. Deploying to Vercel

1. Push the project to a GitHub repository (`.env.local` is ignored automatically).
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import the repository.
3. Under **Settings → Environment Variables**, add `DATABASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`,
   `NEXT_PUBLIC_SITE_URL` (your real domain) and, if used, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
4. Deploy. Then add your custom domain under **Settings → Domains**.
5. Make sure `npm run db:migrate` has been run against the production database.

Tip: Neon's Vercel integration can create the database and set `DATABASE_URL` for you.

---

## 10. Google Search Console

1. Deploy the site with `NEXT_PUBLIC_SITE_URL` set to the live domain.
2. In [Google Search Console](https://search.google.com/search-console), add the site and choose the
   **HTML tag** method. Copy only the `content` value into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy.
3. Under **Sitemaps**, submit `https://<your-domain>/sitemap.xml`.
4. Use **URL Inspection → Request indexing** for the home page.

The site already provides a sitemap, robots.txt, canonical URLs, Open Graph and X/Twitter cards, and
structured data (Person, WebSite, Book, Article).

---

## 11. Project structure

```
app/                      Routes (App Router)
  api/inquiries|subscribe|compass/route.ts   API endpoints (validated with zod)
  admin/page.tsx          Private inbox (protected by middleware.ts)
  speaker/one-sheet/      Printable one-sheet
components/
  ui/                     Small reusable building blocks
  layout/                 Header, footer, menu, summit moment
  sections/               Page sections
  features/               Interactive features (compass, planner, pass, palette, journey, forms…)
data/                     All site wording and content
hooks/                    React hooks (forms, journey, tilt, active section)
lib/                      Server logic: env, db, queries, validation, SEO
db/schema.sql             Database schema
scripts/                  migrate.ts, brand-assets.ts
middleware.ts             Basic Auth for /admin
```

Conventions follow `nextjs-llm-instructions.md`: TypeScript everywhere, Tailwind for styling,
files under 200 lines, server components by default.

---

## 12. Content rules

Every factual statement about Robert comes from `PROFILE.txt`. Don't add awards, statistics, dates,
partners, testimonials or titles unless a source document supports them. Editorial lines (for example the
manifesto statements) are framing, not attributed quotations.

---

## 13. Troubleshooting

| Problem | Fix |
|---|---|
| `npm` or `node` is "not recognised" | Node is installed at `C:\Program Files\nodejs` but not on PATH. Reinstall Node and tick "Add to PATH", or restart the terminal. |
| Forms say "not available yet" | `DATABASE_URL` is empty or wrong. Check `.env.local`, run `npm run db:migrate`, and restart the dev server. |
| `/admin` keeps asking for a password | Check `ADMIN_USERNAME` / `ADMIN_PASSWORD` in `.env.local` (password 12+ characters), then restart. |
| Slow installs or file-lock errors | The project is inside OneDrive. Pause OneDrive syncing, or move the folder outside OneDrive. |
| Changes to `.env.local` don't apply | Stop and restart `npm run dev`. |
