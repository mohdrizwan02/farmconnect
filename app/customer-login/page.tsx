'use client';
import Image from 'next/image';
import React from 'react';
import CustomerLogin from '../../components/CustomerLogin.tsx';
import LoginSignupheader from '../../components/LoginSignupheader.tsx';
const CustomerLoginPage = () => {
  return (
  <>
  <LoginSignupheader/>
  <CustomerLogin />
  </>
  );
};

export default CustomerLoginPage;