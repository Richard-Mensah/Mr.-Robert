import type { ReactNode } from "react"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import { cn } from "@/lib/utils"

type Props = {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  aside?: ReactNode
  checkpoint?: string
}

/** Night-sky opening for inner pages. Holds the page's single h1. */
export default function PageHero({ eyebrow, title, intro, aside, checkpoint = "Base Camp" }: Props) {
  return (
    <section
      data-checkpoint={checkpoint}
      className="starfield aurora relative overflow-hidden bg-night pb-20 pt-36 text-ivory lg:pb-28 lg:pt-48"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-16 w-full text-ink/40 lg:h-24"
      >
        <path d="M0 120 L220 52 L380 92 L620 18 L860 86 L1060 40 L1260 90 L1440 60 L1440 120 Z" fill="currentColor" />
      </svg>
      <Container size="wide" className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className={cn(aside ? "lg:col-span-8" : "lg:col-span-10")}>
          <div className="animate-rise">
            <Eyebrow tone="light">{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-8 animate-rise font-serif text-[2.6rem] leading-[1.02] tracking-tight text-balance text-ivory [animation-delay:120ms] sm:text-6xl lg:text-7xl xl:text-8xl">
            {title}
          </h1>
          {intro && (
            <div className="mt-10 max-w-2xl animate-rise text-lg leading-relaxed text-ivory/75 [animation-delay:240ms] sm:text-xl">
              {intro}
            </div>
          )}
        </div>
        {aside && <div className="animate-rise [animation-delay:320ms] lg:col-span-4">{aside}</div>}
      </Container>
    </section>
  )
}
