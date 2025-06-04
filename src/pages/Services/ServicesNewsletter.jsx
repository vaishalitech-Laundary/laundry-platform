import React from "react";

const ServicesNewsletter = () => {
  return (
    // Increased vertical padding significantly
    <div className="bg-white py-20 px-4 md:px-8 lg:px-16 flex items-center min-h-[300px] max-w-[1440px] mx-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 w-full">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Increased heading size and bottom margin */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1F3C5F] mb-4">
            Stay Updated with Our Newsletter
          </h2>
          {/* Increased paragraph size */}
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 w-full max-w-lg">
          {/* Increased bottom margin */}
          <div className="flex flex-col sm:flex-row items-stretch mb-3">
            <input
              type="email"
              placeholder="Your Email Here"
              // Increased padding
              className="flex-grow p-4 mb-2 sm:mb-0 sm:mr-2 rounded border border-green-400 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
              aria-label="Email address"
            />
            {/* Increased padding */}
            <button className="bg-[#1F3C5F] hover:bg-blue-800 text-white font-semibold py-4 px-8 rounded transition duration-300 whitespace-nowrap shadow-md">
              Join Us
            </button>
          </div>
          {/* Increased text size */}
          <p className="text-sm text-black text-center sm:text-left">
            By clicking Join Us, you agree to our Terms and Conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesNewsletter;
