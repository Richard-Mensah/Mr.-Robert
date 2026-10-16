import { requireDb } from "@/lib/db"
import type { CompassLevel } from "@/types"

/** Stores an anonymous Leadership Compass outcome. */
export async function saveCompassResult(level: CompassLevel) {
  const sql = requireDb()
  await sql`insert into compass_results (level) values (${level})`
}
