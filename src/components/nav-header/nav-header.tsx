import React from "react";
import "./nav-header.css";
import Icon from "../../assets/headerIcon.png";
import userIcon from "../../assets/icons/AiOutlineUser.png";
import searchIcon from "../../assets/icons/AiOutlineSearch.png";
import cartIcon from "../../assets/icons/AiOutlineShoppingCart.png";

const NavHeader: React.FC = () => {
  return (
    <header className="header-view">
      <div className="image-view">
        <img src={Icon} alt="header icon" className="header-icon" />
      </div>
      <div className="wrapper">
        <ul className="nav-bar">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about">Product</a>
          </li>
          <li className="nav-item">
            <a href="/contact">Shop</a>
          </li>
        </ul>
        <div className="icons-view">
          <ul className="icon-list">
            <li className="icon-item">
              <img src={searchIcon} alt="search icon" />
            </li>
            <li className="icon-item">
              <img src={cartIcon} alt="cart icon" />
            </li>
            <li className="icon-item">
              <img src={userIcon} alt="user icon" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
