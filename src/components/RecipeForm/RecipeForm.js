import React, { useState } from "react";
import "./RecipeForm.scss";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Confetti from "react-confetti";
import Swal from "sweetalert2";

const RecipeForm = ({ setMyRecipes }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const [data, setData] = useState({
    idMeal: uuidv4(),
    strMeal: "",
    strCategory: "",
    strIngredients: ["", ""],
    strMeasures: ["", ""],
    strInstructions: "",
    strMealThumb: "",
    strYoutube: "",
  });

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

  const saveRecipe = async (e) => {
    e.preventDefault();
    try {
      const postDB = await axios.post("http://localhost:8080/recipes", data);
      setMyRecipes((prevRecipes) => [...prevRecipes, data]);
      setShowConfetti(true);
      console.log(showConfetti);
      setTimeout(() => {
        Swal.fire({
          icon: "success",
          title: "Congratulations!",
          text: "Your recipe has been saved successfully!",
          timer: 3000,
          showConfirmButton: false,
        });
      }, 3000);

      const initialState = {
        idMeal: "",
        strMeal: "",
        strCategory: "",
        strIngredients: ["", ""],
        strMeasures: ["", ""],
        strInstructions: "",
        strMealThumb: "",
        strYoutube: "",
      };
      setData(initialState);
      setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      alert("Error saving the recipe. Please try again later.");
    }
  };

  return (
    <form className="recipe-form" onSubmit={saveRecipe}>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={0.7 * window.innerWidth}
          recycle={false}
          colors={["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]}
        />
      )}
      ;<h1 className="recipe-form__title">Create a new recipe</h1>
      <label className="recipe-form__label">Recipe name:</label>
      <input
        type="text"
        name="strMeal"
        value={data.strMeal}
        onChange={inputChange}
        placeholder="Recipe name"
        className="recipe-form__input"
      />
      <label className="recipe-form__label">Recipe category:</label>
      <input
        type="text"
        name="strCategory"
        value={data.strCategory}
        onChange={inputChange}
        placeholder="Recipe category"
        className="recipe-form__input"
      />
      <div className="recipe-form__double">
        <div className="recipe-form__half">
          <label className="recipe-form__label">Ingredients:</label>
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
          <label className="recipe-form__label">Quantity:</label>
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
      <label className="recipe-form__label">Instructions:</label>
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
          <label className="recipe-form__label">Upload Image</label>
          <input
            type="text"
            name="strMealThumb"
            value={data.strMealThumb}
            onChange={inputChange}
            placeholder="Image URL"
            className="recipe-form__input"
          />
        </div>
        <div className="recipe-form__half">
          <label className="recipe-form__label">Upload YouTube video</label>
          <input
            type="text"
            name="strYoutube"
            value={data.strYoutube}
            onChange={inputChange}
            placeholder="Video URL"
            className="recipe-form__input"
          />
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
