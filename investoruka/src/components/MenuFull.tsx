import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaHandHolding } from "react-icons/fa6";
import { IoInformation } from "react-icons/io5";
import { FaWpforms } from "react-icons/fa";

const MenuFull = () => {
  return (
    <div className='absolute left-0 top-0 h-screen w-screen bg-[#232323]/80 text-white flex justify-center items-center align-middle flex-row backdrop-blur-md md:hidden'>
        <div className=" flex flex-col gap-5">
            <a href='profil' className='flex flex-row items-center py-5 px-5 cursor-pointer bg-white/20 justify-center gap-2 rounded-xl shadow-2xl'><CgProfile /> <span className='text-md font-bold'>&nbsp;Profil</span></a>
            <a href='utlan' className='flex flex-row items-center py-5 px-5 cursor-pointer bg-white/20 justify-center gap-2 rounded-xl shadow-2xl'><FaHandHolding /> <span className='text-md font-bold'>&nbsp;Utlån</span></a>
            <a href='omoss' className='flex flex-row items-center py-5 px-5 cursor-pointer bg-white/20 justify-center gap-2 rounded-xl shadow-2xl'><IoInformation /> <span className='text-md font-bold'>&nbsp;Om oss</span></a>
            <a href='tos' className='flex flex-row items-center py-5 px-5 cursor-pointer bg-white/20 justify-center gap-2 rounded-xl shadow-2xl'><FaWpforms /> <span className='text-md font-bold'>&nbsp;Service Agreement</span></a>
        </div>
    </div>
  )
}

export default MenuFull