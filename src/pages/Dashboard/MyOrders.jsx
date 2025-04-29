import React from 'react';
import Frame1303 from '../../assets/Frame 1303.png';
import Frame1303_1 from '../../assets/Frame 1303 (1).png';
import Frame1303_2 from '../../assets/Frame 1303 (2).png';

function MyOrders() {
  return (
    <div className="flex justify-center py-10 px-4 bg-gray-50 min-h-screen">
      <div className="w-full max-w-5xl flex flex-col items-center">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
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
        <div className="flex flex-col items-center gap-8 w-full">
          {/* Card 1 */}
          <div className="w-full max-w-[637px] bg-white border rounded-[12px] shadow-md flex flex-col md:flex-row overflow-hidden">
            <img
              src={Frame1303}
              alt="Dry Cleaning"
              className="w-full md:w-[250px] h-[200px] md:h-auto object-cover"
            />
            <div className="flex flex-col justify-between p-6 flex-grow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    DRY CLEANING
                  </span>
                  <button className="text-white bg-blue-700 px-4 py-1 rounded-md text-sm font-medium">
                    Track Order
                  </button>
                </div>
                <h3 className="text-lg font-semibold mb-2">Specialized cleaning for delicate fabrics</h3>
                <p className="text-xl font-bold text-gray-800 mb-2">₹120/item</p>
              </div>
              <div className="text-sm text-gray-500">
                <p><strong>Service:</strong> Dry Cleaning</p>
                <p className="flex items-center gap-2 mt-1">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1a7 7 0 104 0V3a1 1 0 00-1-1H6zm3 5a1 1 0 011-1h2a1 1 0 011 1v2h-4V7z" />
                  </svg>
                  Estimated delivery: May 16, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[637px] bg-white border rounded-[12px] shadow-md flex flex-col md:flex-row overflow-hidden">
            <img
              src={Frame1303_1}
              alt="Wash & Fold 1"
              className="w-full md:w-[250px] h-[200px] md:h-auto object-cover"
            />
            <div className="flex flex-col justify-between p-6 flex-grow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
                    WASH & FOLD
                  </span>
                  <button className="text-white bg-blue-700 px-4 py-1 rounded-md text-sm font-medium">
                    Track Order
                  </button>
                </div>
                <h3 className="text-lg font-semibold mb-2">Clothes are washed, dried, and neatly folded</h3>
                <p className="text-xl font-bold text-gray-800 mb-2">₹50/kg</p>
              </div>
              <div className="text-sm text-gray-500">
                <p><strong>Service:</strong> Wash & Fold</p>
                <p className="flex items-center gap-2 mt-1">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1a7 7 0 104 0V3a1 1 0 00-1-1H6zm3 5a1 1 0 011-1h2a1 1 0 011 1v2h-4V7z" />
                  </svg>
                  Estimated delivery: May 16, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[637px] bg-white border rounded-[12px] shadow-md flex flex-col md:flex-row overflow-hidden">
            <img
              src={Frame1303_2}
              alt="Wash & Fold 2"
              className="w-full md:w-[250px] h-[200px] md:h-auto object-cover"
            />
            <div className="flex flex-col justify-between p-6 flex-grow">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
                    WASH & FOLD
                  </span>
                  <button className="text-white bg-blue-700 px-4 py-1 rounded-md text-sm font-medium">
                    Track Order
                  </button>
                </div>
                <h3 className="text-lg font-semibold mb-2">Clothes are washed, dried, and neatly folded</h3>
                <p className="text-xl font-bold text-gray-800 mb-2">₹50/kg</p>
              </div>
              <div className="text-sm text-gray-500">
                <p><strong>Service:</strong> Wash & Fold</p>
                <p className="flex items-center gap-2 mt-1">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6 2a1 1 0 00-1 1v1a7 7 0 104 0V3a1 1 0 00-1-1H6zm3 5a1 1 0 011-1h2a1 1 0 011 1v2h-4V7z" />
                  </svg>
                  Estimated delivery: May 16, 2025
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MyOrders;
