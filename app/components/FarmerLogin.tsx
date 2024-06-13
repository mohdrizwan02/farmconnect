'use client';
import  { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';
const FarmerLogin: React.FC = () => {
  
  const [useOtp, setUseOtp] = useState(false);
  const [otpGenerated, setOtpGenerated] = useState(false);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add login logic here
  };

  const handleOtpLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add OTP login logic here
  };

  const generateOtp = () => {
    setOtpGenerated(true);
    // Add logic to generate OTP here
  };
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
             <div className='text-white text-3xl font-bold font-serif mb-6'>FARMER LOGIN</div> 
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
            {useOtp ? (
          <form onSubmit={handleOtpLogin}>
            <div className="m-2">
              <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            {otpGenerated && (
              <div className="m-2">
                <label htmlFor="otp" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  placeholder="Enter OTP"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  required
                />
              </div>
            )}
            <div className="mt-6 mx-2">
              {otpGenerated ? (
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Login
                </button>
              ) : (
                <button
                  type="button"
                  onClick={generateOtp}
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  Generate OTP
                </button>
              )}
            </div>
          </form>
        ) : (
          <form onSubmit={handleLogin}>
            <div className="m-2">
              <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="m-2">
              <label htmlFor="password" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="mt-6 mx-2">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign in
              </button>
            </div>
          </form>
        )}
        <p className="mt-4 justify-center text-center text-gray-600 dark:text-gray-400">or</p>
        <div className="mt-6 mx-2">
          <button
            onClick={() => setUseOtp(!useOtp)}
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
          >
            {useOtp ? 'Back to Sign In' : 'Sign in with OTP'}
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

export default FarmerLogin;


/*import React, { useState } from 'react';

const FarmerLogin: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    
    setIsOtpSent(true);
  };

  const handleLogin = () => {
    
  };

  const handleResendOtp = () => {
    
    setOtp('');
    setIsOtpSent(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Farmer Login</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          {!isOtpSent ? (
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="phone-number" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="tel"
                  autoComplete="tel"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
            </div>
          ) : (
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="otp" className="sr-only">
                  OTP
                </label>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="OTP"
                  value={otp}
                  onChange={handleOtpChange}
                />
              </div>
            </div>
          )}

          <div>
            {!isOtpSent ? (
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                onClick={handleSendOtp}
              >
                Send OTP
              </button>
            ) : (
              <>
                <button
                  type="button"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <button
                  type="button"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  onClick={handleResendOtp}
                >
                  Resend OTP
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FarmerLogin;*/