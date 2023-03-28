import React from "react";
import "../Css/sidebar.scss";
import {Route, Routes, Link} from 'react-router-dom'
import logo from "../assets/favicon.png";
import { TfiHome } from "react-icons/tfi";
import Categories from "../Components/Categories";

const Sidebar = () => {
  return (
    <div className="content-sidebar">
      <div className="logotipo">
        <Link to='/'>
        <img src={logo} alt="logotipo_shareme" />
        </Link>
        <h3>SHAREME</h3>
      </div>
      <div className="categories">
        <span>
          <TfiHome /> Home
        </span>
        <h2>Discover Categories</h2>
        <div className="list">
          <Categories />
          <Categories />
          <Categories />
          <Categories />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
