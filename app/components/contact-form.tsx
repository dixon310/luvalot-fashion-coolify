"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setMessage("Thanks for your message! I'll get back to you soon.")
        // Reset the form
        ;(e.target as HTMLFormElement).reset()
      } else {
        setMessage("Something went wrong. Please try again.")
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-3 sm:p-6">
      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Web3Forms Access Key - Replace with your actual access key */}
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            Name
          </label>
          <Input id="name" name="name" required className="text-sm" />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            Email
          </label>
          <Input id="email" name="email" type="email" required className="text-sm" />
        </div>
        <div>
          <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">
            Message
          </label>
          <Textarea id="message" name="message" required className="text-sm min-h-[100px] sm:min-h-[120px]" />
        </div>
        <Button type="submit" className="w-full text-sm" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && <p className="text-xs sm:text-sm text-center mt-3 sm:mt-4 text-muted-foreground">{message}</p>}
      </form>
    </Card>
  )
}

