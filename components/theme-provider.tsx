'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false)
  
  // After mounting, we have access to the theme
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Force consistency between server and initial client render
  // This ensures we don't get hydration mismatches
  const initialRender = !mounted ? (
    <div className="invisible">{children}</div>
  ) : (
    children
  )

  return <NextThemesProvider {...props}>{initialRender}</NextThemesProvider>
}
