import React, { useState /* , useEffect */ } from 'react';
import CartItem from '../Cart/CartItem.jsx';
import { FaArrowLeft } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

// Static initial items
const initialItems = [
  {
    id: 1,
    name: 'Dry Cleaning',
    description: 'Specialized cleaning for delicate fabrics.',
    price: 120,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Wash & Fold',
    description: 'Clothes are washed, dried, and neatly folded.',
    price: 50,
    quantity: 0,
  },
  {
    id: 1,
    name: 'Dry Cleaning',
    description: 'Specialized cleaning for delicate fabrics.',
    price: 120,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Wash & Fold',
    description: 'Clothes are washed, dried, and neatly folded.',
    price: 50,
    quantity: 0,
  },
  {
    id: 1,
    name: 'Dry Cleaning',
    description: 'Specialized cleaning for delicate fabrics.',
    price: 120,
    quantity: 1,
  },
 
];

const Cart = () => {
  const [items, setItems] = useState(initialItems);
  const [promoCode, setPromoCode] = useState('');
  const [deliveryFee] = useState(20);

    const navigate = useNavigate()

  // Backend: Fetch cart items
  /*
  useEffect(() => {
    axios.get('/api/cart')
      .then(res => setItems(res.data))
      .catch(err => console.error('Error fetching cart:', err));
  }, []);
  */

  const handleQuantityChange = (id, quantity) => {
    setItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity } : item))
    );

    // Backend: Update quantity of cart item
    /*
    axios.patch(`/api/cart/${id}`, { quantity })
      .then(res => console.log("Quantity updated"))
      .catch(err => console.error("Failed to update quantity", err));
    */
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.05;
  const total = subtotal - discount + deliveryFee;

  return (
    <>
      <div className="flex items-center mb-4 mt-4 ml-6 cursor-pointer " onClick={()=> navigate('/Services')}>
        <FaArrowLeft className="text-xl " />
        <h2 className="text-3xl font-bold ml-4">My Cart</h2>
      </div>

      <div className="max-w-7xl h-full mx-auto p-4 shadow-sm rounded-2xl ">
        <div className="flex items-center mb-4 mt-4 ">
          <RxCountdownTimer className="bg-gray-300 p-1 rounded-xl w-10 h-12" />
          <div className="flex flex-col ml-4">
            <h2 className="text-2xl font-bold">Pickup in 10 minutes</h2>
            <span>pickup in 5 services</span>
          </div>
        </div>

        {items.map(item => (
          <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
        ))}
      </div>

      {/* bills details */}
      <div className="mt-4 pt-4">
        <h3 className="text-4xl font-semibold ml-30 mb-4">Bill details</h3>
        <div className='max-w-7xl h-[350px] mx-auto p-4 shadow-sm rounded-2xl'>

          <div className="flex justify-between py-1 text-[#00000099] text-xl ">
            <span>Subtotal</span>
            <span className='text-black font-semibold'>₹{subtotal}</span>
          </div>
          <div className="flex justify-between py-1 text-[#00000099] text-xl ">
            <span >Discount (-5%)</span>
            <span className="text-red-500 font-semibold">-₹{discount.toFixed(0)}</span>
          </div>
          <div className="flex justify-between py-1 text-[#00000099] text-xl ">
            <span>Delivery Fee</span>
            <span className='text-black font-semibold'>₹{deliveryFee}</span>
          </div>
          <div className="flex justify-between font-bold py-2 text-black text-xl  border-t border-gray-200 mt-2">
            <span>Total</span>
            <span>₹{total.toFixed(0)}</span>
          </div>

          {/* Promo code input */}
          <div className="flex mt-4 gap-4 md:gap-8">
            <input
              className="flex-1 border p-2 rounded-full max-w-6xl border-[#7ED321]"
              placeholder="Add promo code"
              value={promoCode}
              onChange={e => setPromoCode(e.target.value)}
            />
            {/*  Backend: Validate and apply promo code */}
            {/* axios.post('/api/promocode', { code: promoCode }) */}
            <button className="bg-[#1F3C5F] px-6 md:px-10 rounded-[2px] text-white">Apply</button>
          </div>

        </div>

        <button className=" mx-auto mb-6 bg-[#1F3C5F] w-[302px] h-[70px] rounded-xl px-6 text-white text-xl py-2 mt-4 flex items-center justify-center gap-2">
          Confirm Pickup
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default Cart;
