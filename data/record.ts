import { BOOKS } from "@/data/books"
import { STORY_CATEGORIES, getPhoto, getStory } from "@/data/gallery"
import { BIOGRAPHY, PROFILE } from "@/data/profile"
import type { Photo } from "@/types"

export type RecordSlide = {
  id: string
  kicker: string
  title: string
  context: string
  summary: string
  photo: Photo
  href: string
}

/** Stories shown in "The Record", in order. Text comes straight from data/gallery.ts. */
const STORY_SLUGS = [
  "tamale-youth-summit-2026",
  "north-east-youth-summit-2026",
  "national-apprenticeship",
  "youth-peace-security",
  "young-innovators-tech-summit",
  "tamale-youth-summit-2025",
]

const CATEGORY_LABEL = Object.fromEntries(STORY_CATEGORIES.map((item) => [item.slug, item.label]))

const storySlides: RecordSlide[] = STORY_SLUGS.flatMap((slug) => {
  const story = getStory(slug)
  if (!story) return []
  return [
    {
      id: story.slug,
      kicker: CATEGORY_LABEL[story.category],
      title: story.title,
      context: story.context,
      summary: story.summary,
      photo: getPhoto(story.cover),
      href: `/gallery?story=${story.slug}#moments`,
    },
  ]
})

export const RECORD_SLIDES: RecordSlide[] = [
  {
    id: "mandate",
    kicker: "Public mandate",
    title: `${PROFILE.currentRole.title}, ${PROFILE.currentRole.organisation}`,
    context: PROFILE.currentRole.region,
    summary: BIOGRAPHY[1],
    photo: getPhoto("north-east-youth-summit-2026-05"),
    href: "/leadership",
  },
  ...storySlides,
  {
    id: "publications",
    kicker: "Publications",
    title: "Author of two books",
    context: BOOKS.map((book) => book.title).join(" · "),
    summary: BIOGRAPHY[5],
    photo: getPhoto("books-02"),
    href: "/author",
  },
]

export const RECORD_INTERVAL_MS = 7000
