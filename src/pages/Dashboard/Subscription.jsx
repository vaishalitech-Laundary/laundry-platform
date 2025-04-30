import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar'; // adjust the path if needed
import SubscriptionMobile from './SubscriptionMobile'; // import SubscriptionMobile component

function SubscriptionPlans() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // state to track screen size

  // Update the state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const plans = [
    {
      name: 'Basic Plan',
      price: '₹199/mo',
      features: [
        'Wash & Fold (5kg limit)',
        '2-Day Delivery',
        'Basic Stain Removal',
        'No Subscription Perks',
      ],
    },
    {
      name: 'Premium Plan',
      price: '₹499/mo',
      features: [
        'Wash, Fold & Iron (Unlimited)',
        'Same-Day Delivery',
        'Advanced Stain Removal',
        'Free Pickup & Delivery',
      ],
      popular: true,
    },
    {
      name: 'Elite Plan',
      price: '₹999/mo',
      features: [
        'All Premium Services',
        'Customized Laundry Care',
        'Dedicated Account Manager',
        'Additional Discounts on Add-ons',
        'Priority Service',
      ],
    },
  ];

  // Render the correct component based on screen size
  if (isMobile) {
    return <SubscriptionMobile />;
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar on left, full viewport height */}
      <div className="min-h-screen">
        <Sidebar />
      </div>

      {/* Main content on right */}
      <div className="flex-1 bg-[#f6f8f3] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0f2b59]">
            Choose Your Monthly Laundry Plan
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-10 text-sm sm:text-base">
            Flexible monthly plans tailored to your laundry needs. Pick the perfect one for you!
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <div className="bg-white rounded-full p-1 sm:p-2 flex shadow-md">
              <button className="px-4 sm:px-6 py-2 rounded-full text-white bg-[#0f2b59] text-xs sm:text-sm font-semibold">
                Monthly
              </button>
              <button className="px-4 sm:px-6 py-2 rounded-full text-[#0f2b59] text-xs sm:text-sm font-semibold">
                Yearly
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-lg p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                  plan.popular
                    ? 'border-2 border-green-500 lg:transform lg:scale-110 lg:z-10'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#84cc16] text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-1 sm:py-2 rounded-full shadow-md">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0f2b59] mb-2">{plan.name}</h3>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f2b59] mb-4">{plan.price}</p>
                </div>

                {/* Features */}
                <ul className="text-sm text-gray-700 space-y-2 sm:space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-4 h-4 text-green-600 mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="bg-[#0f2b59] text-white py-3 rounded-md w-full text-sm font-semibold hover:bg-[#0d2348] transition-colors">
                  Get Started
                </button>
              </div>
            ))}
          </div>

          {/* Experience the Power Section */}
          <div className="bg-[#0f2b59] text-white mt-14 sm:mt-16 rounded-2xl py-10 sm:py-12 px-6 md:px-20 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Experience the Power of FreshFold!
            </h3>
            <p className="text-xs sm:text-sm md:text-base mb-8 text-gray-200 max-w-2xl mx-auto">
              Enjoy a month of hassle-free laundry with FreshFold. Try any plan for FREE and discover the convenience you deserve!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#0f2b59] font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition">
                Try Yourself
              </button>
              <button className="bg-transparent border-2 border-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-[#0f2b59] transition flex items-center justify-center gap-2">
                Get started
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionPlans;
