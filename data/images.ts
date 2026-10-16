import type { ImageAsset } from "@/types"

/**
 * Photography slots. Until a real photograph is supplied, a cartoon illustration is shown.
 * To swap: add the file to /public/images and set `ready: true`.
 */
export const IMAGES = {
  hero: {
    src: "/images/robert-hero.jpg",
    alt: "Portrait of Robert Kampi Laari",
    ready: false,
    illustration: "ascent",
  },
  about: {
    src: "/images/robert-portrait.jpg",
    alt: "Robert Kampi Laari",
    ready: false,
    illustration: "author",
  },
  speaking: {
    src: "/images/robert-speaking.jpg",
    alt: "Robert Kampi Laari speaking to an audience",
    ready: false,
    illustration: "speaking",
  },
  summit: {
    src: "/images/tamale-youth-summit.jpg",
    alt: "Participants at the Tamale Youth Summit",
    ready: false,
    illustration: "summit",
  },
  youth: {
    src: "/images/youth-development.jpg",
    alt: "Young people taking part in a youth development programme",
    ready: false,
    illustration: "youth",
  },
  leadership: {
    src: "/images/robert-leadership.jpg",
    alt: "Robert Kampi Laari in his role as Regional Director",
    ready: false,
    illustration: "leadership",
  },
} satisfies Record<string, ImageAsset>
