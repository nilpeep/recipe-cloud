import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import PrivateRouter from "./router/PrivateRouter";
import Recipes from "./pages/Recipes/Recipes";
import About from "./pages/About/About";

import { LoginContext } from "./context/LoginContext";
import { useState } from "react";
import AppRouter from "./router/AppRouter";
function App() {
  const [user, setUser] = useState({ email: "", password: "", image: null });
  const [login, setLogin] = useState({ logged: false });
  return (
    <div className="App">
      <LoginContext.Provider value={{ user, setUser, login, setLogin }}>
        {user.password && user.email ? <Navbar /> : ""}

        <Routes>
          <Route path={"/"} element={<PrivateRouter />}>
            <Route index path={""} element={<Recipes />} />
            <Route path={"/about"} element={<About />} />
          </Route>

          <Route path={"/login"} element={<Login />} />
        </Routes>
      </LoginContext.Provider>

      {/* <AppRouter /> */}
    </div>
  );
}

export default App;
