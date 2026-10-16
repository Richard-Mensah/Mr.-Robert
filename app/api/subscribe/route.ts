import { NextRequest } from "next/server"
import { subscribeSchema } from "@/lib/validations"
import { saveSubscriber } from "@/lib/subscribers"
import { failure, invalid, ok, readJson } from "@/lib/apiResponse"

const MESSAGES = {
  insights: "You're on the list. New insights will arrive in your inbox.",
  books: "Thank you. You'll hear when the books are available to order.",
  summit: "Your interest is registered. You'll hear about the next Tamale Youth Summit.",
}

// POST /api/subscribe
export async function POST(request: NextRequest) {
  try {
    const parsed = subscribeSchema.safeParse(await readJson(request))
    if (!parsed.success) return invalid(parsed.error)
    if (parsed.data.website) return ok(MESSAGES[parsed.data.interest])

    await saveSubscriber(parsed.data)
    return ok(MESSAGES[parsed.data.interest], 201)
  } catch (error) {
    return failure(error, "Failed to save subscriber")
  }
}
