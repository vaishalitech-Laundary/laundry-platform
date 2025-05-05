import React, { useState } from 'react'
import ProfileSidebar from './ProfileSidebar'
import { FaPen } from 'react-icons/fa'
const image="src/assets/User.png"
const ProfileInfo = () => {
  const [username, setUsername] = useState('sharanya')
  const [selectedAddress, setSelectedAddress] = useState('home')
  const [address, setAddress] = useState('23, Main Street, City');
  
  return (
    <div className="flex flex-col md:flex-row gap-6 container mx-auto p-2">
      {/* Left sidebar */}
      <div className="w-full md:w-64 md:flex-shrink-0">
        <ProfileSidebar />
      </div>
      
      {/* Main content */}
      <div className="flex-1 bg-white rounded-lg shadow-sm p-6 lg:pr-50">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
        <p className="text-gray-500 mb-6">This is how others will see you on the site.</p>
        
        {/* Profile Picture Section */}
        <div className="mb-8">
          <h2 className="text-sm font-medium text-gray-700 mb-2">Profile picture</h2>
          <div className="relative inline-block">
            <img 
              src={image} 
              alt="Profile" 
              className="w-20 h-20 rounded-full object-cover border border-gray-200"
            />
            <button className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 shadow-md border border-gray-200">
              <FaPen size={12} className="text-gray-500" />
            </button>
          </div>
        </div>
        
        {/* Username Section */}
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
          </p>
        </div>
        
        {/* Email Section */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <select
            id="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
          >
            <option>Select a verified email to display</option>
            <option>user@example.com</option>
          </select>
          <p className="text-xs text-gray-500 mt-1">
            You can manage verified email addresses in your email settings.
          </p>
        </div>
        
        {/* Saved Addresses Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Saved Addresses
          </label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Enter your address..."
            aria-label="Saved address"
          />
          
          {/* Address Type Toggles */}
          <div className="flex gap-2 mt-2">
            <button 
              className={`px-4 py-1.5 rounded-full text-sm ${
                selectedAddress === 'home' 
                  ? 'bg-green-100 border border-green-300 text-green-800' 
                  : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedAddress('home')}
            >
              Home
            </button>
            <button
              className={`px-4 py-1.5 rounded-full text-sm ${
                selectedAddress === 'work' 
                  ? 'bg-green-100 border border-green-300 text-green-800' 
                  : 'bg-gray-100 border border-gray-200 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedAddress('work')}
            >
              Work
            </button>
          </div>
        </div>
        
        {/* Order History Section */}
        <div className="mt-8">
          <h2 className="text-lg font-medium text-gray-800 mb-2">View Your Order History</h2>
          <button className="bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-700 hover:bg-gray-50">
            Order History
          </button>
        </div>
      <button className='bg-[#1F3C5F] text-stone-100 p-2 mt-6 rounded-lg'>Update Profile</button>
      </div>
    </div>
  )
}

export default ProfileInfo