import type { NavItem, SocialLink } from "@/types"

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Youth Development", href: "/youth-development" },
  { label: "Author", href: "/author" },
  { label: "Speaker", href: "/speaker" },
  { label: "Tamale Youth Summit", href: "/tamale-youth-summit" },
  { label: "Gallery", href: "/gallery" },
  { label: "Insights", href: "/insights" },
]

export const CONTACT_NAV: NavItem = { label: "Contact", href: "/contact" }

/** Replace null with real profile URLs when they are supplied. */
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "LinkedIn", href: null },
  { label: "X (Twitter)", href: null },
  { label: "Facebook", href: null },
  { label: "Instagram", href: null },
]
