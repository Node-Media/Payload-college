import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Testimonial&Updates'
import Department from '../components/Department'
import Gallery from '../components/Gallery'
import ImageCarousel from '../components/Carousel'


const images = [
  {
    src: 'https://www.kjei.edu.in/tcoer/Training%20and%20Placement/8.png',
    alt: 'Placement Session 1',
  },
  {
    src: 'https://www.kjei.edu.in/tcoer/Training%20and%20Placement/5.png',
    alt: 'Placement Session 2',
  },
  {
    src: 'https://www.kjei.edu.in/tcoer/images/slide6.jpg',
    alt: 'College Slide 6',
  },
  {
    src: 'https://www.kjei.edu.in/tcoer/images/23.jpg',
    alt: 'Event 23',
  },
]


const page = () => {
  return (
    <>
    <Navbar/>
    
    {/* <ImageCarousel images={images} className="shadow-lg" /> */}
    
    <Department/>
    <Gallery/>
    <Home/>

    </>
  )
}

export default page