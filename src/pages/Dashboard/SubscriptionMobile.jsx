import React, { useState } from "react";

const plans = [
  {
    name: "Basic Plan",
    price: "₹299/mo",
    features: [
      "Wash, Fold & Iron (10kg limit)",
      "Standard Delivery",
      "Basic Stain Removal",
      "Limited Subscription Perks",
    ],
  },
  {
    name: "Premium Plan",
    price: "₹499/mo",
    features: [
      "Wash, Fold & Iron (Unlimited)",
      "Same Day Delivery",
      "Advanced Stain Removal",
      "Free Pickup & Delivery",
    ],
  },
  {
    name: "Elite Plan",
    price: "₹999/mo",
    features: [
      "Premium Fabric Care",
      "Priority Support",
      "Express Delivery",
      "All Subscription Perks",
    ],
  },
];

const SubscriptionMobile = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  return (
    <div className="min-h-screen bg-[#f4f5ec] p-4 flex flex-col pb-24">
      {/* Header */}
      <h2 className="text-center text-xl font-semibold text-[#1f2b3d]">
        Choose Your Monthly Laundry Plan
      </h2>
      <p className="text-center text-gray-600 text-sm mt-1">
        Flexible monthly plans tailored to your laundry needs. Pick the perfect one for you!
      </p>

      {/* Toggle */}
      <div className="flex justify-center my-4 gap-2">
        <button
          className={`px-4 py-1 rounded-full text-sm ${
            billingCycle === "Monthly"
              ? "bg-[#1f2b3d] text-white"
              : "bg-white text-[#1f2b3d] border border-gray-300"
          }`}
          onClick={() => setBillingCycle("Monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-1 rounded-full text-sm ${
            billingCycle === "Yearly"
              ? "bg-[#1f2b3d] text-white"
              : "bg-white text-[#1f2b3d] border border-gray-300"
          }`}
          onClick={() => setBillingCycle("Yearly")}
        >
          Yearly
        </button>
      </div>

      {/* Plans */}
      <div className="flex flex-col gap-6 mt-2">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-md shadow-md ${
              plan.name === "Premium Plan" ? "border-2 border-gray-300" : ""
            }`}
          >
            <h3 className="text-lg font-semibold text-center">{plan.name}</h3>
            <p className="text-center text-xl font-bold mt-1">{plan.price}</p>
            <ul className="text-sm mt-3 text-gray-700 space-y-1">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span>✔️</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 bg-[#1f2b3d] text-white py-2 rounded-md text-sm">
              Get started
            </button>
          </div>
        ))}
      </div>

      {/* Experience section */}
      <div className="text-center mt-10">
        <h3 className="text-lg font-semibold">
          Experience the Power of <span className="text-[#1f2b3d]">FreshFold</span>!
        </h3>
        <p className="text-sm text-gray-600 mt-1 px-4">
          Enjoy a month of hassle-free laundry with FreshFold. Try any plan for FREE and discover the convenience you deserve!
        </p>
        <div className="flex justify-center gap-3 mt-4">
          <button className="border border-gray-400 text-gray-800 px-4 py-2 rounded-md text-sm">
            Try Yourself
          </button>
          <button className="bg-[#1f2b3d] text-white px-4 py-2 rounded-md text-sm">
            Get started →
          </button>
        </div>
      </div>

      {/* Mobile Footer */}
      <MobileFooter />
    </div>
  );
};

const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md p-2 flex justify-around items-center rounded-t-xl z-50">
      <button className="flex flex-col items-center text-[#1f2b3d]">
        <i className="ri-home-4-fill text-xl"></i>
      </button>
      <button className="flex flex-col items-center text-[#1f2b3d]">
        <i className="ri-calendar-line text-xl"></i>
      </button>
      <button className="flex flex-col items-center text-[#1f2b3d]">
        <i className="ri-box-3-line text-xl"></i>
      </button>
      <button className="flex flex-col items-center text-[#1f2b3d]">
        <i className="ri-user-3-line text-xl"></i>
      </button>
    </div>
  );
};

export default SubscriptionMobile;
