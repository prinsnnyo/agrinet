'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children, ...props }: React.PropsWithChildren<{ [key: string]: any }>) {
  const [mounted, setMounted] = React.useState(false)
  
  // After mounting, we have access to the theme
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Force consistency between server and initial client render
  // This ensures we don't get hydration mismatches
  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
