import React from 'react'

const Card = () => {
  return (
    <div className="flex flex-col justify-center align-middle mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-screen h-full">
        <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                Oslo
                <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> Utlån</span>
            </h1>
        </div>

        <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-400"><span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent font-bold">Oslo Utlån</span> gir lokalsamfunnet tilgang til ulike utstyr og teknologiske produkter, som kameraer og skjermer, gjennom sin utlånssentral.</p>
        </div>

        <div className="mt-8 gap-3 flex justify-center">
            <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 py-3 px-4 focus:ring-offset-gray-800" href="#">
            Registrer
                <svg className="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </a>
        </div>
    </div>
  )
}

export default Card