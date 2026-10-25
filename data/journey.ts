import type { CredentialCategory, Milestone } from "@/types"

/**
 * Credentials a reviewer collects while reading the briefing.
 * Ids are unchanged from the original "climb" milestones so stored progress carries over.
 * Section credentials unlock by visiting; Compass Assessed, Field Recall and Full Archive unlock through features.
 */
export const MILESTONES: Milestone[] = [
  { id: "pathfinder", path: "/about", title: "Profile Reviewed", description: "Read Robert's biography.", category: "mandate" },
  { id: "steward", path: "/leadership", title: "Mandate Verified", description: "Reviewed his public mandate at the NYA.", category: "mandate" },
  { id: "catalyst", path: "/youth-development", title: "Framework Studied", description: "Studied the youth development framework.", category: "mandate" },
  { id: "reader", path: "/author", title: "Publications Logged", description: "Opened the published books.", category: "record" },
  { id: "listener", path: "/speaker", title: "Addresses Reviewed", description: "Reviewed the speaking themes.", category: "record" },
  { id: "convener", path: "/tamale-youth-summit", title: "Convening Record", description: "Examined the Tamale Youth Summit.", category: "record" },
  { id: "witness", path: "/gallery", title: "Field Record", description: "Entered the field archive.", category: "record" },
  { id: "connector", path: "/contact", title: "Channel Opened", description: "Found the official line of contact.", category: "engagement" },
  { id: "navigator", path: "/youth-development#compass", title: "Compass Assessed", description: "Completed the Leadership Compass.", category: "engagement" },
  { id: "storykeeper", path: "/gallery#quiz", title: "Field Recall", description: "Identified the moments in Field Recall.", category: "engagement" },
  { id: "curator", path: "/gallery#moments", title: "Full Archive", description: "Opened a record from every field story.", category: "engagement" },
]

export const CREDENTIAL_CATEGORIES: { id: CredentialCategory; label: string }[] = [
  { id: "mandate", label: "Mandate" },
  { id: "record", label: "Record" },
  { id: "engagement", label: "Engagement" },
]

/** Reviewer ranks, reached at a number of verified credentials. Ordered from lowest to highest. */
export const RANKS: { title: string; at: number }[] = [
  { title: "Observer", at: 0 },
  { title: "Reviewer", at: 3 },
  { title: "Senior Reviewer", at: 6 },
  { title: "Rapporteur", at: 9 },
  { title: "Envoy", at: MILESTONES.length },
]

/** The rank for a credential count, and the next rank with how many credentials it still needs. */
export function rankFor(count: number) {
  const index = RANKS.findLastIndex((rank) => count >= rank.at)
  const next = RANKS[index + 1]
  return { rank: RANKS[index], level: index + 1, next: next ? { title: next.title, remaining: next.at - count } : null }
}

export const JOURNEY_STORAGE_KEY = "rkl-journey"
