import { createContext } from "react";
import { useState } from "react";

export const LoginContext = createContext();

export const isLoggedIn = createContext();

const LogInProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "", image: null });
  const [login, setLogin] = useState({ logged: false });
  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LogInProvider;
