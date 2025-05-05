import React, { useState } from 'react'
import ProfileSidebar from './ProfileSidebar'
const AccountSettings = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 container mx-auto p-2">
          {/* Left sidebar */}
          <div className="w-full md:w-64 md:flex-shrink-0">
            <ProfileSidebar />
          </div>
          
          {/* Main content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
            Account settings main content goes here.
          </div>
        </div>
      )
}

export default AccountSettings