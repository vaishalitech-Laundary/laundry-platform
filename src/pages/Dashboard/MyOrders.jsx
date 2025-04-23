import React from "react";

const orders = [
  {
    id: 1,
    tag: "DRY CLEANING",
    title: "Specialized cleaning for delicate fabrics.",
    price: "₹120/item",
    service: "Wash & Fold",
    deliveryDate: "May 16, 2025",
    image: "/images/dry-cleaning.jpg",
  },
  {
    id: 2,
    tag: "WASH & FOLD",
    title: "Clothes are washed, dried, and neatly folded.",
    price: "₹50/kg",
    service: "Wash & Fold",
    deliveryDate: "May 16, 2025",
    image: "/images/iron.jpg",
  },
  {
    id: 3,
    tag: "WASH & FOLD",
    title: "Clothes are washed, dried, and neatly folded.",
    price: "₹50/kg",
    service: "Wash & Fold",
    deliveryDate: "May 16, 2025",
    image: "/images/folded-clothes.jpg",
  },
];

export default function MyOrders() {
  return (
    <div className="p-10 bg-[#f5f7fb] min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

      {/* Search bar */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by customer, product, or order ID"
          className="px-5 py-3 border rounded-md flex-1 text-sm"
        />
      </div>

      {/* Filter buttons */}
      <div className="flex gap-3 mb-6">
        {['ALL', 'Ordered', 'Cancelled', 'Delivered', 'Other'].map((filter, idx) => (
          <button
            key={idx}
            className={`px-5 py-2 text-sm rounded-full border transition-all duration-200 ${
              filter === 'ALL'
                ? 'bg-[#e5fadc] text-black border-[#b2f033]'
                : 'text-gray-600 border-gray-300 bg-white hover:bg-gray-50'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Order cards */}
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
          >
            <img
              src={order.image}
              alt="Order"
              className="w-48 h-32 object-cover"
            />
            <div className="p-5 flex-1">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {order.tag}
                </span>
                <button className="text-sm text-white bg-[#0f2b59] px-4 py-1.5 rounded-full shadow-sm hover:bg-[#0d254d]">
                  Track Order
                </button>
              </div>
              <div className="text-base text-gray-800 font-medium mb-1">{order.title}</div>
              <div className="text-blue-600 font-bold mb-1">{order.price}</div>
              <div className="text-sm text-gray-500">Service: {order.service}</div>
              <div className="text-sm text-gray-500">Estimated delivery: {order.deliveryDate}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
