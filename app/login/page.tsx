"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, Lock, Chrome, Facebook, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
    // Handle login logic
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleGoogleLogin = () => {
    console.log("Google login")
    // Handle Google login
  }

  const handleFacebookLogin = () => {
    console.log("Facebook login")
    // Handle Facebook login
  }

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Background decoration with glassmorphism */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#430F00]/20 to-[#863300]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#863300]/20 to-[#DE6300]/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#DE6300]/10 to-[#430F00]/10 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md backdrop-blur-lg bg-white/10 shadow-2xl border border-white/20 relative z-10 rounded-3xl">
        <CardHeader className="space-y-2 pb-8">
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-[#430F00] to-[#DE6300] bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-gray-800 text-base font-medium">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-gray-900 font-semibold text-sm">
                Email Address
              </Label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 h-5 w-5 transition-colors group-focus-within:text-[#430F00]" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-12 h-12 border-2 border-white/30 focus:border-[#DE6300] focus:ring-4 focus:ring-[#DE6300]/20 rounded-xl bg-gradient-to-r from-[#430F00]/5 to-[#863300]/5 backdrop-blur-md transition-all duration-300 placeholder:text-gray-600 text-gray-900 font-medium"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-gray-900 font-semibold text-sm">
                Password
              </Label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-700 h-5 w-5 transition-colors group-focus-within:text-[#430F00]" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="pl-12 pr-12 h-12 border-2 border-white/30 focus:border-[#DE6300] focus:ring-4 focus:ring-[#DE6300]/20 rounded-xl bg-gradient-to-r from-[#430F00]/5 to-[#863300]/5 backdrop-blur-md transition-all duration-300 placeholder:text-gray-600 text-gray-900 font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-700 hover:text-[#430F00] transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <input
                  id="remember"
                  type="checkbox"
                  className="rounded border-white/30 text-[#430F00] focus:ring-[#430F00] focus:ring-offset-0 bg-white/20 backdrop-blur-sm"
                />
                <label htmlFor="remember" className="text-sm text-gray-800 font-medium">
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-[#430F00] hover:text-[#DE6300] transition-colors font-semibold">
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-[#430F00] via-[#863300] to-[#DE6300] hover:from-[#DE6300] hover:via-[#863300] hover:to-[#430F00] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm border border-white/20"
            >
              Sign In
            </Button>
          </form>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-white/30" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-4 text-gray-800 font-semibold rounded-full">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={handleGoogleLogin}
              className="h-12 border-2 border-white/30 hover:border-[#DE6300] hover:bg-gradient-to-r hover:from-[#430F00]/10 hover:to-[#863300]/10 bg-gradient-to-r from-[#430F00]/5 to-[#863300]/5 backdrop-blur-md rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Chrome className="mr-2 h-5 w-5 text-[#430F00]" />
              <span className="text-gray-900 font-semibold">Google</span>
            </Button>
            <Button
              variant="outline"
              onClick={handleFacebookLogin}
              className="h-12 border-2 border-white/30 hover:border-[#DE6300] hover:bg-gradient-to-r hover:from-[#430F00]/10 hover:to-[#863300]/10 bg-gradient-to-r from-[#430F00]/5 to-[#863300]/5 backdrop-blur-md rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Facebook className="mr-2 h-5 w-5 text-[#430F00]" />
              <span className="text-gray-900 font-semibold">Facebook</span>
            </Button>
          </div>

          <div className="text-center text-base pt-4">
            <span className="text-gray-800 font-medium">Don't have an account? </span>
            <Link 
              href="/signup" 
              className="text-[#430F00] hover:text-[#DE6300] font-bold transition-colors hover:underline"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
