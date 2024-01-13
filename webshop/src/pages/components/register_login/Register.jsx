import React, { useState } from "react";
import "./Register_Login.css";

export default function Register(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return props.triggers ? (
    <div className="all-form">
      <div className="auth-form-container">
        <form className="register-form" onSubmit={handleSubmit}>
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
            value={name}
            name="name"
            id="name"
            placeholder="Vezetéknév"
            className="input--reglog"
          ></input>
          <label htmlFor="name" className="label--reglog">
            Keresztnév
          </label>
          <input
            value={name}
            name="name"
            id="name"
            placeholder="Keresztnév"
            className="input--reglog"
          ></input>

          <label htmlFor="email" className="label--reglog">
            Email
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
          <label htmlFor="password" className="label--reglog">
            Ismételd meg a jelszavadat
          </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="***********"
            className="input--reglog"
          ></input>
          <button type="submit" className="register-button">
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
