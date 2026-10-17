# Robert Kampi Laari

The official website of Robert Kampi Laari: youth development advocate, Regional Director of the National Youth
Authority in Ghana's North East Region, author, speaker, and the founder of the Tamale Youth Summit.

![The homepage: a night-green hero with Robert's portrait and the line "Empowering young people to lead, build and transform."](docs/screenshots/home-hero.jpg)

Robert's motto is "See you at the top", and the site takes it literally. Visitors climb through his story,
earn milestones as they explore, collect real photographs from his work, and can test what they've learned in a
small photo game. Underneath that, it's a fast, accessible Next.js site that does three practical jobs: it tells
his story, it gets him invited to speak, and it collects interest in the Summit and his books.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and Neon Postgres. Designed and developed by
Richard Mensah.

<p>
  <img src="public/images/tamale-youth-summit-2025/tamale-youth-summit-2025-01.jpg" width="32%" alt="Robert addressing a full hall at the Tamale Youth Summit 2025" />
  <img src="public/images/national-youth-month-2026/national-youth-month-2026-08.jpg" width="32%" alt="Robert and young volunteers behind the 2026 National Youth Month banner" />
  <img src="public/images/dream-big-campus-tour/dream-big-campus-tour-02.jpg" width="32%" alt="Robert presenting a copy of If I Knew Then to a student" />
</p>

---

## Contents

- [What's on the site](#whats-on-the-site)
- [Real photography, and where it lives](#real-photography-and-where-it-lives)
- [The game layer](#the-game-layer)
- [Running it locally](#running-it-locally)
- [Environment variables](#environment-variables)
- [The database (Neon)](#the-database-neon)
- [The admin inbox](#the-admin-inbox)
- [Editing content](#editing-content)
- [Publishing Insights](#publishing-insights)
- [Brand assets](#brand-assets)
- [Deploying to Vercel](#deploying-to-vercel)
- [Google Search Console](#google-search-console)
- [Security notes](#security-notes)
- [Project structure](#project-structure)
- [Content rules](#content-rules)
- [Troubleshooting](#troubleshooting)
- [Credits](#credits)

---

## What's on the site

| Page | What you'll find there |
|---|---|
| Home `/` | The hero, a "choose your path" switcher (young person, organisation, event organiser, media), Robert's story in brief, the Summit, a strip of field photos and the books |
| About `/about` | His biography told in five scroll-driven chapters, plus the motto manifesto |
| Leadership `/leadership` | His public role at the National Youth Authority, a focus-area explorer and a partnership diagram |
| Youth Development `/youth-development` | A five-level growth framework and the Leadership Compass, a one-minute reflection that suggests where you are on it |
| Author `/author` | *If I Knew Then* and *Beyond Handshakes* as 3D books you can flip over, with a "tell me when it's out" sign-up |
| Speaker `/speaker` | Speaking themes, and an event planner that drafts an invitation brief and pre-fills the booking form |
| Speaker one-sheet `/speaker/one-sheet` | A printable page for organisers and press (Print, then Save as PDF) |
| Tamale Youth Summit `/tamale-youth-summit` | What the Summit is for, and a delegate pass that personalises itself as you type |
| Gallery `/gallery` | Fifteen impact stories, all 81 photographs, and the *Which moment?* game |
| Insights `/insights` | Articles with search and category filters |
| Contact `/contact` | A three-step contact wizard |

Every page also has a command palette (`Ctrl+K` or `⌘K`) for jumping straight to any page or action.

<p>
  <img src="docs/screenshots/author-books.jpg" width="49%" alt="The Author page with both books" />
  <img src="docs/screenshots/delegate-pass.jpg" width="49%" alt="The Tamale Youth Summit delegate pass" />
</p>

---

## Real photography, and where it lives

There are no stock images or AI illustrations anywhere on this site. Every picture is a real photograph from
Robert's work: summits, school visits, clean-up days, apprenticeship ceremonies, campus tours. There are 81 of
them, grouped into 17 folders by event.

```
public/images/
  tamale-youth-summit-2026/    10 photos
  national-youth-month-2026/   11
  dream-big-campus-tour/        8
  uds-address/                  8
  talks-and-engagements/        8
  north-east-youth-summit-2026/ 6
  national-apprenticeship/      5
  red-stop-walk/                5
  ...and 9 smaller folders, plus books/ and portrait/
```

Two files control where photos appear:

- **`data/gallery.ts`** lists every photo (its size, alt text and photographer credit) and the 17 stories they
  belong to. The gallery and the impact stories are built from it.
- **`data/images.ts`** decides which photo goes on which page.

That second file has one firm rule: **a photo appears on one page only.** The gallery is the exception, because
it's the archive of everything. Each page gets its own set of three or four, so moving around the site never
feels repetitive. If someone accidentally reuses a photo, the site throws an error in development that names
the duplicate, so it can't slip through to production.

![Impact stories on the Gallery page](docs/screenshots/impact-stories.jpg)

### Adding a photo

1. Put the file in the right event folder, e.g. `public/images/red-stop-walk/red-stop-walk-06.jpg`.
2. Add a row to `PHOTOS` in `data/gallery.ts` with its `id`, `story`, `width`, `height` and a plain description as
   `alt` (who, what, where). If a photographer's watermark is visible, add `credit`.
3. To feature it on a page, add its id to that page in `data/images.ts`.

For a brand-new event, add a story to `STORIES` as well. Keep the summary to what the photos and banners
actually show. Each story has an optional `figures` field for things like attendance. It stays hidden until you
fill it in, and you should only fill it in when someone has confirmed the number.

Next.js serves AVIF and WebP versions automatically, so there's no need to compress photos by hand. Files up
to about 1–2 MB are fine.

> **Still to come:** a flat cover image for *If I Knew Then*. For now the site uses the photo of Robert holding
> the book up at the IAAS Seminar. When the real cover arrives, set it as `cover` in `data/books.ts`.

---

## The game layer

Gamification here is gentle. Nothing blocks the content, nobody has to sign up, and all progress is stored in
the visitor's own browser.

**The climb.** A thin altitude meter on the right shows how far down the page you are, from Base to Summit.
Visiting sections and finishing activities unlocks eleven milestones. A small toast celebrates each one, and
the Journey panel in the header lists the rest:

| Milestone | How to earn it |
|---|---|
| Pathfinder | Visit About |
| Steward | Visit Leadership |
| Catalyst | Visit Youth Development |
| Reader | Visit Author |
| Listener | Visit Speaker |
| Convener | Visit the Tamale Youth Summit |
| Witness | Visit the Gallery |
| Connector | Visit Contact |
| Navigator | Finish the Leadership Compass |
| Storykeeper | Score 4 or 5 out of 5 in *Which moment?* |
| Curator | Collect at least one photo from every impact story |

**Collecting moments.** Most pages have a "Moments from the field" mosaic. Open a photo and it's collected: the
tag turns gold, a row of diamonds fills in, and once you've opened every photo on that page it reads "All
moments collected". The same collection counts in the gallery, which tracks progress across all 81 photos.

![A Moments from the field mosaic on the Speaker page](docs/screenshots/speaker-moments.jpg)

**Which moment?** At the bottom of the gallery, five real photos come up one at a time and you pick which
event each is from. It keeps score and streaks. It's harder than it sounds, because two years of Tamale Youth
Summit photos look very alike.

![The moments grid with filters and the collection counter](docs/screenshots/moments-gallery.jpg)

Everything respects the operating system's reduced-motion setting, works with a keyboard, and has proper alt text.

---

## Running it locally

You'll need **Node.js 22.18 or newer**. Node 24 is what Vercel uses, so that's the safest choice. The database
scripts run TypeScript files directly, which older versions of Node can't do.

```bash
npm install                  # install dependencies
cp .env.example .env.local   # then fill in the values (see below)
npm run db:migrate           # create the tables in Neon
npm run db:check             # confirm the connection and see each table
npm run dev                  # http://localhost:3000
```

| Command | What it does |
|---|---|
| `npm run dev` | Development server with hot reload |
| `npm run build` | Production build. It also type-checks and lints, so run it before you push |
| `npm start` | Serve the production build |
| `npm run lint` / `npm run typecheck` | Lint or type-check on their own |
| `npm run db:migrate` | Apply `db/schema.sql` to the database in `DATABASE_URL` |
| `npm run db:check` | Test the Neon connection and print each table with its row count |
| `npm run brand:assets` | Regenerate the favicon, icons and social images from `logo.png` |

The site runs fine with no database at all. The forms reply "not available yet" and Insights shows "coming
soon", so you can work on the design without setting anything up.

---

## Environment variables

Local values go in `.env.local`. Git ignores this file, so secrets never get committed. `.env.example`
documents every variable and is safe to commit.

| Variable | Needed for | Example |
|---|---|---|
| `DATABASE_URL` | Forms, admin, Insights | `postgresql://user:pass@ep-xxx-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require` |
| `ADMIN_USERNAME` | `/admin` | `robert` |
| `ADMIN_PASSWORD` | `/admin` | A long passphrase, at least 12 characters |
| `NEXT_PUBLIC_SITE_URL` | Production | `https://robertkampilaari.com` (no trailing slash) |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | The `content` value from Google's HTML-tag method |

`lib/env.ts` checks these values at startup. If one is malformed, the site logs a warning and treats it as
unset rather than crashing. Restart `npm run dev` after any change to `.env.local`, because Next.js only reads
the file at startup.

---

## The database (Neon)

1. Create a free project at [neon.tech](https://neon.tech). For visitors in Ghana, a European region such as
   Frankfurt is the closest option.
2. Go to **Connection Details**, choose **Pooled connection**, and copy the string. It should end with
   `?sslmode=require`.
3. Paste it into `.env.local` as `DATABASE_URL`.
4. Run `npm run db:migrate`. It's safe to run more than once, because every statement uses `if not exists`.
5. Run `npm run db:check`. You should see something like:

   ```
   Connected to "neondb" (PostgreSQL 17.5)
     ✓ inquiries: 0 rows
     ✓ insights: 0 rows
     ✓ subscribers: 0 rows
     ✓ compass_results: 0 rows
   ```

| Table | Filled by | Holds |
|---|---|---|
| `inquiries` | The contact wizard and the speaking form | Speaking, partnership, media and general enquiries |
| `subscribers` | Book alerts, Insights sign-up, the Summit delegate pass | One row per email per interest (`insights`, `books`, `summit`) |
| `compass_results` | The Leadership Compass | The resulting level only. No answers, no personal data |
| `insights` | You (see [Publishing Insights](#publishing-insights)) | Articles |

One limitation: the migration only creates tables that don't exist yet. It won't alter a table that's already
there. If you change a column later, write that change as its own `alter table` statement and run it in Neon's
SQL Editor.

---

## The admin inbox

Go to `/admin` and sign in with `ADMIN_USERNAME` and `ADMIN_PASSWORD`. You'll see enquiry counts by type,
subscribers by interest and Compass results by level. Below that are the latest 100 enquiries (click one to
expand it; the email is a mailto link) and the subscriber list.

If either variable is empty, `/admin` stays switched off. Search engines are told not to index it.

---

## Editing content

All the wording lives in `data/`, separate from the design. Change the words there and the pages update.

| File | What's in it |
|---|---|
| `data/profile.ts` | Biography, current role, education, belief, vision, motto |
| `data/chapters.ts` | The five chapters on the About page |
| `data/pillars.ts` | At-a-glance items, leadership areas, Summit focus, the five-level framework, manifesto lines |
| `data/books.ts` | The books. Add synopses, publishers and buying links when they exist |
| `data/speaking.ts` | Speaking themes and formats |
| `data/compass.ts` | Compass questions and the advice for each level |
| `data/gallery.ts` | Every photo and every impact story |
| `data/images.ts` | Which photo goes where, plus the one-page-per-photo check |
| `data/journey.ts` | The eleven milestones |
| `data/paths.ts`, `data/commands.ts` | The path switcher and the command palette |
| `data/navigation.ts` | The menu and social links (replace each `null` with a real profile URL) |

---

## Publishing Insights

There's no CMS yet. You add articles straight to Neon from its SQL Editor:

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
  'leadership',   -- leadership | youth-development | career | personal-growth | entrepreneurship | public-service | community-development
  true,           -- show it as the featured article
  'published',    -- or 'draft' to keep it hidden
  now()
);
```

In the body, a blank line starts a new paragraph, `## ` starts a heading and `> ` starts a pull quote. For a
cover image, put the file in `public/images/insights/` and set `cover_image` to `'/images/insights/your-file.jpg'`.
New articles show up on `/insights` and in the sitemap within about five minutes.

---

## Brand assets

`logo.png` in the project root generates the favicon, the Apple touch icon, the header monogram and the social
share images. After you replace it, run `npm run brand:assets`.

Colours and fonts are set once, in `app/globals.css`:

| | |
|---|---|
| Colours | Night green `#0b2a20`, gold `#e6c77e`, ivory `#f5f1e8` |
| Fonts | Cinzel for labels, Newsreader for headings, Inter for body text, Allura for the "See you at the top" signature |

---

## Deploying to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and **import this GitHub repository**. Import it, don't
   upload a folder. That link is what makes every push go live.
2. Before the first deploy, add the variables from [Environment variables](#environment-variables) under
   **Environment Variables**. Set `NEXT_PUBLIC_SITE_URL` to the real domain.
3. Deploy, then add the custom domain under **Settings → Domains**.
4. Make sure `npm run db:migrate` has been run against the production database.

From then on, pushing to `main` deploys automatically.

**If you push and nothing changes on the live site,** open the project's **Deployments** tab and check that
the newest entry shows your latest commit message. If it doesn't, the project isn't connected to this repo.
This has happened before. The fix is **Settings → Git → Connect Git Repository**, or a fresh import as in
step 1. If the deployment is there but shows *Error*, open it: the build log names the file and line that
failed, and running `npm run build` locally will show you the same error.

Neon's Vercel integration can create the database and set `DATABASE_URL` for you, if you'd rather not copy
strings around.

---

## Google Search Console

1. Deploy with `NEXT_PUBLIC_SITE_URL` set to the live domain.
2. In [Search Console](https://search.google.com/search-console), add the site and choose the **HTML tag**
   method. Copy only the `content` value into `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy.
3. Submit `https://<your-domain>/sitemap.xml` under **Sitemaps**.
4. Use **URL Inspection → Request indexing** on the homepage.

The site already provides a sitemap, robots.txt, canonical URLs, Open Graph and X cards, and structured data
for Person, WebSite, Book and Article.

---

## Security notes

The public forms write to the database, so the API routes are protected in a few ways:

- Every database query passes values as parameters, so form input can never become SQL.
- Every field is validated with zod, and length-limited, before it gets near the database.
- The contact and sign-up forms have a hidden honeypot field. Bots that fill it get a polite "thank you" and
  nothing is stored.
- `lib/requestGuard.ts` rejects posts from other websites (403) and oversized requests (413). It also limits
  each visitor to 5 enquiries, 8 sign-ups and 20 Compass results per 10 minutes (429).
- `/admin` sits behind HTTP Basic Auth in `middleware.ts`, which compares passwords in constant time.

The rate limit is kept in each server instance's memory. That's enough to stop casual flooding. If real spam
ever shows up, the next step is to move the counter into Neon or Upstash so every instance shares it.

---

## Project structure

```
app/                        Pages and API routes (App Router)
  api/inquiries|subscribe|compass/   Form endpoints
  admin/                    Private inbox
  gallery/                  Impact stories, all photos, Which moment?
  speaker/one-sheet/        Printable one-sheet
components/
  ui/                       Small building blocks (buttons, image panel, tilt card…)
  layout/                   Header, footer, mobile menu
  sections/                 Page sections
  features/                 Interactive pieces: gallery, journey, compass, planner, pass, forms…
data/                       All wording, photos and milestones
hooks/                      useJourney, useCollection, useTilt, form hooks
lib/                        env, db, queries, validation, request guard, SEO
db/schema.sql               Database schema
docs/screenshots/           The images in this README
public/images/              The 81 photographs, one folder per event
scripts/                    migrate.ts, db-check.ts, brand-assets.ts
middleware.ts               Basic Auth for /admin
```

Code conventions are in `nextjs-llm-instructions.md`: TypeScript throughout, Tailwind for styling, server
components unless a component needs interaction, and files kept under 200 lines.

---

## Content rules

Every fact about Robert on this site traces back to `PROFILE.txt` or to what a photograph visibly shows (event
names and themes printed on banners, for example). Please don't add awards, statistics, dates, partners,
testimonials or titles unless someone can point to a source. The manifesto lines are editorial framing, not
quotes, and shouldn't be presented as things he said.

---

## Troubleshooting

| What's happening | What to do |
|---|---|
| I pushed, but the live site didn't change | See [Deploying to Vercel](#deploying-to-vercel). Usually the Vercel project isn't linked to this repo |
| Forms say "not available yet" | `DATABASE_URL` is empty or wrong. Check `.env.local`, run `npm run db:check`, then restart the dev server |
| A form says "Too many submissions" | That's the rate limit. Wait ten minutes, or restart the dev server to reset it |
| `/admin` keeps asking for a password | Check `ADMIN_USERNAME` and `ADMIN_PASSWORD` (12+ characters), then restart |
| The dev server says a photo is used on more than one page | Remove the duplicate id from `data/images.ts`. The error names the file |
| `npm run db:migrate` fails with a syntax error | Your Node is too old to run TypeScript files. Install Node 22.18+ or 24 |
| `node` or `npm` "is not recognised" | Node isn't on your PATH. Reinstall it with "Add to PATH" ticked, then open a new terminal |
| Slow installs or file-lock errors on Windows | The project sits inside OneDrive. Pause syncing, or move the folder out of OneDrive |
| Changes to `.env.local` don't apply | Stop and restart `npm run dev` |

---

## Credits

Tamale Youth Summit photography by **OnGod Studios** and **Elpis Photography**, credited on each photo where
their watermark appears. Please confirm publishing rights with the photographers before reusing any image
outside this site.

Designed and developed by **Richard Mensah**.

*See you at the top.*
