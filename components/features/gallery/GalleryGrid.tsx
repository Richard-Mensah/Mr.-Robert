"use client"

import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { Check, Expand } from "lucide-react"
import Lightbox from "@/components/features/gallery/Lightbox"
import { useCollection } from "@/hooks/useCollection"
import { cn } from "@/lib/utils"
import type { Photo } from "@/types"

type Props = {
  photos: Photo[]
}

/** Masonry grid of moments. Opening a photo collects it into the visitor's set. */
export default function GalleryGrid({ photos }: Props) {
  const [active, setActive] = useState<number | null>(null)
  const { collected, total, collect } = useCollection()
  const collectedSet = new Set(collected)
  const percent = Math.round((collected.length / total) * 100)

  useEffect(() => {
    if (active !== null && photos[active]) collect(photos[active].id)
  }, [active, photos, collect])

  const close = useCallback(() => setActive(null), [])

  return (
    <>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          {photos.length} {photos.length === 1 ? "moment" : "moments"} · open a photo to collect it
        </p>
        <div className="flex items-center gap-3" aria-live="polite">
          <span className="font-display text-[0.76rem] tracking-[0.2em] text-gold-deep">
            Collected {collected.length} / {total}
          </span>
          <span className="h-1.5 w-32 overflow-hidden bg-ink/10" aria-hidden="true">
            <span className="block h-full bg-gold transition-all duration-700" style={{ width: `${percent}%` }} />
          </span>
        </div>
      </div>

      <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
        {photos.map((photo, index) => {
          const isCollected = collectedSet.has(photo.id)
          return (
            <li key={photo.id} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group relative block w-full overflow-hidden bg-night focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <span className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 text-left text-xs leading-snug text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="line-clamp-2">{photo.alt}</span>
                  <Expand aria-hidden="true" className="size-4 shrink-0" />
                </span>
                <span
                  className={cn(
                    "absolute right-3 top-3 flex size-7 items-center justify-center rounded-full transition-all duration-500",
                    isCollected ? "scale-100 bg-gold-light text-ink shadow-[0_0_18px_rgba(230,199,126,0.7)]" : "scale-0",
                  )}
                >
                  <Check aria-hidden="true" className="size-4" strokeWidth={2.5} />
                  {isCollected && <span className="sr-only">Collected</span>}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <Lightbox photos={photos} index={active} onNavigate={setActive} onClose={close} />
    </>
  )
}
