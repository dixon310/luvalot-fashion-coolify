import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our premium manufacturing solutions including private label manufacturing, design & development, and sustainable production for fashion brands.",
  openGraph: {
    title: "Fashion Manufacturing Services | Luvalot Fashion",
    description:
      "Explore our premium manufacturing solutions including private label manufacturing, design & development, and sustainable production for fashion brands.",
  },
}

export default function Services() {
  const services = [
    {
      id: "private-label",
      title: "Private Label Manufacturing",
      description: "Complete manufacturing solutions for your brand with our premium private label services.",
      features: [
        "Custom designs and patterns",
        "Premium fabric selection",
        "Flexible MOQs starting at 300 pieces",
        "Full production management",
        "Quality control at every stage",
        "Packaging and shipping solutions",
      ],
      imageSrc: "/placeholder.svg?height=600&width=800&text=Private+Label",
    },
    {
      id: "design-development",
      title: "Design & Development",
      description: "From concept to creation, our expert design team brings your vision to life.",
      features: [
        "Trend research and analysis",
        "Concept development",
        "Technical design and pattern making",
        "Sample development",
        "Material sourcing and testing",
        "Production-ready tech packs",
      ],
      imageSrc: "/placeholder.svg?height=600&width=800&text=Design+Development",
    },
    {
      id: "sustainable-production",
      title: "Sustainable Production",
      description: "Eco-friendly manufacturing options for environmentally conscious brands.",
      features: [
        "Sustainable fabric options",
        "Eco-friendly dyes and processes",
        "Reduced water consumption",
        "Energy-efficient production",
        "Waste reduction strategies",
        "Ethical manufacturing practices",
      ],
      imageSrc: "/placeholder.svg?height=600&width=800&text=Sustainable+Production",
    },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[40vh] w-full">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Services Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-light text-white uppercase tracking-widest">Our Services</h1>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-8">Premium Manufacturing Solutions</h2>
          <p className="text-neutral-600">
            With 15 years of industry experience, we provide comprehensive manufacturing services for fashion brands
            worldwide. From design and development to production and delivery, we handle every step of the process with
            precision and care.
          </p>
        </div>

        {/* Service Sections */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative h-[400px] w-full overflow-hidden rounded">
                  <Image
                    src={service.imageSrc || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <h3 className="text-2xl uppercase tracking-wider mb-4">{service.title}</h3>
                <p className="text-neutral-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle size={20} className="text-neutral-700 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-6">Ready to Start Your Project?</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your manufacturing needs and discover how we can bring your fashion vision to
            life.
          </p>
          <Link
            href="/contact-us"
            className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

