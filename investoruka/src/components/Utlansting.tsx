import { GetUser } from "@/actions/getUserAction";
import React from "react";

const Utlansting = ({ item }: any) => {
  const uid = GetUser();
  const returnItem = async () => {
    const response = await fetch(
      `http://localhost:3001/return?itemID=${item._id}&userID=${uid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("Du har returnert " + item.title); // bør endre til en bedre alert
      window.location.reload();
    }
  };
  const rentItem = async () => {
    const response = await fetch(
      `http://localhost:3001/rent?itemID=${item._id}&userID=${uid}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      alert("Du har lånt " + item.title); // bør endre til en bedre alert
      window.location.reload();
    }
  };

  return (
    <div className="bg-[#191919] rounded-2xl w-[32rem] h-48 shadow-xl flex flex-row">
      <img
        src={item.imgURL}
        alt="Playstation"
        className="m-2 rounded-lg h-[11rem] w-[11rem]"
        style={{ objectFit: "cover" }}
      />
      <div className="text-lg my-4 ml-2 text-[#F4F4F4] font-light h-full w-full flex flex-col">
        <span>{item.title}</span>
        <span className=" text-xs pr-3">{item.description}</span>
        <div className="flex justify-between items-end h-full w-full pb-8 pr-5">
          <span>
            Status: <br />
            {!item.isRented ? <p>🟢 Ledig</p> : <p>🔴 Ikke ledig</p>}
          </span>
          {/* {item.isRented && (
            <span className="text-xs">
              Leiet ut til: <br /> {item.renter}
            </span>
          )} */}
          {item.renter == uid ? ( // TODO: replace with actual user (with token + username in a verifyuser function)
            <a
              className="btn inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 text-white text-sm font-medium rounded-md py-3 px-4 focus:ring-offset-gray-800 w-30 h-10 active:scale-90 transition-all"
              href="#"
              onClick={() => returnItem()}
            >
              Returner
              <svg
                className="flex-shrink-0 w-4 h-4"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          ) : (
            <a
              className="btn inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 text-white text-sm font-medium rounded-md py-3 px-4 focus:ring-offset-gray-800 w-30 h-10 active:scale-90 transition-all"
              href="#"
              onClick={() => rentItem()}
            >
              Lån
              <svg
                className="flex-shrink-0 w-4 h-4"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Utlansting;
