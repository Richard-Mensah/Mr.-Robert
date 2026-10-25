import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import type { RecordSlide as Slide } from "@/data/record"

type Props = {
  slide: Slide
  active: boolean
  position: number
  total: number
  priority?: boolean
}

/** One entry in The Record: a full-bleed photograph with its sourced caption. */
export default function RecordSlide({ slide, active, position, total, priority }: Props) {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      aria-label={`${position} of ${total}: ${slide.title}`}
      aria-hidden={!active}
      inert={!active}
      className={cn(
        "absolute inset-0 transition-opacity duration-1000 ease-out",
        active ? "z-10 opacity-100" : "z-0 opacity-0",
      )}
    >
      <div className={cn("absolute inset-0", active && "motion-safe:animate-kenburns")}>
        <Image
          src={slide.photo.src}
          alt={slide.photo.alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative flex h-full items-end px-5 pb-36 sm:px-8 lg:items-center lg:px-12 lg:pb-0">
        <div className="mx-auto w-full max-w-[96rem]">
          <div className="max-w-2xl">
            <p
              className={cn(
                "flex items-center gap-3 font-display text-sm tracking-[0.22em] text-cerulean-light transition-all duration-700",
                active ? "translate-y-0 opacity-100 delay-200" : "translate-y-4 opacity-0",
              )}
            >
              <span className="tabular-nums text-gold-light">{String(position).padStart(2, "0")}</span>
              <span aria-hidden="true" className="h-px w-8 bg-gold-light/60" />
              {slide.kicker}
            </p>
            <h3
              className={cn(
                "mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-ivory text-balance transition-all duration-1000 sm:text-5xl lg:text-6xl",
                active ? "translate-y-0 opacity-100 delay-300" : "translate-y-8 opacity-0",
              )}
            >
              {slide.title}
            </h3>
            <p
              className={cn(
                "mt-4 font-display text-base tracking-[0.12em] text-gold-light/90 transition-all duration-1000",
                active ? "opacity-100 delay-500" : "opacity-0",
              )}
            >
              {slide.context}
            </p>
            <p
              className={cn(
                "mt-5 max-w-xl leading-relaxed text-ivory/75 transition-all duration-1000 sm:text-lg",
                active ? "translate-y-0 opacity-100 delay-700" : "translate-y-4 opacity-0",
              )}
            >
              {slide.summary}
            </p>
            <Link
              href={slide.href}
              className="group mt-8 inline-flex items-center gap-2 border-b border-gold-light/50 pb-1 text-sm font-medium text-ivory transition-colors hover:border-gold-light hover:text-gold-light"
            >
              View the record
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
