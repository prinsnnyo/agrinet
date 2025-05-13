import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function IOSNavBar({ title, backLink }: { title: string; backLink: string }) {
  return (
    <div className="flex items-center h-11 mb-4">
      <Link href={backLink} className="flex items-center justify-center text-green-600 bg-white p-1.5 rounded-full shadow-sm">
        <ArrowLeft className="h-4 w-4" />
      </Link>
      <h1 className="text-lg font-semibold text-[#111111] flex-1 text-center">{title}</h1>
      <div className="w-16"></div> {/* Spacer to center the title */}
    </div>
  )
}
