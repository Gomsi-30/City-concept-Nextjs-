'use client';

import Header from '../heading/header';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Banner: React.FC = () => {
  // State to control when the counting should start
  const [startCounting, setStartCounting] = useState<boolean>(false);

  return (
    <motion.div
      className='bg-blue-500 text-white h-auto w-full flex flex-col py-12 gap-[65px] items-center'
      initial={{ opacity: 0, y: 100 }}    
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }} 
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={() => setStartCounting(true)} // Trigger count start when in view
    >
      <Header label='Explore Over Multiple Options' />

      <div className='container w-full flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-0'>
        {/* Properties */}
        <motion.div
          className='flex flex-col gap-1 items-center sm:items-start'
          initial={{ opacity: 0, y: 100 }}  
          animate={{ opacity: 1, y: 0 }}     
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className='font-bold text-4xl'>
            {startCounting && <CountUp start={0} end={400} duration={2.5} />}+
          </h1>
          <p className='font-semibold text-lg'>Properties</p>
        </motion.div>

        {/* Cities */}
        <motion.div
          className='flex flex-col gap-1 items-center sm:items-start'
          initial={{ opacity: 0, y: 100 }}  
          animate={{ opacity: 1, y: 0 }}  
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className='font-bold text-4xl'>
            {startCounting && <CountUp start={0} end={120} duration={2.5} />}+
          </h1>
          <p className='font-semibold text-lg'>Cities</p>
        </motion.div>

        {/* Delivered */}
        <motion.div
          className='flex flex-col gap-1 items-center sm:items-start'
          initial={{ opacity: 0, y: 100 }}  
          animate={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.8, delay: 0.3 }} 
        >
          <h1 className='font-bold text-4xl'>
            {startCounting && <CountUp start={0} end={230} duration={2.5} />}+
          </h1>
          <p className='font-semibold text-lg'>Delivered</p>
        </motion.div>

        {/* Projects */}
        <motion.div
          className='flex flex-col gap-1 items-center sm:items-start'
          initial={{ opacity: 0, y: 100 }}  
          animate={{ opacity: 1, y: 0 }}    
          transition={{ duration: 0.8, delay: 0.3 }} 
        >
          <h1 className='font-bold text-4xl'>
            {startCounting && <CountUp start={0} end={30} duration={2.5} />}+
          </h1>
          <p className='font-semibold text-lg'>Projects</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
