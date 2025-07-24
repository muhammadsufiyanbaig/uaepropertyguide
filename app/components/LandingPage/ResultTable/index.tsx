// components/ResultsTable.tsx
import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

interface ResultsTableProps {
  searchResults: Property[];
  showResults: boolean;
  onInquiry: (property: Property) => void;
}

const ResultsTable: React.FC<ResultsTableProps> = ({ searchResults, showResults, onInquiry }) => {
  if (!showResults) return null;

  return (
    <section className="py-8 lg:py-10 relative">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#3E3F3E] to-[#430F00] bg-clip-text text-transparent mb-4 drop-shadow-lg">
            Search Results
          </h2>
          <p className="text-[#863300]/80 text-lg font-bold">Found {searchResults.length} properties matching your criteria</p>
        </div>

        <div className="backdrop-blur-xl bg-white/30 border border-[#C7DCF9]/50 rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-[#C7DCF9]/50 bg-gradient-to-r from-white/20 to-[#C7DCF9]/10">
                  <TableHead className="font-bold text-[#863300] py-6">City</TableHead>
                  <TableHead className="font-bold text-[#863300] py-6">Location</TableHead>
                  <TableHead className="font-bold text-[#863300] py-6">Developer</TableHead>
                  <TableHead className="font-bold text-[#863300] py-6">Unit Type</TableHead>
                  <TableHead className="font-bold text-[#863300] py-6">Bedrooms</TableHead>
                  <TableHead className="font-bold text-[#863300] py-6">Size (sq. ft)</TableHead>
                  <TableHead className="font-bold text-[#863300] py-6">Handover Year</TableHead>
                  <TableHead className="font-bold text-[#863300] py-6">Price (AED)</TableHead>
                  <TableHead className="font-bold text-[#863300] py-6">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searchResults.map((property) => (
                  <TableRow
                    key={property.id}
                    className="border-b border-[#C7DCF9]/30 hover:bg-[#C7DCF9]/20 transition-all duration-300"
                  >
                    <TableCell className="font-bold text-[#863300] py-6">{property.city}</TableCell>
                    <TableCell className="font-bold text-[#430F00] py-6">{property.location}</TableCell>
                    <TableCell className="font-bold text-[#430F00] py-6">{property.developer}</TableCell>
                    <TableCell className="font-bold text-[#430F00] py-6">{property.unitType}</TableCell>
                    <TableCell className="font-bold text-[#430F00] py-6">{property.bedrooms}</TableCell>
                    <TableCell className="font-bold text-[#430F00] py-6">{property.size}</TableCell>
                    <TableCell className="font-bold text-[#430F00] py-6">{property.handoverYear}</TableCell>
                    <TableCell className="font-bold text-[#863300] py-6">{property.price}</TableCell>
                    <TableCell className="py-6">
                      <Button
                        onClick={() => onInquiry(property)}
                        size="sm"
                        className="bg-gradient-to-r from-[#430F00] to-[#863300] text-white font-bold px-6 py-3 rounded-xl shadow-lg border border-[#C7DCF9]/50 backdrop-blur-md hover:scale-105 transition-all duration-300"
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
  );
};

export default ResultsTable;