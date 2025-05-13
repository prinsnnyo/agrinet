import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface IOSPageHeaderProps {
  title: string
  backLink?: string
  backText?: string
}

export function IOSPageHeader({ title, backLink, backText = "Back" }: IOSPageHeaderProps) {
  return (
    <div className="flex items-center h-11 mb-4">
      {backLink && (
        <Link href={backLink} className="flex items-center justify-center text-green-600 bg-white p-1.5 rounded-full shadow-sm">
          <ArrowLeft className="h-4 w-4" />
        </Link>
      )}
      <h1 className="text-3xl font-bold text-[#111111] flex-1 ml-2">{title}</h1>
    </div>
  )
}
