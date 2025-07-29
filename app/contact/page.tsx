"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react"
// Ensure these paths are correct and images exist in /public
import bg1 from "@/public/bg1.jpg"
import bg2 from "@/public/bg2.jpg"
import bg3 from "@/public/bg3.jpg"
import bg4 from "@/public/bg4.jpg"
import bg5 from "@/public/bg5.jpg"

export default function ContactPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Use .src for Vite compatibility; if using Next.js, this may not be needed
  const backgroundImages = [bg5.src]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [backgroundImages.length])

  const [formData, setFormData] = useState({
    userType: "customer",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Message sent successfully!")
  }

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen relative">
      {/* Background with transparency */}
      <div
        className="min-h-screen relative transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Glassmorphism overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        />

        {/* Geometric shapes overlay */}
        {/* <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #430F00, transparent)" }}
          ></div> */}
          {/* <div
            className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 rounded-full opacity-20"
            style={{ background: "radial-gradient(circle, #DE6300, transparent)" }}
          ></div> */}
        {/* </div> */}

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-8 sm:mb-12 md:mb-16">
              <div
                className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6"
                style={{ 
                  background: "linear-gradient(135deg, #430F00 0%, #863300 50%, #DE6300 100%)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4 text-gray-900">
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4 text-gray-800">
                We're here to help you with all your property needs. Reach out to our expert team today.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start">
              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                <Card
                  className="shadow-2xl border-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <CardHeader className="pb-6 sm:pb-8 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                      Contact Information
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg text-gray-800">
                      Multiple ways to reach our dedicated team
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6 sm:space-y-8 px-4 sm:px-6">
                    <div
                      className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl"
                      style={{ 
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      <div
                        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #430F00 0%, #863300 100%)" }}
                      >
                        <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900">
                          Email Us
                        </h3>
                        <p className="text-sm sm:text-base break-all text-gray-800">
                          admin@uaepropertyguide.com
                        </p>
                        <p className="text-xs sm:text-sm mt-1 opacity-80 text-gray-700">
                          We typically respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl"
                      style={{ 
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      <div
                        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #863300 0%, #DE6300 100%)" }}
                      >
                        <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900">
                          Call Us
                        </h3>
                        <p className="text-sm sm:text-base text-gray-800">
                          +971 50 123 4567
                        </p>
                        <p className="text-xs sm:text-sm mt-1 opacity-80 text-gray-700">
                          Available 9 AM - 6 PM (GST)
                        </p>
                      </div>
                    </div>

                    <div
                      className="flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-xl sm:rounded-2xl"
                      style={{ 
                        background: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      <div
                        className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #430F00 0%, #DE6300 100%)" }}
                      >
                        <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900">
                          Visit Us
                        </h3>
                        <p className="text-sm sm:text-base text-gray-800">
                          Dubai International Financial Centre
                          <br />
                          Dubai, United Arab Emirates
                        </p>
                        <p className="text-xs sm:text-sm mt-1 opacity-80 text-gray-700">
                          Open by appointment
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="order-1 lg:order-2">
                <Card
                  className="shadow-2xl border-0"
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    backdropFilter: "blur(15px)",
                    WebkitBackdropFilter: "blur(15px)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                  }}
                >
                  <CardHeader className="pb-4 sm:pb-6 px-4 sm:px-6">
                    <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">
                      Send us a Message
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg text-gray-800">
                      Fill out the form below and we'll get back to you soon
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6">
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="space-y-2 sm:space-y-3">
                        <Label className="text-sm sm:text-base font-semibold text-gray-900">
                          I am a
                        </Label>
                        <RadioGroup
                          value={formData.userType}
                          onValueChange={(value) => setFormData({ ...formData, userType: value })}
                          className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4"
                        >
                          <div
                            className="flex items-center space-x-2 p-2 sm:p-3 rounded-lg sm:rounded-xl cursor-pointer transition-all hover:shadow-md"
                            style={{ 
                              background: "rgba(255, 255, 255, 0.25)",
                              backdropFilter: "blur(10px)",
                              WebkitBackdropFilter: "blur(10px)",
                            }}
                          >
                            <RadioGroupItem
                              value="customer"
                              id="customer"
                              className="border-2"
                              style={{ borderColor: "#430F00" }}
                            />
                            <Label
                              htmlFor="customer"
                              className="text-sm sm:text-base font-medium cursor-pointer text-gray-900"
                            >
                              Customer
                            </Label>
                          </div>
                          <div
                            className="flex items-center space-x-2 p-2 sm:p-3 rounded-lg sm:rounded-xl cursor-pointer transition-all hover:shadow-md"
                            style={{ 
                              background: "rgba(255, 255, 255, 0.25)",
                              backdropFilter: "blur(10px)",
                              WebkitBackdropFilter: "blur(10px)",
                            }}
                          >
                            <RadioGroupItem
                              value="broker"
                              id="broker"
                              className="border-2"
                              style={{ borderColor: "#430F00" }}
                            />
                            <Label
                              htmlFor="broker"
                              className="text-sm sm:text-base font-medium cursor-pointer text-gray-900"
                            >
                              Broker
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="fullName"
                          className="text-sm sm:text-base font-semibold text-gray-900"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="h-10 sm:h-12 text-sm sm:text-base rounded-lg sm:rounded-xl border-2 transition-all focus:ring-4 focus:ring-opacity-20"
                          style={{
                            background: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            borderColor: "#DE6300",
                            color: "#1f2937",
                          }}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-sm sm:text-base font-semibold text-gray-900"
                        >
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-10 sm:h-12 text-sm sm:text-base rounded-lg sm:rounded-xl border-2 transition-all focus:ring-4 focus:ring-opacity-20"
                          style={{
                            background: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            borderColor: "#DE6300",
                            color: "#1f2937",
                          }}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-sm sm:text-base font-semibold text-gray-900"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="h-10 sm:h-12 text-sm sm:text-base rounded-lg sm:rounded-xl border-2 transition-all focus:ring-4 focus:ring-opacity-20"
                          style={{
                            background: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            borderColor: "#DE6300",
                            color: "#1f2937",
                          }}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="message"
                          className="text-sm sm:text-base font-semibold text-gray-900"
                        >
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us how we can help you..."
                          className="min-h-[80px] sm:min-h-[100px] text-sm sm:text-base rounded-lg sm:rounded-xl border-2 transition-all focus:ring-4 focus:ring-opacity-20 resize-none"
                          style={{
                            background: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(10px)",
                            WebkitBackdropFilter: "blur(10px)",
                            borderColor: "#DE6300",
                            color: "#1f2937",
                          }}
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full h-10 sm:h-12 text-sm sm:text-base font-semibold rounded-lg sm:rounded-xl transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 sm:space-x-3 text-white border-0"
                        style={{
                          background: "linear-gradient(135deg, #430F00 0%, #863300 50%, #DE6300 100%)",
                          backdropFilter: "blur(10px)",
                          WebkitBackdropFilter: "blur(10px)",
                        }}
                      >
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}