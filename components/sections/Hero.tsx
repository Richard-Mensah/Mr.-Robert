import Container from "@/components/ui/Container"
import ButtonLink from "@/components/ui/ButtonLink"
import Eyebrow from "@/components/ui/Eyebrow"
import ImagePanel from "@/components/ui/ImagePanel"
import { IMAGES } from "@/data/images"

const FRAGMENTS = ["Youth", "Leadership", "Opportunity", "Impact"]

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      data-checkpoint="Base Camp"
      className="starfield aurora relative overflow-hidden bg-night text-ivory"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden select-none flex-col justify-center gap-1 pl-[52%] lg:flex">
        {FRAGMENTS.map((word, index) => (
          <span
            key={word}
            className="font-display text-[6.5rem] leading-none tracking-[0.08em] text-ivory/[0.035] xl:text-[8rem]"
            style={{ marginLeft: `${(index % 2) * 10}%` }}
          >
            {word}
          </span>
        ))}
      </div>

      <Container size="wide" className="relative grid min-h-[100svh] items-center gap-14 pb-20 pt-32 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <div className="relative z-10 lg:col-span-7">
          <div className="animate-rise">
            <Eyebrow tone="light">Robert Kampi Laari</Eyebrow>
          </div>
          <h1
            id="hero-title"
            className="mt-8 animate-rise font-serif text-[2.75rem] leading-[1.02] tracking-tight text-balance [animation-delay:120ms] sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            Empowering young people to lead, build and <em className="text-gold-shimmer">transform.</em>
          </h1>
          <p className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-ivory/75 [animation-delay:240ms] sm:text-xl">
            Youth development advocate, public sector leader, author, motivational speaker and social impact
            entrepreneur, working so that young people in Ghana can discover their potential, develop as leaders
            and create meaningful change in their communities.
          </p>
          <div className="mt-12 flex animate-rise flex-col gap-4 [animation-delay:360ms] sm:flex-row">
            <ButtonLink href="/about" label="Explore His Work" />
            <ButtonLink href="/speaker#invite" label="Invite Robert to Speak" variant="light" />
          </div>
          <p className="mt-10 animate-rise font-script text-3xl text-gold-light/90 [animation-delay:480ms]">
            See you at the top.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
          <svg aria-hidden="true" viewBox="0 0 400 500" className="absolute -inset-6 z-10 h-[calc(100%+3rem)] w-[calc(100%+3rem)] overflow-visible">
            <path
              d="M-10 420 Q140 300 410 330"
              stroke="#e6c77e"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              className="opacity-80"
            />
          </svg>
          <div className="relative aspect-[4/5] animate-unveil overflow-hidden border border-gold-light/25 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)] [animation-delay:200ms]">
            <ImagePanel image={IMAGES.hero} priority className="h-full w-full" sizes="(min-width: 1024px) 40vw, 90vw" />
          </div>
          <div className="relative z-20 -mt-10 ml-auto mr-4 max-w-xs animate-float border border-gold-light/30 bg-ink/85 px-6 py-5 backdrop-blur-md sm:-mr-6">
            <p className="font-display text-[0.6rem] tracking-[0.22em] text-gold-light">Regional Director</p>
            <p className="mt-1 font-serif text-lg leading-snug">National Youth Authority, North East Region</p>
          </div>
        </div>
      </Container>

      <a
        href="#at-a-glance"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 font-display text-[0.6rem] tracking-[0.22em] text-gold-light/80 hover:text-gold-light lg:flex"
      >
        Begin the climb
        <span aria-hidden="true" className="block h-12 w-px animate-scroll-cue bg-gold-light/70" />
      </a>
    </section>
  )
}
