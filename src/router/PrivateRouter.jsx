// import { useContext } from "react";
// import { Outlet, Navigate } from "react-router-dom";
// import { LoginContext } from "../context/LoginContext";
// import Navbar from "../components/Navbar/Navbar";

// const PrivateRouter = () => {
//   const { user } = useContext(LoginContext);
//   return (
//     <div>
//       {user.email && user.password ? (
//         <>
//           <Navbar />
//           <Outlet />
//         </>
//       ) : (
//         <Navigate to="/login" />
//       )}
//     </div>
//   );
// };

// export default PrivateRouter;
