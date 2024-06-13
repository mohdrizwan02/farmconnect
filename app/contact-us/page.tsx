'use client';
import Mininavbar from '../components/Mininavbar.tsx'
import React, { useState } from 'react';
import Link from 'next/link';
export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <>
       <Mininavbar/>
        <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-6">
            <div className="w-full py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-600 text-white p-6 mt-4 rounded-lg">
                    <div className="lg:border-r sm:px-3 sm:border-gray-200 pr-2 md:max-sm:border-b md:max-sm:border-gray-200 ">
                    <h3 className="font-bold">Contact Info:</h3>
                    <p>Email: info@farmconnect.com</p>
                    <p>Contact: +91-9515269727</p>
                    </div>
                    <div className="lg:border-r sm:px-3 border-gray-200 pr-2">
                    <h3 className="font-bold">General Queries:</h3>
                    <p>For further information, comments or suggestions please reach out to us at marketing@farmconnect.com</p>
                    </div>
                    <div className="pr-4 sm:px-3">
                    <h3 className="font-bold">Technology:</h3>
                    <p>For further information, comments or suggestions please reach out to us at technology@farmconnect.com</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-md mt-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
                <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">First Name*</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                    />
                    </div>
                    <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">Last Name*</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                    />
                    </div>
                    <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">E-mail*</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                    />
                    </div>
                    <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Phone Number*</label>
                    <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                    />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
                    <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none"
                    rows={4}
                    />
                </div>
                    <div className="col-span-1 md:col-span-2 mb-4">
                    <label className="inline-flex items-start">
                        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 dark:bg-zinc-200" required />
                        <div>
                            
                        <span className="ml-2 text-md text-black  ">
                        I agree to the storage of personal information provided above, and consent to agribazaar representative to contact me. 
                        </span>
                        
                        <br/>
                        
                        </div>
                    </label>
                    </div>
                <div className="flex justify-center">
                    <button
                    type="submit"
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
        </div>
    </>
  );
}
