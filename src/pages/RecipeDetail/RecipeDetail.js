import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RecipeDetail.scss";

export default function RecipeDetail() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/recipes/recipe/${id}`)
      .then((res) => setData(res.data.meals[0]))
      .catch((err) => console.error(err));
  }, [id]);

  const ingredientsAndMeasures = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = data["strIngredient" + i];
    const measure = data["strMeasure" + i];

    if (ingredient && ingredient.trim() !== "") {
      ingredientsAndMeasures.push({
        ingredient: ingredient,
        measure: measure,
      });
    }
  }

  function returnBack() {
    navigate("/all-recipes");
  }

  const videoId = data.strYoutube?.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <button onClick={returnBack}>Return to all recipes</button>
      <h1>{data.strMeal}</h1>
      <h2>{data.strCategory}</h2>
      <div className="image-ingredients">
        <img src={data.strMealThumb} alt={data.strMeal} />
        <ul>
          {ingredientsAndMeasures?.map((item, index) => (
            <li key={index}>
              {item.ingredient} - {item.measure}
            </li>
          ))}
        </ul>
      </div>

      <h2>Instructions</h2>
      <p>{data.strInstructions}</p>
      <h2>Video</h2>
      <iframe width="560" height="315" src={embedUrl} allowFullScreen></iframe>
    </div>
  );
}
