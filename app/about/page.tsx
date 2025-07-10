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
      <div className="relative h-[40vh] w-full">
        <Image src="/placeholder.svg?height=600&width=1920" alt="About Banner" fill priority className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-light text-white uppercase tracking-widest">About Us</h1>
        </div>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-8 text-center">Our Story</h2>

          <p className="text-neutral-600 mb-6">
  aterial options to help our partners reduce their environmental footprint.
          </p>

          <p className="text-neutral-600 mb-6">
            We take pride in our state-of-the-art manufacturing facilities and our team of skilled artisans who bring
            designs to life with precision and care. Our commitment to excellence has made us a trusted partner for
            fashion brands of all sizes.
          </p>

          <p className="text-neutral-600 mb-6">
            At MIYO Fashion, we believe in sustainable and ethical manufacturing practices. We source our materials
            responsibly and ensure fair working conditions for all our employees. Our goal is not just to create
            beautiful garments but to do so in a way that respects both people and the planet.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="text-center p-6">
            <h3 className="text-xl uppercase tracking-wider mb-4">Quality</h3>
            <p className="text-neutral-600">
              We are committed to delivering products of the highest quality, paying attention to every detail from
              fabric selection to final stitching.
            </p>
          </div>

          <div className="text-center p-6">
            <h3 className="text-xl uppercase tracking-wider mb-4">Innovation</h3>
            <p className="text-neutral-600">
              Our design team stays ahead of trends, constantly exploring new techniques and materials to create
              innovative and unique designs.
            </p>
          </div>

          <div className="text-center p-6">
            <h3 className="text-xl uppercase tracking-wider mb-4">Reliability</h3>
            <p className="text-neutral-600">
              We understand the importance of timely delivery and consistent quality, making us a reliable partner for
              your fashion business.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}