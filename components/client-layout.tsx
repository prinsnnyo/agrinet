"use client"

import { ReactNode } from "react"
import { usePathname } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav"
import { useIsMobile } from "@/hooks/use-mobile"

export function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  
  // Don't show mobile nav on auth pages
  const isAuthPage = 
    pathname?.includes('/sign-in') || 
    pathname?.includes('/sign-up') || 
    pathname?.includes('/forgot-password');

  // Show mobile nav only on mobile devices and non-auth pages
  const showMobileNav = isMobile && !isAuthPage;

  return (
    <>
      <div className={showMobileNav ? "pb-16" : ""}>
        {children}
      </div>
      {showMobileNav && <MobileNav />}
    </>
  )
}
