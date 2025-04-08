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
  title: "Luvalot Clothing - OEM and ODM Fashion Provider",
  description: "We protect our clients' designs strictly and all the below are from our own design team.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
        />
        <link rel="canonical" href="https://luvalotfashion.com" />
      </head>
      <body className={montserrat.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'