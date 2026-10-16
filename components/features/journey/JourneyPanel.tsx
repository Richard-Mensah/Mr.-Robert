"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Compass, Lock, X } from "lucide-react"
import MilestoneIcon from "@/components/features/journey/MilestoneIcon"
import { MILESTONES } from "@/data/journey"
import { useJourney } from "@/hooks/useJourney"
import { cn } from "@/lib/utils"

type Props = {
  tone?: "dark" | "light"
}

/** Header button and dialog showing which milestones of the "climb" the visitor has reached. */
export default function JourneyPanel({ tone = "dark" }: Props) {
  const { unlocked, total } = useJourney()
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const count = unlocked.length

  useEffect(() => {
    if (!open) return
    const trigger = triggerRef.current
    const dialog = dialogRef.current
    dialog?.querySelector<HTMLElement>("button, a")?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
      if (event.key !== "Tab" || !dialog) return
      const focusable = dialog.querySelectorAll<HTMLElement>("button, a")
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => {
      window.removeEventListener("keydown", onKey)
      trigger?.focus()
    }
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className={cn(
          "inline-flex min-h-10 items-center gap-2 border px-3 text-xs font-medium tracking-wide transition-colors",
          tone === "dark"
            ? "border-gold-light/40 text-gold-light hover:bg-gold-light hover:text-ink"
            : "border-gold-deep/40 text-gold-deep hover:bg-gold-deep hover:text-ivory",
        )}
      >
        <Compass aria-hidden="true" className="size-4" strokeWidth={1.5} />
        <span className="font-display tracking-[0.14em]">Journey</span>
        <span aria-label={`${count} of ${total} milestones`}>
          {count}/{total}
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/70 p-0 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setOpen(false)}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="journey-title"
            onClick={(event) => event.stopPropagation()}
            className="starfield aurora relative w-full max-w-2xl animate-toast overflow-hidden border border-gold-light/25 bg-night p-6 text-ivory sm:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-display text-[0.65rem] tracking-[0.22em] text-gold-light">Climb to the top</p>
                <h2 id="journey-title" className="mt-3 font-serif text-3xl tracking-tight sm:text-4xl">
                  Your journey: {count} of {total} milestones
                </h2>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="inline-flex size-10 shrink-0 items-center justify-center text-ivory/70 hover:text-ivory">
                <X aria-hidden="true" className="size-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="mt-6 h-1 w-full bg-ivory/10">
              <div className="h-full bg-gold-light transition-all duration-700" style={{ width: `${(count / total) * 100}%` }} />
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {MILESTONES.map((milestone) => {
                const reached = unlocked.includes(milestone.id)
                return (
                  <li key={milestone.id}>
                    <Link
                      href={milestone.path}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex h-full flex-col items-center gap-3 border p-4 text-center transition-colors",
                        reached ? "border-gold-light/40 bg-gold-light/5 hover:bg-gold-light/10" : "border-ivory/10 hover:border-ivory/30",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-12 items-center justify-center rounded-full",
                          reached ? "bg-gold-light text-ink shadow-[0_0_24px_rgba(230,199,126,0.45)]" : "bg-ivory/5 text-ivory/40",
                        )}
                      >
                        {reached ? <MilestoneIcon id={milestone.id} className="size-5" /> : <Lock aria-hidden="true" className="size-4" />}
                      </span>
                      <span className="font-serif text-lg leading-tight">{milestone.title}</span>
                      <span className="text-[0.7rem] uppercase tracking-[0.14em] text-ivory/55">
                        {reached ? "Reached" : "Not yet visited"}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <p className="mt-8 font-script text-3xl text-gold-light">
              {count === total ? "You've explored every peak. See you at the top." : "See you at the top."}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
