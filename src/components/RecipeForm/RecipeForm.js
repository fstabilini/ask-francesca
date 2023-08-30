import React, { useState } from "react";
import "./RecipeForm.scss";
import axios from "axios";

const RecipeForm = () => {
  const [data, setData] = useState({
    strMeal: "",
    strCategory: "",
    strIngredients: ["", ""],
    strMeasures: ["", ""],
    strInstructions: "",
    strMealThumb: "",
    strYoutube: "",
  });

  console.log(data);

  const addField = () => {
    setData((prevData) => ({
      ...prevData,
      strIngredients: [...prevData.strIngredients, ""],
      strMeasures: [...prevData.strMeasures, ""],
    }));
  };

  const inputChange = (event) => {
    const { name, value } = event.target;

    if (name.includes("_")) {
      const [key, index] = name.split("_");
      const updatedValues = [...data[key]];
      updatedValues[parseInt(index, 10)] = value;
      setData((prevData) => ({ ...prevData, [key]: updatedValues }));
    } else {
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const saveRecipe = async () => {
    try {
      const postDB = await axios.post("http://localhost:8080/recipes", data);
      console.log(postDB);
      alert("Recipe saved successfully!");

      const initialState = {
        strMeal: "",
        strCategory: "",
        strIngredients: ["", ""],
        strMeasures: ["", ""],
        strInstructions: "",
        strMealThumb: "",
        strYoutube: "",
      };
      setData(initialState);
    } catch (err) {
      console.error(err);
      alert("Error saving the recipe. Please try again later.");
    }
  };

  return (
    <form className="recipe-form" onSubmit={saveRecipe}>
      <h1 className="recipe-form__title">Create a new recipe:</h1>
      <input
        type="text"
        name="strMeal"
        value={data.strMeal}
        onChange={inputChange}
        placeholder="Recipe name"
        className="recipe-form__input"
      />
      <div className="recipe-form__double">
        <div className="recipe-form__half">
          <h2>Ingredients:</h2>
          {data.strIngredients.map((ingredient, index) => (
            <input
              key={index}
              name={`strIngredients_${index}`}
              placeholder={`Ingredient ${index + 1}`}
              type="text"
              value={ingredient}
              onChange={inputChange}
              className="recipe-form__input"
            />
          ))}
        </div>
        <div className="recipe-form__half">
          <h2>Quantity:</h2>
          {data.strMeasures.map((measure, index) => (
            <input
              key={index}
              name={`strMeasures_${index}`}
              placeholder={`Quantity ${index + 1}`}
              type="text"
              value={measure}
              onChange={inputChange}
              className="recipe-form__input"
            />
          ))}
        </div>
      </div>
      <button className="add-button" onClick={addField} type="button">
        +
      </button>
      <h2>Instructions:</h2>
      <textarea
        className="recipe-form__instructions"
        name="strInstructions"
        value={data.strInstructions}
        onChange={inputChange}
        placeholder="Recipe instructions, be as detailed as you want"
      ></textarea>
      <div className="recipe-form__double">
        {/* dijo juajua que use label asi no se ve asi feo */}
        <div className="recipe-form__half">
          <h2>Upload Image</h2>
          <input type="file" />
        </div>
        <div className="recipe-form__half">
          <h2>Upload YouTube video</h2>
          <input type="file" />
        </div>
      </div>
      <button className="recipe-form__button" type="submit">
        Save
      </button>
    </form>
  );
};

export default RecipeForm;

// Ed me recomendó algo para subir videos de youtube que esta en slack
