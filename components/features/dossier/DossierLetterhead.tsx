import Image from "next/image"
import { PROFILE } from "@/data/profile"

type Props = {
  page: number
  pages: number
  title: string
}

/** Night-green letterhead with the monogram, a gold rule and the Ghana flag stripe. */
export default function DossierLetterhead({ page, pages, title }: Props) {
  return (
    <header className="relative shrink-0 overflow-hidden bg-night px-6 pb-4 pt-5 text-ivory sm:px-[13mm] print:px-[13mm]">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(60%_120%_at_100%_0%,rgb(47_179_122/0.22),transparent_70%)]" />
      <div className="relative flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Image src="/brand/monogram.png" alt="" width={46} height={46} className="shrink-0 ring-1 ring-gold-light/40" />
          <div>
            <p className="font-display text-[0.7rem] tracking-[0.28em] text-gold-light">Briefing Dossier</p>
            <p className="whitespace-nowrap font-serif text-xl leading-tight sm:text-[1.7rem]">{PROFILE.name}</p>
          </div>
        </div>
        <div className="hidden text-right sm:block print:block">
          <p className="font-display text-[0.7rem] tracking-[0.22em] text-cerulean-light">{title}</p>
          <p className="mt-0.5 text-[0.7rem] tabular-nums text-ivory/55">
            Sheet {page} of {pages}
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex h-1">
        <span className="flex-[6] bg-gradient-to-r from-gold-deep via-gold-light to-gold" />
        <span className="flex-1 bg-[#ce1126]" />
        <span className="flex-1 bg-[#fcd116]" />
        <span className="flex-1 bg-heritage" />
      </div>
    </header>
  )
}
