import React from "react";
import "./Filter.scss";

const Filter = () => {
  const foodOptions = [
    "Italian Food",
    "Indian Food",
    "Latin Food",
    "Mexican Food",
    "Asian Food",
    "Vegetarian Food",
    "Vegan Food",
    "Desserts",
  ];

  return (
    <div className="filter">
      <h1 className="filter__title">Filter</h1>
      <h2 className="filter__subtitle">Type:</h2>
      <form className="filter__form">
        {foodOptions.map((food, index) => (
          <div key={index} className="filter__option">
            <input
              type="checkbox"
              id={food}
              name="foodType"
              value={food}
              className="filter__checkbox-button"
            />
            <label htmlFor={food} className="filter__label">
              {food}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Filter;
