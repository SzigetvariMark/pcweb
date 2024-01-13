import React, { useState } from "react";
import axios from "axios";
import "./Register_Login.css";

export default function Register(props) {
  const [inputs, setInputs] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    PasswordHash: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        inputs
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return props.triggers ? (
    <div className="all-form">
      <div className="auth-form-container">
        <form className="register-form">
          <label htmlFor="name" className="label--reglog">
            Vezetéknév
          </label>
          <button
            className="close--button"
            onClick={() => props.setTriggers(false)}
          >
            X
          </button>
          <input
            name="FirstName"
            placeholder="Vezetéknév"
            className="input--reglog"
            onChange={handleChange}
          ></input>
          <label htmlFor="name" className="label--reglog">
            Keresztnév
          </label>
          <input
            name="LastName"
            placeholder="Keresztnév"
            className="input--reglog"
            onChange={handleChange}
          ></input>

          <label htmlFor="email" className="label--reglog">
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            placeholder="youremail@gmail.com"
            className="input--reglog"
            name="Email"
          ></input>
          <label htmlFor="password" className="label--reglog">
            Jelszó
          </label>
          <input
            onChange={handleChange}
            type="password"
            placeholder="***********"
            className="input--reglog"
            name="PasswordHash"
          ></input>
          <label htmlFor="password" className="label--reglog">
            Ismételd meg a jelszavadat
          </label>
          <input
            onChange={handleChange}
            type="password"
            placeholder="***********"
            className="input--reglog"
          ></input>
          <button
            type="submit"
            className="register-button"
            onClick={handleSubmit}
          >
            <span>Regisztráció</span>
          </button>
          <button
            className="link-button"
            onClick={() => props.setTriggers(false)}
          >
            Already have an account? Login here.
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}
