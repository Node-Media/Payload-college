"use client"

import { useState } from "react"
import { Mail, BookOpen, Award, Clock } from "lucide-react"
import Navbar from "../../../../components/Navbar"

export default function FacultyDirectory() {
  const [activeTab, setActiveTab] = useState("all")

  const facultyMembers = [
    {
      id: 1,
      name: "Prof. Mahendra Vitthal Handore",
      designation: "Associate Professor & HOD",
      qualification: "MSc (Maths)",
      experience: "25 Years",
      areaOfInterest: "Mathematicss",
      email: "mahendrahandore.tcoer@kjei.edu.in",
      department: "Mathematics",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 2,
      name: "Dr. Sunil krishnaji Kate",
      designation: "Assistant Professor",
      qualification: "MSc (Maths), PhD",
      experience: "28 Years",
      areaOfInterest: "Mathematics",
      email: "sunilkate.tcoer@kjei.edu.in",
      department: "Mathematics",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 3,
      name: "Dr. Ganesh Kutal",
      designation: "Associate Professor (Physics)",
      qualification: "Msc(Phy),NET,SET,PhD",
      experience: "14 Years",
      areaOfInterest: "Atmospheric physics",
      email: "ganeshkutal.tcoer@kjei.edu.in",
      department: "Physics",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 4,
      name: "Prof. Mahendra Vitthal Handore",
      designation: "Associate Professor & HOD",
      qualification: "MSc (Maths)",
      experience: "25 Years",
      areaOfInterest: "Mathematicss",
      email: "mahendrahandore.tcoer@kjei.edu.in",
      department: "Mathematics",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 5,
      name: "Prof. Mahendra Vitthal Handore",
      designation: "Associate Professor & HOD",
      qualification: "MSc (Maths)",
      experience: "25 Years",
      areaOfInterest: "Mathematicss",
      email: "mahendrahandore.tcoer@kjei.edu.in",
      department: "Mathematics",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      id: 6,
      name: "Prof. Mahendra Vitthal Handore",
      designation: "Associate Professor & HOD",
      qualification: "MSc (Maths)",
      experience: "25 Years",
      areaOfInterest: "Mathematicss",
      email: "mahendrahandore.tcoer@kjei.edu.in",
      department: "Mathematics",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  const departments = [...new Set(facultyMembers.map((member) => member.department))]

  return (
    <>
    <Navbar/>
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Engineering Department Faculty</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Meet our distinguished faculty members who are dedicated to excellence in teaching and research
        </p>
      </div>

      {/* Custom Tabs Implementation */}
      <div className="w-full">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md bg-red-50 border border-red-100 p-1">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "all" ? "bg-red-500 text-white" : "text-gray-700 hover:bg-red-100"
              }`}
            >
              All Faculty
            </button>

            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === dept ? "bg-red-500 text-white" : "text-gray-700 hover:bg-red-100"
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-0">
          {activeTab === "all" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyMembers.map((faculty) => (
                <FacultyCard key={faculty.id} faculty={faculty} />
              ))}
            </div>
          )}

          {departments.map(
            (dept) =>
              activeTab === dept && (
                <div key={dept} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {facultyMembers
                    .filter((faculty) => faculty.department === dept)
                    .map((faculty) => (
                      <FacultyCard key={faculty.id} faculty={faculty} />
                    ))}
                </div>
              ),
          )}
        </div>
      </div>
    </div>
    </>
  )
}

function FacultyCard({ faculty }) {
  // Generate initials for avatar fallback
  const initials = faculty.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className="rounded-lg overflow-hidden transition-all hover:shadow-lg border border-red-100 bg-white">
      {/* Card Header */}
      <div className="p-0">
        <div className="relative h-48 bg-gradient-to-r from-red-100 to-red-50 flex items-center justify-center">
          {/* Custom Avatar */}
          <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden relative">
            <img
              src={faculty.image || "/placeholder.svg"}
              alt={faculty.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none"
                e.currentTarget.nextElementSibling.style.display = "flex"
              }}
            />
            <div
              className="absolute inset-0 bg-red-200 text-red-700 text-xl font-semibold flex items-center justify-center"
              style={{ display: "none" }}
            >
              {initials}
            </div>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="mb-4 text-center">
          <h3 className="text-xl font-semibold mb-1 text-gray-800">{faculty.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
            {faculty.designation}
          </span>
        </div>

        <div className="space-y-3 mt-6">
          <div className="flex items-start gap-2">
            <Award className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{faculty.qualification}</span>
          </div>

          <div className="flex items-start gap-2">
            <Clock className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">Teaching: {faculty.experience}</span>
          </div>

          <div className="flex items-start gap-2">
            <BookOpen className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{faculty.areaOfInterest}</span>
          </div>

          <div className="flex items-start gap-2">
            <Mail className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <a
              href={`mailto:${faculty.email}`}
              className="text-sm text-red-600 hover:text-red-800 hover:underline break-all"
            >
              {faculty.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

