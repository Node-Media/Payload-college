import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, ExternalLink } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              About Trinity College of Engineering & Research
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              KJEI's Trinity College of Engineering and Research was established June 2008 at the
              scenic foothills of Bopdev Ghat, Yelewadi, Pisoli, Pune. The College is approved by
              AICTE & DTE, Govt of Maharashtra and is Affiliated to Savitribai Phule Pune
              University. The College offers courses in Electronics & Telecommunication, Mechanical
              Engg, Computer Engg, Information Technology, Civil & Electrical Engg. The college
              boasts of quality state of art infrastructure with well planned, designed adequate
              class rooms and labs. The College is in the forefront to impart quality education & to
              ultimately be recognized as a premiere knowledge centre.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex items-center">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-medium">Vision</h3>
                  </div>
                  <p className="flex-1 text-gray-600">
                    "To be a premier knowledge centre for socio-economic development."
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4 flex items-center">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-medium">Mission</h3>
                  </div>
                  <p className="flex-1 text-gray-600">
                    "To provide education that combines rigorous academics with joy of discovery
                    through sustained efforts and dynamic strategies in building innovative,
                    participatory, problem based learning practices and research that leads to
                    capacity building of students."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-4" />

      {/* Video Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">Video Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 group">
              <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-900">
                <Image
                  src="/placeholder.svg?height=400&width=800&text=Campus Tour"
                  alt="Campus Tour"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-70 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <Badge className="w-fit mb-2 bg-primary hover:bg-primary">Featured</Badge>
                  <h3 className="text-xl font-bold text-white mb-2">Campus Tour 2023</h3>
                  <p className="text-white/80 mb-4 max-w-lg">
                    Experience the beautiful campus of Trinity College with our comprehensive
                    virtual tour showcasing our state-of-the-art facilities.
                  </p>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center rounded-full bg-primary w-12 h-12 text-white group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                      <Play className="h-5 w-5" />
                    </div>
                    <span className="ml-3 text-white text-sm">Watch video • 5:42</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: 'Annual Day Celebration',
                  duration: '3:18',
                  desc: 'Highlights from our grand annual day celebration',
                },
                {
                  title: 'Tech Fest 2023',
                  duration: '4:05',
                  desc: 'Student innovations at our annual tech festival',
                },
                {
                  title: 'Convocation Ceremony',
                  duration: '6:22',
                  desc: "Celebrating our graduates' achievements",
                },
              ].map((video, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=150&width=150&text=${video.title.split(' ')[0]}`}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="p-4 flex-1">
                      <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {video.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{video.desc}</p>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <span>{video.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline mt-4"
              >
                View all videos
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-4" />

      {/* Guests Section - Landscape Images */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
            Distinguished Guests & Visitors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                name: 'Dr. Anil Kakodkar',
                role: 'Former Chairman, Atomic Energy Commission',
                date: 'Visited: March 2023',
                topic: 'Future of Nuclear Energy in India',
              },
              {
                name: 'Dr. Vijay Bhatkar',
                role: 'Computer Scientist, PARAM Supercomputer architect',
                date: 'Visited: November 2022',
                topic: 'AI and the Future of Computing',
              },
              {
                name: 'Dr. Raghunath Mashelkar',
                role: 'Former Director General, CSIR',
                date: 'Visited: February 2023',
                topic: 'Innovation in Engineering Education',
              },
              {
                name: 'Dr. Nitin Karmalkar',
                role: 'Former Vice-Chancellor, SPPU',
                date: 'Visited: September 2022',
                topic: 'Academic Excellence in Higher Education',
              },
            ].map((guest, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white border border-gray-100 hover:border-primary/20 transition-all duration-300"
              >
                <div className="aspect-video relative">
                  <Image
                    src={`/placeholder.svg?height=300&width=500&text=${guest.name.split(' ')[1]}`}
                    alt={guest.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm font-medium">{guest.topic}</p>
                      <div className="mt-2 flex items-center text-xs">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        <span>View lecture</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-300">
                    {guest.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{guest.role}</p>
                  <p className="mt-2 text-xs text-gray-500">{guest.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary hover:underline"
            >
              View all distinguished guests
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-4" />
    </div>
  )
}
