import { NextRequest } from "next/server"
import { inquirySchema } from "@/lib/validations"
import { saveInquiry } from "@/lib/inquiries"
import { guardRequest } from "@/lib/requestGuard"
import { failure, invalid, ok, readJson } from "@/lib/apiResponse"

// POST /api/inquiries
export async function POST(request: NextRequest) {
  const blocked = guardRequest(request, "inquiries", 5)
  if (blocked) return blocked

  try {
    const parsed = inquirySchema.safeParse(await readJson(request))
    if (!parsed.success) return invalid(parsed.error)

    // Honeypot filled in: respond as if successful, store nothing.
    if (parsed.data.website) return ok("Thank you. Your message has been received.")

    await saveInquiry(parsed.data)
    return ok("Thank you. Your message has been received and will be reviewed shortly.", 201)
  } catch (error) {
    return failure(error, "Failed to save inquiry")
  }
}
