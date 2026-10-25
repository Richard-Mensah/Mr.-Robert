import { LEADERSHIP_AREAS } from "@/data/pillars"
import { SDG_ALIGNMENT, SDG_FOOTNOTE } from "@/data/dossier"

/** Focus areas of the public mandate, each with its editorial SDG alignment. */
export default function MandateTable() {
  return (
    <div>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">Focus areas and their editorial alignment with the Sustainable Development Goals</caption>
        <thead className="sr-only">
          <tr>
            <th scope="col">Focus area</th>
            <th scope="col">Scope</th>
            <th scope="col">Sustainable Development Goals</th>
          </tr>
        </thead>
        <tbody>
          {LEADERSHIP_AREAS.map((area) => (
            <tr key={area.title} className="border-b border-stone/70 align-top last:border-0">
              <th scope="row" className="py-2 pr-3 font-normal sm:w-[30%] print:w-[30%]">
                <span className="font-serif text-[0.84rem] leading-tight">{area.title}</span>
                <span className="mt-0.5 block text-[0.7rem] leading-snug text-muted sm:hidden print:hidden">{area.description}</span>
              </th>
              <td className="hidden py-2 pr-3 text-[0.68rem] leading-snug text-muted sm:table-cell print:table-cell">{area.description}</td>
              <td className="whitespace-nowrap py-2 text-right">
                <ul className="inline-flex justify-end gap-1">
                  {(SDG_ALIGNMENT[area.title] ?? []).map((sdg) => (
                    <li
                      key={sdg.goal}
                      title={sdg.name}
                      className="whitespace-nowrap rounded-full bg-cerulean/10 px-1.5 py-px text-[0.6rem] font-semibold tabular-nums text-cerulean"
                    >
                      SDG {sdg.goal}
                      <span className="sr-only">: {sdg.name}</span>
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-1.5 text-[0.58rem] leading-snug text-muted">Note: {SDG_FOOTNOTE}</p>
    </div>
  )
}
