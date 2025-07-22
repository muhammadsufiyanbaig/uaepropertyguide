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
        image: "/download.jpeg",
        date: "2024-03-15",
        readTime: "5 min read",
        category: "Market Analysis",
    },
    {
        id: 2,
        slug: "abu-dhabi-luxury-developments",
        title: "Luxury Developments in Abu Dhabi",
        excerpt: "Explore the most exclusive luxury property developments coming to Abu Dhabi in the next few years.",
        image: "/download(1).jpeg",
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
        image: "/download(2).jpeg",
        date: "2024-03-10",
        readTime: "10 min read",
        category: "Investment Guide",
    },
    {
        id: 4,
        slug: "sharjah-affordable-housing",
        title: "Affordable Housing Options in Sharjah",
        excerpt: "Discover budget-friendly housing options in Sharjah that offer great value for money.",
        image: "/download(3).jpeg",
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
        image: "/download(1).jpeg",
        date: "2024-03-05",
        readTime: "8 min read",
        category: "Legal Updates",
    },
    {
        id: 6,
        slug: "off-plan-properties-benefits",
        title: "Benefits of Buying Off-Plan Properties in UAE",
        excerpt: "Learn about the advantages and considerations when purchasing off-plan properties in the UAE.",
        image: "/download(2).jpeg",
        date: "2024-03-03",
        readTime: "5 min read",
        category: "Buying Guide",
    },
]

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-20 relative">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 -z-20">
                        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-[#0B0D3D]/10 to-[#2C5DA9]/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-[#2C5DA9]/8 to-[#0B0D3D]/2 rounded-full blur-3xl animate-pulse delay-1000"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-indigo-400/5 rounded-full blur-2xl animate-bounce delay-500"></div>
                    </div>

                    {/* Main content container */}
                    <div className="relative">
                        {/* Glassmorphism container */}
                        <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl py-16 px-8 shadow-2xl border border-white/30 overflow-hidden">
                            {/* Decorative geometric shapes */}
                            <div className="absolute top-4 right-4 w-16 h-16 border-2 border-[#2C5DA9]/20 rounded-lg rotate-12 animate-spin-slow"></div>
                            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-[#0B0D3D]/10 to-[#2C5DA9]/10 rounded-full animate-bounce delay-300"></div>
                            <div className="absolute top-1/2 right-8 w-8 h-8 bg-[#2C5DA9]/20 rounded-full animate-pulse delay-700"></div>
                            
                            {/* Content */}
                            <div className="relative z-10">
                                {/* Badge */}
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#0B0D3D] to-[#2C5DA9] text-white text-sm font-semibold mb-6 shadow-lg animate-fade-in">
                                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                                    Latest Property Insights
                                </div>
                                
                                {/* Main heading */}
                                <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
                                    <span className="bg-gradient-to-r from-[#0B0D3D] via-[#2C5DA9] to-[#0B0D3D] bg-clip-text text-transparent bg-300% animate-gradient-x">
                                        Property
                                    </span>
                                    <br />
                                    <span className="bg-gradient-to-r from-[#2C5DA9] via-[#0B0D3D] to-[#0B0D3D] bg-clip-text text-transparent bg-300% animate-gradient-x delay-500">
                                        Insights & News
                                    </span>
                                </h1>
                                
                                {/* Subtitle */}
                                <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8 font-medium">
                                    Stay informed with the latest news, trends, and insights from the 
                                    <span className="text-[#2C5DA9] font-semibold"> UAE property market</span>
                                </p>
                                
                                {/* Statistics or highlights */}
                                <div className="flex flex-wrap justify-center gap-8 mt-12">
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-[#0B0D3D] mb-1">500+</div>
                                        <div className="text-sm text-gray-600 font-medium">Articles Published</div>
                                    </div>
                                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-[#2C5DA9] mb-1">1M+</div>
                                        <div className="text-sm text-gray-600 font-medium">Readers Monthly</div>
                                    </div>
                                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
                                    <div className="text-center">
                                        <div className="text-3xl font-bold text-[#0B0D3D] mb-1">24/7</div>
                                        <div className="text-sm text-gray-600 font-medium">Market Updates</div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Bottom gradient border */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0B0D3D] via-[#2C5DA9] to-[]"></div>
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-[#2C5DA9] to-[#0B0D3D] rounded-full shadow-lg animate-bounce delay-1000"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-br from-[#0B0D3D] to-[#2C5DA9] rounded-full shadow-lg animate-pulse delay-1500"></div>
                    </div>
                </div>

               

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card 
                            key={post.id} 
                            className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:-translate-y-2 overflow-hidden"
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
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D3D]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                {/* Category Badge */}
                                <Badge className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white border-0 shadow-lg" 
                                             style={{ backgroundColor: '#2C5DA9' }}>
                                    {post.category}
                                </Badge>
                            </div>

                            <CardHeader className="pb-3">
                                <div className="flex items-center text-sm text-gray-500 mb-3">
                                    <div className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-2 text-[#2C5DA9]" />
                                        <span>{new Date(post.date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center ml-4">
                                        <Clock className="h-4 w-4 mr-2 text-[#2C5DA9]" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                                <CardTitle className="text-xl font-bold text-[#0B0D3D] group-hover:text-[#2C5DA9] transition-colors duration-300 line-clamp-2">
                                    {post.title}
                                </CardTitle>
                            </CardHeader>

                            <CardContent className="pt-0">
                                <CardDescription className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </CardDescription>
                                
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center px-4 py-2 rounded-lg font-semibold text-white transition-all duration-300 group-hover:shadow-lg"
                                    style={{ 
                                        background: `linear-gradient(135deg, #0B0D3D 0%, #2C5DA9 100%)`,
                                    }}
                                >
                                    Read More
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className="fixed top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#0B0D3D]/10 to-[#2C5DA9]/10 rounded-full blur-2xl -z-10"></div>
                <div className="fixed bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-[#2C5DA9]/10 to-[#0B0D3D]/10 rounded-full blur-2xl -z-10"></div>
            </div>
        </div>
    )
}
