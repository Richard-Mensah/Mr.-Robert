import type { Milestone } from "@/types"

/**
 * One milestone per section (unlocked by visiting), plus milestones unlocked by features:
 * Navigator (Leadership Compass), Storykeeper (gallery quiz) and Curator (a moment from every story).
 */
export const MILESTONES: Milestone[] = [
  { id: "pathfinder", path: "/about", title: "Pathfinder", description: "Discovered Robert's story." },
  { id: "steward", path: "/leadership", title: "Steward", description: "Explored his public leadership." },
  { id: "catalyst", path: "/youth-development", title: "Catalyst", description: "Walked the youth development trail." },
  { id: "reader", path: "/author", title: "Reader", description: "Opened the books." },
  { id: "listener", path: "/speaker", title: "Listener", description: "Heard the speaking themes." },
  { id: "convener", path: "/tamale-youth-summit", title: "Convener", description: "Joined the Tamale Youth Summit." },
  { id: "witness", path: "/gallery", title: "Witness", description: "Stepped into the moments gallery." },
  { id: "connector", path: "/contact", title: "Connector", description: "Found the way to connect." },
  { id: "navigator", path: "/youth-development#compass", title: "Navigator", description: "Completed the Leadership Compass." },
  { id: "storykeeper", path: "/gallery#quiz", title: "Storykeeper", description: "Named the moments in Which Moment?" },
  { id: "curator", path: "/gallery#moments", title: "Curator", description: "Collected a moment from every story." },
]

export const JOURNEY_STORAGE_KEY = "rkl-journey"
