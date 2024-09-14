import Image from 'next/image';

type TestimonialData = {
  imgUrl: string;
  author: string;
  title: string;
};

const Testimonial = ({ data }: { data: TestimonialData[] }) => {
  return (
    <div className='container'>
    <div className='container mx-auto flex flex-col md:flex-row gap-6 justify-between p-4'>
      {data.map(({ imgUrl, author, title }, index) => (
        <div key={index} className='flex flex-col items-center p-4 shadow-md rounded-lg gap-3'>
          <div className='relative h-16 w-16'>
            <Image
              alt={author}
              src={imgUrl}
              fill
              className='rounded-full object-center object-cover'
            />
          </div>
          <div className='flex flex-col items-center gap-1'>
            <div className='font-semibold text-lg'>{author}</div>
            <div className='font-medium text-md text-center line-clamp-2'>{title}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Testimonial;
