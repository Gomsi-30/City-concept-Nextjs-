import BlogCard2 from '../../_components/blog-card2/blogcard2';
import { real } from '../../_components/data/real';
import ContactForm from '../../_components/contactus/contactus';

const Articles = () => {
  const data = real.slice(0, 8); 
  const data1 = real.slice(8, 11); 
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
