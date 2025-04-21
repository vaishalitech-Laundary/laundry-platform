import React from "react";
import Rec1 from "../../assets/Rectangle 1.png";
import Rec2 from "../../assets/Rectangle 2.png";
import Rec3 from "../../assets/Rectangle 3.png";
import Rec4 from "../../assets/Rectangle 4.png";
import Placeholder from "../../assets/Placeholder.png"

const Home = () => {
  return (
    <div className="bg-[#F7F7F7] mt-auto ">
      <section>
        <h1 className="text-center pt-[10vh] w-[70vw] text-6xl text-[#1F3C5F] font-extrabold m-auto">
          Hassle-Free Laundry Service at Your Doorstep!
        </h1>
        <h3 className="text-center w-[60vw] m-auto p-2  ">
          We pick up, wash, and deliver your clothes fresh and clean. Experience
          the convenience of laundry service tailored to your busy lifestyle.
        </h3>
        <div className="text-center mt-[7vh]">
          <button className="button rounded-lg bg-[#1F3C5F] text-white text-2xl p-5 shadow-lg hover:cursor-pointer">
            Schedule a pickup
          </button>
        </div>
        <div className="flex gap-3 items-center justify-center mt-[7vh]">
          <img src={Rec1} alt="" className="h-[60vh]" />
          <img src={Rec2} alt="" className="h-[60vh]" />
          <img src={Rec3} alt="" className="h-[60vh]" />
          <img src={Rec4} alt="" className="h-[60vh]" />
        </div>
      </section>

      <section className="bg-white block h-[110vh]">
        <div className="pt-[8vh]">
          <h1 className="text-4xl text-[#1F3C5F] text-center font-extrabold ">
            Why Our Laundry Service Stands Out
          </h1>
          <p className="text-center mt-[2vh]">
            Experience the convenience of our laundry service. We prioritize
            your needs with our reliable and efficient solutions.
          </p>
        </div>

        <div className="flex items-center justify-center gap-5 m-auto  mt-[10vh]">
          <div className="text-center">
            <div className="h-[30vh]"></div>
            <h3 className="text-[#1F3C5F] font-bold text-3xl ">
              Free Pickup & Delivery Right to Your Door
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              libero expedita est tempore incidunt aperiam dolorum repellat
              necessitatibus dolores voluptatum obcaecati, aliquam nam eos.
            </p>
          </div>
          <div className="text-center">
            <div className="h-[30vh]"></div>
            <h3 className="text-[#1F3C5F] font-bold text-3xl ">
              Affordable Pricing with No Hidden Fees
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              quia ea ratione voluptatum omnis accusamus, perspiciatis tenetur
              sint quam facere.
            </p>
          </div>
          <div className="text-center">
            <div className="h-[30vh]"></div>
            <h3 className="text-[#1F3C5F] font-bold text-3xl ">
              Eco-Friendly Products for a Greener Clean
            </h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit eveniet nesciunt blanditiis autem tempore itaque
              iusto facilis nostrum! Nisi repudiandae illum vero quia
              consequuntur ex!
            </p>
          </div>
        </div>
        <div className="mt-[10vh]  text-center">
          <button className="button border-2 border-[#7ED321] p-[5px] rounded-[5px] hover:cursor-pointer shadow-lg">
            Learn More
          </button>
        </div>
      </section>
      <section className="pt-[8vh] h-[100vh]">
        <div className="text-center ">
          <h1 className="text-4xl text-[#1F3C5F] font-bold">
            Simple Steps to Fresh, Clean Laundry
          </h1>
          <p className="m-auto mt-[4vh] w-[80vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            illum dolores, quisquam, voluptates totam nulla labore distinctio
            commodi expedita temporibus quasi tempora alias eveniet veritatis
            dolore blanditiis aperiam natus. Culpa!
          </p>
        </div>
        <div className="relative w-full h-40 bg-[#F7F7F7] mt-[10vh]">
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 1000 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,200 C250,0 750,200 1000,1"
              stroke="#66CC33"
              strokeWidth="3"
              strokeDasharray="8 5"
              fill="none"
            />
          </svg>

          <div className="absolute left-[20%] top-[60%] -translate-x-1/2 -translate-y-1/2">
            <div className="bg-lime-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md">
              1
            </div>
          </div>

          <div className="absolute left-[50%] top-[30%] -translate-x-1/2 -translate-y-1/2">
            <div className="bg-lime-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md">
              2
            </div>
          </div>

          <div className="absolute right-[18%] top-[55%] -translate-x-1/2 -translate-y-1/2">
            <div className="bg-lime-500 text-white w-8 h-8 flex items-center justify-center rounded-full shadow-md">
              3
            </div>
          </div>
        </div>

        <div className="flex items-center justify-around">
          <div className="text-center">
            <p className="text-2xl font-bold">Schedule your pickup</p>
            <p>Select a time that works best for you.</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">We handle the cleaning</p>
            <p>Our experts will wash and dry clean your fabrics.</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">Enjoy fast delivery</p>
            <p>Receive ypur freshly cleaned clothes rigth at home.</p>
          </div>
        </div>
        <div className="text-center mt-[10vh]">
          <button className="button m-[2rem] border-2 border-[#7ED321] p-[5px] rounded-[5px] hover:cursor-pointer shadow-lg ">
            Get Started
          </button>
          <button className="button hover:cursor-pointer">Learn More &#x3009;</button>
        </div>
      </section>
      <section className="bg-white pt-[10vh]">
      <div className="m-5 flex items-center justify-around gap-[5rem]">
        <div>
          <img src={Placeholder} alt="image" className="w-[40vw]" />
        </div>
        <div>
          <p className="text-2xl">{"⭐".repeat(5)}</p>
          <p className="text-2xl font-bold">"Fast, friendly, and eco-conscious! I recommend them to everyone I know."</p>
          <p className="font-bold mt-[5rem]">David Brown</p>
          <p>Tech Lead, Innovate</p>
        </div>
      </div>

      </section>
    </div>
  );
};

export default Home;
