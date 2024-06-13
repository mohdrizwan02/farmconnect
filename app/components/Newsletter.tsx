import React from 'react';

const Newsletter = () => {
  return (
    <div className="relative bg-black">
        <div className="absolute inset-x-0 top-0">
            <svg viewBox="0 0 224 12" fill="currentColor" className="w-full text-white" preserveAspectRatio="none">
                <path
                    d="M0,12.0441132 C48.8902582,5.770973 86.2235915,2.63440287 112,2.63440287 C137.776408,2.63440287 175.109742,5.770973 224,12.0441132 L224,0 L0,0 L0,12.0441132 Z">
                </path>
            </svg>

        </div>
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
      <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
        Subscribe to our newsletter
      </h2>
      <p className="mb-6 text-base text-indigo-200 md:text-lg">
      "Join our community to stay updated on the latest advancements in sustainable farming, receive expert tips, and connect with fellow farmers committed to a greener future."
      </p>
      <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16" >
        <input
          placeholder="Email"
          required
          type="email"
          className="flex-grow w-full h-12 px-4 mb-3 text-black transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
        >
          Subscribe
        </button>
      </form>

      <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
        
      </p>
      
    </div>
  </div>
</div>

  );
};

export default Newsletter;
