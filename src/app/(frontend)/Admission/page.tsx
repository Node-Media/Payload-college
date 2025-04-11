import React from 'react'
import { ChevronRight } from 'lucide-react'

const AdmissionsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white text-justify">
      {/* Breadcrumb Navigation */}
      <nav className="flex mb-8 text-sm">
        <a href="/" className="text-red-600 hover:text-red-800 transition-colors">
          TCOER
        </a>
        <ChevronRight className="mx-2 h-4 w-4 text-gray-400 self-center" />
        <span className="text-gray-600">Admission</span>
      </nav>

      {/* Main Heading */}
      <h1 className="text-2xl font-bold text-gray-900 mb-8">ADMISSIONS</h1>

      {/* Admission Contact Section */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-red-600 mb-4 text-center">ADMISSION CONTACT</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Trinity College Office</td>
                <td className="border border-gray-300 px-4 py-2">7772041983, 8446041199</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Ms. Prachi Arote</td>
                <td className="border border-gray-300 px-4 py-2">9130839596</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Ms. Aafreen Deshmukh</td>
                <td className="border border-gray-300 px-4 py-2">9922765374</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Intake Section */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-red-600 mb-4 text-center">INTAKE</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Under Graduate Program
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Sanction Intake 2024-25
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Civil Engineering</td>
                <td className="border border-gray-300 px-4 py-2">30</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Computer Engineering</td>
                <td className="border border-gray-300 px-4 py-2">150</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Electrical Engineering</td>
                <td className="border border-gray-300 px-4 py-2">60</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  Electronics & Telecommunication Engineering
                </td>
                <td className="border border-gray-300 px-4 py-2">60</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Information Technology</td>
                <td className="border border-gray-300 px-4 py-2">60</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Mechanical Engineering</td>
                <td className="border border-gray-300 px-4 py-2">60</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* First Year Fees Structure */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-red-600 mb-4 text-center">
          FEES STRUCTURE - FIRST YEAR ENGINEERING 2024-25
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Particulars/Head</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Open</th>
                <th className="border border-gray-300 px-4 py-2 text-left">EBC/OBC</th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Girls EBC/OBC/EWS/SEBC
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">SC/ST</th>
                <th className="border border-gray-300 px-4 py-2 text-left">NT/SBC/TFWS</th>
                <th className="border border-gray-300 px-4 py-2 text-left">J&K</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Tuition Fee</td>
                <td className="border border-gray-300 px-4 py-2">88697</td>
                <td className="border border-gray-300 px-4 py-2">44350</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">24000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Development Fees</td>
                <td className="border border-gray-300 px-4 py-2">13303</td>
                <td className="border border-gray-300 px-4 py-2">13303</td>
                <td className="border border-gray-300 px-4 py-2">13303</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">13303</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Total Fees</td>
                <td className="border border-gray-300 px-4 py-2">102000</td>
                <td className="border border-gray-300 px-4 py-2">57653</td>
                <td className="border border-gray-300 px-4 py-2">13303</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">13303</td>
                <td className="border border-gray-300 px-4 py-2">24000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Other Fees</td>
                <td className="border border-gray-300 px-4 py-2">7754</td>
                <td className="border border-gray-300 px-4 py-2">7754</td>
                <td className="border border-gray-300 px-4 py-2">7754</td>
                <td className="border border-gray-300 px-4 py-2">7754</td>
                <td className="border border-gray-300 px-4 py-2">7754</td>
                <td className="border border-gray-300 px-4 py-2">7754</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  Grand Total Fees
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  109754
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  65407
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  21057
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  7754
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  21057
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  31754
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-blue-600">
          <p className="font-semibold">Important Note:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              For EBC/OBC/EWS/SEBC Category Girls students income is applicable before 8 lakhs.
            </li>
            <li>Additional Eligibility Fee for OMS Rs. 500/-</li>
          </ul>
        </div>
      </section>

      {/* DSE Fees Structure */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-red-600 mb-4 text-center">
          FEES STRUCTURE - DSE ENGINEERING 2024-25
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Particulars/Head</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Open</th>
                <th className="border border-gray-300 px-4 py-2 text-left">EBC/OBC</th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Girls EBC/OBC/EWS/SEBC
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">SC/ST</th>
                <th className="border border-gray-300 px-4 py-2 text-left">NT/SBC/TFWS</th>
                <th className="border border-gray-300 px-4 py-2 text-left">J&K</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Tuition Fee</td>
                <td className="border border-gray-300 px-4 py-2">80387</td>
                <td className="border border-gray-300 px-4 py-2">40194</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">24000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Development Fee</td>
                <td className="border border-gray-300 px-4 py-2">10613</td>
                <td className="border border-gray-300 px-4 py-2">10613</td>
                <td className="border border-gray-300 px-4 py-2">10613</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">10613</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Total Fees</td>
                <td className="border border-gray-300 px-4 py-2">91000</td>
                <td className="border border-gray-300 px-4 py-2">50807</td>
                <td className="border border-gray-300 px-4 py-2">10613</td>
                <td className="border border-gray-300 px-4 py-2">0</td>
                <td className="border border-gray-300 px-4 py-2">10613</td>
                <td className="border border-gray-300 px-4 py-2">24000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Other Fees</td>
                <td className="border border-gray-300 px-4 py-2">9052</td>
                <td className="border border-gray-300 px-4 py-2">9052</td>
                <td className="border border-gray-300 px-4 py-2">9052</td>
                <td className="border border-gray-300 px-4 py-2">9052</td>
                <td className="border border-gray-300 px-4 py-2">9052</td>
                <td className="border border-gray-300 px-4 py-2">9052</td>
              </tr>
              <tr className="bg-blue-50">
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  Grand Total Fees
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  100052
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  59859
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  19665
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  9052
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  19665
                </td>
                <td className="border border-gray-300 px-4 py-2 font-semibold text-blue-600">
                  33012
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-sm text-blue-600">
          <p className="font-semibold">Important Note:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              For EBC/OBC/EWS/SEBC Category Girls students income is applicable before 8 lakhs.
            </li>
            <li>Additional Eligibility Fee for OMS Rs. 500/-</li>
          </ul>
        </div>
      </section>

      {/* First Year Engineering Eligibility Criteria */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-red-600 mb-4">
          First Year Engineering - Eligibility Criteria
        </h2>
        <h3 className="font-medium text-blue-600 mb-2">Admission to First Year Engineering:</h3>
        <ol className="list-decimal pl-5 space-y-4">
          <li>
            Maharashtra State Candidature Candidate:
            <ol className="list-[lower-alpha] pl-5 mt-2 space-y-2">
              <li>The Candidate should be an Indian National;</li>
              <li className="text-sm leading-relaxed">
                Passed HSC or its equivalent examination with Physics and Mathematics as compulsory
                subjects along with one of the Chemistry or Biotechnology or Biology or Technical
                Vocational subject or Computer Science or Information Technology or Informatics
                Practices or Agriculture or Engineering Graphics or Business Studies and obtained at
                least 45 % marks (at least 40 % marks, in case of Backward Class categories,
                Economically Weaker Section and Persons with Disability category candidates
                belonging to Maharashtra State), in the above subjects taken together, and the
                Candidate should have appeared in all the subjects in CET and should obtain non zero
                score in CET conducted by the Competent Authority.
              </li>
            </ol>
            <p className="mt-2 font-medium">OR</p>
            <p className="mt-2 text-sm leading-relaxed">
              (ii)Passed Diploma in Engineering and Technology and obtained at least 45 % marks (at
              least 40 % marks, in case of Backward Class categories, Economically Weaker Section
              and Persons with Disability category candidates belonging to Maharashtra State).
            </p>
          </li>
          <li>
            All India Candidature Candidates, Jammu and Kashmir Migrant Candidature Candidates:
            <ol className="list-[lower-roman] pl-5 mt-2 space-y-2">
              <li>The Candidate should be an Indian National;</li>
              <li className="text-sm leading-relaxed">
                Passed HSC or its equivalent examination with Physics and Mathematics as compulsory
                subjects along with one of the Chemistry or Biotechnology or Biology or Technical
                Vocational subject or Computer Science or Information Technology or Informatics
                Practices or Agriculture or Engineering Graphics or Business Studies and obtained at
                least 45 % marks (at least 40 % marks, in case of Backward Class categories,
                Economically Weaker Section and Persons with Disability category candidates
                belonging to Maharashtra State), in the above subjects taken together, and should
                obtain non zero positive score in JEE (Main) B.E./B.Tech or the candidate should
                have appeared in all the subjects in CET and should obtain non zero score in CET
                conducted by the Competent Authority. However preference shall be given to the
                candidate obtaining non zero positive score in JEE (Main) B.E./B.Tech over the
                candidates who obtained non zero score in CET.
              </li>
            </ol>
            <p className="mt-2 font-medium">OR</p>
            <p className="mt-2 text-sm leading-relaxed">
              (ii)Passed Diploma in Engineering and Technology and obtained at least 45 % marks (at
              least 40 % marks, in case of Backward Class categories, Economically Weaker Section
              and Persons with Disability category candidates belonging to Maharashtra State).
            </p>
          </li>
        </ol>
      </section>

      {/* Direct Second Year Engineering Eligibility Criteria */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-red-600 mb-4">
          Direct Second Year Engineering: Eligibility Criteria
        </h2>
        <h3 className="font-medium text-blue-600 mb-2">
          Admission to Direct Second Year Engineering:
        </h3>
        <p className="mb-2">
          For Maharashtra State Candidature Candidate and All India Candidature Candidate:
        </p>
        <ol className="list-[lower-roman] pl-5 space-y-2">
          <li>Diploma in Engineering and Technology from recognized institutes</li>
        </ol>
        <p className="my-2 font-medium">OR</p>
        <ol className="list-[lower-roman] pl-5 space-y-2 start-[2]">
          <li>B.Sc. Degree from recognized institutes with Mathematics as one subject</li>
          <li>
            Shall clear the subjects of Engineering Graphics and Mechanics of the first year along
            with second year subjects.
          </li>
        </ol>
        <p className="my-2 font-medium">AND</p>
        <ol className="list-[lower-roman] pl-5 space-y-2 start-[4]">
          <li>Minimum 45% marks (40% in for Backward category and PWD for Maharashtra State) OR</li>
          <li>
            D.Voc in the same or allied sector (A suitable bridge courses, in Mathematics must be
            applicable)
          </li>
        </ol>
      </section>
    </div>
  )
}

export default AdmissionsPage
