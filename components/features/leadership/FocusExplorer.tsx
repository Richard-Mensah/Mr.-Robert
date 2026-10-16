"use client"

import { useRef, useState, type KeyboardEvent } from "react"
import { Bird, Cpu, GraduationCap, Rocket, Sprout, Users, type LucideIcon } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import { LEADERSHIP_AREAS } from "@/data/pillars"
import { GOVERNANCE_COMMITMENTS } from "@/data/profile"
import { cn } from "@/lib/utils"

const ICONS: LucideIcon[] = [Users, Rocket, Cpu, GraduationCap, Bird, Sprout]

/** The six focus areas as an interactive explorer (vertical tabs with a detail panel). */
export default function FocusExplorer() {
  const [selected, setSelected] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const area = LEADERSHIP_AREAS[selected]
  const Icon = ICONS[selected]

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = LEADERSHIP_AREAS.length - 1
    const keys: Record<string, number> = {
      ArrowDown: selected === last ? 0 : selected + 1,
      ArrowRight: selected === last ? 0 : selected + 1,
      ArrowUp: selected === 0 ? last : selected - 1,
      ArrowLeft: selected === 0 ? last : selected - 1,
      Home: 0,
      End: last,
    }
    if (!(event.key in keys)) return
    event.preventDefault()
    setSelected(keys[event.key])
    tabs.current[keys[event.key]]?.focus()
  }

  return (
    <section id="focus" aria-labelledby="focus-title" data-checkpoint="Focus Areas" className="scroll-mt-20 border-t border-ink/10 bg-ivory py-24 lg:py-36">
      <Container size="wide">
        <SectionHeader
          id="focus-title"
          eyebrow="Explore the work"
          title="Six areas. One aim: opportunity."
          align="split"
          intro={<p>Select an area to see what it means for young people in the North East Region.</p>}
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <div role="tablist" aria-orientation="vertical" aria-label="Focus areas" onKeyDown={onKeyDown} className="flex gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible">
            {LEADERSHIP_AREAS.map((item, index) => {
              const TabIcon = ICONS[index]
              return (
                <button
                  key={item.title}
                  ref={(node) => {
                    tabs.current[index] = node
                  }}
                  role="tab"
                  id={`focus-tab-${index}`}
                  aria-selected={index === selected}
                  aria-controls="focus-panel"
                  tabIndex={index === selected ? 0 : -1}
                  onClick={() => setSelected(index)}
                  className={cn(
                    "flex min-h-14 shrink-0 items-center gap-4 border px-5 text-left transition-all duration-300",
                    index === selected ? "border-night bg-night text-ivory" : "border-ink/10 bg-ivory text-ink hover:border-gold",
                  )}
                >
                  <TabIcon aria-hidden="true" className={cn("size-5", index === selected ? "text-gold-light" : "text-gold-deep")} strokeWidth={1.5} />
                  <span className="font-serif text-lg">{item.title}</span>
                </button>
              )
            })}
          </div>

          <div
            key={area.title}
            id="focus-panel"
            role="tabpanel"
            aria-labelledby={`focus-tab-${selected}`}
            className="starfield aurora relative animate-toast overflow-hidden bg-night p-8 text-ivory sm:p-12 lg:col-span-8"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="flex size-20 items-center justify-center rounded-full bg-gold-light text-ink shadow-[0_0_50px_rgba(230,199,126,0.45)]">
                <Icon aria-hidden="true" className="size-9" strokeWidth={1.25} />
              </span>
              <span className="font-display text-sm tracking-[0.2em] text-ivory/40">
                {String(selected + 1).padStart(2, "0")} / {String(LEADERSHIP_AREAS.length).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-10 font-serif text-4xl tracking-tight sm:text-5xl">{area.title}</h3>
            <p className="mt-4 max-w-xl text-xl leading-relaxed text-ivory/75">{area.description}</p>
            <div className="gold-line my-10" />
            <p className="font-display text-xs tracking-eyebrow text-gold-light">How the role advances it</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {GOVERNANCE_COMMITMENTS.map((commitment) => (
                <li key={commitment} className="flex gap-3 text-sm leading-relaxed text-ivory/75">
                  <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rotate-45 bg-gold-light" />
                  {commitment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
