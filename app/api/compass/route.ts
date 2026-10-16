import { NextRequest, NextResponse } from "next/server"
import { compassSchema } from "@/lib/validations"
import { saveCompassResult } from "@/lib/compass"
import { scoreCompass } from "@/lib/compassScore"
import { failure, invalid, readJson } from "@/lib/apiResponse"

// POST /api/compass: scores answers on the server and stores the anonymous outcome.
export async function POST(request: NextRequest) {
  try {
    const parsed = compassSchema.safeParse(await readJson(request))
    if (!parsed.success) return invalid(parsed.error)

    const level = scoreCompass(parsed.data.answers)
    await saveCompassResult(level)
    return NextResponse.json({ level }, { status: 201 })
  } catch (error) {
    return failure(error, "Failed to save compass result")
  }
}
