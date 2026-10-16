import Link from "next/link"
import { ArrowUpRight, CalendarCheck, Compass, FileText, Ticket } from "lucide-react"
import Container from "@/components/ui/Container"
import ContactForm from "@/components/features/forms/ContactForm"
import type { InquiryKind } from "@/types"

const SHORTCUTS = [
  { label: "Plan an event", detail: "Build a brief for a speaking invitation", href: "/speaker#planner", Icon: CalendarCheck },
  { label: "Speaker one-sheet", detail: "A printable summary for your team", href: "/speaker/one-sheet", Icon: FileText },
  { label: "Summit delegate pass", detail: "Register interest in the next edition", href: "/tamale-youth-summit#pass", Icon: Ticket },
  { label: "Leadership Compass", detail: "A one-minute reflection for young people", href: "/youth-development#compass", Icon: Compass },
]

type Props = {
  defaultKind: InquiryKind
}

export default function ContactSection({ defaultKind }: Props) {
  return (
    <section aria-labelledby="contact-shortcuts" data-checkpoint="Message" className="bg-paper py-24 lg:py-36">
      <Container size="wide" className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div id="enquiry" className="scroll-mt-24 border border-ink/10 bg-ivory p-6 shadow-[0_30px_70px_-40px_rgba(6,20,15,0.4)] sm:p-10 lg:col-span-7 lg:p-14">
          <ContactForm key={defaultKind} defaultKind={defaultKind} />
        </div>

        <aside className="lg:col-span-4 lg:col-start-9">
          <h2 id="contact-shortcuts" className="font-display text-xs tracking-eyebrow text-gold-deep">
            Faster routes
          </h2>
          <ul className="mt-6 space-y-3">
            {SHORTCUTS.map(({ label, detail, href, Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-start gap-4 border border-ink/10 bg-ivory p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold"
                >
                  <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-gold-deep" strokeWidth={1.5} />
                  <span className="flex-1">
                    <span className="block font-serif text-lg text-ink">{label}</span>
                    <span className="block text-sm text-muted">{detail}</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="size-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            Messages are delivered to a private inbox and reviewed personally. Replies come by email.
          </p>
        </aside>
      </Container>
    </section>
  )
}
