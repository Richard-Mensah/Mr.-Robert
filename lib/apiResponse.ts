import { NextResponse } from "next/server"
import type { ZodError } from "zod"
import { DatabaseNotConfiguredError } from "@/lib/db"

/** Shared JSON responses so every API route answers in the same shape. */
export function invalid(error: ZodError) {
  return NextResponse.json(
    { error: "Please check the highlighted fields.", fieldErrors: error.flatten().fieldErrors },
    { status: 400 },
  )
}

export function ok(message: string, status = 200) {
  return NextResponse.json({ message }, { status })
}

export function failure(error: unknown, context: string) {
  if (error instanceof DatabaseNotConfiguredError) {
    return NextResponse.json(
      { error: "This feature is not available yet. Please try again later." },
      { status: 503 },
    )
  }
  console.error(context, error)
  return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 })
}

export async function readJson(request: Request): Promise<unknown> {
  return request.json().catch(() => null)
}
