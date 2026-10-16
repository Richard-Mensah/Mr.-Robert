import type { SpeakingTheme } from "@/types"

/** Themes taken directly from Robert's documented work, writing and mission. */
export const CORE_THEMES: SpeakingTheme[] = [
  {
    title: "Youth Leadership",
    description: "Developing the leadership capacity of young people to create change in their communities.",
  },
  {
    title: "Personal Growth & Purpose",
    description: "Embracing growth, developing abilities and pursuing a purposeful life.",
  },
  {
    title: "Networking & Career Progress",
    description: "Cultivating meaningful relationships that move careers and lives forward.",
  },
  {
    title: "Opportunity & Entrepreneurship",
    description: "Connecting young people to opportunities, enterprise and sustainable livelihoods.",
  },
  {
    title: "Responsible Citizenship",
    description: "Youth participation in governance, peacebuilding and civic responsibility.",
  },
  {
    title: "Community Transformation",
    description: "Young people as active participants in designing and delivering local solutions.",
  },
]

/** Formats an organiser may request. To be confirmed with Robert for each event. */
export const ENGAGEMENT_FORMATS: string[] = [
  "Keynote address",
  "Panel conversation",
  "Youth workshop or masterclass",
  "Book conversation",
]
