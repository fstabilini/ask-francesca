import "./App.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
// import RecipeForm from "./components/RecipeForm/RecipeForm";
// import ContactUs from "./components/ContactUs/ContactUs";
// import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AllRecipes from "./pages/AllRecipes/AllRecipes";

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

  console.log(selectedCategory);

  return (
    <div className="App">
      <Header />
      {/* <ContactUs /> */}
      {/* <Home /> */}
      <AllRecipes
        categories={categories}
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      {/* <RecipeForm /> */}
    </div>
  );
}

export default App;

// sign with google?
