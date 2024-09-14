import Image from 'next/image';
import Link from 'next/link';
import CreationDate from '../global/creation-date';

type GridCardData = {
  articleNumber: number;
  imgUrl: string;
  title?: string;
  author?: string;
  authorImage?: string;
  readTime?: string;
  contents?: string[];
  section?: string;
};

type gridData = {
  data: GridCardData[];
};

const BlogCard = ({ data }: gridData) => {
  let validData = Array.isArray(data) ? data.filter(item => item !== undefined) : [];
  validData = validData.slice(0, 12);

  return (
    <div className='container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {validData.map(({ imgUrl, title, articleNumber, contents }) => (
        <Link key={articleNumber} href={`/${title?.replace(/[^A-Za-z0-9]+/g, "-")}`} >
          <div className='flex flex-col h-full cursor-pointer overflow-hidden'>
            <div className='relative w-full h-64 sm:h-48 md:h-56 lg:h-64'>
              <Image
                src={`/articleassets/blogimages/${imgUrl}`}
                alt='Not-found'
                layout="fill"
                objectFit="cover"
                className='absolute inset-0'
              />
            </div>
            <div className='flex flex-col gap-2 py-4'>
              <p className='text-xs sm:text-sm md:text-md lg:text-lg font-semibold text-gray-700'>
                <CreationDate articleNumber={articleNumber} />
              </p>
              <p className='text-lg sm:text-lg md:text-lg lg:text-lg  font-bold sm:font-semibold text-gray-900'>
                {title}
              </p>
              <p className='text-lg sm:text-lg md:text-lg lg:text-md font-regular text-gray-600 line-clamp-3'>
                {contents?.join(' ')}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
