import React from "react";
import Filter from "../../components/Filter/Filter";
import RecipesByCategory from "../../components/RecipesByCategory/RecipesByCategory";
import "./AllRecipes.scss";

export default function AllRecipes({
  categories,
  setSelectedCategory,
  selectedCategory,
}) {
  return (
    <div className="allRecipes">
      <Filter
        categories={categories}
        setSelectedCategory={setSelectedCategory}
      />
      <div>
        <RecipesByCategory selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
