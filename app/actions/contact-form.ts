"use server"

import { z } from "zod"

// Define a schema for form validation
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof ContactFormSchema>

export async function submitContactForm(formData: FormData) {
  // Extract form data
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  const data = { name, email, subject, message }

  // Validate form data
  const validationResult = ContactFormSchema.safeParse(data)

  if (!validationResult.success) {
    // Return validation errors
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors,
    }
  }

  try {
    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Mailgun, etc.
    // 2. Store the message in a database
    // 3. Notify admins about the new message

    // For demonstration, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Log the form data (for demonstration purposes)
    console.log("Contact form submission:", data)

    // Return success response
    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: "There was an error sending your message. Please try again later.",
    }
  }
}

