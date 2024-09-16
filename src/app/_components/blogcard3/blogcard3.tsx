import Image from 'next/image';
import Link from 'next/link';
import CreationDate from '../global/creation-date';

type GridCardData = {
  articleNumber: number;
  imgUrl: string;
  Title?: string;
  Starting_Price?: string; 
  author?: string;
  authorImage?: string;
  readTime?: string;
  contents?: string[];
  section?: string;
};

type GridData = {
  data: GridCardData[];
};

const BlogCard3 = ({ data }: GridData) => {
  // Filter out invalid items and limit the number of items
  let validData = Array.isArray(data) ? data.filter(item => item !== undefined) : [];
  validData = validData.slice(0, 12);

  return (
    <div className='container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {validData.map(({ imgUrl, Title, Starting_Price, articleNumber, contents }) => (
        <Link key={articleNumber} href={`/${Title?.replace(/[^A-Za-z0-9]+/g, "-")}`} passHref>
          <div className='flex flex-col h-full cursor-pointer overflow-hidden'>
            <div className='relative w-full h-64 sm:h-48 md:h-56 lg:h-64'>
              {imgUrl ? (
                <Image
                  src={imgUrl}
                  alt={Title || 'Not-found'}
                  layout="fill"
                  objectFit="cover"
                  className='absolute inset-0'
                />
              ) : (
                <div className='absolute inset-0 bg-gray-200 flex items-center justify-center'>
                  <p className='text-gray-500'>Image not available</p>
                </div>
              )}
            </div>
            <div className='flex flex-col gap-3 p-4'>
              <p className='text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-gray-700'>
                <CreationDate articleNumber={articleNumber} />
              </p>
              <p className='text-md sm:text-lg md:text-md lg:text-lg font-semibold text-gray-900'>
                {Title}
              </p>
              {Starting_Price && (
                <p className='text-sm sm:text-md md:text-sm lg:text-md font-semibold text-gray-800'>
                  {Starting_Price}
                </p>
              )}
              <p className='text-sm sm:text-md md:text-sm lg:text-md font-regular text-gray-600 line-clamp-3'>
                {contents?.join(' ')}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard3;
