-- Robert Kampi Laari website: Neon Postgres schema
-- Run with: npm run db:migrate  (reads DATABASE_URL from .env.local)

create table if not exists inquiries (
  id            bigserial primary key,
  kind          text not null check (kind in ('speaking', 'partnership', 'media', 'general')),
  name          text not null,
  email         text not null,
  organisation  text,
  event_name    text,
  proposed_date text,
  location      text,
  topic         text,
  message       text not null,
  status        text not null default 'new' check (status in ('new', 'in_progress', 'closed')),
  created_at    timestamptz not null default now()
);

create index if not exists inquiries_created_at_idx on inquiries (created_at desc);
create index if not exists inquiries_kind_idx on inquiries (kind);

-- Insights (articles). Body is plain text: blank lines separate paragraphs,
-- lines starting "## " are headings, lines starting "> " are pull quotes.
create table if not exists insights (
  id           bigserial primary key,
  slug         text not null unique,
  title        text not null,
  excerpt      text not null,
  body         text not null,
  category     text not null check (category in (
                 'leadership', 'youth-development', 'career', 'personal-growth',
                 'entrepreneurship', 'public-service', 'community-development')),
  cover_image  text,
  featured     boolean not null default false,
  status       text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists insights_published_idx on insights (status, published_at desc);
create index if not exists insights_category_idx on insights (category);

-- Opt-in updates: new insights, book availability, Tamale Youth Summit news.
create table if not exists subscribers (
  id         bigserial primary key,
  email      text not null,
  name       text,
  interest   text not null check (interest in ('insights', 'books', 'summit')),
  role       text,
  created_at timestamptz not null default now(),
  unique (email, interest)
);

create index if not exists subscribers_interest_idx on subscribers (interest, created_at desc);

-- Anonymous Leadership Compass outcomes (no personal data).
create table if not exists compass_results (
  id         bigserial primary key,
  level      text not null check (level in ('discover', 'develop', 'connect', 'lead', 'transform')),
  created_at timestamptz not null default now()
);
