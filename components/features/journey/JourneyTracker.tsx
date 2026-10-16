"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import MilestoneToast from "@/components/features/journey/MilestoneToast"
import { MILESTONE_EVENT, useJourney } from "@/hooks/useJourney"
import type { Milestone } from "@/types"

const TOAST_MS = 5200

/** Unlocks the milestone for the current page and celebrates every first-time unlock. */
export default function JourneyTracker() {
  const pathname = usePathname()
  const { unlocked, total, unlockPath } = useJourney()
  const [recent, setRecent] = useState<Milestone | null>(null)

  useEffect(() => {
    const onMilestone = (event: Event) => setRecent((event as CustomEvent<Milestone>).detail)
    window.addEventListener(MILESTONE_EVENT, onMilestone)
    return () => window.removeEventListener(MILESTONE_EVENT, onMilestone)
  }, [])

  useEffect(() => {
    unlockPath(pathname)
  }, [pathname, unlockPath])

  useEffect(() => {
    if (!recent) return
    const timer = window.setTimeout(() => setRecent(null), TOAST_MS)
    return () => window.clearTimeout(timer)
  }, [recent])

  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed bottom-5 left-5 right-5 z-50 flex print:hidden justify-center sm:left-auto sm:right-8 sm:justify-end">
      {recent && (
        <MilestoneToast milestone={recent} count={unlocked.length} total={total} onClose={() => setRecent(null)} />
      )}
    </div>
  )
}
