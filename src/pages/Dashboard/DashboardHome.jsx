import { FaTachometerAlt, FaClipboardList, FaUser, FaQuestionCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";

export default function UserDashboard() {
  const currentOrders = [
    { id: "12345", date: "March 19, 2025", status: "Processing" },
    { id: "23456", date: "March 18, 2025", status: "Out for Delivery" }
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0B1E3A] text-white flex flex-col p-4 space-y-6">
        <div className="text-2xl font-bold tracking-wide mb-8">FRESHFOLD</div>
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <div className="flex items-center gap-3 hover:text-blue-300">
            <FaTachometerAlt /> Dashboard
          </div>
          <div className="flex items-center gap-3 hover:text-blue-300">
            <FaClipboardList /> My Orders
          </div>
          <div className="flex items-center gap-3 hover:text-blue-300">
            <FaClipboardList /> Subscription Plans
          </div>
          <div className="flex items-center gap-3 hover:text-blue-300">
            <FaUser /> Profile & Settings
          </div>
          <div className="flex items-center gap-3 hover:text-blue-300">
            <FiHelpCircle /> Help & Support
          </div>
        </nav>
        <div className="mt-auto flex items-center gap-3 text-red-400 hover:text-red-600 cursor-pointer">
          <MdLogout /> Log Out
        </div>
      </aside>

      {/* Main Dashboard Content */}
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-semibold">Good Morning, Sharanya!</h1>

        <div className="grid grid-cols-5 gap-4 mt-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Wallet Balance</p>
            <p className="text-xl font-semibold">₹350</p>
            <p className="text-xs text-gray-400 mt-1">Use it to get discounts</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Active Orders</p>
            <p className="text-xl font-semibold">2</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Earned from Referrals</p>
            <p className="text-xl font-semibold">₹150</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="text-gray-500 text-sm">Total Orders</p>
            <p className="text-xl font-semibold">24</p>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow">Schedule New Order</button>
          <button className="bg-white border border-gray-300 hover:bg-gray-50 py-3 rounded-lg shadow">Track My Order</button>
          <button className="bg-white border border-gray-300 hover:bg-gray-50 py-3 rounded-lg shadow">View Subscription Plans</button>
          <button className="bg-white border border-gray-300 hover:bg-gray-50 py-3 rounded-lg shadow">Refer & Earn</button>
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Current Orders</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Order ID</th>
                  <th className="p-3 text-left">Pickup Date</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3">
                      <span className={`font-medium ${order.status === 'Processing' ? 'text-green-500' : 'text-blue-500'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3 text-blue-600 cursor-pointer">Track Order</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 text-left">Order ID</th>
                  <th className="p-3 text-left">Pickup Date</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3">
                      <span className={`font-medium ${order.status === 'Processing' ? 'text-green-500' : 'text-blue-500'}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="p-3 text-blue-600 cursor-pointer">Track Order</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}
