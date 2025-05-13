"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, ShoppingBag, PlusCircle, MessageCircle, Truck } from "lucide-react"

export function IOSTabBar() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Home",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Market",
      href: "/marketplace",
      icon: ShoppingBag,
    },
    {
      name: "Post",
      href: "/post-crop",
      icon: PlusCircle,
    },
    {
      name: "Negotiate",
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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 z-50 shadow-md">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center px-2 py-1 ${
              isActive ? "text-green-600" : "text-[#8E8E93]"
            }`}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.name}</span>
          </Link>
        )
      })}
    </div>
  )
}
