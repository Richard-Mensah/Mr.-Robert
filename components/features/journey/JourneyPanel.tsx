"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight, X } from "lucide-react"
import CredentialGrid from "@/components/features/journey/CredentialGrid"
import ProgressRing from "@/components/ui/ProgressRing"
import StatusPill from "@/components/ui/StatusPill"
import { rankFor } from "@/data/journey"
import { useJourney } from "@/hooks/useJourney"
import { cn } from "@/lib/utils"

type Props = {
  tone?: "dark" | "light"
  /** Ring-only trigger for tight headers. */
  compact?: boolean
}

/** Header trigger and dialog for the reviewer's briefing: the credentials verified so far. */
export default function JourneyPanel({ tone = "dark", compact = false }: Props) {
  const { unlocked, total } = useJourney()
  const [open, setOpen] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const count = unlocked.length
  const complete = count === total
  const standing = rankFor(count)

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
          "inline-flex min-h-10 items-center gap-2.5 rounded-full border py-1 pl-1 text-xs font-medium transition-colors",
          compact ? "pr-1" : "pr-4",
          tone === "dark"
            ? "border-ivory/15 text-ivory hover:border-gold-light/50 hover:bg-ivory/5"
            : "border-ink/15 text-ink hover:border-gold-deep/50",
        )}
      >
        <ProgressRing value={count} total={total} size={30} stroke={2.5}>
          <span className="text-[0.6rem] font-semibold tabular-nums text-gold-light">{count}</span>
        </ProgressRing>
        {compact ? (
          <span className="sr-only">Briefing: {count} of {total} credentials verified</span>
        ) : (
          <>
            <span className="font-display text-sm tracking-[0.12em]">Briefing</span>
            <span className="tabular-nums text-ivory/60" aria-label={`${count} of ${total} credentials verified`}>
              {count}/{total}
            </span>
          </>
        )}
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-ink/75 backdrop-blur-sm sm:items-center sm:p-6" onClick={() => setOpen(false)}>
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="briefing-title"
            onClick={(event) => event.stopPropagation()}
            className="guilloche relative max-h-[92svh] w-full max-w-3xl animate-toast overflow-y-auto border border-gold-light/20 bg-night p-6 text-ivory shadow-[0_60px_120px_-40px_rgba(0,0,0,0.9)] sm:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex items-center gap-5">
                <ProgressRing value={count} total={total} size={72} stroke={4}>
                  <span className="font-serif text-xl tabular-nums">{Math.round((count / total) * 100)}%</span>
                </ProgressRing>
                <div>
                  <p className="font-display text-xs tracking-[0.22em] text-gold-light">Reviewer&apos;s briefing</p>
                  <h2 id="briefing-title" className="mt-1 font-serif text-3xl tracking-tight sm:text-4xl">
                    {count} of {total} credentials verified
                  </h2>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <StatusPill tone={complete ? "complete" : "progress"}>
                      Rank {standing.level} · {standing.rank.title}
                    </StatusPill>
                    {standing.next && (
                      <span className="text-xs text-ivory/60">
                        {standing.next.remaining} more to {standing.next.title}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="inline-flex size-10 shrink-0 items-center justify-center text-ivory/70 hover:text-ivory">
                <X aria-hidden="true" className="size-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>

            <CredentialGrid unlocked={unlocked} onNavigate={() => setOpen(false)} />

            <div className="mt-9 flex flex-col gap-4 border-t border-ivory/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
                {complete
                  ? "Every section reviewed. The full dossier is ready to print or share."
                  : "Credentials verify as you read each section. Progress stays in this browser only."}
              </p>
              <Link
                href="/dossier"
                onClick={() => setOpen(false)}
                className="btn-sweep group inline-flex min-h-11 items-center justify-center gap-3 bg-gold-light px-6 text-sm font-medium text-ink hover:bg-ivory"
              >
                Open Briefing Dossier
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
