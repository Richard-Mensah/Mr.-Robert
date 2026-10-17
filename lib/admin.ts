import { getDb } from "@/lib/db"

export type InquiryRow = {
  id: number
  kind: string
  name: string
  email: string
  organisation: string | null
  event_name: string | null
  proposed_date: string | null
  location: string | null
  topic: string | null
  message: string
  created_at: string | Date
}

export type SubscriberRow = {
  id: number
  email: string
  name: string | null
  interest: string
  role: string | null
  created_at: string | Date
}

export type CountRow = { label: string; count: number }

const LIMIT = 100

/** Read-only queries for the admin inbox. All return empty results without a database. */
export async function getAdminData() {
  const sql = getDb()
  if (!sql) return { connected: false as const }

  try {
    const [inquiries, subscribers, inquiryCounts, subscriberCounts, compass] = await Promise.all([
      sql`select id, kind, name, email, organisation, event_name, proposed_date, location, topic, message, created_at
          from inquiries order by created_at desc limit ${LIMIT}`,
      sql`select id, email, name, interest, role, created_at
          from subscribers order by created_at desc limit ${LIMIT}`,
      sql`select kind as label, count(*)::int as count from inquiries group by kind`,
      sql`select interest as label, count(*)::int as count from subscribers group by interest`,
      sql`select level as label, count(*)::int as count from compass_results group by level`,
    ])
    return {
      connected: true as const,
      inquiries: inquiries as InquiryRow[],
      subscribers: subscribers as SubscriberRow[],
      inquiryCounts: inquiryCounts as CountRow[],
      subscriberCounts: subscriberCounts as CountRow[],
      compass: compass as CountRow[],
    }
  } catch (error) {
    console.error("Admin query failed", error)
    return { connected: false as const, error: "Could not query the database. Have you run npm run db:migrate?" }
  }
}
