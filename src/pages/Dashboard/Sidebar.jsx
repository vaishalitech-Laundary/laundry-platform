// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
  {
    to: '/user-dashboard',
    label: 'Dashboard',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
        <path d="M12 3.75c-1.335 0-2.643.228-3.84.632a8.25 8.25 0 00-5.07 8.495l3.227 3.226c.527.527 1.379.527 1.906 0l.195-.195a.75.75 0 011.06 0l.194.195 3.227-3.226a8.25 8.25 0 00-5.07-8.495C9.393 4.078 10.699 3.75 12 3.75zM12 15.75a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
  {
    to: '/user-dashboard/track-order',
    label: 'Track Orders',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" clipRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-3.9-3.9a.75.75 0 011.06-1.06l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06l3.9-3.9H4.5a.75.75 0 01-.75-.75z" />
      </svg>
    ),
  },
  {
    to: '/user-dashboard/my-orders',
    label: 'My Orders',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
        <path d="M3 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 10.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 16.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
      </svg>
    ),
  },
  {
    to: '/user-dashboard/subscription-plan',
    label: 'Subscription Plans',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75zM12 12.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM5.25 9a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM16 15a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H16.75a.75.75 0 01-.75-.75z" />
      </svg>
    ),
  },
  {
    to: '/user-dashboard/profile-settings',
    label: 'Profile & Settings',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" clipRule="evenodd" d="M18.685 19.757a12.39 12.39 0 00-10.578 0 7.309 7.309 0 00-1.794 1.297 9.709 9.709 0 002.282 1.957c.32.24.72.19 1.03-.06l.581-.581a2 2 0 002.828 0l.582.582c.31.25.71.3 1.03.05a9.709 9.709 0 002.282-1.957 7.309 7.309 0 00-1.794-1.297zM12 15.75a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    ),
  },
  {
    to: '/user-dashboard/help-support',
    label: 'Help & Support',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 1.75a.75.75 0 01.75.75V5h-1.5V2.5a.75.75 0 01.75-.75z" />
        <path d="M12 1.75c4.418 0 8.25 3.832 8.25 8.25s-3.832 8.25-8.25 8.25-8.25-3.832-8.25-8.25 3.832-8.25 8.25-8.25zM12 16a4 4 0 100-8 4 4 0 000 8z" />
      </svg>
    ),
  },
];

const Sidebar = () => (
  <aside className="fixed lg:static top-0 left-0 w-[220px] h-full bg-[#1F3C5F] text-white flex flex-col py-8 z-30 overflow-y-auto">
    <nav aria-label="Sidebar Navigation" className="px-6 space-y-4">
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
              isActive
                ? 'bg-white text-[#1F3C5F]'
                : 'text-white hover:bg-[#2C4A6B] hover:text-white'
            }`
          }
        >
          {icon}
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
