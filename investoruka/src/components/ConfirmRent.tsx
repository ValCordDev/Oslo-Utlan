import { GetUser } from "@/actions/getUserAction";
import { set } from "mongoose";
import React, { useState } from "react";

const ConfirmRent = ({ item, onClose, setRented }: any) => {
  const [confirmText, setConfirmText] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const date = new Date();
  const dateNow = date.toLocaleDateString("no-NO");
  const dateReturn = date.setDate(date.getDate() + 7);
  const formattedDate = `${date.getDate().toString().padStart(2, "0")}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;
  const user = GetUser();

  const handleConfirm = () => {
    setRented(true);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[#191919] bg-opacity-75 z-50">
      <div className="bg-[#232323] text-white rounded-lg h-5/6 w-4/5 p-5 flex ">
        <div className="w-5/6 pr-5">
          <h2 className="text-xl font-semibold mb-4">
            Lån av : <br />
            {item.title}
          </h2>
          <p>Dato: {dateNow}</p>
          <p>
            Oslo Utlån [Vestre Elvebakke 3, 0182 Oslo] [osloutlan@osloskolen.no]
          </p>
          <p>
            Utlånsperioden starter {dateNow}, og slutter {formattedDate}.
          </p>
          <br />
          <h1 className="font-bold">Utlånsvilkår</h1>
          <span>
            Låntaker bekrefter å ha mottatt utstyret i god stand og forplikter
            seg til å returnere det i samme stand, med unntak av normal
            slitasje. Låntaker er ansvarlig for å erstatte eller reparere utstyr
            som er mistet, stjålet eller skadet under utlånsperioden. Eventuelle
            kostnader knyttet til reparasjon eller erstatning skal dekkes av
            låntaker.
          </span>
          <br />
          <br />
          <h1 className="font-bold">Avslutning av kontrakten</h1>
          <span>
            Denne kontrakten kan avsluttes av begge parter med skriftlig varsel.
            Ved brudd på kontraktsvilkårene har Oslo Utlån rett til å avslutte
            kontrakten umiddelbart.
          </span>
          <div className="flex items-center mb-4 pt-5">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="confirmCheckbox">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
        <div className="flex flex-col w-full items-end">
          <img
            className=" w-full h-full object-cover rounded-md "
            src={item.imgURL}
            alt="produkt bilde"
          />
          <div className="flex justify-end pt-10">
            <button
              onClick={handleConfirm}
              className={`bg-gradient-to-tl from-blue-600 to-violet-600 text-white text-sm font-medium rounded-md py-3 px-4 focus:ring-offset-gray-800 w-30 h-10 active:scale-90 transition-all focus:outline-none focus:ring focus:ring-blue-400 ${
                !isChecked ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!isChecked}
            >
              Lån
            </button>
            <button
              onClick={onClose}
              className="ml-2 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400"
            >
              Kanseller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRent;
