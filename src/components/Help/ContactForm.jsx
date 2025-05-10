import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="flex p-[10px] bg-[#F5F7EB]">
      <div className="w-[50%] flex flex-col items-left p-[5%] gap-1.5 ">
        <h1 className="text-4xl font-bold text-[#1F3C5F]">Get in Touch</h1>
        <p>We are here to assist you with any inquiries.</p>
        <p className="flex items-center">
          <FaEnvelope className="mr-2 text-[#1F3C5F]" /> support@freshfold.com
        </p>
        <p className="flex items-center">
          <FaPhoneAlt className="mr-2 text-[#1F3C5F]" /> +91 9876543210
        </p>
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2 text-[#1F3C5F]" /> 123 Sample St,
          Sydney NSW 2000 AU
        </p>
      </div>
      <div className="w-[50%]">
        <ContactFormComponent />
      </div>
    </div>
  );
};

export default ContactForm;

const ContactFormComponent = () => {
  function handleSubmit() {
    // Add your submit logic here
  }
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="firstName" className="mb-2 text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="border-2 border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#1F3C5F]"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="lastName" className="mb-2 text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="border-2 border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#1F3C5F]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="email" className="mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#1F3C5F]"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="phoneNumber" className="mb-2 text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              className="border-2 border-gray-400 rounded-lg p-2 focus:outline-none focus:border-[#1F3C5F]"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="topic" className="mb-2 text-gray-700">
            Select a topic
          </label>
          <select
            name="topic"
            id="topic"
            className="border-2 border-gray-300 rounded-lg p-2 w-full md:w-3/4 focus:outline-none focus:border-[#1F3C5F]"
          >
            <option value="chooseone">Choose one ...</option>
          </select>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-gray-700 font-medium">How can we help?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <input type="radio" name="helpType" id="general" />
              <label htmlFor="general">General Inquiry</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="helpType" id="technical" />
              <label htmlFor="technical">Technical Support</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="helpType" id="billing" />
              <label htmlFor="billing">Billing Question</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="helpType" id="feedback" />
              <label htmlFor="feedback">Feedback Request</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="helpType" id="other-inquiry" />
              <label htmlFor="other-inquiry">Other Inquiry</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" name="helpType" id="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="2"
            placeholder="Write your message ..."
            className="border-2 border-gray-300 rounded-lg p-2 w-full resize-y min-h-[50px] focus:outline-none focus:border-[#1F3C5F]"
          ></textarea>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="terms" id="terms" className="w-4 h-4" />
          <label htmlFor="terms" className="text-gray-700">
            I agree to Terms
          </label>
        </div>

        <button className="bg-[#1F3C5F] text-white px-6 py-2 rounded-lg hover:bg-[#2a507a] transition-colors w-full md:w-auto hover:cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};
