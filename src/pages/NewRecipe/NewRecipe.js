import React from "react";
import RecipeForm from "../../components/RecipeForm/RecipeForm";

export default function NewRecipe({ setMyRecipes }) {
  return (
    <div>
      <RecipeForm setMyRecipes={setMyRecipes} />
    </div>
  );
}
