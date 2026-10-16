import type { Metadata } from "next"
import Container from "@/components/ui/Container"
import CountPanel from "@/components/features/admin/CountPanel"
import InquiryList from "@/components/features/admin/InquiryList"
import { getAdminData } from "@/lib/admin"
import { COMPASS_LEVELS } from "@/lib/compassScore"
import { formatDate } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const data = await getAdminData()

  return (
    <div className="bg-ivory pb-24">
      <div className="bg-night pb-12 pt-32 text-ivory lg:pt-40">
        <Container size="wide">
          <p className="font-display text-xs tracking-eyebrow text-gold-light">Private</p>
          <h1 className="mt-4 font-serif text-5xl tracking-tight">Inbox</h1>
        </Container>
      </div>
      <Container size="wide">

        {!data.connected ? (
          <p className="mt-10 border-l-2 border-gold bg-paper p-6 text-muted">
            {"error" in data && data.error
              ? data.error
              : "No database connected. Add DATABASE_URL to .env.local and run npm run db:migrate."}
          </p>
        ) : (
          <>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <CountPanel title="Inquiries" labels={["speaking", "partnership", "media", "general"]} rows={data.inquiryCounts} />
              <CountPanel title="Subscribers" labels={["insights", "books", "summit"]} rows={data.subscriberCounts} />
              <CountPanel title="Leadership Compass" labels={COMPASS_LEVELS} rows={data.compass} />
            </div>

            <h2 className="mt-16 font-serif text-3xl text-ink">Recent inquiries</h2>
            <div className="mt-6">
              <InquiryList inquiries={data.inquiries} />
            </div>

            <h2 className="mt-16 font-serif text-3xl text-ink">Subscribers</h2>
            <div className="mt-6 overflow-x-auto border border-ink/10 bg-paper">
              <table className="w-full min-w-[40rem] text-left text-sm">
                <thead className="border-b border-ink/10 text-xs uppercase tracking-wider text-muted">
                  <tr>
                    <th className="p-4 font-medium">Email</th>
                    <th className="p-4 font-medium">Name</th>
                    <th className="p-4 font-medium">Interest</th>
                    <th className="p-4 font-medium">Role</th>
                    <th className="p-4 font-medium">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/10">
                  {data.subscribers.map((row) => (
                    <tr key={row.id}>
                      <td className="p-4 text-ink">{row.email}</td>
                      <td className="p-4 text-muted">{row.name ?? "—"}</td>
                      <td className="p-4 capitalize text-muted">{row.interest}</td>
                      <td className="p-4 text-muted">{row.role ?? "—"}</td>
                      <td className="p-4 text-muted">{formatDate(new Date(row.created_at).toISOString())}</td>
                    </tr>
                  ))}
                  {data.subscribers.length === 0 && (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-muted">
                        No subscribers yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </Container>
    </div>
  )
}
