import React from 'react';
import Sidebar from './Sidebar';
import Frame1303 from '../../assets/Frame 1303.png';
import Frame1303_1 from '../../assets/Frame 1303 (1).png';
import Frame1303_2 from '../../assets/Frame 1303 (2).png';

export default function MyOrders() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* Sidebar - Hidden on mobile, shown on md+ */}
      <div className="hidden md:block w-[220px] flex-shrink-0">
        <Sidebar />
      </div>

      {/* Right content */}
      <div className="flex-1 flex justify-center py-8 px-4 bg-gray-50">
        <div className="w-full max-w-5xl flex flex-col items-center">

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {['All', 'Ordered', 'Cancelled', 'Delivered', 'Other'].map((tab) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-full border text-sm font-medium ${
                  tab === 'All'
                    ? 'bg-green-100 text-green-600 border-green-400'
                    : 'text-gray-600 border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Order Cards */}
          <div className="flex flex-col items-center gap-6 w-full px-1 sm:px-4">

            {/* Card Template */}
            {[{
              img: Frame1303,
              tag: 'DRY CLEANING',
              tagColor: 'blue',
              title: 'Specialized cleaning for delicate fabrics',
              price: '₹120/item',
              service: 'Dry Cleaning'
            },
            {
              img: Frame1303_1,
              tag: 'WASH & FOLD',
              tagColor: 'orange',
              title: 'Clothes are washed, dried, and neatly folded',
              price: '₹50/kg',
              service: 'Wash & Fold'
            },
            {
              img: Frame1303_2,
              tag: 'WASH & FOLD',
              tagColor: 'orange',
              title: 'Clothes are washed, dried, and neatly folded',
              price: '₹50/kg',
              service: 'Wash & Fold'
            }].map((card, index) => (
              <div
                key={index}
                className="w-full max-w-[637px] bg-white border rounded-[12px] shadow-md flex flex-col md:flex-row overflow-hidden"
              >
                <img
                  src={card.img}
                  alt={card.service}
                  className="w-full md:w-[250px] h-[200px] md:h-auto object-cover"
                />
                <div className="flex flex-col justify-between p-6 flex-grow">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-semibold text-${card.tagColor}-700 bg-${card.tagColor}-100 px-3 py-1 rounded-full`}>
                        {card.tag}
                      </span>
                      <button className="text-white bg-blue-700 px-4 py-1 rounded-md text-sm font-medium">
                        Track Order
                      </button>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-xl font-bold text-gray-800 mb-2">{card.price}</p>
                  </div>
                  <div className="text-sm text-gray-500">
                    <p>
                      <strong>Service:</strong> {card.service}
                    </p>
                    <p className="flex items-center gap-2 mt-1">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6 2a1 1 0 00-1 1v1a7 7 0 104 0V3a1 1 0 00-1-1H6zm3 5a1 1 0 011-1h2a1 1 0 011 1v2h-4V7z" />
                      </svg>
                      Estimated delivery: May 16, 2025
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
