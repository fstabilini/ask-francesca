import React from "react";
import "./Filter.scss";

const Filter = ({ categories, setSelectedCategory }) => {
  return (
    <div className="filter">
      <h1 className="filter__title">Filter</h1>
      <h2 className="filter__subtitle">Type:</h2>
      <form className="filter__form">
        {categories?.map((food, index) => (
          <div key={index} className="filter__option">
            <input
              type="radio"
              id={food}
              name="foodType"
              value={food}
              className="filter__radio-button"
              onClick={() => {
                setSelectedCategory(food);
              }}
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

// agregar categorias correctas de comidas
