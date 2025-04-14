import type { MetadataRoute } from "next"

export const dynamic = "force-static"
export const revalidate = 60 // Required for static export (value in seconds)

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://luvalotfashion.com"

  return [
    {
      url: baseUrl,
      lastModified: "2025-04-14",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2025-04-14",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: "2025-04-14",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/factory-tour`,
      lastModified: "2025-04-14",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: "2025-04-14",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: "2025-04-14",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ]
}
