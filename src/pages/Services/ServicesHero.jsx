import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import heroImg from "./img/homeImg.jpg";

const ServicesHero = () => {
  return (
    <div className="flex md:flex-row max-w-full h-auto mx-auto relative max-w-[1440px] mx-auto">
      {/* Left Side - Text Content */}
      <div className="w-full md:w-1/2 bg-gray-100 md:px-6 sm:px-10 py-8 sm:py-12 md:px-10 md:py-16 relative">
        <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-[#1F3C5F] rounded-tr-full hidden md:block"></div>
        <div className="mb-8 p-3 md:relative md:top-[120px] lg:left-[20px] sm:p-8 w-full max-w-sm sm:w-[300px] lg:w-[606px] lg:h-[453px] lg:pl-4  sm:static">
          <h1 className="text-3xl sm:text-4xl md:text-[54px] md:w-[500px] lg:text-[70px] xl:text-[90px] lg:w-[659px] font-bold text-[#1F3C5F] mb-4">
            Our Laundry Services
          </h1>
          <p className="text-[10px] sm:text-base xl:text-[18px] lg:w-[400px] xl:w-[487px] text-gray-600 mb-2">
            Premium-quality laundry services that make life easier—fresh, clean,
            and perfectly cared-for garments every time.
          </p>

          <button className="bg-[#1F3C5F] text-[10px] text-white py-2 px-3 md:px-6 md:py-2 rounded hover:bg-blue-800 transition duration-300 text-sm sm:text-base md:mt-4">
            Book a Service Now
          </button>
        </div>
      </div>

      {/* Right Side - Image + Text + Arrows */}
      <div className="w-full md:w-1/2 h-auto flex flex-col">
        {/* Image */}
        <div className="w-full h-[190px] sm:h-[450px] md:h-[678px]">
          <img
            src={heroImg}
            alt="Woman holding laundry"
            className="w-full h-full object-cover shadow-md"
          />
        </div>

        {/* Subtext */}
        <div className="px-2 sm:py-3 sm:px-6 mt-3">
          <h2 className="text-[10px] sm:text-2xl font-bold text-gray-800">
            Fresh Clothes, Zero Hassle!
          </h2>
          <p className="text-[8px] sm:text-base text-gray-600">
            Professional Laundry & Dry Cleaning at Your Doorstep.
          </p>
        </div>

        {/* Pagination & Arrows */}
        <div className="flex items-center justify-between px-6 py-4 md:py-0 bg-white">
          {/* Dots */}
          <div className="flex gap-2">
            <span className="w-[3px] h-[3px] md:w-2.5 md:h-2.5 rounded-full bg-blue-900"></span>
            <span className="w-[3px] h-[3px] md:w-2.5 md:h-2.5 rounded-full bg-gray-300"></span>
            <span className="w-[3px] h-[3px] md:w-2.5 md:h-2.5 rounded-full bg-gray-300"></span>
          </div>

          {/* Arrows */}
          <div className="flex gap-3 ml-5">
            <button className="w-[18.75px] h-[18.75px] md:w-8 md:h-8 rounded-full bg-[#1F3C5F] text-white flex items-center justify-center">
              <ArrowLeft className="w-[9.375px] h-[9.375px] md:w-6 md:h-6" />
            </button>
            <button className="w-[18.75px] h-[18.75px] md:w-8 md:h-8 rounded-full bg-[#1F3C5F] text-white flex items-center justify-center">
              <ArrowRight className="w-[9.375px] h-[9.375px] md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;
