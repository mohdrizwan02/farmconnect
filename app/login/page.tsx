'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Footer from '../../components/Footer.tsx';
import Header from '../../components/Header.tsx';
import LoginSignupheader from '../../components/LoginSignupheader.tsx';
const Login: React.FC = () => {
    const router = useRouter();

    const handleFarmerLogin = () => {
        router.push('./farmer-login');
    };

    const handleCustomerLogin = () => {
        router.push('./customer-login');
    };
    return (
        <>
        <LoginSignupheader/>
        <div className="    bg-white text-black flex flex-col justify-center items-center py-16 p-4">
            <div className="flex justify-center items-center mb-3">
                <Image
                    className="w-auto h-16 sm:h-16"
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={30}
                    
                />
                <div className="text-3xl mx-3">
                FARMCONNECT
                </div>
            </div>
            <div className="text-center  flex items-center justify-around">
                <div className='md:max-sm:flex-col'>
                    <div>
                <h1 className="mt-4 text-gray-700 dark:text-gray-700 font-extrabold font-serif md:text-lg">
                    Welcome back
                </h1>
                <h1 className="mt-4 text-2xl font-medium text-gray-800 font-serif capitalize lg:text-3xl dark:text-gray-800">
                    Choose your account type
                </h1>
                </div>
                <div className="mt-8  lg:w-1/2 lg:mt-0 justify-center    py-4 px-2">
                <div className="flex flex-col md:flex-row justify-around items-center md:space-x-8 lg:space-x-16 p-4">
                    <button onClick={handleFarmerLogin} className="flex flex-col items-center mb-4 md:mb-0">
                        <img
                        src="/farmer.png"
                        alt="Button 1"
                        className="w-32 h-32 object-cover hover:opacity-80 transition-opacity"
                        
                        />
                        <h1 className="text-2xl mt-3">FARMER</h1>
                    </button>
                    <button onClick={handleCustomerLogin} className="flex flex-col items-center">
                        <img
                        src="/trader.png"
                        alt="Button 2"
                        className="w-32 h-32 object-cover hover:opacity-80 transition-opacity"
                        
                        />
                        <h1 className="text-2xl mt-3">CUSTOMER</h1>
                    </button>
                    </div>
                </div>
                </div>
            </div>
        </div> 
        
        </>      
       
            
    );
};

export default Login;