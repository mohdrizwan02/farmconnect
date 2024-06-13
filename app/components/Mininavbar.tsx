'use client';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const Mininavbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setNav(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex justify-between sticky top-0 z-50 items-center h-24 mx-auto px-4 text-white bg-black'>
      <a className="flex title-font font-medium items-center text-gray-900" href="#">
        <Image
          className="w-auto h-10"
          src="/logo.png"
          alt="Logo"
          width={100}
          height={30}
          style={{ filter: 'invert(100%)' }}
        />
        <span className="ml-3 text-xl text-white">FARM CONNECT</span>
      </a>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:cursor-pointer hover:text-gray-500 hover:underline'>Home</li>
        <li className='p-4 hover:cursor-pointer hover:text-gray-500 hover:underline'>About</li>
        <li className='p-4 hover:cursor-pointer hover:text-gray-500 hover:underline'>Services</li>
        <Link href='./contact-us'><li className='p-4 hover:cursor-pointer hover:text-gray-500 hover:underline'>Contact</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50 flex flex-col justify-between' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <div>
          <a className="flex title-font font-medium items-center text-gray-900 mt-2" href="#">
            <Image
              className="w-auto h-10"
              src="/logo.png"
              alt="Logo"
              width={100}
              height={30}
              style={{ filter: 'invert(100%)' }}
            />
            <span className="ml-3 text-xl text-white">FARM CONNECT</span>
          </a>
          <a href='/'><li className='p-4 border-b hover:cursor-pointer border-gray-600'>Home</li></a>
          <a href=''><li className='p-4 border-b hover:cursor-pointer border-gray-600'>About</li></a>
          <a href=''><li className='p-4 border-b hover:cursor-pointer border-gray-600'>Services</li></a>
          <a href='./contact-us'><li className='p-4 border-b hover:cursor-pointer border-gray-600'>Contact</li></a>
        </div>
        
      </ul>
    </div>
  );
};
export default Mininavbar;
