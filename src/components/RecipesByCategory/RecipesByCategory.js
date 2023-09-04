import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import "./RecipesByCategory.scss";

export default function RecipesByCategory({ selectedCategory }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/recipes/categories/${selectedCategory}`)
      .then((res) => setRecipes(res.data))
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  return (
    <div className="cardContainer">
      {recipes?.map((recipe) => (
        <div key={recipe.idMeal}>
          <Card
            title={recipe.strMeal}
            image={recipe.strMealThumb}
            id={recipe.idMeal}
          />
        </div>
      ))}
    </div>
  );
}
