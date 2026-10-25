"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Menu, X } from "lucide-react"
import Container from "@/components/ui/Container"
import Wordmark from "@/components/layout/Wordmark"
import JourneyPanel from "@/components/features/journey/JourneyPanel"
import CommandTrigger from "@/components/features/command/CommandTrigger"
import { CONTACT_NAV, PRIMARY_NAV } from "@/data/navigation"
import { MOTTO } from "@/constants"
import { cn } from "@/lib/utils"

type Props = {
  pathname: string
}

export default function MobileMenu({ pathname }: Props) {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const trigger = triggerRef.current
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
      trigger?.focus()
    }
  }, [open])

  const items = [...PRIMARY_NAV, CONTACT_NAV]

  return (
    <div className="xl:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className="-mr-2 inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium text-ivory"
      >
        <span>Menu</span>
        <Menu aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        hidden={!open}
        className="grid-chancery aurora fixed inset-0 z-50 overflow-y-auto bg-night text-ivory"
      >
        <Container size="wide" className="flex h-20 items-center justify-between">
          <Wordmark tone="light" onNavigate={() => setOpen(false)} />
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            className="-mr-2 inline-flex min-h-11 items-center gap-2 px-2 text-sm font-medium"
          >
            <span>Close</span>
            <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
        </Container>
        <Container size="wide" className="pb-12 pt-6">
          <nav aria-label="Mobile">
            <ul className="divide-y divide-ivory/10 border-y border-ivory/10">
              {items.map((item, index) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
                return (
                  <li key={item.href} className={cn(open && "animate-rise")} style={{ animationDelay: `${index * 40}ms` }}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "flex items-baseline justify-between py-4 font-serif text-3xl tracking-tight transition-colors sm:text-4xl",
                        active ? "text-gold-light" : "hover:text-gold-light",
                      )}
                    >
                      {item.label}
                      <span className="font-sans text-xs text-ivory/40">{String(index + 1).padStart(2, "0")}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className="mt-10 flex flex-wrap gap-3">
            <CommandTrigger onOpen={() => setOpen(false)} />
          </div>
          <div className="mt-4 sm:hidden">
            <JourneyPanel />
          </div>
          <p className="mt-10 font-script text-4xl text-gold-light">{MOTTO}</p>
        </Container>
      </div>
    </div>
  )
}
