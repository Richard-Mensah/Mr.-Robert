import { BookOpen, Landmark, Mic, Sprout, Users } from "lucide-react"
import Container from "@/components/ui/Container"
import DataRule from "@/components/ui/DataRule"
import Seal from "@/components/ui/Seal"
import { AT_A_GLANCE } from "@/data/pillars"
import { revealDelay } from "@/lib/utils"

const ICONS = [Sprout, Landmark, BookOpen, Mic, Users]

/** Portfolio at a glance: the five strands of Robert's work, each sealed like a credential. */
export default function AtAGlance() {
  return (
    <section
      id="at-a-glance"
      aria-labelledby="glance-title"
      data-checkpoint="Portfolio"
      className="relative scroll-mt-20 border-b border-stone bg-ivory py-16 lg:py-20"
    >
      <Container size="wide">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 id="glance-title" className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
            Portfolio at a glance
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Five strands of one body of work, from public office to the page and the stage.
          </p>
        </div>
        <DataRule index="§ 01" label="Portfolio" className="mt-6" />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {AT_A_GLANCE.map((item, index) => {
            const Icon = ICONS[index]
            return (
              <li
                key={item.title}
                data-reveal
                style={revealDelay(index)}
                className="group relative overflow-hidden rounded-sm border border-stone bg-paper p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_50px_-28px_rgba(6,20,15,0.45)]"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-cerulean transition-transform duration-700 group-hover:scale-x-100" />
                <div className="flex items-center justify-between">
                  <Seal size="sm" className="transition-transform duration-700 group-hover:rotate-[20deg]">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </Seal>
                  <span className="font-display text-sm tracking-[0.2em] text-forest">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-2xl tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
