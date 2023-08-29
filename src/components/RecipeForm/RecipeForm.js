import React, { useState } from "react";
import "./RecipeForm.scss";

const RecipeForm = () => {
  const [ingredients, setIngredients] = useState(["", ""]);
  const [quantities, setQuantities] = useState(["", ""]);

  const addField = () => {
    setIngredients([...ingredients, ""]);
    setQuantities([...quantities, ""]);
  };

  return (
    <div className="recipe-form">
      <h1 className="recipe-form__title">Create a new recipe:</h1>
      <div className="recipe-form__double">
        <div className="recipe-form__half">
          <h2>Ingredients</h2>
          {ingredients.map((_, index) => (
            <input
              key={index}
              type="text"
              //  placeholder="Ingredient"
            />
          ))}
        </div>
        <div className="recipe-form__half">
          <h2>Quantity</h2>
          {quantities.map((_, index) => (
            <input
              key={index}
              type="text"
              //  placeholder="Quantity"
            />
          ))}
        </div>
      </div>
      <button onClick={addField}>+</button>
      <h2>Instructions</h2>
      <textarea className="recipe-form__instructions"></textarea>
      <div className="recipe-form__double">
        <div className="recipe-form__half">
          <h2>Upload Image</h2>
          <input type="file" />
        </div>
        <div className="recipe-form__half">
          <h2>Upload YouTube video</h2>
          <input type="file" />
        </div>
      </div>
      <button className="recipe-form__save">Save</button>
    </div>
  );
};

export default RecipeForm;

// Ed me recomendó algo para subir videos de youtube que esta en slack
