import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Default to false during server-side rendering to avoid hydration mismatch
  const [isMobile, setIsMobile] = React.useState<boolean>(false)
  const [hasMounted, setHasMounted] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Mark as mounted first
    setHasMounted(true)
    
    // Then check if mobile
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Initial check
    checkIfMobile()
    
    // Add event listener for resize
    window.addEventListener("resize", checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Use isMobile value only after component has mounted
  // This ensures we return the same value during SSR and initial client render
  return hasMounted ? isMobile : false
}
