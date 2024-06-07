import React from 'react';
import Image from 'next/image';
const Mininavbar: React.FC = () => {
  return (
    <header className="text-white bg-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <div className="flex justify-between items-center w-full md:w-auto mb-4 md:mb-0">
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
          <div className="flex items-center space-x-5 md:hidden">
            <a className="text-xl hover:text-gray-300 hover:underline cursor-pointer" href="./register">Register</a>
            <a href="./login">
              <button className="inline-flex items-center bg-white border-2 py-1 px-4 focus:outline-none hover:bg-gray-400 rounded text-black text-base">
                Login
              </button>
            </a>
          </div>
        </div>
        <nav className="flex flex-wrap items-center text-base justify-center w-full md:w-auto md:flex-grow">
          <a className="hover:text-gray-300 cursor-pointer mx-3">Home</a>
          <a className="hover:text-gray-300 cursor-pointer mx-3">About Us</a>
          <a className="hover:text-gray-300 cursor-pointer mx-3">Contact</a>
        </nav>
        <div className="hidden md:flex items-center space-x-5">
          <a className="text-xl hover:text-gray-300 hover:underline cursor-pointer" href="./register">Register</a>
          <a href="./login">
            <button className="inline-flex items-center bg-white border-2 py-1 px-4 focus:outline-none hover:bg-gray-400 rounded text-black text-base">
              Login
            </button>
          </a>
        </div>
      </div>
    </header>
  

  );
};

export default Mininavbar;
