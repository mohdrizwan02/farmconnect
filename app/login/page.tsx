'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Mininavbar from '../components/Mininavbar.tsx';
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
        <Mininavbar/>
        <div className="min-h-screen  bg-gray-900 text-zinc-100 flex flex-col justify-center items-center p-4">
            
            <div className="flex justify-center items-center mb-3">
                <Image
                    className="w-auto h-16 sm:h-16"
                    src="/logo.png"
                    alt="Logo"
                    width={100}
                    height={30}
                    style={{ filter: 'invert(100%)' }}
                />
                <div className="text-3xl mx-3">
                FARMCONNECT
                </div>
            </div>
            <div className="text-center  flex items-center justify-around">
                <div className='md:max-sm:flex-col'>
                    <div>
                <h1 className="mt-4 text-gray-600 dark:text-gray-400 font-extrabold font-serif md:text-lg">
                    Welcome back
                </h1>
                <h1 className="mt-4 text-2xl font-medium text-white font-serif capitalize lg:text-3xl dark:text-white">
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
                        style={{ filter: 'invert(100%)' }}
                        />
                        <h1 className="text-2xl mt-3">FARMER</h1>
                    </button>
                    <button onClick={handleCustomerLogin} className="flex flex-col items-center">
                        <img
                        src="/customer.png"
                        alt="Button 2"
                        className="w-32 h-32 object-cover hover:opacity-80 transition-opacity"
                        style={{ filter: 'invert(100%)' }}
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