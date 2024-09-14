'use client';

import { useSearchParams } from 'next/navigation';
import GridCards from '../_components/grid-card/gridcard';
import { useEffect, useState, Suspense } from 'react';
import Search from '../_components/simplecard/search';
import Header from '../_components/heading/header';
import { allProperty } from '../_components/data/allproperties';

interface Property {
  Location: string;
  Property_Type: string;
  imgurl_1: string;
  Title: string;
  Starting_Price: string;
}

const PropertyPage: React.FC = () => {
  const searchParams = useSearchParams();
  const locationQuery = searchParams.get('location');
  const propertyTypeQuery = searchParams.get('propertyType');

  // Define state types
  const [blogData, setBlogData] = useState<{ imgUrl: string; title: string; money: string; }[]>([]);
  const [randomProperties, setRandomProperties] = useState<{ imgUrl: string; title: string; money: string; }[]>([]);

  useEffect(() => {
    // Filter properties based on queries
    const filteredData = allProperty.filter((property: Property) => {
      const locationMatch = locationQuery ? property.Location.toLowerCase().includes(locationQuery.toLowerCase()) : true;
      const propertyTypeMatch = propertyTypeQuery ? property.Property_Type.toLowerCase().includes(propertyTypeQuery.toLowerCase()) : true;
      return locationMatch && propertyTypeMatch;
    }).map((property: Property) => ({
      imgUrl: property.imgurl_1,
      title: property.Title,
      money: property.Starting_Price
    }));

    setBlogData(filteredData);

    // Generate 9 random properties
    const getRandomProperties = () => {
      const shuffled = [...allProperty].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, 9).map((property: Property) => ({
        imgUrl: property.imgurl_1,
        title: property.Title,
        money: property.Starting_Price
      }));
      return selected;
    };

    setRandomProperties(getRandomProperties());

  }, [locationQuery, propertyTypeQuery]);

  return (
    <div className=''>
      <div className='flex flex-col gap-7'>
        <div className='flex justify-center'>
          <Search />
        </div>
        <Header label='Discover Properties Across the US' />
        {blogData.length > 0 ? (
          <GridCards data={blogData} />
        ) : (
          <div className='flex justify-center text-red-500 text-md font-bold'>No properties found.</div>
        )}
        
        {/* New section for random properties */}
        <div className='mt-12'>
          <Header label='What’s More' />
          <GridCards data={randomProperties} />
        </div>
      </div>
    </div>
  );
};

const SuspendedPropertyPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PropertyPage />
  </Suspense>
);

export default SuspendedPropertyPage;
