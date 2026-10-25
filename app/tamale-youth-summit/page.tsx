import PageHero from "@/components/sections/PageHero"
import SummitSection from "@/components/sections/SummitSection"
import SummitPurpose from "@/components/sections/SummitPurpose"
import SummitRegistration from "@/components/features/summit/SummitRegistration"
import ButtonLink from "@/components/ui/ButtonLink"
import CTASection from "@/components/sections/CTASection"
import PageMoments from "@/components/features/gallery/PageMoments"
import { IMAGES } from "@/data/images"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Tamale Youth Summit",
  description:
    "The Tamale Youth Summit, founded and convened by Robert Kampi Laari, inspires, equips and connects young people with the knowledge, networks and opportunities to become effective leaders and change-makers.",
  path: "/tamale-youth-summit",
})

export default function TamaleYouthSummitPage() {
  return (
    <>
      <PageHero
        eyebrow="Founded and convened by Robert Kampi Laari"
        label="Tamale Youth Summit"
        title={
          <>
            Tamale Youth <em className="text-gold-shimmer">Summit</em>
          </>
        }
        intro={
          <p className="font-display text-base tracking-eyebrow text-forest-light">
            Inspiring &middot; Equipping &middot; Connecting
          </p>
        }
        aside={<ButtonLink href="#pass" label="Get your delegate pass" />}
      />
      <SummitPurpose />
      <SummitSection
        image={IMAGES.summitPage}
        showLink={false}
        title={
          <>
            What young people <span className="italic text-forest">gain.</span>
          </>
        }
      />
      <PageMoments page="tamale-youth-summit" />
      <SummitRegistration />
      <CTASection
        eyebrow="Partner with the Summit"
        title="Help connect young people to opportunity."
        body="Organisations interested in supporting or partnering with the Tamale Youth Summit are invited to get in touch."
      />
    </>
  )
}
