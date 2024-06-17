'use client'
import React, { useState } from 'react';

const images = [
  {
    id: 1,
    src: 'loginbanner.jpg',
    title: 'Marketplace',
    description: 'Description for  Marketplace',
    buttonText: 'EXPLORE MORE'
  },
  {
    id: 2,
    src: '/images/image2.jpg',
    title: 'Farm-Bot',
    description: 'description about Farm-Bot',
    buttonText: 'EXPLORE MORE'
  },
  {
    id: 3,
    src: '/images/image3.jpg',
    title: 'trend and analysis',
    description: 'Description for trends and analysis',
    buttonText: 'EXPLORE MORE'
  },
  {
    id: 4,
    src: '/images/image4.jpg',
    title: 'News and updates',
    description: 'Description for News and updates',
    buttonText: 'EXPLORE MORE'
  },
  {
    id: 5,
    src: '/images/image5.jpg',
    title: 'Geoloaction services',
    description: 'Description for this service',
    buttonText: 'EXPLORE MORE'
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index: number) => {
    if (index >= images.length) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };

  return (
    <div className="relative w-full h-[66vh] overflow-hidden">
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0 h-full relative">
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{image.title}</h2>
              <p className="mb-4">{image.description}</p>
              
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`cursor-pointer h-3 w-3 bg-gray-300 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : ''
            }`}
            onClick={() => showSlide(index)}
          ></span>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-2 py-1"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 px-2 py-1"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
