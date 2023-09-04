import React from "react";
import RecipeForm from "../../components/RecipeForm/RecipeForm";
import "./NewRecipe.scss";

export default function NewRecipe({ setMyRecipes }) {
  return (
    <div className="newRecipe-container">
      <div className="column"></div>
      <RecipeForm setMyRecipes={setMyRecipes} />
      <div className="column"></div>
    </div>
  );
}
