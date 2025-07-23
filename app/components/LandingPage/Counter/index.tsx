import { Building, CheckCircle2, MapPin, TrendingUp } from 'lucide-react';
import React from 'react'

const Counter = () => {
  return (
    <div>
      
      {/* Stats Section with Enhanced Glassmorphism */}
      <section className="py-16 lg:py-20 relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#3E3F3E] to-[#2C5DA9] bg-clip-text text-transparent mb-4 drop-shadow-lg">
              Why Choose UAE Property Guide
            </h2>
            <p className="text-lg lg:text-xl text-[#0B0D3D]/80 max-w-3xl mx-auto">
              Trusted by thousands of property seekers across the UAE
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center backdrop-blur-xl bg-white/30 border border-[#C7DCF9]/50 rounded-3xl p-8 hover:bg-white/40 hover:scale-105 transition-all duration-300 shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C7DCF9]/10 to-white/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2C5DA9]/30 to-[#C7DCF9]/30 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-[#C7DCF9]/50 group-hover:scale-110 transition-all duration-300">
                  <Building className="h-10 w-10 text-[#2C5DA9]" />
                </div>
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#3E3F3E] to-[#2C5DA9] bg-clip-text text-transparent mb-3 drop-shadow-lg">
                  1,250+
                </h3>
                <p className="text-[#0B0D3D]/90 font-semibold text-lg">Total Projects</p>
              </div>
            </div>

            <div className="text-center backdrop-blur-xl bg-white/30 border border-[#C7DCF9]/50 rounded-3xl p-8 hover:bg-white/40 hover:scale-105 transition-all duration-300 shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C7DCF9]/10 to-white/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2C5DA9]/30 to-[#C7DCF9]/30 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-[#C7DCF9]/50 group-hover:scale-110 transition-all duration-300">
                  <CheckCircle2 className="h-10 w-10 text-[#2C5DA9]" />
                </div>
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#3E3F3E] to-[#2C5DA9] bg-clip-text text-transparent mb-3 drop-shadow-lg">
                  150+
                </h3>
                <p className="text-[#0B0D3D]/90 font-semibold text-lg">Verified Developers</p>
              </div>
            </div>

            <div className="text-center backdrop-blur-xl bg-white/30 border border-[#C7DCF9]/50 rounded-3xl p-8 hover:bg-white/40 hover:scale-105 transition-all duration-300 shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C7DCF9]/10 to-white/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2C5DA9]/30 to-[#C7DCF9]/30 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-[#C7DCF9]/50 group-hover:scale-110 transition-all duration-300">
                  <TrendingUp className="h-10 w-10 text-[#2C5DA9]" />
                </div>
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#3E3F3E] to-[#2C5DA9] bg-clip-text text-transparent mb-3 drop-shadow-lg">
                  850+
                </h3>
                <p className="text-[#0B0D3D]/90 font-semibold text-lg">Ready Projects</p>
              </div>
            </div>

            <div className="text-center backdrop-blur-xl bg-white/30 border border-[#C7DCF9]/50 rounded-3xl p-8 hover:bg-white/40 hover:scale-105 transition-all duration-300 shadow-2xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C7DCF9]/10 to-white/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#2C5DA9]/30 to-[#C7DCF9]/30 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl border border-[#C7DCF9]/50 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="h-10 w-10 text-[#2C5DA9]" />
                </div>
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#3E3F3E] to-[#2C5DA9] bg-clip-text text-transparent mb-3 drop-shadow-lg">
                  200+
                </h3>
                <p className="text-[#0B0D3D]/90 font-semibold text-lg">Unique Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Counter;