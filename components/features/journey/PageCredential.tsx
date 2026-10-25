"use client"

import { usePathname } from "next/navigation"
import MilestoneIcon from "@/components/features/journey/MilestoneIcon"
import Seal from "@/components/ui/Seal"
import { MILESTONES } from "@/data/journey"
import { useJourney } from "@/hooks/useJourney"

/** Shows the credential this page awards, and whether the visitor has it yet. */
export default function PageCredential() {
  const pathname = usePathname()
  const { unlocked, total } = useJourney()
  const credential = MILESTONES.find((item) => item.path === pathname)
  if (!credential) return null
  const earned = unlocked.includes(credential.id)

  return (
    <div className="flex items-center gap-4 rounded-sm border border-ivory/10 bg-ink/40 p-3 pr-5 backdrop-blur-sm">
      <Seal size="sm" state={earned ? "earned" : "locked"}>
        <MilestoneIcon id={credential.id} className="size-5" />
      </Seal>
      <div>
        <p className="font-display text-xs tracking-[0.2em] text-cerulean-light">
          {earned ? "Credential verified" : "Credential on this page"}
        </p>
        <p className="font-serif text-lg leading-tight text-ivory">{credential.title}</p>
        <p className="text-xs tabular-nums text-ivory/50">
          {unlocked.length} of {total} in your briefing
        </p>
      </div>
    </div>
  )
}
