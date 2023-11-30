import { set } from "mongoose";
import React, { useState } from "react";

const ConfirmReturn = ({ onClose, setReturnCode, item, setReturned }: any) => {
  const [confirmText, setConfirmText] = useState("");

  const handleConfirm = () => {
    console.log("confirming");
    if (confirmText !== item.code) {
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
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Confirm Return</h2>
        <input
          type="text"
          value={confirmText}
          onChange={(e) => setConfirmText(e.target.value)}
          placeholder="Type 'confirm' to proceed"
          className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleConfirm}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
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
