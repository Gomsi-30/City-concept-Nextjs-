import BlogCard2 from '../../_components/blog-card2/blogcard2';
import { loan } from '../../_components/data/loan';
import ContactForm from '../../_components/contactus/contactus'
import { market } from '../../_components/data/marketnews';
import { properties } from '../../_components/data/properties';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Loans",
};
const Articles = () => {
  const data = loan.slice(0, 8);
  const data1 = market.slice(0,4); 
  const data2 = properties.slice(0,6); 
  const path = 'loan'
  return (
    <div className='container '>
      <div className='flex flex-col gap-[130px]'>

        <div className='flex flex-col sm:flex-row gap-[90px]'>
          <div className='w-full sm:w-[70%] flex flex-col gap-1'>
            <h1 className='hh text-2xl font-semibold'>Loans</h1>
            <BlogCard2 data={data} section={path} />
          </div>
          <div className='w-full sm:w-[30%] flex flex-col gap-1 mt-10 sm:mt-0'>
            <h1 className='hh text-2xl font-semibold'>What&apos;s More</h1>
            <BlogCard2 data={data1} section='marketnews' showContent={false} />
          </div>
        </div>

        <div className='w-full flex flex-col gap-3'>
            <h1 className='hh text-3xl font-semibold'>Must Read</h1>
            <BlogCard2 data={data2} section='properties' showContent={false} />
          </div>
          <ContactForm />
        </div>
    </div>
  );
};

export default Articles;
