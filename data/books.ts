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
    // No flat cover file has been supplied yet. Replace with the real cover
    // (e.g. /images/books/if-i-knew-then-cover.jpg) and drop `position` when it arrives.
    cover: {
      src: "/images/iaas-seminar-26/iaas-seminar-26-02.jpg",
      alt: "Robert Kampi Laari holding up copies of If I Knew Then",
      position: "50% 12%",
    },
  },
  {
    slug: "beyond-handshakes",
    title: "Beyond Handshakes",
    subtitle: "From Potential to Proof — Networking for Career & Life Progress",
    description:
      "A practical work on career and leadership development: how meaningful relationships and intentional networking help people turn potential into proof and make progress in career and life.",
    coverTone: "forest",
    cover: {
      src: "/images/books/books-01.jpg",
      alt: "The front cover of Beyond Handshakes by Robert Kampi Laari",
    },
    back: {
      src: "/images/books/books-03.jpg",
      alt: "Beyond Handshakes opened to show the About the Author and About the Book panels",
    },
  },
]
