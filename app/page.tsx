"use client";

import { useState } from "react";
import InquiryModal from "@/app/components/Inqurey-Modal";
import Counter from "@/app/components/LandingPage/Counter";
import ResultsTable from "@/app/components/LandingPage/ResultTable";
import Hero from "@/app/components/LandingPage/Hero";
import SearchModal from "@/app/components/LandingPage/SearchModal";

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
    // Here you would typically filter mockResults based on searchFilters
    // For now, we'll just show all results
    setSearchResults(mockResults);
    setShowResults(true);
  };

  const handleInquiry = (property: Property) => {
    setSelectedProperty(property);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="relative overflow-hidden">
      <Hero />
      
      {/* Pass handleSearch as a prop to SearchModal */}
      <SearchModal 
        searchFilters={searchFilters}
        setSearchFilters={setSearchFilters}
        onSearch={handleSearch}
      />
      
      {/* Search Results */}
      {showResults && (
        <ResultsTable
          searchResults={searchResults}
          showResults={showResults}
          onInquiry={handleInquiry}
        />
      )}
      
      <Counter />
      
      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        property={selectedProperty}
      />
    </div>
  );
}