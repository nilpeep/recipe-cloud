import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../../assests/icons/hamburger.svg";
import logout from "../../assests/icons/logout.svg";
// import { ReactComponent as Brand } from "../../assets/icons/logo.svg";
import "./Navbar.css";
import UserPng from "../../assests/icons/user.svg";
import Noodle from "../../assests/icons/noodle.svg";
import { LoginContext } from "../../context/LoginContext";

const Navbar = () => {
  // const [showNavbar, setShowNavbar] = useState(false);

  // const { user, setUser } = useContext(LoginContext);

  // const handleShowNavbar = () => {
  //   setShowNavbar(!showNavbar);
  // };

  // const handleLogOut = () => {
  //   if (window.confirm("are you sure?")) {
  //     setUser({ email: "", password: "", image: "" });
  //   }
  // };

  // return (
  //   <nav className="navbar">
  //     <div className="container">
  //       <div className="logo" style={{ display: "flex", alignItems: "center" }}>
  //         <NavLink
  //           to="/"
  //           style={{
  //             textDecoration: "none",
  //             fontSize: "24px",
  //             display: "flex",
  //             alignItems: "center",
  //           }}
  //         >
  //           <img style={{ width: "50px" }} src={Noodle} alt="" />
  //           <p className="logo-text"> RecipeCloud</p>
  //         </NavLink>
  //       </div>
  //       <div className="menu-icon" onClick={handleShowNavbar}>
  //         <img src={Hamburger} alt="" />
  //       </div>
  //       <div className={`nav-elements  ${showNavbar && "active"}`}>
  //         <ul>
  //           <li>
  //             <NavLink to="/">Recipes</NavLink>
  //           </li>
  //           <li>
  //             <NavLink to="/about">About</NavLink>
  //           </li>
  //           <li>
  //             <NavLink target="_blank" to={"https://github.com/nilpeep"}>
  //               GitHub
  //             </NavLink>
  //           </li>
  //           <li>
  //             <div>
  //               {user.email && user.password ? (
  //                 <div
  //                   style={{
  //                     display: "flex",
  //                     alignItems: "center",
  //                     gap: "1.2rem",
  //                   }}
  //                 >
  //                   <NavLink style={{ display: "flex", alignItems: "center" }}>
  //                     <img
  //                       className="profile-picture"
  //                       src={
  //                         user.image ? URL.createObjectURL(user.image) : UserPng
  //                       }
  //                       alt="Profile"
  //                       style={{ width: "30px" }}
  //                     />
  //                     <span>{user.email}</span>
  //                   </NavLink>
  //                   <img
  //                     onClick={handleLogOut}
  //                     src={logout}
  //                     alt=""
  //                     style={{ width: "30px", cursor: "pointer" }}
  //                   />
  //                 </div>
  //               ) : (
  //                 <NavLink
  //                   style={{ display: "flex", alignItems: "center" }}
  //                   to="/login"
  //                 >
  //                   <img src={UserPng} alt="" style={{ width: "30px" }} />
  //                   <span>Log in</span>
  //                 </NavLink>
  //               )}
  //             </div>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
  return <h1>navbar</h1>;
};

export default Navbar;
