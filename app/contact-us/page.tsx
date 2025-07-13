"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import FaqAccordion from "@/components/faq-accordion"
import Image from "next/image"

// Metadata needs to be in a separate file for client components
// See app/contact-us/metadata.ts

export default function ContactUs() {
  const [formState, setFormState] = useState({
    errors: {} as Record<string, string>,
    message: "",
    isSubmitting: false,
    isSuccess: false,
  })

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
      answer: "We don't have a public website, but you can join our mailing list to receive weekly updates on new styles and collections.",
    },
    {
      question: "What certifications or audits does your facility hold? (e.g., OEKO-TEX, GOTS)",
      answer: "Our facilities are SMETA-audited and SEDEX-compliant.",
    },
    {
      question: "How do you typically collaborate with new fashion clients? (Design rounds, tech packs, fitting process, etc.)",
      answer:
        "We tailor our collaboration process to each customer's preferences. Some customers work with us through tech packs, sketches, or mood boards, while others choose from our pre-developed or in-stock designs.",
    },
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Set submitting state
    setFormState((prev) => ({ ...prev, isSubmitting: true, message: "" }))

    // Basic validation
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const businessName = formData.get("businessName") as string
    const location = formData.get("location") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    const errors: Record<string, string> = {}

    if (!name || name.trim() === "") {
      errors.name = "Name is required"
    }

    if (!email || email.trim() === "") {
      errors.email = "Email is required"
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = "Please enter a valid email address"
    }

    if (!businessName || businessName.trim() === "") {
      errors.businessName = "Business name is required"
    }

    if (!location || location.trim() === "") {
      errors.location = "Location is required"
    }

    if (!subject || subject.trim() === "") {
      errors.subject = "Subject is required"
    }

    if (!message || message.trim() === "") {
      errors.message = "Message is required"
    }

    // If there are validation errors, show them
    if (Object.keys(errors).length > 0) {
      setFormState({
        errors,
        message: "Please correct the errors in the form.",
        isSubmitting: false,
        isSuccess: false,
      })
      return
    }

    try {
      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c5d29c27-3102-4e60-9b9f-27477f324393", // Replace with your actual Web3Forms access key
          name,
          email,
          business_name: businessName,
          location,
          subject,
          message,
          from_name: "MIYO Fashion Contact Form",
        }),
      })

      const result = await response.json()

      if (result.success) {
        // Reset the form
        form.reset()

        // Show success message
        setFormState({
          errors: {},
          message: "Thank you for your message. We'll get back to you soon!",
          isSubmitting: false,
          isSuccess: true,
        })

        // Focus on the success message for screen readers
        const messageElement = document.querySelector('[role="alert"]')
        if (messageElement) {
          ;(messageElement as HTMLElement).focus()
        }
      } else {
        throw new Error(result.message || "Something went wrong")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormState({
        errors: {},
        message: "An unexpected error occurred. Please try again later.",
        isSubmitting: false,
        isSuccess: false,
      })
    }
  }

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[40vh] w-full">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Contact Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-light text-white uppercase tracking-widest">Contact Us</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100 h-fit sticky top-8">
              <h2 className="text-2xl font-light uppercase tracking-wider mb-8">Get In Touch</h2>
              
              <p className="text-neutral-600 mb-8 leading-relaxed">
                We'd love to hear from you! Whether you're exploring the latest in fashion production, curious about our on-trend styles,
                or want to learn more about our manufacturing capabilities, our team is here to help bring your vision to life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                    <Mail className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-neutral-900 mb-1">Email</h3>
                    <p className="text-neutral-600">info@miyofashion.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                    <Phone className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-neutral-900 mb-1">Phone</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      Enzo: +86 176 6509 2011<br />
                      <span className="text-xs text-neutral-500">(English & Chinese)</span><br />
                      Hong Xia: +86 159 1840 5017<br />
                      <span className="text-xs text-neutral-500">(Chinese only)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                    <MapPin className="w-5 h-5 text-neutral-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-neutral-900 mb-1">Address</h3>
                    <p className="text-neutral-600">Haizhu District, Guangzhou, China</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-100">
                <p className="text-sm text-neutral-500 italic">
                  Please provide your business name and location in the form to help us better understand your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-light uppercase tracking-wider mb-8">Send Us a Message</h2>

              {formState.message && (
                <div
                  className={`mb-8 p-4 rounded-lg ${
                    formState.isSuccess 
                      ? "bg-green-50 text-green-800 border border-green-200" 
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                  role="alert"
                  aria-live="polite"
                >
                  {formState.message}
                </div>
              )}

              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all ${
                        formState.errors.name ? "border-red-300 bg-red-50" : "border-neutral-300 hover:border-neutral-400"
                      }`}
                      placeholder="Enter your full name"
                      required
                      aria-required="true"
                      aria-invalid={formState.errors.name ? "true" : "false"}
                    />
                    {formState.errors.name && (
                      <p className="mt-2 text-sm text-red-600" id="name-error">
                        {formState.errors.name}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all ${
                        formState.errors.email ? "border-red-300 bg-red-50" : "border-neutral-300 hover:border-neutral-400"
                      }`}
                      placeholder="Enter your email address"
                      required
                      aria-required="true"
                      aria-invalid={formState.errors.email ? "true" : "false"}
                    />
                    {formState.errors.email && (
                      <p className="mt-2 text-sm text-red-600" id="email-error">
                        {formState.errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-neutral-700 mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all ${
                        formState.errors.businessName ? "border-red-300 bg-red-50" : "border-neutral-300 hover:border-neutral-400"
                      }`}
                      placeholder="Enter your business name"
                      required
                      aria-required="true"
                      aria-invalid={formState.errors.businessName ? "true" : "false"}
                    />
                    {formState.errors.businessName && (
                      <p className="mt-2 text-sm text-red-600" id="businessName-error">
                        {formState.errors.businessName}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all ${
                        formState.errors.location ? "border-red-300 bg-red-50" : "border-neutral-300 hover:border-neutral-400"
                      }`}
                      placeholder="Enter your location"
                      required
                      aria-required="true"
                      aria-invalid={formState.errors.location ? "true" : "false"}
                    />
                    {formState.errors.location && (
                      <p className="mt-2 text-sm text-red-600" id="location-error">
                        {formState.errors.location}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all ${
                      formState.errors.subject ? "border-red-300 bg-red-50" : "border-neutral-300 hover:border-neutral-400"
                    }`}
                    placeholder="What can we help you with?"
                    required
                    aria-required="true"
                    aria-invalid={formState.errors.subject ? "true" : "false"}
                  />
                  {formState.errors.subject && (
                    <p className="mt-2 text-sm text-red-600" id="subject-error">
                      {formState.errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all resize-vertical ${
                      formState.errors.message ? "border-red-300 bg-red-50" : "border-neutral-300 hover:border-neutral-400"
                    }`}
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                    required
                    aria-required="true"
                    aria-invalid={formState.errors.message ? "true" : "false"}
                  ></textarea>
                  {formState.errors.message && (
                    <p className="mt-2 text-sm text-red-600" id="message-error">
                      {formState.errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={formState.isSubmitting}
                  className="w-full bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-medium"
                  aria-busy={formState.isSubmitting}
                >
                  {formState.isSubmitting ? (
                    <>
                      <span className="inline-block animate-spin mr-2">⟳</span>
                      Sending Message...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light uppercase tracking-widest mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Find answers to common questions about our manufacturing services, processes, and capabilities.
            </p>
          </div>

          <FaqAccordion faqs={faqs} />

          <div className="text-center mt-12 pt-8 border-t border-neutral-200">
            <p className="text-neutral-600 mb-6">Still have questions? We're here to help.</p>
            <a
              href="#contact-form"
              className="inline-block border-2 border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors rounded-lg"
            >
              Ask a Question
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}