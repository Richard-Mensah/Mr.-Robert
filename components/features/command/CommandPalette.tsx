"use client"

import { useRouter } from "next/navigation"
import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react"
import { ArrowRight, CornerDownLeft, Search } from "lucide-react"
import { COMMANDS, OPEN_PALETTE_EVENT } from "@/data/commands"
import { cn } from "@/lib/utils"

/** ⌘K / Ctrl+K command palette for jumping to pages and actions (ARIA combobox + listbox). */
export default function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [active, setActive] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)

  const results = useMemo(() => {
    const term = query.trim().toLowerCase()
    if (!term) return COMMANDS
    return COMMANDS.filter((command) => `${command.label} ${command.keywords ?? ""}`.toLowerCase().includes(term))
  }, [query])

  useEffect(() => {
    const show = () => {
      returnFocus.current = document.activeElement as HTMLElement | null
      setOpen(true)
    }
    const onKey = (event: globalThis.KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault()
        show()
      }
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener(OPEN_PALETTE_EVENT, show)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener(OPEN_PALETTE_EVENT, show)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    inputRef.current?.focus()
    document.body.style.overflow = "hidden"
    const focusTarget = returnFocus.current
    return () => {
      document.body.style.overflow = ""
      focusTarget?.focus()
    }
  }, [open])

  const close = () => {
    setOpen(false)
    setQuery("")
    setActive(0)
  }

  const go = (href: string) => {
    close()
    router.push(href)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") close()
    if (event.key === "Tab") event.preventDefault()
    if (event.key === "ArrowDown") {
      event.preventDefault()
      setActive((index) => (index + 1) % Math.max(results.length, 1))
    }
    if (event.key === "ArrowUp") {
      event.preventDefault()
      setActive((index) => (index - 1 + results.length) % Math.max(results.length, 1))
    }
    if (event.key === "Enter" && results[active]) go(results[active].href)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-center bg-ink/70 px-4 pt-[12vh] backdrop-blur-sm" onClick={close}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search the site"
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-xl animate-toast overflow-hidden border border-gold-light/25 bg-night text-ivory shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
      >
        <div className="flex items-center gap-3 border-b border-ivory/10 px-5">
          <Search aria-hidden="true" className="size-5 text-gold-light" strokeWidth={1.5} />
          <input
            ref={inputRef}
            role="combobox"
            aria-expanded="true"
            aria-controls="command-results"
            aria-activedescendant={results[active] ? `command-${active}` : undefined}
            aria-autocomplete="list"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setActive(0)
            }}
            onKeyDown={onKeyDown}
            placeholder="Search pages and actions…"
            className="min-h-16 w-full bg-transparent text-lg placeholder:text-ivory/40 focus:outline-none"
          />
          <kbd className="hidden border border-ivory/20 px-1.5 py-0.5 text-[0.65rem] text-ivory/50 sm:block">ESC</kbd>
        </div>
        <ul id="command-results" role="listbox" aria-label="Results" className="max-h-[55vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="p-6 text-center text-ivory/50">No matches. Try “speak” or “summit”.</li>}
          {results.map((command, index) => (
            <li
              key={command.href}
              id={`command-${index}`}
              role="option"
              aria-selected={index === active}
              onMouseEnter={() => setActive(index)}
              onClick={() => go(command.href)}
              className={cn(
                "flex cursor-pointer items-center gap-4 px-4 py-3 transition-colors",
                index === active ? "bg-gold-light text-ink" : "text-ivory/85",
              )}
            >
              <span className={cn("w-16 shrink-0 font-display text-[0.68rem] tracking-[0.18em]", index === active ? "text-ink/60" : "text-gold-light/70")}>
                {command.group}
              </span>
              <span className="flex-1">{command.label}</span>
              {index === active ? (
                <CornerDownLeft aria-hidden="true" className="size-4" />
              ) : (
                <ArrowRight aria-hidden="true" className="size-4 opacity-30" />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
