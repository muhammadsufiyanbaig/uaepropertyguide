"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, User, LogIn } from "lucide-react"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userName] = useState("John Doe")

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleLogout = () => {
        setIsAuthenticated(false)
    }

    return (
        <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/40 border-b border-white/20 shadow-lg shadow-blue-500/5">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-3">
                    {/* Enhanced Logo Section */}
                    <Link href="/" className="flex items-center space-x-3 group animate-fade-in hover:scale-105 transition-transform duration-200">
                        <div className="relative">
                           {/* You can replace this with an actual logo image */}
                                <Image
                                    src="/upg.svg" // Add your logo file to public folder
                                    alt="UAE Property Guide Logo"
                                    width={100}
                                    height={100}
                                    className="h-10 w-20 rounded-full object-cover"
                                    onError={(e) => {
                                        // Fallback if logo doesn't exist
                                        e.currentTarget.style.display = 'none';
                                        const fallbackElement = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (fallbackElement) {
                                            fallbackElement.style.display = 'flex';
                                        }
                                    }}
                                />
                              </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold bg-gradient-to-r from-[#2C5DA9] to-[#1e3a8a] bg-clip-text text-transparent">
                                UAE Property
                            </span>
                            <span className="text-sm font-medium text-gray-600 -mt-1">Guide</span>
                        </div>
                    </Link>

                    {/* Enhanced Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-10 animate-fade-in-delay-1">
                        <Link href="/" className="nav-link group relative overflow-hidden">
                            <span className="relative text-[#2C5DA9]  z-10">Home</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA9]/10 to-[#1e3a8a]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                        </Link>
                        <Link href="/contact" className="nav-link group relative overflow-hidden">
                            <span className="relative text-[#2C5DA9] z-10">Contact Us</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA9]/10 to-[#1e3a8a]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                        </Link>
                        <Link href="/blog" className="nav-link group relative overflow-hidden">
                            <span className="relative text-[#2C5DA9] z-10">Blog</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA9]/10 to-[#1e3a8a]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                        </Link>

                        <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-4"></div>

                        {!isAuthenticated ? (
                            <div className="flex items-center space-x-3">
                                <Link href="/login">
                                    <Button className="group bg-white hover:bg-[#f0f0f0] relative px-6 py-2 rounded-full border-2 border-[#2C5DA9]/30 text-[#2C5DA9] hover:border-[#2C5DA9] transition-all duration-300 font-medium backdrop-blur-sm hover:shadow-lg hover:shadow-[#2C5DA9]/20 overflow-hidden">
                                        <span className="flex items-center space-x-2 relative z-10">
                                            <LogIn className="h-4 w-4" />
                                            <span>Login</span>
                                        </span>
                                        <div className="absolute inset-0 bg-[#2C5DA9]/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    </Button>
                                </Link>
                                <Link href="/signup">
                                    <Button className="group relative px-6 py-2 rounded-full bg-gradient-to-r from-[#2C5DA9] to-[#1e3a8a] text-white hover:from-[#1e3a8a] hover:to-[#2C5DA9] transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 hover:scale-105">
                                        <span className="flex items-center space-x-2">
                                            <User className="h-4 w-4" />
                                            <span>Sign Up</span>
                                        </span>
                                    </Button>
                                </Link>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-3 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
                                    <User className="h-4 w-4 text-[#2C5DA9]" />
                                    <span className="text-gray-700 font-medium">{userName}</span>
                                </div>
                                <Button 
                                    onClick={handleLogout}
                                    className="px-4 py-2 rounded-full border border-red-300/50 text-red-600 hover:bg-red-50/50 hover:border-red-400/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-red-500/20"
                                >
                                    Logout
                                </Button>
                            </div>
                        )}
                    </nav>

                    {/* Enhanced Mobile menu button */}
                    <button
                        className="md:hidden p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300 animate-fade-in-delay-2 hover:scale-105"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
                    </button>
                </div>

                {/* Enhanced Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden animate-slide-up">
                        <div className="border-t border-white/20 mt-3 pt-4 pb-6 bg-white/30 backdrop-blur-sm rounded-2xl mx-2 mb-2">
                            <nav className="flex flex-col space-y-2 px-4">
                                <Link href="/" className="mobile-nav-link group relative overflow-hidden">
                                    <span className="relative z-10">Home</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA9]/10 to-[#1e3a8a]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                                </Link>
                                <Link href="/contact" className="mobile-nav-link group relative overflow-hidden">
                                    <span className="relative z-10">Contact Us</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA9]/10 to-[#1e3a8a]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                                </Link>
                                <Link href="/blog" className="mobile-nav-link group relative overflow-hidden">
                                    <span className="relative z-10">Blog</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#2C5DA9]/10 to-[#1e3a8a]/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl"></div>
                                </Link>

                                <div className="border-t border-white/20 my-4"></div>

                                {!isAuthenticated ? (
                                    <div className="flex flex-col space-y-3">
                                        <Link href="/login">
                                            <Button className="group w-full rounded-xl border-2 border-[#2C5DA9]/30 text-[#2C5DA9] hover:border-[#2C5DA9] hover:bg-[#2C5DA9]/5 backdrop-blur-sm py-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#2C5DA9]/20">
                                                <span className="flex items-center justify-center space-x-2">
                                                    <LogIn className="h-4 w-4" />
                                                    <span>Login</span>
                                                </span>
                                            </Button>
                                        </Link>
                                        <Link href="/signup">
                                            <Button className="w-full rounded-xl bg-gradient-to-r from-[#2C5DA9] to-[#1e3a8a] text-white shadow-lg shadow-blue-500/25 py-3 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02]">
                                                <span className="flex items-center justify-center space-x-2">
                                                    <User className="h-4 w-4" />
                                                    <span>Sign Up</span>
                                                </span>
                                            </Button>
                                        </Link>
                                    </div>
                                ) : (
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex items-center space-x-3 px-4 py-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white/20">
                                            <User className="h-4 w-4 text-[#2C5DA9]" />
                                            <span className="text-gray-700 font-medium">{userName}</span>
                                        </div>
                                        <Button 
                                            onClick={handleLogout}
                                            className="w-full rounded-xl border border-red-300/50 text-red-600 hover:bg-red-50/50 backdrop-blur-sm py-3 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300"
                                        >
                                            Logout
                                        </Button>
                                    </div>
                                )}
                            </nav>
                        </div>
                    </div>
                )}
            </div>

            {/* Add these styles to your global CSS */}
            <style jsx>{`
                .nav-link {
                    @apply flex items-center px-4 py-2 rounded-xl text-gray-700 hover:text-[#2C5DA9] transition-all duration-300 font-medium backdrop-blur-md bg-white/30 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/40 hover:border-white/30;
                }
                .mobile-nav-link {
                    @apply flex items-center px-4 py-3 rounded-xl text-gray-700 hover:text-[#2C5DA9] transition-all duration-300 font-medium backdrop-blur-md bg-white/30 border border-white/20 shadow-sm hover:shadow-md hover:bg-white/40 hover:border-white/30;
                }
            `}</style>
        </header>
    )
}
