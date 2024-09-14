'use client'
import BlogCard2 from '../../_components/blog-card2/blogcard2';
import { market } from '../../_components/data/marketnews';
import ContactForm from '../../_components/contactus/contactus'
import { usePathname } from 'next/navigation'

const Articles = () => {
  let path = usePathname()
  const data = market.slice(0, 8);
  const data1 = market.slice(8, 11);
  path = path.split('/')[2]
  console.log(path)
  return (
    <div className='container '>
      <div className='flex flex-col gap-[130px]'>

        <div className='flex flex-col sm:flex-row gap-[90px]'>
          <div className='w-full sm:w-[70%] flex flex-col gap-1'>
            <h1 className='hh text-2xl font-semibold'>Market News</h1>
            <BlogCard2 data={data} section={path} />
          </div>
          <div className='w-full sm:w-[30%] flex flex-col gap-1 mt-10 sm:mt-0'>
            <h1 className='hh text-2xl font-semibold'>Whats More</h1>
            <BlogCard2 data={data1} section={path} showContent={false} />
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Articles;
