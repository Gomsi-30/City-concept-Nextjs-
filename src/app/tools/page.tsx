'use client';

import Header from '../_components/heading/header';
import { allProperty } from '../_components/data/allproperties';
import GridCards from '../_components/grid-card/gridcard';
import Button from '../_components/button/button';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';


type Property =  {
  imgurl_1: string;
  Title: string;
  Starting_Price: string;
}



const formatPrice = (price: number): string => {
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(1)} million`;
  }
  return `$${price.toLocaleString()}`;
};

const Tools = () => {
  const searchParams = useSearchParams();
  const path = searchParams.get('path') || 'property';

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let less = 0;
  let greater = 0;

  if (path.startsWith('V')) {
    less = getRandomNumber(250000, 2500000); 
    greater = getRandomNumber(5000000, 10000000); 
  } else if (path.startsWith('F')) {
    less = getRandomNumber(50000, 500000); 
    greater = getRandomNumber(1000000, 2000000); 
  } else if (path.startsWith('H')) {
    less = getRandomNumber(75000, 500000); 
    greater = getRandomNumber(500000, 1500000); 
  }

  const random: Property[] = [];
  for (let i = 0; i < 3; i++) {
    const randomProperty = allProperty[Math.floor(Math.random() * allProperty.length)];
    random.push({
      imgurl_1: randomProperty.imgurl_1,
      Title: randomProperty.Title,
      Starting_Price: randomProperty.Starting_Price,
    });
  }

  return (
    <div className='flex flex-col gap-12'>
      <Header label={`Calculate the Value of Your ${path}`} />
      <p className='container w-4/3'>
        Whether you own a property or are looking to invest in a flat, independent house, or villa, 
        our Price Calculator Tool helps you estimate the value accurately. Use this tool to get an 
        instant valuation based on current market trends and property details.
      </p>

      <div className='container'>
        <div className='flex flex-row justify-around'>
          <div className='flex flex-col gap-5'>
            <div className='rounded-md p-4 flex items-center justify-center text-2xl font-bold bg-blue-500 text-white'>
              {formatPrice(less)}
            </div>
            <h1 className='hh text-1xl'>With less amenities</h1>
          </div>
          <div className='flex flex-col gap-5'>
            <div className='rounded-md p-4 flex items-center justify-center text-2xl font-bold bg-blue-500 text-white'>
              {formatPrice(greater)}
            </div>
            <h1 className='hh text-1xl'>With more amenities</h1>
          </div>
        </div>

        <div className='mt-[20px]'>
          <Button label='Calculate again' link={`/tools/${path}`} />
        </div>
      </div>

      <Header label='How it works?' center={false} />

      <div className="container bg-white">
        {/* Steps */}
        <div className="mb-6">
          <h2 className="hh text-xl font-semibold mb-2">1. Select Property Type:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Flat: Ideal for urban living with shared amenities.</li>
            <li>Independent House: Offers privacy and space with individual ownership.</li>
            <li>Villa: Luxurious, spacious living with high-end features and private amenities.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="hh text-xl font-semibold mb-2">2. Enter Location:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>City: Choose the city where the property is located to get a more accurate valuation based on local market trends.</li>
            <li>Neighborhood: Specify the neighborhood to refine the valuation further, considering the specific areas demand and characteristics.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="hh text-xl font-semibold mb-2">3. Provide Property Details:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Size: Enter the property size in square feet or square meters to help calculate the value based on area.</li>
            <li>Number of Bedrooms: Specify the number of bedrooms to reflect the property’s accommodation capacity.</li>
            <li>Number of Bathrooms: Enter the number of bathrooms to indicate the property’s convenience and comfort level.</li>
            <li>Additional Features: List any extra features such as a garden, pool, or parking to account for premium amenities that can enhance property value.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="hh text-xl font-semibold mb-2">4. View Estimated Value:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Instant Valuation: Receive an immediate estimated property value based on the latest market data and trends.</li>
            <li>Breakdown of Factors: Understand the different elements affecting the property’s price, including location, size, and additional features.</li>
          </ul>
        </div>

        <div className="text-gray-600">
          By following these steps, you can easily determine the approximate value of a flat, independent house, or villa, helping you make informed real estate decisions.
        </div>
      </div>

      <GridCards data={random.map((property) => ({
        imgUrl: property.imgurl_1,
        title: property.Title,
        money: property.Starting_Price
      }))} />
    </div>
  );
};

const SuspendedToolsPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Tools />
  </Suspense>
);

export default SuspendedToolsPage;
