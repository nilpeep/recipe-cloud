import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Recipes = () => {
  const [secim, setSecim] = useState("");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  const navigate = useNavigate();

  const API_KEY = "68ff7609e8b677f876cea016e1f0b5f4";
  const APP_ID = "abff9958";

  const URL = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${API_KEY}&mealType=${secim}`;

  const handleSelectChange = (event) => {
    setSecim(event.target.value);
  };

  const getRecipes = () => {
    console.log(API_KEY);
    axios.get(URL).then((res) => setRecipes(res.data.hits));
  };
  console.log(recipes);

  const handleSearch = (e) => {
    e.preventDefault();
    getRecipes();
    console.log(secim, search);
  };

  // useEffect(() => {
  //   getRecipes();
  // }, []);

  return (
    <div className="recipes">
      <form onSubmit={handleSearch}>
        <input onChange={(e) => setSearch(e.target.value)} type="search" />
        <button type="submit">Search</button>

        <select id="secim" value={secim} onChange={handleSelectChange}>
          <option value="Breakfast">BREAKFAST</option>
          <option value="Lunch">LUNCH</option>
          <option value="Dinner">DINNER</option>
          <option value="Snack">SNACK</option>
          <option value="Brunch">BRUNCH</option>
          <option value="Teatime">TEA TIME</option>
        </select>
      </form>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: "2rem",
          justifyContent: "center",
        }}
      >
        {recipes &&
          recipes.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                navigate("/recipes/detail/:id", {
                  state: { from: item },
                })
              }
            >
              <img src={item.recipe.image} alt="" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recipes;
