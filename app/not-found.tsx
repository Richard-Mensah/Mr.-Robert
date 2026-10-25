import Container from "@/components/ui/Container"
import ButtonLink from "@/components/ui/ButtonLink"
import Eyebrow from "@/components/ui/Eyebrow"

export default function NotFound() {
  return (
    <section className="grid-chancery aurora relative flex min-h-[80svh] items-center overflow-hidden bg-night pb-24 pt-40 text-ivory">
      <Container>
        <Eyebrow tone="light">Page not found</Eyebrow>
        <h1 className="mt-8 font-serif text-5xl leading-tight tracking-tight text-ivory sm:text-7xl">
          This page has moved on.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-ivory/70">
          The page you are looking for does not exist or is no longer available.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/" label="Return home" />
          <ButtonLink href="/contact" label="Contact" variant="light" />
        </div>
      </Container>
    </section>
  )
}
