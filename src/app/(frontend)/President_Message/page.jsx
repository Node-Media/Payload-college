import Navbar from "../../components/Navbar";
import { ChevronRight } from "lucide-react";

export default function PresidentsMessage() {
  return (
    <>
    <Navbar/>
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
        <span className="text-gray-600">PRESIDENT'S MESSAGE</span>
      </nav>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* President's Image */}
          <div className="md:w-1/3 bg-gray-50 flex justify-center items-center p-6">
            <div className="relative w-64 h-64 md:w-full md:h-auto overflow-hidden rounded-lg shadow-lg">
              <img
                src="public/president.jpg"
                alt="Hon. Shri. Kalyan Jadhav - Founder President"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Message Content */}
          <div className="md:w-2/3 p-6 md:p-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">
              President's Message
            </h1>

            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed text-justify">
                It has always been my dream since youth to contribute to
                society. <b>KJ's Educational Institute (KJEI)</b> was
                established in 2006 to provide quality education at an
                affordable cost to young individuals, especially those from
                rural areas, to help them realize their potential and contribute
                to national development. My mission is to create{" "}
                <b>employment opportunities</b> for every student who enters our
                institute. My goal is to inspire students to contribute to
                nation-building through entrepreneurship, higher education, and
                a disciplined way of life.
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-600 my-6">
                "The journey of a thousand miles begins with one step."
              </blockquote>

              <p className="leading-relaxed text-justify">
                The colleges on campus have shown consistent growth each year. I
                will continue to contribute by enhancing facilities for the
                development of both faculty and students. I pray to the Almighty
                for the strength to drive continuous improvement and help KJEI
                make a lasting impact in the field of education.
              </p>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-blue-600 font-medium">
                  - Hon. Shri. Kalyan Jadhav
                </p>
                <p className="text-gray-600">Founder President, KJEI, Pune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}