import React from 'react';
import { MdDelete } from "react-icons/md";


const CartItem = ({ item, onQuantityChange }) => {

  const handleIncrement = () => {
    const newQuantity = item.quantity + 1;
    onQuantityChange(item.id, newQuantity);

    //  Dummy API: Increment quantity
    /*
    axios.patch(`/api/cart/${item.id}`, { quantity: newQuantity })
      .then(res => console.log('Quantity increased'))
      .catch(err => console.error('Error increasing quantity', err));
    */
  };

  const handleDecrement = () => {
    if (item.quantity > 0) {
      const newQuantity = item.quantity - 1;
      onQuantityChange(item.id, newQuantity);

      // Dummy API: Decrement quantity
      /*
      axios.patch(`/api/cart/${item.id}`, { quantity: newQuantity })
        .then(res => console.log('Quantity decreased'))
        .catch(err => console.error('Error decreasing quantity', err));
      */
    }
  };

  const handleDelete = () => {
    // Dummy API: Delete item
    /*
    axios.delete(`/api/cart/${item.id}`)
      .then(res => console.log('Item deleted'))
      .catch(err => console.error('Error deleting item', err));
    */
    console.log(`Deleted item with ID ${item.id} (dummy)`);
  };

  return (
    <div className="flex flex-col md:flex-row  mt-8 md:items-center justify-between rounded-lg p-4 mb-4 border-b-2 border-gray-200 bg-white">

      {/* Left Section: Image + Details */}
      <div className="flex flex-col sm:flex-row sm:items-center shadow-sm max-w-[373px]  sm:w-auto space-x-0 sm:space-x-4 mb-4 sm:mb-0">
        <img
          src={item.image || "https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"}
          alt={item.description}
          className="w-28 h-28 object-cover rounded-md border mx-auto sm:mx-0"
        />
        <div className="mt-2  px-2 sm:mt-0">
          <div className="flex items-center justify-between space-x-3 ml-0.5">
            <h4 className="font-semibold bg-[#EBEBFF] px-2 py-1 rounded-[5px] text-[10px] sm:text-[8px]">{item.name}</h4>
            <p className="text-base font-semibold text-[15px] mr-2 text-[#1F3C5F]">₹{item.price}</p>
          </div>
          <p className="text-sm ml-0.5 text-gray-600 mt-1">{item.description}</p>
        </div>
      </div>

      {/* Right Section: Delete + Quantity */}
      <div className="flex flex-row sm:flex-col items-center justify-between sm:justify-center sm:items-center gap-4">
        <MdDelete
          size={20}
          className='cursor-pointer text-red-600 hover:text-red-800'
          onClick={handleDelete}
        />
        <div className="flex items-center rounded-full border border-[#7ED321] overflow-hidden">
          <button onClick={handleDecrement} className="px-3 py-1 cursor-pointer text-lg font-bold">-</button>
          <span className="px-4 py-1 bg-white text-lg">{item.quantity}</span>
          <button onClick={handleIncrement} className="px-3 py-1 cursor-pointer text-lg font-bold">+</button>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
