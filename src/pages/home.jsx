import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState();
  const nav = useNavigate();

  const date = new Date();
  const time = date.toString().split(" ")[4];
  const hour = time.split(":")[0];

  function handleLogout() {
    localStorage.removeItem("loggedUser");
    nav("/");
  }

  useEffect(() => {
    const user = localStorage.getItem("loggedUser");
    setUser(JSON.parse(user));
    if (!user) nav("/");
  }, []);

  return (
    <>
      <header className="header">
        <span>{user?.email}</span>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <div className="home">
        <div>Selamat {hour > 18 ? "Malam" : hour > 12 ? "Siang" : "Pagi"}</div>
        <div>{user?.email.split("@")[0]}</div>
        <div>Time: {time}</div>
      </div>
    </>
  );
}

export default Home;
