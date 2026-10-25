# Robert Kampi Laari

The official website of Robert Kampi Laari: Regional Director of the National Youth Authority in Ghana's North
East Region, youth development advocate, author, speaker, and founder of the Tamale Youth Summit.

The site has one job above the others. When Robert applies for a scholarship, a fellowship or an international
programme, a selection panel should be able to open this site and come away with a clear, verifiable picture
of his mandate and his record in a few minutes. Everything else (the Summit pages, the books, the speaking
planner) still works for organisers, media and young people, but the design is pitched at that reviewer.

![The homepage hero: a night-green page with Robert's portrait in a framed credential card, a gold mandate seal, and the headline "Empowering young people to lead, build and transform."](docs/screenshots/home-hero.jpg)

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4 and Neon Postgres. Designed and developed by
Richard Mensah.

---

## Contents

- [Who it's for](#who-its-for)
- [What's on the site](#whats-on-the-site)
- [Design system](#design-system)
- [Credentials: the game layer](#credentials-the-game-layer)
- [The Record](#the-record)
- [The Briefing Dossier](#the-briefing-dossier)
- [Motion and accessibility](#motion-and-accessibility)
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

## Who it's for

| Reader | What they need | Where the site sends them |
|---|---|---|
| Scholarship, fellowship and programme committees | Mandate, record, publications, education, in a form they can file | `/dossier`, then Leadership and the Gallery |
| Event organisers | Themes, formats, a way to book | `/speaker`, the invitation planner, the one-sheet |
| Media | Background and a direct line | `/about`, `/speaker/one-sheet`, `/contact` |
| Organisations | Focus areas and how to partner | `/leadership` |
| Young people | The framework, the Compass, the Summit | `/youth-development`, `/tamale-youth-summit` |

The "Choose your path" switcher on the homepage covers all five, with committees listed first.

---

## What's on the site

| Page | What you'll find there |
|---|---|
| Home `/` | The hero with his current mandate, The Record slideshow, a portfolio summary, the path switcher, the Summit, field photos and the books |
| Briefing Dossier `/dossier` | A two-sheet, print-ready candidate summary for committees |
| About `/about` | His biography in five scroll-driven chapters |
| Leadership `/leadership` | The public role at the NYA, a focus-area explorer with SDG alignment, and a partnership diagram |
| Youth Development `/youth-development` | A five-level growth framework and the Leadership Compass |
| Author `/author` | *If I Knew Then* and *Beyond Handshakes* as 3D books, with a release sign-up |
| Speaker `/speaker` | Speaking themes and an event planner that drafts an invitation brief |
| Speaker one-sheet `/speaker/one-sheet` | A printable page for organisers and press |
| Tamale Youth Summit `/tamale-youth-summit` | What the Summit is for, and a delegate credential that personalises itself as you type |
| Gallery `/gallery` | The field record: fifteen impact stories, all 81 photographs, and the Field Recall exercise |
| Insights `/insights` | Articles with search and category filters |
| Contact `/contact` | A three-step correspondence wizard |

---

## Design system

The look is meant to read as institutional rather than personal, closer to a policy institute or a chancery
than to a motivational brand.

### Colour

The colours come from the RK logo. Night green carries the dark surfaces, ivory carries the documents, and two
accents split the meaning between them. Gold always means a credential or a primary action. A vivid emerald
always means progress, information or something you can interact with. The Ghana flag colours appear only as thin rules, on the
letterhead, the hero card and the delegate credential.

| Token | Value | Used for |
|---|---|---|
| `night` / `ink` | `#0b2a20` / `#06140f` | Heroes, header, footer; body text on light pages |
| `night-soft` | `#10382a` | Raised cards on dark surfaces |
| `ivory` / `paper` | `#f5f1e8` / `#fbf9f4` | Light sections and dossier sheets |
| `gold` / `gold-light` / `gold-deep` | `#b8913f` / `#e6c77e` / `#8a6a27` | Seals, rules, primary buttons, gold text on light |
| `cerulean` / `cerulean-light` | `#17784f` / `#5fe3a6` | Emerald: progress rings, focus rings, status pills, data chips |
| `forest` / `forest-light` | `#1f4d3a` / `#8fb8a2` | Secondary text and labels |
| `heritage` | `#1f5a43` | Ghana green, in small doses |

The emerald tokens are still called `cerulean`. The site briefly tried a navy-and-blue palette before going back
to green, and the names were kept so a palette change stays a one-file edit in `app/globals.css`.

Every text and background pair used on the site meets WCAG AA. The lowest is `gold-deep` on paper at 4.8:1.

### Type

Labels, seals and section numbers are set in Cormorant SC, which gives them the small-caps look of a printed
letterhead. Headings use Newsreader and body text uses Inter. Allura is reserved for the "See you at the top"
signature.

### Surfaces

Dark sections sit on a faint twelve-column hairline grid (`.grid-chancery`). Credentials
use a guilloche pattern like a banknote (`.guilloche`) and embossed seals (`.seal-emboss`). Section labels
carry a gold and emerald double rule (`.data-rule`). All of these live in `app/globals.css`, along with the
keyframes for the seal stamp and the slideshow.

The reusable pieces are in `components/ui/`: `Seal`, `StatusPill`, `DataRule`, `ProgressRing` and `CountUp`.

---

## Credentials: the game layer

A reviewer collects credentials as they read. Visiting a section verifies its credential, and three are earned
by doing something. Nothing is gated, nobody signs up, and progress is stored only in the visitor's browser.

![A credential being verified: a gold seal stamps into a toast reading "Credential verified, Profile Reviewed", while the page hero shows the same credential.](docs/screenshots/seal-toast.jpg)

| Credential | Category | How it's earned |
|---|---|---|
| Profile Reviewed | Mandate | Visit About |
| Mandate Verified | Mandate | Visit Leadership |
| Framework Studied | Mandate | Visit Youth Development |
| Publications Logged | Record | Visit Author |
| Addresses Reviewed | Record | Visit Speaker |
| Convening Record | Record | Visit the Tamale Youth Summit |
| Field Record | Record | Visit the Gallery |
| Channel Opened | Engagement | Visit Contact |
| Compass Assessed | Engagement | Finish the Leadership Compass |
| Field Recall | Engagement | Score 4 or 5 out of 5 in the Field Recall exercise |
| Full Archive | Engagement | Open at least one photo from every impact story |

Every inner page shows the credential it awards at the foot of its hero, with a running count. When one is
earned, a seal stamps down in a toast in the corner. The Briefing button in the header carries a progress ring
and opens a passport-style panel that groups the seals by category and links to the dossier.

Credentials also raise the reviewer's rank. The rank shows in the Briefing panel, and the toast calls it out
when a new one is reached.

| Rank | Reached at |
|---|---|
| 1. Observer | 0 credentials |
| 2. Reviewer | 3 |
| 3. Senior Reviewer | 6 |
| 4. Rapporteur | 9 |
| 5. Envoy | All 11 |

![The Leadership page hero, ending in a "Credential verified: Mandate Verified" badge.](docs/screenshots/page-credential.jpg)

The ids in `data/journey.ts` (`pathfinder`, `steward` and so on) are left over from the earlier "climb"
version of the game. They were kept on purpose, so anyone who visited before the redesign keeps their
progress.

Photo collecting still works as before. Open a photo on any page and it's logged; the gallery tracks progress
across all 81.

---

## The Record

Directly under the homepage hero is a full-width slideshow of his record. It has eight entries: the public
mandate, six field stories and the two books.

![The Record: a full-bleed photograph behind a dark green gradient, the entry "Regional Director, National Youth Authority (NYA)", and a filmstrip index with play and pause controls.](docs/screenshots/record-slideshow.jpg)

Each slide is built from data the site already has (`data/record.ts` reads `data/gallery.ts`,
`data/profile.ts` and `data/books.ts`), so there's no separate copy to keep in sync and no room for an
invented figure. It advances every seven seconds with a slow zoom on the photograph and a progress bar that
fills along the filmstrip. Hovering or focusing inside it pauses the timer. Arrow keys and swipes move between
slides, and there's always a visible pause button.

To change what appears, edit `STORY_SLUGS` in `data/record.ts`.

---

## The Briefing Dossier

`/dossier` is the page to send a committee. It prints as exactly two A4 pages. Each sheet carries the night-green
letterhead with the gold and Ghana-flag rule, and a running footer with the page number. Brand colours are kept
in print (`print-color-adjust: exact`), and the page sets its own zero margin, so browsers leave off their date
and URL lines.

The first sheet, "Profile and mandate", opens with his portrait, office and a short introduction. Below that
are the record in figures, the mandate and his governance commitments, the six focus areas with their SDG
alignment, and his stated position and vision side by side. The second, "Record and engagement", covers the
Tamale Youth Summit, a photographed field record of eight engagements, the five-level youth development
framework, publications with covers, education, speaking themes and formats, and a correspondence panel signed
with the motto.

To get a file, click "Print or save as PDF" on the page and choose "Save as PDF" as the destination.

![The Briefing Dossier: an ivory A4 sheet under a night-green letterhead, with the portrait, figures, mandate and a focus-area table carrying SDG chips.](docs/screenshots/dossier.jpg)

The focus-area table maps each area to the UN Sustainable Development Goals (`data/dossier.ts`). That mapping
is the site's own editorial framing, meant to help international readers place the work. It is footnoted on
the page as such, and it must never be presented as a UN affiliation or endorsement.

**Impact figures.** The figures on the dossier and the homepage are counted from the site's own data. A "young
people reached" figure is ready to show in both places, animated on the homepage, but it stays hidden until
it's set in `data/impact.ts` along with its source. Only fill it in from a document someone can point to,
such as an NYA report or Summit registration records.

---

## Motion and accessibility

The motion is kept small and slow, so a reviewer reading closely isn't distracted by it. It covers:

- headlines that rise line by line from a mask
- a seal that stamps when a credential is earned
- figures that count up, used only on counts the site can verify (field stories, books)
- the slideshow's zoom

Everything animates transform or opacity only.

If the visitor's system asks for reduced motion, the animations collapse to instant changes and the slideshow
starts paused. Every interactive piece works from the keyboard, with a visible emerald focus ring. Every
photograph has alt text written from what it actually shows.

On a phone the page keeps its layout at 390px with no sideways scrolling.

![The homepage at phone width.](docs/screenshots/mobile-home.jpg)

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
| `data/pillars.ts` | Portfolio items, leadership areas, Summit focus, the five-level framework, manifesto lines |
| `data/books.ts` | The books. Add synopses, publishers and buying links when they exist |
| `data/speaking.ts` | Speaking themes and formats |
| `data/compass.ts` | Compass questions and the advice for each level |
| `data/gallery.ts` | Every photo and every impact story |
| `data/images.ts` | Which photo goes where, plus the one-page-per-photo check |
| `data/journey.ts` | The eleven credentials and their categories |
| `data/record.ts` | Which stories appear in The Record |
| `data/dossier.ts` | The editorial SDG alignment and its footnote |
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
| Colours | Night green `#0b2a20`, gold `#e6c77e`, emerald `#5fe3a6`, ivory `#f5f1e8` (full table in [Design system](#design-system)) |
| Fonts | Cormorant SC for labels, Newsreader for headings, Inter for body text, Allura for the "See you at the top" signature |

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
  dossier/                  Briefing Dossier for committees
  gallery/                  Impact stories, all photos, Field Recall
  speaker/one-sheet/        Printable one-sheet
components/
  ui/                       Small building blocks (seal, status pill, progress ring, buttons…)
  layout/                   Header, footer, mobile menu
  sections/                 Page sections
  features/                 Interactive pieces: credentials, the Record, dossier, gallery, compass, forms…
data/                       All wording, photos and credentials
hooks/                      useJourney, useSlideshow, useCollection, useTilt, form hooks
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
