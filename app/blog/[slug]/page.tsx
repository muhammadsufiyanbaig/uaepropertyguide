"use client"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2, User } from "lucide-react"

// Mock blog post data
const getBlogPost = (slug: string) => {
  const posts: Record<string, any> = {
    "dubai-property-market-2024": {
      title: "Dubai Property Market Trends in 2024",
      image: "/bg1.jpg",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Market Analysis",
      content: `
        <p>The Dubai property market continues to show remarkable resilience and growth in 2024, with several key trends shaping the landscape for both investors and homebuyers.</p>
        
        <h2>Market Performance Overview</h2>
        <p>Dubai's real estate sector has experienced significant growth in the first quarter of 2024, with transaction volumes increasing by 25% compared to the same period last year. This growth is driven by several factors including increased foreign investment, government initiatives, and the emirate's continued appeal as a global business hub.</p>
        
        <h2>Key Investment Areas</h2>
        <p>Popular areas for investment include:</p>
        <ul>
          <li>Downtown Dubai - Premium residential and commercial properties</li>
          <li>Dubai Marina - Waterfront living with high rental yields</li>
          <li>Business Bay - Mixed-use developments with strong growth potential</li>
          <li>Dubai Hills Estate - Family-friendly communities with excellent amenities</li>
        </ul>
        
        <h2>Price Trends and Forecasts</h2>
        <p>Property prices in Dubai have shown steady appreciation across most segments, with luxury properties leading the growth. Industry experts predict continued moderate growth throughout 2024, making it an opportune time for strategic investments.</p>
        
        <h2>Future Outlook</h2>
        <p>With Expo 2020's legacy projects, upcoming mega-developments, and Dubai's vision for 2040, the property market is well-positioned for sustained growth. Investors should focus on emerging areas and sustainable developments that align with Dubai's long-term urban planning strategy.</p>
      `,
    },
    "abu-dhabi-luxury-developments": {
      title: "Luxury Developments in Abu Dhabi",
      image: "/bg2.jpg",
      date: "2024-03-12",
      readTime: "7 min read",
      category: "Luxury Properties",
      content: `
        <p>Abu Dhabi's luxury property market is experiencing unprecedented growth with world-class developments that redefine opulent living in the capital.</p>
        
        <h2>Premium Developments to Watch</h2>
        <p>Several high-end projects are set to transform Abu Dhabi's skyline and luxury property landscape in the coming years.</p>
        
        <h2>Saadiyat Island Projects</h2>
        <p>Saadiyat Island continues to be the crown jewel of Abu Dhabi's luxury development, featuring:</p>
        <ul>
          <li>Exclusive beachfront villas with private beach access</li>
          <li>High-end residential towers with panoramic sea views</li>
          <li>Cultural district proximity to world-renowned museums</li>
          <li>Championship golf courses and luxury resort amenities</li>
        </ul>
        
        <h2>Al Maryah Island</h2>
        <p>The financial district's residential component offers sophisticated urban living with premium amenities and direct connectivity to the business center.</p>
        
        <h2>Investment Perspective</h2>
        <p>Luxury properties in Abu Dhabi offer strong rental yields and capital appreciation potential, particularly in prime locations with unique selling propositions such as waterfront access, cultural proximity, or architectural significance.</p>
      `,
    },
  }

  return posts[slug] || null
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-transparent py-16 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-[#430F00] to-[#DE6300] rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
              <span className="text-white text-2xl">?</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-800 mb-8 leading-relaxed">
              The blog post you're looking for doesn't exist or may have been moved.
            </p>
            <Link href="/blog">
              <Button className="bg-gradient-to-r from-[#430F00] via-[#863300] to-[#DE6300] hover:from-[#DE6300] hover:via-[#863300] hover:to-[#430F00] text-white px-8 py-3 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-transparent backdrop-blur-sm">
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#430F00] via-[#863300] to-[#DE6300] transform -skew-y-1"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 pt-12 pb-8">
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-900 hover:text-[#863300] transition-all duration-300 mb-8 group bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg hover:shadow-xl border border-white/30"
            >
              <ArrowLeft className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" />
              <span className="font-medium">Back to Blog</span>
            </Link>

            {/* Enhanced Article Header */}
            <Card className="mb-8 shadow-2xl  bg-white/10 backdrop-blur-md overflow-hidden border border-white/20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#430F00]/20 via-[#863300]/20 to-[#DE6300]/20 z-10"></div>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={1200}
                  height={500}
                  className="w-full h-72 md:h-96 object-cover"
                />
                <Badge className="absolute top-6 left-6 z-20 bg-gradient-to-r from-[#430F00] via-[#863300] to-[#DE6300] text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg backdrop-blur-sm">
                  {post.category}
                </Badge>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#430F00]/90 via-[#863300]/50 to-transparent p-8 backdrop-blur-sm">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {post.title}
                  </h1>
                  
                  <div className="flex flex-wrap items-center gap-6 text-white/90">
                    <div className="flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg border border-white/30">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                    </div>
                    <div className="flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg border border-white/30">
                      <Clock className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{post.readTime}</span>
                    </div>
                    <div className="flex items-center bg-white/20 backdrop-blur-md px-3 py-2 rounded-lg border border-white/30">
                      <User className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">UAE Property Guide Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Article Content Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Action Bar */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#430F00] via-[#863300] to-[#DE6300] rounded-full flex items-center justify-center shadow-lg">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">UAE Property Guide Team</p>
                <p className="text-sm text-gray-700">Real Estate Experts</p>
              </div>
            </div>
            
            <Button className="bg-white/20 backdrop-blur-md border-2 border-white/30 text-gray-900 hover:bg-gradient-to-r hover:from-[#430F00] hover:via-[#863300] hover:to-[#DE6300] hover:text-white transition-all duration-300 px-6 py-3 rounded-xl shadow-lg hover:shadow-xl">
              <Share2 className="h-4 w-4 mr-2" />
              Share Article
            </Button>
          </div>

          {/* Enhanced Article Content */}
          <Card className="shadow-2xl  bg-white/10 backdrop-blur-md border border-white/20">
            <CardContent className="p-8 md:p-12">
              <div
                className="prose prose-xl max-w-none text-gray-900 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
                style={{
                  lineHeight: "1.8",
                  fontSize: "1.1rem"
                }}
              />
              
              {/* Reading Progress Indicator */}
              <div className="mt-12 pt-8 border-t border-white/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#430F00] to-[#DE6300] rounded-full"></div>
                    <span className="text-gray-900 font-medium">End of Article</span>
                  </div>
                  <div className="flex space-x-3">
                    <div className="w-3 h-3 bg-gradient-to-r from-[#430F00] to-[#863300] rounded-full"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/40 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action Section */}
          <Card className="mt-8 shadow-xl border-0 bg-gradient-to-r from-[#430F00] via-[#863300] to-[#DE6300] text-white backdrop-blur-md">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with UAE Property Market</h3>
              <p className="mb-6 opacity-90">
                Get the latest insights, market trends, and investment opportunities delivered to your inbox.
              </p>
              <Button className="bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl font-semibold">
                Subscribe to Newsletter
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Custom Styles for Enhanced Typography */}
      <style jsx global>{`
        .prose h2 {
          color: #1f2937;
          font-size: 1.75rem;
          font-weight: 700;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          background: linear-gradient(135deg, #430F00, #863300, #DE6300);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .prose h3 {
          color: #374151;
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        
        .prose p {
          margin-bottom: 1.5rem;
          color: #1f2937;
          text-align: justify;
        }
        
        .prose ul {
          margin: 1.5rem 0;
        }
        
        .prose li {
          margin-bottom: 0.75rem;
          color: #1f2937;
          position: relative;
          padding-left: 1.5rem;
        }
        
        .prose li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #430F00, #863300, #DE6300);
          border-radius: 50%;
        }
        
        .prose strong {
          background: linear-gradient(135deg, #430F00, #863300, #DE6300);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}
