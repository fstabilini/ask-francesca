import React from "react";
import Filter from "../../components/Filter/Filter";
import RecipesByCategory from "../../components/RecipesByCategory/RecipesByCategory";
import "./AllRecipes.scss";
import SearchBar from "../../components/SearchBar/SearchBar";

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
        <SearchBar />
        <RecipesByCategory selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
