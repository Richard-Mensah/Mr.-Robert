import Link from "next/link"
import MilestoneIcon from "@/components/features/journey/MilestoneIcon"
import Seal from "@/components/ui/Seal"
import { CREDENTIAL_CATEGORIES, MILESTONES } from "@/data/journey"
import { cn } from "@/lib/utils"

type Props = {
  unlocked: string[]
  onNavigate: () => void
}

/** Credentials grouped by category, laid out like the visa pages of a passport. */
export default function CredentialGrid({ unlocked, onNavigate }: Props) {
  return (
    <div className="mt-8 space-y-7">
      {CREDENTIAL_CATEGORIES.map((category, groupIndex) => {
        const items = MILESTONES.filter((item) => item.category === category.id)
        const earned = items.filter((item) => unlocked.includes(item.id)).length
        return (
          <section key={category.id} aria-labelledby={`cred-${category.id}`}>
            <div className="flex items-center gap-4">
              <span className="font-display text-xs tracking-[0.2em] text-gold-light">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
              <h3 id={`cred-${category.id}`} className="font-display text-sm tracking-[0.2em] text-ivory">
                {category.label}
              </h3>
              <span aria-hidden="true" className="data-rule flex-1" />
              <span className="text-xs tabular-nums text-cerulean-light">
                {earned}/{items.length}
              </span>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {items.map((milestone) => {
                const reached = unlocked.includes(milestone.id)
                return (
                  <li key={milestone.id}>
                    <Link
                      href={milestone.path}
                      onClick={onNavigate}
                      className={cn(
                        "group flex h-full flex-col items-center gap-3 rounded-sm border p-4 text-center transition-all duration-300",
                        reached
                          ? "border-gold-light/30 bg-gold-light/[0.04] hover:-translate-y-0.5 hover:border-gold-light/60"
                          : "border-ivory/10 hover:border-cerulean-light/40",
                      )}
                    >
                      <Seal state={reached ? "earned" : "locked"} size="sm">
                        <MilestoneIcon id={milestone.id} className="size-5" />
                      </Seal>
                      <span className="font-serif text-base leading-tight">{milestone.title}</span>
                      <span className={cn("font-display text-[0.76rem] tracking-[0.16em]", reached ? "text-gold-light" : "text-ivory/45")}>
                        {reached ? "Verified" : "Pending review"}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </section>
        )
      })}
    </div>
  )
}
