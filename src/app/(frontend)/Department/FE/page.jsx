import Navbar from "../../../components/Navbar"
import {
  ChevronRight,
  BookOpen,
  Users,
  FlaskRoundIcon as Flask,
  Calculator, 
  Award,
  Calendar,
  FileText,
  GraduationCap,
} from "lucide-react"

export default function EngineeringDepartment() {
  // Define primary color directly in the component
  const primaryColor = "#9d1c3d" // Deep maroon color

  return (
    <div className="min-h-screen bg-white">
     <Navbar/>

      {/* Hero Section */}
      <section
        // style={{ background: `linear-gradient(to right, rgba(157, 28, 61, 0.1), rgba(157, 28, 61, 0.05))` }}
        className="py-16 md:py-24 bg-emerald-50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Department of Engineering Science</h1>
            <div className="flex items-center text-sm text-gray-500">
              <a href="/" className="hover:text-[#9d1c3d]">
                Home
              </a>
              <ChevronRight className="h-4 w-4 mx-1" />
              <a href="/tcoer" className="hover:text-[#9d1c3d]">
                TCOER
              </a>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span>Engineering Science Department</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
                  <BookOpen className="h-6 w-6" style={{ color: primaryColor }} />
                </div>
                <h2 className="text-2xl font-bold">Vision</h2>
              </div>
              <p className="text-gray-600">
                To Establish the department as a Centre of Excellence in the area of Applied Science and Humanities.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
                  <Award className="h-6 w-6" style={{ color: primaryColor }} />
                </div>
                <h2 className="text-2xl font-bold">Mission</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" style={{ color: primaryColor }} />
                  <span>To enhance and expand facilities in the area of Applied Science and Humanities.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" style={{ color: primaryColor }} />
                  <span>To train and motivate human resources to undertake challenges.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 shrink-0 mt-0.5" style={{ color: primaryColor }} />
                  <span>To Promote and Participate interdisciplinary research along with Engineering departments.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Sciences */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Engineering Sciences</h2>

          {/* Mathematics */}
          <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
                <Calculator className="h-6 w-6" style={{ color: primaryColor }} />
              </div>
              <h3 className="text-2xl font-bold">Mathematics</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                The department of MATHEMATICS was established in 2008-09 in KJ'S Educational institute's TRINITY COLLEGE
                of ENGINEERING & RESEARCH, PUNE and serving to fulfill all the needs of various branches of engineering
                undergraduate courses and continuously working to provide the effective teaching, learning environment
                to the students to develop their critical thinking and creativity with knowledge and required skills.
              </p>
              <p>
                The faculty members are very young, energetic and motivated. Staff members have publication of papers
                and text books to their credit. They are also indulging in various Co and extracurricular activities
                like counseling, mentoring, admission work etc.
              </p>
            </div>
          </div>

          {/* Chemistry */}
          <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
                <Flask className="h-6 w-6" style={{ color: primaryColor }} />
              </div>
              <h3 className="text-2xl font-bold">Chemistry</h3>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                The study of Chemistry is profitable not only in as much as it promotes the material interest of
                mankind, but also because it furnishes us with insight into those wonders of creation, which immediately
                surround us and with which our existence, life and development, are most closely connected.
              </p>
              <p>
                Chemistry encompasses every walk of life. You find chemistry in daily life in the foods you eat, the air
                you breathe, your soap, your emotions and literally every object you can see or touch. Chemistry is the
                study of matter and all the changes that it undergoes. It is the science that focuses on composition,
                structure, properties, and reactions of matter, all of which will be used to identify and characterize.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a
              href="#faculty"
              className="flex items-center p-6 bg-white rounded-lg border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:border-[#9d1c3d] hover:shadow-lg transition-all"
            >
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
                <Users className="h-6 w-6" style={{ color: primaryColor }} />
              </div>
              <div>
                <h3 className="font-bold">Faculty</h3>
                <p className="text-sm text-gray-500">Meet our experienced team</p>
              </div>
            </a>
            <a
              href="#laboratories"
              className="flex items-center p-6 bg-white rounded-lg border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:border-[#9d1c3d] hover:shadow-lg transition-all"
            >
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
                <Flask className="h-6 w-6" style={{ color: primaryColor }} />
              </div>
              <div>
                <h3 className="font-bold">Laboratories</h3>
                <p className="text-sm text-gray-500">Explore our facilities</p>
              </div>
            </a>
            <a
              href="#research"
              className="flex items-center p-6 bg-white rounded-lg border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:border-[#9d1c3d] hover:shadow-lg transition-all"
            >
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
                <BookOpen className="h-6 w-6" style={{ color: primaryColor }} />
              </div>
              <div>
                <h3 className="font-bold">Research</h3>
                <p className="text-sm text-gray-500">Discover our innovations</p>
              </div>
            </a>
            <a
              href="#achievements"
              className="flex items-center p-6 bg-white rounded-lg border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:border-[#9d1c3d] hover:shadow-lg transition-all"
            >
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
                <Award className="h-6 w-6" style={{ color: primaryColor }} />
              </div>
              <div>
                <h3 className="font-bold">Achievements</h3>
                <p className="text-sm text-gray-500">Our success stories</p>
              </div>
            </a>
            <a
              href="#activities"
              className="flex items-center p-6 bg-white rounded-lg border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:border-[#9d1c3d] hover:shadow-lg transition-all"
            >
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
                <Calendar className="h-6 w-6" style={{ color: primaryColor }} />
              </div>
              <div>
                <h3 className="font-bold">Activities</h3>
                <p className="text-sm text-gray-500">Events and programs</p>
              </div>
            </a>
            <a
              href="#curriculum"
              className="flex items-center p-6 bg-white rounded-lg border border-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:border-[#9d1c3d] hover:shadow-lg transition-all"
            >
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
                <FileText className="h-6 w-6" style={{ color: primaryColor }} />
              </div>
              <div>
                <h3 className="font-bold">Curriculum</h3>
                <p className="text-sm text-gray-500">Course structure and syllabus</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="h-6 w-6" style={{ color: primaryColor }} />
                <span className="text-xl font-bold">Trinity College of Engineering</span>
              </div>
              <p className="text-slate-400">Department of Engineering Science (F.E.)</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <address className="text-slate-400 not-italic">
                Trinity College of Engineering & Research
                <br />
                Pune, Maharashtra
                <br />
                Email: info@kjei.edu.in
                <br />
                Phone: +91 1234567890
              </address>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-[#9d1c3d] transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#9d1c3d] transition-colors">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#9d1c3d] transition-colors">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#9d1c3d] transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#9d1c3d] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Trinity College of Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

