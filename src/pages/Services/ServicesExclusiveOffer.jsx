// import React from "react";

// // Replace with your actual image URL or import if saved locally
// const offerImage =
//   "https://s3-alpha-sig.figma.com/img/e184/1a83/7820b173d6418b19ff2cb3ad6d56574b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A4LcNW0Ay-pUrcLm--wqfG2U8LLPnuJ601vC~kqQ0Wd~l7fjvHAPbt7hrOuEfo1kxjui~-UxcqBZ5BCeW-LFA1WhYg312Pg6a1Y9J1C7NuDaiXCbtzwO4oe4UO3ZVLlNF74vkIuBH8nIJsjos7wQn~gbv4D15IoRfzhDVvuCJ2wKJVFaKGuUmCGKngmYpLCBjTId-67Q5hkknUHYlqljBKn6ZytAtei8Z1mt9hKIID1ni01PszDO~PNcBuL0K-uOM6-ZfePsQBCC-ZTm1pPBmXZ~8P660Yen9LWna4ac5Dtfdv-RtwQSTvg4VIFMkvPAwFTs2vUxcFlgT92RVxT47Q__";

// const ServicesExclusiveOffer = () => {
//   return (
//     // Changed background to white, added vertical padding
//     <div className="bg-white text-black flex flex-col md:flex-row items-center py-12 md:py-20 max-w-[1440px] mx-auto">
//       {/* Left Side - Text and Form */}
//       {/* Adjusted padding */}
//       <div className="md:w-1/2 px-4 md:px-12 lg:pl-14 lg:pr-14 flex flex-col justify-center mb-8 md:mb-0">
//         {/* Updated heading color and margin */}
//         <h2 className="text-3xl md:text-5xl font-bold text-[#1F3C5F] mb-4">
//           Join Us for Exclusive Offers
//         </h2>
//         {/* Added paragraph */}
//         <p className="text-black mb-6 w-[330px]">
//           Sign up today to unlock special discounts and streamline your payment
//           experience with us.
//         </p>
//         {/* Form container */}
//         <div className="flex flex-col sm:flex-row items-stretch w-full max-w-lg mb-4">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             // Updated input styling: white bg, black text, green border
//             className="flex-grow p-3 mb-2 sm:mb-0 sm:mr-2 rounded border border-green-500 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
//             aria-label="Email address"
//           />
//           {/* Updated button background color */}
//           <button className="bg-[#1F3C5F] hover:bg-blue-800 text-white  py-3 px-6 rounded transition duration-300 whitespace-nowrap shadow-md">
//             Sign Up
//           </button>
//         </div>
//         {/* Added disclaimer text */}
//         <p className="text-xs text-black">
//           By clicking Sign Up you're confirming that you agree with our{" "}
//           <a href="#" className="underline hover:text-gray-700">
//             Terms and Conditions
//           </a>
//           .
//         </p>
//       </div>

//       {/* Right Side - Image */}
//       {/* Adjusted height constraints if needed, added padding for spacing */}
//       <div className="md:w-1/2 h-64 md:h-[450px] lg:h-[500px] px-4 md:px-8">
//         <img
//           src={offerImage}
//           alt="Family doing laundry"
//           className="w-full h-full object-fit" // Added rounded corners
//         />
//       </div>
//     </div>
//   );
// };

// export default ServicesExclusiveOffer;

import React from "react";

const offerImage =
  "https://s3-alpha-sig.figma.com/img/e184/1a83/7820b173d6418b19ff2cb3ad6d56574b?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A4LcNW0Ay-pUrcLm--wqfG2U8LLPnuJ601vC~kqQ0Wd~l7fjvHAPbt7hrOuEfo1kxjui~-UxcqBZ5BCeW-LFA1WhYg312Pg6a1Y9J1C7NuDaiXCbtzwO4oe4UO3ZVLlNF74vkIuBH8nIJsjos7wQn~gbv4D15IoRfzhDVvuCJ2wKJVFaKGuUmCGKngmYpLCBjTId-67Q5hkknUHYlqljBKn6ZytAtei8Z1mt9hKIID1ni01PszDO~PNcBuL0K-uOM6-ZfePsQBCC-ZTm1pPBmXZ~8P660Yen9LWna4ac5Dtfdv-RtwQSTvg4VIFMkvPAwFTs2vUxcFlgT92RVxT47Q__";

const ServicesExclusiveOffer = () => {
  return (
    <div className="bg-white text-black flex flex-col md:flex-row items-center py-10 sm:py-14 md:py-20 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Text + form section */}
      <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#1F3C5F] mb-4 leading-snug">
          Join Us for Exclusive Offers
        </h2>

        <p className="text-black mb-6 max-w-xs sm:max-w-sm md:max-w-md">
          Sign up today to unlock special discounts and streamline your payment
          experience with us.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch w-full max-w-md mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow p-3 mb-2 sm:mb-0 sm:mr-2 rounded border border-green-500 bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-label="Email address"
          />
          <button className="bg-[#1F3C5F] hover:bg-blue-800 text-white py-3 px-6 rounded transition duration-300 whitespace-nowrap shadow-md">
            Sign Up
          </button>
        </div>

        <p className="text-xs text-black">
          By clicking Sign Up you're confirming that you agree with our{" "}
          <a href="#" className="underline hover:text-gray-700">
            Terms and Conditions
          </a>
          .
        </p>
      </div>

      {/* Image section */}
      <div className="md:w-1/2 w-full h-52 sm:h-64 md:h-[450px] lg:h-[500px]">
        <img
          src={offerImage}
          alt="Family doing laundry"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ServicesExclusiveOffer;
