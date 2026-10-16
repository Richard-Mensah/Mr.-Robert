import { X } from "lucide-react"
import MilestoneIcon from "@/components/features/journey/MilestoneIcon"
import type { Milestone } from "@/types"

type Props = {
  milestone: Milestone
  count: number
  total: number
  onClose: () => void
}

export default function MilestoneToast({ milestone, count, total, onClose }: Props) {
  return (
    <div className="pointer-events-auto flex w-full max-w-sm animate-toast items-center gap-4 border border-gold-light/30 bg-night/95 p-4 pr-3 text-ivory shadow-[0_20px_50px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md">
      <span className="relative flex size-12 shrink-0 items-center justify-center rounded-full bg-gold-light text-ink shadow-[0_0_28px_rgba(230,199,126,0.55)]">
        <MilestoneIcon id={milestone.id} className="size-5" />
        <span aria-hidden="true" className="absolute inset-0 animate-ping rounded-full border border-gold-light/60 [animation-iteration-count:2]" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-display text-[0.6rem] tracking-[0.22em] text-gold-light">
          Milestone {count} of {total} unlocked
        </p>
        <p className="mt-1 font-serif text-xl leading-tight">{milestone.title}</p>
        <p className="text-sm text-ivory/65">{milestone.description}</p>
      </div>
      <button
        type="button"
        onClick={onClose}
        className="inline-flex size-9 shrink-0 items-center justify-center text-ivory/60 hover:text-ivory"
      >
        <X aria-hidden="true" className="size-4" />
        <span className="sr-only">Dismiss</span>
      </button>
    </div>
  )
}
