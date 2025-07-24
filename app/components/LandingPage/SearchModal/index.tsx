"use client"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Building, X, Check } from "lucide-react"

// Mock data for dropdowns
const cities = ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain"]
const locations = ["Downtown Dubai", "Dubai Marina", "Business Bay", "JBR", "Palm Jumeirah", "DIFC"]
const developers = ["Emaar Properties", "DAMAC Properties", "Nakheel", "Dubai Properties", "Sobha Realty"]
const unitTypes = ["Apartment", "Villa", "Townhouse", "Penthouse", "Studio"]
const bedrooms = ["Studio", "1 BR", "2 BR", "3 BR", "4 BR", "5+ BR"]
const handoverYears = ["2024", "2025", "2026", "2027", "2028", "2029", "2030"]
const priceRanges = ["Under 500K AED", "500K - 1M AED", "1M - 2M AED", "2M - 5M AED", "5M - 10M AED", "Above 10M AED"]
const sizeRanges = [
  "Under 500 sq ft",
  "500 - 750 sq ft",
  "750 - 1000 sq ft",
  "1000 - 1500 sq ft",
  "1500 - 2000 sq ft",
  "2000 - 3000 sq ft",
  "Above 3000 sq ft",
]

import type { Dispatch, SetStateAction } from "react"

interface SearchFilters {
  cities: string[]
  city: string
  location: string
  developer: string
  unitType: string
  bedrooms: string[]
  handoverYear: string
  minPrice: string
  maxPrice: string
  minSize: string
  maxSize: string
  priceRange: string
  sizeRange: string
}

interface SearchBarProps {
  searchFilters: SearchFilters
  setSearchFilters: Dispatch<SetStateAction<SearchFilters>>
  onSearch: () => void
}

const PropertySearchBar = ({ searchFilters, setSearchFilters, onSearch }: SearchBarProps) => {
  const toggleCity = (city: string) => {
    const updatedCities = searchFilters.cities?.includes(city)
      ? searchFilters.cities.filter((c) => c !== city)
      : [...(searchFilters.cities || []), city]
    setSearchFilters({ ...searchFilters, cities: updatedCities })
  }

  const toggleBedroom = (bedroom: string) => {
    const updatedBedrooms = searchFilters.bedrooms?.includes(bedroom)
      ? searchFilters.bedrooms.filter((b) => b !== bedroom)
      : [...(searchFilters.bedrooms || []), bedroom]
    setSearchFilters({ ...searchFilters, bedrooms: updatedBedrooms })
  }

  const clearAllFilters = () => {
    setSearchFilters({
      cities: [],
      city: "",
      location: "",
      developer: "",
      unitType: "",
      bedrooms: [],
      handoverYear: "",
      minPrice: "",
      maxPrice: "",
      minSize: "",
      maxSize: "",
      priceRange: "",
      sizeRange: "",
    })
  }

  const handleSearch = () => {
    console.log("Applying filters:", searchFilters)
    onSearch()
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (searchFilters.cities?.length > 0) count++
    if (searchFilters.location) count++
    if (searchFilters.developer) count++
    if (searchFilters.unitType) count++
    if (searchFilters.bedrooms?.length > 0) count++
    if (searchFilters.handoverYear) count++
    if (searchFilters.priceRange) count++
    if (searchFilters.sizeRange) count++
    return count
  }

  const hasActiveFilters = () => {
    return (
      searchFilters.cities?.length > 0 ||
      searchFilters.location !== "" ||
      searchFilters.developer !== "" ||
      searchFilters.unitType !== "" ||
      searchFilters.bedrooms?.length > 0 ||
      searchFilters.handoverYear !== "" ||
      searchFilters.priceRange !== "" ||
      searchFilters.sizeRange !== ""
    )
  }

  return (
    <section className="relative min-h-screen w-full py-8 lg:py-12">
      <div className="relative container mx-auto px-4 lg:px-8 max-w-7xl h-full">
        {/* Main Search Container with Enhanced Glassmorphism */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden w-full">
          {/* All Filters Section */}
          <div className="p-6 lg:p-8">
            <div className="space-y-8">
              {/* Cities - Checklist Format */}
              <div className="space-y-5">
                <Label className="text-xl font-bold text-gray-900 flex items-center drop-shadow-lg">
                  <MapPin className="h-6 w-6 mr-3 text-[#DE6300] drop-shadow-lg" />
                  Cities
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {cities.map((city) => (
                    <Button
                      key={city}
                      type="button"
                      variant={searchFilters.cities?.includes(city) ? "default" : "outline"}
                      onClick={() => toggleCity(city)}
                      className={`h-12 justify-start transition-all duration-300 text-sm backdrop-blur-lg border rounded-xl shadow-lg hover:scale-105 ${
                        searchFilters.cities?.includes(city)
                          ? "text-white shadow-2xl bg-gradient-to-r from-[#430F00] via-[#863300] to-[#DE6300] border-[#DE6300]/50 hover:from-[#430F00]/90 hover:via-[#863300]/90 hover:to-[#DE6300]/90"
                          : "text-gray-900 hover:text-gray-900 bg-white/10 hover:bg-gradient-to-r hover:from-[#430F00]/30 hover:via-[#863300]/30 hover:to-[#DE6300]/30 border-white/30 hover:border-[#DE6300]/50"
                      }`}
                    >
                      {searchFilters.cities?.includes(city) && <Check className="h-4 w-4 mr-2" />}
                      {city}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Property Details Row */}
              <div className="space-y-5">
                <Label className="text-xl font-bold text-gray-900 drop-shadow-lg">Property Details</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-800 flex items-center">
                      <Building className="h-5 w-5 mr-2 text-[#DE6300]" />
                      Location
                    </Label>
                    <Select
                      value={searchFilters.location}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, location: value })}
                    >
                      <SelectTrigger className="w-full h-12 border-white/30 text-gray-900 backdrop-blur-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#430F00]/20 hover:via-[#863300]/20 hover:to-[#DE6300]/20 hover:border-[#DE6300]/50 rounded-xl shadow-lg transition-all duration-300">
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-gradient-to-br from-[#430F00]/95 via-[#863300]/95 to-[#DE6300]/95 border-white/30 rounded-xl shadow-2xl">
                        {locations.map((location) => (
                          <SelectItem
                            key={location}
                            value={location}
                            className="text-white hover:bg-gradient-to-r hover:from-[#430F00]/60 hover:via-[#863300]/60 hover:to-[#DE6300]/60 rounded-lg transition-all duration-200"
                          >
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-800">Developer</Label>
                    <Select
                      value={searchFilters.developer}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, developer: value })}
                    >
                      <SelectTrigger className="w-full h-12 border-white/30 text-gray-900 backdrop-blur-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#430F00]/20 hover:via-[#863300]/20 hover:to-[#DE6300]/20 hover:border-[#DE6300]/50 rounded-xl shadow-lg transition-all duration-300">
                        <SelectValue placeholder="Select Developer" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-gradient-to-br from-[#430F00]/95 via-[#863300]/95 to-[#DE6300]/95 border-white/30 rounded-xl shadow-2xl">
                        {developers.map((developer) => (
                          <SelectItem
                            key={developer}
                            value={developer}
                            className="text-white hover:bg-gradient-to-r hover:from-[#430F00]/60 hover:via-[#863300]/60 hover:to-[#DE6300]/60 rounded-lg transition-all duration-200"
                          >
                            {developer}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-800">Unit Type</Label>
                    <Select
                      value={searchFilters.unitType}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, unitType: value })}
                    >
                      <SelectTrigger className="w-full h-12 border-white/30 text-gray-900 backdrop-blur-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#430F00]/20 hover:via-[#863300]/20 hover:to-[#DE6300]/20 hover:border-[#DE6300]/50 rounded-xl shadow-lg transition-all duration-300">
                        <SelectValue placeholder="Select Unit Type" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-gradient-to-br from-[#430F00]/95 via-[#863300]/95 to-[#DE6300]/95 border-white/30 rounded-xl shadow-2xl">
                        {unitTypes.map((type) => (
                          <SelectItem 
                            key={type} 
                            value={type} 
                            className="text-white hover:bg-gradient-to-r hover:from-[#430F00]/60 hover:via-[#863300]/60 hover:to-[#DE6300]/60 rounded-lg transition-all duration-200"
                          >
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Bedrooms - Checklist Format */}
              <div className="space-y-5">
                <Label className="text-xl font-bold text-gray-900 drop-shadow-lg">Bedrooms</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {bedrooms.map((bedroom) => (
                    <Button
                      key={bedroom}
                      type="button"
                      variant={searchFilters.bedrooms?.includes(bedroom) ? "default" : "outline"}
                      onClick={() => toggleBedroom(bedroom)}
                      className={`h-12 justify-center transition-all duration-300 text-sm backdrop-blur-lg border rounded-xl shadow-lg hover:scale-105 ${
                        searchFilters.bedrooms?.includes(bedroom)
                          ? "text-white shadow-2xl bg-gradient-to-r from-[#430F00] via-[#863300] to-[#DE6300] border-[#DE6300]/50 hover:from-[#430F00]/90 hover:via-[#863300]/90 hover:to-[#DE6300]/90"
                          : "text-gray-900 hover:text-gray-900 bg-white/10 hover:bg-gradient-to-r hover:from-[#430F00]/30 hover:via-[#863300]/30 hover:to-[#DE6300]/30 border-white/30 hover:border-[#DE6300]/50"
                      }`}
                    >
                      {searchFilters.bedrooms?.includes(bedroom) && <Check className="h-4 w-4 mr-1" />}
                      {bedroom}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Additional Filters Row */}
              <div className="space-y-5">
                <Label className="text-xl font-bold text-gray-900 drop-shadow-lg">Additional Filters</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-800">Handover Year</Label>
                    <Select
                      value={searchFilters.handoverYear}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, handoverYear: value })}
                    >
                      <SelectTrigger className="w-full h-12 border-white/30 text-gray-900 backdrop-blur-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#430F00]/20 hover:via-[#863300]/20 hover:to-[#DE6300]/20 hover:border-[#DE6300]/50 rounded-xl shadow-lg transition-all duration-300">
                        <SelectValue placeholder="Select Handover Year" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-gradient-to-br from-[#430F00]/95 via-[#863300]/95 to-[#DE6300]/95 border-white/30 rounded-xl shadow-2xl">
                        {handoverYears.map((year) => (
                          <SelectItem 
                            key={year} 
                            value={year} 
                            className="text-white hover:bg-gradient-to-r hover:from-[#430F00]/60 hover:via-[#863300]/60 hover:to-[#DE6300]/60 rounded-lg transition-all duration-200"
                          >
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-800">Price Range</Label>
                    <Select
                      value={searchFilters.priceRange}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, priceRange: value })}
                    >
                      <SelectTrigger className="w-full h-12 border-white/30 text-gray-900 backdrop-blur-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#430F00]/20 hover:via-[#863300]/20 hover:to-[#DE6300]/20 hover:border-[#DE6300]/50 rounded-xl shadow-lg transition-all duration-300">
                        <SelectValue placeholder="Select Price Range" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-gradient-to-br from-[#430F00]/95 via-[#863300]/95 to-[#DE6300]/95 border-white/30 rounded-xl shadow-2xl">
                        {priceRanges.map((range) => (
                          <SelectItem 
                            key={range} 
                            value={range} 
                            className="text-white hover:bg-gradient-to-r hover:from-[#430F00]/60 hover:via-[#863300]/60 hover:to-[#DE6300]/60 rounded-lg transition-all duration-200"
                          >
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm font-semibold text-gray-800">Size Range</Label>
                    <Select
                      value={searchFilters.sizeRange}
                      onValueChange={(value) => setSearchFilters({ ...searchFilters, sizeRange: value })}
                    >
                      <SelectTrigger className="w-full h-12 border-white/30 text-gray-900 backdrop-blur-lg bg-white/10 hover:bg-gradient-to-r hover:from-[#430F00]/20 hover:via-[#863300]/20 hover:to-[#DE6300]/20 hover:border-[#DE6300]/50 rounded-xl shadow-lg transition-all duration-300">
                        <SelectValue placeholder="Select Size Range" />
                      </SelectTrigger>
                      <SelectContent className="backdrop-blur-xl bg-gradient-to-br from-[#430F00]/95 via-[#863300]/95 to-[#DE6300]/95 border-white/30 rounded-xl shadow-2xl">
                        {sizeRanges.map((range) => (
                          <SelectItem 
                            key={range} 
                            value={range} 
                            className="text-white hover:bg-gradient-to-r hover:from-[#430F00]/60 hover:via-[#863300]/60 hover:to-[#DE6300]/60 rounded-lg transition-all duration-200"
                          >
                            {range}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Bottom buttons section */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 border-t border-white/20">
                <Button
                  onClick={clearAllFilters}
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-8 backdrop-blur-lg bg-white/10 border-white/30 text-gray-900 hover:bg-gradient-to-r hover:from-[#430F00]/40 hover:via-[#863300]/40 hover:to-[#DE6300]/40 hover:border-[#DE6300]/60 transition-all duration-300 rounded-xl shadow-lg hover:scale-105"
                >
                  <X className="mr-2 h-5 w-5" />
                  Clear All
                </Button>

                <Button
                  onClick={handleSearch}
                  className="w-full sm:w-auto h-12 px-12 text-white font-semibold rounded-xl shadow-2xl border border-[#DE6300]/50 transition-all duration-300 hover:scale-105 backdrop-blur-lg bg-gradient-to-r from-[#430F00] via-[#863300] to-[#DE6300] hover:from-[#430F00]/80 hover:via-[#863300]/80 hover:to-[#DE6300]/80 hover:shadow-3xl"
                >
                  <Search className="mr-2 h-5 w-5" />
                  Search Properties
                  {getActiveFiltersCount() > 0 && (
                    <span className="ml-3 bg-white/20 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center shadow-lg backdrop-blur-sm border border-white/30">
                      {getActiveFiltersCount()}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters() && (
            <div className="border-t border-white/20 backdrop-blur-lg bg-white/5 p-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-gray-900 font-semibold text-sm mr-3 drop-shadow-lg">Active Filters:</span>
                {searchFilters.cities?.map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 backdrop-blur-lg bg-gradient-to-r from-[#430F00]/90 via-[#863300]/90 to-[#DE6300]/90 text-white rounded-full text-sm border border-white/30 shadow-lg"
                  >
                    {city}
                  </span>
                ))}
                {searchFilters.location && (
                  <span className="px-4 py-2 backdrop-blur-lg bg-gradient-to-r from-[#430F00]/90 via-[#863300]/90 to-[#DE6300]/90 text-white rounded-full text-sm border border-white/30 shadow-lg">
                    {searchFilters.location}
                  </span>
                )}
                {searchFilters.developer && (
                  <span className="px-4 py-2 backdrop-blur-lg bg-gradient-to-r from-[#430F00]/90 via-[#863300]/90 to-[#DE6300]/90 text-white rounded-full text-sm border border-white/30 shadow-lg">
                    {searchFilters.developer}
                  </span>
                )}
                {searchFilters.unitType && (
                  <span className="px-4 py-2 backdrop-blur-lg bg-gradient-to-r from-[#430F00]/90 via-[#863300]/90 to-[#DE6300]/90 text-white rounded-full text-sm border border-white/30 shadow-lg">
                    {searchFilters.unitType}
                  </span>
                )}
                {Array.isArray(searchFilters.bedrooms) && searchFilters.bedrooms.map((bedroom) => (
                  <span
                    key={bedroom}
                    className="px-4 py-2 backdrop-blur-lg bg-gradient-to-r from-[#430F00]/90 via-[#863300]/90 to-[#DE6300]/90 text-white rounded-full text-sm border border-white/30 shadow-lg"
                  >
                    {bedroom}
                  </span>
                ))}
                {searchFilters.handoverYear && (
                  <span className="px-4 py-2 backdrop-blur-lg bg-gradient-to-r from-[#430F00]/90 via-[#863300]/90 to-[#DE6300]/90 text-white rounded-full text-sm border border-white/30 shadow-lg">
                    {searchFilters.handoverYear}
                  </span>
                )}
                {searchFilters.priceRange && (
                  <span className="px-4 py-2 backdrop-blur-lg bg-gradient-to-r from-[#430F00]/90 via-[#863300]/90 to-[#DE6300]/90 text-white rounded-full text-sm border border-white/30 shadow-lg">
                    {searchFilters.priceRange}
                  </span>
                )}
                {searchFilters.sizeRange && (
                  <span className="px-4 py-2 backdrop-blur-lg bg-gradient-to-r from-[#430F00]/90 via-[#863300]/90 to-[#DE6300]/90 text-white rounded-full text-sm border border-white/30 shadow-lg">
                    {searchFilters.sizeRange}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default PropertySearchBar
