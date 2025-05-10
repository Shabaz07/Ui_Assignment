import Image from "next/image"
import { ThumbsUp, Info } from "lucide-react"
import type { Doctor } from "@/types/doctor"

interface DoctorCardProps {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row">
      <div className="md:w-1/4 flex flex-col items-center mb-4 md:mb-0">
        <div className="relative h-24 w-24 rounded-full overflow-hidden mb-2">
          <Image
            src={doctor.profile_img || "/placeholder.svg?height=96&width=96"}
            alt={doctor.name}
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
      </div>

      <div className="md:w-2/4">
        <div className="flex items-center gap-1 mb-1">
          <h2 className="text-lg font-bold text-gray-600">{doctor.name}</h2>
          <Info className="h-4 w-4 text-gray-400" />
        </div>
        <p className="text-gray-600 mb-1">{doctor.specialization}</p>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-purple-700 font-medium">{doctor.experience} YEARS</span>
          <span className="text-gray-400">•</span>
          <span className="text-purple-700 font-medium">{doctor.qualification}</span>
        </div>
        <p className="text-gray-600 mb-1">{doctor.location}</p>
        <p className="text-gray-600 mb-1">{doctor.clinic}</p>
        {doctor.rating && (
          <div className="flex items-center gap-1 text-green-600 mb-1">
            <ThumbsUp className="h-4 w-4 fill-green-600 stroke-green-600" />
            <span className="font-medium">{doctor.rating}%</span>
            <span className="text-gray-600 text-sm">({doctor.patientCount}+ Patients)</span>
          </div>
        )}
      </div>

      <div className="md:w-1/4 flex flex-col items-end justify-between">
        <div className="flex flex-col items-end">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold text-gray-600">₹{doctor.fee}</span>
            {doctor.cashback && (
              <div className="flex items-center gap-1 bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs">
                <Image
                  src="/placeholder.svg?height=16&width=16"
                  alt="Cashback"
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                <span>₹{doctor.cashback} Cashback</span>
              </div>
            )}
          </div>
        </div>

        <button className="w-full bg-white border border-blue-600 text-blue-600 rounded-md py-3 mt-4 hover:bg-blue-50 transition-colors">
          <div className="text-center">
            <div className="font-medium">Consult Online</div>
            <div className="text-xs">Available in {doctor.availableIn} minutes</div>
          </div>
        </button>
      </div>
    </div>
  )
}
