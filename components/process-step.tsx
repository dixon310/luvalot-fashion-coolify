import { Ruler, PencilRuler, Scissors, Shirt, FactoryIcon, CheckCircle } from "lucide-react"

interface ProcessStepProps {
  number: number
  title: string
  description: string
  icon: string
}

export default function ProcessStep({ number, title, description, icon }: ProcessStepProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ruler":
        return <Ruler size={32} className="text-neutral-700" />
      case "pencil":
        return <PencilRuler size={32} className="text-neutral-700" />
      case "scissors":
        return <Scissors size={32} className="text-neutral-700" />
      case "shirt":
        return <Shirt size={32} className="text-neutral-700" />
      case "factory":
        return <FactoryIcon size={32} className="text-neutral-700" />
      case "check-circle":
        return <CheckCircle size={32} className="text-neutral-700" />
      default:
        return <Ruler size={32} className="text-neutral-700" />
    }
  }

  return (
    <div className="bg-white p-6 rounded shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">{getIcon(icon)}</div>
      </div>
      <h3 className="text-xl uppercase tracking-wider mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  )
}

