"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Menu, X } from "lucide-react"
import TikTokIcon from "./tiktok-icon"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile screen size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Close menu when resizing to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false)
    }
  }, [isMobile])

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isMenuOpen])

  return (
    <header className="py-6 px-4 relative">
      <div className="container mx-auto">
        <div className="flex justify-end mb-4">
          <div className="flex space-x-4">
            <Link
              href="https://www.instagram.com/fashion_miyo/"
              aria-label="Instagram"
              className="text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@miyo_fashion"
              aria-label="YouTube"
              className="text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              <Youtube size={20} />
            </Link>
            <Link
              href="https://www.tiktok.com/@miyo_fashion"
              aria-label="TikTok"
              className="text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              <TikTokIcon size={20} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full flex justify-between items-center md:justify-center">
            <Link href="/" className="mb-4">
              <div className="relative w-36 h-36">
                <Image
                  src="/MIYO FASHION LOGO.png"
                  alt="MIYO Fashion"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center space-x-6">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/factory-tour" className="nav-link">
              Factory Tour
            </Link>
            <Link href="/contact-us" className="nav-link">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <div className="relative w-28 h-28">
                  <Image
                    src="/MIYO FASHION LOGO.png"
                    alt="MIYO Fashion"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
              <button className="p-2 focus:outline-none" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col items-center space-y-6 pt-8">
              <Link href="/" className="text-xl uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/services" className="text-xl uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>
                Services
              </Link>
              <Link href="/about" className="text-xl uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link
                href="/factory-tour"
                className="text-xl uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Factory Tour
              </Link>
              <Link
                href="/contact-us"
                className="text-xl uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>

            <div className="flex justify-center space-x-6 mt-12">
              <Link
                href="https://www.instagram.com/fashion_miyo/"
                aria-label="Instagram"
                className="text-neutral-500 hover:text-neutral-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://www.youtube.com/@miyo_fashion"
                aria-label="YouTube"
                className="text-neutral-500 hover:text-neutral-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Youtube size={24} />
              </Link>
              <Link
                href="https://www.tiktok.com/@miyo_fashion"
                aria-label="TikTok"
                className="text-neutral-500 hover:text-neutral-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <TikTokIcon size={24} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}