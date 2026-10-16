import PageHero from "@/components/sections/PageHero"
import ContactSection from "@/components/sections/ContactSection"
import { pageMetadata } from "@/lib/seo"
import type { InquiryKind } from "@/types"

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact Robert Kampi Laari about speaking invitations, partnerships in youth development, media requests or general enquiries.",
  path: "/contact",
})

const KINDS: InquiryKind[] = ["speaking", "partnership", "media", "general"]

type Props = {
  searchParams: Promise<{ type?: string }>
}

export default async function ContactPage({ searchParams }: Props) {
  const { type } = await searchParams
  const defaultKind = KINDS.find((kind) => kind === type) ?? "general"

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <em className="text-gold-shimmer">meaningful.</em>
          </>
        }
        intro={<p>Choose the pathway that best fits your enquiry. Every message is read and reviewed.</p>}
      />
      <ContactSection defaultKind={defaultKind} />
    </>
  )
}
