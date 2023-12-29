import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import PrivateRouter from "./pages/PrivateRouter";
import Recipes from "./pages/Recipes/Recipes";
import About from "./pages/About/About";
function App() {
  const isLoggedIn = true;
  return (
    <div className="App">
      {isLoggedIn ? <Navbar /> : ""}

      <Routes>
        <Route path={"/"} element={<PrivateRouter isLoggedIn={isLoggedIn} />}>
          <Route index path={"/"} element={<Recipes />} />
          <Route path={"/about"} element={<About />} />
        </Route>
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
