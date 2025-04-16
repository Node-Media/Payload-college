'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface ImageCarouselProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
}

export default function ImageCarousel({ images = [], className }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isTouching, setIsTouching] = useState(false)
  const [touchStart, setTouchStart] = useState(0)

  // Early return if there are no images
  if (!images || images.length === 0) {
    return (
      <div
        className={cn(
          'relative aspect-video flex items-center justify-center rounded-2xl bg-muted',
          className,
        )}
      >
        <span className="text-sm text-muted-foreground">No images available</span>
      </div>
    )
  }

  const slideVariants = {
    hiddenRight: {
      x: '100%',
      opacity: 0,
    },
    hiddenLeft: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: '0',
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
      },
    },
  }

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevious = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  // Touch handlers for swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsTouching(true)
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isTouching) return
    
    const currentPosition = e.touches[0].clientX
    const diff = touchStart - currentPosition
    
    // Threshold for swipe gesture (50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left, go to next
        handleNext()
      } else {
        // Swiped right, go to previous
        handlePrevious()
      }
      setIsTouching(false)
    }
  }

  const handleTouchEnd = () => {
    setIsTouching(false)
  }

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn('relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md sm:shadow-xl', className)}>
      <div 
        className="h-full w-full relative overflow-hidden rounded-xl sm:rounded-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial={direction > 0 ? 'hiddenRight' : 'hiddenLeft'}
            animate="visible"
            exit="exit"
            className="absolute inset-0 h-full w-full rounded-xl sm:rounded-2xl"
          >
            <Image
              src={images[currentIndex].src || '/placeholder.svg'}
              alt={images[currentIndex].alt}
              fill
              className="object-cover object-center rounded-xl sm:rounded-2xl"
              sizes="(max-width: 768px) 90vw, 80vw"
              priority
            />
            {/* Optional overlay with title */}
            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end rounded-xl sm:rounded-2xl">
              <div className="p-3 sm:p-6 bg-gradient-to-t from-black/70 to-transparent rounded-b-xl sm:rounded-b-2xl">
                <h2 className="text-white font-bold text-base sm:text-lg md:text-2xl">
                  {images[currentIndex].alt}
                </h2>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons - hidden on very small screens */}
      <motion.button
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition-colors hover:bg-white/40 z-10 hidden sm:flex"
        onClick={handlePrevious}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
      </motion.button>

      <motion.button
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm transition-colors hover:bg-white/40 z-10 hidden sm:flex"
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next image"
      >
        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
      </motion.button>

      {/* Dots indicator */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 md:space-x-3 z-10">
        {images.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-3 md:w-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-white/50'}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
