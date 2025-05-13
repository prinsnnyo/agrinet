"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
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

  // For the "Post Crop" text, we'll use a special handling for smaller screens
  const getDisplayName = (name: string) => {
    // On smaller screens, replace space with a line break for Post Crop
    if (name === "Post Crop") {
      return (
        <>
          <span className="sm:inline hidden">Post Crop</span>
          <span className="sm:hidden inline">Post<br/>Crop</span>
        </>
      );
    }
    return name;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t flex z-50">
      {navItems.map((item) => {
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center flex-1 px-1 py-2 ${
              isActive ? "text-green-600" : "text-muted-foreground"
            }`}
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-[0.65rem] font-medium text-center leading-tight">
              {getDisplayName(item.name)}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
