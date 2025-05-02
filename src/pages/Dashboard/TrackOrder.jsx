import React from "react";
import Sidebar from "./Sidebar";
import Asmi from "../../assets/Frame 1303.png";
import Asmi2 from "../../assets/truck-tick.png";

const TrackOrder = () => {
  const steps = [
    { step: 'Pickup Confirmed', date: 'Wed, 11th May', color: 'bg-[#00B207]' },
    { step: 'Processing', date: 'Thurs, 12th May', color: 'bg-[#D0D5DD]' },
    { step: 'Out For Delivery', date: 'Sat, 14th May', color: 'bg-[#D0D5DD]' },
    { step: 'Delivered', date: 'Expected by, Mon 16th', color: 'bg-[#D0D5DD]' },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - visible only on md and up */}
      <div className="hidden md:block flex-shrink-0">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 pt-6 md:pt-20 max-w-7xl mx-auto">
        <div className="text-[#667085] text-sm md:text-lg leading-[26px] md:leading-[34px] mb-4 md:mb-5">
          Orders &gt; ID 3352655445
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
          <h1 className="text-black font-semibold text-2xl md:text-4xl leading-tight">
            Order ID: 3354654654526
          </h1>
          <div className="flex flex-wrap gap-3">
            <button className="border border-[#7ED321] text-[#7ED321] rounded-lg px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold">
              Invoice
            </button>
            <button className="bg-[#1F3C5F] text-white rounded-lg px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold">
              Track Order
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center border border-[#D0D5DD] rounded-lg py-4 px-4 md:px-6 mb-8 gap-6">
          <div className="flex items-center gap-2">
            <p className="text-[#667085] text-sm md:text-lg">Service:</p>
            <p className="text-[#1D2939] font-semibold text-base md:text-xl">Wash & Fold</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-[#667085] text-sm md:text-lg">Pickup Date:</p>
            <p className="text-[#1D2939] font-semibold text-base md:text-xl">May 11, 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <img src={Asmi2} alt="Delivery Icon" className="w-5 h-5 md:w-6 md:h-6" />
            <p className="text-[#12B76A] font-semibold text-sm md:text-lg">
              Estimated Delivery : May 2025
            </p>
          </div>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between items-center mb-8 w-full gap-6 md:gap-0">
          <div className="absolute hidden md:block top-1/2 left-0 right-0 h-[2px] bg-[#D0D5DD] z-0"></div>
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col items-center relative z-10 w-full md:w-1/4">
              <p className={`text-xs md:text-sm font-semibold mb-2 ${index === 0 ? 'text-[#00B207]' : 'text-[#667085]'}`}>
                {item.step}
              </p>
              <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${item.color}`}></div>
              <p className="text-xs text-[#98A2B3] mt-1">{item.date}</p>
              {index === 0 && (
                <div className="absolute hidden md:block top-1/2 left-0 w-full h-[2px] bg-[#00B207] z-10"></div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-300 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div className="flex w-full md:w-2/3 border border-[#D0D5DD] rounded-lg overflow-hidden">
            <img src={Asmi} alt="Dry Cleaning" className="w-32 md:w-48 h-32 md:h-44 object-cover" />
            <div className="flex flex-col justify-center p-4">
              <span className="bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase mb-2">
                Dry Cleaning
              </span>
              <p className="text-gray-500 text-xs md:text-sm">
                Specialized cleaning for delicate fabrics.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end w-full md:w-auto">
            <p className="text-black font-semibold text-lg">₹120.00</p>
            <p className="text-gray-400 text-xs md:text-sm">Qty: 1</p>
          </div>
        </div>

        <div className="border-t border-gray-300 my-6"></div>

        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-2">Delivery</h2>
          <p className="text-gray-400 text-sm mb-1">Address</p>
          <p className="text-[#667085] font-semibold text-sm leading-6">
            847 Jewess Bridge Apt.<br />
            174 Hyderabad, TG<br />
            474-769-3919
          </p>
        </div>

        <div className="border-t border-gray-300 my-6"></div>

        <div className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="text-base">
            <div className="flex justify-between mb-2 text-gray-500 text-sm md:text-base">
              <span>Subtotal</span><span>₹120</span>
            </div>
            <div className="flex justify-between mb-2 text-red-500 text-sm md:text-base">
              <span>Discount (-5%)</span><span>-₹10</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-500 text-sm md:text-base">
              <span>Delivery Fee</span><span>₹20</span>
            </div>
            <div className="border-t border-gray-300 my-4"></div>
            <div className="flex justify-between font-semibold text-gray-800 text-sm md:text-base">
              <span>Total</span><span>₹130</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-6"></div>

        <div className="flex justify-center mb-12">
          <button className="bg-[#1F3C5F] text-white rounded-lg px-8 md:px-12 py-3 md:py-4 text-sm md:text-base font-semibold">
            Download Bill
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
