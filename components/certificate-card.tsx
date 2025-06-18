import Image from "next/image"

interface CertificateCardProps {
  title: string
  description: string
  imageSrc: string
}

export default function CertificateCard({ title, description, imageSrc }: CertificateCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 text-center border border-100">
      <div className="flex justify-center mb-6">
        <div className="relative w-40 h-40 flex items-center justify-center bg-gray-50 rounded-lg p-4">
          <Image 
            src={imageSrc || "/placeholder.svg"} 
            alt={title} 
            fill 
            className="object-contain p-2" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
      </div>
      <h3 className="text-lg font-medium uppercase tracking-wider mb-3 text-gray-800">{title}</h3>
      <p className="text-neutral-600 text-sm leading-relaxed">{description}</p>
    </div>
  )
}