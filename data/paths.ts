import type { VisitorPath } from "@/types"

/** Tailored next steps for each kind of visitor. Every action points to a real feature. */
export const VISITOR_PATHS: VisitorPath[] = [
  {
    id: "committee",
    label: "Scholarship or programme committee",
    headline: "Review his mandate, record and publications in one briefing.",
    actions: [
      { title: "Open the Briefing Dossier", description: "A printable two-page candidate summary.", href: "/dossier" },
      { title: "Verify the public mandate", description: "Regional Director, National Youth Authority.", href: "/leadership" },
      { title: "Examine the field record", description: "Summits, programmes and engagements in photographs.", href: "/gallery" },
    ],
  },
  {
    id: "young-person",
    label: "I'm a young person",
    headline: "Find out where you are on the climb, and what to do next.",
    actions: [
      { title: "Take the Leadership Compass", description: "Five quick reflections reveal your current level.", href: "/youth-development#compass" },
      { title: "Get your Summit pass", description: "Register interest in the Tamale Youth Summit.", href: "/tamale-youth-summit#pass" },
      { title: "Read Beyond Handshakes", description: "Networking for career and life progress.", href: "/author" },
    ],
  },
  {
    id: "organisation",
    label: "We're an organisation",
    headline: "Partner on youth empowerment, enterprise and community initiatives.",
    actions: [
      { title: "Explore the six focus areas", description: "Where public leadership meets opportunity.", href: "/leadership#focus" },
      { title: "See the partnership model", description: "Institutions, development partners and business.", href: "/leadership#partners" },
      { title: "Start a partnership conversation", description: "Tell us what you have in mind.", href: "/contact?type=partnership#enquiry" },
    ],
  },
  {
    id: "organiser",
    label: "I'm planning an event",
    headline: "Shape a session for your audience in under a minute.",
    actions: [
      { title: "Build an invitation brief", description: "Choose audience, format and themes.", href: "/speaker#planner" },
      { title: "Open the speaker one-sheet", description: "A printable page to share with your team.", href: "/speaker/one-sheet" },
      { title: "Send a speaking invitation", description: "Dates, location and what you hope for.", href: "/speaker#invite" },
    ],
  },
  {
    id: "media",
    label: "I'm from the media",
    headline: "Background, themes and a direct line for interviews.",
    actions: [
      { title: "Read the biography", description: "Role, education, books and initiatives.", href: "/about" },
      { title: "Speaker one-sheet", description: "A ready summary for producers and editors.", href: "/speaker/one-sheet" },
      { title: "Request an interview", description: "Commentary and public engagement.", href: "/contact?type=media#enquiry" },
    ],
  },
]
