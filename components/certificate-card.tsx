import Image from "next/image"

interface CertificateCardProps {
  title: string
  description: string
  imageSrc: string
}

export default function CertificateCard({ title, description, imageSrc }: CertificateCardProps) {
  return (
    <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow text-center">
      <div className="flex justify-center mb-4">
        <div className="relative w-56 h-24">
          <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-contain" />
        </div>
      </div>
      <h3 className="text-lg uppercase tracking-wider mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm">{description}</p>
    </div>
  )
}

