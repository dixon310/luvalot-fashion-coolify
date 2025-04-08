import type { Metadata } from "next"

// Base metadata object that can be extended by individual pages
export const baseMetadata: Metadata = {
  metadataBase: new URL("https://luvalotclothing.com"),
  title: {
    template: "%s | Luvalot Clothing",
    default: "Luvalot Clothing - Premium OEM and ODM Fashion Provider",
  },
  description:
    "Premium clothing manufacturing services with 15+ years of industry experience. Offering private label, design & development, and sustainable production solutions.",
  keywords: [
    "fashion manufacturing",
    "clothing OEM",
    "ODM fashion",
    "sustainable fashion production",
    "private label clothing",
  ],
  authors: [{ name: "Luvalot Fashion" }],
  creator: "Luvalot Fashion",
  publisher: "Luvalot Fashion",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luvalotclothing.com",
    siteName: "Luvalot Clothing",
    title: "Luvalot Clothing - Premium OEM and ODM Fashion Provider",
    description:
      "Premium clothing manufacturing services with 15+ years of industry experience. Offering private label, design & development, and sustainable production solutions.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Luvalot Fashion - Premium Clothing Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luvalot Clothing - Premium OEM and ODM Fashion Provider",
    description:
      "Premium clothing manufacturing services with 15+ years of industry experience. Offering private label, design & development, and sustainable production solutions.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

