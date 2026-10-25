import { ArrowUp, X } from "lucide-react"
import MilestoneIcon from "@/components/features/journey/MilestoneIcon"
import Seal from "@/components/ui/Seal"
import { rankFor } from "@/data/journey"
import type { Milestone } from "@/types"

type Props = {
  milestone: Milestone
  count: number
  total: number
  onClose: () => void
}

/** A seal stamps down when a credential is verified; a new rank is called out when one is reached. */
export default function MilestoneToast({ milestone, count, total, onClose }: Props) {
  const standing = rankFor(count)
  const promoted = standing.level > rankFor(count - 1).level

  return (
    <div className="guilloche pointer-events-auto relative flex w-full max-w-sm animate-toast items-center gap-4 overflow-hidden border border-gold-light/30 bg-night/95 p-4 pr-3 text-ivory shadow-[0_24px_60px_-16px_rgba(0,0,0,0.7),0_0_40px_-10px_rgba(95,227,166,0.35)] backdrop-blur-md">
      <Seal state="new" size="md" ring={`${milestone.title} · Verified ·`}>
        <MilestoneIcon id={milestone.id} className="size-5" />
      </Seal>
      <div className="min-w-0 flex-1">
        <p className="font-display text-xs tracking-[0.2em] text-gold-light">
          Credential verified · {count}/{total}
        </p>
        <p className="mt-0.5 font-serif text-xl leading-tight">{milestone.title}</p>
        {promoted ? (
          <p className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-medium text-cerulean-light">
            <ArrowUp aria-hidden="true" className="size-3.5" strokeWidth={2} />
            Rank {standing.level} reached: {standing.rank.title}
          </p>
        ) : (
          <p className="text-sm text-ivory/65">{milestone.description}</p>
        )}
        <div aria-hidden="true" className="mt-2 h-1 w-full overflow-hidden rounded-full bg-ivory/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cerulean-light to-gold-light shadow-[0_0_10px_rgba(95,227,166,0.6)]"
            style={{ width: `${(count / total) * 100}%` }}
          />
        </div>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="inline-flex size-9 shrink-0 items-center justify-center self-start text-ivory/60 hover:text-ivory"
      >
        <X aria-hidden="true" className="size-4" />
        <span className="sr-only">Dismiss</span>
      </button>
    </div>
  )
}
