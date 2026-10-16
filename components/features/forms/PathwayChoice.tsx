import { Megaphone, MessageCircle, Mic, Handshake, type LucideIcon } from "lucide-react"
import { CONTACT_PATHWAYS } from "@/data/contact"
import { cn } from "@/lib/utils"
import type { InquiryKind } from "@/types"

const ICONS: Record<InquiryKind, LucideIcon> = {
  speaking: Mic,
  partnership: Handshake,
  media: Megaphone,
  general: MessageCircle,
}

type Props = {
  value: InquiryKind
  onChange: (kind: InquiryKind) => void
}

/** Step one of the contact wizard: choose the nature of the enquiry. */
export default function PathwayChoice({ value, onChange }: Props) {
  return (
    <fieldset>
      <legend className="font-serif text-3xl tracking-tight text-ink">What brings you here?</legend>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {CONTACT_PATHWAYS.map((pathway) => {
          const Icon = ICONS[pathway.kind]
          const selected = value === pathway.kind
          return (
            <label
              key={pathway.kind}
              className={cn(
                "flex cursor-pointer gap-4 border p-5 transition-all duration-300",
                "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold",
                selected ? "border-night bg-night text-ivory" : "border-ink/15 bg-paper text-ink hover:border-gold",
              )}
            >
              <input
                type="radio"
                name="kind"
                value={pathway.kind}
                checked={selected}
                onChange={() => onChange(pathway.kind)}
                className="sr-only"
              />
              <Icon aria-hidden="true" className={cn("mt-1 size-5 shrink-0", selected ? "text-gold-light" : "text-gold-deep")} strokeWidth={1.5} />
              <span>
                <span className="block font-serif text-xl">{pathway.title}</span>
                <span className={cn("mt-1 block text-sm leading-relaxed", selected ? "text-ivory/70" : "text-muted")}>
                  {pathway.description}
                </span>
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
