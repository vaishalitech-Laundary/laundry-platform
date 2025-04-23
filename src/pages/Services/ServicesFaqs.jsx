import React, { useState } from 'react';

const faqData = [
  {
    question: 'What payment methods are available?',
    answer: 'We accept a variety of payment methods including UPI, credit/debit cards, net banking, and digital wallets. This ensures a seamless and secure transaction experience for all users. Choose the option that suits you best at checkout.',
  },
  {
    question: 'How does dynamic pricing work?',
    answer: 'Our dynamic pricing adjusts based on your selected city or pin code. This means you\'ll see the most accurate rates for your area. Simply enter your location to view local pricing.',
  },
  {
    question: 'Can I schedule delivery?',
    answer: 'Yes, you can easily schedule your pickup and delivery using our calendar interface. Select your preferred dates and available time slots at your convenience. We also offer an urgent delivery option for faster service.',
  },
  {
    question: 'Is my payment secure?',
    answer: 'Absolutely! We prioritize your security with a robust payment gateway that encrypts your information. You can also choose to save your cards for future transactions, making it even more convenient.',
  },
  {
    question: 'How do I contact support?',
    answer: 'If you have any questions or need assistance, feel free to reach out to our support team. You can contact us through the \'Contact\' button above. We\'re here to help you with any inquiries.',
  },
];

const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300 py-5">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-800">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
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

const ServicesFaqs = () => {
  const [openIndices, setOpenIndices] = useState([]);

  const handleToggle = (index) => {
    setOpenIndices((prevIndices) =>
      prevIndices.includes(index)
        ? prevIndices.filter((i) => i !== index)
        : [...prevIndices, index]
    );
  };

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-gray-100 relative overflow-hidden">
       {/* Decorative Shape Top Right */}
       <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-green-400 rounded-bl-full -mt-10 -mr-10 opacity-80 z-0"></div>
       {/* Decorative Shape Bottom Left */}
       <div className="absolute bottom-0 left-0 w-40 h-40 md:w-60 md:h-60 bg-blue-900 rounded-tr-full -mb-20 -ml-10 opacity-80 z-0"></div>

      <div className="max-w-3xl mx-auto text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">FAQs</h2>
        <p>
          Find answers to your most pressing questions about our payment and delivery services.
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
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">Still have questions?</h3>
        <p className=" mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="px-6 py-2 border border-green-500 text-green-600 rounded hover:bg-green-50 transition duration-300">
          Contact
        </button>
      </div>
    </div>
  );
};

export default ServicesFaqs;