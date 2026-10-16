import Container from "@/components/ui/Container"
import Eyebrow from "@/components/ui/Eyebrow"
import ButtonLink from "@/components/ui/ButtonLink"

type Props = {
  eyebrow?: string
  title?: string
  body?: string
}

export default function CTASection({
  eyebrow = "Work with Robert",
  title = "Let's build something meaningful.",
  body = "For speaking invitations, partnerships in youth development and community initiatives, media requests or general enquiries.",
}: Props) {
  return (
    <section aria-labelledby="cta-title" data-checkpoint="Connect" className="bg-ivory py-24 lg:py-32">
      <Container size="wide" className="grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2
            id="cta-title"
            data-reveal
            className="mt-8 font-serif text-4xl leading-[1.05] tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl"
          >
            {title}
          </h2>
          <p data-reveal className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {body}
          </p>
        </div>
        <div data-reveal className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
          <ButtonLink href="/speaker#invite" label="Invite Robert to Speak" className="w-full lg:w-auto" />
          <ButtonLink href="/contact" label="Get in Touch" variant="outline" className="w-full lg:w-auto" />
        </div>
      </Container>
    </section>
  )
}
