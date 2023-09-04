import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRecipes from "./pages/AllRecipes/AllRecipes";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NewRecipe from "./pages/NewRecipe/NewRecipe";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";
import MyRecipes from "./pages/MyRecipes/MyRecipes";

function App() {
  const [categories, setCategories] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Vegetarian");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesAxios = await axios.get(
          "http://localhost:8080/recipes/categories"
        );
        setCategories(categoriesAxios.data);

        const myRecipesAxios = await axios.get(
          "http://localhost:8080/recipes/favorites"
        );
        setMyRecipes(myRecipesAxios.data.myRecipes);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div className="App__header">
          <Header />
        </div>
        <div className="App__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/all-recipes"
              element={
                <AllRecipes
                  categories={categories}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                />
              }
            />
            <Route
              path="/new-recipe"
              element={<NewRecipe setMyRecipes={setMyRecipes} />}
            />
            <Route
              path="/my-recipes"
              element={<MyRecipes myRecipes={myRecipes} />}
            />
            <Route
              path="/recipe-detail/:id"
              element={
                <RecipeDetail
                  setMyRecipes={setMyRecipes}
                  myRecipes={myRecipes}
                />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
