"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Check } from "lucide-react"
import Link from "next/link"
import { IOSHomeIndicator } from "@/components/ios-home-indicator"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send a password reset email here
    setSubmitted(true)
  }

  return (
    <main className="flex min-h-screen flex-col bg-orders relative z-10">
      <div className="p-5 bg-white/80 backdrop-blur-sm rounded-lg my-4 shadow-lg">
        <Link href="/sign-in" className="flex items-center justify-center text-green-600 bg-white p-1.5 rounded-full shadow-sm w-8 h-8 mb-6">
          <ArrowLeft className="h-4 w-4" />
        </Link>

        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-[#111111] mb-2">Reset Password</h1>
          <p className="text-[#636366] mb-8">
            Enter your email address and we'll send you instructions to reset your password
          </p>

          {submitted ? (
            <div className="text-center py-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-xl font-semibold text-[#111111] mb-2">Check Your Email</h2>
              <p className="text-[#636366] mb-6">
                We've sent password reset instructions to:
                <br />
                <span className="font-medium text-[#111111]">{email}</span>
              </p>
              <Button
                onClick={() => setSubmitted(false)}
                variant="outline"
                className="rounded-full border-green-600 text-green-600"
              >
                Resend Email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#111111]">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-white rounded-lg border-[#E5E5EA] h-12"
                  required
                />
              </div>

              <Button type="submit" className="w-full h-12 rounded-full bg-green-600 hover:bg-green-700 text-base">
                Send Reset Link
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-auto">
        <IOSHomeIndicator />
      </div>
    </main>
  )
}
