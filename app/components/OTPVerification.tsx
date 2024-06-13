'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface OTPVerificationProps {
  onOtpVerified: () => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ onOtpVerified }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [otp, setOTP] = useState('');
  const [otpVerified, setotpVerified] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMobileNumber(event.target.value);
  };

  const handleOTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Ensure that only digits are allowed and restrict the length to 4
    if (/^\d*$/.test(value) && value.length <= 4) {
      setOTP(value);
    }
  };

  const handleSendOTP = () => {
    // Implement the logic for sending OTP
    console.log('Sending OTP to:', mobileNumber);
    setIsOTPSent(true);
  };

  const handleSubmitOTP = () => {
    // Implement the logic for submitting OTP
    console.log('Submitting OTP:', otp);
    setotpVerified(true);
    onOtpVerified(); // Notify parent component
  };

  const handleReenterPhoneNumber = () => {
    setIsOTPSent(false);
    setMobileNumber('');
    setOTP('');
  };

  return (
    <>  
     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
         <div className="flex justify-center items-center mb-4 lg:mb-5 lg:mr-6">
            <Image
            className="w-auto h-16 sm:h-16"
            src="/logo.png"
            alt="Logo"
            width={100}
            height={30}
            
            />
            <div className="text-3xl mx-3 ">
            FARMCONNECT
            </div>
        </div>
        <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Started</h2>
            <p className="text-gray-600">
            Thank you for showing interest in Farmconnect. Please enter your mobile number to get started.
            </p>
        </div>
        <div className="max-w-2xl w-full bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile-number">
                Please enter your mobile number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <span className="bg-gray-100 px-4 py-2">+91</span>
                <input
                id="mobile-number"
                type="text"
                placeholder="Enter your mobile no. here"
                value={mobileNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 outline-none"
                />
            </div>
            </div>
        {!isOTPSent ? (
          <button
            onClick={handleSendOTP}
            className="bg-red-500 text-white w-full py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Send OTP
          </button>
        ) : (
          <div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                Enter OTP
              </label>
              <input
                id="otp"
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleOTPChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                maxLength={4}
              />
            </div>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={handleSubmitOTP}
                className="bg-green-500 text-white w-full py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                Submit OTP
              </button>
              <button
                onClick={handleReenterPhoneNumber}
                className="bg-gray-500 text-white w-full py-2 rounded-lg hover:bg-gray-600 transition duration-300"
              >
                Re-enter Phone Number
              </button>
            </div>
          </div>
        )}
        <div className="mt-4 text-center text-gray-500">
          Facing trouble? Call us on <a href="tel:+919515269727" className="text-blue-500">+91-9515269727</a>
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">
          By signing in I agree with FarmConnect <a href="#" className="text-blue-500">Terms of Use</a>
        </div>
      </div>
    </div>
    </>
  );
}

export default OTPVerification;
