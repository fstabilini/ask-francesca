import React from "react";
import Card from "../../components/Card/Card";
import "./MyRecipes.scss";

export default function MyRecipes({ myRecipes }) {
  return (
    <div className="myRecipes-wrapper">
      <div className="column"></div>

      <div className="myRecipes__middle">
        <h1 className="myRecipes__title">My Recipes</h1>

        <div className="myRecipes">
          {myRecipes?.map((recipe) => (
            <div>
              <Card
                title={recipe.strMeal}
                image={recipe.strMealThumb}
                key={recipe.idMeal}
                id={recipe.idMeal}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="column"></div>
    </div>
  );
}
