"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { getStory } from "@/data/gallery"
import type { Photo } from "@/types"

type Props = {
  photos: Photo[]
  index: number | null
  onNavigate: (index: number) => void
  onClose: () => void
}

const SWIPE_PX = 50

/**
 * Full-screen photo viewer on a native modal <dialog>, which provides focus
 * containment and Escape-to-close. Arrow keys and horizontal swipes move between photos.
 */
export default function Lightbox({ photos, index, onNavigate, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchStart = useRef<number | null>(null)
  const open = index !== null
  const photo = open ? photos[index] : null

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") onNavigate((index + 1) % photos.length)
      if (event.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, index, photos.length, onNavigate])

  const step = (delta: number) => {
    if (index === null) return
    onNavigate((index + delta + photos.length) % photos.length)
  }

  const story = photo ? getStory(photo.story) : undefined

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-label={photo ? photo.alt : "Photo viewer"}
      className="m-0 h-[100dvh] max-h-none w-screen max-w-none bg-ink/95 p-0 text-ivory backdrop:bg-ink/80"
      onTouchStart={(event) => (touchStart.current = event.touches[0].clientX)}
      onTouchEnd={(event) => {
        if (touchStart.current === null) return
        const delta = event.changedTouches[0].clientX - touchStart.current
        touchStart.current = null
        if (Math.abs(delta) > SWIPE_PX) step(delta < 0 ? 1 : -1)
      }}
    >
      {photo && index !== null && (
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-8">
            <p className="font-display text-[0.76rem] tracking-[0.2em] text-gold-light">
              {index + 1} / {photos.length}
            </p>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ivory/20 hover:border-gold-light hover:text-gold-light"
            >
              <X aria-hidden="true" className="size-5" />
              <span className="sr-only">Close</span>
            </button>
          </div>

          <div className="relative min-h-0 flex-1">
            <Image key={photo.id} src={photo.src} alt={photo.alt} fill sizes="100vw" className="animate-rise object-contain" />
            <button
              type="button"
              onClick={() => step(-1)}
              className="absolute left-2 top-1/2 inline-flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center bg-ink/60 hover:text-gold-light sm:left-6"
            >
              <ChevronLeft aria-hidden="true" className="size-6" />
              <span className="sr-only">Previous photo</span>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="absolute right-2 top-1/2 inline-flex min-h-12 min-w-12 -translate-y-1/2 items-center justify-center bg-ink/60 hover:text-gold-light sm:right-6"
            >
              <ChevronRight aria-hidden="true" className="size-6" />
              <span className="sr-only">Next photo</span>
            </button>
          </div>

          <div className="px-5 py-5 sm:px-8">
            {story && <p className="font-display text-[0.76rem] tracking-[0.2em] text-gold-light">{story.title}</p>}
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ivory/85 sm:text-base">{photo.alt}</p>
            {photo.credit && <p className="mt-1 text-xs text-ivory/50">Photo: {photo.credit}</p>}
          </div>
        </div>
      )}
    </dialog>
  )
}
