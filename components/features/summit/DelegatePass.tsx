"use client"

import Image from "next/image"
import { useTilt } from "@/hooks/useTilt"

type Props = {
  name: string
  role: string
}

/** A live, tilting delegate pass with a holographic gold sheen that follows the pointer. */
export default function DelegatePass({ name, role }: Props) {
  const { ref, onPointerMove, onPointerLeave } = useTilt<HTMLDivElement>()
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")

  return (
    <div className="mx-auto w-full max-w-sm perspective-distant">
      <div
        ref={ref}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        role="img"
        aria-label={`Delegate pass preview for ${name || "your name"}, ${role}`}
        className="relative aspect-[3/4.4] overflow-hidden border border-gold-light/40 bg-night text-ivory shadow-[0_50px_100px_-30px_rgba(0,0,0,0.75)] transition-transform duration-300 ease-out"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen"
          style={{
            background:
              "radial-gradient(420px circle at var(--glow-x, 30%) var(--glow-y, 20%), rgba(246,226,168,0.35), transparent 45%), linear-gradient(115deg, transparent 30%, rgba(143,184,162,0.18) 45%, rgba(230,199,126,0.22) 55%, transparent 70%)",
          }}
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-2 bg-gold-light" />
        <div className="relative flex h-full flex-col p-7">
          <div className="flex items-center justify-between">
            <Image src="/brand/monogram.png" alt="" width={44} height={44} className="ring-1 ring-gold-light/40" />
            <span className="border border-gold-light/40 px-2.5 py-1 font-display text-[0.55rem] tracking-[0.22em] text-gold-light">
              DELEGATE
            </span>
          </div>

          <p className="mt-8 font-display text-[0.6rem] tracking-[0.24em] text-gold-light">Tamale Youth Summit</p>
          <p className="mt-1 font-serif text-lg italic text-ivory/70">Inspiring · Equipping · Connecting</p>

          <div className="mt-auto">
            <div className="flex size-16 items-center justify-center rounded-full bg-gold-light font-display text-xl text-ink">
              {initials || "YOU"}
            </div>
            <p className="mt-5 break-words font-serif text-3xl leading-tight">{name.trim() || "Your name"}</p>
            <p className="mt-1 text-sm text-gold-light">{role}</p>
          </div>

          <div className="mt-8 flex items-end justify-between border-t border-ivory/15 pt-4 text-[0.65rem] uppercase tracking-[0.16em] text-ivory/55">
            <div>
              <p>Edition</p>
              <p className="mt-1 text-ivory">To be announced</p>
            </div>
            <p className="font-script text-xl normal-case tracking-normal text-gold-light">See you at the top.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
