import React, { useState } from 'react';
import {
  CalendarIcon,
  TruckIcon,
  DollarSignIcon,
  GiftIcon,
  BellIcon,
  LayoutDashboard,
  Package,
  ListChecks,
  CreditCard,
  User,
  HelpCircle,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import longImage from '../../assets/Long.png';
import { Plus, Minus } from 'lucide-react'; // Import the icons
import {  Outlet } from 'react-router-dom';




const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {/* Mobile Sidebar Backdrop */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 w-64 bg-[#1F3C5F] text-white flex flex-col py-8 z-30 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out min-h-screen lg:translate-x-0`}
      >
        <nav className="space-y-6 w-full text-sm font-medium px-8 mt-8 overflow-y-auto pb-40">
          <a href="#" className="block py-2 flex items-center gap-2">
            {/* Dashboard Icon (Pyramid Shape) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 3.75c-1.335 0-2.643.228-3.84.632a8.25 8.25 0 00-5.07 8.495l3.227 3.226c.527.527 1.379.527 1.906 0l.195-.195a.75.75 0 011.06 0l.194.195 3.227-3.226a8.25 8.25 0 00-5.07-8.495C9.393 4.078 10.699 3.75 12 3.75zM12 15.75a3 3 0 100-6 3 3 0 000 6zM18.07 8.158c.86.408 1.745.76 2.651 1.053a8.25 8.25 0 01-8.806 8.805l-3.227-3.227a.75.75 0 010-1.06l.195-.195a.75.75 0 00-1.06 0l-.194.195 3.227 3.227a8.25 8.25 0 018.806-8.805c.906-.288 1.791-.64 2.651-1.053z" />
            </svg>
            Dashboard
          </a>
          <Link to="/user-dashboard/track-order" className="block py-2 flex items-center gap-2">
            {/* Track My Order Icon (Right Arrow) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-3.9-3.9a.75.75 0 011.06-1.06l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06l3.9-3.9H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
            Track Orders
          </Link>
          <Link to="/user-dashboard/my-orders" className="block py-2 flex items-center gap-2">
            {/* My Orders Icon (List) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M3 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 10.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zM3 16.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" />
            </svg>
            My Orders
          </Link>
          <Link to="/user-dashboard/subscription-plan" className="block py-2 flex items-center gap-2">
            {/* Subscription Plans Icon (Up/Down Arrows) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0V4.5a.75.75 0 01.75-.75zM12 12.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM5.25 9a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75zM16 15a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H16.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
            Subscription Plans
          </Link>
          <a href="#" className="block py-2 flex items-center gap-2">
            {/* Profile & Settings Icon (User) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M18.685 19.757a12.39 12.39 0 00-10.578 0 7.309 7.309 0 00-1.794 1.297 9.709 9.709 0 002.282 1.957c.32.24.72.19 1.03-.06l.581-.581a2 2 0 002.828 0l.582.582c.31.25.71.3 1.03.05a9.709 9.709 0 002.282-1.957 7.309 7.309 0 00-1.794-1.297zM12 15.75a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            Profile & Settings
          </a>
          <a href="#" className="block py-2 flex items-center gap-2">
            {/* Help & Support Icon (Question Mark) */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M9 13.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6-1.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3-6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-13.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm9 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 1.75a.75.75 0 01.75.75V5h-1.5V2.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
              <path d="M12 1.75c4.418 0 8.25 3.832 8.25 8.25s-3.832 8.25-8.25 8.25-8.25-3.832-8.25-8.25 3.832-8.25 8.25-8.25zM12 16a4 4 0 100-8 4 4 0 000 8z" />
            </svg>
            Help & Support
          </a>
        </nav>

        {/* Fixed Footer */}
        <div className="absolute bottom-0 left-0 w-full bg-[#1F3C5F] p-8 flex flex-col items-center border-t border-[#385174]">
          <div className="mb-4">
            <img src={longImage} alt="Illustration" className="w-40 h-auto rounded-lg shadow-lg" />
          </div>
          <Button variant="outline" className="bg-white text-[#1F3C5F] font-semibold w-32">
            Log Out
          </Button>
        </div>
      </aside>

      {/* Hamburger Menu (Mobile Only) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="lg:hidden p-4 fixed top-4 left-4 z-40 bg-[#1F3C5F] rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Main Content */}
      <main className="flex-1 bg-[#F9FAFB] p-6 sm:p-10 overflow-x-auto min-h-screen">
        
        {/* Top Header */}
        <div className="bg-white rounded-tl-lg rounded-tr-lg flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 px-6 sm:px-8 mb-6 gap-2">
          <div className="flex items-start sm:items-center">
            <h1 className="font-geist font-semibold text-xl sm:text-3xl text-gray-800 mr-4" style={{ lineHeight: '150%' }}>
              Good Morning, Sharanya!
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Jan 20, 2023 - Feb 05, 2023</span>
            </div>
            <Button className="bg-[#1F3C5F] text-white font-semibold text-sm">Download</Button>
          </div>
        </div>

        {/* Overview and Notification */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <Button className="bg-white text-gray-700 font-semibold text-sm border border-gray-300 w-full sm:w-auto">
            Overview
          </Button>
          <Button className="bg-white text-gray-700 font-semibold text-sm border border-gray-300 flex items-center gap-2 w-full sm:w-auto">
            <BellIcon className="w-4 h-4" />
            Notification
          </Button>
        </div>

        {/* Wallet & Orders Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <Card title="Wallet Balance" value="₹350" desc="Use it to get discounts on your next order." />
          <Card title="Active Orders" value="2" desc="Processing and delivery status available." />
          <Card title="Earned from Referrals" value="₹150" desc="Invite friends and earn rewards." />
          <Card title="Total Orders" value="24" desc="All your completed service orders." />
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <ActionCard
            title="Schedule New Order"
            btnText="Schedule Pickup"
            desc="Select services, date & time slot."
            Icon={CalendarIcon}
          />
          <ActionCard title="Track My Order" btnText="Track Now" desc="Real-time tracking of services." Icon={TruckIcon} />
          <ActionCard
            title="View Subscription Plans"
            btnText="Manage Plan"
            desc="View or upgrade your subscription."
            Icon={DollarSignIcon}
          />
          <ActionCard
            title="Refer & Earn"
            btnText="Share Invite"
            desc="Invite your friends and earn ₹50 for each."
            Icon={GiftIcon}
          />
        </div>

        {/* Tables */}
        <SectionTable
          title="Current Orders"
          subtitle="Your Active Orders"
          orders={[
            { id: '12345', pickupDate: 'March 19, 2025', status: 'Processing', action: 'Track Order' },
            { id: '23456', pickupDate: 'March 18, 2025', status: 'Out for Delivery', action: 'Track Order' },
          ]}
        />
        <SectionTable
          title="Recent Orders"subtitle="Order History"
          orders={[
            { id: '78901', pickupDate: 'April 15, 2025', status: 'Delivered', action: 'View Details' },
            { id: '34567', pickupDate: 'April 05, 2025', status: 'Completed', action: 'View Details' },
          ]}
        />
      </main>
    </div>
  );
};

// Utility Components
const Button = ({ children, className = '', ...props }) => (
  <button className={`px-4 py-2 rounded hover:opacity-90 transition text-sm ${className}`} {...props}>
    {children}
  </button>
);

const Input = ({ className = '', ...props }) => (
  <input
    className={`border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1F3C5F] ${className}`}
    {...props}
  />
);

const Card = ({ title, value, desc }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
    <div className="text-xs text-gray-500 mb-1">{title}</div>
    <div className="text-2xl font-bold text-gray-800">{value}</div>
    <div className="text-xs text-gray-400 mt-1">{desc}</div>
  </div>
);

const ActionCard = ({ title, btnText, desc, Icon }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between shadow-sm">
    <div>
      <div className="flex items-center gap-2 text-sm font-semibold mb-2 text-[#1F3C5F]">
        <Icon className="w-4 h-4" />
        {title}
      </div>
      <div className="text-xs text-gray-500 mb-4">{desc}</div>
    </div>
    <Button variant="outline" className="text-[#1F3C5F] border border-[#1F3C5F] font-semibold px-3 py-2 w-fit">
      {btnText}
    </Button>
  </div>
);

const SectionTable = ({ title, subtitle, orders }) => (
  <div className="mb-10">
    <div className="text-lg font-semibold mb-1 text-gray-800">{title}</div>
    <div className="text-sm text-gray-500 mb-4">{subtitle}</div>
    <div className="bg-white border border-gray-200 rounded-lg overflow-x-auto shadow-sm">
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div className="text-sm font-medium text-gray-700">Order Table</div>
        <Input placeholder="Search..." className="w-64 h-9" />
      </div>
      <table className="w-full text-sm min-w-[600px]">
        <thead className="bg-white">
          <tr className="text-left border-b border-gray-200">
            <th className="p-4 font-semibold text-gray-700">Order ID</th>
            <th className="p-4 font-semibold text-gray-700">Pickup Date</th>
            <th className="p-4 font-semibold text-gray-700">Status</th>
            <th className="p-4 font-semibold text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-200">
              <td className="p-4 text-gray-700">{order.id}</td>
              <td className="p-4 text-gray-700">{order.pickupDate}</td>
              <td className="p-4 text-gray-700">{order.status}</td>
              <td className="p-4 text-gray-700">
                <Button className="text-[#1F3C5F]">{order.action}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default UserDashboard;