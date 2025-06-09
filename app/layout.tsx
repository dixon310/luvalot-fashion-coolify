import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
// import { baseMetadata } from "./metadata"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "MIYO Fashion - OEM and ODM Fashion Provider",
  description: "We protect our clients' designs strictly and all the below are from our own design team.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* You can add more icon links here if needed */}
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}



import './globals.css'