import React, { useState } from 'react'
import ProfileSidebar from './ProfileSidebar'
import { FaCalendarAlt, FaChevronDown } from 'react-icons/fa'

const AccountSettings = () => {
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [language, setLanguage] = useState('');
    
    return (
        <div className="flex flex-col md:flex-row gap-6 container mx-auto p-2">
          {/* Left sidebar */}
          <div className="w-full md:w-64 md:flex-shrink-0">
            <ProfileSidebar />
          </div>
          
          {/* Main content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6 pr-90">
            <h1 className="text-2xl font-bold text-gray-800">Account</h1>
            <p className="text-gray-500 mb-8">Update your account settings. Set your preferred language and timezone.</p>
            
            <div className="border-t-2 border-gray-300 pt-6"></div>
            
            {/* Name field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="text-xs text-gray-500 mt-1">
                This is the name that will be displayed on your profile and in emails.
              </p>
            </div>
            
            {/* Date of birth field */}
            <div className="mb-6">
              <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                Date of birth
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="birthDate"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  placeholder="Pick a date"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onFocus={(e) => {e.target.type = 'date'}}
                  onBlur={(e) => {e.target.type = 'text'}}
                />
                <FaCalendarAlt className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Your date of birth is used to calculate your age.
              </p>
            </div>
            
            {/* Language field */}
            <div className="mb-8">
              <label htmlFor="language" className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <div className="relative">
                <select
                  id="language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
                >
                  <option value="">Select Language</option>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="zh">Chinese</option>
                  <option value="ja">Japanese</option>
                  <option value="hi">Hindi</option>
                </select>
                <FaChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                This is the language that will be used in the dashboard.
              </p>
            </div>
            
            {/* Update button */}
            <button 
              className="px-4 py-2 bg-[#1F3C5F] text-white font-medium rounded hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update account
            </button>
          </div>
        </div>
    )
}

export default AccountSettings