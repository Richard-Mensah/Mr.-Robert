"use client"

import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ reset }: Props) {
  return (
    <section className="starfield aurora relative flex min-h-[80svh] items-center overflow-hidden bg-night pb-24 pt-40 text-ivory">
      <Container>
        <Eyebrow tone="light">Something went wrong</Eyebrow>
        <h1 className="mt-8 font-serif text-5xl leading-tight tracking-tight text-ivory sm:text-6xl">
          We could not load this page.
        </h1>
        <button
          type="button"
          onClick={reset}
          className="mt-10 inline-flex min-h-12 items-center btn-sweep bg-gold-light px-7 text-sm font-medium text-ink hover:bg-ivory"
        >
          Try again
        </button>
      </Container>
    </section>
  )
}
