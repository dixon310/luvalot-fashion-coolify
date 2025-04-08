"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs: FaqItem[]
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-neutral-200 rounded overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
            onClick={() => toggleFaq(index)}
          >
            <span className="font-medium">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp size={20} className="flex-shrink-0 ml-2" />
            ) : (
              <ChevronDown size={20} className="flex-shrink-0 ml-2" />
            )}
          </button>

          <div
            className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <p className="text-neutral-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

