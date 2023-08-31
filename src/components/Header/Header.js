import React from "react";
import "./Header.scss";
import homeIcon from "../../assets/images/home.svg";
import addIcon from "../../assets/images/add.svg";
import heartIcon from "../../assets/images/heart.svg";
import mailIcon from "../../assets/images/mail.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="" alt="Logo" className="header__logo-img" />
      </div>
      <nav className="header__nav">
        <div className="header__nav-link">
          <img
            // src={homeIcon}
            // alt="Home Icon"
            className="header__nav-icon"
          />
          Home
        </div>
        <div className="header__nav-link">
          <img
            // src={addIcon}
            // alt="New Recipe Icon"
            className="header__nav-icon"
          />
          New Recipe
        </div>
        <div className="header__nav-link">
          <img
            // src={heartIcon}
            // alt="Favorites Icon"
            className="header__nav-icon"
          />
          Favorites
        </div>
        <div className="header__nav-link">
          <img
            // src={mailIcon}
            // alt="Contact Us Icon"
            className="header__nav-icon"
          />
          Contact Us
        </div>
      </nav>
    </header>
  );
};

export default Header;

// tengo que hacer un readme y the developer installation instructions
// cambiar la letra y poner una de backup
// poner un global?
// hacer mixins
