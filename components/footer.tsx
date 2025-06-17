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
              MIYO Fashion is a premier OEM and ODM fashion provider with 15 years of experience, specializing in
              creating unique designs for clothing brands worldwide.
            </p>
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

          <div>
            <h3 className="font-medium text-lg uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/Pricing-Flexibility"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  Pricing Flexibility
                </Link>
              </li>
              <li>
                <Link
                  href="/services/One-Stop-Services"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  One-Stop Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/Private-Label-Capabilities"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  Private Label Capabilities
                </Link>
              </li>
              <li>
                <Link href="/services/sampling" className="text-neutral-600 hover:text-neutral-800 transition-colors">
                  Sampling
                </Link>
              </li>
              <li>
                <Link
                  href="/services/Design-Development"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  Design & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/Logistics-Management"
                  className="text-neutral-600 hover:text-neutral-800 transition-colors"
                >
                  Logistics Management
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
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail size={16} className="text-neutral-500 mr-2 mt-0.5" />
                <span className="text-neutral-600">info@miyofashion.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={16} className="text-neutral-500 mr-2 mt-0.5" />
                <span className="text-neutral-600">
                  Enzo: +86 176 6509 2011 (English & Chinese)<br />
                  Hong Xia: +86 159 1840 5017 (Chinese only)
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-neutral-500 mr-2 mt-0.5" />
                <span className="text-neutral-600">Haizhu District, Guangzhou, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-neutral-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} MIYO Fashion. All rights reserved.
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

