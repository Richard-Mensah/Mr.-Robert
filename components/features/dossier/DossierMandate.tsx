import { Handshake, Landmark, Scale, Users } from "lucide-react"
import DossierHeading from "@/components/features/dossier/DossierHeading"
import MandateTable from "@/components/features/dossier/MandateTable"
import { BIOGRAPHY, GOVERNANCE_COMMITMENTS, PROFILE } from "@/data/profile"

const COMMITMENT_ICONS = [Users, Landmark, Scale, Handshake]

/** Rest of sheet one: the mandate, the focus areas and Robert's stated position. */
export default function DossierMandate() {
  return (
    <div className="mt-5 space-y-4">
      <section>
        <DossierHeading index="01" kicker="Public office">
          Mandate
        </DossierHeading>
        <p className="mt-2 text-[0.74rem] leading-relaxed text-muted">{BIOGRAPHY[1]}</p>
        <ul className="mt-2 grid gap-1.5 sm:grid-cols-2 print:grid-cols-2">
          {GOVERNANCE_COMMITMENTS.map((item, index) => {
            const Icon = COMMITMENT_ICONS[index]
            return (
              <li key={item} className="flex items-start gap-2.5 rounded-sm bg-ivory px-3 py-1.5 text-[0.7rem] leading-snug">
                <Icon aria-hidden="true" className="mt-0.5 size-3.5 shrink-0 text-cerulean" strokeWidth={1.75} />
                {item}
              </li>
            )
          })}
        </ul>
      </section>

      <section>
        <DossierHeading index="02">
          Portfolio of focus areas
        </DossierHeading>
        <div className="mt-1">
          <MandateTable />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 print:grid-cols-2">
        <div>
          <DossierHeading index="03">Position</DossierHeading>
          <blockquote className="mt-2 border-l-2 border-gold pl-3 font-serif text-[0.84rem] leading-snug">
            {PROFILE.belief}
          </blockquote>
        </div>
        <div>
          <DossierHeading index="04">Vision</DossierHeading>
          <blockquote className="mt-2 border-l-2 border-cerulean pl-3 font-serif text-[0.84rem] leading-snug">
            {PROFILE.vision}
          </blockquote>
        </div>
      </section>
    </div>
  )
}
