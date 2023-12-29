import React, { useContext } from "react";
import "./Login.css"; // CSS dosyası için
import { ReactComponent as Women } from "../../assests/icons/login.svg";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { user, setUser, createUser, logIn, signUpProvider } =
    useContext(LoginContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giriş işlemleri için burada API çağrısı yapılabilir
    createUser(user.email, user.password);

    console.log("Giriş yapıldı:", { user });
  };

  return (
    <div className="login-form-container">
      <Women className="lady" />
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />
        </div>
        <button
          className="loginBtn"
          type="button"
          onClick={() => logIn(user.email, user.password)}
        >
          Sign in
        </button>
        <button className="loginBtn" type="submit">
          Register
        </button>
        <button
          onClick={() => signUpProvider()}
          className="loginBtn"
          type="button"
        >
          Signup with google
        </button>
      </form>
    </div>
  );
}

export default Login;
