import React, { useState } from "react";
import "../css/HeaderMenu.css";

const MENU = ["Collections", "Men", "Women", "About", "Contact"];

const HeaderMenu = ({ toggleMenu }) => {
  return (
    <div className="container header-menu-mobile p-5 d-block d-md-none">
      <div className="text-end mb-5 d-md-none d-block">
        <picture id="" className="">
          <img
            id="close-button"
            className="d-inline-block"
            src={`${process.env.PUBLIC_URL}/images/icon-close.svg`}
            alt="close button"
            onClick={toggleMenu}
          />
        </picture>
      </div>
      <ul id="" className="list-unstyled">
        {MENU.map((item, index) => (
          <li className="" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeaderMenu;
