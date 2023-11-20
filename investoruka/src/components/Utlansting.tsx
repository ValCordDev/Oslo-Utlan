import React from 'react'

const Utlansting = () => {
  return (
    <div className='bg-[#191919] rounded-2xl w-[32rem] h-48 shadow-xl m-5 flex flex-row'>
      <img src="https://pricespy-75b8.kxcdn.com/product/standard/280/5113846.jpg" alt="Playstation" className='m-2 rounded-lg h-[11rem]' />
      <div className='text-lg my-4 ml-2 text-[#F4F4F4] font-light h-full flex flex-col'>
        <span>PlayStation 5</span>
        <span className='my-4'>Status: 🟢 Ledig</span>
      </div>
      <div className="right-0 h-10 bottom-0">
            <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 py-3 px-4 focus:ring-offset-gray-800" href="#">
            Registrer
                <svg className="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </a>
        </div>
    </div>
  )}

export default Utlansting