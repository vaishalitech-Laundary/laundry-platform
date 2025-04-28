import React from "react";
import Logo from "../../assets/Logo.png";
import Image from "../../assets/Image.png";
import Image1 from "../../assets/Image1.png";
import Image2 from "../../assets/Image2.png";
import Image3 from "../../assets/Image3.png";
import Image4 from "../../assets/Image4.png";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F7] p-4 md:p-8 lg:p-10 pt-[5vh]">
    
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        <div>
          <p className="text-[#1F3C5F] text-2xl md:text-3xl lg:text-4xl font-extrabold text-center md:text-left">
            Stay Connected with Our Services
          </p>
        </div>
        <div>
          <button className="button bg-[#1F3C5F] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-sm md:text-[1rem] shadow-2xl hover:cursor-pointer w-full md:w-auto">
            Contact
          </button>
        </div>
      </div>

      <p className="mt-4 md:mt-[2rem] text-sm md:text-base text-center md:text-left">
        Your satisfaction is our priority. Reach out anytime for assistance or inquiries.
      </p>

      <hr className="mt-4 md:mt-[2rem]" />

      <div className="md:hidden mt-4 space-y-6">
        {[
          {
            title: 'Customer Support',
            links: ['Help Center', 'FAQs', 'Feedback', 'Live Chat', 'Contact Us']
          },
          {
            title: 'Company Info',
            links: ['About Us', 'Careers', 'Blog', 'Newsroom', 'Privacy Policy']
          },
          {
            title: 'Legal Links',
            links: ['Terms Of Service', 'Cookie Policy', 'User Agreement', 'Social Media', 'Facebook']
          },
          {
            title: 'Twitter',
            links: ['Instagram', 'LinkedIn', 'YouTube', 'Get Started', 'Sign Up']
          },
          {
            title: 'Stay Updated',
            links: ['Join Our Newsletter', 'Subscribe Now', 'Get Exclusive Offers', 'Latest Promotions', 'Special Discounts']
          },
          {
            title: 'Connect With Us',
            links: ['Email Us Anytime', 'Call our team', 'Visit our Office', 'Follow Us Online', 'Get Help']
          }
        ].map((section) => (
          <div key={section.title} className="mb-4">
            <h3 className="font-extrabold mb-2 ">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link} className="text-sm hover:text-blue-600 cursor-pointer ">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

     
      <div className="hidden md:block">
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
          <tbody className="text-sm lg:text-base">
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
      </div>

     
      <div className="flex flex-col md:flex-row items-center justify-between mt-6 md:mt-[2rem] gap-4 md:gap-0">
        <div>
          <img src={Logo} alt="Logo" className="h-[8vh] md:h-[10vh]" />
        </div>
        <div className="flex flex-wrap justify-center">
          <img src={Image} alt="" className="h-12 md:h-auto" />
          <img src={Image1} alt="" className="-ml-4 h-12 md:h-auto" />
          <img src={Image2} alt="" className="-ml-4 h-12 md:h-auto" />
          <img src={Image3} alt="" className="-ml-4 h-12 md:h-auto" />
          <img src={Image4} alt="" className="-ml-4 h-12 md:h-auto" />
        </div>
      </div>

      <hr className="mt-4 md:mt-[2rem]" />

    
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 gap-4 md:gap-0">
        <div>
          <p className="text-sm md:text-base"> © {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <FaFacebook className="text-[#1F3C5F] text-xl md:text-2xl hover:opacity-80 cursor-pointer" />
          <FaInstagram className="text-[#1F3C5F] text-xl md:text-2xl hover:opacity-80 cursor-pointer" />
          <FaTimes className="text-[#1F3C5F] text-xl md:text-2xl hover:opacity-80 cursor-pointer" />
          <FaLinkedin className="text-[#1F3C5F] text-xl md:text-2xl hover:opacity-80 cursor-pointer" />
          <FaYoutube className="text-[#1F3C5F] text-xl md:text-2xl hover:opacity-80 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
