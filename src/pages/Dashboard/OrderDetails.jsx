import React from 'react';
import { ChevronDownIcon, FunnelIcon, RefreshCwIcon } from 'lucide-react';

const OrderDetails = () => {
  const orders = [
    {
      id: '81818',
      name: 'Christine Brooks',
      address: '18th North Street, 124 Sep 2019',
      date: '24 Sep 2019',
      services: 'Dry Cleaning',
      status: 'Delivered',
    },
    {
      id: '81819',
      name: 'Rhoda Pearson',
      address: '976 Northways, 1745 May 2019',
      date: '30 May 2019',
      services: 'Stain Removal',
      status: 'Processing',
    },
    {
      id: '81820',
      name: 'Ronald Caldwell',
      address: '8557 Fields Street, 12 Aug 2019',
      date: '14 Aug 2019',
      services: 'Wash & Fold',
      status: 'Cancelled',
    },
    {
      id: '81821',
      name: 'Wilbert Johnston',
      address: '714 Southway Lane, 25 Feb 2019',
      date: '27 Feb 2019',
      services: 'Ironing',
      status: 'Delivered',
    },
    {
      id: '81822',
      name: 'Allan Sims',
      address: '342 Majestic Throughway',
      date: '19 Aug 2019',
      services: 'Dry Cleaning',
      status: 'Processing',
    },
    {
      id: '81823',
      name: 'Alvin Myers',
      address: '543 Northern Boulevard',
      date: '15 Aug 2019',
      services: 'Stain Removal',
      status: 'Delivered',
    },
    {
      id: '81824',
      name: 'Maggie Sullivan',
      address: 'New Southvalley',
      date: '21 Dec 2019',
      services: 'Ironing',
      status: 'Processing',
    },
    {
      id: '81825',
      name: 'Robert Todd',
      address: '765 Forge Street, 23 Apr 2019',
      date: '25 Apr 2019',
      services: 'Wash & Fold',
      status: 'Cancelled',
    },
    {
      id: '81826',
      name: 'Dolores Henry',
      address: '134 Light Forge Suite 872',
      date: '09 Jan 2019',
      services: 'Ironing',
      status: 'Delivered',
    },
    // Add more order data as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6 w-full overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Lists</h2>

      {/* Filter and Action Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button className="flex items-center text-sm text-gray-700">
            <FunnelIcon className="w-4 h-4 mr-1" />
            Filter
            <ChevronDownIcon className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center text-sm text-gray-700">
            Order Type
            <ChevronDownIcon className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center text-sm text-gray-700">
            Order Status
            <ChevronDownIcon className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center text-sm text-gray-700">
            Date
            <ChevronDownIcon className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center text-sm text-gray-700">
            Wash & Fold
            <ChevronDownIcon className="w-4 h-4 ml-1" />
          </button>
          <button className="flex items-center text-sm text-blue-600 font-semibold">
            <RefreshCwIcon className="w-4 h-4 mr-1" />
            Reset Filter
          </button>
        </div>
        {/* Add any other actions or buttons here */}
      </div>

      {/* Order Table */}
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr className="text-left text-gray-700">
            <th className="py-2 px-4 font-semibold">ID</th>
            <th className="py-2 px-4 font-semibold">Name</th>
            <th className="py-2 px-4 font-semibold">Address</th>
            <th className="py-2 px-4 font-semibold">Date</th>
            <th className="py-2 px-4 font-semibold">Services</th>
            <th className="py-2 px-4 font-semibold">Status</th>
            <th className="py-2 px-4"></th> {/* For potential action buttons */}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b border-gray-200">
              <td className="py-2 px-4">{order.id}</td>
              <td className="py-2 px-4">{order.name}</td>
              <td className="py-2 px-4 text-gray-500">{order.address}</td>
              <td className="py-2 px-4">{order.date}</td>
              <td className="py-2 px-4">{order.services}</td>
              <td className="py-2 px-4">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${
                    order.status === 'Delivered'
                      ? 'bg-green-100 text-green-600'
                      : order.status === 'Processing'
                      ? 'bg-yellow-100 text-yellow-600'
                      : order.status === 'Cancelled'
                      ? 'bg-red-100 text-red-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {order.status}
                </span>
              </td>
              <td className="py-2 px-4 text-right">
                {/* Add action buttons here if needed */}
                {/* <button className="text-blue-600 text-sm">View Details</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetails;