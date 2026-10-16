import type { CompassLevel } from "@/types"

export const COMPASS_LEVELS: CompassLevel[] = ["discover", "develop", "connect", "lead", "transform"]

/**
 * Picks the framework stage chosen most often. Ties resolve to the earlier stage,
 * so the result is always a gentle, achievable next step. Pure: safe on client and server.
 */
export function scoreCompass(answers: CompassLevel[]): CompassLevel {
  const counts = new Map<CompassLevel, number>()
  answers.forEach((answer) => counts.set(answer, (counts.get(answer) ?? 0) + 1))
  return COMPASS_LEVELS.reduce(
    (best, level) => ((counts.get(level) ?? 0) > (counts.get(best) ?? 0) ? level : best),
    COMPASS_LEVELS[0],
  )
}
