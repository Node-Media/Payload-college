import React from "react"
import { ChevronRight } from "lucide-react";


// Sample data for scholarships
const scholarships = [
  {
    id: 1,
    type: "EBC(Economical Backward Class)",
    category: "OPEN (CAP Round Candidate Only)",
    website: "https://mahadbt.maharashtra.gov.in/Login/Login",
  },
  {
    id: 2,
    type: "Freeship/Scholarship",
    category: "OBC/SC/ST/VJNT/SBC (CAP Round Candidate Only)",
    website: "https://mahadbt.maharashtra.gov.in/Login/Login",
  },
  {
    id: 3,
    type: "STC/PTC Scholarship Student",
    category: "STC/PTC Teacher student",
    website: "https://mahadbt.maharashtra.gov.in/Login/Login",
  },
  {
    id: 4,
    type: "State Gov. Minority Scholarship",
    category: "Muslim/Christian/Sikh/Parsi/Buddhist & Jain (CAP & Management Students)",
    website: "https://mahadbt.maharashtra.gov.in/Login/Login",
  },
  {
    id: 5,
    type: "Central Gov. Minority Scholarship",
    category: "Muslim/Christian/Sikh/Parsi/Buddhist & Jain (CAP & Management Students)",
    website: "https://mahadbt.maharashtra.gov.in/Login/Login",
  },
  {
    id: 6,
    type: "Merit Scholarships for outstanding students are given at Institute level.",
    category: "",
    website: "",
  },
  {
    id: 7,
    type: "Gate qualified candidates admitted in PG get scholarships of AICTE.",
    category: "",
    website: "",
  },
]

// Coordinator information
const coordinator = {
  name: "Mr. Sidharth B Khandagale",
  designation: "Asst. OS",
  qualification: "M.A. M.Ed. B.P.ED. B. Journalism.",
  contactNumber: "9850500845",
  emailId: "siddharthkhandagale.tcoer@kjei.edu.in",
  photo:
    "/president.jpg", // Using the provided image
}

// import React from 'react'

const ScholarshipsPage = () => {
  return (
    <div>
      <>
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Breadcrumb Navigation */}
          <nav className="flex mb-8 text-sm">
                  <a
                    href="/home"
                    className="text-red-600 hover:text-red-800 transition-colors"
                  >
                    TCOER
                  </a>
                  <ChevronRight className="mx-2 h-4 w-4 text-gray-400 self-center" />
                  <span className="text-gray-600">SCHOLARSHIPS & AWARDS</span>
                </nav>

          {/* Main Heading */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            SCHOLARSHIPS & AWARDS
          </h1>
          <hr className="border-gray-300 mb-6" />

          {/* Scholarships Table */}
          <div className="overflow-x-auto mb-12">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Sr. No.
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Type
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Category
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Website
                  </th>
                </tr>
              </thead>
              <tbody>
                {scholarships.map((scholarship) => (
                  <tr key={scholarship.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {scholarship.id}.
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {scholarship.type}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {scholarship.category}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {scholarship.website && (
                        <a
                          href={scholarship.website}
                          className="text-red-600 hover:underline"
                          target="_blank"
                        >
                          Click here
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Scholarship Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              SCHOLARSHIP SECTION
            </h2>

            <div className="border border-gray-300">
              <div className="flex flex-col md:flex-row">
                {/* Coordinator Photo */}
                <div className="p-4 border-b md:border-b-0 md:border-r border-gray-300 flex justify-center md:w-1/4">
                  <img
                    src={coordinator.photo || "/placeholder.svg"}
                    alt={coordinator.name}
                    className="w-40 h-auto object-cover"
                  />
                </div>

                {/* Coordinator Details */}
                <div className="md:w-3/4">
                  <table className="min-w-full border-collapse">
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-blue-50 w-1/3 font-medium text-blue-600">
                          Name
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {coordinator.name}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-medium text-blue-600">
                          Designation
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {coordinator.designation}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-medium text-blue-600">
                          Qualification
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {coordinator.qualification}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-medium text-blue-600">
                          Contact Number
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {coordinator.contactNumber}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 bg-blue-50 font-medium text-blue-600">
                          Email Id
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {coordinator.emailId}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ScholarshipsPage