import React from "react";
import "./Home.scss";
import search from "../../assets/images/search.svg";

export default function Home() {
  return (
    <div className="search">
      <div className="search__bar">
        <img src={search} alt="search" />
        <input className="search__input" type="text" placeholder="Search" />
      </div>
    </div>
  );
}

// colors deberia estar en una carpeta partials asi global esta en otra aparte?
