import { createContext } from "react";
import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

export const isLoggedIn = createContext();

const LogInProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "", image: null });
  const [login, setLogin] = useState({ logged: false });
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const { email, password, image } = user;

  const createUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/recipes");
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  const logIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // console.log(userCredential);
      navigate("/recipes");
      console.log("logged in succesfully!!");
    } catch (error) {}
  };

  const logOut = () => {
    signOut(auth);
    navigate("/login");
  };

  const signUpProvider = () => {
    //? Google ile giriş yapılması için kullanılan firebase metodu
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log(result);
        navigate("/recipes");
        console.log(currentUser);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        console.log("hata");
      });
  };

  const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
        sessionStorage.setItem(
          "user",
          JSON.stringify({ email, displayName, photoURL })
        );
      } else {
        // User is signed out
        setCurrentUser(false);
        sessionStorage.removeItem("user");
      }
    });
  };

  useEffect(() => {
    userObserver();
  }, []);

  return (
    <LoginContext.Provider
      value={{
        user,
        setUser,
        createUser,
        logIn,
        logOut,
        signUpProvider,
        currentUser,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LogInProvider;
