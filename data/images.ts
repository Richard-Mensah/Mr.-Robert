import { BOOKS } from "@/data/books"
import { getPhoto } from "@/data/gallery"
import type { ImageAsset } from "@/types"

/**
 * Which photograph appears where. Every photo is used on at most one page (the /gallery
 * archive aside), and a development-time check below fails loudly on any repeat.
 */

function photo(id: string, position?: string): ImageAsset {
  const { src, alt } = getPhoto(id)
  return position ? { src, alt, position } : { src, alt }
}

/** Single-photo slots inside page sections. */
export const IMAGES = {
  // Home
  hero: photo("portrait-01", "50% 20%"),
  aboutPreview: photo("north-east-youth-summit-2026-05", "60% 40%"),
  summitHome: photo("tamale-youth-summit-2026-07", "50% 30%"),
  // About
  biography: photo("uds-address-06", "50% 25%"),
  // Leadership
  leadership: photo("national-apprenticeship-01", "45% 30%"),
  // Youth development
  youth: photo("dream-big-campus-tour-01", "50% 35%"),
  summitYouth: photo("tamale-youth-summit-2025-02"),
  // Speaker
  speaking: photo("uds-address-07", "50% 35%"),
  oneSheet: photo("uds-address-05", "50% 25%"),
  // Tamale Youth Summit
  summitPage: photo("tamale-youth-summit-2025-01"),
} satisfies Record<string, ImageAsset>

/** Homepage photo strip leading into the gallery. */
export const HOME_TEASER: string[] = [
  "tamale-youth-summit-2026-03",
  "national-youth-month-2026-05",
  "dream-big-campus-tour-07",
  "red-stop-walk-03",
  "school-mentorship-02",
  "uds-address-08",
]

/** Book photos on the homepage, so the Author page keeps the covers to itself. */
export const HOME_BOOK_IMAGES: Record<string, ImageAsset> = {
  "if-i-knew-then": photo("dream-big-campus-tour-02", "40% 40%"),
  "beyond-handshakes": photo("books-02"),
}

export type MomentsPage =
  | "about"
  | "leadership"
  | "youth-development"
  | "author"
  | "speaker"
  | "tamale-youth-summit"
  | "contact"
  | "insights"

/** The collectable "moments" mosaic on each inner page. */
export const PAGE_MOMENTS: Record<MomentsPage, { title: string; photos: string[] }> = {
  about: {
    title: "Moments that shaped the story.",
    photos: ["nugs-uds-03", "north-east-youth-summit-2026-01", "talks-and-engagements-06"],
  },
  leadership: {
    title: "Public service, in person.",
    photos: ["national-apprenticeship-04", "youth-peace-security-01", "north-east-youth-summit-2026-06"],
  },
  "youth-development": {
    title: "Where young people lead.",
    photos: ["school-mentorship-03", "national-youth-month-2026-10", "drug-abuse-prevention-forum-01"],
  },
  author: {
    title: "The books, in readers' hands.",
    photos: ["dream-big-campus-tour-03", "iaas-seminar-26-01", "dream-big-campus-tour-05"],
  },
  speaker: {
    title: "On stage across the North.",
    photos: [
      "talks-and-engagements-03",
      "young-innovators-tech-summit-01",
      "talks-and-engagements-05",
      "nugs-uds-01",
    ],
  },
  "tamale-youth-summit": {
    title: "Inside the summit.",
    photos: [
      "tamale-youth-summit-2026-04",
      "tamale-youth-summit-2026-10",
      "tamale-youth-summit-2026-09",
      "tamale-youth-summit-2025-03",
    ],
  },
  contact: {
    title: "Every partnership starts with a conversation.",
    photos: ["red-stop-walk-04", "north-east-youth-summit-2026-03", "dream-big-campus-tour-06"],
  },
  insights: {
    title: "Ideas, tested in rooms full of people.",
    photos: ["talks-and-engagements-02", "uds-address-02", "dream-big-campus-tour-04"],
  },
}

if (process.env.NODE_ENV !== "production") {
  const used = [
    ...Object.values(IMAGES).map((image) => image.src),
    ...HOME_TEASER.map((id) => getPhoto(id).src),
    ...Object.values(HOME_BOOK_IMAGES).map((image) => image.src),
    ...BOOKS.flatMap((book) => [book.cover?.src, book.back?.src]).filter(Boolean),
    ...Object.values(PAGE_MOMENTS).flatMap((page) => page.photos.map((id) => getPhoto(id).src)),
  ]
  const repeats = used.filter((src, index) => used.indexOf(src) !== index)
  if (repeats.length > 0) throw new Error(`Photos used on more than one page: ${repeats.join(", ")}`)
}
