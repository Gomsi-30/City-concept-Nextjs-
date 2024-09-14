'use client';
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import { IoSearchOutline } from "react-icons/io5";
import { allProperty } from '../data/allproperties'; 

// Define the type for a single property
type Property = {
  Location: string;
  Property_Type: string;
};

// Utility function to get unique locations
const getUniqueLocations = (properties: Property[]): string[] => {
  const locations = properties.map(property => property.Location);
  return Array.from(new Set(locations));
};

// Utility function to get unique property types
const getUniquePropertyTypes = (properties: Property[]): string[] => {
  const propertyTypes = properties.map(property => property.Property_Type);
  return Array.from(new Set(propertyTypes));
};

const Search = () => {
  const [location, setLocation] = useState<string>("");  // Location state
  const [propertyType, setPropertyType] = useState<string>("");  // Property type state
  const router = useRouter();  // Next.js router hook for navigation

  const handleSearch = () => {
    const locationQuery = location ? `location=${encodeURIComponent(location)}` : "location=''"; // Build location query
    const propertyTypeQuery = propertyType ? `propertyType=${encodeURIComponent(propertyType)}` : "propertyType=''"; // Build property type query
    const query = `?${locationQuery}&${propertyTypeQuery}`;  // Construct query string
    router.push(`/property${query}`);  // Navigate to the search results page
  };

  // Get unique values for the dropdowns
  const locations = getUniqueLocations(allProperty as Property[]);  // Cast allProperty to Property[]
  const propertyTypes = getUniquePropertyTypes(allProperty as Property[]);

  // Check if both dropdowns are selected
  const isButtonDisabled = !(location && propertyType);

  return (
    <div className="">
      <div className="flex flex-col sm:flex-row gap-4 items-center border p-4 md:p-6 rounded-lg">
        {/* Location Selector */}
        <div className="flex flex-col gap-2 w-[100%] md:w-2/3">
          <label className="font-bold px-2">Location</label>
          <select
            className="text-md p-2 border rounded-md focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Select your city</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Property Type Selector */}
        <div className="flex flex-col gap-2 w-[100%] md:w-2/3">
          <label className="font-bold px-2">Property Type</label>
          <select
            className="text-md p-2 border rounded-md focus:outline-none"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Choose property type</option>
            {propertyTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div
          className={`flex px-2 justify-center items-center h-10 w-[100%] sm:w-10 rounded-md cursor-pointer transition-all duration-300 ${
            isButtonDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          onClick={!isButtonDisabled ? handleSearch : undefined}
        >
          <IoSearchOutline size={24} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Search;
