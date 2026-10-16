import { NextRequest, NextResponse } from "next/server"

/** Constant-time comparison so response timing does not leak how much of a guess was right. */
function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false
  let mismatch = 0
  for (let index = 0; index < a.length; index += 1) mismatch |= a.charCodeAt(index) ^ b.charCodeAt(index)
  return mismatch === 0
}

function unauthorized(message: string) {
  return new NextResponse(message, {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="RKL Admin", charset="UTF-8"', "Cache-Control": "no-store" },
  })
}

/** Protects /admin with HTTP Basic Auth using ADMIN_USERNAME and ADMIN_PASSWORD. */
export function middleware(request: NextRequest) {
  const username = process.env.ADMIN_USERNAME
  const password = process.env.ADMIN_PASSWORD
  if (!username || !password) return unauthorized("Admin is disabled. Set ADMIN_USERNAME and ADMIN_PASSWORD.")

  const header = request.headers.get("authorization") ?? ""
  if (!header.startsWith("Basic ")) return unauthorized("Authentication required.")

  const [user, ...rest] = atob(header.slice(6)).split(":")
  if (!safeEqual(user, username) || !safeEqual(rest.join(":"), password)) {
    return unauthorized("Invalid credentials.")
  }

  const response = NextResponse.next()
  response.headers.set("X-Robots-Tag", "noindex, nofollow")
  response.headers.set("Cache-Control", "no-store")
  return response
}

export const config = {
  matcher: ["/admin/:path*"],
}
