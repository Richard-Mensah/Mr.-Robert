"use client"

import { useCallback, useSyncExternalStore } from "react"
import { JOURNEY_STORAGE_KEY, MILESTONES } from "@/data/journey"
import { createStoredList } from "@/lib/storedList"
import type { Milestone } from "@/types"

export const MILESTONE_EVENT = "rkl-milestone"

const store = createStoredList(JOURNEY_STORAGE_KEY)

/** Stores a milestone and announces it. Returns the milestone only on its first unlock. */
function unlock(milestone: Milestone | undefined): Milestone | null {
  if (!milestone || !store.add(milestone.id)) return null
  window.dispatchEvent(new CustomEvent<Milestone>(MILESTONE_EVENT, { detail: milestone }))
  return milestone
}

/**
 * Milestones the visitor has unlocked, stored only in their own browser.
 * Page visits unlock section milestones; features can unlock others by id.
 */
export function useJourney() {
  const raw = useSyncExternalStore(store.subscribe, store.readRaw, store.serverSnapshot)
  const unlocked = store.parse(raw)

  const unlockPath = useCallback((pathname: string) => {
    return unlock(MILESTONES.find((item) => pathname === item.path || pathname.startsWith(`${item.path}/`)))
  }, [])

  const unlockMilestone = useCallback((id: string) => unlock(MILESTONES.find((item) => item.id === id)), [])

  return { unlocked, total: MILESTONES.length, unlockPath, unlockMilestone }
}
