import ToolSearch from '../../_components/article/tools';
import Header from '../../_components/heading/header';
import { allProperty } from '../../_components/data/allproperties';
import GridCards from '../../_components/grid-card/gridcard';
import SuspenseBoundary from '../../_components/SuspenseBoundary'; // Import the SuspenseBoundary component


type Property =  {
  imgurl_1: string;
  Title: string;
  Starting_Price: string;
}

const segments = ['villa', 'flat', 'house','Villa', 'Flat', 'House'];

export const generateStaticParams = () => {
  return segments.map(segment => ({
    tools: `${segment}`, 
  }));
};

export const generateMetadata = () => {
  return {
    title: 'Tools Not Found',
    description: 'No tool found for the given parameters',
  };
};

const Tools = () => {
  const random: Property[] = [];
  for (let i = 0; i < 3; i++) {
    random.push(allProperty[Math.floor(Math.random() * allProperty.length)]);
  }

  return (
    <div className='flex flex-col gap-12'>
      <Header label='Calculate the Value of Your Flat' />
      <div className='container'>
        <p className='text-lg px-[45px] sm:px-0'>
          Whether you own a property or are looking to invest in a flat, independent house, or villa, our Price Calculator Tool helps you estimate the value accurately. Use this tool to get an instant valuation based on current market trends and property details.
        </p>
      </div>
      <div className='container'>
        <SuspenseBoundary>
          <ToolSearch />
        </SuspenseBoundary>
      </div>
      <Header label='How it works?' center={false} />
      <div className="container bg-white">
        {/* Step 1 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Select Property Type:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Flat: Ideal for urban living with shared amenities.</li>
            <li>Independent House: Offers privacy and space with individual ownership.</li>
            <li>Villa: Luxurious, spacious living with high-end features and private amenities.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Enter Location:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>City: Choose the city where the property is located to get a more accurate valuation based on local market trends.</li>
            <li>Neighborhood: Specify the neighborhood to refine the valuation further, considering the specific area&apos;s demand and characteristics.</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Provide Property Details:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Size: Enter the property size in square feet or square meters to help calculate the value based on area.</li>
            <li>Number of Bedrooms: Specify the number of bedrooms to reflect the property&apos;s accommodation capacity.</li>
            <li>Number of Bathrooms: Enter the number of bathrooms to indicate the property&apos;s convenience and comfort level.</li>
            <li>Additional Features: List any extra features such as a garden, pool, or parking to account for premium amenities that can enhance property value.</li>
          </ul>
        </div>

        {/* Step 4 */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. View Estimated Value:</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Instant Valuation: Receive an immediate estimated property value based on the latest market data and trends.</li>
            <li>Breakdown of Factors: Understand the different elements affecting the property&apos;s price, including location, size, and additional features.</li>
          </ul>
        </div>

        {/* Conclusion */}
        <div className="text-gray-600">
          By following these steps, you can easily determine the approximate value of a flat, independent house, or villa, helping you make informed real estate decisions.
        </div>
      </div>

      <GridCards data={random.map((property: Property) => ({
        imgUrl: property.imgurl_1, // Adjust according to your needs
        title: property.Title,
        money: property.Starting_Price
      }))} />
    </div>
  );
}

export default Tools;
