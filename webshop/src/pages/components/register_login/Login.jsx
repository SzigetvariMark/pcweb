import React, { useState } from "react";
import "./Register_Login.css";

export default function Login(props ,{ onClose }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="all-form">
      <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
        <button className="close--button" onClick={onClose}>
        X
        </button>
          <label htmlFor="email" className="label--reglog">
            E-mail
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            className="input--reglog"
          ></input>
          <label htmlFor="password" className="label--reglog">
            Jelszó
          </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="***********"
            className="input--reglog"
          ></input>
          <button type="submit" className="login-button">
            <span>Bejelentkezés</span>
          </button>
          <button
            className="link-button"
            onClick={() => props.onFormSwitch("register")}
          >
            Don't have an account? Register here.
          </button>
        </form>
      </div>
    </div>
  );
}
