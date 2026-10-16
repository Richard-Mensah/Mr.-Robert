import { requireDb } from "@/lib/db"
import type { InquiryInput } from "@/lib/validations"

/** Persists a validated inquiry to the Neon `inquiries` table. */
export async function saveInquiry(input: InquiryInput) {
  const sql = requireDb()
  await sql`
    insert into inquiries
      (kind, name, email, organisation, event_name, proposed_date, location, topic, message)
    values
      (${input.kind}, ${input.name}, ${input.email}, ${input.organisation}, ${input.eventName},
       ${input.proposedDate}, ${input.location}, ${input.topic}, ${input.message})
  `
}
