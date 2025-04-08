export function OrganizationStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Luvalot Fashion",
    url: "https://luvalotfashion.com",
    logo: "https://luvalotfashion.com/images/logo.png",
    sameAs: [
      "https://instagram.com/luvalotfashion",
      "https://facebook.com/luvalotfashion",
      "https://youtube.com/luvalotfashion",
      "https://tiktok.com/@luvalotfashion",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-123-456-7890",
      contactType: "customer service",
      email: "info@luvalotfashion.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Fashion Street, Design District",
      addressLocality: "City",
      addressRegion: "State",
      postalCode: "12345",
      addressCountry: "Country",
    },
    description:
      "Premium clothing manufacturing services with 15+ years of industry experience. Offering private label, design & development, and sustainable production solutions.",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

export function ServiceStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fashion Manufacturing",
    provider: {
      "@type": "Organization",
      name: "Luvalot Fashion",
      url: "https://luvalotfashion.com",
    },
    areaServed: "Worldwide",
    description:
      "Premium clothing manufacturing services including private label, design & development, and sustainable production solutions.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: "1000",
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

