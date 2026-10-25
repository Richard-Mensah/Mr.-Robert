import Image from "next/image"
import { PROFILE } from "@/data/profile"

type Props = {
  audience: string
  format: string
  themes: string[]
}

/** Live "document" mockup of the brief the organiser is building. */
export default function InvitationBrief({ audience, format, themes }: Props) {
  return (
    <article aria-live="polite" aria-label="Your invitation brief" className="grid-chancery aurora relative overflow-hidden border border-gold-light/25 bg-night p-8 text-ivory shadow-[0_40px_80px_-30px_rgba(6,20,15,0.7)]">
      <div className="relative flex items-center justify-between">
        <p className="font-display text-[0.72rem] tracking-[0.22em] text-gold-light">Invitation brief</p>
        <Image src="/brand/monogram.png" alt="" width={36} height={36} className="ring-1 ring-gold-light/30" />
      </div>
      <p className="relative mt-6 font-serif text-3xl leading-tight">{PROFILE.name}</p>
      <p className="relative text-sm text-ivory/60">Speaking invitation</p>

      <dl className="relative mt-8 space-y-5 border-t border-ivory/10 pt-6 text-sm">
        <div className="grid grid-cols-[6rem_1fr] gap-3">
          <dt className="text-ivory/50">Audience</dt>
          <dd key={audience} className="animate-toast font-medium">{audience}</dd>
        </div>
        <div className="grid grid-cols-[6rem_1fr] gap-3">
          <dt className="text-ivory/50">Format</dt>
          <dd key={format} className="animate-toast font-medium">{format}</dd>
        </div>
        <div className="grid grid-cols-[6rem_1fr] gap-3">
          <dt className="text-ivory/50">Themes</dt>
          <dd>
            {themes.length === 0 ? (
              <span className="text-ivory/40">Choose at least one theme</span>
            ) : (
              <ul className="flex flex-wrap gap-1.5">
                {themes.map((theme) => (
                  <li key={theme} className="animate-toast border border-gold-light/40 px-2.5 py-1 text-xs text-gold-light">
                    {theme}
                  </li>
                ))}
              </ul>
            )}
          </dd>
        </div>
      </dl>
      <p className="relative mt-8 font-script text-2xl text-gold-light">See you at the top.</p>
    </article>
  )
}
