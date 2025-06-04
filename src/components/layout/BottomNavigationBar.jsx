import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BiHomeAlt } from "react-icons/bi";
import { VscCalendar } from "react-icons/vsc";
import { TbBox } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa6";
function BottomNavigationBar() {
  return (
      <div className='text-black w-full  fixed bottom-0  text-center '>
        <div className='relative bg-white border w-[90vw] mx-auto rounded-2xl shadow-xl'>
        <div className='flex justify-around px-2 py-3'>
            <Link className='bg-blue-700 text-white px-3 py-2 rounded-lg'><BiHomeAlt className='w-[28px] h-[28px] text-white'/></Link>
            <Link><VscCalendar className='w-[28px] h-[28px]'/></Link>
            <Link><TbBox className='w-[32px] h-[32px]'/></Link>
            <Link><FaRegUser className='w-[28px] h-[28px]'/></Link>
        </div>
    </div>
    </div>
  )
}

export default BottomNavigationBar