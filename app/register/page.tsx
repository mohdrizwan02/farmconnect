'use client';
import React, { useState } from 'react';

import OTPVerification from '../components/OTPVerification.tsx';
import Signup from '../components/Signup.tsx';

const Register: React.FC = () => {
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const handleOtpVerification = () => {
    setIsOtpVerified(true);
  };

  return (
    <>
      
      {!isOtpVerified ? (
        <OTPVerification onOtpVerified={handleOtpVerification} />
      ) : (
        <Signup />
      )}
    </>
  );
};

export default Register;
