import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../../assests/icons/hamburger.svg";
// import { ReactComponent as Brand } from "../../assets/icons/logo.svg";
import "./Navbar.css";
import UserPng from "../../assests/icons/user.svg";
import Noodle from "../../assests/icons/noodle.svg";
import { LoginContext } from "../../context/LoginContext";
import logout from "../../assests/icons/logout.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const { logOut, currentUser } = useContext(LoginContext);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo" style={{ display: "flex", alignItems: "center" }}>
          <NavLink
            to="/recipes"
            style={{
              textDecoration: "none",
              fontSize: "24px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img style={{ width: "50px" }} src={Noodle} alt="" />
            <p className="logo-text"> RecipeCloud</p>
          </NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={Hamburger} alt="" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/recipes">Recipes</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink target="_blank" to={"https://github.com/nilpeep"}>
                GitHub
              </NavLink>
            </li>
            <li>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <img
                  src={currentUser?.photoURL || UserPng}
                  alt=""
                  style={{ width: "30px" }}
                />
                <NavLink to="/login">
                  {currentUser && currentUser.email}
                </NavLink>
                <img
                  onClick={() => logOut()}
                  className="logout"
                  src={logout}
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
