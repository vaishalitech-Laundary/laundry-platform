import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa' // Import icon
import ProfileInfo from './ProfileInfo';
import Notification from './Notification';
import AccountSettings from './AccountSettings';

const ProfileRoutes = () => {
  const navigate = useNavigate();
  
  return (
    <>
      <button 
        onClick={() => navigate(-1)} 
        className="cursor-pointer mb-4 px-4 py-2 ml-20 flex items-center text-gray-700 hover:text-gray-900 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>
      
      <Routes>
        <Route path="/" element={<ProfileInfo/>} /> 
        <Route path="/account" element={<AccountSettings />} />
        <Route path="/notification" element={<Notification />} />
      </Routes>
    </>
  )
}

export default ProfileRoutes