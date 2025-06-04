import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

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

import img1 from "../../assets/img6.jpg";
import img2 from "../../assets/img5.jpg";
import img3 from "../../assets/img4.jpg";
import img4 from "../../assets/img3.jpg";
import img5 from "../../assets/img2.jpg";
import img6 from "../../assets/img1.jpg";

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  
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

  const changeTestimonialHandler = (side) => {
    if (side === "left") {
      setIndex((pre) => (pre - 1 + testimonials.length) % testimonials.length);
      console.log(index);
    } else {
      setIndex((pre) => (pre + 1) % testimonials.length);
      console.log(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // 4 seconds per testimonial

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F7F7F7] mt-auto">
      <section className="flex flex-col gap-8 mx-auto">
        <div className="px-4 md:px-8 lg:px-16">
          <h1 className="text-center  pt-[5vh] md:pt-[10vh] w-full md:w-[78vw] text-[26px] xl:text-7xl md:text-64px lg:text-6xl text-[#1F3C5F] font-extrabold mx-auto">
            Hassle-Free Laundry Service at Your Doorstep!
          </h1>
          <h3 className="text-center w-full md:w-[60vw] mx-auto p-2 text-sm md:text-base text-[10px] md:text-[18px]">
            We pick up, wash, and deliver your clothes fresh and clean.
            Experience the convenience of laundry service tailored to your busy
            lifestyle.
          </h3>
          <div className="text-center mt-[4vh] md:mt-[5vh]">
            <div className="flex gap-2 justify-center">
              <button className="bg-blue-900 text-white px-4 md:px-6 py-3 rounded-lg">
                Schedule a pickup
                
              </button>
              <button className="px-4 py-2 border rounded-lg md:hidden">
                Pickup
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden  flex mt-10 justify-center gap-1 px-2">
          <img src={img1} alt="" className="w-[68px] h-[78px]"/>
          <img src={img2} alt="" className="w-[68px] h-[78px] relative bottom-5" />
          <img src={img3} alt="" className="w-[68px] h-[78px]" />
          <img src={img4} alt="" className="w-[68px] h-[78px] relative bottom-5" />
          <img src={img5} alt="" className="w-[68px] h-[78px]" />
        </div>
        <div className="md:block hidden w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2 mt-[4vh] md:mt-[7vh]">
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img
                src={Rec1}
                alt="Laundry Service"
                className="w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[430px] lg:h-[320px] xl:h-[400px] object-cover  shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img
                src={Rec2}
                alt="Cleaning Process"
                className="w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[430px] lg:h-[320px] xl:h-[400px] object-cover shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img
                src={Rec3}
                alt="Delivery Service"
                className="w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[430px] lg:h-[320px] xl:h-[400px] object-cover shadow-md"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9 w-full">
              <img
                src={Rec4}
                alt="Quality Service"
                className="w-full h-[150px] xs:h-[180px] sm:h-[220px] md:h-[430px] lg:h-[320px] xl:h-[400px] object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white mb-5 p-4 md:p-6 lg:p-8 min-h-screen relative overflow-hidden">
        <div className="hidden sm:block  absolute top-0 right-0 translate-x-1/2 rotate-12 w-[150px] md:w-[320px] h-[60px] md:h-[150px] bg-[#1F3C5F] rounded-b-full "></div>
        <div className="pt-[4vh] md:pt-[8vh] flex flex-col ">
          <h1 className=" text-[26px] md:text-2xl md:text-[48px] text-[#1F3C5F] text-center font-extrabold">
            Why Our Laundry Service Stands Out
          </h1>
          <p className="text-center  mt-[2vh] px-4 text-[10px] md:text-[18px] md:text-base">
            Experience the convenience of our laundry service. We prioritize
            your needs with our reliable and efficient solutions.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-between mt-[2vh] md:mt-[12vh] lg:mt-[9vh]">
          <div className="text-center w-full md:w-1/3 px-4">
            <div className="flex md:h-[240px] items-center justify-center md:mb-[2rem] ">
              <img
                src={Laundry3}
                alt="Pickup and Delivery Service"
                className="md:w-full md:h-full w-[310px]"
              />
            </div>
            <div className="md:w-full w-[310px] mx-auto flex flex-col items-center md:gap-2 justify-center">
              <h3 className="text-[#1F3C5F] font-bold text-xl md:text-2xl lg:text-3xl ">
                Free Pickup & Delivery Right to Your Door
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit...
              </p>
            </div>
          </div>

          <div className="text-center w-full md:w-1/3 px-4">
            <div className="flex md:h-[240px] items-center justify-center mb-4 md:mb-[2rem] rounded-lg">
              <img
                src={Laundry2}
                alt="Affordable Pricing"
                className="md:w-full md:h-full w-[294px]"
              />
            </div>
            <div className="md:w-full w-[310px] mx-auto flex flex-col items-center md:gap-2 justify-center">
              <h3 className="text-[#1F3C5F] font-bold text-xl md:text-2xl lg:text-3xl ">
                Affordable Pricing with No Hidden Fees
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
          </div>

          <div className="text-center w-full md:w-1/3 px-4">
            <div className="flex md:h-[240px] items-center justify-center mb-4 md:mb-[2rem] rounded-lg">
              <img
                src={Laundry1}
                alt="Eco-Friendly Cleaning"
                className="md:w-full md:h-full w-[294px]"
              />
            </div>
            <div className="md:w-full w-[310px] mx-auto flex flex-col items-center md:gap-2 justify-center">
              <h3 className="text-[#1F3C5F] font-bold text-xl md:text-2xl lg:text-3xl ">
                Eco-Friendly Products for a Greener Clean
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-center mt-[10vh] md:my-[12vh] xl:my-[10vh] text-center">
          <button className="button border-2 border-[#7ED321] px-5 py-2 rounded-[5px] shadow-lg">
            Learn More
          </button>
          <button className="flex justify-center md:hidden gap-3 items-center  px-2 rounded-lg">
            Sign Up <FaAngleRight />
          </button>
        </div>
      </section>

      <section className="relative flex flex-col gap-10 xl:gap-5 pt-15">
        <div className=" sm:block absolute bottom-40 left-0">
          <div className="relative">
            <div className="absolute w-[78px] h-[75px]  md:w-[160px] md:h-[160px] md:border-28 border-18 border-[#A9E26A] rounded-full  translate-x-[-50%] -top-72 md:top-0"></div>
          </div>
        </div>

        <div className="text-center md:mb-4">
          <h1 className="text-[26px] md:text-4xl text-[#1F3C5F] font-bold">
            Simple Steps to Fresh, Clean Laundry
          </h1>
          <p className="mx-auto md:mt-[4vh] w-full md:w-[80vw] text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>

        <div className="md:hidden w-full flex flex-col gap-8">
          <div className="flex justify-center relative top-64 right-6">
            <svg
              className=" h-[10vh]  rotate-90 md:rotate-0 absolute top-[-80px] xl:top-[-90px]"
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
            <div className="absolute w-4 h-4 bg-[#7ED321] rounded-full  top-[190px]"></div>
            <div className="absolute w-4 h-4 bg-[#7ED321] rounded-full top-[-280px]"></div>
          </div>
          <div className="flex w-full flex-row-reverse items-center justify-end md:flex-col md:items-center text-center">
            <div className="relative">
              <p className="bg-lime-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute top-[85%] left-[20%]">
                1
              </p>
              <img
                src={Pickup}
                alt="Pickup"
                className="h-[110px] w-[110px] rounded-full"
              />
            </div>
            <div className="w-[33vw]">
              <p className="font-bold mt-2 text-[14px]">Schedule your pickup</p>
              <p className="text-[10px]">
                Select a time that works best for you.
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-end  md:flex-col items-center text-center">
            <div className="relative">
              <p className="bg-lime-500 text-white rounded-full w-5 h-5 flex items-center justify-center absolute top-[70%] right-0">
                2
              </p>
              <img
                src={Clean}
                alt="Clean"
                className="h-[110px] w-[110px] rounded-full"
              />
            </div>
            <div className="flex flex-col w-[40vw]">
              <p className="font-bold text-[14px] mt-2">
                We handle the cleaning
              </p>
              <p className="text-[10px]">
                Our experts will wash and dry clean your fabrics.
              </p>
            </div>
          </div>

          <div className="flex md:flex-col justify-end flex-row-reverse items-center text-center">
            <div className="relative ">
              <p className="bg-lime-500 text-white rounded-full w-6 h-6 flex items-center justify-center absolute top-[83%] left-[15%]">
                3
              </p>
              <img
                src={Deliver}
                alt="Deliver"
                className="h-[110px] w-[110px] rounded-full"
              />
            </div>
            <div className="w-[33vw]">
              <p className="font-bold mt-2 text-[14px]">Enjoy fast delivery</p>
              <p className="text-[10px]">
                Receive your freshly cleaned clothes right at home.
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <div className="relative w-full mt-[15vh] flex flex-col items-center justify-center">
            <div className="relative w-[90%] max-w-[1000px] xl:max-w-[1400px]">
              <div className="absolute -left-9 w-[calc(100%+5rem)] top-[50%] -translate-y-1/2">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 1000 200"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,100 C150,0 850,200 1000,100"
                    stroke="#66CC33"
                    strokeWidth="3"
                    strokeDasharray="5 2"
                  />
                </svg>
                <div className="absolute w-5 h-5 bg-[#7ED321] rounded-full top-[50%] -translate-y-1/2 left-0"></div>
                <div className="absolute w-5 h-5 bg-[#7ED321] rounded-full top-[50%] -translate-y-1/2 right-0"></div>
              </div>
              <div className="relative flex justify-between items-center">
                <div className="relative flex flex-col items-center">
                  <p className="bg-lime-500 text-white flex justify-center items-center rounded-full shadow w-8 h-8 absolute top-34 right-0 z-10">
                    1
                  </p>
                  <img
                    src={Pickup}
                    alt="Pickup"
                    className="h-[200px] w-[200px] xl:w-[300px] xl:h-[300px] rounded-full shadow-lg"
                  />
                </div>
                <div className="relative flex flex-col items-center">
                  <p className="bg-lime-500 text-white flex justify-center items-center rounded-full shadow w-8 h-8 absolute  right-6 z-10">
                    2
                  </p>
                  <img
                    src={Clean}
                    alt="Clean"
                    className="h-[200px] w-[200px] xl:w-[300px] xl:h-[300px] rounded-full shadow-lg"
                  />
                </div>
                <div className="relative flex flex-col items-center">
                  <p className="bg-lime-500 text-white flex justify-center items-center rounded-full shadow w-8 h-8 absolute top-34 right-0 z-10">
                    3
                  </p>
                  <img
                    src={Deliver}
                    alt="Deliver"
                    className="h-[200px] w-[200px] xl:w-[300px] xl:h-[300px] rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-around mt-10 w-[90%] max-w-[1000px] mx-auto">
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
        </div>

        <div className="text-center mb-16 mt-[5vh] md:mt-[10vh] space-x-4 space-y-4 md:space-y-0 md:space-x-4">
          <button className="button border-2 border-[#7ED321] px-4 py-2 rounded-[5px] hover:cursor-pointer shadow-lg">
            Get Started
          </button>
          <button className="button hover:cursor-pointer">
            Learn More &#x3009;
          </button>
        </div>
      </section>

      <section className="bg-white p-[5vh] md:pt-[10vh] md:pb-[4vh] px-4 transition-all duration-500 relative overflow-hidden">
        <div className=" sm:block  absolute top-0 right-0 translate-x-1/2 rotate-45 w-[120px] md:w-[250px] h-[90px] md:h-[170px] bg-[#1F3C5F] rounded-b-full "></div>
        <div className="flex md:flex-row items-center justify-center gap-4 md:gap-[5rem]">
          <div className="w-[188px] h-[195px] md:w-[35vw] md:h-[90vh]">
            <img src={Placeholder} alt="testimonial" className="w-full" />
          </div>
          <div className="text-center md:text-left max-w-xl">
            <div className="flex md:gap-6 gap-3">
              {new Array(5).fill(0).map((_,index) => (
                <p key={index} className="text-xl md:text-2xl w-[10px] h-[11px]">⭐</p>
              ))}
            </div>

            <p className="text-[12px] w-[188px] md:w-[45vw] md:text-2xl font-bold mt-4">
              "{testimonials[index].text}"
            </p>
            <p className="font-bold mt-8 md:mt-[5rem] text-[10px] md:text-[16px]">
              {testimonials[index].name}
            </p>
            <p className="text-[10px] md:text-[16px]">
              {testimonials[index].role}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-5 w-[80vw] xl:w-[75vw] mx-auto">
          <div className="space-x-1">
            {testimonials.map((_, i) => (
              <input
              key={i}
                type="radio"
                checked={index === i ? true : false}
                name="testimonial"
                onChange={(e) => setIndex(e.target.value)}
                value={i}
              />
            ))}
          </div>
          <div className="flex gap-3 md:mb-0 mb-14">
            <button
              className="border p-2 cursor-pointer rounded-full bg-blue-800 text-white"
              onClick={() => changeTestimonialHandler("left")}
            >
              <FaArrowLeft />
            </button>
            <button
              className="border p-2 cursor-pointer rounded-full bg-blue-800 text-white"
              onClick={() => changeTestimonialHandler("right")}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
