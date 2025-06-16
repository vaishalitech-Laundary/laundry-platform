import React from "react";
import { useState } from "react";

const faqData = [
  {
    question: "How to schedule pickup?",
    answer:
      "You can schedule a pickup by logging into your account and selecting the 'Schedule Pickup' option. Choose your preferred date and time, and confirm your request. Our team will be notified and will arrive at the scheduled time.",
  },
  {
    question: "Estimated delivery time?",
    answer:
      "The estimated delivery time typically ranges from 3 to 5 business days. This may vary based on your location and the service selected. You will receive a tracking link via email once your order has shipped.",
  },
  {
    question: "Update subscription plan?",
    answer:
      "To update your subscription plan, log into your account and navigate to the 'Subscription' section. Here, you can select a new plan and confirm your changes. Any adjustments will take effect at the end of your current billing cycle.",
  },
  {
    question: "Payment options available?",
    answer:
      "We accept various payment methods, including credit and debit cards, PayPal, and bank transfers. You can choose your preferred option during checkout. All transactions are secured for your peace of mind.",
  },
  {
    question: "Cancel my subscription?",
    answer:
      "To cancel your subscription, log into your account and go to the 'Subscription' settings. Click on 'Cancel Subscription' and follow the prompts to confirm. You will receive a confirmation email once the cancellation is processed.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-t border-b border-gray-600 py-5 cursor-pointer">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-800">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="mt-3 text-gray-600 text-sm">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqPage = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleToggle = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">FAQs</h2>
        <p>
          Explore our frequently asked questions to find quick solutions to your
          queries.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-16 relative z-10">
        {faqData.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            isOpen={openIndices.includes(index)}
            onClick={() => handleToggle(index)}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Still have questions?
        </h3>
        <p className=" mb-6">We are here to help you!</p>
        <button
          className="px-6 py-2 border border-green-500  rounded hover:bg-green-50 transition duration-300
        hover:cursor-pointer"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default FaqPage;
