import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FaHandHolding } from "react-icons/fa6";
import { IoInformation } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa6";


const Sidebar = () => {
  return (
    <nav>
        <div className='hidden md:flex md:fixed z-20 text-white text-2xl items-center h-screen'>
            <div className="absolute flex-row shadow-2xl rounded-[10rem] m-5 z-20">
                <div className='p-3 m-4 hover:bg-[#363535] rounded-3xl duration-300 ease-in-out transition-all hover:shadow-xl hover:cursor-pointer'><CgProfile /></div>
                <div className='p-3 m-4 hover:bg-[#363535] rounded-3xl duration-300 ease-in-out transition-all hover:shadow-xl hover:cursor-pointer'><FaHandHolding /></div>
                <div className='p-3 m-4 hover:bg-[#363535] rounded-3xl duration-300 ease-in-out transition-all hover:shadow-xl hover:cursor-pointer'><IoInformation /></div>
                <div className='p-3 m-4 hover:bg-[#363535] rounded-3xl duration-300 ease-in-out transition-all hover:shadow-xl hover:cursor-pointer'><FaWpforms /></div>
            </div>
        </div>
        <div className='flex fixed md:hidden z-20 text-white text-2xl justify-end w-screen'>
            <div className="absolute flex-col shadow-2xl rounded-[10rem] m-7 p-3 z-20 bg-[#363535]">
                <menu>
                    <FaCaretDown />
                </menu>
            </div>
        </div>
    </nav>
  )
}

export default Sidebar