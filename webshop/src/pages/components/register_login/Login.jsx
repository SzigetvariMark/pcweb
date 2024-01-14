import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register_Login.css";
import Register from "./Register";
import axios from "axios";

export default function Login(props) {
  const [registerPopup, setRegisterPopup] = useState(false);

  const [inputs, setInputs] = useState({
    Email: "",
    PasswordHash: "",
  });

  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/login", inputs);
    } catch (err) {
      setError(err);
    }
  };

  return props.trigger ? (
    <div className="all-form">
      <div className="auth-form-container">
        <form className="login-form">
          <label htmlFor="email" className="label--reglog">
            E-mail
          </label>
          <button
            className="close--button"
            onClick={() => props.setTrigger(false)}
          >
            X
          </button>
          <input
            type="email"
            placeholder="youremail@gmail.com"
            className="input--reglog"
            name="Email"
            onChange={handleChange}
          ></input>
          <label htmlFor="password" className="label--reglog">
            Jelszó
          </label>
          <input
            type="password"
            placeholder="***********"
            className="input--reglog"
            name="PasswordHash"
            onChange={handleChange}
          ></input>
          <button type="submit" className="login-button" onClick={handleSubmit}>
            <span>Bejelentkezés</span>
          </button>
          <button
            className="link-button"
            onClick={() => {
              setRegisterPopup(true);
              setTrigger(false);
            }}
          >
            Don't have an account? Register here.
          </button>
          <Register
            triggers={registerPopup}
            setTriggers={setRegisterPopup}
          ></Register>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
