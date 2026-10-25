/**
 * Editorial alignment of Robert's documented focus areas with the UN Sustainable Development Goals.
 * This is the site's own framing for international readers, not a claim of UN affiliation or
 * endorsement. Keep the footnote on the dossier page whenever this table is shown.
 */
export const SDG_ALIGNMENT: Record<string, { goal: number; name: string }[]> = {
  "Youth Empowerment": [
    { goal: 8, name: "Decent work and economic growth" },
    { goal: 10, name: "Reduced inequalities" },
  ],
  Entrepreneurship: [{ goal: 8, name: "Decent work and economic growth" }],
  "Digital Inclusion": [
    { goal: 9, name: "Industry, innovation and infrastructure" },
    { goal: 4, name: "Quality education" },
  ],
  "Leadership Development": [
    { goal: 4, name: "Quality education" },
    { goal: 16, name: "Peace, justice and strong institutions" },
  ],
  Peacebuilding: [{ goal: 16, name: "Peace, justice and strong institutions" }],
  "Sustainable Livelihoods": [
    { goal: 1, name: "No poverty" },
    { goal: 8, name: "Decent work and economic growth" },
  ],
}

export const SDG_FOOTNOTE =
  "SDG alignment is the editors' mapping of documented focus areas to the Sustainable Development Goals. It does not indicate affiliation with or endorsement by the United Nations."
