'use client'

import bg1 from "@/public/bg1.jpg";
import bg2 from "@/public/bg2.jpg";
import bg3 from "@/public/bg3.jpg";
import bg4 from "@/public/bg4.jpg";
import bg5 from "@/public/bg5.jpg";
import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

// Mock blog data
const blogPosts = [
    {
        id: 1,
        slug: "dubai-property-market-2024",
        title: "Dubai Property Market Trends in 2024",
        excerpt: "Discover the latest trends and investment opportunities in Dubai's dynamic real estate market this year.",
        image: "/bg1.jpg",
        date: "2024-03-15",
        readTime: "5 min read",
        category: "Market Analysis",
    },
    {
        id: 2,
        slug: "abu-dhabi-luxury-developments",
        title: "Luxury Developments in Abu Dhabi",
        excerpt: "Explore the most exclusive luxury property developments coming to Abu Dhabi in the next few years.",
        image: "/bg2.jpg",
        date: "2024-03-12",
        readTime: "7 min read",
        category: "Luxury Properties",
    },
    {
        id: 3,
        slug: "property-investment-guide-uae",
        title: "Complete Guide to Property Investment in UAE",
        excerpt:
            "Everything you need to know about investing in UAE real estate, from legal requirements to market insights.",
        image: "/bg3.jpg",
        date: "2024-03-10",
        readTime: "10 min read",
        category: "Investment Guide",
    },
    {
        id: 4,
        slug: "sharjah-affordable-housing",
        title: "Affordable Housing Options in Sharjah",
        excerpt: "Discover budget-friendly housing options in Sharjah that offer great value for money.",
        image: "/bg1.jpg",
        date: "2024-03-08",
        readTime: "6 min read",
        category: "Affordable Housing",
    },
    {
        id: 5,
        slug: "uae-property-laws-2024",
        title: "UAE Property Laws: What Changed in 2024",
        excerpt:
            "Stay updated with the latest changes in UAE property laws and regulations that affect buyers and investors.",
        image: "/bg2.jpg",
        date: "2024-03-05",
        readTime: "8 min read",
        category: "Legal Updates",
    },
    {
        id: 6,
        slug: "off-plan-properties-benefits",
        title: "Benefits of Buying Off-Plan Properties in UAE",
        excerpt: "Learn about the advantages and considerations when purchasing off-plan properties in the UAE.",
        image: "/bg3.jpg",
        date: "2024-03-03",
        readTime: "5 min read",
        category: "Buying Guide",
    },
]

export default function BlogPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const backgroundImages = [bg5]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [backgroundImages.length])

    return (
        <div className="min-h-screen relative py-16">
            {/* Glassmorphism Background */}
            <div className="fixed inset-0 -z-30">
                {backgroundImages.map((bg, index) => (
                    <Image
                        key={index}
                        src={bg}
                        alt={`Background ${index + 1}`}
                        fill
                        className={`object-cover transition-opacity duration-1000 ${
                            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                ))}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <div className="text-center mb-20 relative">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 -z-20">
                        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#DE6300]/20 to-[#430F00]/20 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#430F00]/15 to-[#863300]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-[#DE6300]/10 to-[#863300]/10 rounded-full blur-2xl animate-bounce delay-500"></div>
                    </div>

                    {/* Main content container */}
                    <div className="relative">
                        {/* Glassmorphism container */}
                        <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl py-16 px-8 shadow-2xl border border-white/20 overflow-hidden">
                            {/* Decorative geometric shapes */}
                            <div className="absolute top-4 right-4 w-16 h-16 border-2 border-[#430F00]/30 rounded-lg rotate-12 animate-spin-slow"></div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-[#DE6300]/20 to-[#430F00]/20 rounded-full animate-bounce delay-300"></div>
                            <div className="absolute top-1/2 right-8 w-8 h-8 bg-[#863300]/30 rounded-full animate-pulse delay-700"></div>

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Badge */}
                                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#DE6300] via-[#863300] to-[#430F00] text-white text-sm font-semibold mb-6 shadow-lg animate-fade-in backdrop-blur-sm">
                                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                                    Latest Property Insights
                                </div>

                                {/* Main heading */}
                                <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-[#DE6300] via-[#863300] to-[#430F00] bg-clip-text text-transparent bg-300% animate-gradient-x drop-shadow-lg">
                                        Property
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-[#430F00] via-[#863300] to-[#DE6300] bg-clip-text text-transparent bg-300% animate-gradient-x delay-500 drop-shadow-lg">
                                        Insights & News
                                    </span>
                                </h1>

                                {/* Subtitle */}
                                <p className="text-xl md:text-2xl text-gray-800 max-w-4xl mx-auto leading-relaxed mb-8 font-medium drop-shadow-md">
                                    Stay informed with the latest news, trends, and insights from the
                                    <span className="text-[#430F00] font-semibold"> UAE property market</span>
                                </p>

                                {/* Statistics */}
                                <div className="flex flex-wrap justify-center gap-8 mt-12">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-[#DE6300] mb-1 drop-shadow-lg">500+</div>
                                        <div className="text-sm text-gray-700 font-medium drop-shadow-md">Articles Published</div>
                                    </div>
                                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#863300] to-transparent"></div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-[#430F00] mb-1 drop-shadow-lg">1M+</div>
                                        <div className="text-sm text-gray-700 font-medium drop-shadow-md">Readers Monthly</div>
                                    </div>
                                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#863300] to-transparent"></div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-[#DE6300] mb-1 drop-shadow-lg">24/7</div>
                                        <div className="text-sm text-gray-700 font-medium drop-shadow-md">Market Updates</div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom gradient border */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DE6300] via-[#863300] to-[#430F00]"></div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#430F00] to-[#DE6300] rounded-full shadow-lg animate-bounce delay-1000"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-[#DE6300] to-[#863300] rounded-full shadow-lg animate-pulse delay-1500"></div>
                    </div>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card
                            key={post.id}
                            className="group hover:shadow-2xl transition-all duration-500  bg-white/10 backdrop-blur-md hover:bg-white/20 hover:-translate-y-2 overflow-hidden border border-white/20"
                            style={{
                                animationDelay: `${index * 150}ms`
                            }}
                        >
                            <div className="relative overflow-hidden">
                                <Image
                                    src={post.image || "/placeholder.svg"}
                                    alt={post.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#430F00]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Category Badge */}
                                <Badge className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white border-0 shadow-lg bg-gradient-to-r from-[#430F00] to-[#863300] backdrop-blur-sm">
                                    {post.category}
                                </Badge>
                            </div>

                            <CardHeader className="pb-3">
                                <div className="flex items-center text-sm text-gray-700 mb-3">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-2 text-[#430F00]" />
                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <Clock className="h-4 w-4 mr-2 text-[#430F00]" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-[#430F00] transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <CardDescription className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </CardDescription>

                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 group-hover:shadow-lg backdrop-blur-sm bg-gradient-to-r from-[#DE6300] via-[#863300] to-[#430F00] hover:from-[#430F00] hover:via-[#863300] hover:to-[#DE6300]"
                                >
                                    Read More
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="fixed top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#DE6300]/20 to-[#430F00]/20 rounded-full blur-2xl -z-10"></div>
                <div className="fixed bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-[#430F00]/20 to-[#863300]/20 rounded-full blur-2xl -z-10"></div>
            </div>
        </div>
    )
}
