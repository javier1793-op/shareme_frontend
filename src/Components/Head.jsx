import React, { useEffect, useState } from "react";
import "../Css/head.scss";
import { Route, Routes, Link } from "react-router-dom";
import { TfiSearch } from "react-icons/tfi";
import { client } from "../client";
import Perfil from "../assets/perfil-miniatura.jpg";
import UserProfile from "./UserProfile";
import { userQuery } from "../Utils/data";

const Head = () => {
  const [user, setUser] = useState();

  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.sub);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
    console.log(user);
  }, []);

  return (
    <div className="container-head">
      <div className="search">
        <TfiSearch className="icon" />
        <input type="text" placeholder="Search.." />
      </div>

      <div className="user-session">
        <img src={user?.image} alt="photo-user" />
      </div>
    </div>
  );
};

export default Head;
