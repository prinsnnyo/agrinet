"use client"

import Link from "next/  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t flex z-50 shadow-lg">
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 px-2 py-3 ${
              isActive 
                ? "text-green-600 border-t-2 border-green-600 -mt-[2px]" 
                : "text-muted-foreground"
            }`}
          >
            <item.icon className={`h-5 w-5 mb-1 ${isActive ? 'fill-green-100' : ''}`} />
            <span className="text-xs font-medium">{item.name}</span>
          </Link>
        )
      })}
    </div>athname } from "next/navigation"
import { Home, ShoppingBag, PlusCircle, MessageCircle, Truck } from "lucide-react"

export function MobileNav() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Marketplace",
      href: "/marketplace",
      icon: ShoppingBag,
    },
    {
      name: "Post Crop",
      href: "/post-crop",
      icon: PlusCircle,
    },
    {
      name: "Negotiations",
      href: "/negotiations",
      icon: MessageCircle,
    },
    {
      name: "Logistics",
      href: "/logistics",
      icon: Truck,
    },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t flex z-50 shadow-lg">
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 px-2 py-3 ${
              isActive ? "text-green-600 font-semibold" : "text-muted-foreground"
            }`}
          >
            <item.icon className={`h-5 w-5 mb-1 ${isActive ? "text-green-600" : "text-gray-500"}`} />
            <span className="text-xs font-medium">{item.name}</span>
          </Link>
        )
      })}
    </div>
  )
}
