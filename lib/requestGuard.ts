import { NextResponse, type NextRequest } from "next/server"

const MAX_BODY_BYTES = 32 * 1024
const WINDOW_MS = 10 * 60 * 1000

type Bucket = { count: number; resetAt: number }
const buckets = new Map<string, Bucket>()

function isCrossSite(request: NextRequest) {
  const origin = request.headers.get("origin")
  if (!origin) return false
  try {
    return new URL(origin).host !== request.headers.get("host")
  } catch {
    return true
  }
}

function clientIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown"
}

/** Fixed-window counter per route and IP. Returns true while the caller is under the limit. */
function withinLimit(key: string, limit: number) {
  const now = Date.now()
  if (buckets.size > 5000) {
    for (const [entry, bucket] of buckets) if (bucket.resetAt <= now) buckets.delete(entry)
  }
  const bucket = buckets.get(key)
  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }
  bucket.count += 1
  return bucket.count <= limit
}

/**
 * First line of defence for public POST endpoints that write to Neon:
 * rejects cross-site posts, oversized bodies and bursts from one IP.
 *
 * The rate limit lives in memory, so on serverless it applies per warm instance.
 * It stops casual flooding; use a shared store (e.g. a Neon table or Upstash) if abuse grows.
 */
export function guardRequest(request: NextRequest, route: string, limit: number): NextResponse | null {
  if (isCrossSite(request)) {
    return NextResponse.json({ error: "Cross-site requests are not allowed." }, { status: 403 })
  }

  if (Number(request.headers.get("content-length") ?? 0) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "That message is too large." }, { status: 413 })
  }

  if (!withinLimit(`${route}:${clientIp(request)}`, limit)) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a few minutes and try again." },
      { status: 429, headers: { "Retry-After": String(WINDOW_MS / 1000) } },
    )
  }

  return null
}
