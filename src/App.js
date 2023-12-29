import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import PrivateRouter from "./router/PrivateRouter";
import Recipes from "./pages/Recipes/Recipes";
import About from "./pages/About/About";

import LogInProvider, { LoginContext } from "./context/LoginContext";
import { useState } from "react";
import AppRouter from "./router/AppRouter";
function App() {
  return (
    <div className="App">
      <LogInProvider>
        <AppRouter />
      </LogInProvider>
    </div>
  );
}

export default App;
