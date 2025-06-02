import Link from "next/link"
import Image from "next/image"
import HeroSlider from "@/components/hero-slider"
import { Instagram, Youtube, Globe, Clock, Leaf, Award } from "lucide-react"
import TikTokIcon from "@/components/tiktok-icon"
import ProcessStep from "@/components/process-step"
import CertificateCard from "@/components/certificate-card"
import FaqAccordion from "@/components/faq-accordion"
import { OrganizationStructuredData, ServiceStructuredData } from "@/components/structured-data"

export default function Home() {
  const processSteps = [
    {
      id: 1,
      title: "Research & Development",
      description:
        "Our thorough R&D process ensures we stay ahead of trends and develop innovative solutions for your brand.",
      icon: "ruler",
    },
    {
      id: 2,
      title: "In-house Design",
      description: "Our talented design team creates bespoke productions tailored to your brand's unique identity.",
      icon: "pencil",
    },
    {
      id: 3,
      title: "Fabric Sourcing",
      description: "We source high-quality fabrics, including sustainable options, to meet your specific requirements.",
      icon: "scissors",
    },
    {
      id: 4,
      title: "Sample Development",
      description: "We develop more than 100 samples weekly, ensuring your vision is perfectly realized.",
      icon: "shirt",
    },
    {
      id: 5,
      title: "Production",
      description:
        "With multiple factory sites in China, Vietnam, and Malaysia, we ensure efficient and quality production.",
      icon: "factory",
    },
    {
      id: 6,
      title: "Quality Control",
      description: "Rigorous quality control processes ensure every garment meets our high standards.",
      icon: "check-circle",
    },
  ]

  const certificates = [
    {
      id: "C_SMETA",
      title: "China: SMETA",
      description: "",
      imageSrc: "/placeholder.svg?height=200&width=200&text=GOTS",
    },
    {
      id: "C_SEDEX",
      title: "China: SEDEX",
      description: "",
      imageSrc: "/placeholder.svg?height=200&width=200&text=OEKO-TEX",
    },
    {
      id: "V_WRAP",
      title: "Vietnam: WRAP",
      description: "",
      imageSrc: "/placeholder.svg?height=200&width=200&text=ISO9001",
    },
    {
      id: "V_SEDEX",
      title: "Vietnam: SEDEX",
      description: "",
      imageSrc: "/placeholder.svg?height=200&width=200&text=BCI",
    },
  ]

  const faqs = [
    {
      question: "Where is your factory located? (City & Country)",
      answer: (
        <>
          <strong>China:</strong>Guangzhou<br />
          <strong>Vietnam:</strong>Ho Chi Minh City
        </>
      ),
    },
    {
      question: "What is your minimum order quantity (MOQ) per style and per total order?",
      answer: (
        <>
          <strong>Development:</strong> 300 pieces per style, across two colours<br />
          <strong>Wholesale:</strong> 100 pieces per style, per colour
        </>
      ),
    },
    {
      question: "Do you specialise in any particular types of dresses? (e.g., maxi, wrap, occasion, casual)",
      answer:
        "We specialise in a wide range of fashion apparel, including dresses (maxi, midi, mini), tops, skirts, bodysuits, shorts, jackets, and pants — for both casual and occasion wear.",
    },
    {
      question: "Do you offer full package production (design, sampling, bulk), or only CMT services?",
      answer:
        "Yes, we offer full-package production, including design, sourcing, fitting, quality control, and delivery.",
    },
    {
      question: "Can you source fabrics, linings, and trims such as zippers, buttons, and embellishments?",
      answer:
        "Yes, we can source all materials, including fabrics, linings, zippers, buttons, and embellishments. We also work with certified recyclable materials.",
    },
    {
      question: "What fabrics do you commonly use for dresses? (e.g., rayon, viscose, cotton voile, chiffon)",
      answer:
        "We work with a wide variety of fabrics— including high stretch polyester, satin, viscose, chiffon, linen, velvet, woven, knit, lace, mesh and more.",
    },
    {
      question: "What are your typical lead times for sample development and bulk production?",
      answer: (
        <>
          <strong>Samples:</strong> 2–3 weeks<br />
          <strong>Bulk production:</strong> 3–4 weeks (depending on the order size and complexity)
        </>
      ),
    },
    {
      question: "Do you offer services for custom prints, embroidery, or beading?",
      answer: "Yes, we offer custom prints, embroidery, and beading services.",
    },
    {
      question: "Do you provide custom labels, hangtags, and packaging?",
      answer: "Yes, we can provide custom labels, hangtags, and packaging based on your brand requirements.",
    },
    {
      question: "Do you manage shipping and export documentation?",
      answer: "Yes, we handle all logistics, including shipping and export documentation.",
    },
    {
      question: "Do you have a website or digital catalogue to view past styles?",
      answer: "We don’t have a public website, but you can join our mailing list to receive weekly updates on new styles and collections.",
    },
    {
      question: "What certifications or audits does your facility hold? (e.g., OEKO-TEX, GOTS)",
      answer: "Our facilities are SMETA-audited and SEDEX-compliant.",
    },
    {
      question: "How do you typically collaborate with new fashion clients? (Design rounds, tech packs, fitting process, etc.)",
      answer:
        "We tailor our collaboration process to each customer’s preferences. Some customers work with us through tech packs, sketches, or mood boards, while others choose from our pre-developed or in-stock designs.",
    },
  ]

  return (
    <>
      <OrganizationStructuredData />
      <ServiceStructuredData />
      <div>
        {/* Hero Section - Image Slider */}
        <HeroSlider
          slides={[
            {
              imageSrc: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1920&auto=format&fit=crop",
              heading: "Private Label Manufacturing",
              subheading: "Premium clothing production with 15 years of industry experience",
              buttonText: "Explore Our Services",
              buttonLink: "/services",
            },
            {
              imageSrc: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=1920&auto=format&fit=crop",
              heading: "Bespoke Design & Development",
              subheading: "From concept to creation with our expert in-house design team",
              buttonText: "Our Process",
              buttonLink: "#process",
            },
            {
              imageSrc: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1920&auto=format&fit=crop",
              heading: "Sustainable Manufacturing",
              subheading: "Eco-friendly options and responsible production practices",
              buttonText: "Learn More",
              buttonLink: "/services#sustainable-production",
            },
          ]}
        />

        {/* Why Trust Us Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-light text-center uppercase tracking-widest mb-16">Why Trust Us</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Award size={40} className="text-neutral-700" />
                </div>
                <h3 className="text-xl uppercase tracking-wider mb-4">15+ Years Experience</h3>
                <p className="text-neutral-600">
                  With over 15 years in the industry, we've built long-standing relationships with clients who trust our
                  expertise.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Globe size={40} className="text-neutral-700" />
                </div>
                <h3 className="text-xl uppercase tracking-wider mb-4">Global Reach</h3>
                <p className="text-neutral-600">
                  We work with customers across the USA, UK, Australia, Europe, and Asia, delivering quality worldwide.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Clock size={40} className="text-neutral-700" />
                </div>
                <h3 className="text-xl uppercase tracking-wider mb-4">Short Lead Times</h3>
                <p className="text-neutral-600">
                  Our efficient processes and dedicated teams ensure quick turnaround times without compromising
                  quality.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="flex justify-center mb-4">
                  <Leaf size={40} className="text-neutral-700" />
                </div>
                <h3 className="text-xl uppercase tracking-wider mb-4">Sustainable Options</h3>
                <p className="text-neutral-600">
                  We offer eco-friendly materials and sustainable manufacturing practices for environmentally conscious
                  brands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section id="process" className="py-20 bg-neutral-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-light text-center uppercase tracking-widest mb-16">Our Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {processSteps.map((step) => (
                <ProcessStep
                  key={step.id}
                  number={step.id}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                />
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Learn More About Our Process
              </Link>
            </div>
          </div>
        </section>

                {/* Certificates Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-light text-center uppercase tracking-widest mb-16">Our Certifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  title={cert.title}
                  description={cert.description}
                  imageSrc={cert.imageSrc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Factory Locations Section */}
        <section className="py-20 bg-neutral-50 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-light text-center uppercase tracking-widest mb-16">Our Factory Locations</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 justify-center">
              <div className="text-center">
                <div className="relative h-[250px] w-full overflow-hidden mb-6 rounded">
                  <Image
                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?q=80&w=600&auto=format&fit=crop"
                    alt="China Factory"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl uppercase tracking-wider mb-2">China</h3>
                <p className="text-neutral-600">
                  Our primary manufacturing hub with comprehensive facilities for all production needs.
                </p>
              </div>

              <div className="text-center">
                <div className="relative h-[250px] w-full overflow-hidden mb-6 rounded">
                  <Image
                    src="https://images.unsplash.com/photo-1589792923962-537704632910?q=80&w=2940&auto=format&fit=crop"
                    alt="Vietnam Factory"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl uppercase tracking-wider mb-2">Vietnam</h3>
                <p className="text-neutral-600">
                  Specialized in sportswear and technical garments with advanced equipment.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/factory-tour"
                className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                View Factory Tour
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-center uppercase tracking-widest mb-16">
              Frequently Asked Questions
            </h2>

            <FaqAccordion faqs={faqs} />

            <div className="text-center mt-12">
              <p className="text-neutral-600 mb-6">Have more questions? We're here to help.</p>
              <Link
                href="/contact-us"
                className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Connect With Us Section */}
        <section className="py-20 bg-neutral-50 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-light uppercase tracking-widest mb-8">Connect With Us</h2>
            <p className="text-neutral-600 mb-12 max-w-2xl mx-auto">
              Follow us on social media for the latest updates, behind-the-scenes content, and manufacturing insights.
            </p>

            <div className="flex justify-center space-x-8 mb-12">
              <Link href="https://instagram.com" className="group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full border border-neutral-300 group-hover:border-black transition-colors mb-2">
                    <Instagram size={28} className="text-neutral-700" />
                  </div>
                  <span className="text-sm uppercase tracking-wider">Instagram</span>
                </div>
              </Link>

              <Link href="https://youtube.com" className="group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full border border-neutral-300 group-hover:border-black transition-colors mb-2">
                    <Youtube size={28} className="text-neutral-700" />
                  </div>
                  <span className="text-sm uppercase tracking-wider">YouTube</span>
                </div>
              </Link>

              <Link href="https://tiktok.com" className="group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full border border-neutral-300 group-hover:border-black transition-colors mb-2">
                    <TikTokIcon size={28} className="text-neutral-700" />
                  </div>
                  <span className="text-sm uppercase tracking-wider">TikTok</span>
                </div>
              </Link>
            </div>

            <div className="max-w-md mx-auto">
              <h3 className="text-xl uppercase tracking-wider mb-4">Subscribe to Our Newsletter</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-grow px-4 py-3 border border-neutral-300 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}