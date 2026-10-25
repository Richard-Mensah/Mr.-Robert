"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type Checkpoint = {
  label: string
  position: number
}

/**
 * "Climb to the Top" scroll gauge. Desktop: a slim vertical altitude meter with section
 * checkpoints taken from [data-checkpoint] attributes. Mobile: a gold progress line.
 */
export default function AltitudeMeter() {
  const pathname = usePathname()
  const [progress, setProgress] = useState(0)
  const [checkpoints, setCheckpoints] = useState<Checkpoint[]>([])

  useEffect(() => {
    let frame = 0

    const measure = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0)
      const nodes = document.querySelectorAll<HTMLElement>("[data-checkpoint]")
      setCheckpoints(
        Array.from(nodes).map((node) => ({
          label: node.dataset.checkpoint ?? "",
          position: scrollable > 0 ? Math.min(1, Math.max(0, (node.offsetTop - window.innerHeight * 0.4) / scrollable)) : 0,
        })),
      )
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [pathname])

  const current = [...checkpoints].reverse().find((checkpoint) => progress >= checkpoint.position - 0.001)
  const percent = Math.round(progress * 100)

  return (
    <>
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-0.5 min-[1600px]:hidden print:hidden">
        <div className="h-full origin-left bg-gold-light" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <aside
        aria-label="Briefing progress through this page"
        className="pointer-events-none fixed right-4 top-1/2 z-30 hidden h-[56vh] -translate-y-1/2 flex-col items-center min-[1600px]:flex print:hidden"
      >
        <span className="font-display text-[0.68rem] tracking-[0.2em] bg-ink/75 px-1.5 py-0.5 text-gold-light">CLOSE</span>
        <div className="relative my-3 w-px flex-1 bg-gold/25">
          <div
            className="absolute inset-x-0 bottom-0 bg-gold-light shadow-[0_0_10px_rgba(230,199,126,0.8)]"
            style={{ height: `${percent}%` }}
          />
          {checkpoints.map((checkpoint) => (
            <span
              key={`${checkpoint.label}-${checkpoint.position}`}
              className={`absolute left-1/2 size-1.5 -translate-x-1/2 translate-y-1/2 rounded-full transition-colors duration-500 ${
                progress >= checkpoint.position ? "bg-gold-light" : "bg-gold/40"
              }`}
              style={{ bottom: `${checkpoint.position * 100}%` }}
            />
          ))}
          <span
            className="absolute left-1/2 size-3 -translate-x-1/2 translate-y-1/2 rotate-45 border border-ink bg-gold-light"
            style={{ bottom: `${percent}%` }}
          />
        </div>
        <span className="font-display text-[0.68rem] tracking-[0.2em] bg-ink/75 px-1.5 py-0.5 text-gold-light">OPENING</span>
        <p className="sr-only" aria-live="polite">
          {current ? `Now at ${current.label}` : ""}
        </p>
      </aside>
    </>
  )
}
