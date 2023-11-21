import React, { useState } from "react";
import { LockIcon } from "./LockIcon";
import { MailIcon } from "./MailIcon";

// Import statements

export default function Logginn() {
    const [loggInnBoolean, setLoggInnBoolean] = useState(false)
  
    return (
      <>
        <button onClick={() => setLoggInnBoolean(true)} className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 py-3 px-4 focus:ring-offset-gray-800">
            Logg Inn
        </button>
        {loggInnBoolean ? (
            <div className="">
                <p>hei</p>
            </div>
        ) : (null)}
      </>
    );
  }