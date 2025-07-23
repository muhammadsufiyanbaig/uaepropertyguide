import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Filter, MapPin, Building, X, Check } from "lucide-react"

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

import { Dispatch, SetStateAction } from "react";

interface SearchFilters {
  city: string;
  location: string;
  developer: string;
  unitType: string;
  bedrooms: string;
  handoverYear: string;
  minPrice: string;
  maxPrice: string;
  minSize: string;
  maxSize: string;
}

interface SearchModalProps {
  searchFilters: SearchFilters;
  setSearchFilters: Dispatch<SetStateAction<SearchFilters>>;
  onSearch: () => void;
}

const SearchModal = ({ searchFilters, setSearchFilters, onSearch }: SearchModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [localFilters, setLocalFilters] = useState({
    cities: [] as string[],
    location: "",
    developer: "",
    unitType: "",
    bedrooms: [] as string[],
    handoverYear: "",
    priceRange: "",
    sizeRange: "",
  })

  const toggleCity = (city: string) => {
    const updatedCities = localFilters.cities.includes(city)
      ? localFilters.cities.filter((c) => c !== city)
      : [...localFilters.cities, city]
    setLocalFilters({ ...localFilters, cities: updatedCities })
  }

  const toggleBedroom = (bedroom: string) => {
    const updatedBedrooms = localFilters.bedrooms.includes(bedroom)
      ? localFilters.bedrooms.filter((b) => b !== bedroom)
      : [...localFilters.bedrooms, bedroom]
    setLocalFilters({ ...localFilters, bedrooms: updatedBedrooms })
  }

  const clearAllFilters = () => {
    setLocalFilters({
      cities: [] as string[],
      location: "",
      developer: "",
      unitType: "",
      bedrooms: [] as string[],
      handoverYear: "",
      priceRange: "",
      sizeRange: "",
    })
  }

    const handleSearch = () => {
    console.log("Applying filters:", localFilters)
    onSearch() // Call the parent's search function
    setIsOpen(false)
  }
  
  const getActiveFiltersCount = () => {
    let count = 0
    if (localFilters.cities?.length > 0) count++
    if (localFilters.location) count++
    if (localFilters.developer) count++
    if (localFilters.unitType) count++
    if (localFilters.bedrooms?.length > 0) count++
    if (localFilters.handoverYear) count++
    if (localFilters.priceRange) count++
    if (localFilters.sizeRange) count++
    return count
  }

  const hasActiveFilters = () => {
    return (
      localFilters.cities?.length > 0 ||
      localFilters.location !== "" ||
      localFilters.developer !== "" ||
      localFilters.unitType !== "" ||
      localFilters.bedrooms.length > 0 ||
      localFilters.handoverYear !== "" ||
      localFilters.priceRange !== "" ||
      localFilters.sizeRange !== ""
    )
  }

  return (
    <section className="relative py-6 lg:py-8">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="max-w-full backdrop-blur-xl bg-white/30 border border-blue-200/50 rounded-3xl shadow-2xl p-6 lg:p-8 relative overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-blue-200/10 rounded-3xl"></div>

          <div className="relative z-10">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-blue-600/20 to-blue-200/20 backdrop-blur-md rounded-2xl border border-blue-200/50 shadow-lg">
                    <Filter className="h-7 w-7 text-blue-600" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent drop-shadow-lg">
                    Property Search
                  </h2>
                </div>
              </div>
              <p className="text-center text-gray-700/80 font-medium">
                Find your perfect property with our advanced search filters
              </p>
            </div>

            {/* Search Modal Trigger Button */}
            <div className="flex justify-center">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-7 px-12 rounded-2xl shadow-2xl border border-blue-200/50 backdrop-blur-md hover:scale-105 transition-all duration-300 text-lg relative"
                    aria-label="Open Search Filters"
                  >
                    <Search className="mr-3 h-6 w-6" />
                    Search & Filter Properties
                    {getActiveFiltersCount() > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
                        {getActiveFiltersCount()}
                      </span>
                    )}
                  </Button>
                </DialogTrigger>

                <DialogContent className="max-w-[95vw] w-[95vw] max-h-[90vh] backdrop-blur-xl bg-white/95 border border-blue-200/50">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-900 bg-clip-text text-transparent flex items-center">
                      <Filter className="mr-2 h-6 w-6 text-blue-600" />
                      Search Filters
                    </DialogTitle>
                  </DialogHeader>

                  <ScrollArea className="h-[60vh] pr-4">
                    <div className="space-y-8 p-2">
                      {/* Cities - Checklist Format */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold text-gray-800 flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                          Cities
                        </Label>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                          {cities.map((city) => (
                            <Button
                              key={city}
                              type="button"
                              variant={localFilters.cities?.includes(city) ? "default" : "outline"}
                              onClick={() => toggleCity(city)}
                              className={`h-12 justify-start transition-all duration-200 ${
                                localFilters.cities?.includes(city)
                                  ? "bg-gradient-to-r from-blue-600 to-blue-900 text-white shadow-lg hover:from-blue-700 hover:to-blue-900"
                                  : "bg-white/50 border-blue-200 text-gray-800 hover:bg-blue-50 hover:border-blue-300"
                              }`}
                            >
                              {localFilters.cities?.includes(city) && <Check className="h-4 w-4 mr-2" />}
                              {city}
                            </Button>
                          ))}
                        </div>
                      </div>

                      {/* Dropdowns Row 1: Location, Developer, Unit Type */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold text-gray-800">Property Details</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-800 flex items-center">
                              <Building className="h-4 w-4 mr-1 text-blue-600" />
                              Location
                            </Label>
                            <Select
                              value={localFilters.location}
                              onValueChange={(value) => setLocalFilters({ ...localFilters, location: value })}
                            >
                              <SelectTrigger className="w-full h-12 bg-white/50 border-blue-200 text-gray-800">
                                <SelectValue placeholder="Select Location" />
                              </SelectTrigger>
                              <SelectContent>
                                {locations.map((location) => (
                                  <SelectItem key={location} value={location}>
                                    {location}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-800">Developer</Label>
                            <Select
                              value={localFilters.developer}
                              onValueChange={(value) => setLocalFilters({ ...localFilters, developer: value })}
                            >
                              <SelectTrigger className="w-full h-12 bg-white/50 border-blue-200 text-gray-800">
                                <SelectValue placeholder="Select Developer" />
                              </SelectTrigger>
                              <SelectContent>
                                {developers.map((developer) => (
                                  <SelectItem key={developer} value={developer}>
                                    {developer}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-800">Unit Type</Label>
                            <Select
                              value={localFilters.unitType}
                              onValueChange={(value) => setLocalFilters({ ...localFilters, unitType: value })}
                            >
                              <SelectTrigger className="w-full h-12 bg-white/50 border-blue-200 text-gray-800">
                                <SelectValue placeholder="Select Unit Type" />
                              </SelectTrigger>
                              <SelectContent>
                                {unitTypes.map((type) => (
                                  <SelectItem key={type} value={type}>
                                    {type}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Dropdowns Row 2: Handover Year, Price Range, Size Range */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold text-gray-800">Additional Filters</Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-800">Handover Year</Label>
                            <Select
                              value={localFilters.handoverYear}
                              onValueChange={(value) => setLocalFilters({ ...localFilters, handoverYear: value })}
                            >
                              <SelectTrigger className="w-full h-12 bg-white/50 border-blue-200 text-gray-800">
                                <SelectValue placeholder="Select Handover Year" />
                              </SelectTrigger>
                              <SelectContent>
                                {handoverYears.map((year) => (
                                  <SelectItem key={year} value={year}>
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-800">Price Range</Label>
                            <Select
                              value={localFilters.priceRange}
                              onValueChange={(value) => setLocalFilters({ ...localFilters, priceRange: value })}
                            >
                              <SelectTrigger className="w-full h-12 bg-white/50 border-blue-200 text-gray-800">
                                <SelectValue placeholder="Select Price Range" />
                              </SelectTrigger>
                              <SelectContent>
                                {priceRanges.map((range) => (
                                  <SelectItem key={range} value={range}>
                                    {range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-sm font-medium text-gray-800">Size Range</Label>
                            <Select
                              value={localFilters.sizeRange}
                              onValueChange={(value) => setLocalFilters({ ...localFilters, sizeRange: value })}
                            >
                              <SelectTrigger className="w-full h-12 bg-white/50 border-blue-200 text-gray-800">
                                <SelectValue placeholder="Select Size Range" />
                              </SelectTrigger>
                              <SelectContent>
                                {sizeRanges.map((range) => (
                                  <SelectItem key={range} value={range}>
                                    {range}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Bedrooms - Checklist Format */}
                      <div className="space-y-4">
                        <Label className="text-lg font-semibold text-gray-800">Bedrooms</Label>
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {bedrooms.map((bedroom) => (
                            <Button
                              key={bedroom}
                              type="button"
                              variant={localFilters.bedrooms.includes(bedroom) ? "default" : "outline"}
                              onClick={() => toggleBedroom(bedroom)}
                              className={`h-12 justify-start transition-all duration-200 ${
                                localFilters.bedrooms.includes(bedroom)
                                  ? "bg-gradient-to-r from-blue-600 to-blue-900 text-white shadow-lg hover:from-blue-700 hover:to-blue-900"
                                  : "bg-white/50 border-blue-200 text-gray-800 hover:bg-blue-50 hover:border-blue-300"
                              }`}
                            >
                              {localFilters.bedrooms.includes(bedroom) && <Check className="h-4 w-4 mr-2" />}
                              {bedroom}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </ScrollArea>

                  {/* Action Buttons - Always show */}
                  <div className="flex justify-between items-center gap-4 pt-6 border-t border-blue-200/30">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={clearAllFilters}
                      className="flex-1 bg-white/50 border-blue-200 text-gray-800 hover:bg-red-50 hover:border-red-300 hover:text-red-600 h-12"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Reset All Filters
                    </Button>

                    <Button
                      type="button"
                      onClick={handleSearch}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-900 text-white font-bold h-12 rounded-xl shadow-lg"
                    >
                      <Search className="mr-2 h-5 w-5" />
                      Apply Filters
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Display Active Filters */}
            {hasActiveFilters() && (
              <div className="mt-6 p-4 bg-white/20 backdrop-blur-md rounded-2xl border border-blue-200/50">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Active Filters:</h3>
                <div className="flex flex-wrap gap-2">
                  {localFilters.cities.map((city) => (
                    <span key={city} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      City: {city}
                    </span>
                  ))}
                  {localFilters.location && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Location: {localFilters.location}
                    </span>
                  )}
                  {localFilters.developer && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Developer: {localFilters.developer}
                    </span>
                  )}
                  {localFilters.unitType && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Type: {localFilters.unitType}
                    </span>
                  )}
                  {localFilters.bedrooms.map((bedroom) => (
                    <span key={bedroom} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Bedrooms: {bedroom}
                    </span>
                  ))}
                  {localFilters.handoverYear && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Handover: {localFilters.handoverYear}
                    </span>
                  )}
                  {localFilters.priceRange && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Price: {localFilters.priceRange}
                    </span>
                  )}
                  {localFilters.sizeRange && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      Size: {localFilters.sizeRange}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchModal