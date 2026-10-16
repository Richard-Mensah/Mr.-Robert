import { BookOpen, Landmark, Mic, Sprout, Users } from "lucide-react"
import Container from "@/components/ui/Container"
import { AT_A_GLANCE } from "@/data/pillars"
import { revealDelay } from "@/lib/utils"

const ICONS = [Sprout, Landmark, BookOpen, Mic, Users]

/** Five trail markers summarising Robert's work. */
export default function AtAGlance() {
  return (
    <section
      id="at-a-glance"
      aria-labelledby="glance-title"
      data-checkpoint="Trailhead"
      className="relative scroll-mt-20 border-b border-gold/20 bg-ivory"
    >
      <Container size="wide">
        <h2 id="glance-title" className="sr-only">
          At a glance
        </h2>
        <ul className="grid gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-5">
          {AT_A_GLANCE.map((item, index) => {
            const Icon = ICONS[index]
            return (
              <li
                key={item.title}
                data-reveal
                style={revealDelay(index)}
                className="group relative bg-ivory px-2 py-10 transition-colors duration-500 hover:bg-paper sm:px-8 lg:py-12"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-full border border-gold/40 text-gold-deep transition-all duration-500 group-hover:border-transparent group-hover:bg-night group-hover:text-gold-light group-hover:shadow-[0_0_24px_rgba(230,199,126,0.45)]">
                    <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-display text-[0.6rem] tracking-[0.2em] text-gold-deep">
                    Marker {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-2xl tracking-tight text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
