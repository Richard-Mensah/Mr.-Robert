import PageHero from "@/components/sections/PageHero"
import RoleSection from "@/components/sections/RoleSection"
import FocusExplorer from "@/components/features/leadership/FocusExplorer"
import PartnershipOrbit from "@/components/sections/PartnershipOrbit"
import CTASection from "@/components/sections/CTASection"
import { PROFILE } from "@/data/profile"
import PageMoments from "@/components/features/gallery/PageMoments"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Leadership",
  description:
    "Robert Kampi Laari serves as Regional Director of the National Youth Authority in Ghana's North East Region, advancing youth empowerment, entrepreneurship, digital inclusion, leadership development, peacebuilding and sustainable livelihoods.",
  path: "/leadership",
})

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Public leadership"
        title={
          <>
            Leadership that creates <em className="text-gold-shimmer">opportunity.</em>
          </>
        }
        intro={
          <p>
            Robert serves as Regional Director of the National Youth Authority (NYA) in Ghana&apos;s North East
            Region, where he works to advance the opportunities and participation of young people.
          </p>
        }
        aside={
          <div className="border-l-2 border-gold-light pl-6">
            <p className="font-display text-xs tracking-eyebrow text-gold-light">Current role</p>
            <p className="mt-3 font-serif text-2xl leading-snug text-ivory">{PROFILE.currentRole.title}</p>
            <p className="mt-1 text-ivory/70">{PROFILE.currentRole.organisation}</p>
            <p className="text-ivory/70">{PROFILE.currentRole.region}</p>
          </div>
        }
      />
      <RoleSection />
      <FocusExplorer />
      <PageMoments page="leadership" />
      <PartnershipOrbit />
      <CTASection
        eyebrow="Partnerships"
        title="Partner on youth development."
        body="Organisations interested in youth development and community initiatives are welcome to get in touch."
      />
    </>
  )
}
