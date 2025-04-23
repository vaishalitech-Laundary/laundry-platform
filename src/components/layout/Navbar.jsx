import React, { useState } from 'react'
import {Link} from "react-router-dom"


import Logo from "../../assets/LOGO.png";
import Bell from "../../assets/Bell.png";
import Cart from "../../assets/Cart.png";
import User from "../../assets/User.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='relative px-4 py-2 md:px-6 lg:px-8'>
      <div className='flex items-center justify-between'>
        <div>
         <Link to="/"><img src={Logo} alt="Freshfold" className='h-12 md:h-[15vh] bg-none brightness-112' /></Link> 
        </div>
        <button 
          className='md:hidden p-2'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        <div className='hidden md:block'>
          <ul className='flex gap-5 text-lg lg:text-[3.5vh]'>
            <li><Link to="/" className='hover:text-blue-600 cursor-pointer'>Home</Link></li>
            <li><Link to="/services" className='hover:text-blue-600 cursor-pointer'>Services</Link></li>
            <li><Link to="/pricing" className='hover:text-blue-600 cursor-pointer'>Pricing</Link></li>
            <li><Link to="/track-order" className='hover:text-blue-600 cursor-pointer'>Track Order</Link></li>
          </ul>
        </div>
        <div className='hidden md:block'>
          <div className='flex gap-4 lg:gap-[2.9vw] text-2xl items-center'>
            <div>
              <img src={Bell} alt="Bell" className='w-6 lg:w-auto hover:cursor-pointer' />
            </div>
            <div>
              <img src={Cart} alt="Cart" className='w-6 lg:w-auto hover:cursor-pointer' />
            </div>
            <div>
              <img src={User} alt="User" className='w-6 lg:w-auto hover:cursor-pointer' />
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50'>
          <ul className='flex flex-col p-4'>
            <li><Link to="/" className='py-2 hover:text-blue-600'>Home</Link></li>
            <li><Link to="/services" className='py-2 hover:text-blue-600'>Services</Link></li>
            <li><Link to="/pricing" className='py-2 hover:text-blue-600'>Pricing</Link></li>
            <li><Link to="/track-order" className='py-2 hover:text-blue-600'>Track Order</Link></li>
          </ul>
          <div className='flex justify-center gap-8 p-4 border-t'>
            <img src={Bell} alt="Bell" className='w-6 hover:cursor-pointer' />
            <img src={Cart} alt="Cart" className='w-6 hover:cursor-pointer' />
            <img src={User} alt="User" className='w-6 hover:cursor-pointer' />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
