import { GetUser } from "@/actions/getUserAction";
import React, { useEffect } from "react";
import { useState } from "react";

const Utlansting = ({ item }: any) => {
  const [returnCode, setReturnCode] = useState("");
  const uid = GetUser();
  const [dateRented, setDateRented] = useState<Date | null>(null);
  const [returnDurationInDays] = useState<number>(7); // Example duration within which the item should be returned

  useEffect(() => {
    if (item.dateRented) {
      setDateRented(new Date(item.dateRented));
    }
  }, [item.dateRented]);

  const calculateTimeLeft = () => {
    if (!dateRented) return null;

    const currentDate = new Date();
    const expectedReturnDate = new Date(dateRented);
    expectedReturnDate.setDate(dateRented.getDate() + returnDurationInDays);

    const timeDiff = expectedReturnDate.getTime() - currentDate.getTime();

    const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

    return { daysLeft, hoursLeft, minutesLeft };
  };

  const timeLeft = calculateTimeLeft();
  const returnItem = async () => {
    const response = await fetch(
      `http://localhost:3001/return?itemID=${item._id}&userID=${uid}&code=${returnCode}`,
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
    } else {
      console.log(await response.json().then((data) => data.status));
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReturnCode(e.target.value); // Update the 'returnCode' state
    console.log(returnCode);
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
            {!item.isRented ? (
              <p>🟢 Ledig</p>
            ) : (
              <p>🔴 Ikke ledig (ledig om {timeLeft?.daysLeft} dager)</p>
            )}
          </span>
          {/* {item.isRented && (
            <span className="text-xs">
              Leiet ut til: <br /> {item.renter}
            </span>
          )} */}
          {item.renter == uid ? ( // TODO: replace with actual user (with token + username in a verifyuser function)
            <>
              <input
                type="text"
                placeholder="Enter return code"
                value={returnCode}
                onChange={handleInputChange}
                className="border rounded px-2 py-1"
              />
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
            </>
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
