import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import PrivateRouter from "./pages/PrivateRouter";
import Recipes from "./pages/Recipes/Recipes";
import About from "./pages/About/About";
import { LoginContext } from "./context/LoginContext";
import { useState } from "react";
function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  return (
    <div className="App">
      <LoginContext.Provider value={{ user, setUser }}>
        <Navbar />

        <Routes>
          <Route path={"/"} element={<PrivateRouter />}>
            <Route index path={""} element={<Recipes />} />
            <Route path={"/about"} element={<About />} />
          </Route>
          <Route path={"/login"} element={<Login />} />
        </Routes>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
