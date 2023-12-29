import React, { useContext } from "react";
import "./Login.css"; // CSS dosyası için
import Women from "../../assests/icons/login.svg";
import { LoginContext } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Login() {
  // const { user, setUser } = useContext(LoginContext);

  // const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Giriş işlemleri için burada API çağrısı yapılabilir
  //   console.log("Giriş yapıldı:", { user });

  //   navigate(-1);
  // };

  return (
    <div className="loginDiv">
      <h1>login</h1>
      {/* <img className="lady" src={Women} alt="" />
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <div className="form-group">
          <div>
            {user.image && (
              <img
                className="profile-picture"
                src={URL.createObjectURL(user.image)}
                alt="Profile"
              />
            )}
          </div>
          <label htmlFor="email">E-mail</label>
          <input
            // type="email"
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
        <div className="file-input">
          <input
            id="file"
            type="file"
            onChange={(e) => setUser({ ...user, image: e.target.files[0] })}
          />
          <label htmlFor="file">
            {user.image ? `${user.image.name}` : "Choose Picture"}
          </label>
        </div>
        {user.image ? (
          <sup
            onClick={(e) => {
              setUser({ ...user, image: "" });
            }}
            id="remove-pp"
          >
            remove image <sup>X</sup>
          </sup>
        ) : (
          ""
        )}

        <button type="submit">Log in</button>
      </form> */}
    </div>
  );
}

export default Login;
