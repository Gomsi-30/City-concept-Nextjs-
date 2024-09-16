import Image from "next/image";
import Search from './search';

export const SimpleCard = () => {
  return (
    <div className="container ">
      <div className="flex flex-col xl:flex-row gap-8">
       
        <div className="flex flex-col justify-center w-full xl:w-1/2 space-y-4 md:space-y-6">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Ready to Move Properties in the US
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700">
            Explore a variety of ready-to-move properties across the US. Find your next home with ease and comfort.
          </p>

          <Search />
        </div>

  
        <div className="relative w-full xl:w-1/2 h-64 md:h-80 lg:h-88">
          <Image
            alt="Banner"
            src="/articleassets/1.jpg"
            fill
            className="object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleCard;
