import React from "react";

import { useState, useEffect } from "react";
import Rec1 from "../../assets/Rectangle 1.png";
import Rec2 from "../../assets/Rectangle 2.png";
import Rec3 from "../../assets/Rectangle 3.png";
import Rec4 from "../../assets/Rectangle 4.png";

import Laundry1 from "../../assets/Laundry1.png";
import Laundry2 from "../../assets/Laundry2.png";
import Laundry3 from "../../assets/Laundry3.png";
import Placeholder from "../../assets/Placeholder.png";

import Pickup from "../../assets/Pickup.png";
import Clean from "../../assets/Clean.png";
import Deliver from "../../assets/Deliver.png";

const Home = () => {
  const testimonials = [
    {
      text: "Fast, friendly, and eco-conscious! I recommend them to everyone I know.",
      name: "David Brown",
      role: "Tech Lead, Innovate",
    },
    {
      text: "Exceptional service and super reliable. Love the team!",
      name: "Emily Smith",
      role: "Product Manager, EcoDrive",
    },
    {
      text: "Professional and efficient from start to finish.",
      name: "Michael Johnson",
      role: "Founder, GreenWorld",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds per testimonial

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F7F7F7] mt-auto">
      <section className="px-4 md:px-8 lg:px-16">
        <h1 className="text-center pt-[5vh] md:pt-[10vh] w-full md:w-[70vw] text-3xl md:text-5xl lg:text-6xl text-[#1F3C5F] font-extrabold mx-auto">
          Hassle-Free Laundry Service at Your Doorstep!
        </h1>
        <h3 className="text-center w-full md:w-[60vw] mx-auto p-2 text-sm md:text-base lg:text-lg">
          We pick up, wash, and deliver your clothes fresh and clean. Experience
          the convenience of laundry service tailored to your busy lifestyle.
        </h3>
        <div className="text-center mt-[4vh] md:mt-[7vh]">
          <button className="button rounded-lg bg-[#1F3C5F] text-white text-lg md:text-2xl p-3 md:p-5 shadow-lg">
            Schedule a pickup
          </button>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-[4vh] md:mt-[7vh]">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img
                src={Rec1}
                alt="Laundry Service"
                className="w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img
                src={Rec2}
                alt="Cleaning Process"
                className="w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img
                src={Rec3}
                alt="Delivery Service"
                className="w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img
                src={Rec4}
                alt="Quality Service"
                className="w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[280px] lg:h-[320px] xl:h-[400px] object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-4 md:p-6 lg:p-8 min-h-screen relative overflow-hidden">
        <div className="hidden sm:block  absolute top-0 right-0 translate-x-1/2 w-[150px] md:w-[200px] h-[60px] md:h-[95px] bg-[#1F3C5F] rounded-b-full "></div>

        <div className="pt-[4vh] md:pt-[8vh]">
          <h1 className="text-2xl md:text-4xl text-[#1F3C5F] text-center font-extrabold">
            Why Our Laundry Service Stands Out
          </h1>
          <p className="text-center mt-[2vh] px-4 text-sm md:text-base">
            Experience the convenience of our laundry service. We prioritize
            your needs with our reliable and efficient solutions.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-5 mt-[5vh] md:mt-[10vh]">
          <div className="text-center w-full md:w-1/3 px-4">
            <div className="flex items-center justify-center mb-4 md:mb-[2rem] rounded-lg shadow-md">
              <img
                src={Laundry3}
                alt="Pickup and Delivery Service"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
              />
            </div>
            <h3 className="text-[#1F3C5F] font-bold text-xl md:text-2xl lg:text-3xl mb-2">
              Free Pickup & Delivery Right to Your Door
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>
          </div>

          <div className="text-center w-full md:w-1/3 px-4">
            <div className="flex items-center justify-center mb-4 md:mb-[2rem] rounded-lg shadow-md">
              <img
                src={Laundry2}
                alt="Affordable Pricing"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
              />
            </div>
            <h3 className="text-[#1F3C5F] font-bold text-xl md:text-2xl lg:text-3xl mb-2">
              Affordable Pricing with No Hidden Fees
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>

          <div className="text-center w-full md:w-1/3 px-4">
            <div className="flex items-center justify-center mb-4 md:mb-[2rem] rounded-lg shadow-md">
              <img
                src={Laundry1}
                alt="Eco-Friendly Cleaning"
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"
              />
            </div>
            <h3 className="text-[#1F3C5F] font-bold text-xl md:text-2xl lg:text-3xl mb-2">
              Eco-Friendly Products for a Greener Clean
            </h3>
            <p className="text-sm md:text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
          </div>
        </div>

        <div className="mt-[5vh] md:mt-[10vh] text-center">
          <button className="button border-2 border-[#7ED321] p-2 md:p-[5px] rounded-[5px] shadow-lg">
            Learn More
          </button>
        </div>
      </section>

      <section className="pt-[4vh] md:pt-[8vh] md:pb-[10vh] min-h-screen px-4 relative">
        <div className="hidden sm:block absolute bottom-40 left-0">
          <div className="relative">
            <div className="absolute w-[150px] h-[150px] border-20 border-[#7ED321] rounded-full  translate-x-[-40%]"></div>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-2xl md:text-4xl text-[#1F3C5F] font-bold">
            Simple Steps to Fresh, Clean Laundry
          </h1>
          <p className="mx-auto mt-[2vh] md:mt-[4vh] w-full md:w-[80vw] text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>

        <div className="md:hidden mt-8 space-y-8">
          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <p className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center absolute -top-4 right-0">
                1
              </p>
              <img
                src={Pickup}
                alt="Pickup"
                className="h-[150px] rounded-full"
              />
            </div>
            <p className="font-bold mt-2">Schedule your pickup</p>
            <p className="text-sm">Select a time that works best for you.</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <p className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center absolute -top-4 right-0">
                2
              </p>
              <img src={Clean} alt="Clean" className="h-[150px] rounded-full" />
            </div>
            <p className="font-bold mt-2">We handle the cleaning</p>
            <p className="text-sm">
              Our experts will wash and dry clean your fabrics.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="relative">
              <p className="bg-lime-500 text-white rounded-full w-8 h-8 flex items-center justify-center absolute -top-4 right-0">
                3
              </p>
              <img
                src={Deliver}
                alt="Deliver"
                className="h-[150px] rounded-full"
              />
            </div>
            <p className="font-bold mt-2">Enjoy fast delivery</p>
            <p className="text-sm">
              Receive your freshly cleaned clothes right at home.
            </p>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative w-full h-40 bg-[#F7F7F7] mt-[15vh]">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 1000 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0,100 C150,0 800,200 1050,100"
                stroke="#66CC33"
                strokeWidth="3"
                strokeDasharray="5 2"
                fill="none"
              />
            </svg>

            <div className="absolute left-[15%] top-[25%] -translate-x-1/2 -translate-y-1/2">
              <p className="bg-lime-500 text-white flex justify-center items-center rounded-full shadow-md w-8 h-8 z-10 absolute right-[5%] top-[25%]">
                1
              </p>
              <img
                src={Pickup}
                alt="Pickup clothes image"
                className="h-[200px] rounded-full "
              />
            </div>

            <div className="absolute left-[45%] top-[25%] -translate-x-1/2 -translate-y-1/2">
              <p className="bg-lime-500 text-white flex justify-center items-center rounded-full shadow-md w-8 h-8 z-10 absolute right-[5%] top-[25%]">
                2
              </p>
              <img
                src={Clean}
                alt="clean clothes image"
                className="h-[200px] rounded-full "
              />
            </div>

            <div className="absolute right-[5%] top-[25%] -translate-x-1/2 -translate-y-1/2">
              <p className="bg-lime-500 text-white flex justify-center items-center rounded-full shadow-md w-8 h-8 z-10 absolute right-[5%] top-[25%]">
                3
              </p>
              <img
                src={Deliver}
                alt="Deliver clothes image"
                className="h-[200px] rounded-full "
              />
            </div>
          </div>

          <div className="flex items-center justify-around mt-10">
            <div className="text-center w-1/3">
              <p className="text-xl md:text-2xl font-bold">
                Schedule your pickup
              </p>
              <p className="text-sm md:text-base mt-2">
                Select a time that works best for you.
              </p>
            </div>
            <div className="text-center w-1/3">
              <p className="text-xl md:text-2xl font-bold">
                We handle the cleaning
              </p>
              <p className="text-sm md:text-base mt-2">
                Our experts will wash and dry clean your fabrics.
              </p>
            </div>
            <div className="text-center w-1/3">
              <p className="text-xl md:text-2xl font-bold">
                Enjoy fast delivery
              </p>
              <p className="text-sm md:text-base mt-2">
                Receive your freshly cleaned clothes right at home.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-[5vh] md:mt-[10vh] space-y-4 md:space-y-0 md:space-x-4">
          <button className="button border-2 border-[#7ED321] p-[5px] rounded-[5px] hover:cursor-pointer shadow-lg">
            Get Started
          </button>
          <button className="button hover:cursor-pointer">
            Learn More &#x3009;
          </button>
        </div>
      </section>

      <section className="bg-white p-[5vh] md:pt-[10vh] md:pb-[4vh] px-4 transition-all duration-500 relative overflow-hidden">
        <div className="hidden sm:block  absolute top-0 right-0 translate-x-1/2 w-[150px] md:w-[200px] h-[60px] md:h-[95px] bg-[#1F3C5F] rounded-b-full "></div>

        <div className="flex flex-col md:flex-row items-center justify-around gap-8 md:gap-[5rem]">
          <div className="w-full md:w-[40vw]">
            <img src={Placeholder} alt="testimonial" className="w-full" />
          </div>
          <div className="text-center md:text-left max-w-xl">
            <p className="text-xl md:text-2xl">{"⭐".repeat(5)}</p>
            <p className="text-xl md:text-2xl font-bold mt-4">
              "{testimonials[index].text}"
            </p>
            <p className="font-bold mt-8 md:mt-[5rem]">
              {testimonials[index].name}
            </p>
            <p>{testimonials[index].role}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
