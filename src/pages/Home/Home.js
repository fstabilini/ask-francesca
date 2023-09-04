import React from "react";
import "./Home.scss";
import colorLogo from "../../assets/images/color-logo.png";

export default function Home() {
  return (
    <div className="home__wrap">
      <div className="column"></div>
      <div className="home">
        <div className="home__content">
          <div className="home__logo">
            <img src={colorLogo} alt="logo" width="150px" />
          </div>
          <h1 className="home__title">Welcome to PlatePal!</h1>
          <p className="home__description">
            Hey there, food lover! 🍽️ Welcome to PlatePal, your go-to spot for
            culinary adventures. <br /> We're thrilled to have you here, and
            here's what you can expect:
          </p>
          <ul className="home__list">
            <li className="home__list-item">
              <span role="img" aria-label="search">
                🔍
              </span>{" "}
              Dive into our extensive collection in "All Recipes" and discover a
              world full of flavors.
            </li>
            <li className="home__list-item">
              <span role="img" aria-label="chef">
                👨‍🍳
              </span>{" "}
              Feeling creative? Craft your own recipes and add a personal touch
              to your meals.
            </li>
            <li className="home__list-item">
              <span role="img" aria-label="heart">
                ❤️
              </span>{" "}
              Absolutely loved a dish? Save it to your favorites and have it
              handy for those repeat cravings.
            </li>
          </ul>
          <p className="home__conclusion">
            We're all about making your everyday cooking journey delightful and
            easy. So grab your apron, and let's get cooking!
          </p>
        </div>
      </div>
      <div className="column"></div>
    </div>
  );
}
