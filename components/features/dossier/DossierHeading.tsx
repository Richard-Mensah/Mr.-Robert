import type { ReactNode } from "react"

type Props = {
  index: string
  children: ReactNode
  kicker?: string
}

/** Executive section heading: a gold numeral, a serif title and a fine rule. */
export default function DossierHeading({ index, children, kicker }: Props) {
  return (
    <div className="flex items-end gap-2.5 border-b border-stone pb-1.5">
      <span className="font-serif text-[1.15rem] leading-none text-gold tabular-nums">{index}</span>
      <h2 className="whitespace-nowrap font-serif text-[1.02rem] leading-none tracking-tight text-ink">{children}</h2>
      {kicker && <span className="ml-auto truncate font-display text-[0.6rem] tracking-[0.2em] text-forest">{kicker}</span>}
    </div>
  )
}
