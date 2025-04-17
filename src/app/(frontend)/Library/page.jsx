import { ChevronRight } from "lucide-react";

export default function PresidentsMessage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex mb-8 text-sm">
        <a
          href="/"
          className="text-red-600 hover:text-red-800 transition-colors"
        >
          TCOER
        </a>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400 self-center" />
        <span className="text-gray-600">Library Department</span>
      </nav>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/3 bg-gray-50 flex justify-center items-center p-6">
            <div className="relative w-64 h-64 md:w-full md:h-auto overflow-hidden rounded-lg shadow-lg">
              <img
                src="/library.jpg"
                alt="library"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Message Content */}
          <div className="md:w-2/3 p-6 md:p-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">
              Library Department
            </h1>

            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed text-justify">
                Library is the heart of the college. As heart supplies blood to
                all parts of the body , library provides knowledge to all
                faculty and students . Library is a place of pride at KJEI
                campus & an essential component of learning, research and
                education mission. The library is fully computerized with SLIM
                21 software. It helps in accessing a wide range of materials,
                both in print and electronic version. library has facilities
                like CD-ROMs, online databases and photocopiers for students
                .The Library has an excellent collection of reference / text
                books, encyclopedias and periodicals related to the field of
                Engineering and Management.
              </p>

              <a
                href="https://sites.google.com/site/tcoerlibraryportal/home"
                className="border-l-4 border-blue-500 pl-4 italic text-blue-600 my-6"
                target="_blank"
              >
                For more details, visit the library portal.
              </a>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-blue-600 font-medium">- Mrs Prachi Arote</p>
                <p className="text-gray-600">Librarian, TCOER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}