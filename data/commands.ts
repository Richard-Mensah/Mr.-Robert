import type { Command } from "@/types"

export const COMMANDS: Command[] = [
  { group: "Actions", label: "Invite Robert to speak", href: "/speaker#invite", keywords: "booking event keynote" },
  { group: "Actions", label: "Plan an event with Robert", href: "/speaker#planner", keywords: "planner organiser brief" },
  { group: "Actions", label: "Open the speaker one-sheet", href: "/speaker/one-sheet", keywords: "print pdf media kit" },
  { group: "Actions", label: "Take the Leadership Compass", href: "/youth-development#compass", keywords: "quiz assessment level" },
  { group: "Actions", label: "Get your Summit delegate pass", href: "/tamale-youth-summit#pass", keywords: "register interest tamale" },
  { group: "Actions", label: "Partner on youth development", href: "/contact?type=partnership#enquiry", keywords: "organisation collaborate" },
  { group: "Actions", label: "Media and interview request", href: "/contact?type=media#enquiry", keywords: "press journalist" },
  { group: "Pages", label: "Home", href: "/" },
  { group: "Pages", label: "About Robert", href: "/about", keywords: "biography story" },
  { group: "Pages", label: "Leadership", href: "/leadership", keywords: "national youth authority regional director" },
  { group: "Pages", label: "Youth Development", href: "/youth-development", keywords: "framework mission" },
  { group: "Pages", label: "Author: the books", href: "/author", keywords: "if i knew then beyond handshakes" },
  { group: "Pages", label: "Speaker", href: "/speaker", keywords: "themes topics" },
  { group: "Pages", label: "Tamale Youth Summit", href: "/tamale-youth-summit", keywords: "summit" },
  { group: "Pages", label: "Insights", href: "/insights", keywords: "articles blog" },
  { group: "Pages", label: "Contact", href: "/contact", keywords: "email message" },
]

export const OPEN_PALETTE_EVENT = "rkl-open-palette"
