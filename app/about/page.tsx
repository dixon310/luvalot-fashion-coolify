import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MIYO Fashion, our story, values, and team. We provide high-quality OEM and ODM services with sustainable and ethical manufacturing practices.",
  openGraph: {
    title: "About MIYO Fashion",
    description:
      "Learn about MIYO Fashion, our story, values, and team. We provide high-quality OEM and ODM services with sustainable and ethical manufacturing practices.",
  },
}

export default function About() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[18vh] w-full bg-neutral-50 flex items-center justify-center shadow-sm">
        <h1 className="text-4xl font-light text-neutral-900 uppercase tracking-widest">About Us</h1>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-8 text-center">Our Story</h2>

          <p className="text-neutral-600 mb-6 text-center">
            MIYO Fashion was founded with a clear vision: to provide exceptional OEM and ODM services to fashion brands
             across the globe. With years of industry experience, our team deeply understands the importance of quality, 
             innovative design, and reliable delivery. 
          </p>

          <p className="text-neutral-600 mb-6 text-center">
            We proudly operate state-of-the-art manufacturing facilities, where 
             skilled artisans bring every concept to life with precision, care, and attention to detail. Our designs are developed in 
             Australia, combining creativity and global trends to meet the needs of modern fashion brands.
          </p>

          <p className="text-neutral-600 mb-6 text-center">
            Our commitment to excellence has made us a trusted partner for fashion brands of all sizes worldwide. Sustainability and ethical manufacturing are at the 
             heart of everything we do. Our facilities include a recyclable mill, offering eco-friendly material options to help our partners 
             reduce their environmental footprint.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="text-center p-6">
            <h3 className="text-xl uppercase tracking-wider mb-4">Quality</h3>
            <p className="text-neutral-600">
              We are dedicated to delivering products of the highest quality, with a strong emphasis on attention to detail from fabric 
              sourcing to final packaging. Every step of our process reflects our premium one-stop service.
            </p>
          </div>

          <div className="text-center p-6">
            <h3 className="text-xl uppercase tracking-wider mb-4">Innovation</h3>
            <p className="text-neutral-600">
              Our Australian-based design team stays ahead of the curve, constantly exploring new techniques, 
              materials, and trends to create fresh, fashion-forward collections.
            </p>
          </div>

          <div className="text-center p-6">
            <h3 className="text-xl uppercase tracking-wider mb-4">Reliability</h3>
            <p className="text-neutral-600">
              We understand how crucial consistency and punctuality are in the fashion industry. That’s why we 
              ensure dependable timelines and uncompromising quality—making us a trusted partner for your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}