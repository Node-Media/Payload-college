import React from 'react';
import Navbar from '../../components/Navbar';
import { ChevronRight, Image, Grid3X3 } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1786&auto=format&fit=crop',
    alt: 'Campus Building',
    category: 'campus'
  },
  {
    src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1471&auto=format&fit=crop',
    alt: 'Library Interior',
    category: 'facilities'
  },
  {
    src: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?q=80&w=1527&auto=format&fit=crop',
    alt: 'Graduation Day',
    category: 'events'
  },
  {
    src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1470&auto=format&fit=crop',
    alt: 'Students Studying',
    category: 'students'
  },
  {
    src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1470&auto=format&fit=crop',
    alt: 'Student Workspace',
    category: 'facilities'
  },
  {
    src: 'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1472&auto=format&fit=crop',
    alt: 'Science Lab',
    category: 'facilities'
  },
  {
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1c1?q=80&w=1374&auto=format&fit=crop',
    alt: 'Campus Life',
    category: 'campus'
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1470&auto=format&fit=crop',
    alt: 'Tech Workshop',
    category: 'events'
  },
  {
    src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1470&auto=format&fit=crop',
    alt: 'Faculty Meeting',
    category: 'faculty'
  },
  {
    src: 'https://images.unsplash.com/photo-1581362584011-d8ccdfe2892c?q=80&w=1374&auto=format&fit=crop',
    alt: 'Sports Event',
    category: 'events'
  },
  {
    src: 'https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=1470&auto=format&fit=crop',
    alt: 'Cultural Program',
    category: 'events'
  },
  {
    src: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1470&auto=format&fit=crop',
    alt: 'Computer Lab',
    category: 'facilities'
  }
];

export default function GalleryPage() {
  // Define primary color to match the college theme
  const primaryColor = "#9d1c3d"; // Deep maroon color

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>

      {/* Hero Section */}
      <section
        style={{ background: `linear-gradient(to right, rgba(157, 28, 61, 0.1), rgba(157, 28, 61, 0.05))` }}
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">College Photo Gallery</h1>
            <div className="flex items-center text-sm text-gray-500">
              <a href="/" className="hover:text-[#9d1c3d]">
                Home
              </a>
              <ChevronRight className="h-4 w-4 mx-1" />
              <span>Gallery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Introduction */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 rounded-full mb-4" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
              <Image className="h-6 w-6" style={{ color: primaryColor }} />
            </div>
            <h2 className="text-3xl font-bold mb-4">Capturing Campus Life</h2>
            <p className="text-lg text-gray-600">
              Browse through our collection of images showcasing the vibrant campus life, state-of-the-art facilities, 
              and memorable events at Trinity College of Engineering & Research.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-2 rounded-full" style={{ backgroundColor: "rgba(157, 28, 61, 0.1)" }}>
              <Grid3X3 className="h-5 w-5" style={{ color: primaryColor }} />
            </div>
            <h3 className="font-bold">Gallery Images</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white font-medium">{image.alt}</p>
                      <span className="text-xs text-gray-300 capitalize">{image.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Have photos to share?</h3>
            <p className="text-gray-600 mb-8">
              If you have captured moments from our campus events and would like to contribute to our gallery, 
              we'd love to see your pictures!
            </p>
            <a 
              href="/contact" 
              className="inline-block px-6 py-3 rounded-md text-white font-medium transition-colors"
              style={{ backgroundColor: primaryColor, hover: { backgroundColor: "#7a1730" } }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-slate-400">
            <p>© 2025 Trinity College of Engineering & Research. All rights reserved.</p>
            <p className="mt-2">For more information, visit our main website or contact the administration office.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 