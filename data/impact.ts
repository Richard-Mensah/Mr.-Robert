/**
 * Impact figures shown on the homepage and in the dossier. Each one records where it came from.
 * Set a figure to null to hide it everywhere; never add one without a source.
 */
export type ImpactFigure = {
  value: number
  /** Shown after the number, e.g. "+" for "20,000+". */
  suffix: string
  label: string
  scope: string
  source: string
}

export const SPEAKING_REACH: ImpactFigure | null = {
  value: 20000,
  suffix: "+",
  label: "People reached through speaking engagements",
  scope: "Across Northern Ghana and beyond",
  source: "Supplied by Robert Kampi Laari, October 2026",
}
