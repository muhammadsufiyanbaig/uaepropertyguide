"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Building, MapPin, CheckCircle, TrendingUp, Filter, Maximize } from "lucide-react";
import InquiryModal from "@/app/components/Inqurey-Model";

// Mock data for dropdowns
const cities = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"];
const locations = ["Downtown Dubai", "Dubai Marina", "Business Bay", "JBR", "Palm Jumeirah", "DIFC"];
const developers = ["Emaar Properties", "DAMAC Properties", "Nakheel", "Dubai Properties", "Sobha Realty"];
const unitTypes = ["Apartment", "Villa", "Townhouse", "Penthouse", "Studio"];
const bedrooms = ["Studio", "1 BR", "2 BR", "3 BR", "4 BR", "5+ BR"];
const handoverYears = ["2024", "2025", "2026", "2027", "2028", "2029", "2030"];
const sizesMin = ["500", "750", "1000", "1250", "1500", "2000", "2500", "3000"];
const sizesMax = ["750", "1000", "1250", "1500", "2000", "2500", "3000", "4000+"];

// Define TypeScript interface for search results
interface Property {
  id: number;
  city: string;
  location: string;
  developer: string;
  unitType: string;
  bedrooms: string;
  handoverYear: string;
  price: string;
  size: string;
}

// Mock search results
const mockResults: Property[] = [
  {
    id: 1,
    city: "Dubai",
    location: "Downtown Dubai",
    developer: "Emaar Properties",
    unitType: "Apartment",
    bedrooms: "2 BR",
    handoverYear: "2025",
    price: "1,500,000",
    size: "1,200",
  },
  {
    id: 2,
    city: "Dubai",
    location: "Dubai Marina",
    developer: "DAMAC Properties",
    unitType: "Apartment",
    bedrooms: "1 BR",
    handoverYear: "2024",
    price: "900,000",
    size: "850",
  },
  {
    id: 3,
    city: "Abu Dhabi",
    location: "Saadiyat Island",
    developer: "Aldar Properties",
    unitType: "Villa",
    bedrooms: "4 BR",
    handoverYear: "2026",
    price: "3,200,000",
    size: "3,500",
  },
];

export default function HomePage() {
  const [searchFilters, setSearchFilters] = useState({
    city: "",
    location: "",
    developer: "",
    unitType: "",
    bedrooms: "",
    handoverYear: "",
    minPrice: "",
    maxPrice: "",
    minSize: "",
    maxSize: "",
  });
  const [searchResults, setSearchResults] = useState<Property[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleSearch = () => {
    setSearchResults(mockResults);
    setShowResults(true);
  };

  const handleInquiry = (property: Property) => {
    setSelectedProperty(property);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Light Background with Subtle Gradient */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C7DCF9] via-white to-[#C7DCF9]"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-[#2C5DA9]/20 to-[#C7DCF9]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-gradient-to-r from-[#0B0D3D]/10 to-[#2C5DA9]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-[#2C5DA9]/15 to-[#C7DCF9]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#C7DCF9]/10 via-[#2C5DA9]/5 to-[#0B0D3D]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-2 bg-[#0B0D3D] rounded-full animate-ping" style={{ animationDelay: "0s" }}></div>
          <div className="absolute top-40 right-32 w-2 h-2 bg-[#0B0D3D] rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
          <div className="absolute bottom-40 left-40 w-2 h-2 bg-[#0B0D3D] rounded-full animate-ping" style={{ animationDelay: "4s" }}></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#0B0D3D] rounded-full animate-ping" style={{ animationDelay: "6s" }}></div>
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
      <section className="relative py-12 lg:py-16">
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

          {/* Modern Search Form with Enhanced Glassmorphism */}
          <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/30 border border-[#C7DCF9]/50 rounded-3xl shadow-2xl p-6 lg:p-8 relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-[#C7DCF9]/10 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-[#2C5DA9]/20 to-[#C7DCF9]/20 backdrop-blur-md rounded-2xl border border-[#C7DCF9]/50 shadow-lg">
                      <Filter className="h-7 w-7 text-[#2C5DA9]" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#3E3F3E] to-[#2C5DA9] bg-clip-text text-transparent drop-shadow-lg">
                      Property Search
                    </h2>
                  </div>
                </div>
                <p className="text-center text-[] font-medium">
                  Find your perfect property with our advanced search filters
                </p>
              </div>

              <div className="space-y-8">
                {/* Search Filters Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-[#0B0D3D] flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-[#2C5DA9]" />
                      City
                    </Label>
                    <Select
                      value={searchFilters.city}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, city: value })}
                    >
                      <SelectTrigger className="w-full h-12 backdrop-blur-md bg-white/30 border border-[#C7DCF9]/50 text-[#0B0D3D] placeholder:text-[#3E3F3E]/60 hover:bg-white/40 focus:bg-white/40 transition-all duration-300 rounded-xl shadow-lg">
                        <SelectValue placeholder="Select City" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-white/90 border border-[#C7DCF9]/50">
                        {cities.map((city) => (
                          <SelectItem key={city} value={city} className="hover:bg-[#C7DCF9] focus:bg-[#C7DCF9] text-[#0B0D3D]">
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-[#0B0D3D] flex items-center">
                      <Building className="h-4 w-4 mr-1 text-[#2C5DA9]" />
                      Location
                    </Label>
                    <Select
                      value={searchFilters.location}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, location: value })}
                    >
                      <SelectTrigger className="w-full h-12 backdrop-blur-md bg-white/30 border border-[#C7DCF9]/50 text-[#0B0D3D] placeholder:text-[#3E3F3E]/60 hover:bg-white/40 focus:bg-white/40 transition-all duration-300 rounded-xl shadow-lg">
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-white/90 border border-[#C7DCF9]/50">
                        {locations.map((location) => (
                          <SelectItem key={location} value={location} className="hover:bg-[#C7DCF9] focus:bg-[#C7DCF9] text-[#0B0D3D]">
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-[#0B0D3D]">Developer</Label>
                    <Select
                      value={searchFilters.developer}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, developer: value })}
                    >
                      <SelectTrigger className="w-full h-12 backdrop-blur-md bg-white/30 border border-[#C7DCF9]/50 text-[#0B0D3D] placeholder:text-[#3E3F3E]/60 hover:bg-white/40 focus:bg-white/40 transition-all duration-300 rounded-xl shadow-lg">
                        <SelectValue placeholder="Select Developer" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-white/90 border border-[#C7DCF9]/50">
                        {developers.map((developer) => (
                          <SelectItem key={developer} value={developer} className="hover:bg-[#C7DCF9] focus:bg-[#C7DCF9] text-[#0B0D3D]">
                            {developer}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-[#0B0D3D]">Unit Type</Label>
                    <Select
                      value={searchFilters.unitType}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, unitType: value })}
                    >
                      <SelectTrigger className="w-full h-12 backdrop-blur-md bg-white/30 border border-[#C7DCF9]/50 text-[#0B0D3D] placeholder:text-[#3E3F3E]/60 hover:bg-white/40 focus:bg-white/40 transition-all duration-300 rounded-xl shadow-lg">
                        <SelectValue placeholder="Select Unit Type" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-white/90 border border-[#C7DCF9]/50">
                        {unitTypes.map((type) => (
                          <SelectItem key={type} value={type} className="hover:bg-[#C7DCF9] focus:bg-[#C7DCF9] text-[#0B0D3D]">
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-[#0B0D3D]">Bedrooms</Label>
                    <Select
                      value={searchFilters.bedrooms}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, bedrooms: value })}
                    >
                      <SelectTrigger className="w-full h-12 backdrop-blur-md bg-white/30 border border-[#C7DCF9]/50 text-[#0B0D3D] placeholder:text-[#3E3F3E]/60 hover:bg-white/40 focus:bg-white/40 transition-all duration-300 rounded-xl shadow-lg">
                        <SelectValue placeholder="Select Bedrooms" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-white/90 border border-[#C7DCF9]/50">
                        {bedrooms.map((bedroom) => (
                          <SelectItem key={bedroom} value={bedroom} className="hover:bg-[#C7DCF9] focus:bg-[#C7DCF9] text-[#0B0D3D]">
                            {bedroom}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-[#0B0D3D]">Handover Year</Label>
                    <Select
                      value={searchFilters.handoverYear}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, handoverYear: value })}
                    >
                      <SelectTrigger className="w-full h-12 backdrop-blur-md bg-white/30 border border-[#C7DCF9]/50 text-[#0B0D3D] placeholder:text-[#3E3F3E]/60 hover:bg-white/40 focus:bg-white/40 transition-all duration-300 rounded-xl shadow-lg">
                        <SelectValue placeholder="Select Year" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-white/90 border border-[#C7DCF9]/50">
                        {handoverYears.map((year) => (
                          <SelectItem key={year} value={year} className="hover:bg-[#C7DCF9] focus:bg-[#C7DCF9] text-[#0B0D3D]">
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-[#0B0D3D]">Min Price (AED)</Label>
                    <Input
                      type="number"
                      placeholder="Min Price"
                      value={searchFilters.minPrice}
                      onChange={(e) => setSearchFilters({ ...searchFilters, minPrice: e.target.value })}
                      className="w-full h-12 backdrop-blur-md bg-white/30 border border-[#C7DCF9]/50 text-[#0B0D3D] placeholder:text-[#3E3F3E]/60 hover:bg-white/40 focus:bg-white/40 transition-all duration-300 rounded-xl shadow-lg"
                      aria-label="Minimum Price"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-[#0B0D3D]">Max Price (AED)</Label>
                    <Input
                      type="number"
                      placeholder="Max Price"
                      value={searchFilters.maxPrice}
                      onChange={(e) => setSearchFilters({ ...searchFilters, maxPrice: e.target.value })}
                      className="w-full h-12 backdrop-blur-md bg-white/30 border border-[#C7DCF9]/50 text-[#0B0D3D] placeholder:text-[#3E3F3E]/60 hover:bg-white/40 focus:bg-white/40 transition-all duration-300 rounded-xl shadow-lg"
                      aria-label="Maximum Price"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-[#0B0D3D] flex items-center">
                      <Maximize className="h-4 w-4 mr-1 text-[#2C5DA9]" />
                      Min Size (sq. ft)
                    </Label>
                    <Select
                      value={searchFilters.minSize}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, minSize: value })}
                    >
                      <SelectTrigger className="w-full h-12 backdrop-blur-md bg-white/30 border border-[#C7DCF9]/50 text-[#0B0D3D] placeholder:text-[#3E3F3E]/60 hover:bg-white/40 focus:bg-white/40 transition-all duration-300 rounded-xl shadow-lg">
                        <SelectValue placeholder="Min Size" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-white/90 border border-[#C7DCF9]/50">
                        {sizesMin.map((size) => (
                          <SelectItem key={size} value={size} className="hover:bg-[#C7DCF9] focus:bg-[#C7DCF9] text-[#0B0D3D]">
                            {size} sq. ft
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-semibold text-[#0B0D3D] flex items-center">
                      <Maximize className="h-4 w-4 mr-1 text-[#2C5DA9]" />
                      Max Size (sq. ft)
                    </Label>
                    <Select
                      value={searchFilters.maxSize}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, maxSize: value })}
                    >
                      <SelectTrigger className="w-full h-12 backdrop-blur-md bg-white/30 border border-[#C7DCF9]/50 text-[#0B0D3D] placeholder:text-[#3E3F3E]/60 hover:bg-white/40 focus:bg-white/40 transition-all duration-300 rounded-xl shadow-lg">
                        <SelectValue placeholder="Max Size" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-white/90 border border-[#C7DCF9]/50">
                        {sizesMax.map((size) => (
                          <SelectItem key={size} value={size} className="hover:bg-[#C7DCF9] focus:bg-[#C7DCF9] text-[#0B0D3D]">
                            {size} sq. ft
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Search Button with Gradient */}
                <div className="flex justify-center pt-6">
                  <Button
                    onClick={handleSearch}
                    className="bg-gradient-to-r  from-[#2C5DA9] to-[#0B0D3D] hover:from-[#2C5DA9] hover:to-[#0B0D3D] text-white font-bold py-7 px-12 rounded-2xl shadow-2xl border border-[#C7DCF9]/50 backdrop-blur-md hover:scale-105 transition-all duration-300 text-lg"
                    aria-label="Search Properties"
                  >
                    <Search className="mr-3 h-6 w-6" />
                    Search Properties
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results with Enhanced Glassmorphism */}
      {showResults && (
        <section className="py-16 lg:py-20 relative">
          <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#3E3F3E] to-[#2C5DA9] bg-clip-text text-transparent mb-4 drop-shadow-lg">
                Search Results
              </h2>
              <p className="text-[#0B0D3D]/80 text-lg">Found {searchResults.length} properties matching your criteria</p>
            </div>

            <div className="backdrop-blur-xl bg-white/30 border border-[#C7DCF9]/50 rounded-3xl shadow-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b border-[#C7DCF9]/50 bg-gradient-to-r from-white/20 to-[#C7DCF9]/10">
                      <TableHead className="font-bold text-[#0B0D3D] py-6">City</TableHead>
                      <TableHead className="font-bold text-[#0B0D3D] py-6">Location</TableHead>
                      <TableHead className="font-bold text-[#0B0D3D] py-6">Developer</TableHead>
                      <TableHead className="font-bold text-[#0B0D3D] py-6">Unit Type</TableHead>
                      <TableHead className="font-bold text-[#0B0D3D] py-6">Bedrooms</TableHead>
                      <TableHead className="font-bold text-[#0B0D3D] py-6">Size (sq. ft)</TableHead>
                      <TableHead className="font-bold text-[#0B0D3D] py-6">Handover Year</TableHead>
                      <TableHead className="font-bold text-[#0B0D3D] py-6">Price (AED)</TableHead>
                      <TableHead className="font-bold text-[#0B0D3D] py-6">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {searchResults.map((property) => (
                      <TableRow
                        key={property.id}
                        className="border-b border-[#C7DCF9]/30 hover:bg-[#C7DCF9]/20 transition-all duration-300"
                      >
                        <TableCell className="font-semibold text-[#0B0D3D] py-6">{property.city}</TableCell>
                        <TableCell className="text-[#2C5DA9] py-6">{property.location}</TableCell>
                        <TableCell className="text-[#2C5DA9] py-6">{property.developer}</TableCell>
                        <TableCell className="text-[#2C5DA9] py-6">{property.unitType}</TableCell>
                        <TableCell className="text-[#2C5DA9] py-6">{property.bedrooms}</TableCell>
                        <TableCell className="text-[#2C5DA9] py-6">{property.size}</TableCell>
                        <TableCell className="text-[#2C5DA9] py-6">{property.handoverYear}</TableCell>
                        <TableCell className="font-bold text-[#0B0D3D] py-6">{property.price}</TableCell>
                        <TableCell className="py-6">
                          <Button
                            onClick={() => handleInquiry(property)}
                            size="sm"
                            className="bg-gradient-to-r from-[#2C5DA9] to-[#0B0D3D] text-white font-medium px-6 py-3 rounded-xl shadow-lg border border-[#C7DCF9]/50 backdrop-blur-md hover:scale-105 transition-all duration-300"
                            aria-label={`Inquire about ${property.unitType} in ${property.location}`}
                          >
                            Inquire
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
      )}

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
                  <CheckCircle className="h-10 w-10 text-[#2C5DA9]" />
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

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        property={selectedProperty}
      />
    </div>
  );
}
