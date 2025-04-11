import Image from "next/image"
import { ChevronRight, Award, Bell, BookOpen, Users } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
     

      <main className="container px-4 py-12 md:px-6 md:py-16">
        <Tabs defaultValue="updates" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">College Dashboard</h1>
              <p className="text-gray-500 mt-1">Latest updates and alumni testimonials</p>
            </div>
            <TabsList>
              <TabsTrigger value="updates">Updates</TabsTrigger>
              <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="updates" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Important</Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">Exam Guidance Committee 2023</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-500">
                  Updated guidelines for upcoming examinations and evaluation procedures.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Read more <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Announcement</Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">Project-based Learning Results</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-500">
                  Congratulations to all selected students for Project-based Learning from their respective
                  universities.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    View list <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Achievement</Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">Students Placed in Jaro Education</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-500">
                  Four students secured positions at Jaro Education with excellent package offers.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    More details <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Research</Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">First Student PhD Awarded</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-500">
                  Dr. Pathan has been awarded the first PhD from our institution. A remarkable achievement.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    Read more <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Achievement</Badge>
                  </div>
                  <CardTitle className="text-lg mt-2">SPPU Rank Holders</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-500">
                  Mr. Adrian Bowwala secured 12th rank and Mr. Bhushan Patil secured 24th rank in SPPU of Mechanical
                  Engineering.
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="gap-1">
                    More details <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex items-center justify-center p-6 bg-gray-50">
                <Button variant="outline" className="gap-2">
                  <Bell className="h-4 w-4" />
                  View all updates
                </Button>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <TestimonialCard
                name="Neha Mahamuni"
                role="TCOER Alumni"
                imageSrc="/placeholder.svg?height=200&width=200"
                content="Basically students are given company required training in semester 5 and 6. They're allowed to explore industries by doing internship from semester 6. They are eligible for campus placements in semester 7 and 8. I personally attended 3 to 4 training programs in college which helped me a lot. Training is usually about soft skills, personality development, aptitude, interview skills, etc. Almost 80% of students from our batch got placed in various companies."
              />

              <TestimonialCard
                name="Vinay Itankar"
                role="TCOER Alumni"
                imageSrc="/placeholder.svg?height=200&width=200"
                content="The training and placement officer in our college has a good network with IT companies. They inform us about which companies are coming for job interviews 2 to 3 days before so that we can prepare for those interviews. Companies like Sanky Solution, Tulip technology, Emicon, Techno Growth visited this year. Many students in college got placed and gathered experience of interviews. I got placed in FIS Global with the salary package of 5 LPA."
              />
            </div>

            <div className="flex justify-center">
              <Button variant="outline" className="gap-2">
                <Users className="h-4 w-4" />
                View more alumni stories
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t bg-gray-50">
        <div className="container px-4 py-8 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold">Trinity College of Engineering</h3>
              <p className="mt-1 text-sm text-gray-500">Providing quality education since 1995</p>
            </div>
            <div>
              <h4 className="font-medium">Quick Links</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Academics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Placements
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Resources</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Library
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Student Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Career Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium">Contact</h4>
              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                <li>123 College Road, Pune, India</li>
                <li>info@trinity.edu</li>
                <li>+91 1234567890</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Trinity College of Engineering. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function TestimonialCard({
  name,
  role,
  imageSrc,
  content,
}: { name: string; role: string; imageSrc: string; content: string }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-0">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full border bg-gray-100">
            <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription>{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-sm text-gray-500 leading-relaxed">{content}</p>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 px-6 py-4">
        <div className="flex items-center gap-1">
          <Award className="h-4 w-4 text-yellow-500" />
          <span className="text-xs font-medium">Verified Alumni</span>
        </div>
      </CardFooter>
    </Card>
  )
}

