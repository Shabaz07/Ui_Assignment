"use client"

import { useState } from "react"

interface FilterSidebarProps {
  filters: {
    consultMode: string[]
    experience: string[]
    fees: string[]
    language: string[]
  }
  onFilterChange: (filterType: string, value: string, checked: boolean) => void
  onClearAll: () => void
}

export default function FilterSidebar({ filters, onFilterChange, onClearAll }: FilterSidebarProps) {
  const [showMoreExperience, setShowMoreExperience] = useState(false)

  return (
    <div className="lg:w-1/4 border-r border-gray-200 pr-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium text-gray-600">Filters</h2>
        <button className="text-blue-600 text-sm font-medium" onClick={onClearAll}>
          Clear All
        </button>
      </div>

      <button className="w-full border border-blue-600 text-blue-600 rounded-md py-2 mb-6 hover:bg-blue-50 transition-colors">
        Show Doctors Near Me
      </button>

      {/* Mode of Consult */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-600">Mode of Consult</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.consultMode.includes("hospital")}
              onChange={(e) => onFilterChange("consultMode", "hospital", e.target.checked)}
            />
            <span className="text-gray-600">Hospital Visit</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.consultMode.includes("online")}
              onChange={(e) => onFilterChange("consultMode", "online", e.target.checked)}
            />
            <span className="text-gray-600">Online Consult</span>
          </label>
        </div>
      </div>

      {/* Experience */}
      {/* <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-600">Experience (In Years)</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.experience.includes("0-5")}
              onChange={(e) => onFilterChange("experience", "0-5", e.target.checked)}
            />
            <span className="text-gray-600">0-5</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.experience.includes("6-10")}
              onChange={(e) => onFilterChange("experience", "6-10", e.target.checked)}
            />
            <span className="text-gray-600">6-10</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.experience.includes("11-16")}
              onChange={(e) => onFilterChange("experience", "11-16", e.target.checked)}
            />
            <span className="text-gray-600">11-16</span>
          </label>

          {showMoreExperience && (
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded"
                checked={filters.experience.includes("17+")}
                onChange={(e) => onFilterChange("experience", "17+", e.target.checked)}
              />
              <span className="text-gray-600">17+</span>
            </label>
          )}
        </div>
        <button className="text-blue-600 font-medium mt-2" onClick={() => setShowMoreExperience(!showMoreExperience)}>
          {showMoreExperience ? "Show Less" : "+1 More"}
        </button>
      </div> */}

      {/* Fees */}
      {/* <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-600">Fees (In Rupees)</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.fees.includes("100-500")}
              onChange={(e) => onFilterChange("fees", "100-500", e.target.checked)}
            />
            <span className="text-gray-600">100-500</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.fees.includes("500-1000")}
              onChange={(e) => onFilterChange("fees", "500-1000", e.target.checked)}
            />
            <span className="text-gray-600">500-1000</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.fees.includes("1000+")}
              onChange={(e) => onFilterChange("fees", "1000+", e.target.checked)}
            />
            <span className="text-gray-600">1000+</span>
          </label>
        </div>
      </div> */}

      {/* Language */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3 text-gray-600">Language</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.language.includes("english")}
              onChange={(e) => onFilterChange("language", "english", e.target.checked)}
            />
            <span className="text-gray-600">English</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.language.includes("hindi")}
              onChange={(e) => onFilterChange("language", "hindi", e.target.checked)}
            />
            <span className="text-gray-600">Hindi</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-blue-600 rounded"
              checked={filters.language.includes("telugu")}
              onChange={(e) => onFilterChange("language", "telugu", e.target.checked)}
            />
            <span className="text-gray-600">Telugu</span>
          </label>
        </div>
      </div>
    </div>
  )
}
