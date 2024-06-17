'use client';
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [nav, setNav] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setNav(false);
    }
  };

  const handleLinkClick = () => {
    setNav(false);
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [nav]);

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
    <div className='flex justify-between items-center  top-0 z-50 h-24 mx-auto px-4 text-white bg-black'>
      <a className="flex title-font font-medium items-center text-gray-900" href="./">
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
        <Link href='./'><li className='p-4 hover:cursor-pointer hover:text-gray-400 hover:underline'>Home</li></Link>
        <Link href='./about-us'><li className='p-4 hover:cursor-pointer hover:text-gray-400 hover:underline'>About</li></Link>
        <Link href='./services'><li className='p-4 hover:cursor-pointer hover:text-gray-400 hover:underline'>Services</li></Link>
        <Link href='./contact-us'><li className='p-4 hover:cursor-pointer hover:text-gray-400 hover:underline'>Contact</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul ref={navRef} className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50 flex flex-col justify-between' : 'ease-in-out duration-500 fixed left-[-100%]'}>
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
          <a href='./' onClick={handleLinkClick}><li className='p-4 border-b hover:cursor-pointer border-gray-600'>Home</li></a>
          <Link href='./about-us' onClick={handleLinkClick}><li className='p-4 border-b hover:cursor-pointer border-gray-600'>About</li></Link>
          <Link href='./services' onClick={handleLinkClick}><li className='p-4 border-b hover:cursor-pointer border-gray-600'>Services</li></Link>
          <Link href='./contact-us' onClick={handleLinkClick}><li className='p-4 border-b hover:cursor-pointer border-gray-600'>Contact</li></Link>
        </div>
        <div className='mb-4 flex flex-row justify-center gap-5 items-center'>
          <a  className='w-1/4 p-2 px-4 m-2 justify-center hover:bg-gray-600 rounded-lg' href='./login'><button  text-black bg-white rounded-lg  onClick={handleLinkClick}>Login</button></a>
          <a className='w-auto p-2 px-4 m-2 text-black bg-green-700 rounded-lg hover:bg-green-500' href='./register'><button  onClick={handleLinkClick}>Register</button></a>
        </div>
      </ul>
    </div>
  );
};

export default Header;  
