"use client"

import { Search } from "lucide-react"
import { OPEN_PALETTE_EVENT } from "@/data/commands"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
  onOpen?: () => void
}

/** Opens the command palette. Shows the ⌘K hint on wider screens. */
export default function CommandTrigger({ className, onOpen }: Props) {
  return (
    <button
      type="button"
      onClick={() => {
        onOpen?.()
        window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))
      }}
      aria-label="Search the site"
      aria-keyshortcuts="Control+K Meta+K"
      className={cn(
        "inline-flex min-h-10 items-center gap-2 border border-ivory/20 px-3 text-xs text-ivory/80 transition-colors hover:border-gold-light hover:text-gold-light",
        className,
      )}
    >
      <Search aria-hidden="true" className="size-4" strokeWidth={1.5} />
      <span className="hidden font-display tracking-[0.14em] 2xl:inline">Search</span>
      <kbd className="hidden border border-ivory/20 px-1 text-[0.6rem] text-ivory/50 2xl:inline">⌘K</kbd>
    </button>
  )
}
