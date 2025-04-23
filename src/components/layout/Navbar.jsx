import React from 'react'
import Logo from "../../assets/LOGO.png";
import Bell from "../../assets/Bell.png";
import Cart from "../../assets/Cart.png";
import User from "../../assets/User.png";
const Navbar = () => {
  return (
    <nav className='flex items-center justify-around font-roboto'>
        <div>
          <img src={Logo} alt="Freshfold" className='h-[15vh] bg-none brightness-112' />
        </div>
        <div>
          <ul className='flex gap-5 text-[3.5vh]'>
            <li>Home</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Track Order</li>
          </ul>
        </div>
        <div>
          <div className='flex gap-[2.9vw] text-2xl items-center'>
            <div>
              <img src={Bell} alt="Bell" className='hover:cursor-pointer' />
            </div>
            <div>
              <img src={Cart} alt="Cart" className='hover:cursor-pointer' />
            </div>
            <div>
              <img src={User} alt="Cart" className='hover:cursor-pointer' />
            </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar
