import { neon } from "@neondatabase/serverless"

const TABLES = ["inquiries", "insights", "subscribers", "compass_results"]

/** Verifies the Neon connection and reports which tables exist and how many rows they hold. */
async function check() {
  const url = process.env.DATABASE_URL
  if (!url) {
    console.error("DATABASE_URL is not set. Add your Neon pooled connection string to .env.local.")
    process.exit(1)
  }
  if (!url.includes("sslmode=require")) console.warn("Warning: DATABASE_URL should end with ?sslmode=require")

  const sql = neon(url)
  const [info] = (await sql`select version() as version, current_database() as database`) as {
    version: string
    database: string
  }[]
  console.log(`Connected to "${info.database}" (${info.version.split(" ").slice(0, 2).join(" ")})`)

  const existing = (await sql`
    select table_name from information_schema.tables
    where table_schema = 'public' and table_name = any(${TABLES})
  `) as { table_name: string }[]
  const present = new Set(existing.map((row) => row.table_name))

  let missing = 0
  for (const table of TABLES) {
    if (!present.has(table)) {
      console.log(`  ✗ ${table}: missing`)
      missing += 1
      continue
    }
    const [{ count }] = (await sql.query(`select count(*)::int as count from ${table}`)) as { count: number }[]
    console.log(`  ✓ ${table}: ${count} rows`)
  }

  if (missing > 0) {
    console.log("\nRun `npm run db:migrate` to create the missing tables.")
    process.exit(1)
  }
}

check().catch((error) => {
  console.error("Database check failed:", error instanceof Error ? error.message : error)
  process.exit(1)
})
