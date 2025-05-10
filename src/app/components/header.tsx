import Link from "next/link"
import { Search, MapPin, ChevronDown, User } from "lucide-react"

export default function Header() {
  return (
    <header className="border-b border-gray-200 top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-32">
              <div className="absolute text-blue-600 font-bold text-xl top-0 left-0">Apollo</div>
              <div className="absolute bg-orange-500 text-white font-bold px-2 py-1 text-lg rounded-md top-5 left-8">
                24|7
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <MapPin className="h-5 w-5 text-gray-600" />
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Select Location</span>
              <div className="flex items-center">
                <span className="font-medium text-gray-600">Select Address</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-4 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Doctors, Specialties, Conditions etc."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        <button className="border border-teal-600 text-teal-600 px-4 py-1.5 rounded-md flex items-center gap-2 hover:bg-teal-50 transition-colors">
          Login
          <div className="h-6 w-6 rounded-full border border-teal-600 flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
        </button>
      </div>

      <nav className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4">
          <ul className="flex overflow-x-auto whitespace-nowrap py-4 gap-8">
            <li className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              <Link href="#">Buy Medicines</Link>
            </li>
            <li className="font-medium text-blue-600 border-b-2 border-blue-600 pb-4 -mb-4 hover:text-blue-700 transition-colors">
              <Link href="#">Find Doctors</Link>
            </li>
            <li className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              <Link href="#">Lab Tests</Link>
            </li>
            <li className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              <Link href="#">Circle Membership</Link>
            </li>
            <li className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              <Link href="#">Health Records</Link>
            </li>
            <li className="font-medium text-gray-800 hover:text-blue-600 transition-colors">
              <Link href="#">Diabetes Reversal</Link>
            </li>
            <li className="font-medium text-gray-800 hover:text-blue-600 transition-colors flex items-center">
              <Link href="#">Buy Insurance</Link>
              <span className="ml-1 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded">New</span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
