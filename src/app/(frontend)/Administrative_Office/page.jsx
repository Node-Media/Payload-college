"use client"

import { useState, useEffect } from "react"
import { Mail, BookOpen, Award, Clock } from "lucide-react"
import Navbar from "../../components/Navbar"

export default function AdminDirectory() {
  const [activeTab, setActiveTab] = useState("all")
  const [adminMembers, setAdminMembers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchAdminMembers() {
      try {
        const response = await fetch("/api/admin-members")
        const data = await response.json()
        console.log("Fetched admin members:", data) // Debugging output

        // Ensure the data is an array of admin members
        setAdminMembers(data.docs || [])
      } catch (err) {
        console.error("Error fetching admin members:", err)
        setError("Failed to load data")
      } finally {
        setLoading(false)
      }
    }

    fetchAdminMembers()
  }, [])

  if (loading) return <p className="text-center">Loading...</p>
  if (error) return <p className="text-center text-red-500">{error}</p>

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Engineering Department Admin</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Meet our distinguished admin members who are dedicated to excellence in teaching and research
          </p>
        </div>

        <div className="mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminMembers.length > 0 ? (
            adminMembers.map((admin) => <AdminCard key={admin.id} admin={admin} />)
          ) : (
            <p className="text-center text-gray-500">No admin members found</p>
          )}
        </div>
      </div>
    </>
  )
}

function AdminCard({ admin }) {
  console.log("Rendering AdminCard for:", admin) // Debugging output
  const initials = admin.name
    .split(" ")
    .map((n) => n[0])
    .join("")

  return (
    <div className="rounded-lg overflow-hidden transition-all hover:shadow-lg border border-red-100 bg-white">
      <div className="p-0">
        <div className="relative h-48 bg-gradient-to-r from-red-100 to-red-50 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full border-4 border-white overflow-hidden relative">
            {admin.image?.url ? (
              <img
                src={admin.image.url}
                alt={admin.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                  e.currentTarget.nextElementSibling.style.display = "flex"
                }}
              />
            ) : (
              <div className="absolute inset-0 bg-red-200 text-red-700 text-xl font-semibold flex items-center justify-center">
                {initials}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 text-center">
          <h3 className="text-xl font-semibold mb-1 text-gray-800">{admin.name}</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700 border border-red-200">
            {admin.designation}
          </span>
        </div>

        <div className="space-y-3 mt-6">
          <div className="flex items-start gap-2">
            <Award className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{admin.qualification}</span>
          </div>

          <div className="flex items-start gap-2">
            <Clock className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">Teaching: {admin.experience} years</span>
          </div>

          <div className="flex items-start gap-2">
            <Mail className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <a
              href={`mailto:${admin.email}`}
              className="text-sm text-red-600 hover:text-red-800 hover:underline break-all"
            >
              {admin.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
