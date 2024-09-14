"use client";

import Link from 'next/link';
import ContactForm from '../_components/contactus/contactus'



const ContactUs = () => {
  



  return (
    <div className="container flex flex-col gap-12">

      {/* Form and Contact Information */}
      <div className="flex items-center flex-col lg:flex-row gap-12 lg:gap-40 ">
        {/* Contact Form */}
       

        {/* Contact Information */}
        <div className="flex flex-col gap-9 w-full max-w-screen-xl">
        <h1 className="hh text-4xl font-bold">Contact Us</h1>
        <div>
           
            <h2 className="text-2xl hh font-bold">Address</h2>
            <Link href="mailto:info@example.com" >
              <p className="text-sm font-semibold text-blue-600 hover:underline">Edificio Parque Oceano
Rua Dr. José Joaquim Almeida, N. 2 - 3 E,
2780-322 Oeiras, Portugal</p>
            </Link>
          </div>
          <div>
            <h2 className="text-2xl hh font-bold">Phone:</h2>
           
              <p className="text-sm font-semibold text-blue-600 hover:underline">+ 351 21 114 24 96</p>
           
          </div>

          <div>
            <h2 className="text-2xl hh font-bold">Email:</h2>
            <div className='mt-4 am:mt-0 flex flex-col  sm:flex-row sm:gap-5'>
                    <h2 className="text-xl font-bold">Main:</h2>
                    <Link href="info@starsinsider.com" className='underline'>
                    info@starsinsider.com
                    </Link>
            </div>
            <div className='flex flex-col  sm:flex-row sm:gap-5'>
                    <h2 className="text-xl font-bold">Advertising:</h2>
                
                    <Link href="advertising@starsinsider.com"  className='underline'>advertising@starsinsider.com</Link>
                </div>
          </div>
        </div>
        <div className='w-[90%] lg:w-[80%]'><ContactForm /></div>
      </div>

   
    </div>
  );
};

export default ContactUs;