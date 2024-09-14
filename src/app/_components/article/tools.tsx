'use client';
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { allProperty } from '../data/allproperties';
import Button from '../button/button';

// Define the type for a single property
type Property = {
  Location: string;
  Property_Type: string;
  Size: string;
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

// Utility function to get unique size types
const getUniqueSizeTypes = (properties: Property[]): string[] => {
  const sizeTypes = properties.map(property => property.Size);
  return Array.from(new Set(sizeTypes));
};

const ToolSearch = () => {
  const paths = usePathname();
  let path = paths.split('/')[2];
  path = path[0].toUpperCase() + path.slice(1, path.length);
  
  // States for the search filters
  const [location, setLocation] = useState<string>("");  // Location state
  const [propertyType, setPropertyType] = useState<string>("");  // Property type state
  const [sizeType, setSizeType] = useState<string>("");  // Size type state
  const router = useRouter();  // Next.js router hook for navigation

  // Handle search query and navigation
  const handleSearch = () => {
    const locationQuery = location ? `location=${encodeURIComponent(location)}` : "location=''"; 
    const propertyTypeQuery = propertyType ? `propertyType=${encodeURIComponent(propertyType)}` : "propertyType=''"; 
    const sizeTypeQuery = sizeType ? `sizeType=${encodeURIComponent(sizeType)}` : "sizeType=''"; 
    const query = `?${locationQuery}&${propertyTypeQuery}&${sizeTypeQuery}`;
    router.push(`/tools/${query}&path=${path}`);
  };

  // Get unique values for the dropdowns
  const locations = getUniqueLocations(allProperty as Property[]);  // Cast allProperty to Property[]
  const propertyTypes = getUniquePropertyTypes(allProperty as Property[]);
  const sizeTypes = getUniqueSizeTypes(allProperty as Property[]);

  // Condition to enable/disable the button
  const isButtonDisabled = !location && !propertyType && !sizeType;

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="flex flex-col sm:flex-row gap-4 items-center border p-4 md:p-6 rounded-lg">
        {/* Location Selector */}
        <div className="flex flex-col gap-2 w-[100%] sm:w-2/3">
          <label className="font-bold px-2">Location</label>
          <select
            className="text-md p-2 border rounded-md focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option className='text-lg' value="">Select your city</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>{loc}</option>
            ))}
          </select>
        </div>

        {/* Property Type Selector */}
        <div className="flex flex-col gap-2 w-[100%] md:w-2/3">
          <label className="flex flex-row font-bold px-2">{path} Type</label>
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

        {/* Size Type Selector */}
        <div className="flex flex-col gap-2 w-[100%] md:w-2/3">
          <label className="font-bold px-2">Size(Sq.Ft)</label>
          <select
            className="text-md p-2 border rounded-md focus:outline-none"
            value={sizeType}
            onChange={(e) => setSizeType(e.target.value)}
          >
            <option value="">Select size</option>
            {sizeTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Button */}
      <div className={`rounded-md cursor-pointer ${isButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={!isButtonDisabled ? handleSearch : undefined}>
        <Button label="Calculate" link="" disabled={isButtonDisabled} />
      </div>
    </div>
  );
};

export default ToolSearch;
