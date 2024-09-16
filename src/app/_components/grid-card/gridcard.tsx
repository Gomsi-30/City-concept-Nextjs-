import Image from 'next/image';
import Link from 'next/link';

type GridCardData = {
  imgUrl?: string;
  title?: string;
  money?: string;
};

const GridCards = ({ data }: { data: GridCardData[] }) => {
  return (
    <div className='container'>
      <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
        {data.map(({ imgUrl, title, money }, index) => (
          <Link key={index} href={`/property/${title?.replace(/[^A-Za-z0-9]+/g, "-")}`} className='block'>
            <div
              className={`flex flex-col h-[300px] lg:h-[320px] cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`} 
            >
              <div className="relative w-full h-[70%]">
                <Image
                  src={`/articleassets/allProperties/${imgUrl}`}
                  alt='Image not found'
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4 flex flex-col items-start gap-3 h-[30%]">
                <p className="text-xl hh font-bold leading-6 truncate w-full">
                  {title}
                </p>
                <p className="text-md font-semibold text-blue-500">
                  {money}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GridCards;
