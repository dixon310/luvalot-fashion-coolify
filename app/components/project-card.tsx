import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  link: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, link, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-3 sm:p-4 flex-grow">
        <h3 className="font-semibold text-lg sm:text-xl mb-1 sm:mb-2">{title}</h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{description}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-1.5 py-0.5 sm:px-2 sm:py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 pt-0">
        <Link
          href={link}
          target="_blank"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm hover:underline"
        >
          <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          View on GitHub
        </Link>
      </CardFooter>
    </Card>
  )
}

