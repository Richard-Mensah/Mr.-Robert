import { readFile } from "node:fs/promises"
import { neon } from "@neondatabase/serverless"

async function migrate() {
  const url = process.env.DATABASE_URL
  if (!url) {
    console.error("DATABASE_URL is not set. Add it to .env.local first.")
    process.exit(1)
  }

  const sql = neon(url)
  const schema = await readFile(new URL("../db/schema.sql", import.meta.url), "utf8")
  const statements = schema
    .split(/;\s*$/m)
    .map((statement) => statement.replace(/^\s*--.*$/gm, "").trim())
    .filter(Boolean)

  for (const statement of statements) {
    await sql.query(statement)
  }
  console.log(`Applied ${statements.length} statements to Neon.`)
}

migrate().catch((error) => {
  console.error("Migration failed:", error)
  process.exit(1)
})
