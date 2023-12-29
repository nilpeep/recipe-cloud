import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import PrivateRouter from "./PrivateRouter";
import Detail from "../pages/Details/Detail";
import About from "../pages/About/About";
import Recipes from "../pages/Recipes/Recipes";
// import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
  return (
    <div>
      <h1>AppRouter</h1>
      <Routes>
        <Route path={"/"} element={<PrivateRouter />}>
          <Route index path={""} element={<Recipes />} />
          <Route path={"/about"} element={<About />} />
        </Route>

        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
