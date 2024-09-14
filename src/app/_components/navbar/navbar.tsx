'use client'

import { RxCross2 } from "react-icons/rx";
import Items from "./items";
import Logo from "./logo";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='fixed bg-white text-black z-20 py-3 border-b-[1px] shadow-sm w-full h-[74px]'>
      <div className='flex container justify-between z-10'>
        <Logo />
        <Items isOpen={false} closeMenu={closeMenu} />
        <div onClick={handle} className='sm:hidden'>
          <RiMenu3Fill size={34} />
        </div>

        <div className={`fixed px-6 py-6 flex flex-col gap-[20px] z-50 top-0 right-0 h-full w-[65%] max-w-sm bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : `translate-x-full`} transition-transform duration-300 ease-in-out`}>
          <div className='p-6'>
            <div onClick={handle} className='absolute top-5 left-5'><RxCross2 /></div>
            <Items isOpen={isOpen} closeMenu={closeMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
