import Image from "next/image";
import { Inter } from "next/font/google";
import { CiUser } from "react-icons/ci";
import { useState, useEffect } from "react";
import { GetUser } from "@/actions/getUser.jsx";

const inter = Inter({ subsets: ["latin"] });

interface User {
  mail: string;
  name: string;
  renting: string[];
  dateCreated: string;
}

export default function profil() {
  const [user, setUser] = useState<User>();
  const username = GetUser();
  useEffect(() => {
    getUser();
    console.log(username);
  }, []);

  const getUser = async () => {
    const res = await fetch(
      `http://localhost:3001/getUser?username=${username}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      const data = await res.json();
      setUser(data.user);
    } else if (res.status === 400) {
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <main className="h-screen w-screen">
      <div className="flex justify-center w-full h-screen flex-col">
        <CiUser className="text-white flex w-screen justify-center text-6xl font-extrabold" />
        <span className="text-white flex w-screen justify-center text-6xl mt-5 mb-20 font-bold">
          Brukerinformasjon
        </span>
        <div className="flex w-screen justify-center">
          <div className="text-white text-lg mt-5 font-semibold justify-center flex flex-col text-right mr-5">
            <span className="mt-5">Navn</span>
            <span className="mt-5">Epost</span>
            <span className="mt-5">Bydel</span>
            <span className="mt-5 mb-20">Fødselsdato</span>
          </div>
          <div className="text-white text-lg mt-5 font-semibold justify-center flex flex-col text-left ml-5">
            <span className="mt-5">Iver Morland Karlsvik</span>
            <span className="mt-5">iver.sleeperbuild@gmail.com</span>
            <span className="mt-5">Nordre Aker</span>
            <span className="mt-5 mb-20">09. Oktober, 2006</span>
          </div>
        </div>
      </div>
    </main>
  );
}
