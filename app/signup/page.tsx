"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Lock, Phone, Chrome, Facebook } from "lucide-react"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    userType: "customer",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    console.log("Sign up attempt:", formData)
    // Handle sign up logic
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleGoogleSignUp = () => {
    console.log("Google sign up")
    // Handle Google sign up
  }

  const handleFacebookSignUp = () => {
    console.log("Facebook sign up")
    // Handle Facebook sign up
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 relative">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#DE6300]/20 via-[#863300]/10 to-[#430F00]/20"></div>
      
      {/* Background decoration with new colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#DE6300] to-[#863300] rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#863300] to-[#430F00] rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#430F00] to-[#DE6300] rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <Card className="w-full max-w-md relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
        <CardHeader className="space-y-2 text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-[#DE6300] via-[#863300] to-[#430F00] rounded-full flex items-center justify-center mb-4 shadow-lg">
            <User className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#DE6300] via-[#863300] to-[#430F00] bg-clip-text text-transparent">
            Create Account
          </CardTitle>
          <CardDescription className="text-gray-800 text-lg font-medium">
            Join UAE Property Guide today
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-800 font-semibold">Full Name *</Label>
              <div className="relative group">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5 group-focus-within:text-[#430F00] transition-colors" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="pl-10 h-12 backdrop-blur-md bg-white/20 border-2 border-white/30 focus:border-[#DE6300] focus:ring-4 focus:ring-[#DE6300]/30 rounded-lg transition-all duration-200 text-gray-800 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-800 font-semibold">Email *</Label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5 group-focus-within:text-[#430F00] transition-colors" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 h-12 backdrop-blur-md bg-white/20 border-2 border-white/30 focus:border-[#DE6300] focus:ring-4 focus:ring-[#DE6300]/30 rounded-lg transition-all duration-200 text-gray-800 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-800 font-semibold">Password *</Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5 group-focus-within:text-[#430F00] transition-colors" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="pl-10 h-12 backdrop-blur-md bg-white/20 border-2 border-white/30 focus:border-[#DE6300] focus:ring-4 focus:ring-[#DE6300]/30 rounded-lg transition-all duration-200 text-gray-800 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-800 font-semibold">Confirm Password *</Label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5 group-focus-within:text-[#430F00] transition-colors" />
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="pl-10 h-12 backdrop-blur-md bg-white/20 border-2 border-white/30 focus:border-[#DE6300] focus:ring-4 focus:ring-[#DE6300]/30 rounded-lg transition-all duration-200 text-gray-800 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-800 font-semibold">Phone Number (Optional)</Label>
              <div className="relative group">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 h-5 w-5 group-focus-within:text-[#430F00] transition-colors" />
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 h-12 backdrop-blur-md bg-white/20 border-2 border-white/30 focus:border-[#DE6300] focus:ring-4 focus:ring-[#DE6300]/30 rounded-lg transition-all duration-200 text-gray-800 placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-gray-800 font-semibold">I am a</Label>
              <RadioGroup
                value={formData.userType}
                onValueChange={(value) => setFormData({ ...formData, userType: value })}
                className="flex flex-row space-x-8"
              >
                <div className="flex items-center space-x-3">
                  <RadioGroupItem 
                    value="customer" 
                    id="customer" 
                    className="border-2 border-gray-600 text-[#430F00] focus:ring-[#DE6300] focus:ring-offset-0"
                  />
                  <Label htmlFor="customer" className="text-gray-800 font-semibold cursor-pointer">Customer</Label>
                </div>
                <div className="flex items-center space-x-3">
                  <RadioGroupItem 
                    value="broker" 
                    id="broker" 
                    className="border-2 border-gray-600 text-[#430F00] focus:ring-[#DE6300] focus:ring-offset-0"
                  />
                  <Label htmlFor="broker" className="text-gray-800 font-semibold cursor-pointer">Broker</Label>
                </div>
              </RadioGroup>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-gradient-to-r from-[#DE6300] via-[#863300] to-[#430F00] hover:from-[#DE6300]/90 hover:via-[#863300]/90 hover:to-[#430F00]/90 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 backdrop-blur-sm"
            >
              Create Account
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full border-gray-600/50" />
            </div>
            <div className="relative flex justify-center text-sm uppercase">
              <span className="backdrop-blur-sm bg-white/20 px-4 text-gray-800 font-semibold rounded-full">Or sign up with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              onClick={handleGoogleSignUp}
              className="h-12 backdrop-blur-md bg-white/20 border-2 border-white/30 hover:border-[#DE6300] hover:bg-gradient-to-r hover:from-[#DE6300]/20 hover:to-[#863300]/20 text-gray-800 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Chrome className="mr-2 h-5 w-5" />
              Google
            </Button>
            <Button
              variant="outline"
              onClick={handleFacebookSignUp}
              className="h-12 backdrop-blur-md bg-white/20 border-2 border-white/30 hover:border-[#DE6300] hover:bg-gradient-to-r hover:from-[#DE6300]/20 hover:to-[#863300]/20 text-gray-800 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <Facebook className="mr-2 h-5 w-5" />
              Facebook
            </Button>
          </div>

          <div className="text-center text-sm pt-4">
            <span className="text-gray-700 font-medium">Already have an account? </span>
            <Link href="/login" className="text-[#430F00] hover:text-[#DE6300] font-bold hover:underline transition-colors">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
