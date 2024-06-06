'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
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
        <div className='h-screen items-center'>
            
            <div className='text-4xl text-center mt-10 mb-20'>
                FARMCONNECT
            </div>
            <div className="flex justify-center items-center  ">
                
                <div className="container  mx-auto px-8 md:px-40 sm:px-25 ">
                    
                    <div className="lg:flex ">
                        
                        <div className="lg:w-1/2" >
                            <Image
                                className="w-auto h-16 sm:h-16"
                                src="/logo.png"
                                alt="Logo"
                                width={100}
                                height={30}
                                
                            />

                            <h1 className="mt-4 text-gray-600 dark:text-gray-800 font-extrabold  font-serif md:text-lg">Welcome back</h1>

                            <h1 className="mt-4 text-2xl font-medium text-gray-800 font-serif   capitalize lg:text-3xl dark:text-black">
                                Choose your account type
                            </h1>
                        </div>

                        <div className="mt-8  lg:w-1/2 lg:mt-0  border-2 py-4 px-2">
                            <div className='flex md:justify-around justify-between '>
                                
                                <button onClick={handleFarmerLogin}>
                                    <img
                                        src="/farmer.png"
                                        alt="Button 1"
                                        className="w-32 h-32 object-cover hover:opacity-80 transition-opacity"
                                    />
                                    <h1 className='text-2xl mt-3'>FARMER</h1>
                                </button>
                                
                            
                            
                                <button onClick={handleCustomerLogin}>
                                    <img
                                        src="/customer.png"
                                        alt="Button 2"
                                        className="w-32 h-32 object-cover hover:opacity-80 transition-opacity"
                                    />
                                    <h1 className='text-2xl mt-3'>CUSTOMER </h1>
                                </button>
                            
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
        
        
        </>      
    );
};

export default Login;