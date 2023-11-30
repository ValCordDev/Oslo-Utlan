import { set } from "mongoose";
import React, { useState } from "react";

const ConfirmReturn = ({ onClose, setReturnCode, item, setReturned }: any) => {
  const [confirmText, setConfirmText] = useState("");

  const handleConfirm = () => {
    console.log("confirming");
    if (confirmText !== item.code) {
      alert("Incorrect code")
      return;
    }
    handleReturnConfirm();
    onClose();
  };

  const handleReturnConfirm = () => {
    setReturnCode(confirmText);
    setReturned(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-[#232323] rounded-lg p-6 max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-white">Confirm Return</h2>
        <div className="relative z-0 w-full mb-5 group">
          <input value={confirmText} onChange={(e) => setConfirmText(e.target.value)} type="text" name="confirm_code" id="confirm_code" className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer" placeholder=" " required />
          <label htmlFor="confirm_code" className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-autopeer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm return code</label>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleConfirm}
            className="btn inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 text-white text-sm font-medium rounded-md py-3 px-4 focus:ring-offset-gray-800 w-30 h-10 active:scale-90 transition-all"
          >
            Confirm Return
          </button>
          <button
            onClick={onClose}
            className="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmReturn;
