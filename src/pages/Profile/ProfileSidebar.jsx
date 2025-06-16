import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUser, FaAddressCard, FaBell } from 'react-icons/fa';

const ProfileSidebar = () => {
  // Base styles for all links
  const linkClass = "flex items-center py-3 px-4 w-full transition-colors";
  
  // Navigation items array
  const navItems = [
    {
      path: "/user-profile",
      name: "Profile",
      icon: FaUser,
      end: true
    },
    {
      path: "/user-profile/account",
      name: "Account",
      icon: FaAddressCard
    },
    {
      path: "/user-profile/notification",
      name: "Notifications",
      icon: FaBell
    }
  ];
  
  return (
    <div className="bg-white rounded-lg overflow-hidden w-full mr-10 md:w-64 shadow-sm border border-gray-200">
      <nav className="flex flex-col">
        {navItems.map((item, index) => (
          <NavLink 
            key={index}
            to={item.path}
            end={item.end}
            className={({ isActive }) => 
              `${linkClass} ${isActive 
                ? 'bg-gray-100 text-black font-medium' 
                : 'bg-white text-black hover:bg-gray-100'}`
            }
          >
            {({ isActive }) => {
              const Icon = item.icon;
              return (
                <>
                  <Icon className={`mr-3 ${isActive ? 'text-black' : 'text-gray-500'}`} /> 
                  {item.name}
                </>
              );
            }}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default ProfileSidebar;