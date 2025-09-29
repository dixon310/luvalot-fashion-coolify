"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

type Slide = {
  imageSrc: string
  heading?: string
  subheading?: string
  buttonText?: string
  buttonLink?: string
}

export default function HeroSlider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5500)
    return () => clearInterval(t)
  }, [slides.length])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-[60vh] md:h-[72vh]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              i === index ? "translate-x-0" : i < index ? "-translate-x-full" : "translate-x-full"
            }`}
            aria-hidden={i !== index}
          >
            <Image src={slide.imageSrc} alt={slide.heading || ""} fill className="object-cover" />

            {/* stronger overlay to improve text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

            {/* Text block — left aligned, larger heading, subtle backdrop for readability */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-6 md:px-12 lg:px-20">
                <div className="bg-black/30 backdrop-blur-sm rounded-md inline-block p-3 md:p-6">
                  <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-white uppercase tracking-widest leading-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]">
                    {slide.heading}
                  </h2>
                  {slide.subheading && (
                    <p className="mt-3 text-sm md:text-base text-neutral-100">
                      {slide.subheading}
                    </p>
                  )}

                  {slide.buttonText && (
                    <div className="mt-6">
                      <Link
                        href={slide.buttonLink || "#"}
                        className="inline-block border border-white text-white px-6 py-2 text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* simple indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-opacity ${i === index ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  )
}