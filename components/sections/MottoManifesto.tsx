import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import { MANIFESTO } from "@/data/pillars"
import { revealDelay } from "@/lib/utils"

/** Robert's personal motto, set as a signed editorial manifesto. */
export default function MottoManifesto() {
  return (
    <section
      aria-labelledby="motto-title"
      data-checkpoint="Motto"
      className="grid-chancery aurora relative overflow-hidden bg-ink py-28 text-ivory lg:py-44"
    >
      <Container size="wide" className="relative text-center">
        <div className="flex justify-center">
          <Eyebrow tone="light">Personal motto</Eyebrow>
        </div>
        <h2
          id="motto-title"
          data-reveal
          className="text-gold-shimmer mx-auto mt-8 max-w-5xl pb-4 font-script text-[4.5rem] leading-[1.05] sm:text-[7.5rem] lg:text-[10rem]"
        >
          See you at the top.
        </h2>
        <div className="gold-line mx-auto mt-6 max-w-md" />
        <p data-reveal className="mx-auto mt-10 max-w-xl text-lg leading-relaxed text-ivory/70">
          Robert&apos;s motto is an invitation, not a farewell: a reminder that progress is possible, and that the
          journey is better made together.
        </p>

        <ol className="mt-20 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
          {MANIFESTO.map((line, index) => (
            <li
              key={line}
              data-reveal
              style={revealDelay(index, 100)}
              className="border border-ivory/10 bg-ivory/[0.03] p-8 transition-colors duration-500 hover:border-gold-light/40"
            >
              <span className="font-display text-xs tracking-[0.2em] text-gold-light">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-6 font-serif text-2xl leading-snug">{line}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
