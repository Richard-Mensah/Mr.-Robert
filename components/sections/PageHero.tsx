import type { ReactNode } from "react"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import PageCredential from "@/components/features/journey/PageCredential"
import { cn } from "@/lib/utils"

type Props = {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  aside?: ReactNode
  checkpoint?: string
  /** Short section name for the briefing bar; defaults to the eyebrow. */
  label?: string
}

/** Chancery-ruled opening for inner pages. Holds the page's single h1. */
export default function PageHero({ eyebrow, title, intro, aside, checkpoint = "Overview", label = eyebrow }: Props) {
  return (
    <section
      data-checkpoint={checkpoint}
      className="grid-chancery relative overflow-hidden bg-night pb-16 pt-36 text-ivory lg:pb-20 lg:pt-48"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 -top-24 size-[44rem] rounded-full bg-[radial-gradient(circle,rgb(47_179_122/0.26),transparent_65%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/4 size-[30rem] rounded-full bg-[radial-gradient(circle,rgb(184_145_63/0.12),transparent_65%)]" />

      <Container size="wide" className="relative grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className={cn("min-w-0", aside ? "lg:col-span-8" : "lg:col-span-10")}>
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

      <Container size="wide" className="relative mt-14 lg:mt-20">
        <div className="flex flex-col gap-6 border-t border-ivory/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span aria-hidden="true" className="flex h-6 w-1 flex-col overflow-hidden rounded-full">
              <span className="flex-1 bg-[#ce1126]" />
              <span className="flex-1 bg-[#fcd116]" />
              <span className="flex-1 bg-heritage" />
            </span>
            <p className="font-display text-sm tracking-[0.2em] text-ivory/55">Briefing · {label}</p>
          </div>
          <div className="animate-rise [animation-delay:400ms]">
            <PageCredential />
          </div>
        </div>
      </Container>
    </section>
  )
}
