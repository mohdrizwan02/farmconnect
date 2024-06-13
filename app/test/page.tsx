import Image from 'next/image';
import React from 'react';
import '../styles/custom.css';
export default function Home() {
  return (
    <>     <section className="header-section">
    <div className="max-w-7xl mx-auto">
      <h1>Who We Are</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="description text-lg">
            Digital Green is a global development organization that is building an AI-powered assistant to help small-scale farmers around the world improve their productivity and incomes. Since 2008, it has worked with front line extension agents to boost the cost-effectiveness of public extension systems by offering innovative development models, technologies, and services to farmers. The result has been a 10-fold cut in costs and a 24% rise in income levels. But our work is far from done.
          </p>
        </div>
        <div className="image-container">
          <Image
            src="/images/your-image.jpg" // Update with the correct image path
            alt="Digital Green Presentation"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  </section>
  <section className="mission-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="image-container">
            <Image
              src="/images/your-second-image.jpg" // Update with the correct image path
              alt="Farmer Image"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h2>Our Mission</h2>
            <p className="text-lg">
              To create a world where farmers use digital tools and data to improve their productivity, sustainability, and income levels.
            </p>
          </div>
        </div>
      </div>
    </section>
</>

  );
}