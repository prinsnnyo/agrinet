"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { IOSHomeIndicator } from "@/components/ios-home-indicator"
import { useRouter } from "next/navigation"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate and authenticate here
    // For this prototype, we'll just navigate to the dashboard
    router.push("/dashboard")
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#F5F8F5]">
      <div className="p-5 pb-20">
        <Link href="/" className="flex items-center text-green-600 mb-6">
          <ArrowLeft className="h-5 w-5 mr-1" />
          <span>Back</span>
        </Link>

        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Welcome Back</h1>
          <p className="text-[#636366] mb-8">Sign in to your AgriNet account</p>

          <form onSubmit={handleSignIn} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#111111]">
                Email or Username
              </Label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email or username"
                className="bg-white rounded-lg border-[#E5E5EA] h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password" className="text-[#111111]">
                  Password
                </Label>
                <Link href="/forgot-password" className="text-sm text-green-600">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="bg-white rounded-lg border-[#E5E5EA] h-12 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-[#8E8E93]"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full h-12 rounded-full bg-green-600 hover:bg-green-700 text-base">
              Sign In
            </Button>

            <div className="text-center">
              <p className="text-[#636366]">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-green-600 font-medium">
                  Create Account
                </Link>
              </p>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-[#E5E5EA]">
            <Button
              variant="outline"
              className="w-full h-12 rounded-full border-[#E5E5EA] bg-white mb-3 text-[#111111]"
            >
              <div className="mr-2 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              Continue with Google
            </Button>
            <Button variant="outline" className="w-full h-12 rounded-full border-[#E5E5EA] bg-white text-[#111111]">
              <div className="mr-2 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"
                    fill="#000000"
                  />
                </svg>
              </div>
              Continue with Apple
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <IOSHomeIndicator />
      </div>
    </main>
  )
}
