import { Bird, Cpu, GraduationCap, Rocket, Sprout, Users, type LucideIcon } from "lucide-react"
import TiltCard from "@/components/ui/TiltCard"

const ICONS: Record<string, LucideIcon> = {
  "Youth Empowerment": Users,
  Entrepreneurship: Rocket,
  "Digital Inclusion": Cpu,
  "Leadership Development": GraduationCap,
  Peacebuilding: Bird,
  "Sustainable Livelihoods": Sprout,
}

type Props = {
  index: number
  title: string
  description: string
}

/** A leadership area presented as a tilting "skill" card on dark backgrounds. */
export default function LeadershipPillar({ index, title, description }: Props) {
  const Icon = ICONS[title] ?? Users

  return (
    <TiltCard className="border border-ivory/10 bg-ivory/[0.03] p-8 hover:border-gold-light/40">
      <div className="flex items-start justify-between">
        <span className="flex size-14 items-center justify-center rounded-full bg-gold-light/10 text-gold-light ring-1 ring-gold-light/30 transition-all duration-500 group-hover:bg-gold-light group-hover:text-ink group-hover:shadow-[0_0_30px_rgba(230,199,126,0.5)]">
          <Icon aria-hidden="true" className="size-6" strokeWidth={1.5} />
        </span>
        <span className="font-display text-xs tracking-[0.2em] text-ivory/35">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="mt-8 font-serif text-2xl leading-tight tracking-tight text-ivory">{title}</h3>
      <p className="mt-3 leading-relaxed text-ivory/70">{description}</p>
      <div className="mt-8 h-px w-full bg-ivory/10">
        <div className="h-full w-0 bg-gold-light transition-all duration-700 group-hover:w-full" />
      </div>
    </TiltCard>
  )
}
