import BlogCard2 from '../../_components/blog-card2/blogcard2';
import { real } from '../../_components/data/real';
import { properties } from '../../_components/data/properties';
import { market } from '../../_components/data/marketnews';
import ContactForm from '../../_components/contactus/contactus';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Real Estate",
};
const Articles = () => {
  const data = real.slice(0, 8); 
  const data1 = properties.slice(0,4); 
  const data2 = market.slice(0,6); 
  const path = 'realestate';
  return (
    <div className='container'>
      <div className='flex flex-col gap-[130px]'>

       
        <div className='flex flex-col sm:flex-row gap-[90px]'>
          <div className='w-full sm:w-[70%] flex flex-col gap-1'>
            <h1 className='hh text-2xl font-semibold'>Real Estate</h1>
            <BlogCard2 data={data} section={path} />
          </div>

          
          <div className='w-full sm:w-[30%] flex flex-col gap-1 mt-10 sm:mt-0'>
            <h1 className='hh text-2xl font-semibold'>What&apos;s More</h1>
            <BlogCard2 data={data1} section='properties' showContent={false} />
          </div>
        </div>

       
      
          <div className='w-full flex flex-col gap-3'>
            <h1 className='hh text-3xl font-semibold'>Must Read</h1>
            <BlogCard2 data={data2} section='marketnews' showContent={false} />
          </div>
          <ContactForm />
        </div>
    </div>
  );
};

export default Articles;
