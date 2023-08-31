import React from "react";
import "./SearchBar.scss";
import search from "../../assets/images/search.svg";

export default function Home() {
  return (
    <div className="search">
      <div className="search__bar">
        <img className="search__icon" src={search} alt="search" />
        <input
          className="search__input"
          type="text"
          placeholder="Search Recipes"
        />
      </div>
    </div>
  );
}
