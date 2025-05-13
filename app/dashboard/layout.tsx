import type React from "react"
import { IOSTabBar } from "@/components/ios-tab-bar"
import { IOSHomeIndicator } from "@/components/ios-home-indicator"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F8F5]">
      <main className="flex-1 pb-[83px]">{children}</main>

      <IOSTabBar />
      <IOSHomeIndicator />
    </div>
  )
}
