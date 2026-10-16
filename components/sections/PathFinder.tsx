"use client"

import Link from "next/link"
import { useRef, useState, type KeyboardEvent } from "react"
import { ArrowUpRight } from "lucide-react"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import { VISITOR_PATHS } from "@/data/paths"
import { cn } from "@/lib/utils"

/** "Choose your path": tailored next steps per visitor type, as an accessible tab set. */
export default function PathFinder() {
  const [selected, setSelected] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const path = VISITOR_PATHS[selected]

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = VISITOR_PATHS.length - 1
    const next =
      event.key === "ArrowRight" ? (selected === last ? 0 : selected + 1)
      : event.key === "ArrowLeft" ? (selected === 0 ? last : selected - 1)
      : event.key === "Home" ? 0
      : event.key === "End" ? last
      : null
    if (next === null) return
    event.preventDefault()
    setSelected(next)
    tabs.current[next]?.focus()
  }

  return (
    <section aria-labelledby="path-title" data-checkpoint="Your Path" className="bg-paper py-24 lg:py-32">
      <Container size="wide">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Choose your path</Eyebrow>
            <h2 id="path-title" className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Where would you like to begin?
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted lg:col-span-5">
            Tell us who you are and we&apos;ll point you to the most useful next step.
          </p>
        </div>

        <div role="tablist" aria-label="Visitor type" onKeyDown={onKeyDown} className="mt-12 flex gap-2 overflow-x-auto pb-2">
          {VISITOR_PATHS.map((item, index) => (
            <button
              key={item.id}
              ref={(node) => {
                tabs.current[index] = node
              }}
              role="tab"
              id={`path-tab-${item.id}`}
              aria-selected={index === selected}
              aria-controls={`path-panel-${item.id}`}
              tabIndex={index === selected ? 0 : -1}
              onClick={() => setSelected(index)}
              className={cn(
                "min-h-12 shrink-0 border px-5 text-sm font-medium transition-all duration-300",
                index === selected
                  ? "border-night bg-night text-gold-light shadow-[0_12px_30px_-12px_rgba(11,42,32,0.6)]"
                  : "border-ink/15 text-ink hover:border-ink/40",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          key={path.id}
          role="tabpanel"
          id={`path-panel-${path.id}`}
          aria-labelledby={`path-tab-${path.id}`}
          className="mt-8 grid animate-toast gap-8 border-t border-ink/10 pt-10 lg:grid-cols-12"
        >
          <p className="font-serif text-2xl leading-snug text-ink lg:col-span-4">{path.headline}</p>
          <ol className="grid gap-4 sm:grid-cols-3 lg:col-span-8">
            {path.actions.map((action, index) => (
              <li key={action.title}>
                <Link
                  href={action.href}
                  className="group flex h-full flex-col border border-ink/10 bg-ivory p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_24px_50px_-24px_rgba(6,20,15,0.35)]"
                >
                  <span className="flex items-center justify-between">
                    <span className="font-display text-[0.6rem] tracking-[0.2em] text-gold-deep">Step {index + 1}</span>
                    <ArrowUpRight aria-hidden="true" className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-deep" />
                  </span>
                  <span className="mt-6 font-serif text-xl leading-snug text-ink">{action.title}</span>
                  <span className="mt-2 text-sm leading-relaxed text-muted">{action.description}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
