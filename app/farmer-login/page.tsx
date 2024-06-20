'use client';
import  { useState } from 'react';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

const FarmerLogin: React.FC = () => {
  const [phone,setphone] = useState('');
  const [otp,setotp] = useState('');
  const [password,setpassword]=useState('');
  const [useOtp, setUseOtp] = useState(false);
  const [otpGenerated, setOtpGenerated] = useState(false);
  const router= useRouter();
  const [derror,setderror]=useState('');
  const handleOtpLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone, otp, useOtp: true })
      });
  
      const result = await res.json();
      if (res.ok) {
        
        console.log(result.message);
      } else {
       
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  const generateOtp = async () => {
    setOtpGenerated(true);
    try {
      const res = await fetch('/api/auth/generate-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone })
      });
  
      const result = await res.json();
      if (res.ok) {
        
        console.log(result.message);
      } else {
        
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error generating OTP:', error);
    }
  };
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
     
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({phone,password}),
      });
  
      const result = await response.json();
      if (response.ok) {
        
        console.log(result.message);
        if(result.message=='Invalid phone number or password' ){
          setderror('Invalid phone number or password')
        }
        else{
          router.push('./home')
          
        }
      } else {
        // Handle login errors
        console.error(result.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };
  
  return (
    <>
    <div className="bg-white dark:bg-black">
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
            {derror && (
                      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 my-2 rounded" role="alert">
                        <strong className="font-bold">Error:</strong>
                        <span className="block sm:inline pl-2">{derror}</span>
                      </div>
                    )}
            {useOtp ? (
          <form onSubmit={handleOtpLogin}>
           
            <div className="m-2">
              <label htmlFor="phone" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                Phone Number
              </label>
              <input
                onChange={(e)=>setphone(e.target.value)}
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
                  onChange={(e)=>setotp(e.target.value)}
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
                onChange={(e)=>setphone(e.target.value)}
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
                onChange={(e)=>setpassword(e.target.value)}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                required
              />
            </div>
            <div className="mt-6 mx-2">
              <button
              onClick={handleLogin}
               className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
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


