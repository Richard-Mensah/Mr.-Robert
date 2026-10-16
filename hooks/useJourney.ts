"use client"

import { useCallback, useSyncExternalStore } from "react"
import { JOURNEY_STORAGE_KEY, MILESTONES } from "@/data/journey"
import type { Milestone } from "@/types"

const CHANGE_EVENT = "rkl-journey-change"
export const MILESTONE_EVENT = "rkl-milestone"
const EMPTY = "[]"

function readRaw() {
  try {
    return window.localStorage.getItem(JOURNEY_STORAGE_KEY) ?? EMPTY
  } catch {
    return EMPTY
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback)
  window.addEventListener("storage", callback)
  return () => {
    window.removeEventListener(CHANGE_EVENT, callback)
    window.removeEventListener("storage", callback)
  }
}

function parse(raw: string): string[] {
  try {
    const value: unknown = JSON.parse(raw)
    return Array.isArray(value) ? value.filter((item): item is string => typeof item === "string") : []
  } catch {
    return []
  }
}

/** Stores a milestone and announces it. Returns the milestone only on its first unlock. */
function unlock(milestone: Milestone | undefined): Milestone | null {
  if (!milestone) return null
  const current = parse(readRaw())
  if (current.includes(milestone.id)) return null
  try {
    window.localStorage.setItem(JOURNEY_STORAGE_KEY, JSON.stringify([...current, milestone.id]))
  } catch {
    return null
  }
  window.dispatchEvent(new Event(CHANGE_EVENT))
  window.dispatchEvent(new CustomEvent<Milestone>(MILESTONE_EVENT, { detail: milestone }))
  return milestone
}

/**
 * Milestones the visitor has unlocked, stored only in their own browser.
 * Page visits unlock section milestones; features can unlock others by id.
 */
export function useJourney() {
  const raw = useSyncExternalStore(subscribe, readRaw, () => EMPTY)
  const unlocked = parse(raw)

  const unlockPath = useCallback((pathname: string) => {
    return unlock(MILESTONES.find((item) => pathname === item.path || pathname.startsWith(`${item.path}/`)))
  }, [])

  const unlockMilestone = useCallback((id: string) => unlock(MILESTONES.find((item) => item.id === id)), [])

  return { unlocked, total: MILESTONES.length, unlockPath, unlockMilestone }
}
