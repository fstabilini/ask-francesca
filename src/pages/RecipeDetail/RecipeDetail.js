import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./RecipeDetail.scss";

export default function RecipeDetail({ myRecipes, setMyRecipes }) {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [favorite, setFavorite] = useState(false);
  const [newRecipe, setNewRecipe] = useState({
    idMeal: "",
    strMeal: "",
    strCategory: "",
    strInstructions: "",
    strMealThumb: "",
    strYoutube: "",
    strIngredients: [],
    strMeasures: [],
  });

  const ingredients = [];
  const measures = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = data["strIngredient" + i];
    const measure = data["strMeasure" + i];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(ingredient);
      measures.push(measure);
    }
  }

  useEffect(() => {
    setNewRecipe((prevState) => ({
      ...prevState,
      idMeal: data.idMeal,
      strMeal: data.strMeal,
      strCategory: data.strCategory,
      strInstructions: data.strInstructions,
      strMealThumb: data.strMealThumb,
      strYoutube: data.strYoutube,
      strIngredients: ingredients,
      strMeasures: measures,
    }));
  }, [data]);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/recipes/recipe/${id}`)
      .then((res) => {
        if (res.data.meals) {
          setData(res.data.meals[0]);
        } else {
          setData(res.data);
        }
      })
      .catch((err) => console.error(err));

    checkIfRecipeIsFavorite(myRecipes);
  }, [id]);

  const checkIfRecipeIsFavorite = (recipes) => {
    const idFound = recipes.find((item) => item.idMeal === id);
    if (idFound) {
      setFavorite(true);
    }
  };

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

  function isFavorite() {
    if (favorite === false) {
      setFavorite(true);
      axios.post("http://localhost:8080/recipes", newRecipe);
      setMyRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
    } else {
      setFavorite(false);
      axios
        .delete(`http://localhost:8080/recipes/recipe/${id}`)
        .then((res) => {
          const updatedRecipes = myRecipes.filter(
            (recipe) => recipe.idMeal !== id
          );
          setMyRecipes(updatedRecipes);
        })
        .catch((err) => console.log(err));
    }
  }

  const videoId = data.strYoutube?.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="detail__title-container">
      {/* <button className="detail__return-button" onClick={returnBack}>
        Return to all recipes
      </button> */}
      {favorite ? (
        <button onClick={isFavorite} className="detail__favorite-button">
          <ion-icon
            style={{ color: "red", fontSize: "30px" }}
            name="heart"
          ></ion-icon>
        </button>
      ) : (
        <button onClick={isFavorite} className="detail__favorite-button">
          <ion-icon
            style={{ color: "black", fontSize: "30px" }}
            name="heart-outline"
          ></ion-icon>
        </button>
      )}
      <h1 className="detail__title-container__title">{data.strMeal}</h1>
      <h2 className="detail__title-container__category">{data.strCategory}</h2>

      <div className="detail__image-ingredients">
        <img
          className="detail__image"
          src={data.strMealThumb}
          alt={data.strMeal}
        />

        <ul className="detail__ingredients-list">
          {ingredientsAndMeasures?.map((item, index) => (
            <li className="detail__ingredient" key={index}>
              {item.ingredient} - {item.measure}
            </li>
          ))}
        </ul>
      </div>

      <h2 className="detail__sub-title">Instructions</h2>
      <p className="detail__instructions">{data.strInstructions}</p>

      <h2 className="detail__sub-title">Video</h2>
      <iframe
        className="detail__video"
        width="560"
        height="315"
        src={embedUrl}
        allowFullScreen
      ></iframe>
      <button className="detail__return-button" onClick={returnBack}>
        Return to all recipes
      </button>
    </div>
  );
}
