import Link from "next/link"
import { FileText } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import SpeakerInquiryForm from "@/components/features/forms/SpeakerInquiryForm"

type Props = {
  brief?: {
    audience?: string
    format?: string
    topic?: string
  }
}

export default function SpeakerInvite({ brief = {} }: Props) {
  const fromPlanner = Boolean(brief.topic || brief.format || brief.audience)
  const message = fromPlanner
    ? [brief.audience ? `Audience: ${brief.audience}` : "", brief.format ? `Format: ${brief.format}` : ""]
        .filter(Boolean)
        .join("\n") + "\n\n"
    : undefined

  return (
    <section id="invite" aria-labelledby="invite-title" data-checkpoint="Invitation" className="scroll-mt-20 bg-paper py-24 lg:py-36">
      <Container size="wide" className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeader
            id="invite-title"
            eyebrow="Speaking invitations"
            title="Invite Robert to speak."
            intro={
              <p>
                Share a few details about your event and audience. Every invitation is reviewed, and you will receive
                a reply by email.
              </p>
            }
          />
          {fromPlanner && (
            <p className="mt-8 border-l-2 border-gold bg-ivory p-4 text-sm text-muted">
              Your brief from the planner has been added below. Adjust anything you like.
            </p>
          )}
          <Link
            href="/speaker/one-sheet"
            className="mt-8 inline-flex min-h-11 items-center gap-2 border-b border-current text-sm text-forest hover:text-gold-deep"
          >
            <FileText aria-hidden="true" className="size-4" strokeWidth={1.5} />
            Open the printable speaker one-sheet
          </Link>
        </div>
        <div className="border border-ink/10 bg-ivory p-6 shadow-[0_30px_70px_-40px_rgba(6,20,15,0.4)] sm:p-10 lg:col-span-7 lg:col-start-6 lg:p-14">
          <SpeakerInquiryForm
            key={`${brief.topic}-${brief.format}-${brief.audience}`}
            defaults={{ topic: brief.topic, message }}
          />
        </div>
      </Container>
    </section>
  )
}
