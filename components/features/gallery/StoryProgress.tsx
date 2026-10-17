"use client"

import { Check } from "lucide-react"
import { useCollection } from "@/hooks/useCollection"

type Props = {
  photoIds: string[]
}

/** "2 of 5 collected" for one story, turning into a stamp once every photo is collected. */
export default function StoryProgress({ photoIds }: Props) {
  const { collected } = useCollection()
  const count = photoIds.filter((id) => collected.includes(id)).length
  const complete = count === photoIds.length

  if (complete) {
    return (
      <span className="inline-flex items-center gap-1.5 bg-gold-light px-2.5 py-1 font-display text-[0.6rem] tracking-[0.18em] text-ink">
        <Check aria-hidden="true" className="size-3" strokeWidth={2.5} />
        Story collected
      </span>
    )
  }

  return (
    <span className="font-display text-[0.6rem] tracking-[0.18em] text-ivory/80">
      {count} / {photoIds.length} collected
    </span>
  )
}
