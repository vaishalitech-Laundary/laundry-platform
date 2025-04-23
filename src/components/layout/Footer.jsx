import React from "react";
import Logo from "../../assets/Logo.png";
import Image from "../../assets/Image.png";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import { FaFacebook, FaInstagram, FaYoutube,FaLinkedin,FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] p-10 pt-[5vh]">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#1F3C5F] text-4xl font-extrabold">
            Stay Connected with Our Services
          </p>
        </div>
        <div>
          <button className="button bg-[#1F3C5F] text-white pl-8 pr-8 pt-3 pb-3 rounded-lg text-[1rem] shadow-2xl
          hover:cursor-pointer ">
            Contact
          </button>
        </div>
      </div>
      <p className="mt-[2rem]">
        Your satisfaction is our priority. Reach out anytime for assistance or
        inquiries.
      </p>
      <hr className="mt-[2rem]" />
      <table className="w-full mt-4 text-left border-collapse">
        <thead className="font-extrabold">
          <tr>
            <th className="p-2">Customer Support</th>
            <th className="p-2">Company Info</th>
            <th className="p-2">Legal Links</th>
            <th className="p-2">Twitter</th>
            <th className="p-2">Stay Updated</th>
            <th className="p-2">Connect With Us</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">Help Center</td>
            <td className="p-2">About Us</td>
            <td className="p-2">Terms Of Service</td>
            <td className="p-2">Instagram</td>
            <td className="p-2">Join Our Newsletter</td>
            <td className="p-2">Email Us Anytime</td>
          </tr>
          <tr>
            <td className="p-2">FAQs</td>
            <td className="p-2">Careers</td>
            <td className="p-2">Cookie Policy</td>
            <td className="p-2">LinkedIn</td>
            <td className="p-2">Subscribe Now</td>
            <td className="p-2">Call our team</td>
          </tr>
          <tr>
            <td className="p-2">Feedback</td>
            <td className="p-2">Blog</td>
            <td className="p-2">User Agreement</td>
            <td className="p-2">YouTube</td>
            <td className="p-2">Get Exclusive Offers</td>
            <td className="p-2">Visit our Office</td>
          </tr>
          <tr>
            <td className="p-2">Live Chat</td>
            <td className="p-2">Newsroom</td>
            <td className="p-2">Social Media</td>
            <td className="p-2">Get Started</td>
            <td className="p-2">Latest Promotions</td>
            <td className="p-2">Follow Us Online</td>
          </tr>
          <tr>
            <td className="p-2">Contact Us</td>
            <td className="p-2">Privacy Policy</td>
            <td className="p-2">Facebook</td>
            <td className="p-2">Sign Up</td>
            <td className="p-2">Special Discounts</td>
            <td className="p-2">Get Help</td>
          </tr>
        </tbody>
      </table>

      <div className="flex items-center justify-between mt-[2rem]">
        <div>
          <img src={Logo} alt="Logo" className="h-[10vh]" />
        </div>
        <div className="flex ">
          <img src={Image} alt="" className="ml-0" />
          <img src={Image1} alt="" className="-ml-4" />
          <img src={Image2} alt="" className="-ml-4" />
          <img src={Image3} alt="" className="-ml-4" />
          <img src={Image4} alt="" className="-ml-4" />
        </div>
      </div>
      <hr className="mt-[2rem]" />
      <div className="flex justify-between items-center mt-4">
        <div>
          <p> © {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <FaFacebook className="text-[#1F3C5F] text-2xl" />
          <FaInstagram className="text-[#1F3C5F] text-2xl" />
          <FaTimes className="text-[#1F3C5F] text-2xl" /> 
          <FaLinkedin className="text-[#1F3C5F] text-2xl" />
          <FaYoutube className="text-[#1F3C5F] text-2xl" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
