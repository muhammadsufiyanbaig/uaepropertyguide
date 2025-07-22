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
    <div className="min-h-screen bg-gradient-to-br from-[#C7DCF9] via-[#C7DCF9]/50 to-white flex items-center justify-center py-12 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2C5DA9]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0B0D3D]/10 rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md backdrop-blur-sm bg-white/95 shadow-2xl border-0 relative z-10">
        <CardHeader className="space-y-2 pb-8">
          
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-[#0B0D3D] to-[#2C5DA9] bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center text-[#0B0D3D]/70 text-base">
            Sign in to your account to continue
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-3">
              <Label htmlFor="email" className="text-[#0B0D3D] font-medium text-sm">
                Email Address
              </Label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2C5DA9] h-5 w-5 transition-colors group-focus-within:text-[#0B0D3D]" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-12 h-12 border-2 border-[#C7DCF9] focus:border-[#2C5DA9] focus:ring-4 focus:ring-[#C7DCF9]/30 rounded-xl bg-white/50 backdrop-blur-sm transition-all duration-300 placeholder:text-[#0B0D3D]/40"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="password" className="text-[#0B0D3D] font-medium text-sm">
                Password
              </Label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#2C5DA9] h-5 w-5 transition-colors group-focus-within:text-[#0B0D3D]" />
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="pl-12 pr-12 h-12 border-2 border-[#C7DCF9] focus:border-[#2C5DA9] focus:ring-4 focus:ring-[#C7DCF9]/30 rounded-xl bg-white/50 backdrop-blur-sm transition-all duration-300 placeholder:text-[#0B0D3D]/40"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#2C5DA9] hover:text-[#0B0D3D] transition-colors"
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
                  className="rounded border-[#C7DCF9] text-[#2C5DA9] focus:ring-[#2C5DA9] focus:ring-offset-0"
                />
                <label htmlFor="remember" className="text-sm text-[#0B0D3D]/70">
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-[#2C5DA9] hover:text-[#0B0D3D] transition-colors">
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-[#2C5DA9] to-[#0B0D3D] hover:from-[#0B0D3D] hover:to-[#2C5DA9] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Sign In
            </Button>
          </form>

          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full bg-[#C7DCF9]" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-4 text-[#0B0D3D]/60 font-medium">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={handleGoogleLogin}
              className="h-12 border-2 border-[#C7DCF9] hover:border-[#2C5DA9] hover:bg-[#C7DCF9]/20 bg-white/50 backdrop-blur-sm rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Chrome className="mr-2 h-5 w-5 text-[#2C5DA9]" />
              <span className="text-[#0B0D3D] font-medium">Google</span>
            </Button>
            <Button
              variant="outline"
              onClick={handleFacebookLogin}
              className="h-12 border-2 border-[#C7DCF9] hover:border-[#2C5DA9] hover:bg-[#C7DCF9]/20 bg-white/50 backdrop-blur-sm rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <Facebook className="mr-2 h-5 w-5 text-[#2C5DA9]" />
              <span className="text-[#0B0D3D] font-medium">Facebook</span>
            </Button>
          </div>

          <div className="text-center text-base pt-4">
            <span className="text-[#0B0D3D]/70">Don't have an account? </span>
            <Link 
              href="/signup" 
              className="text-[#2C5DA9] hover:text-[#0B0D3D] font-semibold transition-colors hover:underline"
            >
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
