import { Pool } from "pg"

const pool = new Pool({
  user:"postgres",
  host: process.env.DB_HOST,
  database: "online_doctors",
  password:"root",
  port: Number(process.env.DB_PORT),
});


export type Doctor = {
  id: number;
  name: string;
  specialization: string;
  location: string;
  consult_mode: string[];
  experience: number;
  fees: number;
  language: string[];
};

interface Filters {
  specialization?: string;
  location?: string;
  consultMode?: string[];
  experience?: string[];
  fees?: string[];
  language?: string[];
  page?: number;
  limit?: number;
}

export async function getDoctorsFromDB(filters: Filters): Promise<{ doctors: Doctor[]; totalPages: number }> {
  console.log(filters)
  const { fees, consultMode, language, experience, page = 1, limit = 10 } = filters;

  let query = `SELECT * FROM doctors WHERE 1=1`;
  const values: any[] = [];

  if (consultMode && consultMode.length > 0) {
    values.push(consultMode);
    query += ` AND consult_mode && $${values.length}::text[]`;
  }

  if (fees && fees.length > 0) {
    values.push(fees);
    query += ` AND fee && $${values.length}::text[]`;
  }

  if (language && language.length > 0) {
    values.push(language);
    query += ` AND languages && $${values.length}::text[]`;
  }

  if (experience && experience.length > 0) {
    values.push(experience);
    query += ` AND experience && $${values.length}::text[]`;
  }

  const countQuery = `SELECT COUNT(*) FROM (${query}) AS subquery`;
  const countResult = await pool.query(countQuery, values);
  const total = parseInt(countResult.rows[0].count, 10);
  const totalPages = Math.ceil(total / limit);

  const offset = (page - 1) * limit;
  values.push(limit, offset);
  query += ` LIMIT $${values.length - 1} OFFSET $${values.length}`;

  const result = await pool.query(query, values);

  return {
    doctors: result.rows as Doctor[],
    totalPages,
  };
}


export async function addDoctorToDB(doctorData: {
  name: string;
  specialization: string;
  location: string;
  qualification:string;
  clinic:string;
  patientCount:number;
  rating:number;
  cashback:number;
  availableIn:number;
  profile_img:string;
  consultMode: string[];
  experience: number;
  fee: number;
  languages: string[];
}) {
  try {
    const consultModeArray = doctorData.consultMode;
    const languagesArray = doctorData.languages;
console.log(doctorData)
    const result = await pool.query(
      `INSERT INTO doctors 
        (name, specialization, location, qualification,clinic,patient_count,rating,cashback,available_in,profile_img,consult_mode, experience, fee, languages)
       VALUES ($1, $2, $3, $4, $5, $6, $7,$8,$9,$10,$11,$12,$13,$14)
       RETURNING *`,
      [
        doctorData.name,
        doctorData.specialization,
        doctorData.location,
        doctorData.qualification,
        doctorData.clinic,
        doctorData.patientCount,
        doctorData.rating,
        doctorData.cashback,
        doctorData.availableIn,
        doctorData.profile_img,
        consultModeArray,
        doctorData.experience,
        doctorData.fee,
        languagesArray,
      ]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error inserting doctor data:", error);
    throw new Error("Failed to add doctor to the database.");
  }
}

