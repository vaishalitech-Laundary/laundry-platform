function SubscriptionPlans() {
    const plans = [
      {
        name: "Basic Plan",
        price: "₹199/mo",
        features: ["Wash & Fold (5kg limit)", "3-day Delivery", "Basic Stain Removal"],
      },
      {
        name: "Premium Plan",
        price: "₹499/mo",
        features: ["Wash, Fold & Iron", "Same-Day Delivery", "Advanced Stain Removal", "Free Pickup & Delivery"],
        popular: true,
      },
      {
        name: "Elite Plan",
        price: "₹999/mo",
        features: [
          "All Premium Services",
          "Customized Account Manager",
          "Dedicated Account Manager",
          "Additional Discounts & Add-ons",
        ],
      },
    ];
  
    return (
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">Choose Your Monthly Laundry Plan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-white rounded-xl p-6 shadow-md relative ${plan.popular ? "border-2 border-blue-600" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
              <p className="text-2xl font-semibold mb-4">{plan.price}</p>
              <ul className="mb-4 text-sm text-gray-600 list-disc list-inside">
                {plan.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>
              <button className="bg-[#0f2b59] text-white px-4 py-2 rounded-md text-sm w-full">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
  