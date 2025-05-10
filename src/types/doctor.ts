export interface Doctor {
  id: string
  name: string
  specialization: string
  qualification: string
  experience: number
  location: string
  clinic: string
  rating?: number
  patientCount?: number
  fee: number
  cashback?: number
  availableIn: number
  image?: string
  profile_img:string
  consultMode: string[]
  languages: string[]
}

