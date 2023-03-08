import React from "react";
import "../Css/sidebar.scss";
import logo from "../assets/favicon.png";
import { TfiHome } from "react-icons/tfi";
import Categories from "../Components/Categories";

const Sidebar = () => {
  return (
    <div className="content-sidebar">
      <div className="logotipo">
        <img src={logo} alt="logotipo_shareme" />
        <h3>SHAREME</h3>
      </div>
      <div className="categories">
        <span>
          <TfiHome /> Home
        </span>
        <h2>Discover Categories</h2>
        <div className="list">
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
