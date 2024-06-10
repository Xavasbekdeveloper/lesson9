import React from "react";
import { FaYoutube } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <FaYoutube />
          <span>YouTube</span>
        </div>
        <div className="header__search">
          <input type="text" placeholder="Search" />
          <button>
            <IoSearch />
          </button>
        </div>
        <div className="header__left">
          <div></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
