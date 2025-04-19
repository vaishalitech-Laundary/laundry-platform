import React from 'react';


const ServicesHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center h-[900px] relative">
      {/* Left Side - Text Content */}
      <div className='md:w-1/2 h-full flex items-center justify-center bg-gray-100  px-25'>
      <div className="absolute bottom-0 left-0 w-25 h-25 bg-[#1F3C5F] rounded-tr-full"></div>
      <div className="mb-8 md:mb-0 -mt-16">
        <h1 className="text-4xl md:text-7xl font-bold text-gray-800 mb-4">
          Our Laundry Services
        </h1>
        <p className="text-gray-600 mb-6">
          We provide premium-quality laundry services designed to make your life easier. From everyday clothes to delicate fabrics, our expert cleaning process ensures fresh, clean, and well-maintained garments with every wash.
        </p>
        <button className="bg-[#1F3C5F] text-white py-2 px-6 rounded hover:bg-blue-800 transition duration-300">
          Book a Service Now
        </button>
      </div>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 h-full">
        
        <img
          src="https://s3-alpha-sig.figma.com/img/e02f/aea8/3c3dc266b85c6b836362a122ed772e26?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pcPFfe2e567fWFKUQKOD0GDrullJNzRulCjDkxFRGqt-w9BaBgOCVYZPUgbR3G2JlUWYd9DBuVqYsBC2R4grHAr0X4An7U1-oM0YqmusC3h96uAe2f6fZPEaZTXEEVGkJeJWtiKp9JoDgYywNPr9pm2aR2Uw0oKqWhkEHQFKM9HF~Vz0ceOMs01FygC3CDadi840T1gkYLFqUty-QxnC2Ox-UnNJfRmlv7IPBxsPKMfMV68ZTL5yB4C8AmxJMhLXsNstpSiOpRDwg0JyXhDJrD8jKQkpOlr7L9MeVkavK2o~4koH8cc9vUgWjl~Ctyl5r-nmWJ94mJUyQX0GkaNqFQ__"
          alt="Woman holding laundry"
          className="w-full h-[684px] object-fit  shadow-md"
        />
         
         
         <div className="mt-4 text-center md:text-left p-10">
            <h2 className="text-2xl font-bold text-gray-800">Fresh Clothes, Zero Hassle!</h2>
            <p className="text-gray-600">Professional Laundry & Dry Cleaning at Your Doorstep.</p>
         </div>
        
      </div>
    </div>
  );
};

export default ServicesHero;