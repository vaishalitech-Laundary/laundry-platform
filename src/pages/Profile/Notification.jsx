import React, { useState } from 'react'
import ProfileSidebar from './ProfileSidebar'

const Notification = () => {
    // State for notification preferences
    const [notifyAbout, setNotifyAbout] = useState();
    
    // States for email notification toggles
    const [communicationEmails, setCommunicationEmails] = useState(false);
    const [marketingEmails, setMarketingEmails] = useState(false);
    const [serviceEmails, setServiceEmails] = useState(true);
    const [securityEmails, setSecurityEmails] = useState(true);
    
    // State for mobile settings
    const [useDifferentMobileSettings, setUseDifferentMobileSettings] = useState(false);

    return (
        <div className="flex flex-col md:flex-row gap-6 container mx-auto p-2">
          {/* Left sidebar */}
          <div className="w-full md:w-64 md:flex-shrink-0">
            <ProfileSidebar />
          </div>
          
          {/* Main content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm p-6 lg:pr-60">
            <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
            <p className="text-gray-500 mb-8">Configure how you receive notifications.</p>
            
            <div className="border-t border-gray-200 pt-6"></div>
            
            {/* Notify me about section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Notify me about...</h2>
              
              <div className="space-y-3">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="notify" 
                    value="personal"
                    checked={notifyAbout === 'personal'}
                    onChange={() => setNotifyAbout('personal')}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Personal Reminders</span>
                </label>
                
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="notify" 
                    value="order"
                    checked={notifyAbout === 'order'}
                    onChange={() => setNotifyAbout('order')}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Order Updates</span>
                </label>
                
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="notify" 
                    value="payment"
                    checked={notifyAbout === 'payment'}
                    onChange={() => setNotifyAbout('payment')}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Payment Updates</span>
                </label>
              </div>
            </div>
            
            {/* Email Notifications section */}
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-4">Email Notifications</h2>
              
              <div className="space-y-4">
                {/* Communication emails */}
                <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">Communication emails</h3>
                    <p className="text-sm text-gray-500">Receive emails about your account activity.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={communicationEmails}
                      onChange={() => setCommunicationEmails(!communicationEmails)}
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1F3C5F]"></div>
                  </label>
                </div>
                
                {/* Marketing emails */}
                <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">Marketing emails</h3>
                    <p className="text-sm text-gray-500">Receive emails about new services, features, and more.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={marketingEmails}
                      onChange={() => setMarketingEmails(!marketingEmails)}
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1F3C5F]"></div>
                  </label>
                </div>
                
                {/* Service emails */}
                <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">Service emails</h3>
                    <p className="text-sm text-gray-500">Updates on orders, payments to stay informed.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={serviceEmails}
                      onChange={() => setServiceEmails(!serviceEmails)}
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1F3C5F]"></div>
                  </label>
                </div>
                
                {/* Security emails */}
                <div className="border border-gray-200 rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-gray-800">Security emails</h3>
                    <p className="text-sm text-gray-500">Receive emails about your account activity and security.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={securityEmails}
                      onChange={() => setSecurityEmails(!securityEmails)}
                      className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1F3C5F]"></div>
                  </label>
                </div>
              </div>
            </div>
            
            {/* Mobile settings */}
            <div className="mb-8">
              <label className="flex items-center">
                <input 
                  type="checkbox"
                  checked={useDifferentMobileSettings}
                  onChange={() => setUseDifferentMobileSettings(!useDifferentMobileSettings)}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2 text-gray-700 font-medium">Use different settings for my mobile devices</span>
              </label>
              <p className="text-sm text-gray-500 mt-1 ml-6">
                You can manage your mobile notifications in the <span className="underline">mobile settings</span> page.
              </p>
            </div>
            
            {/* Update button */}
            <button 
              className="px-4 py-2 bg-[#1F3C5F] text-white font-medium rounded hover:bg-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update notifications
            </button>
          </div>
        </div>
    )
}

export default Notification