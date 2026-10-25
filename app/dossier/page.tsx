import Container from "@/components/ui/Container"
import JourneyPanel from "@/components/features/journey/JourneyPanel"
import PrintButton from "@/components/features/speaker/PrintButton"
import DossierMandate from "@/components/features/dossier/DossierMandate"
import DossierPortfolio from "@/components/features/dossier/DossierPortfolio"
import DossierProfile from "@/components/features/dossier/DossierProfile"
import DossierRecord from "@/components/features/dossier/DossierRecord"
import DossierSheet from "@/components/features/dossier/DossierSheet"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Briefing Dossier",
  description:
    "A two-sheet candidate summary of Robert Kampi Laari for scholarship, fellowship and programme committees: mandate, focus areas, convenings, field record, publications and education.",
  path: "/dossier",
})

export default function DossierPage() {
  return (
    <div className="grid-chancery relative bg-night pb-24 pt-32 print:bg-white print:p-0 lg:pt-40">
      <Container size="narrow" className="max-w-[230mm] print:max-w-none print:px-0">
        <div className="mx-auto mb-8 flex max-w-[210mm] flex-wrap items-center justify-between gap-4 text-ivory print:hidden">
          <div>
            <p className="font-display text-sm tracking-[0.22em] text-gold-light">For committees and selection panels</p>
            <p className="mt-1 text-sm text-ivory/60">Two A4 sheets. Choose &ldquo;Save as PDF&rdquo; in the print dialog.</p>
          </div>
          <div className="flex items-center gap-3">
            <JourneyPanel />
            <PrintButton />
          </div>
        </div>

        <article aria-labelledby="dossier-title" className="space-y-10 print:space-y-0">
          <DossierSheet page={1} pages={2} title="Profile and mandate">
            <DossierProfile />
            <DossierMandate />
          </DossierSheet>
          <DossierSheet page={2} pages={2} title="Record and engagement">
            <DossierRecord />
            <DossierPortfolio />
          </DossierSheet>
        </article>
      </Container>
    </div>
  )
}
