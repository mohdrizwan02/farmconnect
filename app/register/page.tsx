'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Mininavbar from '../components/Mininavbar.tsx';
import Otpsignup from '../components/Otpsignup.tsx';
const Register: React.FC = () => {
  
    return (
        <>
          <Mininavbar/>
          <Otpsignup/> 
        </>
    );
}
export default Register;