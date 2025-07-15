import Image from "next/image"
import Link from "next/link"
import { CheckCircle, BadgeDollarSign, PackageCheck, Tag, PencilRuler, Truck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore our premium manufacturing solutions including private label manufacturing, design & development, and sustainable production for fashion brands.",
  openGraph: {
    title: "Fashion Manufacturing Services | MIYO Fashion",
    description:
      "Explore our premium manufacturing solutions including private label manufacturing, design & development, and sustainable production for fashion brands.",
  },
}

export default function Services() {
  const services = [
    {
      id: "Pricing-Flexibility",
      title: "Pricing Flexibility",
      description: "Flexible pricing options to suit your brand's needs, whether you're a startup or an established label.",
      icon: <BadgeDollarSign size={72} className="text-black mb-6" />,
      features: ["DDP", "Ex-Works (EXW)", "FOB"],
    },
    {
      id: "One-Stop-Services",
      title: "One-Stop Services",
      description: "Full-package production: design, sourcing, fitting, quality control, and delivery.",
      icon: <PackageCheck size={72} className="text-black mb-6" />,
      features: [
        "Comprehensive design & development",
        "Sourcing high-quality materials",
        "Expert fitting & pattern making",
        "Rigorous quality control",
      ],
    },
    {
      id: "Private-Label-Capabilities",
      title: "Private Label Capabilities",
      description: "Specialists in private label manufacturing to help you build your own brand.",
      icon: <Tag size={72} className="text-black mb-6" />,
      features: [
        "Barcode generation & private label solutions",
        "Custom labels & packaging",
        "Compliance with industry standards",
      ],
    },
    {
      id: "Design-Development",
      title: "Design & Development",
      description: "Comprehensive design and development to bring your fashion ideas to life.",
      icon: <PencilRuler size={72} className="text-black mb-6" />,
      features: [
        "Australian-based design team",
        "Collaborative creative process",
        "From sketches to prototypes",
      ],
    },
    {
      id: "Logistics-Management",
      title: "Logistics Management",
      description: "Efficient logistics for timely delivery and seamless collaboration.",
      icon: <Truck size={72} className="text-black mb-6" />,
      features: [
        "Shipping & customs clearance",
        "On-time delivery",
        "DDP & EXW options",
        "Collaboration with freight forwarders",
      ],
    },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[18vh] w-full bg-neutral-50 flex items-center justify-center shadow-sm">
        <h1 className="text-5xl font-light text-neutral-900 uppercase tracking-widest">Our Services</h1>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-light uppercase tracking-widest mb-6 text-neutral-900">
            Premium Manufacturing Solutions
          </h2>
          <p className="text-neutral-600 text-lg">
            With 15 years of industry experience, MIYO Fashion provides comprehensive manufacturing services for fashion brands worldwide. From design and development to production and delivery, we handle every step with precision and care.
          </p>
        </div>

        {/* Service Sections as Alternating Left/Right Boxes */}
        <div className="max-w-3xl mx-auto flex flex-col gap-12">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl shadow-md p-10 flex flex-col md:flex-row items-center ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="mb-6 md:mb-0 md:mx-8 flex-shrink-0 self-center">{service.icon}</div>
              <div className="flex-1 w-full">
                <h3 className="text-xl font-semibold uppercase tracking-wider mb-3 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-600 mb-6 text-left">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-light uppercase tracking-widest mb-6">Ready to Start Your Project?</h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto text-lg">
            Contact us today to discuss your manufacturing needs and discover how we can bring your fashion vision to life.
          </p>
          <Link
            href="/contact-us"
            className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest rounded hover:bg-black hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

