import type { Book } from "@/types"

/**
 * Only titles and subtitles are documented. Publication dates, publishers,
 * synopses and purchase links should be added once supplied.
 */
export const BOOKS: Book[] = [
  {
    slug: "if-i-knew-then",
    title: "If I Knew Then",
    description:
      "One of Robert's written works, part of his wider effort to encourage personal growth and purposeful living. A full synopsis will be added here.",
    coverTone: "ink",
  },
  {
    slug: "beyond-handshakes",
    title: "Beyond Handshakes",
    subtitle: "From Potential to Proof — Networking for Career & Life Progress",
    description:
      "A practical work on career and leadership development: how meaningful relationships and intentional networking help people turn potential into proof and make progress in career and life.",
    coverTone: "forest",
  },
]
