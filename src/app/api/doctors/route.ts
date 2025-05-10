import { NextResponse } from "next/server";
import { getDoctorsFromDB, addDoctorToDB } from "@/lib/db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const consultMode = searchParams.get("consultMode")?.split(",") || [];
    const experience = searchParams.get("experience")?.split(",") || [];
    const fees = searchParams.get("fees")?.split(",") || [];
    const language = searchParams.get("language")?.split(",") || [];

    const { doctors, totalPages } = await getDoctorsFromDB({
      page,
      limit,
      consultMode,
      experience,
      fees,
      language,
    });

    if (!doctors || doctors.length === 0) {
      return NextResponse.json({ message: "No doctors found" }, { status: 404 });
    }

    return NextResponse.json({ doctors, totalPages });
  } catch (error) {
    console.error("Error fetching doctors:", error);

    return NextResponse.json({ message: "Error fetching doctors" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const doctorData = await request.json(); 
    const newDoctor = await addDoctorToDB(doctorData); 

    return NextResponse.json({ message: "Doctor added successfully", doctor: newDoctor });
  } catch (error) {
    console.error("Error adding doctor:", error);
    return NextResponse.json({ message: "Error adding doctor" }, { status: 500 });
  }
}
