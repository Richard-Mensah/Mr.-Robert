import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import { revealDelay } from "@/lib/utils"

/** The four aims of Robert's writing, as stated in his profile. */
const THEMES = [
  "Embrace personal growth",
  "Cultivate meaningful relationships",
  "Develop your abilities",
  "Pursue a purposeful life",
]

export default function ReadingThemes() {
  return (
    <section aria-labelledby="reading-themes" data-checkpoint="Themes" className="bg-ivory py-24 lg:py-32">
      <Container size="wide">
        <Eyebrow>What the writing encourages</Eyebrow>
        <h2 id="reading-themes" className="sr-only">
          What Robert&apos;s writing encourages
        </h2>
        <ul className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {THEMES.map((theme, index) => (
            <li key={theme} data-reveal style={revealDelay(index)} className="bg-ivory p-8 lg:p-10">
              <span className="font-serif text-sm italic text-gold-deep">{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-6 font-serif text-3xl leading-tight tracking-tight text-ink">{theme}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
