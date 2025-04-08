import Link from "next/link"
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react"
import TikTokIcon from "./tiktok-icon"

export default function Footer() {
  return (
    <footer className="bg-neutral-50 py-16 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-medium text-lg uppercase tracking-wider mb-4">About Us</h3>
            <p className="text-neutral-600 text-sm mb-4">
              Luvalot Clothing is a premier OEM and ODM fashion provider with 15 years of experience, specializing in
              creating unique designs for clothing brands worldwide.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                <Youtube size={20} />
              </Link>
              <Link
                href="https://tiktok.com"
                aria-label="TikTok"
                className="text-neutral-500 hover:text-neutral-800 transition-colors"
              >
                <TikTokIcon size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/private-label"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  Private Label Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/design-development"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  Design & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sustainable-production"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  Sustainable Production
                </Link>
              </li>
              <li>
                <Link href="/services/sampling" className="text-neutral-600 hover:text-neutral-800 transition-colors">
                  Sampling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/quality-control"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  Quality Control
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-neutral-600 hover:text-neutral-800 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/factory-tour" className="text-neutral-600 hover:text-neutral-800 transition-colors">
                  Factory Tour
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-neutral-600 hover:text-neutral-800 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-neutral-600 hover:text-neutral-800 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-600 hover:text-neutral-800 transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail size={16} className="text-neutral-500 mr-2 mt-0.5" />
                <span className="text-neutral-600">info@luvalotfashion.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="text-neutral-500 mr-2 mt-0.5" />
                <span className="text-neutral-600">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-neutral-500 mr-2 mt-0.5" />
                <span className="text-neutral-600">123 Fashion Street, Design District, City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-neutral-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Luvalot Fashion. All rights reserved.
          </p>

          <div className="flex space-x-6 text-xs uppercase tracking-wider">
            <Link href="/terms" className="text-neutral-500 hover:text-neutral-800 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-neutral-500 hover:text-neutral-800 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/returns" className="text-neutral-500 hover:text-neutral-800 transition-colors">
              Returns & Warranty
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

