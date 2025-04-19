import React from 'react';

// Placeholder image URLs - replace with your actual image paths or URLs
const paymentImage = 'https://s3-alpha-sig.figma.com/img/1fb1/06ff/992acc80890862c09d43edb4077508eb?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nwLb7FSwV2spihl9IOEb9WPulzaTrNz193bPKkQ84sJ93pu2Tl3fr7DgAy6VbiWPf809-57Cdr2J0UW0vkV7Gk1u1Nm~E8~5Wk4VALTDxeC9TyQQv5pm2YC4uk5~lOoZcB5L07hCNoln2FVOqZ63EkiObTgpqb1nssw2OgmxR-QEQlW7p9t9K-sZqyPK-nmUN6jUO0XzxCYuu6IejOYoheEdigOV9W73rUUfdLTsr3ZYrk8P0Vkrx0grg1n7KSCiitCXM1Os3bqw18Dy2I~BO2V8QbbPxU5UHb3qMs20yzWGK-eM7xMFjmqeuTXHaqJim5TtAc4iSDLbDOkOqfdebA__';
const pricingImage = 'https://s3-alpha-sig.figma.com/img/2448/d576/f56244dbd54c3750759ac1d2efabaff7?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GguQ-~SuUj9jHDOXlR1V0Tk-Gtt~MpoSmOoOyeCGN4~E8KXbaPGyvVVsfybbu9q7mRzSbf3j7kk5tbgpNZkPrL105wT~ncH06i4haFKgPCBom7zSrwHTlXYOhvbQAGp7uZLNfjFljZ9zUKSN~Upm4GM-MVjnyBRziB2hZ2yTlwjkuTkID~-Nirmse-FRTmYytqOqR7~q01QGO3oTw7IMZuWXlLtO6-cvMQN39t6r3zehSCyscbrcPSMXDUTnz-A294w-TPN3E0yFfYq3jV-U1z~9nJJX782ZCqaIV6BIoRv2NrUQpE5eOQto23lzBUOZ8l6iwRVFoK7oD9zTmnWJXQ__';
const schedulingImage = 'https://s3-alpha-sig.figma.com/img/d4b2/8307/43990711db2bf0fdb36322e9b597aaee?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FK9f45b3SbDVJMJ9fdVCfOg9Y~zjSe~toxHtL3EP04WtucHhOKw01yirsT--ByrAX6nGMlZSVBGZk7vePAPeX--lR6U~JkItXE66gv~IY6b7W32ALqW1k3wUe5vdknh5wKLbTtc4JM-UZ3ekf4MG5VjUK4AQU5JetkvAijOrBV6SfZANThVSWXnQKwPFAeuARCe6v54gCO3vzXOFBW07OmQo06muxYvQ~eVB9DfDeQE1YDd2NJl93iNXaY9MUrun~Cr-O-vPEn-8CuXaiAKQTNtRY5wEA7oLrj8KbbAYOR~o2i7jiUTIYI5zkaJHDXrGN-D6UjX78rVeaP4Rl5MbFA__';

const offerings = [
  {
    image: paymentImage,
    title: 'Flexible Payment Options for Everyone',
    description: 'Choose from various payment methods, including UPI, cards, and wallets.',
  },
  {
    image: pricingImage,
    title: 'Dynamic Pricing for Localized Rates',
    description: 'Get real-time pricing updates based on your location.',
  },
  {
    image: schedulingImage,
    title: 'Convenient Scheduling for Pickup and Delivery',
    description: 'Select your preferred dates and time slots easily.',
  },
];

const ServicesOfferings = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 relative overflow-hidden">
      {/* Decorative Shape Top Right */}
      <div className="absolute top-0 right-0 w-40 h-40 md:w-60 md:h-60 bg-[#1F3C5F] rounded-bl-full -mt-10 -mr-10 opacity-80"></div>

      <div className="text-center mb-12 max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1F3C5F] mb-4 w-full">
          Explore Our Comprehensive Service Offerings
        </h2>
        <p className="text-gray-600 max-w-5xl mx-auto mb-6">
          We provide a range of services tailored to meet your needs. From seamless payment integration to efficient delivery scheduling, we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
        {offerings.map((offering, index) => (
          <div key={index} className=" overflow-hidden text-center">
            <img src={offering.image} alt={offering.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{offering.title}</h3>
              <p className="text-gray-600 text-sm">{offering.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center relative z-10 flex justify-center items-center space-x-4">
        <button className="px-6 py-2 border border-green-500 text-green-600 rounded hover:bg-green-50 transition duration-300">
          Learn More
        </button>
        <a href="#" className="text-blue-900 hover:text-blue-700 font-medium flex items-center">
          Sign Up
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Decorative Shape Bottom Left */}
      <div className="absolute bottom-0 left-0 w-40 h-40 md:w-60 md:h-60 bg-green-400 rounded-tr-full -mb-10 -ml-10 opacity-80"></div>
    </div>
  );
};

export default ServicesOfferings;