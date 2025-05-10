import { NextResponse } from "next/server"
import { addDoctorToDB } from "@/lib/db" 

export async function POST(request: Request) {
  try {
    const doctorData = await request.json() 
    const newDoctor = await addDoctorToDB(doctorData)

    return NextResponse.json({ message: "Doctor added successfully", doctor: newDoctor })
  } catch (error) {
    console.error("Error adding doctor:", error)
    return NextResponse.json({ message: "Error adding doctor" }, { status: 500 })
  }
}
