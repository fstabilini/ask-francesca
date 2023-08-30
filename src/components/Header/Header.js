import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        {/* logo cuando lo tenga */}
        <img src="" alt="Logo" className="header__logo-img" />
      </div>
      <nav className="header__nav">
        <div className="header__nav-link">Home</div>
        <div className="header__nav-link">New Recipe</div>
        <div className="header__nav-link">Favorites</div>
        <div className="header__nav-link">Contact Us</div>
      </nav>
    </header>
  );
};

export default Header;

// tengo que hacer un readme y the developer installation instructions
// cambiar la letra y poner una de backup
// poner un global?
// hacer mixins
