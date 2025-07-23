import type React from "react"
import { useState, useEffect } from "react"
import bg1 from "@/public/bg1.jpg";
import bg2 from "@/public/bg2.jpg";
import bg3 from "@/public/bg3.jpg";
import bg4 from "@/public/bg4.jpg";

const Hero: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgroundImages = [bg1, bg2, bg3, bg4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative overflow-hidden">
      {/* Background Images with Transition */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {backgroundImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentBgIndex ? "opacity-50" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${bg.src})`,
            }}
          />
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0"></div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-[#2C5DA9]/20 to-[#C7DCF9]/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-1/3 right-10 w-96 h-96 bg-gradient-to-r from-[#0B0D3D]/10 to-[#2C5DA9]/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-[#2C5DA9]/15 to-[#C7DCF9]/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#C7DCF9]/10 via-[#2C5DA9]/5 to-[#0B0D3D]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-20 left-20 w-2 h-2 bg-[#0B0D3D] rounded-full animate-ping"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute top-40 right-32 w-2 h-2 bg-[#0B0D3D] rounded-full animate-ping"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-40 left-40 w-2 h-2 bg-[#0B0D3D] rounded-full animate-ping"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-2 h-2 bg-[#0B0D3D] rounded-full animate-ping"
            style={{ animationDelay: "6s" }}
          ></div>
        </div>

        {/* Mesh Grid Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0B0D3D 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Hero Section with Reduced Height */}
      <section className="relative pt-4 lg:pt-8">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          {/* Hero Content */}
          <div className="text-center mb-8 lg:mb-12">
            <h1 className="text-4xl md:text-3xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#2C5DA9] to-[#0B0D3D] bg-clip-text text-transparent drop-shadow-2xl">
                Find Your Dream
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#0B0D3D] to-[#2C5DA9] bg-clip-text text-transparent drop-shadow-2xl">
                Property in UAE
              </span>
            </h1>
            <p className="text-lg md:text-lg lg:text-lg text-[#0B0D3D]/90 max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Discover the finest properties across the Emirates with our comprehensive property guide
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
