import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Testimonial&Updates'
import Department from '../components/Department'
import Gallery from '../components/Gallery'
import ImageCarousel from '../components/Carousel'


const images = [
  {
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop',
    alt: 'University Campus',
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1471&auto=format&fit=crop',
    alt: 'College Library',
  },
  {
    src: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1527&auto=format&fit=crop',
    alt: 'Graduation Ceremony',
  },
  {
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop',
    alt: 'Campus Life',
  },
  {
    src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop',
    alt: 'Student Study Area',
  },
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1472&auto=format&fit=crop',
    alt: 'Science Laboratory',
  },
]


const page = () => {
  return (
    <>
    <Navbar/>
    
    <div className="w-[90vw] md:w-[80vw] h-[50vh] md:h-[80vh] mx-auto my-4">
      <ImageCarousel images={images} className="h-full w-full" />
    </div>
    
    <Department/>
    <Gallery/>
    <Home/>

    </>
  )
}

export default page