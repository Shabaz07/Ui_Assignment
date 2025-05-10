import { NextResponse } from "next/server"
import { getDoctorsFromDB } from "@/lib/db"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const consultMode = searchParams.get("consultMode")?.split(",") || []
    const experience = searchParams.get("experience")?.split(",") || []
    const fees = searchParams.get("fees")?.split(",") || []
    const language = searchParams.get("language")?.split(",") || []

    const { doctors, totalPages } = await getDoctorsFromDB({
      page,
      limit,
      consultMode,
      experience,
      fees,
      language,
    })

    return NextResponse.json({ doctors, totalPages })
  } catch (error) {
    console.error("Error fetching doctors:", error)
    return NextResponse.json({ message: "Error fetching doctors" }, { status: 500 })
  }
}
