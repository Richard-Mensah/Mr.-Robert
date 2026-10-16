import { Flag } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import ButtonLink from "@/components/ui/ButtonLink"
import { YOUTH_FRAMEWORK } from "@/data/pillars"
import { cn, revealDelay } from "@/lib/utils"

// Each level sits higher than the last, so the five stages read as an ascent.
const LIFT = ["lg:mt-72", "lg:mt-52", "lg:mt-32", "lg:mt-14", "lg:mt-0"]

/** The five-stage youth development framework, drawn as a quest map up a mountain trail. */
export default function YouthFramework() {
  return (
    <section
      aria-labelledby="framework-title"
      data-checkpoint="Quest Map"
      className="starfield aurora relative overflow-hidden bg-night py-24 text-ivory lg:py-36"
    >
      <Container size="wide" className="relative">
        <SectionHeader
          id="framework-title"
          eyebrow="A framework for youth development"
          title="From potential to participation."
          tone="light"
          align="split"
          intro={
            <p>
              Five levels, drawn from Robert&apos;s stated mission: helping young people discover their potential,
              develop their leadership capacity and create meaningful change in their communities.
            </p>
          }
        />

        <div className="relative mt-20">
          <svg
            aria-hidden="true"
            data-reveal
            viewBox="0 0 1000 288"
            preserveAspectRatio="none"
            className="absolute inset-x-0 top-6 hidden h-72 w-full overflow-visible lg:block"
          >
            {/* y values match each level's lift (lg:mt-72 … lg:mt-0) so the trail joins the node centres */}
            <path
              className="draw-path"
              style={{ ["--path-length" as string]: 1300 }}
              d="M18 288 C120 288 120 208 221 208 S323 128 425 128 S527 56 628 56 S730 0 832 0"
              stroke="#e6c77e"
              strokeWidth="2"
              strokeDasharray="4 10"
              fill="none"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="relative grid gap-0 lg:grid-cols-5 lg:gap-6">
            {YOUTH_FRAMEWORK.map((stage, index) => (
              <li
                key={stage.title}
                data-reveal
                style={revealDelay(index, 220)}
                className={cn(
                  "relative border-l border-dashed border-gold-light/30 pb-12 pl-10 last:pb-0 lg:border-l-0 lg:pb-0 lg:pl-0",
                  LIFT[index],
                )}
              >
                <span className="quest-node absolute -left-6 top-0 flex size-12 items-center justify-center rounded-full border border-gold-light/40 bg-night font-display text-sm text-gold-light lg:static">
                  {index + 1}
                </span>
                <p className="mt-0 font-display text-[0.65rem] tracking-[0.22em] text-gold-light lg:mt-6">
                  Level {stage.step}
                </p>
                <h3 className="mt-2 font-serif text-3xl tracking-tight lg:text-[1.75rem] xl:text-3xl">{stage.title}</h3>
                <p className="mt-3 leading-relaxed text-ivory/70">{stage.description}</p>
                {index === YOUTH_FRAMEWORK.length - 1 && (
                  <p className="mt-5 inline-flex items-center gap-2 font-script text-2xl text-gold-light">
                    <Flag aria-hidden="true" className="size-4" strokeWidth={1.5} />
                    See you at the top.
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
        <div data-reveal className="mt-16 flex flex-wrap items-center gap-6 border-t border-ivory/10 pt-10">
          <p className="font-serif text-2xl">Where are you on the climb?</p>
          <ButtonLink href="/youth-development#compass" label="Find your level" />
        </div>
      </Container>
    </section>
  )
}
