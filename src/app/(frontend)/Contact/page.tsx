import React from 'react'
import {
  MapPin,
  Phone,
  Printer,
  Mail,
  User,
  GraduationCap,
  BookOpen,
  ChevronRight,
} from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Breadcrumb Navigation */}
      <div className="flex justify-between items-center mb-8">
        <nav className="flex mb-8 text-sm">
          <a href="/" className="text-red-600 hover:text-red-800 transition-colors">
            TCOER
          </a>
          <ChevronRight className="mx-2 h-4 w-4 text-gray-400 self-center" />
          <span className="text-gray-600">PRESIDENT'S MESSAGE</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="space-y-10">
        {/* Contact Details Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">CONTACT DETAILS</h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-red-700 mt-1 mr-3 flex-shrink-0" />
              <div>
                <span className="font-semibold text-blue-600">Address:</span>
                <span className="ml-2 text-gray-700">
                  Near Khadimachine Chowk, Kondhwa Annexe, Pune 411 048
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <Phone className="h-5 w-5 text-red-700 mr-3 flex-shrink-0" />
              <span className="font-semibold text-blue-600">Phone:</span>
              <a href="tel:8446041199" className="ml-2 text-gray-700 hover:text-blue-600">
                8446041199
              </a>
            </div>

            <div className="flex items-center">
              <Printer className="h-5 w-5 text-red-700 mr-3 flex-shrink-0" />
              <span className="font-semibold text-blue-600">Fax:</span>
              <span className="ml-2 text-gray-700">020-26934423</span>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-red-700 mt-1 mr-3 flex-shrink-0" />
              <div>
                <span className="font-semibold text-blue-600">Email:</span>
                <div className="ml-2 text-gray-700">
                  <a href="mailto:trinitycoe@gmail.com" className="hover:text-blue-600">
                    trinitycoe@gmail.com
                  </a>
                  <span className="mx-1">/</span>
                  <a href="mailto:admission1.tcoer@kjei.edu.in" className="hover:text-blue-600">
                    admission1.tcoer@kjei.edu.in
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <User className="h-5 w-5 text-red-700 mt-1 mr-3 flex-shrink-0" />
              <div>
                <span className="font-semibold text-blue-600">
                  Mr. Ganesh Bathe (Office Superintendant)
                </span>
                <span className="ml-2 text-gray-700">
                  Contact No:
                  <a href="tel:9730707982" className="ml-1 hover:text-blue-600">
                    9730707982
                  </a>
                </span>
              </div>
            </div>

            <div className="flex items-center">
              <GraduationCap className="h-5 w-5 text-red-700 mr-3 flex-shrink-0" />
              <span className="font-semibold text-blue-600">
                For Student Academic Verification:
              </span>
              <a
                href="mailto:ceo.tcoer@kjei.edu.in"
                className="ml-2 text-gray-700 hover:text-blue-600"
              >
                ceo.tcoer@kjei.edu.in
              </a>
            </div>

            <div className="flex items-start">
              <BookOpen className="h-5 w-5 text-red-700 mt-1 mr-3 flex-shrink-0" />
              <div>
                <span className="font-semibold text-blue-600">For Admission:</span>
                <div className="ml-2 text-gray-700 flex flex-wrap gap-x-4">
                  <a href="tel:7722041683" className="hover:text-blue-600">
                    7722041683
                  </a>
                  <a href="tel:9130839596" className="hover:text-blue-600">
                    9130839596
                  </a>
                  <a href="tel:9921107575" className="hover:text-blue-600">
                    9921107575
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b">MAP</h2>

          <div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.369472201549!2d73.90327611024337!3d18.42152628258059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eba318e71793%3A0xf75435d6d8816a8c!2sTrinity%20College%20of%20Engineering%20and%20Research!5e0!3m2!1sen!2sin!4v1744032603596!5m2!1sen!2sin"
                className="absolute top-0 left-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="bg-white p-3 flex justify-between items-center">
              <a
                href="https://maps.app.goo.gl/kBMcfqvZtmFEJpMJ6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
              >
                View larger map
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <div className="text-xs text-gray-500">Map data ©2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
