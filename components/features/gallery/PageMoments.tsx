"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useMemo, useState } from "react"
import { ArrowRight, Check, Plus, Sparkles } from "lucide-react"
import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import TiltCard from "@/components/ui/TiltCard"
import Lightbox from "@/components/features/gallery/Lightbox"
import { getPhoto, getStory } from "@/data/gallery"
import { PAGE_MOMENTS, type MomentsPage } from "@/data/images"
import { useCollection } from "@/hooks/useCollection"
import { cn, revealDelay } from "@/lib/utils"

type Props = {
  page: MomentsPage
  tone?: "paper" | "ivory" | "dark"
}

/** Mosaic layouts: the first photo leads, the rest stack beside it. */
const LAYOUT: Record<number, string[]> = {
  3: ["sm:col-span-2 sm:row-span-2", "", ""],
  4: ["sm:col-span-2 sm:row-span-2", "sm:row-span-2", "", ""],
}

/**
 * A collectable mosaic of real photographs for one page. Opening a photo collects it
 * (shared with the gallery), and collecting every moment on the page completes it.
 */
export default function PageMoments({ page, tone = "paper" }: Props) {
  const { title } = PAGE_MOMENTS[page]
  const photos = useMemo(() => PAGE_MOMENTS[page].photos.map(getPhoto), [page])
  const [active, setActive] = useState<number | null>(null)
  const { collected, collect } = useCollection()
  const found = photos.filter((photo) => collected.includes(photo.id)).length
  const complete = found === photos.length
  const dark = tone === "dark"
  const layout = LAYOUT[photos.length] ?? []

  useEffect(() => {
    if (active !== null) collect(photos[active].id)
  }, [active, photos, collect])

  const close = useCallback(() => setActive(null), [])

  return (
    <section
      aria-labelledby={`moments-${page}`}
      data-checkpoint="Field Record"
      className={cn("relative overflow-hidden py-24 lg:py-32", dark ? "grid-chancery aurora bg-night text-ivory" : tone === "ivory" ? "bg-ivory" : "bg-paper")}
    >
      <Container size="wide" className="relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div data-reveal className="lg:col-span-7">
            <Eyebrow tone={dark ? "light" : "dark"}>Moments from the field</Eyebrow>
            <h2
              id={`moments-${page}`}
              className={cn("mt-6 font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl", dark ? "text-ivory" : "text-ink")}
            >
              {title}
            </h2>
          </div>
          <div data-reveal className="lg:col-span-5 lg:justify-self-end">
            <div
              aria-live="polite"
              className={cn(
                "inline-flex items-center gap-4 border px-5 py-4 transition-all duration-700",
                complete
                  ? "border-gold-light bg-gold-light/15 shadow-[0_0_40px_-8px_rgba(230,199,126,0.7)]"
                  : dark
                    ? "border-ivory/15"
                    : "border-ink/10 bg-ivory/60",
              )}
            >
              <ul className="flex gap-1.5" aria-hidden="true">
                {photos.map((photo) => (
                  <li
                    key={photo.id}
                    className={cn(
                      "size-2.5 rotate-45 transition-all duration-500",
                      collected.includes(photo.id) ? "scale-110 bg-gold" : dark ? "bg-ivory/20" : "bg-ink/15",
                    )}
                  />
                ))}
              </ul>
              {complete ? (
                <span className="flex animate-toast items-center gap-2 font-display text-[0.76rem] tracking-[0.18em] text-gold-deep">
                  <Sparkles aria-hidden="true" className={cn("size-4", dark && "text-gold-light")} />
                  <span className={cn(dark && "text-gold-light")}>All moments collected</span>
                </span>
              ) : (
                <span className={cn("font-display text-[0.76rem] tracking-[0.18em]", dark ? "text-ivory/75" : "text-muted")}>
                  Open to collect · {found}/{photos.length}
                </span>
              )}
            </div>
          </div>
        </div>

        <ul
          className={cn(
            "mt-12 grid auto-rows-[14rem] gap-4 sm:auto-rows-[13rem] lg:auto-rows-[15rem]",
            photos.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3",
          )}
        >
          {photos.map((photo, index) => {
            const isCollected = collected.includes(photo.id)
            return (
              <li key={photo.id} data-reveal style={revealDelay(index, 120)} className={layout[index]}>
                <TiltCard className="h-full">
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className="group/photo relative block h-full w-full overflow-hidden bg-night text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes={index === 0 ? "(min-width: 640px) 60vw, 100vw" : "(min-width: 640px) 30vw, 100vw"}
                      className="object-cover transition duration-[1400ms] ease-out group-hover/photo:scale-110"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gold-light/25 to-transparent transition-transform duration-1000 ease-out group-hover/photo:translate-x-full"
                    />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                    <span className="absolute inset-x-4 bottom-4 text-ivory">
                      <span className="block font-display text-[0.72rem] tracking-[0.2em] text-gold-light">
                        {getStory(photo.story)?.title}
                      </span>
                      <span className="mt-1 line-clamp-2 block text-sm leading-snug text-ivory/90">{photo.alt}</span>
                    </span>
                    <span
                      className={cn(
                        "absolute right-3 top-3 flex items-center gap-1.5 px-2.5 py-1 font-display text-[0.68rem] tracking-[0.18em] transition-all duration-500",
                        isCollected
                          ? "bg-gold-light text-ink shadow-[0_0_18px_rgba(230,199,126,0.7)]"
                          : "bg-ink/60 text-ivory/85 backdrop-blur-sm group-hover/photo:bg-gold-light group-hover/photo:text-ink",
                      )}
                    >
                      {isCollected ? (
                        <Check aria-hidden="true" className="size-3" strokeWidth={2.5} />
                      ) : (
                        <Plus aria-hidden="true" className="size-3" strokeWidth={2.5} />
                      )}
                      {isCollected ? "Collected" : "Collect"}
                    </span>
                  </button>
                </TiltCard>
              </li>
            )
          })}
        </ul>

        <div data-reveal className="mt-10">
          <Link
            href="/gallery"
            className={cn(
              "group inline-flex items-center gap-2 border-b pb-1 text-sm",
              dark ? "border-gold-light/60 text-gold-light" : "border-current text-forest hover:text-gold-deep",
            )}
          >
            See every moment in the gallery
            <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>

      <Lightbox photos={photos} index={active} onNavigate={setActive} onClose={close} />
    </section>
  )
}
