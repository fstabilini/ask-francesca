import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import homeIcon from "../../assets/images/home.svg";
import addIcon from "../../assets/images/add.svg";
import heartIcon from "../../assets/images/heart.svg";
import mailIcon from "../../assets/images/mail.svg";
import allRecipes from "../../assets/images/all-recipes.svg";
import whiteLogo from "../../assets/images/white-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img
            src={whiteLogo}
            alt="Logo"
            width="40px"
            className="header__logo-img"
          />
        </Link>
      </div>
      <nav className="header__nav">
        <Link to={"/"} className="header__nav-link">
          <img src={homeIcon} alt="Home Icon" className="header__nav-icon" />
          Home
        </Link>
        <Link to={"/all-recipes"} className="header__nav-link">
          <img
            src={allRecipes}
            alt="All recipes"
            className="header__nav-icon"
          />
          All Recipes
        </Link>
        <Link to={"/new-recipe"} className="header__nav-link">
          <img
            src={addIcon}
            alt="New Recipe Icon"
            className="header__nav-icon"
          />
          New Recipe
        </Link>

        <Link to={"/my-recipes"} className="header__nav-link">
          <img
            src={heartIcon}
            alt="Favorites Icon"
            className="header__nav-icon"
          />
          My Recipes
        </Link>
        <Link to={"/contact"} className="header__nav-link">
          <img
            src={mailIcon}
            alt="Contact Us Icon"
            className="header__nav-icon"
          />
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;

// hice los links para los iconos, pero falta que anden y faltan los iconos tambien
// tengo que hacer un readme y the developer installation instructions
// cambiar la letra y poner una de backup
// poner un global?
