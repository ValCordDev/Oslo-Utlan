import React, { useState } from "react";
import { LockIcon } from "./LockIcon";
import { MailIcon } from "./MailIcon";

// Import statements

export default function Logginn() {
    const [loggInnBoolean, setLoggInnBoolean] = useState(false)
  
    return (
      <>
        <button onClick={() => setLoggInnBoolean(true)} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 py-3 px-4 focus:ring-offset-gray-800 active:scale-90 transition-all">
            Logg Inn
        </button>
        {loggInnBoolean ? (
            <>
            <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm"></div>
            <div className="flex justify-center items-center fixed h-screen w-screen top-0 left-0">   
                <div className=" flex flex-col h-3/5 w-96 bg-[#232323] rounded-3xl border-gray-500 border-[1.5px]">
                    <div className=" flex justify-between items-center w-auto p-5">
                        <p className=" text-gray-200 font-bold text-xl">Logg inn</p>
                        <button onClick={() => setLoggInnBoolean(false)} className=" bg-transparent text-gray-200 hover:bg-white/10 rounded-3xl w-8 h-8 flex justify-center items-center active:scale-90 transition-all">
                            ✕
                        </button>
                    </div>
                    <div className=" p-5">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-autopeer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer" placeholder=" " required />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                        </div>
                        <div className="mt-8 gap-3 flex justify-between">
                            <button className=" bg-transparent underline text-indigo-500 text-sm border-[none] active:scale-90 transition-all">Registrer</button>
                            <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 py-3 px-4 focus:ring-offset-gray-800 active:scale-90 transition-all" href="#">
                            Logg inn
                                <svg className="flex-shrink-0 w-4 h-4" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ) : (null)}
      </>
    );
  }