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
};

type GridDataProps = {
  data: GridCardData[];
  section?: string;
  extra?: string;
};

const BlogCard2 = ({ data, section, extra, showContent = true }: GridDataProps & { showContent?: boolean }) => {
  return (
    <div
      className={`grid gap-8 grid-cols-1 sm:grid-cols-1 ${
        data.length === 6
          ? 'md:grid-cols-3 lg:grid-cols-3 max-w-9xl w-full w-[80%]' 
          : data.length === 4
          ? 'md:grid-cols-1 lg:grid-cols-1'
          : 'md:grid-cols-2 lg:grid-cols-2'
      }`}
    >
      {data.map(({ imgUrl, title, articleNumber, contents }) => (
        <Link
          key={articleNumber}
          href={`/${extra ? extra : section}-${title?.replace(/[^A-Za-z0-9]+/g, '-')}`}
        >
          <div className="flex flex-col h-full w-full max-w-full cursor-pointer overflow-hidden">
            <div className="relative w-full h-64 sm:h-48 md:h-56 lg:h-64">
              <Image
                src={`/articleassets/articleimages/${imgUrl}`}
                alt="Not-found"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
            <div className="flex flex-col gap-2 py-4">
              <p className="text-sm font-regular text-gray-700">
                <CreationDate articleNumber={articleNumber} />
              </p>
              <p className="line-clamp-2 text-xl sm:text-xl md:text-md lg:text-md font-bold md:font-semibold text-gray-900">
                {title}
              </p>
              {showContent && (
                <p className="line-clamp-3 text-lg sm:text-lg md:text-lg lg:text-md font-regular text-gray-600">
                  {contents?.join(' ')}
                </p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard2;
