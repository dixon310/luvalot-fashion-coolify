"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
// Remove this line:
// import { submitContactForm } from "../actions/contact-form"

// Metadata needs to be in a separate file for client components
// See app/contact-us/metadata.ts

export default function ContactUs() {
  const [formState, setFormState] = useState({
    errors: {} as Record<string, string>,
    message: "",
    isSubmitting: false,
    isSuccess: false,
  })

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
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-light text-center uppercase tracking-widest mb-16">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <div>
          <h2 className="text-xl font-light uppercase tracking-wider mb-8">Get In Touch</h2>
          <p className="text-neutral-600 text-justify mb-8">
            We'd love to hear from you! Whether you're exploring the latest in fashion production, curious about our on-trend styles,
             or want to learn more about our manufacturing capabilities, our team is here to help bring your vision to life. If you're 
             looking for a reliable fashion supplier, we're a full-service, one-stop production partner ready to support you from concept to delivery.
          </p>
          <p className="text-neutral-600 text-justify mb-8">
            Please provide your business name and location in the form to help us better understand your needs.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="mr-4 text-neutral-400" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-neutral-600">info@miyofashion.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="mr-4 text-neutral-400" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-neutral-600">
                  Enzo: +86 176 6509 2011 (English & Chinese)<br />
                  Hong Xia: +86 159 1840 5017 (Chinese only)
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="mr-4 text-neutral-400" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-neutral-600">Haizhu District, Guangzhou, China</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-light uppercase tracking-wider mb-8">Send Us a Message</h2>

          {formState.message && (
            <div
              className={`mb-6 p-4 ${formState.isSuccess ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
              role="alert"
              aria-live="polite"
            >
              {formState.message}
            </div>
          )}

          <form id="contact-form" onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-3 border-b ${formState.errors.name ? "border-red-500" : "border-neutral-300"} focus:outline-none focus:border-black`}
                  placeholder="Your Name"
                  required
                  aria-required="true"
                  aria-invalid={formState.errors.name ? "true" : "false"}
                />
                {formState.errors.name && (
                  <p className="mt-1 text-xs text-red-500" id="name-error">
                    {formState.errors.name}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-3 border-b ${formState.errors.email ? "border-red-500" : "border-neutral-300"} focus:outline-none focus:border-black`}
                  placeholder="Your Email"
                  required
                  aria-required="true"
                  aria-invalid={formState.errors.email ? "true" : "false"}
                />
                {formState.errors.email && (
                  <p className="mt-1 text-xs text-red-500" id="email-error">
                    {formState.errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessName" className="sr-only">
                  Business Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  className={`w-full px-4 py-3 border-b ${formState.errors.businessName ? "border-red-500" : "border-neutral-300"} focus:outline-none focus:border-black`}
                  placeholder="Business Name"
                  required
                  aria-required="true"
                  aria-invalid={formState.errors.businessName ? "true" : "false"}
                />
                {formState.errors.businessName && (
                  <p className="mt-1 text-xs text-red-500" id="businessName-error">
                    {formState.errors.businessName}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="location" className="sr-only">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  className={`w-full px-4 py-3 border-b ${formState.errors.location ? "border-red-500" : "border-neutral-300"} focus:outline-none focus:border-black`}
                  placeholder="Location"
                  required
                  aria-required="true"
                  aria-invalid={formState.errors.location ? "true" : "false"}
                />
                {formState.errors.location && (
                  <p className="mt-1 text-xs text-red-500" id="location-error">
                    {formState.errors.location}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`w-full px-4 py-3 border-b ${formState.errors.subject ? "border-red-500" : "border-neutral-300"} focus:outline-none focus:border-black`}
                placeholder="Subject"
                required
                aria-required="true"
                aria-invalid={formState.errors.subject ? "true" : "false"}
              />
              {formState.errors.subject && (
                <p className="mt-1 text-xs text-red-500" id="subject-error">
                  {formState.errors.subject}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                className={`w-full px-4 py-3 border-b ${formState.errors.message ? "border-red-500" : "border-neutral-300"} focus:outline-none focus:border-black`}
                placeholder="Your Message"
                required
                aria-required="true"
                aria-invalid={formState.errors.message ? "true" : "false"}
              ></textarea>
              {formState.errors.message && (
                <p className="mt-1 text-xs text-red-500" id="message-error">
                  {formState.errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="w-full border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors disabled:opacity-50"
              aria-busy={formState.isSubmitting}
            >
              {formState.isSubmitting ? (
                <>
                  <span className="inline-block animate-spin mr-2">&#9696;</span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}