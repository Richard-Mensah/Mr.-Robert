import { neon, type NeonQueryFunction } from "@neondatabase/serverless"
import { env } from "@/lib/env"

let client: NeonQueryFunction<false, false> | null = null

export class DatabaseNotConfiguredError extends Error {}

/** Returns a Neon SQL client, or null when DATABASE_URL is not configured. */
export function getDb() {
  const url = env().DATABASE_URL
  if (!url) return null
  if (!client) client = neon(url)
  return client
}

/** Like getDb, but throws DatabaseNotConfiguredError so API routes can answer 503. */
export function requireDb() {
  const sql = getDb()
  if (!sql) throw new DatabaseNotConfiguredError("DATABASE_URL is not set")
  return sql
}
