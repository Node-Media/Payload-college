"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Building2,
  Code,
  Cpu,
  Cog,
  Lightbulb,
  Microscope,
  GraduationCap,
  ChevronRight,
  Radio, 
  BarChart3,
} from "lucide-react"
// import { link } from "fs"

export default function Department() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const programs = [
    {
      title: "Engineering Science",
      description: "Foundation in engineering principles with focus on innovation and problem-solving",
      icon: Microscope,
      color: "bg-emerald-50 text-emerald-900",
      iconColor: "text-emerald-600",
      link: "/Department/FE",
    },
    {
      title: "Computer Engineering",
      description: "Hardware and software integration with emphasis on system design",
      icon: Cpu,
      color: "bg-blue-50 text-blue-900",
      iconColor: "text-blue-600",
      link: "/Department/Computer",

    },
    {
      title: "Information Technology",
      description: "Modern IT infrastructure, cloud computing, and data management",
      icon: Code,
      color: "bg-indigo-50 text-indigo-900",
      iconColor: "text-indigo-600",
      link: "/Department/IT",

    },
    {
      title: "Civil Engineering",
      description: "Sustainable infrastructure design and environmental considerations",
      icon: Building2,
      color: "bg-amber-50 text-amber-900",
      iconColor: "text-amber-600",
      link: "/Department/Civil",

    },
    {
      title: "Mechanical Engineering",
      description: "Advanced manufacturing techniques and mechanical system design",
      icon: Cog,
      color: "bg-red-50 text-red-900",
      iconColor: "text-red-600",
      link: "/Department/Mechanical",

    },
    {
      title: "Electrical Engineering",
      description: "Power systems, electronics, and renewable energy solutions",
      icon: Lightbulb,
      color: "bg-purple-50 text-purple-900",
      iconColor: "text-purple-600",
      link: "/Department/Electrical",

    },
    {
      title: "E&TC Engineering",
      description: "Electronics and telecommunication systems and signal processing",
      icon: Radio,
      color: "bg-teal-50 text-teal-900",
      iconColor: "text-teal-600",
      link: "/Department/Entc",

    },
    {
      title: "MBA Department",
      description: "Business administration and management with industry-focused specializations",
      icon: BarChart3,
      color: "bg-orange-50 text-orange-900",
      iconColor: "text-orange-600",
      link: "/Department/MBA",

    },
  ]

  return (
    <div className="w-full bg-white">
      {/* Programs Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Programs</h2>
          <div className="w-20 h-1 bg-[#8B2131] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our cutting-edge programs designed to prepare you for the challenges of tomorrow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${program.color} border border-gray-100`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-8">
                <div className={`${program.iconColor} mb-6`}>
                  <program.icon size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                <p className="text-sm opacity-80 mb-6">{program.description}</p>
                <div className="flex items-center justify-center">
                <a href={`${program.link}`}>
                  <button className="bg-[#8B2131] hover:bg-[#a02639] text-white px-4 py-2 rounded-md font-medium transition-all duration-200 flex items-center">
                    <span>Know More</span>
                    <motion.div animate={{ x: hoveredCard === index ? 5 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </motion.div>
                  </button>
                  </a>
                </div>
              </div>
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-[#8B2131]"
                initial={{ width: 0 }}
                animate={{ width: hoveredCard === index ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
{/* 
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#8B2131] hover:bg-[#a02639] text-white px-8 py-3 rounded-full font-medium inline-flex items-center shadow-sm"
          >
            <GraduationCap className="mr-2 h-5 w-5" />
            View All Programs
          </motion.button>
        </div> */}
      </div>
    </div>
  )
}

