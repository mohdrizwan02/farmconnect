'use client';
import Image from 'next/image';
import React from 'react';

const CustomerLogin: React.FC = () => {
    return (
        <>
        <div className="bg-white dark:bg-gray-900">
          <div className="flex justify-center h-screen ">
            <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: "url('loginbanner.jpg')" }}>
              <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                <div>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">Farmconnect</h2>
                  <p className="max-w-xl mt-3 text-gray-300">
                    
                  </p>
                </div>
              </div>
            </div>
    
            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
              <div className="flex-1">
               <div className="text-center">
                 <div className='text-white text-3xl font-bold font-serif mb-6'>CUSTOMER LOGIN</div> 
                  <div className="flex justify-center items-center mx-auto">
                  <Image
                      className="w-auto h-20 sm:h-20"
                      src="/logo.png"
                      alt="Logo"
                      width={100}
                      height={30}
                      style={{ filter: 'invert(100%)' }}
                    />
                    <h1 className='text-2xl text-white mx-3 font-bold'>FARM CONNECT</h1>
                  </div>
                  
                </div>
    
                <div className="mt-6">
                  <form>
                    <div className='m-2'>
                      <label htmlFor="username" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Username</label>
                      <input type="text" name="username" id="username" placeholder="username" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className='m-2'>
                      <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                      <input type="password" name="password" id="password" placeholder="Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
    
                    <div className="mt-6 mx-2">
                      <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign in
                      </button>
                    </div>
                  </form>
                  <p className="mt-4 justify-center text-center text-gray-600 dark:text-gray-400">or</p>
                    <div className="mt-6 mx-2">
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                      Sign in with OTP
                    </button>
                  </div>
                  <p className="mt-6 text-sm text-center text-gray-400">Don't have an account yet? <a href="./register" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>  
      );
};

export default CustomerLogin;
