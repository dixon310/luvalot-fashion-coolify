import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore our collection of high-quality fashion products including dresses, tops, skirts, and pants manufactured with precision and care.",
  openGraph: {
    title: "Fashion Products | Luvalot Fashion",
    description:
      "Explore our collection of high-quality fashion products including dresses, tops, skirts, and pants manufactured with precision and care.",
  },
}

export default function Products() {
  const featuredProducts = [
    {
      id: "classic-sexy-fishtail-maxi-dress",
      title: "Classic Sexy Fishtail Maxi Dress",
      description: "Backless with Unique Design Featuring Bust",
      imageSrc: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "dress-up-or-dress-down",
      title: "Dress Up or Dress Down",
      description: "Vintage Lace Trim on the Bust",
      imageSrc: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "asymmetric-sleeve",
      title: "Asymmetric Sleeve",
      description: "Hot Selling One Shoulder Design",
      imageSrc: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "908-low-rise-y2k-skirt",
      title: "908 Low Rise Y2K skirt",
      description: "Big Pocket Design",
      imageSrc: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "casual-blouse",
      title: "Casual Blouse",
      description: "Comfortable and Stylish Design",
      imageSrc: "/placeholder.svg?height=800&width=600",
    },
    {
      id: "summer-dress",
      title: "Summer Dress",
      description: "Light and Airy for Hot Days",
      imageSrc: "/placeholder.svg?height=800&width=600",
    },
  ]

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[40vh] w-full">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Products Banner"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-light text-white uppercase tracking-widest">Our Products</h1>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="overflow-hidden">
                <div className="relative h-[500px] w-full">
                  <Image
                    src={product.imageSrc || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="font-medium text-base uppercase tracking-wider">{product.title}</h3>
                  <p className="text-sm text-neutral-600 mt-1">{product.description}</p>
                  <div className="mt-2 text-xs uppercase tracking-widest group-hover:text-neutral-500 transition-colors">
                    View Details
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-neutral-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-light text-center uppercase tracking-widest mb-12">Shop By Category</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link href="/products/category/dresses" className="group">
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Dresses"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
                  <h3 className="text-white text-xl uppercase tracking-widest">Dresses</h3>
                </div>
              </div>
            </Link>

            <Link href="/products/category/tops" className="group">
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Tops"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
                  <h3 className="text-white text-xl uppercase tracking-widest">Tops</h3>
                </div>
              </div>
            </Link>

            <Link href="/products/category/skirts" className="group">
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Skirts"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
                  <h3 className="text-white text-xl uppercase tracking-widest">Skirts</h3>
                </div>
              </div>
            </Link>

            <Link href="/products/category/pants" className="group">
              <div className="relative h-[300px] overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Pants"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all">
                  <h3 className="text-white text-xl uppercase tracking-widest">Pants</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

