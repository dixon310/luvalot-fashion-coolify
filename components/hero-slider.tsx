"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface SlideContent {
  imageSrc: string
  heading: string
  subheading: string
  buttonText?: string
  buttonLink?: string
}

interface HeroSliderProps {
  slides: SlideContent[]
  autoplaySpeed?: number
}

export default function HeroSlider({ slides, autoplaySpeed = 5000 }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Auto-advance slides only after component is mounted
  useEffect(() => {
    if (!isMounted) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, autoplaySpeed)

    return () => clearInterval(interval)
  }, [slides.length, autoplaySpeed, isMounted])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0 w-full h-full">
        {/* Slider images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.imageSrc || "/placeholder.svg"}
              alt={`${slide.heading} - ${slide.subheading}`}
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              quality={90}
            />
          </div>
        ))}

        {/* Slider navigation dots - always rendered but controlled by opacity */}
        <div className={`absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20 transition-opacity duration-300 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={!isMounted}
              className={`w-3 h-3 rounded-full transition-opacity ${
                index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
              } ${!isMounted ? "pointer-events-none" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Left/Right navigation arrows - always rendered but controlled by opacity */}
        <button
          onClick={goToPrevSlide}
          disabled={!isMounted}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-20 transition-all ${
            isMounted ? "opacity-100" : "opacity-0"
          } ${!isMounted ? "pointer-events-none" : ""}`}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNextSlide}
          disabled={!isMounted}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-2 rounded-full z-20 transition-all ${
            isMounted ? "opacity-100" : "opacity-0"
          } ${!isMounted ? "pointer-events-none" : ""}`}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Text overlay - centered on the slider */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white p-6 max-w-5xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-6 tracking-wide leading-tight">
            {slides[currentSlide].heading}
          </h1>
          {slides[currentSlide].subheading && (
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              {slides[currentSlide].subheading}
            </p>
          )}
          {slides[currentSlide].buttonText && slides[currentSlide].buttonLink && (
            <Link
              href={
                slides[currentSlide].heading.includes("Sustainable")
                  ? "/services#sustainable-production"
                  : slides[currentSlide].buttonLink!
              }
              className="inline-block border border-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              {slides[currentSlide].buttonText}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}