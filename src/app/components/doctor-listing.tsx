"use client";

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Plus } from "lucide-react"
import Header from "./header"
import FilterSidebar from "./filter-sidebar"
import DoctorCard from "./doctor-card"
import AddDoctorModal from "./AddDoctorModal"
import type { Doctor } from "@/types/doctor"

export default function DoctorListing() {
  const [doctors, setDoctors] = useState<Doctor[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [filters, setFilters] = useState({
    consultMode: [] as string[],
    experience: [] as string[],
    fees: [] as string[],
    language: [] as string[],
  })
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    fetchDoctors()
  }, [page, filters])

  const fetchDoctors = async () => {
    setLoading(true)
    try {
      const queryParams = new URLSearchParams()
      queryParams.append("page", page.toString())
      queryParams.append("limit", "10")

      if (filters.consultMode.length > 0) {
        queryParams.append("consultMode", filters.consultMode.join(","))
      }
      if (filters.experience.length > 0) {
        queryParams.append("experience", filters.experience.join(","))
      }
      if (filters.fees.length > 0) {
        queryParams.append("fees", filters.fees.join(","))
      }
      if (filters.language.length > 0) {
        queryParams.append("language", filters.language.join(","))
      }

      const response = await fetch(`/api/doctors?${queryParams.toString()}`)
      const data = await response.json()

      setDoctors(data.doctors || [])
      console.log(data.doctors)
      setTotalPages(data.totalPages)
    } catch (error) {
      console.error("Error fetching doctors:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (filterType: string, value: string, checked: boolean) => {
    setFilters((prev) => {
      const newFilters = { ...prev }
      if (checked) {
        newFilters[filterType as keyof typeof filters] = [...newFilters[filterType as keyof typeof filters], value]
      } else {
        newFilters[filterType as keyof typeof filters] = newFilters[filterType as keyof typeof filters].filter(
          (item) => item !== value,
        )
      }
      return newFilters
    })
    setPage(1)
  }

  const clearAllFilters = () => {
    setFilters({
      consultMode: [],
      experience: [],
      fees: [],
      language: [],
    })
    setPage(1)
  }

  const handleAddDoctor = async (doctor: Omit<Doctor, "id">) => {
    try {
      const response = await fetch("../api/doctors/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctor),
      })

      if (response.ok) {
        const addedDoctor = await response.json()
        setDoctors((prevDoctors) => [addedDoctor, ...prevDoctors])
        setShowModal(false)
      } else {
        alert("Failed to add doctor.")
      }
    } catch (error) {
      console.error("Error adding doctor:", error)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <FilterSidebar filters={filters} onFilterChange={handleFilterChange} onClearAll={clearAllFilters} />

          <div className="lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                <span className="text-gray-500">›</span>
                <Link href="/doctors" className="text-blue-600 hover:underline">Doctors</Link>
                <span className="text-gray-500">›</span>
                <span className="text-gray-600">General Physicians</span>
              </div>
              <button
                className="p-3 bg-blue-600 text-white rounded-full shadow-lg"
                onClick={() => setShowModal(true)}
              >
                <Plus size={24} />
              </button>
            </div>

            {showModal && <AddDoctorModal onClose={() => setShowModal(false)} onAddDoctor={handleAddDoctor} />}

            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-1 text-gray-600">
                Consult General Physicians Online - Internal Medicine Specialists
              </h1>
              <p className="text-gray-600">{loading ? "Loading..." : `(${doctors.length} doctors)`}</p>
            </div>

            <div className="flex justify-end mb-6">
              <div className="relative w-48 text-gray-600">
                <select className="w-full appearance-none border border-gray-300 rounded-md py-2 pl-4 pr-10 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Experience</option>
                </select>
                <ChevronDown className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {doctors.map((doctor) => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            )}

            {!loading && totalPages > 1 && (
              <div className="flex justify-center gap-4 mt-8">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPage(index + 1)}
                    className={`px-4 py-2 rounded-md ${page === index + 1 ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
