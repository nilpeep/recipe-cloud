import React from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const recipe = location.state.from.recipe;
  console.log(recipe);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src={recipe?.image} alt="" />
      <h1>{recipe?.label}</h1>
      <ul>
        {recipe.ingredientLines.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Detail;
