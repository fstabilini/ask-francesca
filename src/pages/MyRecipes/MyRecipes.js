import React from "react";
import Card from "../../components/Card/Card";
import "./MyRecipes.scss";

export default function MyRecipes({ myRecipes }) {
  return (
    <div className="myRecipes-wrapper">
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
  );
}
