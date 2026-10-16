import Link from "next/link"
import { ArrowRight, RotateCcw } from "lucide-react"
import { COMPASS_NEXT_STEPS } from "@/data/compass"
import { YOUTH_FRAMEWORK } from "@/data/pillars"
import { COMPASS_LEVELS } from "@/lib/compassScore"
import type { CompassLevel } from "@/types"

type Props = {
  level: CompassLevel
  onRestart: () => void
}

export default function CompassResult({ level, onRestart }: Props) {
  const index = COMPASS_LEVELS.indexOf(level)
  const stage = YOUTH_FRAMEWORK[index]
  const next = COMPASS_NEXT_STEPS[level]

  return (
    <div className="animate-toast" aria-live="polite">
      <p className="font-display text-xs tracking-eyebrow text-gold-light">Your compass points to</p>
      <h3 className="mt-4 font-serif text-5xl tracking-tight sm:text-6xl">
        Level {stage.step}: <span className="text-gold-shimmer">{stage.title}</span>
      </h3>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ivory/75">{stage.description}</p>

      <ol className="mt-8 flex gap-1.5" aria-label={`Level ${index + 1} of ${COMPASS_LEVELS.length}`}>
        {YOUTH_FRAMEWORK.map((item, itemIndex) => (
          <li key={item.title} className="flex-1">
            <span className={`block h-1.5 ${itemIndex <= index ? "bg-gold-light" : "bg-ivory/15"}`} />
            <span className={`mt-2 block text-[0.65rem] uppercase tracking-[0.14em] ${itemIndex === index ? "text-gold-light" : "text-ivory/40"}`}>
              {item.title}
            </span>
          </li>
        ))}
      </ol>

      <div className="mt-10 border border-gold-light/25 bg-ivory/[0.04] p-6">
        <p className="font-display text-[0.65rem] tracking-[0.2em] text-gold-light">Your next step</p>
        <p className="mt-3 text-lg leading-relaxed">{next.advice}</p>
        <Link
          href={next.href}
          className="btn-sweep mt-6 inline-flex min-h-12 items-center gap-3 bg-gold-light px-6 text-sm font-medium text-ink hover:bg-ivory"
        >
          {next.label}
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
        </Link>
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-ivory/60 hover:text-gold-light"
      >
        <RotateCcw aria-hidden="true" className="size-4" strokeWidth={1.5} />
        Take it again
      </button>
    </div>
  )
}
