import React from 'react'

const Contact = () => {
  return (
    <>
   <div className='mt-3'>
    <span className="flex items-center">
      <span className="h-px flex-1 bg-black"></span>
      <span className="shrink-0 px-6"><h1 className=" text-gray-700 dark:text-black font-extrabold font-serif text-xl sm:text-2xl">
                    Contact-Us
                </h1></span>
      <span className="h-px flex-1 bg-black"></span>
    </span>
    </div>
    <section className="text-gray-600 body-font mx-3 xl:mx-14">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
      "Have Questions? We're Here to Help!"
        
      </h1>
      <p className="mb-8 leading-relaxed">"Our team at FarmConnect is dedicated to supporting you with personalized assistance and expert advice. Reach out for detailed insights into current crop prices, optimized farming practices, and more. We're here to help you thrive in today's dynamic agricultural landscape. Contact us today and let us guide you on your path to success."</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Contact-Us</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="contactusbanner.jpg"/>
    </div>
  </div>
</section>

    </>
  )
}

export default Contact