import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Factory Tour",
  description:
    "Take a virtual tour of our state-of-the-art manufacturing facilities where we bring fashion designs to life with precision and care.",
  openGraph: {
    title: "Factory Tour | MIYO Fashion",
    description:
      "Take a virtual tour of our state-of-the-art manufacturing facilities where we bring fashion designs to life with precision and care.",
  },
}

export default function FactoryTour() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[18vh] w-full bg-neutral-50 flex items-center justify-center shadow-sm">
        <h1 className="text-4xl font-light text-neutral-900 uppercase tracking-widest">Factory Tour</h1>
      </div>

      {/* Tour Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-8">Our Manufacturing Facilities</h2>
          <p className="text-neutral-600">
            Take a virtual tour of our state-of-the-art manufacturing facilities where we bring fashion designs to life
            with precision and care.
          </p>
        </div>

        {/* Facility Sections */}
        <div className="grid grid-cols-1 gap-24 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl uppercase tracking-wider mb-6">Design Department</h3>
              <p className="text-neutral-600 mb-4">
                Our Australian based design team collaborates closely with experienced pattern makers to bring
                creative visions to life. Equipped with the latest technology and tools, they work tirelessly to craft
                unique, trend-driven designs tailored to our customers' needs.
              </p>
              <p className="text-neutral-600">
                Dedicated spaces for sketching, digital design, and prototype development enabling us to
                transform ideas into reality with precision and efficiency.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image src="/placeholder.svg?height=600&width=800" alt="Design Studio" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src="/QualityControl_hand.png?height=600&width=800"
                  alt="Cutting Department"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl uppercase tracking-wider mb-6">Cutting Department</h3>
              <p className="text-neutral-600 mb-4">
                Precision is key in our cutting department. Using advanced technology and skilled craftsmanship,
                we ensure accurate pattern cutting with minimal waste.
              </p>
              <p className="text-neutral-600">
                Our cutting machines are maintained and fine-tuned regularly to uphold the highest standards of
                accuracy, ensuring every piece meets our strict quality requirements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-xl uppercase tracking-wider mb-6">Sewing Department</h3>
              <p className="text-neutral-600 mb-4">
                Our sewing department is the heart of our manufacturing process. Skilled artisans with years of
                experience create flawless seams and construction.
              </p>
              <p className="text-neutral-600">
                Each garment passes through multiple stations, with specialists focusing on different aspects of
                construction to ensure the highest quality in every detail.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src="/Sewing.png?height=600&width=800"
                  alt="Sewing Department"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] w-full overflow-hidden rounded">
                <iframe
                  src="https://www.youtube.com/embed/9z-j-SPvji0?si=ZY87zoCFdM3CbBMI"
                  title="Quality Control Process Video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div>
              <h3 className="text-xl uppercase tracking-wider mb-6">Quality Control</h3>
              <p className="text-neutral-600 mb-4">
                We are committed to delivering garments that meet the highest standards with thorough quality
                checks at every stage of production. Our dedicated quality control team carefully inspects each
                item before it reaches our customers.
              </p>
              <p className="text-neutral-600">
                With a multi-point inspection system in place, we review everything from stitching accuracy to
                fabric integrity ensuring consistency, durability, and premium quality in every piece.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-12 border-t border-neutral-200">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-6">Schedule Your Tour</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Interested in seeing our facilities in person? Contact us to arrange a factory tour and discover how we can
            bring your fashion designs to life.
          </p>
          <Link
            href="/contact-us"
            className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            Contact for Tour
          </Link>
        </div>
      </div>
    </div>
  )
}

