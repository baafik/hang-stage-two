import React from "react";
import "./nav-header.css";
import Icon from "../../assets/headerIcon.png";
import user from "../../assets/icons/AiOutlineUser.png";
import search from "../../assets/icons/AiOutlineSearch.png";
import cart from "../../assets/icons/AiOutlineShoppingCart.png";

const NavHeader: React.FC = () => {
  return (
    <header className="header-view">
      {/* Your navigation header content goes here */}
      <div className="image-view">
        <img src={Icon} alt="header icon" />
      </div>
      <div className="wrapper">
        <ul className="nav-bar ul">
          <li className="nav-bar ul li">
            <a className="nav-bar a:hover" href="/">
              Home
            </a>
          </li>
          <li className="nav-bar ul li">
            <a className="nav-bar a:hover" href="/about">
              Product
            </a>
          </li>
          <li className="nav-bar ul li">
            <a className="nav-bar a:hover" href="/contact">
              Shop
            </a>
          </li>
        </ul>

        {/* section for icons */}
        <div className="icons-view">
          <ul className="nav-bar ul">
            <li className="nav-bar ul li">
              <div>
                <img src={search} alt="header icon" />
              </div>
            </li>
            <li className="nav-bar ul li">
              <div>
                <img src={cart} alt="header icon" />
              </div>
            </li>
            <li className="nav-bar ul li">
              <div>
                <img src={user} alt="header icon" />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* icons section */}
    </header>
  );
};

export default NavHeader;
