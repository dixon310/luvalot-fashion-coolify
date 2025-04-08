import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  title: string
  descriptions: string[]
  imageSrc: string
  id: string
}

export default function ProductCard({ title, descriptions, imageSrc, id }: ProductCardProps) {
  return (
    <div className="product-card group">
      <div className="product-card-image-container overflow-hidden">
        <Link href={`/products/${id}`}>
          <div className="relative h-[500px] w-full">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <h3 className="product-card-title mt-4">{title}</h3>
      <div className="product-card-description">
        {descriptions.map((desc, index) => (
          <p key={index} className="text-sm mb-1">
            {desc}
          </p>
        ))}
      </div>
      <Link href={`/products/${id}`} className="see-more-button">
        View Details
      </Link>
    </div>
  )
}

