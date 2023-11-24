import { useEffect, useState } from "react";

const GetUser = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      verifyUser(storedToken);
    } else {
      console.log("no ")
      setUser("");
    }
  }, []);

  const verifyUser = async (token) => {
    try {
      const response = await fetch(
        `http://localhost:3001/verifyUser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const data = await response.json()
        setUser(data.uid);
      } else {
        // localStorage.removeItem("token");
        console.error("Error", await response.json());
      }
    } catch (error) {
      // localStorage.removeItem("token");
      console.error("Error logging in:", error);
    }
  };
  return user;
};

export { GetUser };
