import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import RecipeForm from "./components/RecipeForm/RecipeForm";
import ContactUs from "./components/ContactUs/ContactUs";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRecipes from "./pages/AllRecipes/AllRecipes";
import Contact from "./pages/Contact/Contact";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Favorites/Favorites";
import NewRecipe from "./pages/NewRecipe/NewRecipe";
import RecipeDetail from "./pages/RecipeDetail/RecipeDetail";

function App() {
  const [categories, setCategories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Vegetarian");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesAxios = await axios.get(
          "http://localhost:8080/recipes/categories"
        );
        setCategories(categoriesAxios.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
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
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/favorites" element={<Favorites />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/new-recipe" element={<NewRecipe />} /> */}
          <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
        </Routes>
        {/* <ContactUs /> */}
        {/* <RecipeForm /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

// agregar efectos tipo papel picado y otros que le den movimiento a la pagina
