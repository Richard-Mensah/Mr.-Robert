import { requireDb } from "@/lib/db"
import type { SubscribeInput } from "@/lib/validations"

/** Adds an opt-in subscriber. Subscribing twice to the same interest is a no-op. */
export async function saveSubscriber(input: SubscribeInput) {
  const sql = requireDb()
  await sql`
    insert into subscribers (email, name, interest, role)
    values (${input.email.toLowerCase()}, ${input.name}, ${input.interest}, ${input.role})
    on conflict (email, interest) do nothing
  `
}
