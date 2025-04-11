import { ChevronRight } from "lucide-react";

export default function PrincipalsMessage() {
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
        <span className="text-gray-600">PRINCIPAL'S MESSAGE</span>
      </nav>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          {/* Principal's Image */}
          <div className="md:w-1/3 bg-gray-50 flex justify-center items-center p-6">
            <div className="relative w-64 h-64 md:w-full md:h-auto overflow-hidden rounded-lg shadow-lg">
              <img
                src="public/principal.png"
                alt="Hon. Shri. Kalyan Jadhav - Founder President"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Message Content */}
          <div className="md:w-2/3 p-6 md:p-8">
            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-6">
              Principal's Message
            </h1>

            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed text-justify">
                <b>KJ's Educational Institutes</b> was founded as part of the
                corporate social responsibility of Shri Kalyan Jadhav, a
                renowned industrialist in Pune, with a vision to contribute to
                nation-building. Established in ,{" "}
                <b>Trinity College of Engineering and Research</b> quickly
                became one of Pune’s top engineering institutes, known for its
                state-of-the-art infrastructure, world-class labs, industry
                connections, and commitment to research and quality education.
                Its first batch of graduates in 2012 is excelling in top
                companies across India. As the economy grows, the demand for
                skilled engineers continues to rise. With increasing
                infrastructure needs—roads, metro systems, and advanced
                technologies—engineers and professionals have immense
                opportunities ahead. This keeps it concise while preserving the
                key details. Let me know if you need it even shorter!
              </p>

              <blockquote className="border-l-4 border-blue-500 pl-4 italic text-blue-600 my-6">
                "The journey of a thousand miles begins with one step."
              </blockquote>

              <p className="leading-relaxed text-justify">
                At <b>Trinity</b> we provide a conducive environment for young
                engineers where they can be creative, learn to solve problems,
                express themselves giving them avenues to grow. I would
                encourage students to take full advantage of our infrastructure,
                engineering education and make best use of these <b>4 years</b>{" "}
                to fulfill their dreams of becoming quality engineers. My best
                wishes are always with you.
              </p>

              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-blue-600 font-medium">
                  - Prof. (Dr.) Abhijeet Bhikashet Auti
                </p>
                <p className="text-gray-600">
                  Principal, Trinity College of Engineering & Research
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}