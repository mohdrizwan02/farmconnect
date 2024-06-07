import React from 'react';
import Image from 'next/image';
export default function OtpSignup() {
    return (
      <div className="min-h-screen bg-gray-900 text-zinc-100 flex flex-col justify-center items-center p-4">
    <div className="w-full max-w-3xl flex flex-col lg:flex-col justify-between items-center mb-6">
      <div className="flex justify-center items-center mb-4 lg:mb-5 lg:mr-6">
        <Image
          className="w-auto h-16 sm:h-16"
          src="/logo.png"
          alt="Logo"
          width={100}
          height={30}
          style={{ filter: 'invert(100%)' }}
        />
        <div className="text-3xl mx-3 ">
          FARMCONNECT
        </div>
      </div>
      <div className="flex flex-col items-start  lg:flex-grow lg:mx-12 md:mx-10">
        <h2 className="text-2xl font-semibold mb-4 lg:mb-0">Get Started</h2>
        <p className="mb-6 lg:mb-5">
          Thank you for showing interest in Farmconnect. Please enter your mobile number to get started.
        </p>
      </div>
      <div className="bg-gray-700 p-7 rounded-lg shadow-lg w-full max-w-2xl lg:w-full ">
        <form>
          <div className="mb-4">
            <label className="block text-zinc-300 text-sm font-bold mb-2" htmlFor="mobile-number">
              Please Enter Your Mobile Number
            </label>
            <div className="flex items-center border rounded-lg overflow-hidden">
              <select className="bg-zinc-700 text-gray-200 p-2 border-r">
                <option>+91 🇮🇳</option>
              </select>
              <input
                className="flex-1 p-2 text-gray-900"
                type="text"
                id="mobile-number"
                placeholder="Mobile No"
                required
              />
            </div>
          </div>
          <button className="bg-zinc-500 text-white py-2 px-4 rounded-lg w-full" type="submit">
            Send OTP
          </button>
        </form>
        <p className="mt-2 text-sm text-zinc-400 text-center">
          By signing in I agree with Agribazaar <a href="#" className="text-blue-400">Terms of Use</a>
        </p>
      </div>
    </div>
  </div>

    
    )
}